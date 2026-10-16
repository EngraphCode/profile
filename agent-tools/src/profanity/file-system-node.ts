import { lstat, readFile } from 'node:fs/promises';

import { err, ok, type Result } from '@engraph/result';

import { writeTextAtomically } from '../collaboration-state/atomic-file.js';
import type { ProfanityFileSystem } from './file-system.js';

function describe(action: string, absolutePath: string, cause: unknown): Error {
  const reason = cause instanceof Error ? cause.message : String(cause);
  return new Error(`failed to ${action} ${absolutePath}: ${reason}`, { cause });
}

/**
 * The node seam. The write is atomic (a synced sibling file renamed into place, so a
 * process killed mid-write leaves the record whole), keeps the target's mode (a rewrite drops
 * no executable bit and widens no restrictive permission) and never follows a symbolic link at
 * the target, as the estate's writer-boundary pattern asks of a writer under a
 * caller-supplied path.
 */
export const nodeProfanityFileSystem: ProfanityFileSystem = {
  async readFileUtf8(absolutePath): Promise<Result<string, Error>> {
    try {
      return ok(await readFile(absolutePath, 'utf8'));
    } catch (cause) {
      return err(describe('read', absolutePath, cause));
    }
  },
  async writeFileUtf8(absolutePath, text): Promise<Result<void, Error>> {
    try {
      const target = await lstat(absolutePath);
      if (target.isSymbolicLink()) {
        return err(new Error(`refusing to write through the symbolic link ${absolutePath}`));
      }
      await writeTextAtomically(absolutePath, text, { mode: target.mode & 0o7777 });
      return ok(undefined);
    } catch (cause) {
      return err(describe('write', absolutePath, cause));
    }
  },
};
