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
2. **Update sharing off, then Headline, About:** "Share profile updates with your network" off
   before the first Save, since a saved edit with it on notifies the network at once; then paste
   the plain text; LinkedIn shows markdown literally (the validator reports markup sightings),
   keeps line breaks, and folds the About after the first lines (`references/field-limits.md`).
3. **Featured:** links first, captions in their owners' words after LinkedIn's generated
   caption is replaced.
4. **Experience, Education, Licences, Projects, Publications, Volunteering, Organisations:**
   entries in the file's order; a card's linked skills come from the list, so the Skills section
   goes before any card that links one when the list changes. An edited position keeps the
   skills it was linked to before the edit wherever the name is still on the list, so every
   position's linked skills are read at its dialog and set from the list, as the projects' are.
5. **Skills:** the list, then the order, then the three pins; every name per the typeahead
   (`linkedin-skills` §Validate every name). A rename is a delete and an add and drops the
   endorsements.
6. **Settings, last:** Open to Work off; the one deliberate notification at the end if Jim wants
   it (update sharing was turned off at step 2); public visibility as now.

Jim reads each field before Save; the seat presses nothing he has not read. A dialog nobody
read is closed without saving.

## After the sitting

1. A second PDF export; the new baseline recorded beside the first.
2. `linkedin-skills/references/skills-registry.md` updated from the live list, with counts.
3. Every applied section's status note records the application date (the validator's status
   tokens are `approved`, `drafted` and `open`, so "live" is a note, never a token); the thread
   record's block; the entity graph untouched (LinkedIn is not a derived surface of `jcdotnet/content/entities.json`;
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
- Adding a position, a past one included, replaced the headline with "<title> at <organisation>"
  on Save (observed 2026-10-24, the HP Labs entry). After any position is added, the headline is
  read at the Edit intro dialog and restored from the source before anything else.
- The description of a position and the headline are contenteditable fields, not inputs: a
  form fill refuses them and typing dropped doubled letters now and then ("asistants"). The
  sitting of 2026-10-24 set them by one `insertText` command through the page's own script
  tool and read the field back for an exact match before Save; plain inputs took a form fill.
- A publication's stored date can fail LinkedIn's own validation on edit (31 December 2008 shown as
  1 January 2009): the Save is refused with "Please enter a valid date" under the field and the
  dialog stays open, so a navigation away loses the edit silently. Every Save is followed by a
  read of the page, and a refused date is set to the one the profile displays.
- The experience details page loads its last entry only after a scroll to the end of the list
  (2026-10-24: the HP Labs entry read as absent, a duplicate added, the original then found and
  the duplicate deleted). Every details page is scrolled to its end before an entry is read as
  absent.
- Endorsements sit on skills and survive a position's deletion; recommendations sit on
  positions and go with them. The two were conflated on 2026-10-24, so the received list is read
  at the Recommendations page before a deletion is weighed.
- Contact info carries three websites; the type list is Personal, Company, Blog, RSS feed,
  Portfolio and Other, and Other has no custom label field (2026-10-24).
- A position's skill links survive its edit and the Skills rebuild (2026-10-24: after the
  sitting every position still carried the old profile's links among System Architecture,
  Open Standards, Open-Source Software, Software Development, JavaScript and TypeScript, the
  Principal card showing "TypeScript, Open Standards, +4 skills"). The sitting sets them. The
  "N experiences at ..." line under a skill opens an overlay listing its positions and
  projects; the overlay's address refuses direct navigation and its text sits outside what the
  page's script tool can query, so it is read from a screenshot after a click on the skills
  page.
- A position's or a project's own skill overlay opens by direct address,
  `/in/<handle>/overlay/<id>/skill-associations-details/?associationType=position` (or
  `projects`), the id taken from the card's skills link; its text is read from a screenshot
  (2026-10-25). A position took thirteen on 2026-10-25. The route for setting links is the
  skill's own edit dialog on the skills page ("Tell us where you put this skill to use"),
  which lists every surface with a checkbox: positions, education entries, certificates,
  projects, the volunteering entry, publications and organisations (24 on 2026-10-25, 23 once the two certificates were
  deleted, 24 again with a project added); the
  card-side dialogs reach positions, projects, education and certificates only.
- In that dialog a form fill on a checkbox is not a tick: the input reads as checked, Save
  closes the dialog, and the server keeps the old state (2026-10-25, twenty dialogs re-read).
  A real click on the row, the script tool clicking Save, a wait, and the dialog re-opened
  and read are the save; the refs are read afresh on every open, since any entry added to
  the profile moves every row below it, and a dialog with an Endorsements section carries
  its Save button at a different ref. A position's edit dialog lists its skills as pills
  with no ordering control; a project's edit dialog lists them with drag handles.
- The skills details page loads its rows on real wheel scrolls only (the computer tool), not
  on a scripted scroll; and the page's script tool refuses to return any string holding a
  query string or base64, so an address is reduced to its id before it is returned.
- The add-project form (2026-10-25, the Obaith project): a form fill persisted on the name
  input, the description textarea and the native selects for the dates and the association,
  all read back on the saved card. The skill typeahead's options took a script click once the
  name was typed into the field. The media link's address typed by the computer tool lost a
  letter ("ww.obaith") and the preview failed; the address set through the page's script by
  the native value setter with input and change events was accepted, the preview loaded, and
  the title field took the same route. The Add media button and the sub-dialog's Add and
  Save needed real clicks.
- A publication's author field searches the profile's connections only (2026-10-25: a
  connection's name returned at once, three co-authors who are not connections returned
  nothing). A co-author who left an entry at an edit's Save cannot be restored unless
  connected.

## References

- `linkedin/README.md` §Working agreement, §The profile as validated markdown, and the editor
- `linkedin/profile.md`, `linkedin/profile-replacement.md` (the decisions and §Settings)
- `linkedin/reference/current-profile-2026-09-27.md`, the last baseline
- `.agent/directives/privacy.md` §LinkedIn workspace authorisation
- `.agent/skills/editorial/write-for-the-reader/SKILL-CANONICAL.md`, the copy's order of work
- `.agent/skills/editorial/linkedin-skills/SKILL-CANONICAL.md`, the Skills section
- `references/field-limits.md`, `references/industry-taxonomy.md`
