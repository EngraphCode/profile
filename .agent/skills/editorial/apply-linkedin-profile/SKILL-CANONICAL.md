---
name: apply-linkedin-profile
classification: active
description: >-
  Apply the approved `linkedin/profile.md` to Jim's live LinkedIn profile through Chrome with Jim
  present, and the platform facts drafting and the sitting both need: field limits and folds as
  believed and as confirmed at the counter, what renders collapsed, the settings (Open to Work,
  update sharing, the industry from LinkedIn's taxonomy, the custom URL) and the PDF export that
  records a dated baseline before and after. Load it whenever asked to apply, publish, push live,
  update or sync the LinkedIn profile, export it as PDF, record a baseline, set the industry or
  Open to Work, or whenever a draft needs a field's limit or fold. Not for writing the copy
  (write-for-the-reader) nor composing the Skills list (linkedin-skills). Right looks like: the
  baseline first, one sitting in profile.md's order, each field read at its counter, settings
  last, the new baseline recorded. Wrong looks like: an edit without Jim's express request and
  presence, copy cut to a believed limit, a Save on a field nobody read.
---

# Apply the LinkedIn Profile

The copy lives in `linkedin/profile.md`, validated markdown in LinkedIn's section order; the
decisions and open items live in `linkedin/profile-replacement.md`. Applying the copy to the
live profile is a separate act under Jim's authorisation
(`.agent/directives/privacy.md` §LinkedIn workspace authorisation): this skill is that act's
order of work and the platform facts it rests on.

## Standing conditions, Jim's words

- Nothing changes on LinkedIn without his express request, with him present; the seat edits
  through Chrome in his session. Reading is permitted, anything but messages (7 October 2026).
- A PDF export of the live profile comes before any change (the baseline).
- Nothing is trimmed to a numeric target; a field's counter is read, never pre-empted.
- Messages, recommendation requests, reader experiments and settings changes each need his
  word; none is implied by the application.

## Before the sitting

1. `profile.md` validates (`pnpm --silent --filter linkedin validate-profile profile.md`) and
   every section's status line reads `approved`; the review copy
   (`linkedin/profile.review.md`) has been reconciled into it.
2. The container's open items are closed or deferred by Jim's word; the Skills list is validated
   per `.agent/skills/editorial/linkedin-skills/SKILL-CANONICAL.md`.
3. Load the Chrome tools in one `ToolSearch` call, read the tab context first, and work in a new
   tab. The site needs Jim's permission in the extension.
4. **Export the live profile as PDF** (profile page, the More menu, Save to PDF; confirm the menu
   live) and record the baseline as `linkedin/reference/current-profile-<date>.md` in the shape
   of the September record, now with the endorsement count beside every skill. The PDF stays
   out of the repository unless Jim says otherwise.

## The sitting

Work in `profile.md`'s order, one section at a time, and read every field at its counter:

1. **Top card:** name, pronouns, location, industry (see `references/industry-taxonomy.md`),
   the custom URL unchanged.
2. **Headline, About:** paste the plain text; LinkedIn shows markdown literally (the validator
   reports markup sightings), keeps line breaks, and folds the About after the first lines
   (`references/field-limits.md`).
3. **Featured:** links first, captions in their owners' words after LinkedIn's generated
   caption is replaced.
4. **Experience, Education, Licences, Projects, Publications, Volunteering, Organisations:**
   entries in the file's order; a card's linked skills come from the list, so the Skills section
   goes before any card that links one when the list changes.
5. **Skills:** the list, then the order, then the three pins; every name per the typeahead
   (`linkedin-skills` §Validate every name). A rename is a delete and an add and drops the
   endorsements.
6. **Settings, last:** Open to Work off; "Share profile updates with your network" off during
   the sitting, one deliberate notification at the end if Jim wants it; public visibility as now.

Jim reads each field before Save; the seat presses nothing he has not read. A dialog nobody
read is closed without saving.

## After the sitting

1. A second PDF export; the new baseline recorded beside the first.
2. `linkedin-skills/references/skills-registry.md` updated from the live list, with counts.
3. The container's statuses moved to live, with the date; the thread record's block; the
   entity graph untouched (LinkedIn is not a derived surface of `jcdotnet/content/entities.json`;
   the lane that brings LinkedIn content into the graph is Jim's to open).

## Gotchas

- The editor page (`pnpm --filter linkedin editor`) autosaves the whole text area and has no
  conflict check: reload the tab before typing after any file change.
- Believed limits are beliefs until a counter confirms them; `references/field-limits.md` says
  which is which and when it was read.
- The industry picker and the Skills typeahead are served from LinkedIn's taxonomies; a name
  typed past the dropdown is free text (`linkedin-skills` §What LinkedIn does with the list).
- The headline shows in search results, connection requests and messages; the About's first
  lines show before "see more".

## References

- `linkedin/README.md` §Working agreement, §The profile as validated markdown, and the editor
- `linkedin/profile.md`, `linkedin/profile-replacement.md` (the decisions and §Settings)
- `linkedin/reference/current-profile-2026-09-27.md`, the last baseline
- `.agent/directives/privacy.md` §LinkedIn workspace authorisation
- `.agent/skills/editorial/write-for-the-reader/SKILL-CANONICAL.md`, the copy's order of work
- `.agent/skills/editorial/linkedin-skills/SKILL-CANONICAL.md`, the Skills section
- `references/field-limits.md`, `references/industry-taxonomy.md`
