/**
 * What changed between two profile documents, for a reader: the review against the source,
 * section by section, as rows of aligned blocks (a heading, a paragraph, a list item), with the
 * words that differ marked inside a changed pair. Pure; the diff page renders it.
 *
 * Blocks align by a longest common subsequence on their exact text, so rewrapped lines never
 * count. A block that left one place and appears unchanged in another reads as moved, never as
 * deleted and typed again. The deletions and insertions left between two matches pair up in
 * order, kind for kind, and each pair is diffed word by word. Status lines are records, not
 * copy, and are not compared.
 *
 * @packageDocumentation
 */

import { commonPairs, diffWords, type Pair, type Segment } from './lcs.js';
import type { Body, ProfileDocument, Section } from './types.js';

/** What a block is: an entry's heading, a paragraph of copy, or an item of a list body. */
type BlockKind = 'heading' | 'paragraph' | 'item';

/** One unit of copy as a LinkedIn field or heading receives it. */
export interface Block {
  readonly kind: BlockKind;
  readonly text: string;
  /** The entry the block belongs to, by index in its section; null for the section's own body. */
  readonly entry: number | null;
}

/** One row of the diff: a block on one side, the other, or both. */
export type DiffRow =
  | { readonly kind: 'same'; readonly before: Block; readonly after: Block }
  | {
      readonly kind: 'changed';
      readonly before: Block;
      readonly after: Block;
      readonly segments: readonly Segment[];
    }
  | { readonly kind: 'removed'; readonly before: Block }
  | { readonly kind: 'added'; readonly after: Block }
  | { readonly kind: 'moved-out'; readonly before: Block }
  | { readonly kind: 'moved-in'; readonly after: Block };

/** One section's diff, with its index in each document for the renderer to find counts by. */
export interface SectionDiff {
  readonly heading: string;
  readonly before: number | null;
  readonly after: number | null;
  readonly changed: boolean;
  readonly rows: readonly DiffRow[];
}

function bodyBlocks(body: Body, entry: number | null): readonly Block[] {
  return body.kind === 'paragraphs'
    ? body.paragraphs.map((paragraph) => ({ kind: 'paragraph', text: paragraph.text, entry }))
    : body.items.map((item) => ({ kind: 'item', text: item.text, entry }));
}

/** The blocks of a section in reading order: its own body, then each entry's heading and body. */
function sectionBlocks(section: Section): readonly Block[] {
  return [
    ...bodyBlocks(section.body, null),
    ...section.entries.flatMap((entry, index) => [
      { kind: 'heading' as const, text: entry.heading.text, entry: index },
      ...bodyBlocks(entry.body, index),
    ]),
  ];
}

function sameBlock(x: Block, y: Block): boolean {
  return x.kind === y.kind && x.text === y.text;
}

function blockKey(block: Block): string {
  return `${block.kind}\n${block.text}`;
}

/** The blocks of one side that no pair matched, in order. */
function unmatched(blocks: readonly Block[], matched: ReadonlySet<number>): readonly Block[] {
  return blocks.filter((_, index) => !matched.has(index));
}

/** The keys of the blocks that left one place and arrived unchanged in another. */
function movedKeys(removed: readonly Block[], added: readonly Block[]): ReadonlySet<string> {
  const addedKeys = new Set(added.map(blockKey));
  return new Set(removed.map(blockKey).filter((key) => addedKeys.has(key)));
}

/** A gap between two matches: the blocks only before and the blocks only after, in order. */
interface Gap {
  readonly removed: readonly Block[];
  readonly added: readonly Block[];
}

function gapsOf(
  before: readonly Block[],
  after: readonly Block[],
  pairs: readonly Pair[],
): readonly Gap[] {
  const gaps: Gap[] = [];
  let i = 0;
  let j = 0;
  for (const [ai, bj] of pairs) {
    gaps.push({ removed: before.slice(i, ai), added: after.slice(j, bj) });
    i = ai + 1;
    j = bj + 1;
  }
  gaps.push({ removed: before.slice(i), added: after.slice(j) });
  return gaps;
}

