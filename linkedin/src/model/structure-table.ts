/**
 * The closed structure of a LinkedIn profile as this workspace writes it: the sections in
 * LinkedIn's order, which of them hold entries, the body kind of each, and the
 * character limits. The parser reads the body kind; the validator reads the rest; the page learns
 * limits and folds through the validator's notes and never imports this table.
 *
 * @packageDocumentation
 */

/** How the copy under a heading is written. */
type BodyKind = 'paragraphs' | 'list';

/** One section of the profile. */
export interface SectionSpec {
  /** The H2 text, exactly. */
  readonly heading: string;
  readonly body: BodyKind;
  /** Whether H3 entries may sit under this section. */
  readonly entries: boolean;
  /** The character limit of the section's own body, or null when none is known. */
  readonly limit: number | null;
  /** The character limit of each entry's body, or null when none is known. */
  readonly entryLimit: number | null;
}

/** The sections in order and the fold offsets a scan sees before "see more". */
export interface StructureTable {
  readonly sections: readonly SectionSpec[];
  readonly folds: readonly number[];
}

function section(
  heading: string,
  body: BodyKind,
  entries: boolean,
  limit: number | null,
  entryLimit: number | null,
): SectionSpec {
  return { heading, body, entries, limit, entryLimit };
}

/**
 * The LinkedIn profile's structure. The limits are LinkedIn's, read from its edit forms' counters
 * by the owner on 19 October 2026 (headline 220, About 2,600, a position's description 2,000) and
 * on 21 October 2026 (a project's description 2,000); a field whose counter has not been read
 * has none. The folds are the first 200 and 300
 * characters, what a collapsed entry shows.
 */
export const PROFILE_STRUCTURE: StructureTable = {
  sections: [
    section('Top card', 'paragraphs', false, null, null),
    section('Headline', 'paragraphs', false, 220, null),
    section('About', 'paragraphs', false, 2600, null),
    section('Featured', 'paragraphs', true, null, null),
    section('Experience', 'paragraphs', true, null, 2000),
    section('Education', 'paragraphs', true, null, null),
    section('Licences and certifications', 'paragraphs', true, null, null),
    section('Projects', 'paragraphs', true, null, 2000),
    section('Publications', 'paragraphs', true, null, null),
    section('Volunteering', 'paragraphs', true, null, null),
    section('Organisations', 'paragraphs', true, null, null),
    section('Skills', 'list', false, null, null),
    section('Recommendations', 'paragraphs', true, null, null),
    section('Interests', 'paragraphs', false, null, null),
    section('Contact', 'paragraphs', false, null, null),
  ],
  folds: [200, 300],
};
