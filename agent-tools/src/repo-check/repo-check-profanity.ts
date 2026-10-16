/**
 * The swearing gate of the pre-commit hook: the profanity topic's `check` over
 * the staged text files. The owner's ruling of 2026-10-14: the repository is a
 * public surface, so no tracked file carries swearing; records take The Good
 * Place's words (the topic's `replace` action), rules and decision records none
 * at all (elided by hand). The owner's scope of the same day: the check applies
 * only to the Practice and the key documentation, nothing else, and never to
 * content; of 2026-10-15: the experience register is excluded, its records keep
 * their words as captured. So the universe is git's staged set (type changes
 * included, index symlinks excluded) narrowed to that scope: every file under
 * the Practice's root except the experience register, plus the repository's
 * root documents. Each file is read from the index
 * (`git show :0:<path>`), never from the working tree: the commit carries the
 * staged content, and a cure applied on disk but not staged would otherwise
 * pass the gate and land the swear. A file is binary by that staged content (a
 * NUL byte, git's own test), never by a diff attribute, which an unstaged
 * `.gitattributes` line could set to exempt a text file.
 *
 * @packageDocumentation
 */

import { relative } from 'node:path';

import { err, ok, type Result } from '@engraph/result';

import { sanitiseTerminalLine } from '../core/terminal-output.js';
import { runProfanityCli } from '../profanity/cli.js';
import type { ProfanityFileSystem } from '../profanity/file-system.js';

import { defaultRuntime } from './repo-check-runtime.js';
import type { RepoCheckRuntime } from './repo-check-types.js';
import { stagedFiles } from './repo-check-universe.js';

/** The Practice's root: the owner's scope word names it first (2026-10-14). */
export const PRACTICE_HOME = '.agent/';

/**
 * The register the gate never reads: an experience record is what an agent felt
 * and said at the time, and changing its words would make it untrue (the owner,
 * 2026-10-15: "exclude the experience files, it would be dishonest to censor those").
 */
export const EXPERIENCE_REGISTER = '.agent/experience/';

/** One write port of the gate: a terminal stream, each chunk stripped of control characters. */
type Writer = Pick<NodeJS.WritableStream, 'write'>;

/** The key documentation: a markdown document at the repository's root (README, CONTRIBUTING and their peers). */
export function isRootDocument(path: string): boolean {
  return !path.includes('/') && path.endsWith('.md');
}

/**
 * Whether the gate reads a staged path: inside the Practice's root and outside
 * the experience register, or a root document. Content (the site's content and
 * entity graph, the CV, the LinkedIn drafts, design captures, generated packages)
 * and every workspace lie outside, the lexicon that names the words among them.
 */
export function isInProfanityScope(path: string): boolean {
  if (path.startsWith(EXPERIENCE_REGISTER)) {
    return false;
  }
  return path.startsWith(PRACTICE_HOME) || isRootDocument(path);
}

/** The staged files the gate reads: those inside the owner's scope, in git's order. */
export function profanityUniverse(staged: readonly string[]): readonly string[] {
  return staged.filter(isInProfanityScope);
}

/** Binary by content, as git decides it: a NUL byte anywhere in the staged blob. */
export function isBinaryContent(text: string): boolean {
  return text.includes('\u0000');
}

interface ProfanityStagedOptions {
  /** The process edge: git's reads. The default spawns git. */
  readonly runtime?: RepoCheckRuntime;
  /** Where the staged paths resolve: the repository root, where the hook and the workspace script run. */
  readonly cwd?: string;
  /** Where the findings and the verdict go; the default is the process's stdout, sanitised. */
  readonly stdout?: Writer;
  /** Where a refused read goes; the default is the process's stderr, sanitised. */
  readonly stderr?: Writer;
}

/**
 * A terminal stream as a write port: a path git named reaches the operator's
 * terminal through here, so each chunk is stripped of control characters first.
 */
function sanitising(stream: NodeJS.WritableStream): Writer {
  return { write: (chunk: string) => stream.write(sanitiseTerminalLine(chunk)) };
}

/** One staged file's content from the index (`git show :0:<path>`), or why git refused. */
function readStaged(runtime: RepoCheckRuntime, path: string): Result<string, Error> {
  const shown = runtime.runCaptured('git', ['show', `:0:${path}`]);
  return (shown.status ?? 1) === 0
    ? ok(shown.stdout)
    : err(
        new Error(`failed to read the staged ${path}: ${shown.stderr.trim() || 'git show failed'}`),
      );
}

/**
 * The staged text files by path with their index content; a binary blob is left
 * out. The first refused read is the result, since a gate that could not read a
 * staged file never passes it.
 */
function readStagedTexts(
  runtime: RepoCheckRuntime,
  paths: readonly string[],
): Result<ReadonlyMap<string, string>, Error> {
  const texts = new Map<string, string>();
  for (const path of paths) {
    const read = readStaged(runtime, path);
    if (!read.ok) {
      return read;
    }
    if (!isBinaryContent(read.value)) {
      texts.set(path, read.value);
    }
  }
  return ok(texts);
}

/** The read texts as the profanity CLI's file system: no disk, no write. */
function textsFileSystem(texts: ReadonlyMap<string, string>, cwd: string): ProfanityFileSystem {
  return {
    readFileUtf8: (absolutePath) => {
      const text = texts.get(relative(cwd, absolutePath));
      return Promise.resolve(
        text === undefined
          ? err(new Error(`the gate did not read ${absolutePath} from the index`))
          : ok(text),
      );
    },
    writeFileUtf8: (absolutePath) =>
      Promise.resolve(err(new Error(`the pre-commit gate never writes ${absolutePath}`))),
  };
}

/**
 * `profanity check` over the staged text files (the pre-commit hook): 0 when
 * clean or when nothing is to be read, 1 when a swear is found (each printed as
 * `path:line: word -> replacement`), 2 when a staged file cannot be read from
 * the index. A failed git listing throws in git's own words, as the other
 * staged gates do.
 */
export async function runProfanityStaged(options: ProfanityStagedOptions = {}): Promise<number> {
  const runtime = options.runtime ?? defaultRuntime;
  const cwd = options.cwd ?? process.cwd();
  const stdout = options.stdout ?? sanitising(process.stdout);
  const stderr = options.stderr ?? sanitising(process.stderr);
  const texts = readStagedTexts(runtime, profanityUniverse(stagedFiles(runtime)));
  if (!texts.ok) {
    stderr.write(`${texts.error.message}\n`);
    return 2;
  }
  if (texts.value.size === 0) {
    stdout.write('repo-check profanity-staged: no files\n');
    return 0;
  }
  return runProfanityCli({
    args: ['check', '--', ...texts.value.keys()],
    cwd,
    fileSystem: textsFileSystem(texts.value, cwd),
    stdout,
    stderr,
  });
}