/** A moved block at either cursor reads as moved where it falls. */
function movedRow(
  before: Block | undefined,
  after: Block | undefined,
  moved: ReadonlySet<string>,
): DiffRow | null {
  if (before !== undefined && moved.has(blockKey(before))) {
    return { kind: 'moved-out', before };
  }
  if (after !== undefined && moved.has(blockKey(after))) {
    return { kind: 'moved-in', after };
  }
  return null;
}

/**
 * The blocks at the two cursors as one row: a pair of one kind is changed; with kinds apart, the
 * before block waits for a partner of its kind later in the gap, else it is removed; one side
 * empty is one-sided; both empty is the gap's end.
 */
function pairRow(
  before: Block | undefined,
  after: Block | undefined,
  added: readonly Block[],
): DiffRow | null {
  if (before === undefined) {
    return after === undefined ? null : { kind: 'added', after };
  }
  if (after === undefined) {
    return { kind: 'removed', before };
  }
  if (before.kind === after.kind) {
    return { kind: 'changed', before, after, segments: diffWords(before.text, after.text) };
  }
  const partnerAhead = added.some((block) => block.kind === before.kind);
  return partnerAhead ? { kind: 'added', after } : { kind: 'removed', before };
}

/** The rows of one gap: moves where they fall, pairs kind for kind, the rest one-sided. */
function gapRows(gap: Gap, moved: ReadonlySet<string>): readonly DiffRow[] {
  const rows: DiffRow[] = [];
  let r = 0;
  let a = 0;
  for (;;) {
    const before = gap.removed[r];
    const after = gap.added[a];
    const row = movedRow(before, after, moved) ?? pairRow(before, after, gap.added.slice(a));
    if (row === null) {
      return rows;
    }
    rows.push(row);
    r += 'before' in row ? 1 : 0;
    a += 'after' in row ? 1 : 0;
  }
}

/** The rows of two block sequences: the gaps as above, each match as a same row. */
export function diffBlocks(before: readonly Block[], after: readonly Block[]): readonly DiffRow[] {
  const pairs = commonPairs(before, after, sameBlock);
  const moved = movedKeys(
    unmatched(before, new Set(pairs.map(([i]) => i))),
    unmatched(after, new Set(pairs.map(([, j]) => j))),
  );
  const rows: DiffRow[] = [];
  for (const [index, gap] of gapsOf(before, after, pairs).entries()) {
    rows.push(...gapRows(gap, moved));
    const pair = pairs[index];
    const matchedBefore = pair === undefined ? undefined : before[pair[0]];
    const matchedAfter = pair === undefined ? undefined : after[pair[1]];
    if (matchedBefore !== undefined && matchedAfter !== undefined) {
      rows.push({ kind: 'same', before: matchedBefore, after: matchedAfter });
    }
  }
  return rows;
}

/** A section with its index in its document. */
interface Located {
  readonly index: number;
  readonly section: Section;
}

function locate(document: ProfileDocument, heading: string): Located | null {
  const index = document.sections.findIndex((section) => section.heading.text === heading);
  const section = document.sections[index];
  return section === undefined ? null : { index, section };
}

function sectionDiff(heading: string, before: Located | null, after: Located | null): SectionDiff {
  const rows = diffBlocks(
    before === null ? [] : sectionBlocks(before.section),
    after === null ? [] : sectionBlocks(after.section),
  );
  return {
    heading,
    before: before === null ? null : before.index,
    after: after === null ? null : after.index,
    changed: rows.some((row) => row.kind !== 'same'),
    rows,
  };
}

/**
 * Compare two documents section by section, matched by heading text: the after document's
 * sections in its order, then any section only the before document has.
 */
export function diffDocuments(
  before: ProfileDocument,
  after: ProfileDocument,
): readonly SectionDiff[] {
  const afterDiffs = after.sections.map((section, index) =>
    sectionDiff(section.heading.text, locate(before, section.heading.text), { index, section }),
  );
  const onlyBefore = before.sections
    .map((section, index): Located => ({ index, section }))
    .filter(({ section }) => locate(after, section.heading.text) === null)
    .map((located) => sectionDiff(located.section.heading.text, located, null));
  return [...afterDiffs, ...onlyBefore];
}
