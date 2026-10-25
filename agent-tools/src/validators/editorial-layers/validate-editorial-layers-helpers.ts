/**
 * Pure helpers for the editorial-layers validator.
 *
 * @remarks
 * The editorial doctrine is kept in three layers so that the general craft and
 * the surface classes can serve any author and travel to any estate as the
 * same bytes, while one author's identity stays in one file: `general` (the
 * writing and editorial practice), `surface` (what a LinkedIn profile or a CV
 * needs), `author` (this host's author instance). Each editorial file declares
 * its layer in frontmatter, and the author instance declares the author's name
 * tokens. A general or surface file that names the author has leaked the
 * instance into the layer that must not know it; this module finds that leak.
 *
 * The declaration is read from the frontmatter block only, at any indentation
 * (a skill declares `layer` under `metadata:`, a directive at the top level).
 * The author's names are a flow list on one line; matching is whole-word and
 * case-insensitive, because a name in any letter case is the same leak and a
 * token inside a longer word (a host name, a path) is not a name.
 *
 * @packageDocumentation
 */

import { err, ok, type Result } from '@engraph/result';

import { type ScanFile } from '../../core/tracked-file-scan.js';

export type { ScanFile };

/** The three editorial layers. */
export type EditorialLayer = 'general' | 'surface' | 'author';

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

/** The result of one scan: the instance, the declared files and the leaks. */
export interface EditorialLayersScan {
  readonly instancePath: string;
  readonly names: readonly string[];
  readonly declared: readonly DeclaredFile[];
  readonly hits: readonly AuthorNameHit[];
}

const LAYERS: ReadonlySet<string> = new Set(['general', 'surface', 'author']);

const EDITORIAL_ROOTS = [
  '.agent/skills/',
  '.agent/directives/',
  '.agent/sub-agents/templates/',
  'docs/editorial/',
] as const;

/** True for the paths the editorial layers may live under. */
export function isEditorialSurface(relativePath: string): boolean {
  return EDITORIAL_ROOTS.some((root) => relativePath.startsWith(root));
}

/** The lines of the leading frontmatter block, or none when the file has no block. */
export function frontmatterLines(content: string): readonly string[] {
  const lines = content.split('\n');
  if (lines[0] !== '---') {
    return [];
  }
  const close = lines.indexOf('---', 1);
  return close === -1 ? [] : lines.slice(1, close);
}

function isLayer(value: string): value is EditorialLayer {
  return LAYERS.has(value);
}

/**
 * The file's layer declaration.
 *
 * @returns the layer; `undefined` when the frontmatter declares none; an
 *   error when it declares an unknown layer or more than one
 */
export function parseLayerDeclaration(content: string): Result<EditorialLayer | undefined, string> {
  const values = frontmatterLines(content)
    .map((line) => /^\s*layer:\s*(\S+)\s*$/.exec(line)?.[1])
    .filter((value): value is string => value !== undefined);
  const [first] = values;
  if (first === undefined) {
    return ok(undefined);
  }
  if (values.length > 1) {
    return err(`${String(values.length)} layer declarations; exactly one is allowed`);
  }
  if (!isLayer(first)) {
    return err(`unknown layer ${JSON.stringify(first)}; one of general, surface, author`);
  }
  return ok(first);
}

/**
 * The author's name tokens from the instance file's frontmatter
 * (`author_names: [One, Two]`): trimmed, non-empty, distinct.
 */
export function parseAuthorNames(content: string): Result<readonly string[], string> {
  const line = frontmatterLines(content).find((candidate) => /^\s*author_names:/.test(candidate));
  if (line === undefined) {
    return err('the author instance declares no `author_names`');
  }
  const flow = /^\s*author_names:\s*\[(.*)\]\s*$/.exec(line)?.[1];
  if (flow === undefined) {
    return err('`author_names` must be a flow list on one line, as in `author_names: [One, Two]`');
  }
  const names = flow
    .split(',')
    .map((name) => name.trim())
    .filter((name) => name !== '');
  if (names.length === 0) {
    return err('`author_names` declares no name');
  }
  const distinct = new Set(names.map((name) => name.toLowerCase()));
  if (distinct.size !== names.length) {
    return err('`author_names` declares a name twice');
  }
  return ok(names);
}

/** The files that declare a layer, with the layer; an error names a malformed declaration. */
export function collectDeclaredFiles(files: readonly ScanFile[]): Result<DeclaredFile[], string> {
  const declared: DeclaredFile[] = [];
  for (const file of files) {
    if (!isEditorialSurface(file.path)) {
      continue;
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

/** Exactly one author instance among the declared files. */
export function selectAuthorInstance(
  declared: readonly DeclaredFile[],
): Result<DeclaredFile, string> {
  const instances = declared.filter((entry) => entry.layer === 'author');
  const [instance] = instances;
  if (instance === undefined) {
    return err('no file declares `layer: author`; the author instance must declare it');
  }
  if (instances.length > 1) {
    return err(
      `${String(instances.length)} files declare \`layer: author\` (${instances.map((entry) => entry.file.path).join(', ')}); exactly one is allowed`,
    );
  }
  return ok(instance);
}

function escapeForRegExp(text: string): string {
  return text.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
}

/**
 * Every whole-word, case-insensitive occurrence of an author name in a file's
 * content, one hit per line at most.
 */
export function findAuthorNameHits(
  file: string,
  content: string,
  names: readonly string[],
): AuthorNameHit[] {
  const pattern = new RegExp(String.raw`\b(?:${names.map(escapeForRegExp).join('|')})\b`, 'i');
  const hits: AuthorNameHit[] = [];
  content.split('\n').forEach((line, index) => {
    const match = pattern.exec(line);
    if (match !== null) {
      hits.push({ file, line: index + 1, column: match.index + 1, text: match[0] });
    }
  });
  return hits;
}

/**
 * Scan the editorial surfaces: select the author instance, read its names,
 * and find every name in a general or surface file.
 */
export function scanEditorialLayers(
  files: readonly ScanFile[],
): Result<EditorialLayersScan, string> {
  const declared = collectDeclaredFiles(files);
  if (!declared.ok) {
    return err(declared.error);
  }
  const instance = selectAuthorInstance(declared.value);
  if (!instance.ok) {
    return err(instance.error);
  }
  const names = parseAuthorNames(instance.value.file.content);
  if (!names.ok) {
    return err(`${instance.value.file.path}: ${names.error}`);
  }
  const hits = declared.value
    .filter((entry) => entry.layer !== 'author')
    .flatMap((entry) => findAuthorNameHits(entry.file.path, entry.file.content, names.value));
  return ok({
    instancePath: instance.value.file.path,
    names: names.value,
    declared: declared.value,
    hits,
  });
}
