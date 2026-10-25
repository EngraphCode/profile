import { unwrap, unwrapErr } from '@engraph/result';
import { describe, expect, it } from 'vitest';

import {
  collectDeclaredFiles,
  findAuthorNameHits,
  frontmatterLines,
  isEditorialSurface,
  parseAuthorNames,
  parseLayerDeclaration,
  scanEditorialLayers,
  selectAuthorInstance,
  type ScanFile,
} from './validate-editorial-layers-helpers.js';

/**
 * Pure cells over in-memory files; no filesystem, no git. The tracked tree is
 * proven where it is used: the gate runs over it on every check.
 */

const INSTANCE: ScanFile = {
  path: '.agent/directives/editorial-guidance.md',
  content: '---\nlayer: author\nauthor_names: [Ada, Lovelace]\n---\n\n# Ada Lovelace\n',
};

const GENERAL: ScanFile = {
  path: '.agent/skills/editorial/write-for-the-reader/SKILL-CANONICAL.md',
  content:
    '---\nname: write-for-the-reader\nmetadata:\n  layer: general\n---\n\nThe author decides.\n',
};

const SURFACE_LEAK: ScanFile = {
  path: '.agent/skills/editorial/cv/SKILL-CANONICAL.md',
  content:
    '---\nmetadata:\n  layer: surface\n---\n\nAs Ada said, the CV is a page.\nlovelace-style.\n',
};

const UNDECLARED: ScanFile = {
  path: '.agent/skills/commit/SKILL-CANONICAL.md',
  content: '---\nname: commit\n---\n\nAda is not an author here.\n',
};

describe('isEditorialSurface', () => {
  it('admits the skills, directives, reader templates and editorial records', () => {
    expect(isEditorialSurface('.agent/skills/editorial/cv/SKILL-CANONICAL.md')).toBe(true);
    expect(isEditorialSurface('.agent/directives/editorial-strategy.md')).toBe(true);
    expect(isEditorialSurface('.agent/sub-agents/templates/editor.md')).toBe(true);
    expect(isEditorialSurface('docs/editorial/decision-records/002-show-dont-justify.md')).toBe(
      true,
    );
    expect(isEditorialSurface('linkedin/profile.md')).toBe(false);
  });
});

describe('frontmatterLines and parseLayerDeclaration', () => {
  it('reads the block between the leading fences and nothing after it', () => {
    expect(frontmatterLines('---\na: 1\n---\nlayer: author\n')).toEqual(['a: 1']);
    expect(frontmatterLines('no block\n---\n')).toEqual([]);
  });

  it('reads a layer at the top level or under metadata, and none when absent', () => {
    expect(unwrap(parseLayerDeclaration(INSTANCE.content))).toBe('author');
    expect(unwrap(parseLayerDeclaration(GENERAL.content))).toBe('general');
    expect(unwrap(parseLayerDeclaration(UNDECLARED.content))).toBeUndefined();
  });

  it('refuses an unknown layer or two declarations', () => {
    expect(unwrapErr(parseLayerDeclaration('---\nlayer: host\n---\n'))).toContain('unknown layer');
    expect(
      unwrapErr(parseLayerDeclaration('---\nlayer: general\nlayer: surface\n---\n')),
    ).toContain('2 layer declarations');
  });
});

describe('parseAuthorNames', () => {
  it('reads a flow list, trimmed', () => {
    expect(unwrap(parseAuthorNames('---\nauthor_names: [ Ada , Lovelace ]\n---\n'))).toEqual([
      'Ada',
      'Lovelace',
    ]);
  });

  it('refuses a missing key, a block list, an empty list and a duplicate', () => {
    expect(unwrapErr(parseAuthorNames('---\nlayer: author\n---\n'))).toContain('no `author_names`');
    expect(unwrapErr(parseAuthorNames('---\nauthor_names:\n  - Ada\n---\n'))).toContain(
      'flow list',
    );
    expect(unwrapErr(parseAuthorNames('---\nauthor_names: []\n---\n'))).toContain('no name');
    expect(unwrapErr(parseAuthorNames('---\nauthor_names: [Ada, ada]\n---\n'))).toContain('twice');
  });
});

describe('collectDeclaredFiles and selectAuthorInstance', () => {
  it('collects the declared editorial files and skips undeclared and out-of-scope ones', () => {
    const declared = unwrap(collectDeclaredFiles([INSTANCE, GENERAL, UNDECLARED, SURFACE_LEAK]));
    expect(declared.map((entry) => entry.layer)).toEqual(['author', 'general', 'surface']);
  });

  it('selects exactly one author instance and refuses none or two', () => {
    const declared = unwrap(collectDeclaredFiles([INSTANCE, GENERAL]));
    expect(unwrap(selectAuthorInstance(declared)).file.path).toBe(INSTANCE.path);
    expect(unwrapErr(selectAuthorInstance(unwrap(collectDeclaredFiles([GENERAL]))))).toContain(
      'no file declares',
    );
    const two = unwrap(
      collectDeclaredFiles([INSTANCE, { ...INSTANCE, path: 'docs/editorial/author.md' }]),
    );
    expect(unwrapErr(selectAuthorInstance(two))).toContain('2 files declare');
  });
});

describe('findAuthorNameHits and scanEditorialLayers', () => {
  it('matches a whole word in any case, once per line, and not a token inside a longer word', () => {
    const hits = findAuthorNameHits('f.md', 'As Ada said.\nlovelace-style.\nadamant\n', [
      'Ada',
      'Lovelace',
    ]);
    expect(hits).toEqual([
      { file: 'f.md', line: 1, column: 4, text: 'Ada' },
      { file: 'f.md', line: 2, column: 1, text: 'lovelace' },
    ]);
  });

  it('reports the leak in a surface file and nothing from the instance or an undeclared file', () => {
    const scan = unwrap(scanEditorialLayers([INSTANCE, GENERAL, UNDECLARED, SURFACE_LEAK]));
    expect(scan.instancePath).toBe(INSTANCE.path);
    expect(scan.names).toEqual(['Ada', 'Lovelace']);
    expect(scan.hits.map((hit) => `${hit.file}:${String(hit.line)}`)).toEqual([
      `${SURFACE_LEAK.path}:6`,
      `${SURFACE_LEAK.path}:7`,
    ]);
  });

  it('is clean when no general or surface file names the author', () => {
    expect(unwrap(scanEditorialLayers([INSTANCE, GENERAL])).hits).toEqual([]);
  });

  it('refuses a scan with no instance or with a malformed declaration', () => {
    expect(unwrapErr(scanEditorialLayers([GENERAL]))).toContain('no file declares');
    expect(
      unwrapErr(
        scanEditorialLayers([INSTANCE, { ...GENERAL, content: '---\nlayer: host\n---\n' }]),
      ),
    ).toContain('unknown layer');
  });
});
