import { resolve } from 'node:path';

import type { ProfanityFileSystem } from './file-system.js';
import { type Replacement, replaceProfanity } from './replace.js';

export interface ProfanityCliInput {
  readonly args: readonly string[];
  /** Relative paths resolve against this directory: the repository root under the workspace script. */
  readonly cwd: string;
  readonly fileSystem: ProfanityFileSystem;
  readonly stdout: Pick<NodeJS.WritableStream, 'write'>;
  readonly stderr: Pick<NodeJS.WritableStream, 'write'>;
}

type Action = 'check' | 'replace';

interface ParsedArgs {
  readonly action: Action;
  readonly paths: readonly string[];
}

interface FileOutcome {
  readonly path: string;
  readonly text: string;
  readonly replacements: readonly Replacement[];
}

export const PROFANITY_USAGE = [
  'profanity <check|replace> [--] <path...>',
  '',
  'A tiny search and replace for swearing in records: each swear becomes the word The Good',
  'Place would let through (fork, shirt, bench, ash, deck, cork) or a fill-in made the same',
  'way. Whole words only; case kept (Fork, FORK); common suffixes carried (forking, forked).',
  '',
  'Actions:',
  '  check    report every swear as path:line: word -> replacement; exit 1 when any, 0 when clean',
  '  replace  rewrite each file in place and report what changed; exit 0',
  '',
  'Paths are files, relative to the repository root, where the workspace script runs. A `--`',
  'after the action ends the options, for a path that begins with a dash. Exit 2 on',
  'a usage or file error.',
  '',
  'Examples:',
  '  pnpm agent-tools profanity check .agent/memory/active/napkin.md',
  '  pnpm agent-tools profanity replace .agent/memory/operational/threads/*.md',
  '',
].join('\n');

/** Runs the `profanity` topic; returns the exit code and writes nothing itself to disk. */
export async function runProfanityCli(input: ProfanityCliInput): Promise<number> {
  const parsed = parseArgs(input.args);
  if (parsed === 'help') {
    input.stdout.write(PROFANITY_USAGE);
    return 0;
  }
  if (parsed instanceof Error) {
    input.stderr.write(`${parsed.message}\n\n${PROFANITY_USAGE}`);
    return 2;
  }

  const outcomes: FileOutcome[] = [];
  for (const path of parsed.paths) {
    const read = await input.fileSystem.readFileUtf8(resolve(input.cwd, path));
    if (!read.ok) {
      input.stderr.write(`${read.error.message}\n`);
      return 2;
    }
    const result = replaceProfanity(read.value);
    outcomes.push({ path, text: result.text, replacements: result.replacements });
  }

  return parsed.action === 'check' ? report(input, outcomes) : rewrite(input, outcomes);
}

function report(input: ProfanityCliInput, outcomes: readonly FileOutcome[]): number {
  const total = writeFindings(input, outcomes);
  input.stdout.write(total === 0 ? 'profanity: clean\n' : `profanity: ${total} found\n`);
  return total === 0 ? 0 : 1;
}

async function rewrite(
  input: ProfanityCliInput,
  outcomes: readonly FileOutcome[],
): Promise<number> {
  const total = writeFindings(input, outcomes);
  for (const outcome of outcomes.filter((candidate) => candidate.replacements.length > 0)) {
    const written = await input.fileSystem.writeFileUtf8(
      resolve(input.cwd, outcome.path),
      outcome.text,
    );
    if (!written.ok) {
      input.stderr.write(`${written.error.message}\n`);
      return 2;
    }
    input.stdout.write(`rewrote ${outcome.path}\n`);
  }
  input.stdout.write(total === 0 ? 'profanity: clean\n' : `profanity: ${total} replaced\n`);
  return 0;
}

/** Writes one line per replacement and returns how many there were. */
function writeFindings(input: ProfanityCliInput, outcomes: readonly FileOutcome[]): number {
  let total = 0;
  for (const outcome of outcomes) {
    for (const replacement of outcome.replacements) {
      input.stdout.write(
        `${outcome.path}:${replacement.line}: ${replacement.from} -> ${replacement.to}\n`,
      );
      total += 1;
    }
  }
  return total;
}

function parseArgs(args: readonly string[]): ParsedArgs | Error | 'help' {
  const normalised = args[0] === '--' ? args.slice(1) : args;
  if (normalised.includes('--help') || normalised.includes('-h')) {
    return 'help';
  }
  const [action, ...paths] = normalised;
  if (action !== 'check' && action !== 'replace') {
    return new Error(`expected an action of check or replace, got: ${action ?? '(none)'}`);
  }
  return parsePaths(action, paths);
}

/** A `--` after the action ends the options: every later argument is a path, a leading dash included. */
function parsePaths(action: Action, paths: readonly string[]): ParsedArgs | Error {
  const files = paths[0] === '--' ? paths.slice(1) : paths;
  const unknown = paths[0] === '--' ? undefined : files.find((path) => path.startsWith('-'));
  if (unknown !== undefined) {
    return new Error(`unknown option: ${unknown}`);
  }
  if (files.length === 0) {
    return new Error(`${action} needs at least one path`);
  }
  return { action, paths: files };
}
