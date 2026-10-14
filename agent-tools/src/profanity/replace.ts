import { escapeRegExp } from '../core/escape-reg-exp.js';
import { type LexiconEntry, PROFANITY_LEXICON } from './lexicon.js';

/** One swear found and what it became. */
export interface Replacement {
  /** 1-based line of the text the swear sat on. */
  readonly line: number;
  /** The text matched, as written (case and suffix included). */
  readonly from: string;
  /** What replaced it, in the same case. */
  readonly to: string;
}

export interface ReplaceProfanityResult {
  readonly text: string;
  /** Every replacement made, in text order. */
  readonly replacements: readonly Replacement[];
}

/**
 * The suffixes carried from the swear onto its replacement, longest first so the
 * alternation prefers them: forking, forkings, shirtiest, shirtier, forkery, forkers, forker,
 * forked, forkes, forkin', forks, forky; and for a stem ending in e (arse), arsed, arser,
 * arsers, arses.
 */
const SUFFIXES = 'ings|ing|iest|ier|ery|ers|er|ed|es|in|rs|r|s|d|y';

/**
 * A word edge: no letter or digit on that side. Not `\b`, which counts `_` as a word
 * character and so misses a swear in underscore emphasis or a snake_case token.
 */
const EDGE_BEFORE = String.raw`(?<![\p{L}\p{N}])`;
const EDGE_AFTER = String.raw`(?![\p{L}\p{N}])`;

/**
 * Longer stems first, so a compound or a listed derived form wins over the stem inside it
 * (crappy → cruddy before crap → crud could make it crudy).
 */
const ORDERED: readonly LexiconEntry[] = [...PROFANITY_LEXICON].toSorted(
  (left, right) => right.from.length - left.from.length || left.from.localeCompare(right.from),
);

/**
 * One pass over the text: a whole word that is a stem, an optional doubled final letter
 * (shitting), and an optional carried suffix; case-insensitive and global. Each stem is its
 * own capture group, in `ORDERED` order, and the suffix is the last group.
 */
const PATTERN = new RegExp(
  `${EDGE_BEFORE}(?:${ORDERED.map(stemAlternative).join('|')})(${SUFFIXES})?${EDGE_AFTER}`,
  'giu',
);

/**
 * The stem's alternative. A bare row allows no letter after it. A stem ending in e drops
 * the e before -ing (arsing) and keeps it otherwise. Any other stem may double its final
 * letter before a suffix (shitting).
 */
function stemAlternative(entry: LexiconEntry): string {
  if (entry.bare === true) {
    return String.raw`(${escapeRegExp(entry.from)})(?![\p{L}])`;
  }
  if (entry.from.endsWith('e')) {
    return `(${escapeRegExp(entry.from.slice(0, -1))})(?:e|(?=ings?))`;
  }
  return `(${escapeRegExp(entry.from)})${escapeRegExp(entry.from.slice(-1))}?`;
}

/**
 * `text` with every swear in the lexicon replaced by its censored form, whole words only,
 * the case of the original kept (Fork, FORK) and its suffix carried (forking). Running the
 * result through again changes nothing.
 */
export function replaceProfanity(text: string): ReplaceProfanityResult {
  const replacements: Replacement[] = [];
  let out = '';
  let cursor = 0;
  for (const match of text.matchAll(PATTERN)) {
    const matched = match[0];
    const entry = matchedEntry(match);
    const suffix = (match.at(-1) ?? '').toLowerCase();
    const doubled = matched.length > entry.from.length + suffix.length;
    const replacement = matchCase(
      matched,
      `${base(entry, suffix, doubled)}${carried(entry, suffix)}`,
    );
    replacements.push({ line: lineAt(text, match.index), from: matched, to: replacement });
    out += `${text.slice(cursor, match.index)}${replacement}`;
    cursor = match.index + matched.length;
  }
  return { text: `${out}${text.slice(cursor)}`, replacements };
}

/** The lexicon entry whose stem group matched: the one defined group among the stems. */
function matchedEntry(match: RegExpExecArray): LexiconEntry {
  const index = match.slice(1, ORDERED.length + 1).findIndex((group) => group !== undefined);
  const entry = ORDERED[index];
  if (entry === undefined) {
    // Unreachable: a match always comes from exactly one stem alternative.
    return { from: match[0], to: match[0], source: 'fill-in' };
  }
  return entry;
}

/**
 * The replacement's stem: doubled at the end when the swear doubled its final consonant
 * before a vowel suffix and the replacement has the same short-vowel shape (crapped →
 * crudded, twatting → twitting), left alone otherwise (shitting → shirting).
 */
function base(entry: LexiconEntry, suffix: string, doubled: boolean): string {
  const vowelSuffix = /^[aeiouy]/u.test(suffix);
  const shortVowelEnding = /[^aeiou][aeiou][b-df-hj-np-tv-z]$/u.test(entry.to);
  return doubled && vowelSuffix && shortVowelEnding ? `${entry.to}${entry.to.slice(-1)}` : entry.to;
}

/**
 * The suffix as it attaches to the replacement. A stem ending in e that becomes a word
 * without one (arse → ash, shite → shirt) gives its e back before d, r and rs (ashed), and
 * before s only when the replacement ends in a sibilant (ashes, but shirts).
 */
function carried(entry: LexiconEntry, suffix: string): string {
  if (!entry.from.endsWith('e') || entry.to.endsWith('e')) {
    return suffix;
  }
  if (['d', 'r', 'rs'].includes(suffix)) {
    return `e${suffix}`;
  }
  return suffix === 's' && /(?:s|sh|ch|x|z)$/u.test(entry.to) ? 'es' : suffix;
}

/** `word` in the case shape of `sample`: all capitals, an initial capital, or as written. */
function matchCase(sample: string, word: string): string {
  if (sample.length > 1 && sample === sample.toUpperCase()) {
    return word.toUpperCase();
  }
  const initial = sample.charAt(0);
  if (initial === initial.toUpperCase() && initial !== initial.toLowerCase()) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  }
  return word;
}

/** The 1-based line number of `index` in `text`. */
function lineAt(text: string, index: number): number {
  let line = 1;
  for (let position = text.indexOf('\n'); position !== -1 && position < index;) {
    line += 1;
    position = text.indexOf('\n', position + 1);
  }
  return line;
}
