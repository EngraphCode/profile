/**
 * The swearing gate of the pre-commit hook: the profanity topic's `check` over
 * the staged text files. The owner's ruling of 2026-10-14: the repository is a
 * public surface, so no tracked file carries swearing; records take The Good
 * Place's words (the topic's `replace` action), rules and decision records none
 * at all (elided by hand). The universe is git's staged set less the files git
 * reads as binary and less the lexicon's own directory, the one place the words
 * are named on purpose. Each file is read from the index (`git show :0:<path>`),
 * never from the working tree: the commit carries the staged content, and a cure
 * applied on disk but not staged would otherwise pass the gate and land the swear.
 * A file an attribute marks `-diff` or `binary` counts as binary too and passes
 * unread; the repository's `.gitattributes` marks none today.
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
import { stagedBinaryFiles, stagedFiles } from './repo-check-universe.js';

/** The directory that names the swears on purpose: the lexicon, its matcher and their tests. */
export const PROFANITY_LEXICON_HOME = 'agent-tools/src/profanity/';

/** One write port of the gate: a terminal stream, each chunk stripped of control characters. */
type Writer = Pick<NodeJS.WritableStream, 'write'>;

/** The staged files the gate reads: no binary, nothing under the lexicon's home. */
export function profanityUniverse(
  staged: readonly string[],
  binaries: ReadonlySet<string>,
): readonly string[] {
  return staged.filter((file) => !binaries.has(file) && !file.startsWith(PROFANITY_LEXICON_HOME));
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

/**
 * The index as the profanity CLI's file system: a read is `git show :0:<path>`
 * for the path relative to `cwd` (the CLI resolved it against `cwd`), a write
 * is refused, since the gate never writes.
 */
function indexFileSystem(runtime: RepoCheckRuntime, cwd: string): ProfanityFileSystem {
  return {
    readFileUtf8: (absolutePath): Promise<Result<string, Error>> => {
      const path = relative(cwd, absolutePath);
      const shown = runtime.runCaptured('git', ['show', `:0:${path}`]);
      return Promise.resolve(
        (shown.status ?? 1) === 0
          ? ok(shown.stdout)
          : err(
              new Error(
                `failed to read the staged ${path}: ${shown.stderr.trim() || 'git show failed'}`,
              ),
            ),
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
  const files = profanityUniverse(stagedFiles(runtime), stagedBinaryFiles(runtime));
  if (files.length === 0) {
    stdout.write('repo-check profanity-staged: no files\n');
    return 0;
  }
  return runProfanityCli({
    args: ['check', '--', ...files],
    cwd,
    fileSystem: indexFileSystem(runtime, cwd),
    stdout,
    stderr: options.stderr ?? sanitising(process.stderr),
  });
}
