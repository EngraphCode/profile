import { randomUUID } from 'node:crypto';
import { link, open, rename, rm } from 'node:fs/promises';
import { dirname } from 'node:path';

export interface AtomicFileSystem {
  readonly writeSyncedFile: (filePath: string, text: string, mode?: number) => Promise<void>;
  readonly link: (existingPath: string, newPath: string) => Promise<void>;
  readonly rename: (oldPath: string, newPath: string) => Promise<void>;
  readonly remove: (path: string) => Promise<void>;
  readonly syncDirectory: (directory: string) => Promise<void>;
}

/**
 * The platform-correct directory-durability step that follows a rename.
 *
 * @remarks
 * On POSIX a rename is made durable by fsyncing the PARENT DIRECTORY handle —
 * without it a crash can lose the directory entry even though the file bytes
 * were synced. Windows permits no such operation: fsync on a directory handle
 * fails `EPERM` unconditionally, and NTFS's metadata journal keeps the rename
 * CONSISTENT (the old entry or the new one, never corruption) — full
 * power-loss durability of the entry has no user-space lever there (a volume
 * flush needs administrator rights and Node exposes no API for it). The
 * win32 branch is therefore a deliberate no-op at the platform's ceiling,
 * NOT a skipped safety step. Before this partition, every registry/comms
 * write on Windows SUCCEEDED on disk (the sync ran after the rename had
 * landed) and then reported failure — a false negative that made callers
 * retry or halt on operations that had already committed.
 *
 * `platform` is injected so both branches are provable from any host.
 */
export function directorySyncStrategy(
  platform: NodeJS.Platform,
): (directory: string) => Promise<void> {
  return platform === 'win32' ? async () => undefined : posixSyncDirectory;
}

/** Node-backed {@link AtomicFileSystem} with the platform-correct rename-durability step. */
function nodeAtomicFileSystem(): AtomicFileSystem {
  return {
    writeSyncedFile,
    link,
    rename,
    remove: (path) => rm(path, { force: true }),
    syncDirectory: directorySyncStrategy(process.platform),
  };
}

interface AtomicWriteOptions {
  readonly exclusiveCreate?: boolean;
  /**
   * The permission bits the landed file carries (a stat's mode and 0o7777), set on the
   * sibling before it lands, so a rewrite keeps the file's mode: no executable bit dropped,
   * no restrictive mode widened to the umask default.
   */
  readonly mode?: number;
}

type AtomicTextWriter = (
  filePath: string,
  text: string,
  options?: AtomicWriteOptions,
) => Promise<void>;

export const writeTextAtomically: AtomicTextWriter = atomicTextWriter(nodeAtomicFileSystem());

export function atomicTextWriter(fileSystem: AtomicFileSystem): AtomicTextWriter {
  return async (
    filePath: string,
    text: string,
    options: AtomicWriteOptions = {},
  ): Promise<void> => {
    const tmpPath = `${filePath}.tmp-${randomUUID()}`;
    try {
      await fileSystem.writeSyncedFile(tmpPath, text, options.mode);
      if (options.exclusiveCreate === true) {
        await fileSystem.link(tmpPath, filePath);
        await fileSystem.remove(tmpPath).catch(() => undefined);
      } else {
        await fileSystem.rename(tmpPath, filePath);
      }
      await fileSystem.syncDirectory(dirname(filePath));
    } catch (error) {
      await fileSystem.remove(tmpPath).catch(() => undefined);
      throw error;
    }
  };
}

async function writeSyncedFile(filePath: string, text: string, mode?: number): Promise<void> {
  const file = await open(filePath, 'wx', mode);
  try {
    if (mode !== undefined) {
      await file.chmod(mode);
    }
    await file.writeFile(text);
    await file.sync();
  } finally {
    await file.close();
  }
}

async function posixSyncDirectory(directory: string): Promise<void> {
  const dir = await open(directory, 'r');
  try {
    await dir.sync();
  } finally {
    await dir.close();
  }
}
