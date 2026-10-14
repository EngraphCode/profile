/**
 * The swearing gate through a literal runtime (tests never do IO): git's
 * answers are stubbed by the read asked for, the staged listing, the numstat
 * and each `git show :0:<path>` from an index fixture. The gate has no other
 * read port, so a staged file's content can only come from that index. The
 * words come from the lexicon, so this file names none of them; the gate is
 * what reads this file at its own commit.
 */
import { describe, expect, it } from 'vitest';

import { PROFANITY_LEXICON } from '../profanity/lexicon.js';

import { PROFANITY_LEXICON_HOME, runProfanityStaged } from './repo-check-profanity.js';
import type { RepoCheckCommandResult, RepoCheckRuntime } from './repo-check-types.js';

const ROOT = '/repo';

const answered = (stdout: string): RepoCheckCommandResult => ({
  status: 0,
  signal: null,
  stdout,
  stderr: '',
});

const refused = (stderr: string): RepoCheckCommandResult => ({
  status: 128,
  signal: null,
  stdout: '',
  stderr,
});

interface Fixture {
  /** The staged paths, as `git diff --cached --name-only` lists them. */
  readonly staged: readonly string[];
  /** Those of them git counts as binary. */
  readonly binaries?: readonly string[];
  /** The index content by staged path; a path absent here has no stage-0 entry. */
  readonly index?: Readonly<Record<string, string>>;
  /** When set, every git read answers with this failure. */
  readonly failure?: RepoCheckCommandResult;
}

/** A runtime whose git reads answer from the fixture; the index holds no symlink. */
function runtimeOver(fixture: Fixture): RepoCheckRuntime {
  const index = new Map(Object.entries(fixture.index ?? {}));
  return {
    runCaptured: (_command, args) => {
      if (fixture.failure !== undefined) {
        return fixture.failure;
      }
      if (args[0] === 'show') {
        const path = (args[1] ?? '').replace(/^:0:/u, '');
        const text = index.get(path);
        return text === undefined
          ? refused(`fatal: path '${path}' does not exist (neither on disk nor in the index)`)
          : answered(text);
      }
      if (args.includes('--numstat')) {
        return answered((fixture.binaries ?? []).map((file) => `-\t-\t${file}\u0000`).join(''));
      }
      return args[0] === 'diff'
        ? answered(fixture.staged.map((file) => `${file}\u0000`).join(''))
        : answered('');
    },
    runInherited: () => {
      throw new Error('the gate never spawns a child');
    },
  };
}

interface Run {
  readonly exitCode: number;
  readonly stdout: string;
  readonly stderr: string;
}

async function gate(fixture: Fixture): Promise<Run> {
  let stdout = '';
  let stderr = '';
  const exitCode = await runProfanityStaged({
    runtime: runtimeOver(fixture),
    cwd: ROOT,
    stdout: {
      write(chunk: string): boolean {
        stdout += chunk;
        return true;
      },
    },
    stderr: {
      write(chunk: string): boolean {
        stderr += chunk;
        return true;
      },
    },
  });
  return { exitCode, stdout, stderr };
}

/** One of the show's own words, read from the lexicon rather than written here. */
function aSwear(): { readonly from: string; readonly to: string } {
  const entry = PROFANITY_LEXICON.find((candidate) => candidate.to === 'fork');
  if (entry === undefined) {
    throw new Error('the lexicon no longer maps a word to fork');
  }
  return entry;
}

describe('runProfanityStaged', () => {
  it('names each swear in a staged file, read from the index, with its line, and exits 1', async () => {
    const swear = aSwear();
    const run = await gate({
      staged: ['notes.md', 'clean.ts'],
      index: {
        'notes.md': `fine\nnot ${swear.from} fine\n`,
        'clean.ts': 'export const fine = true;\n',
      },
    });
    expect(run.exitCode).toBe(1);
    expect(run.stdout).toBe(`notes.md:2: ${swear.from} -> ${swear.to}\nprofanity: 1 found\n`);
    expect(run.stderr).toBe('');
  });

  it('exits 0 and says clean when no staged text file holds a swear', async () => {
    const run = await gate({ staged: ['notes.md'], index: { 'notes.md': 'a fine record\n' } });
    expect(run).toStrictEqual({ exitCode: 0, stdout: 'profanity: clean\n', stderr: '' });
  });

  it('reads a staged path that begins with a dash', async () => {
    const run = await gate({ staged: ['-notes.md'], index: { '-notes.md': 'a fine record\n' } });
    expect(run).toStrictEqual({ exitCode: 0, stdout: 'profanity: clean\n', stderr: '' });
  });

  it('reads nothing when only binaries and the lexicon home are staged', async () => {
    const staged = ['public/icon.png', `${PROFANITY_LEXICON_HOME}replace.unit.test.ts`];
    // An empty index: any read would fail the gate with 2, so 0 proves no read.
    const run = await gate({ staged, binaries: ['public/icon.png'] });
    expect(run).toStrictEqual({
      exitCode: 0,
      stdout: 'repo-check profanity-staged: no files\n',
      stderr: '',
    });
  });

  it('exits 2 when a staged path has no index entry to read, naming it in git’s words', async () => {
    const run = await gate({ staged: ['gone.md'] });
    expect(run.exitCode).toBe(2);
    expect(run.stderr).toBe(
      "failed to read the staged gone.md: fatal: path 'gone.md' does not exist (neither on disk nor in the index)\n",
    );
  });

  it('throws in git’s own words when the staged listing fails, rather than pass having read nothing', async () => {
    await expect(
      gate({ staged: [], failure: refused('fatal: not a git repository') }),
    ).rejects.toThrow('fatal: not a git repository');
  });
});
