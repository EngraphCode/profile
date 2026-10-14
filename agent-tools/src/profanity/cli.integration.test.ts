import { err, ok } from '@engraph/result';
import { describe, expect, it } from 'vitest';

import { PROFANITY_USAGE, runProfanityCli } from './cli.js';
import type { ProfanityFileSystem } from './file-system.js';

interface Harness {
  readonly files: Map<string, string>;
  readonly fileSystem: ProfanityFileSystem;
  readonly stdout: () => string;
  readonly stderr: () => string;
  readonly run: (args: readonly string[]) => Promise<number>;
}

function harness(initial: Readonly<Record<string, string>>): Harness {
  const files = new Map(Object.entries(initial));
  let out = '';
  let error = '';
  const fileSystem: ProfanityFileSystem = {
    async readFileUtf8(absolutePath) {
      const text = files.get(absolutePath);
      return text === undefined
        ? err(new Error(`failed to read ${absolutePath}: ENOENT`))
        : ok(text);
    },
    async writeFileUtf8(absolutePath, text) {
      files.set(absolutePath, text);
      return ok(undefined);
    },
  };
  return {
    files,
    fileSystem,
    stdout: () => out,
    stderr: () => error,
    run: (args) =>
      runProfanityCli({
        args,
        cwd: '/repo',
        fileSystem,
        stdout: {
          write(chunk: string): boolean {
            out += chunk;
            return true;
          },
        },
        stderr: {
          write(chunk: string): boolean {
            error += chunk;
            return true;
          },
        },
      }),
  };
}

describe('profanity CLI', () => {
  it('check reports each swear with its path and line and exits 1', async () => {
    const h = harness({ '/repo/napkin.md': 'fine\nFinish the fucking basic editor\n' });
    await expect(h.run(['check', 'napkin.md'])).resolves.toBe(1);
    expect(h.stdout()).toBe('napkin.md:2: fucking -> forking\nprofanity: 1 found\n');
    expect(h.files.get('/repo/napkin.md')).toBe('fine\nFinish the fucking basic editor\n');
  });

  it('check exits 0 and says so when every file is clean', async () => {
    const h = harness({ '/repo/a.md': 'all forking fine\n' });
    await expect(h.run(['check', 'a.md'])).resolves.toBe(0);
    expect(h.stdout()).toBe('profanity: clean\n');
  });

  it('replace rewrites only the files that changed and reports each', async () => {
    const h = harness({
      '/repo/a.md': 'for fuck sake\n',
      '/repo/b.md': 'clean\n',
    });
    await expect(h.run(['replace', 'a.md', 'b.md'])).resolves.toBe(0);
    expect(h.files.get('/repo/a.md')).toBe('for fork sake\n');
    expect(h.files.get('/repo/b.md')).toBe('clean\n');
    expect(h.stdout()).toBe('a.md:1: fuck -> fork\nrewrote a.md\nprofanity: 1 replaced\n');
  });

  it('resolves a relative path against the cwd and a pnpm separator is ignored', async () => {
    const h = harness({ '/repo/.agent/napkin.md': 'shit\n' });
    await expect(h.run(['--', 'replace', '.agent/napkin.md'])).resolves.toBe(0);
    expect(h.files.get('/repo/.agent/napkin.md')).toBe('shirt\n');
  });

  it('prints the usage on --help', async () => {
    const h = harness({});
    await expect(h.run(['--help'])).resolves.toBe(0);
    expect(h.stdout()).toBe(PROFANITY_USAGE);
    expect(PROFANITY_USAGE).toContain('pnpm agent-tools profanity check');
  });

  it.each([
    [[], 'expected an action of check or replace, got: (none)'],
    [['scrub', 'a.md'], 'expected an action of check or replace, got: scrub'],
    [['check'], 'check needs at least one path'],
    [['check', '--json', 'a.md'], 'unknown option: --json'],
  ])('refuses %j with the error and the usage, exit 2', async (args, message) => {
    const h = harness({});
    await expect(h.run(args)).resolves.toBe(2);
    expect(h.stderr()).toBe(`${message}\n\n${PROFANITY_USAGE}`);
  });

  it('surfaces a read failure verbatim and exits 2 before writing anything', async () => {
    const h = harness({ '/repo/a.md': 'fuck\n' });
    await expect(h.run(['replace', 'a.md', 'missing.md'])).resolves.toBe(2);
    expect(h.stderr()).toBe('failed to read /repo/missing.md: ENOENT\n');
    expect(h.files.get('/repo/a.md')).toBe('fuck\n');
  });
});
