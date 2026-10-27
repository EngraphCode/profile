import { unwrap, unwrapErr } from '@engraph/result';
import { describe, expect, it } from 'vitest';

import {
  frontmatterLines,
  hasAuthorNames,
  hasLayerKey,
  hasUnterminatedFrontmatter,
  parseAuthorNames,
  parseLayerDeclaration,
} from './editorial-frontmatter.js';

/**
 * Pure cells over strings; the frontmatter block is the only input. The tracked
 * tree is proven where it is used: the gate runs over it on every check.
 */

const AUTHOR_FILE_CONTENT =
  '---\nauthor_names: [Ada, Lovelace]\nentity: https://example.test/#person\n---\n\n# Ada Lovelace\n';

const GENERAL_CONTENT =
  '---\nname: write-for-the-reader\nmetadata:\n  layer: general\n---\n\nThe author decides.\n';

const UNDECLARED_CONTENT = '---\nname: commit\n---\n\nAda is not an author here.\n';

describe('frontmatterLines, hasLayerKey and parseLayerDeclaration', () => {
  it('reads the block between the leading fences and nothing after it', () => {
    expect(frontmatterLines('---\na: 1\n---\nlayer: general\n')).toEqual(['a: 1']);
    expect(frontmatterLines('no block\n---\n')).toEqual([]);
  });

  it('tells an unterminated block from an absent one', () => {
    expect(hasUnterminatedFrontmatter('---\nlayer: general\n')).toBe(true);
    expect(hasUnterminatedFrontmatter('---\r\nlayer: general\r\n')).toBe(true);
    expect(hasUnterminatedFrontmatter('---\na: 1\n---\n')).toBe(false);
    expect(hasUnterminatedFrontmatter('no block\n')).toBe(false);
  });

  it('reads the block whatever the line ending', () => {
    expect(frontmatterLines('---\r\nlayer: general\r\n---\r\n')).toEqual(['layer: general']);
  });

  it('sees a layer key at any indentation, in the block only', () => {
    expect(hasLayerKey(GENERAL_CONTENT)).toBe(true);
    expect(hasLayerKey('---\nlayer: general # the craft\n---\n')).toBe(true);
    expect(hasLayerKey('---\nname: x\n---\n\nlayer: general\n')).toBe(false);
  });

  it('reads a layer at the top level or under metadata, and none when absent', () => {
    expect(unwrap(parseLayerDeclaration('---\nlayer: surface\n---\n'))).toBe('surface');
    expect(unwrap(parseLayerDeclaration(GENERAL_CONTENT))).toBe('general');
    expect(unwrap(parseLayerDeclaration(UNDECLARED_CONTENT))).toBeUndefined();
  });

  it('refuses an unknown layer, the author as a layer, a malformed line, or two declarations', () => {
    expect(unwrapErr(parseLayerDeclaration('---\nlayer: host\n---\n'))).toContain('unknown layer');
    expect(unwrapErr(parseLayerDeclaration('---\nlayer: author\n---\n'))).toContain(
      'unknown layer',
    );
    expect(unwrapErr(parseLayerDeclaration('---\nlayer: general # the craft\n---\n'))).toContain(
      'malformed layer declaration',
    );
    expect(
      unwrapErr(parseLayerDeclaration('---\nlayer: general\nlayer: surface\n---\n')),
    ).toContain('2 layer declarations');
  });
});

describe('hasAuthorNames and parseAuthorNames', () => {
  it('sees the key in the frontmatter block only', () => {
    expect(hasAuthorNames(AUTHOR_FILE_CONTENT)).toBe(true);
    expect(hasAuthorNames('---\nname: x\n---\n\nauthor_names: [Ada]\n')).toBe(false);
    expect(hasAuthorNames(GENERAL_CONTENT)).toBe(false);
  });

  it('reads a flow list, trimmed', () => {
    expect(unwrap(parseAuthorNames('---\nauthor_names: [ Ada , Lovelace ]\n---\n'))).toEqual([
      'Ada',
      'Lovelace',
    ]);
  });

  it('refuses quoted entries and keeps an apostrophe inside a name: the list is bare tokens', () => {
    expect(
      unwrapErr(parseAuthorNames('---\nauthor_names: ["Ada", \'Lovelace\']\n---\n')),
    ).toContain('bare tokens');
    expect(unwrap(parseAuthorNames("---\nauthor_names: [Seán, O'Connor]\n---\n"))).toEqual([
      'Seán',
      "O'Connor",
    ]);
  });

  it('refuses a missing key, a block list, an empty list and a duplicate', () => {
    expect(unwrapErr(parseAuthorNames('---\nentity: x\n---\n'))).toContain('no `author_names`');
    expect(unwrapErr(parseAuthorNames('---\nauthor_names:\n  - Ada\n---\n'))).toContain(
      'flow list',
    );
    expect(unwrapErr(parseAuthorNames('---\nauthor_names: []\n---\n'))).toContain('no name');
    expect(unwrapErr(parseAuthorNames('---\nauthor_names: [Ada, ada]\n---\n'))).toContain('twice');
  });
});
