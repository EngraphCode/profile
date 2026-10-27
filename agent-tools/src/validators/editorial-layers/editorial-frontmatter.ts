/**
 * Frontmatter reading for the editorial-layers validator: the leading block's
 * lines, the `layer` declaration and the `author_names` list.
 *
 * @remarks
 * Line-oriented on purpose: the declarations are two keys with scalar or flow
 * values, read at any indentation (a skill declares `layer` under `metadata:`,
 * a directive at the top level). A key whose value does not have the one
 * admitted shape is an error, never a silent "no declaration": a validator that
 * skips what it cannot parse is a green-gate bypass.
 *
 * @packageDocumentation
 */

import { err, ok, type Result } from '@engraph/result';

/** The two editorial layers; both are process, neither is the author. */
export type EditorialLayer = 'general' | 'surface';

const LAYERS: ReadonlySet<string> = new Set(['general', 'surface']);
const LAYER_KEY = /^\s*layer:/;
const LAYER_VALUE = /^\s*layer:\s*(\S+)\s*$/;
const AUTHOR_NAMES_KEY = /^\s*author_names:/;
const AUTHOR_NAMES_FLOW = /^\s*author_names:\s*\[(.*)\]\s*$/;

/** True when the file opens a frontmatter block and never closes it. */
export function hasUnterminatedFrontmatter(content: string): boolean {
  const lines = content.split(/\r?\n/);
  return lines[0] === '---' && lines.indexOf('---', 1) === -1;
}

/** The lines of the leading frontmatter block, or none when the file has no block. */
export function frontmatterLines(content: string): readonly string[] {
  const lines = content.split(/\r?\n/);
  if (lines[0] !== '---') {
    return [];
  }
  const close = lines.indexOf('---', 1);
  return close === -1 ? [] : lines.slice(1, close);
}

function isLayer(value: string): value is EditorialLayer {
  return LAYERS.has(value);
}

/** True when the frontmatter block carries a `layer` key, whatever its value. */
export function hasLayerKey(content: string): boolean {
  return frontmatterLines(content).some((line) => LAYER_KEY.test(line));
}

/**
 * The file's layer declaration: the layer, `undefined` when none is declared,
 * an error on a malformed line, an unknown layer (the author among them) or
 * more than one declaration.
 */
export function parseLayerDeclaration(content: string): Result<EditorialLayer | undefined, string> {
  const lines = frontmatterLines(content).filter((line) => LAYER_KEY.test(line));
  const [first] = lines;
  if (first === undefined) {
    return ok(undefined);
  }
  if (lines.length > 1) {
    return err(`${String(lines.length)} layer declarations; exactly one is allowed`);
  }
  const value = LAYER_VALUE.exec(first)?.[1];
  if (value === undefined) {
    return err(
      `malformed layer declaration ${JSON.stringify(first.trim())}; write \`layer: general\` or \`layer: surface\` alone on its line`,
    );
  }
  if (!isLayer(value)) {
    return err(
      `unknown layer ${JSON.stringify(value)}; one of general, surface (the author is information, not a layer)`,
    );
  }
  return ok(value);
}

/** True when a token opens or closes with a quote mark; an apostrophe inside a name is a letter. */
function isQuoted(token: string): boolean {
  return /^["']|["']$/.test(token);
}

/** True when the frontmatter block carries an `author_names` key. */
export function hasAuthorNames(content: string): boolean {
  return frontmatterLines(content).some((line) => AUTHOR_NAMES_KEY.test(line));
}

/**
 * The author's name tokens from the author file's frontmatter
 * (`author_names: [One, Two]`): trimmed, non-empty, distinct.
 */
export function parseAuthorNames(content: string): Result<readonly string[], string> {
  const line = frontmatterLines(content).find((candidate) => AUTHOR_NAMES_KEY.test(candidate));
  if (line === undefined) {
    return err('the author file declares no `author_names`');
  }
  const flow = AUTHOR_NAMES_FLOW.exec(line)?.[1];
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
  if (names.some((name) => isQuoted(name))) {
    return err('`author_names` entries are bare tokens; quotes are not supported');
  }
  const distinct = new Set(names.map((name) => name.toLowerCase()));
  if (distinct.size !== names.length) {
    return err('`author_names` declares a name twice');
  }
  return ok(names);
}
