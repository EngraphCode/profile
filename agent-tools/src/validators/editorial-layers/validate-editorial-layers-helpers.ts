/**
 * Pure helpers for the editorial-layers validator.
 *
 * @remarks
 * The editorial doctrine is process in two layers, `general` (the writing and
 * editorial practice) and `surface` (what a LinkedIn profile or a CV needs),
 * serving any author as the same bytes. Information about the author is a
 * different sort of thing, not a third layer: one author file under
 * `docs/editorial/` declares the author's name tokens in `author_names` and no
 * layer. A general or surface file naming the author has leaked information
 * into process; an `author_names` file under the editorial roots of `.agent/`
 * (the directives, the skills, the reader templates) has filed information
 * about an entity as doctrine; this module finds both. The frontmatter reading
 * is in `editorial-frontmatter.ts`; name matching is whole-word by letters and
 * digits of any script, case-insensitive.
 *
 * @packageDocumentation
 */

import { err, ok, type Result } from '@engraph/result';

import { type ScanFile } from '../../core/tracked-file-scan.js';

import {
  type EditorialLayer,
  hasAuthorNames,
  hasLayerKey,
  hasUnterminatedFrontmatter,
  parseAuthorNames,
  parseLayerDeclaration,
} from './editorial-frontmatter.js';

export type { ScanFile };

/** One author name found in a general or surface file. */
export interface AuthorNameHit {
  readonly file: string;
  readonly line: number;
  readonly column: number;
  readonly text: string;
}

/** A file with a layer declaration. */
export interface DeclaredFile {
  readonly file: ScanFile;
  readonly layer: EditorialLayer;
}

/** The result of one scan: the author file, the declared files and the leaks. */
export interface EditorialLayersScan {
  readonly authorFilePath: string;
  readonly names: readonly string[];
  readonly declared: readonly DeclaredFile[];
  readonly hits: readonly AuthorNameHit[];
}

/** What the scan found: an estate with no layers to check, or the scan. */
export type EditorialLayersOutcome =
  | { readonly kind: 'nothing-to-check' }
  | { readonly kind: 'scanned'; readonly scan: EditorialLayersScan };

const EDITORIAL_ROOTS = [
  '.agent/skills/',
  '.agent/directives/',
  '.agent/sub-agents/templates/',
  'docs/editorial/',
] as const;

/** The one root the author file may live under: information, never doctrine. */
const AUTHOR_FILE_ROOT = 'docs/editorial/';

/** True for the paths the editorial layers may live under. */
export function isEditorialSurface(relativePath: string): boolean {
  return EDITORIAL_ROOTS.some((root) => relativePath.startsWith(root));
}

/** The files that declare a layer, with the layer; an error names an unterminated block or a malformed declaration. */
export function collectDeclaredFiles(files: readonly ScanFile[]): Result<DeclaredFile[], string> {
  const declared: DeclaredFile[] = [];
  for (const file of files) {
    if (!isEditorialSurface(file.path)) {
      continue;
    }
    if (hasUnterminatedFrontmatter(file.content)) {
      return err(
        `${file.path}: unterminated frontmatter block; close it with a line of three dashes`,
      );
    }
    const parsed = parseLayerDeclaration(file.content);
    if (!parsed.ok) {
      return err(`${file.path}: ${parsed.error}`);
    }
    if (parsed.value !== undefined) {
      declared.push({ file, layer: parsed.value });
    }
  }
  return ok(declared);
}

/** The one author file's placement and shape: under `docs/editorial/`, no `layer` key. */
function checkAuthorFile(file: ScanFile): Result<ScanFile, string> {
  if (!file.path.startsWith(AUTHOR_FILE_ROOT)) {
    return err(
      `${file.path}: \`author_names\` outside ${AUTHOR_FILE_ROOT}; information about an entity is never a directive, rule, skill or template; move the file under ${AUTHOR_FILE_ROOT}`,
    );
  }
  if (hasLayerKey(file.content)) {
    return err(
      `${file.path}: the author file declares a \`layer\`; information about an entity is not a doctrine layer; remove the \`layer\` key`,
    );
  }
  return ok(file);
}

/**
 * The author file, the one editorial file carrying `author_names`: `undefined`
 * when none does; an error when two do, or it sits outside `docs/editorial/`,
 * or it declares a layer.
 */
export function selectAuthorFile(files: readonly ScanFile[]): Result<ScanFile | undefined, string> {
  const carriers = files.filter(
    (file) => isEditorialSurface(file.path) && hasAuthorNames(file.content),
  );
  const [first] = carriers;
  if (first === undefined) {
    return ok(undefined);
  }
  if (carriers.length > 1) {
    return err(
      `${String(carriers.length)} files declare \`author_names\` (${carriers.map((file) => file.path).join(', ')}); exactly one is allowed`,
    );
  }
  return checkAuthorFile(first);
}

function escapeForRegExp(text: string): string {
  return text.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
}

/** Every author name in the content bounded by non-letters, one hit per line at most. */
export function findAuthorNameHits(
  file: string,
  content: string,
  names: readonly string[],
): AuthorNameHit[] {
  const alternation = names.map(escapeForRegExp).join('|');
  const pattern = new RegExp(
    String.raw`(?<![\p{L}\p{N}_])(?:${alternation})(?![\p{L}\p{N}_])`,
    'iu',
  );
  const hits: AuthorNameHit[] = [];
  content.split(/\r?\n/).forEach((line, index) => {
    const match = pattern.exec(line);
    if (match !== null) {
      hits.push({ file, line: index + 1, column: match.index + 1, text: match[0] });
    }
  });
  return hits;
}

/**
 * Scan the editorial surfaces: check the author file, collect the declared
 * files, and when any declares a layer find every author name in them.
 */
export function scanEditorialLayers(
  files: readonly ScanFile[],
): Result<EditorialLayersOutcome, string> {
  // The author file is checked first and never reaches `declared`: it carries no
  // layer key or it is refused here, so the name scan below cannot hit itself.
  const author = selectAuthorFile(files);
  if (!author.ok) {
    return author;
  }
  const declared = collectDeclaredFiles(files);
  if (!declared.ok) {
    return declared;
  }
  if (declared.value.length === 0) {
    return ok({ kind: 'nothing-to-check' });
  }
  if (author.value === undefined) {
    return err(
      `no file declares \`author_names\`; the author file under ${AUTHOR_FILE_ROOT} must declare it`,
    );
  }
  const names = parseAuthorNames(author.value.content);
  if (!names.ok) {
    return err(`${author.value.path}: ${names.error}`);
  }
  const hits = declared.value.flatMap((entry) =>
    findAuthorNameHits(entry.file.path, entry.file.content, names.value),
  );
  return ok({
    kind: 'scanned',
    scan: { authorFilePath: author.value.path, names: names.value, declared: declared.value, hits },
  });
}
