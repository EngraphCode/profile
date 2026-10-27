---
name: cv
classification: active
metadata:
  layer: surface
description: >-
  A CV as a surface, for any author: a controlled document for a deliberate evidential read, in
  the author's own order, in browser and in print, whose page hierarchy and the relationships
  between adjacent sections do the work a profile's fragments cannot; its register; what it holds
  that a profile does not; and its coherence with the author's profile, which stands alone and is
  never assumed read. Load it whenever a CV is drafted, revised, measured against the profile, or
  generated from a content model, and whenever a profile lane hands its facts and decisions to the
  CV. Not for writing the copy (write-for-the-reader) nor the author's own content (the host's
  content model and public author file). Right looks like: the CV and the profile read as one person
  with different compositions, every fact the same, no sentence copied across. Wrong looks like: a
  profile section pasted into the CV, a CV cut to the profile's limits, two surfaces that
  contradict each other on a date or a title.
---

# The CV as a Surface

A CV is the surface the author controls entirely: the order of sections, the hierarchy, the
proportion, the page. The reader sustains a deliberate evidential read, so the CV can depend on
page-level hierarchy, cumulative evidence and the relationships between adjacent sections in a
way a profile, read in fragments, cannot (`editorial-strategy.md` §Composition is
surface-specific). This skill holds what the surface needs; the copy's order of work is
`write-for-the-reader`, the voice craft is `editorial-voice`, and the author's own voice,
facts and standing decisions are in the host's author file, `docs/editorial/author.md`.

## The register

Evidential, precise, agentic, scannable (`editorial-voice` §CV register). The positioning makes
the abstract claims; the experience sections show them happening; the capabilities bridge both.
Every sentence claims or demonstrates; there is no filler. The people who decide read first on a
scan, so significance is visible on a first pass and the hierarchy carries it.

## What the CV holds that a profile does not

- **Its own order and weight.** The author decides what comes first and how much space each part
  takes; recent, distinctive and decision-relevant evidence gets more space, and chronology does
  not imply equal weight.
- **Designed hierarchy.** Headings, proportion and adjacency carry meaning; a reader can see the
  shape of a career on one page before reading a sentence.
- **Print and browser.** Both renderings are inspected; the PDF is a rendered surface with its own
  page breaks and must be read as a page, not as the browser's scroll.
- **Cumulative evidence.** Adjacent sections build on each other; a capability named in the
  positioning is shown two sections later and the reader is expected to connect them.
- **The whole career.** Entries a profile leaves out for its reader's attention can stay on the CV
  as plain facts, and the public author file says which (a skills list that is a superset of the
  profile's is a decision the author makes, never a default).

## Coherence with the profile

The profile stands alone: there is no guarantee or expectation that anyone reading it will read
the CV, nor the reverse. Coherence means the reader meets the same person, facts and values, not
the same sentences or architecture: the profile wins recognition in a fixed, fragmented interface
with selective repetition because readers enter by section; the CV sustains one designed read. The
two are complementary and never contradict each other.

The coherence check, run whenever either surface changes:

1. **Facts.** Every date, title, organisation, figure, licence and product name identical on both,
   as their owners spell them; a difference is a defect on one side and is cured at the source.
2. **The story.** The beliefs each surface must leave (`write-for-the-reader` §3) are the same
   beliefs; the moments that prove them may differ by surface.
3. **The level.** The title is a fact carried plainly on both; the level of operation shows in
   what was built, the call made and the cost accepted, never argued by an org chart on either.
4. **The verbs.** The author's relationship to each piece of work is described with the same
   verbs on both surfaces (conceived, built, researched, enabled), chosen with the author.
5. **No copied sentence.** A sentence that appears on both surfaces is traced to each surface's
   intent, and one of them is rewritten for its reader.
6. **The private boundary.** Nothing the author keeps off one public surface appears on the
   other.

## The hand-off from a profile lane

When a profile has been rewritten with the author present, it is the most verified source of the
author's facts the estate holds: the dates and titles settled in conversation, the figures with
their sources, the product names as their owners spell them, the Skills list with its provenance,
and the shape decisions recorded (in this host, `docs/editorial/decision-records/`). The CV lane
starts from those, in the direction the author sets (in this host, profile to CV, at the author's
word), and treats the profile's sentences as facts to write from, never as copy to paste: the
same hop discipline as the author's own answers (`write-for-the-reader` §2).

A shape decision that worked on the profile is a candidate for the CV, not a rule: one whole
entry for the principal role carrying why, the call, the cost, the authority and the impact,
with the how in project entries, suited a surface with a 2,000-character field; the CV's page may
want the same arc in a different proportion.

## Where the CV is generated

Where a CV is rendered from a content model (in this host the entity graph is the single source of
truth for identity and shared facts and the CV, the PDF and every rendered surface derive from
it), the model owns the facts and the authored copy and the rendering is never edited by hand; a
change belongs in the model, and the build brings every surface into alignment. The coherence
check above then runs between the model's content and the profile's source, and the rendered CV
is inspected in browser and print as the proof.

## References

- `.agent/directives/editorial-strategy.md` §Composition is surface-specific, §Surface standards
- `.agent/skills/editorial/write-for-the-reader/SKILL-CANONICAL.md`: the order of work
- `.agent/skills/editorial/editorial-voice/SKILL-CANONICAL.md` §CV register
- `.agent/skills/editorial/linkedin-profile/SKILL-CANONICAL.md`: the profile's fragments and limits
- `.agent/directives/editorial-guidance.md`: how a person is modelled and conveyed
- `docs/editorial/author.md`: the host's author file
- In this host: `jcdotnet/content/cv.content.json` and `jcdotnet/content/entities.json` (the
  content model), `linkedin/research/exceptional-cv-linkedin-research-report-2026-09-26.md` §5
  (CV craft) and its evidence companion
