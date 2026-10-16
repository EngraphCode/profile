import type { Result } from '@engraph/result';

/** The two file operations the `profanity` CLI needs, injected so tests never touch disk. */
export interface ProfanityFileSystem {
  readonly readFileUtf8: (absolutePath: string) => Promise<Result<string, Error>>;
  readonly writeFileUtf8: (absolutePath: string, text: string) => Promise<Result<void, Error>>;
}
