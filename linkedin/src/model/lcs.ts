/**
 * The longest common subsequence of two small sequences, and the word diff built on it. Pure;
 * `diff.ts` aligns blocks with the first and marks a changed pair's words with the second.
 *
 * @packageDocumentation
 */

/** An index pair of a common subsequence: the position in `a` and the position in `b`. */
export type Pair = readonly [number, number];

/** A run of words that is on both sides, only on the before side, or only on the after side. */
export interface Segment {
  readonly kind: 'same' | 'removed' | 'added';
  /** The words of the run, single-spaced. */
  readonly text: string;
}

/**
 * The index pairs of a longest common subsequence of `a` and `b` under `equal`, in order. The
 * table is the classic one of suffix lengths; the inputs are small (the blocks of a section, the
 * words of a paragraph), so quadratic space is fine.
 */
export function commonPairs<T>(
  a: readonly T[],
  b: readonly T[],
  equal: (x: T, y: T) => boolean,
): readonly Pair[] {
  const width = b.length + 1;
  const lengths = new Uint32Array((a.length + 1) * width);
  const at = (i: number, j: number): number => lengths[i * width + j] ?? 0;
  const same = (i: number, j: number): boolean => {
    const x = a[i];
    const y = b[j];
    return x !== undefined && y !== undefined && equal(x, y);
  };
  for (let i = a.length - 1; i >= 0; i -= 1) {
    for (let j = b.length - 1; j >= 0; j -= 1) {
      lengths[i * width + j] = same(i, j)
        ? at(i + 1, j + 1) + 1
        : Math.max(at(i + 1, j), at(i, j + 1));
    }
  }
  const pairs: Pair[] = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (same(i, j)) {
      pairs.push([i, j]);
      i += 1;
      j += 1;
    } else if (at(i + 1, j) >= at(i, j + 1)) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return pairs;
}

const WORD = /\S+/g;

function words(text: string): readonly string[] {
  return text.match(WORD) ?? [];
}

/** Append a run to the segments, merging it into the last when the kinds agree. */
function appendRun(segments: Segment[], kind: Segment['kind'], run: readonly string[]): void {
  if (run.length === 0) {
    return;
  }
  const text = run.join(' ');
  const last = segments.at(-1);
  if (last !== undefined && last.kind === kind) {
    segments[segments.length - 1] = { kind, text: `${last.text} ${text}` };
  } else {
    segments.push({ kind, text });
  }
}

/** The word-level difference of two texts: runs of the same, removed and added words, in order. */
export function diffWords(before: string, after: string): readonly Segment[] {
  const a = words(before);
  const b = words(after);
  const segments: Segment[] = [];
  let i = 0;
  let j = 0;
  for (const [ai, bj] of commonPairs(a, b, (x, y) => x === y)) {
    appendRun(segments, 'removed', a.slice(i, ai));
    appendRun(segments, 'added', b.slice(j, bj));
    appendRun(segments, 'same', a.slice(ai, ai + 1));
    i = ai + 1;
    j = bj + 1;
  }
  appendRun(segments, 'removed', a.slice(i));
  appendRun(segments, 'added', b.slice(j));
  return segments;
}
