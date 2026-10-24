import { unwrap } from '@engraph/result';
import { describe, expect, it } from 'vitest';

import { diffBlocks, diffDocuments, type Block } from './diff.js';
import { commonPairs, diffWords } from './lcs.js';
import { parse } from './parse.js';
import type { StructureTable } from './structure-table.js';

const table: StructureTable = {
  sections: [
    { heading: 'About', body: 'paragraphs', entries: false, limit: 2600, entryLimit: null },
    { heading: 'Experience', body: 'paragraphs', entries: true, limit: null, entryLimit: 2000 },
    { heading: 'Skills', body: 'list', entries: false, limit: null, entryLimit: null },
  ],
  folds: [200, 300],
};

const document = (text: string) => unwrap(parse(text, table));

const block = (kind: Block['kind'], text: string, entry: number | null = null): Block => ({
  kind,
  text,
  entry,
});

const equal = (x: string, y: string): boolean => x === y;

describe('commonPairs', () => {
  it('pairs the longest common subsequence in order', () => {
    const pairs = commonPairs(['a', 'b', 'c', 'd'], ['b', 'd', 'a'], equal);

    expect(pairs).toEqual([
      [1, 0],
      [3, 1],
    ]);
  });

  it('pairs nothing when a side is empty', () => {
    expect(commonPairs([], ['a'], equal)).toEqual([]);
  });
});

describe('diffWords', () => {
  it('returns one same run for identical text, whatever its spacing', () => {
    expect(diffWords('one two  three', 'one two three')).toEqual([
      { kind: 'same', text: 'one two three' },
    ]);
  });

  it('marks a replaced word as removed then added between the same runs', () => {
    expect(diffWords('the old word here', 'the new word here')).toEqual([
      { kind: 'same', text: 'the' },
      { kind: 'removed', text: 'old' },
      { kind: 'added', text: 'new' },
      { kind: 'same', text: 'word here' },
    ]);
  });

  it('marks words added at the end and words removed from the start', () => {
    expect(diffWords('first second', 'second third')).toEqual([
      { kind: 'removed', text: 'first' },
      { kind: 'same', text: 'second' },
      { kind: 'added', text: 'third' },
    ]);
  });
});

describe('diffBlocks', () => {
  it('reads identical sequences as same rows', () => {
    const blocks = [block('heading', 'Role · Place', 0), block('paragraph', 'Copy.', 0)];

    const rows = diffBlocks(blocks, blocks);

    expect(rows.map((row) => row.kind)).toEqual(['same', 'same']);
  });

  it('pairs a changed paragraph with its word diff', () => {
    const rows = diffBlocks(
      [block('paragraph', 'I built it.')],
      [block('paragraph', 'I rebuilt it.')],
    );

    expect(rows).toEqual([
      {
        kind: 'changed',
        before: block('paragraph', 'I built it.'),
        after: block('paragraph', 'I rebuilt it.'),
        segments: [
          { kind: 'same', text: 'I' },
          { kind: 'removed', text: 'built' },
          { kind: 'added', text: 'rebuilt' },
          { kind: 'same', text: 'it.' },
        ],
      },
    ]);
  });

  it('reads a block that moved as moved out of one place and into another, never as changed', () => {
    const rows = diffBlocks(
      [block('paragraph', 'One.'), block('paragraph', 'Two.'), block('paragraph', 'Three.')],
      [block('paragraph', 'Two.'), block('paragraph', 'Three.'), block('paragraph', 'One.')],
    );

    expect(rows).toEqual([
      { kind: 'moved-out', before: block('paragraph', 'One.') },
      { kind: 'same', before: block('paragraph', 'Two.'), after: block('paragraph', 'Two.') },
      { kind: 'same', before: block('paragraph', 'Three.'), after: block('paragraph', 'Three.') },
      { kind: 'moved-in', after: block('paragraph', 'One.') },
    ]);
  });

  it('pairs kind for kind, so a heading waits past an inserted paragraph for its namesake', () => {
    const rows = diffBlocks(
      [block('heading', 'Role · 2020', 0), block('paragraph', 'Copy.', 0)],
      [
        block('paragraph', 'Intro.'),
        block('heading', 'Role · 2021', 0),
        block('paragraph', 'Copy.', 0),
      ],
    );

    expect(rows.map((row) => row.kind)).toEqual(['added', 'changed', 'same']);
  });

  it('reads a block of another kind with no partner ahead as removed', () => {
    const rows = diffBlocks(
      [block('heading', 'Role · 2020', 0), block('paragraph', 'Copy.', 0)],
      [block('paragraph', 'Intro.'), block('paragraph', 'Copy.', 0)],
    );

    expect(rows.map((row) => row.kind)).toEqual(['removed', 'added', 'same']);
  });

  it('reads an entry split into two as the first changed and the second added', () => {
    const before = [
      block('heading', 'Role · 2020 – Present', 0),
      block('paragraph', 'Opening.', 0),
      block('paragraph', 'Rebuild.', 0),
      block('paragraph', 'Plugin.', 0),
      block('paragraph', 'Close.', 0),
    ];
    const after = [
      block('heading', 'Role · 2022 – Present', 0),
      block('paragraph', 'Later opening.', 0),
      block('paragraph', 'Plugin.', 0),
      block('paragraph', 'Close.', 0),
      block('heading', 'Role · 2020 – 2022', 1),
      block('paragraph', 'Early opening.', 1),
      block('paragraph', 'Rebuild.', 1),
    ];

    const rows = diffBlocks(before, after);

    expect(rows.map((row) => row.kind)).toEqual([
      'changed',
      'changed',
      'moved-out',
      'same',
      'same',
      'added',
      'added',
      'moved-in',
    ]);
  });
});

describe('diffDocuments', () => {
  const source = document(
    '# Profile\n\n## About\n\nStatus: approved\n\nAbout copy.\n\n## Experience\n\nStatus: drafted\n\n### Role · Place\n\nStatus: drafted\n\nEntry copy.\n\n## Skills\n\nStatus: open\n\n- Tooling\n',
  );

  it('reads a document against itself as unchanged sections with same rows', () => {
    const diffs = diffDocuments(source, source);

    expect(diffs.map((diff) => [diff.heading, diff.changed])).toEqual([
      ['About', false],
      ['Experience', false],
      ['Skills', false],
    ]);
    expect(diffs[1]?.rows.map((row) => row.kind)).toEqual(['same', 'same']);
    expect(diffs[1]).toMatchObject({ before: 1, after: 1 });
  });

  it('does not compare status lines', () => {
    const review = document(
      '# Profile\n\n## About\n\nStatus: drafted (edited)\n\nAbout copy.\n\n## Experience\n\nStatus: open\n\n### Role · Place\n\nStatus: open\n\nEntry copy.\n\n## Skills\n\nStatus: open\n\n- Tooling\n',
    );

    expect(diffDocuments(source, review).every((diff) => !diff.changed)).toBe(true);
  });

  it('reads a section only one side has as wholly added or wholly removed', () => {
    const review = document(
      '# Profile\n\n## About\n\nStatus: approved\n\nAbout copy.\n\n## Skills\n\nStatus: open\n\n- Tooling\n- Testing\n',
    );

    const diffs = diffDocuments(source, review);

    expect(diffs.map((diff) => diff.heading)).toEqual(['About', 'Skills', 'Experience']);
    expect(diffs[1]?.rows.map((row) => row.kind)).toEqual(['same', 'added']);
    expect(diffs[2]).toMatchObject({ before: 1, after: null });
    expect(diffs[2]?.rows.map((row) => row.kind)).toEqual(['removed', 'removed']);
  });
});
