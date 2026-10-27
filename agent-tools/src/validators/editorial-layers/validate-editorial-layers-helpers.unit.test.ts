import { unwrap, unwrapErr } from '@engraph/result';
import { describe, expect, it } from 'vitest';

import {
  collectDeclaredFiles,
  findAuthorNameHits,
  isEditorialSurface,
  scanEditorialLayers,
  selectAuthorFile,
  type ScanFile,
} from './validate-editorial-layers-helpers.js';

/**
 * Pure cells over in-memory files; no filesystem, no git. The tracked tree is
 * proven where it is used: the gate runs over it on every check.
 */

const AUTHOR_FILE: ScanFile = {
  path: 'docs/editorial/author.md',
  content:
    '---\nauthor_names: [Ada, Lovelace]\nentity: https://example.test/#person\n---\n\n# Ada Lovelace\n',
};

const AUTHOR_FILE_IN_DOCTRINE: ScanFile = {
  path: '.agent/directives/editorial-guidance.md',
  content: AUTHOR_FILE.content,
};

const AUTHOR_FILE_WITH_LAYER: ScanFile = {
  path: 'docs/editorial/author.md',
  content: '---\nlayer: general\nauthor_names: [Ada, Lovelace]\n---\n\n# Ada Lovelace\n',
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

const OUT_OF_SCOPE: ScanFile = {
  path: 'linkedin/profile.md',
  content: '---\nlayer: host\n---\n',
};

describe('isEditorialSurface', () => {
  it('admits the skills, directives, reader templates and editorial records; docs/ alone is not enough', () => {
    expect(isEditorialSurface('.agent/skills/editorial/cv/SKILL-CANONICAL.md')).toBe(true);
    expect(isEditorialSurface('.agent/directives/editorial-strategy.md')).toBe(true);
    expect(isEditorialSurface('.agent/sub-agents/templates/editor.md')).toBe(true);
    expect(isEditorialSurface('docs/editorial/decision-records/002-show-dont-justify.md')).toBe(
      true,
    );
    expect(isEditorialSurface('docs/author.md')).toBe(false);
    expect(isEditorialSurface('linkedin/profile.md')).toBe(false);
  });
});

describe('collectDeclaredFiles', () => {
  it('collects the files declaring a layer; skips files declaring none and files outside the editorial surfaces, even one whose layer would be refused in scope', () => {
    expect(
      unwrap(collectDeclaredFiles([AUTHOR_FILE, GENERAL, UNDECLARED, SURFACE_LEAK, OUT_OF_SCOPE])),
    ).toStrictEqual([
      { file: GENERAL, layer: 'general' },
      { file: SURFACE_LEAK, layer: 'surface' },
    ]);
  });
});

describe('selectAuthorFile', () => {
  it('selects the one file under docs/editorial/ carrying author_names, or none', () => {
    expect(unwrap(selectAuthorFile([AUTHOR_FILE, GENERAL]))).toStrictEqual(AUTHOR_FILE);
    expect(unwrap(selectAuthorFile([GENERAL, UNDECLARED]))).toBeUndefined();
  });

  it('does not see author_names outside the editorial surfaces: docs/ alone is not enough', () => {
    expect(unwrap(selectAuthorFile([{ ...AUTHOR_FILE, path: 'docs/author.md' }]))).toBeUndefined();
  });

  it('refuses two author files', () => {
    expect(
      unwrapErr(
        selectAuthorFile([AUTHOR_FILE, { ...AUTHOR_FILE, path: 'docs/editorial/other.md' }]),
      ),
    ).toContain('2 files declare `author_names`');
  });

  it('refuses author_names in a directive, skill or template: information about an entity is never one', () => {
    expect(unwrapErr(selectAuthorFile([AUTHOR_FILE_IN_DOCTRINE]))).toContain(
      'information about an entity is never a directive, rule, skill or template',
    );
  });

  it('refuses a layer key on the author file, commented or not: the author is not a doctrine layer', () => {
    expect(unwrapErr(selectAuthorFile([AUTHOR_FILE_WITH_LAYER]))).toContain(
      'the author file declares a `layer`',
    );
    expect(
      unwrapErr(
        selectAuthorFile([
          {
            ...AUTHOR_FILE,
            content: '---\nlayer: general # a comment\nauthor_names: [Ada]\n---\n',
          },
        ]),
      ),
    ).toContain('the author file declares a `layer`');
  });
});

describe('findAuthorNameHits', () => {
  it('matches a whole word in any case, once per line, and not a token inside a longer word', () => {
    const hits = findAuthorNameHits('f.md', 'As Ada Lovelace said.\nlovelace-style.\nadamant\n', [
      'Ada',
      'Lovelace',
    ]);
    expect(hits).toEqual([
      { file: 'f.md', line: 1, column: 4, text: 'Ada' },
      { file: 'f.md', line: 2, column: 1, text: 'lovelace' },
    ]);
  });

  it('bounds a name by letters and digits of any script, so a name ending in a non-ASCII letter matches whole and never inside a longer word', () => {
    expect(
      findAuthorNameHits('f.md', 'Zoë wrote.\nZoëlle did not.\nÉzoë and zoë2 did not.\n', ['Zoë']),
    ).toEqual([{ file: 'f.md', line: 1, column: 1, text: 'Zoë' }]);
  });
});

describe('scanEditorialLayers', () => {
  it('has nothing to check when no file declares a layer, with or without an author file', () => {
    expect(unwrap(scanEditorialLayers([UNDECLARED])).kind).toBe('nothing-to-check');
    expect(unwrap(scanEditorialLayers([AUTHOR_FILE, UNDECLARED])).kind).toBe('nothing-to-check');
  });

  it('refuses an author file under .agent/ even when no file declares a layer', () => {
    expect(unwrapErr(scanEditorialLayers([AUTHOR_FILE_IN_DOCTRINE, UNDECLARED]))).toContain(
      'never a directive',
    );
  });

  it('reports the leak in a surface file and nothing from the author file or an undeclared file', () => {
    expect(
      unwrap(scanEditorialLayers([AUTHOR_FILE, GENERAL, UNDECLARED, SURFACE_LEAK])),
    ).toMatchObject({
      kind: 'scanned',
      scan: {
        authorFilePath: AUTHOR_FILE.path,
        names: ['Ada', 'Lovelace'],
        hits: [
          { file: SURFACE_LEAK.path, line: 6 },
          { file: SURFACE_LEAK.path, line: 7 },
        ],
      },
    });
  });

  it('is clean when no general or surface file names the author', () => {
    expect(unwrap(scanEditorialLayers([AUTHOR_FILE, GENERAL]))).toMatchObject({
      kind: 'scanned',
      scan: { hits: [] },
    });
  });

  it('refuses declared layers with no author file, and an unknown layer (the author among them) propagates through the scan', () => {
    expect(unwrapErr(scanEditorialLayers([GENERAL]))).toContain('no file declares `author_names`');
    expect(
      unwrapErr(
        scanEditorialLayers([AUTHOR_FILE, { ...GENERAL, content: '---\nlayer: author\n---\n' }]),
      ),
    ).toContain('unknown layer');
  });
});
