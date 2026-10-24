/**
 * The diff page's pane as a string of HTML: the review against the source, section by section,
 * in two columns, the words that differ marked. Pure: the page sets it as the pane's content; the
 * tests read it.
 *
 * @packageDocumentation
 */

import { diffDocuments, type Block, type DiffRow, type SectionDiff } from '../model/diff.js';
import type { Segment } from '../model/lcs.js';
import type { FileReport } from '../model/report.js';
import type { Validation } from '../model/validate.js';

import { countText, errorStripHtml, escapeHtml } from './render.js';

/** What the pane renders from: the source's report and the review's. */
export interface DiffRenderInput {
  readonly before: FileReport;
  readonly after: FileReport;
}

type Side = 'before' | 'after';

/** The two validations, for the counts under entry headings. */
interface Validations {
  readonly before: Validation | null;
  readonly after: Validation | null;
}

const MARKERS: Readonly<Record<DiffRow['kind'], string>> = {
  same: '',
  changed: 'changed',
  removed: 'removed',
  added: 'added',
  'moved-out': 'moved from here',
  'moved-in': 'moved to here',
};

function parseStrip(name: string, report: FileReport): string {
  if (report.kind !== 'unparsable') {
    return '';
  }
  const line = 'line' in report.error ? `L${String(report.error.line)}` : '-';
  return `<div class="strip strip-error"><strong>Cannot parse ${name}:</strong> ${line} ${report.error.kind}</div>`;
}

/** The count line of an entry on one side, from that side's validation notes. */
function countLine(validation: Validation | null, section: number | null, entry: number): string {
  const note = validation?.notes.find(
    (candidate) =>
      candidate.kind === 'count' &&
      candidate.where.kind === 'entry' &&
      candidate.where.section === section &&
      candidate.where.entry === entry,
  );
  if (note === undefined || note.kind !== 'count') {
    return '';
  }
  const over = note.limit !== null && note.count > note.limit ? ' over' : '';
  return `<div class="counts${over}">${countText(note.count, note.limit)}</div>`;
}

function markedSegment(segment: Segment): string {
  const text = escapeHtml(segment.text);
  if (segment.kind === 'same') {
    return text;
  }
  return segment.kind === 'removed' ? `<del>${text}</del>` : `<ins>${text}</ins>`;
}

/** One side of a changed row: the same runs and that side's own runs, marked. */
function segmentsHtml(segments: readonly Segment[], side: Side): string {
  const own = side === 'before' ? 'removed' : 'added';
  return segments
    .filter((segment) => segment.kind === 'same' || segment.kind === own)
    .map(markedSegment)
    .join(' ');
}

function blockOn(row: DiffRow, side: Side): Block | null {
  if (side === 'before') {
    return 'before' in row ? row.before : null;
  }
  return 'after' in row ? row.after : null;
}

function innerHtml(row: DiffRow, side: Side, block: Block): string {
  return row.kind === 'changed' ? segmentsHtml(row.segments, side) : escapeHtml(block.text);
}

function blockHtml(block: Block, inner: string, counts: string): string {
  if (block.kind === 'heading') {
    return `<h3>${inner}</h3>${counts}`;
  }
  return block.kind === 'item' ? `<p class="item">${inner}</p>` : `<p>${inner}</p>`;
}

function cellHtml(row: DiffRow, side: Side, diff: SectionDiff, validations: Validations): string {
  const block = blockOn(row, side);
  if (block === null) {
    return `<div class="cell ${side} empty"></div>`;
  }
  const counts =
    block.kind === 'heading' && block.entry !== null
      ? countLine(validations[side], diff[side], block.entry)
      : '';
  return `<div class="cell ${side}">${blockHtml(block, innerHtml(row, side, block), counts)}</div>`;
}

/** The row's marker; a changed pair whose words all match differs only in spacing, and says so. */
function markerOf(row: DiffRow): string {
  if (row.kind === 'changed' && row.segments.every((segment) => segment.kind === 'same')) {
    return 'spacing changed';
  }
  return MARKERS[row.kind];
}

function rowHtml(row: DiffRow, diff: SectionDiff, validations: Validations): string {
  const marker = markerOf(row);
  const badge = marker === '' ? '' : `<span class="badge marker">${marker}</span>`;
  return (
    `<div class="row row-${row.kind}"><div class="cell mark">${badge}</div>` +
    cellHtml(row, 'before', diff, validations) +
    cellHtml(row, 'after', diff, validations) +
    '</div>'
  );
}

function sectionHtml(diff: SectionDiff, validations: Validations): string {
  const rows = diff.rows.map((row) => rowHtml(row, diff, validations)).join('');
  const heading = escapeHtml(diff.heading);
  if (!diff.changed) {
    return `<details class="diff-section"><summary><h2>${heading} <span class="badge status-open">unchanged</span></h2></summary><div class="rows">${rows}</div></details>`;
  }
  return `<section class="diff-section"><h2>${heading} <span class="badge changed">changed</span></h2><div class="rows">${rows}</div></section>`;
}

function summaryStrip(diffs: readonly SectionDiff[]): string {
  const changed = diffs.filter((diff) => diff.changed);
  if (changed.length === 0) {
    return '<div class="strip strip-ok">No differences: the review matches the source.</div>';
  }
  const names = changed.map((diff) => escapeHtml(diff.heading)).join(', ');
  const count = `${String(changed.length)} of ${String(diffs.length)} sections changed`;
  return `<div class="strip strip-ok">${count}: ${names}</div>`;
}

/** Render the whole pane. */
export function renderDiff(input: DiffRenderInput): string {
  if (input.before.kind === 'unparsable' || input.after.kind === 'unparsable') {
    return parseStrip('the source', input.before) + parseStrip('the review', input.after);
  }
  const diffs = diffDocuments(input.before.document, input.after.document);
  const validations: Validations = {
    before: input.before.validation,
    after: input.after.validation,
  };
  return (
    summaryStrip(diffs) +
    errorStripHtml(input.after, 'The review file: ') +
    diffs.map((diff) => sectionHtml(diff, validations)).join('')
  );
}
