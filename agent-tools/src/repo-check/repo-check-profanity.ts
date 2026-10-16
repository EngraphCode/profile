/**
 * The swearing gate of the pre-commit hook: the profanity topic's `check` over
 * the staged text files. The owner's ruling of 2026-10-14: the repository is a
 * public surface, so no tracked file carries swearing; records take The Good
 * Place's words (the topic's `replace` action), rules and decision records none
 * at all (elided by hand). The universe is git's staged set (type changes
 * included, index symlinks excluded) less the lexicon's own directory, the one
 * place the words are named on purpose. Each file is read from the index
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

/** The directory that names the swears on purpose: the lexicon, its matcher and their tests. */
export const PROFANITY_LEXICON_HOME = 'agent-tools/src/profanity/';

/** One write port of the gate: a terminal stream, each chunk stripped of control characters. */
type Writer = Pick<NodeJS.WritableStream, 'write'>;

/** The staged files the gate reads: nothing under the lexicon's home. */
export function profanityUniverse(staged: readonly string[]): readonly string[] {
  return staged.filter((file) => !file.startsWith(PROFANITY_LEXICON_HOME));
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
