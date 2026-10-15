import { OutputBuffer } from './agent-tools-cli-topics.js';
import type { AgentToolsCliInput, AgentToolsCliResult } from './agent-tools-cli-types.js';
import { runProfanityCli } from '../profanity/cli.js';
import { nodeProfanityFileSystem } from '../profanity/file-system-node.js';

/** `profanity` reads and rewrites files relative to the invoking cwd through the node fs. */
export async function runProfanityTopic(
  input: AgentToolsCliInput,
  args: readonly string[],
): Promise<AgentToolsCliResult> {
  const stdout = new OutputBuffer();
  const stderr = new OutputBuffer();
  const exitCode = await runProfanityCli({
    args,
    cwd: input.cwd,
    fileSystem: nodeProfanityFileSystem,
    stdout,
    stderr,
  });
  return { exitCode, stdout: stdout.text(), stderr: stderr.text() };
}
