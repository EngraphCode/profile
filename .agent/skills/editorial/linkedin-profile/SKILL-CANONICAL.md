---
name: linkedin-profile
classification: active
metadata:
  layer: surface
description: >-
  A LinkedIn profile as a surface, for any author: what the platform shows and hides (the
  headline in search results, the About's fold, what a card shows of a position's or a project's
  skills, the order of projects, the three contact links), the field limits as verified at the
  counters and dated, the Skills section (the cap, the three pins a scanner reads and Recruiter
  exports, endorsements, the standardised taxonomy behind the typeahead, the selection method and
  the validation of every name), how skills are linked to the surfaces that evidence them, which
  edits notify whom, and the application sitting with its proofs (the PDF baseline before and
  after, each field read at its counter, every save proved by re-opening the dialog). Load it
  whenever a profile is drafted for this surface, applied, read back, baselined, or whenever a
  field's limit, a card's behaviour, a skill name's standardised form or an endorsement is in
  question. Not for writing the copy (write-for-the-reader) nor the author's own list and
  decisions (the host's public author file and workspace). Right looks like: a limit read at the
  counter, a name taken from the typeahead, a save proved by the re-opened dialog, the author
  present for every live change. Wrong looks like: copy cut to a believed limit, a free-text
  skill saved past the dropdown, a tick trusted from a form fill, a Save alert read as proof.
---

# The LinkedIn Profile as a Surface

The copy lives in the author's workspace as validated markdown in LinkedIn's section order (in
this host, `linkedin/profile.md`, with the decisions in `linkedin/profile-replacement.md`);
applying it to the live profile is a separate act under the author's authorisation. This skill is
the surface's facts, the Skills section's method, and the application's order of work. It names
no person: the author's own list, registry and standing decisions are in the author file
(`docs/editorial/author.md`) and the workspace.

Each platform fact carries the date it was read or verified. A fact without a date is a belief
and says so. LinkedIn changes on its own clock; a fact older than the last sitting is re-verified
at the next one, and `references/field-limits.md` says which limits are verified and when.

## What the surface shows and hides

A profile is read in fragments. Readers enter by section, previews collapse, cards show a
projection of the entry, and a search result shows the headline alone. The reader's decision
(`write-for-the-reader` §1) names the fragment the reader meets, and the copy is designed for the
collapsed form first.

- **The headline** shows in search results, connection requests and messages, on its own. It
  carries identity, not claims; a headline made to carry a claim because search shows it alone is
  trying to do a job it was not intended for (`write-for-the-reader` §2). Adding a position, a
  past one included, replaced the headline with "title at organisation" on Save (observed
  2026-10-24): after any position is added, the headline is read and restored from the source
  before anything else.
- **The About** folds after its first lines; the opening visible before "see more" must establish
  identity, method or present contribution. Markdown shows literally; line breaks are kept.
- **A position's card** shows the title, the organisation, the dates and two of its linked skills
  with a count ("+27 skills"); which two is not under the member's control (2026-10-25: the pair
  moved during re-saves of the links but did not follow two links deleted, saved, re-created and
  saved again). A position's edit dialog lists its skills as pills with no ordering control.
- **A project's card** shows the first two skills of its dialog's list, in the list's order
  (2026-10-25), and the list reorders by keyboard: the row's drag handle focused, Space to pick
  up, one ArrowUp per place with a pause between presses (twenty presses sent at once moved the
  item one place), Space to drop; the live region names the drop position. A ref read before a
  move pointed at another row's handle after it, so the handle is found from the row's own text
  and the whole list is compared with the intended order before the Save.
- **The Projects list** is ordered by date: ongoing first, then by end date, undated entries last.
  The profile page's Projects card shows the first two.
- **Featured** is a showcase of links and media with captions the author writes after replacing
  the generated caption; its items read as what they link to, so two items pointing at one product
  under two vendors' names read as the same thing.
- **Contact info** carries three website links; the type list is Personal, Company, Blog, RSS
  feed, Portfolio and Other, and Other has no custom label (2026-10-24). Publications carry their
  own link, and Featured has no limit, so a profile with more than three destinations spreads
  them; trading one link away to fit another is never the only way.
- **Publications**: the date is one text field with the placeholder mm/dd/yyyy and a calendar
  button, not selects (2026-10-25); a typed date reads back without its leading zeros and the
  page shows it in words, so a read compares the date, not the string. A stored date can fail the
  platform's own validation on edit (31 December shown as 1 January): the Save is refused with
  "Please enter a valid date" under the field and the dialog stays open, so a navigation away
  loses the edit silently. The author field searches the member's connections only; a co-author
  who is not a connection cannot be added or restored.
- **Licences, Volunteering, Organisations** take no skills from their own dialogs; a skill's own
  edit dialog reaches them (below).
- **The details pages** (`/details/experience/`, `/details/projects/`, `/details/skills/`) load
  their last entries only on a real scroll to the end (2026-10-24: an entry read as absent, a
  duplicate added, the original then found); every details page is scrolled to its end before an
  entry is read as absent. The skills details page loads its rows on real wheel scrolls only, not
  on a scripted scroll.
- **The industry** is chosen from LinkedIn's taxonomy (`references/industry-taxonomy.md`); a
  value typed past the picker is not an industry.

## The field limits

Verified at the counters on 2026-10-19 and 2026-10-21: headline 220 characters, About 2,600, a
position's description 2,000, a project's description 2,000. The rest of the limits in
`references/field-limits.md` are marked verified or believed with their dates. A believed limit
is never a reason to cut: copy is written for the reader, measured once as information, and when
a field refuses the text at application the choice of what moves to another surface is editorial
and the author's (`write-for-the-reader` §6 and §Gotchas).

## The Skills section

### What LinkedIn does with the list

- **Cap.** A profile holds up to 100 skills (LinkedIn Help a549047, read 2026-10-11; older guides
  say 50).
- **Three pinned skills.** The member highlights three "top skills"; they show without "Show all".
  Recruiter's one-click export carries exactly "the top 3 member-highlighted skills, or 3 most
  recent skills if member has not highlighted any", and Apply with LinkedIn sends "the
  applicant's top 3 skills" (Talent Solutions, StubProfile and AWLI schema, read 2026-10-11). The
  pins are the identity a scanner reads and the only skills that leave LinkedIn with the member.
- **A skill is a phrase.** A member skill is a "localizable skill name as defined by the member";
  an endorsement record carries that phrase and an optional standardised URN (Profile Edit API
  §Skills, Endorsement schema, Microsoft Learn, read 2026-10-11). A name typed past the dropdown
  is stored as free text and may match no standardised skill.
- **The taxonomy.** About 39,000 skills, 374,000 aliases, 26 locales, curated by taxonomists; it
  serves the profile typeahead, Recruiter search and job matching (LinkedIn Engineering, 2022 and
  2023). The official list is the Standardized Data API, `GET /v2/skills`, for approved partner
  applications only; no public copy exists. US spelling is the standardised form in the `en_US`
  locale ("Statistical Modeling").
- **Endorsements** "reinforce weighting" and "contribute to the strength of your profile";
  deleting a skill deletes them; a language change deletes them (Help a565106, read 2026-10-11).
  A rename on the platform is a delete and an add. Endorsements sit on skills and survive a
  position's deletion; recommendations sit on positions and go with them; the two are easy to
  conflate (2026-10-24).
- **Categories and order.** With more than three skills LinkedIn sorts them into Industry
  Knowledge, Tools & Technologies and Interpersonal Skills; the member drags the order within the
  All view and cannot move a skill across categories (Help a568137, read 2026-10-11). The live
  display order is not endorsement order.
- **Search filters on standardised terms and infers the rest.** Recruiter's Skills filter is a
  dropdown of standardised terms; Skills Match reads the standardised skills section plus skills
  extracted from the text of every profile section; a keyword search on a skill term expands to
  other spellings and descriptions (LinkedIn Recruiter Help a593591 and a414281, LinkedIn Help
  a793433, read 2026-10-11). Recruiter's seniority filter is inferred from the current title
  alone, not from the About or a description, so the title is the only lever for that filter and
  keeping a title is a deliberate trade (secondary, 2026-10-08; the bucketing unverified).
- **The broad AI tag no longer distinguishes.** LinkedIn renamed its "Artificial Intelligence"
  entry to "AI Literacy" in Skills on the Rise 2025 because members adding it use AI tools without
  learning AI technical skills (LinkedIn News, 2025). The broad tag retrieves; a builder's claim
  needs the specific names beside it.

So the three tiers do three jobs: the pins are the identity and the export; the next two are the
first lines under "Show all"; the tail is retrieval and endorsement weight.

### Choose by the author's word and the understanding

The list is the third expression of the understanding the headline and the About carry, in
LinkedIn's nouns. The author is the authority on every name; an earlier CV, a knowledge graph,
LinkedIn's taxonomy, research reports and the editorial readers are sources to explore and
instruments to test with, never a baseline the list is corrected to. There is no "true" list to
match.

A name earns its place when the page shows it (a card, the About, a publication), when it says
one of the things the public author file names about the author or carries an endorsed past the
author keeps, and when a reader meeting it beside the pins reads the same person. A name leaves
when it classifies the author as something they are not (a trade they left, a contractor's stack,
a role they do not want), when the typeahead does not know it, when a kept neighbour already says
it, or when it says nothing. Retrieval follows from truthful names and is never the selector.
Nothing is trimmed to a number: the cap is a ceiling, never a target.

Provenance first. The author's registry records who set each name and when; a name the author
set is never proposed for removal. A proposal about a name carries one sentence of what the name
says about the author to the reader, the surface that shows it and the endorsements it carries,
and nothing else as its reason. Uncertainty goes to the author in open conversation, as one
draft, never to a surrogate authority: in the first lane a taxonomy, a retrieval frame, a CV and
a graph each decided names in turn, and each decision pulled the list toward a generic role until
the author corrected it. The order in the tail roughly follows the profile; beyond the pins and
the next two, order and gaps carry no meaning.

### Validate every name

1. **The typeahead is the arbiter.** At application, with the author present, type each name in
   the Add skill dialog and take the dropdown's string exactly (US spelling, parenthetical
   abbreviation). A name with no dropdown match is free text: take the nearest standardised
   neighbour or keep the free text knowingly. Never press Save to check a name.
2. **Before application, a crawl is a cross-check.** `scripts/check-against-2018-crawl.sh
   <names-file>` reads a third-party crawl of the taxonomy (downloaded to a cache directory and
   only ever read): a name found there existed in the taxonomy in 2018; a name missing proves
   nothing.
3. **Record the result** in the author's registry with the source and the date.
   `scripts/check-list-against-registry.sh <profile> <registry>` diffs the profile's list against
   the registry's canonical table in order and exits non-zero on any gap; run it after every
   change to either.
4. **Renames.** A member phrase on the live profile ("Github") renamed to the standardised form
   ("GitHub") drops its endorsements. Decide each rename by name, with the count visible.

### Link every skill to its evidence

A skill's own edit dialog on the skills page ("Tell us where you put this skill to use") lists
every surface with a checkbox: positions, education entries, certificates, projects, the
volunteering entry, publications and organisations (24 on 2026-10-25); the card-side dialogs
reach positions, projects, education and certificates only. A skill linked to a position keeps the
link through the position's edit and through a rebuild of the list wherever the name survives, so
every position's links are read at the dialog and set from the list, as the projects' are. The
"N experiences" line under a skill opens an overlay listing its surfaces; a position's or a
project's own overlay opens by direct address
(`/in/<handle>/overlay/<id>/skill-associations-details/?associationType=position`, or
`projects`) and its text is read from a screenshot (2026-10-25).

In that dialog a form fill on a checkbox is not a tick: the input reads as checked, Save closes
the dialog, and the server keeps the old state (2026-10-25, twenty dialogs re-read). A real
click on the row, the page's own script clicking Save, a wait, and the dialog re-opened and read
are the save. The refs are read afresh on every open, since any entry added to the profile moves
every row below it, and a dialog with an Endorsements section carries its Save button at a
different ref. A skill name linked from a card must already be on the list.

The method for the links is the same as for the names: each link read against what the surface
says the author did, never against a shared word; a doubt put to the author in one list before
any change; the education and the position that are two views of one experience (a doctorate at
an institute) may both carry the link.

## What notifies whom

- "Share profile updates with your network" notifies the network of saved edits while it is on;
  it is turned off before the first Save of a sitting and the one deliberate notification at the
  end is the author's decision.
- Tagging a contributor on a project notifies that person; the contributor field tags connections
  only. A link to the repository's contributors page in the description reaches everyone without
  a notification, and a media link to that page on an existing project is dropped on Save (three
  times, 2026-10-25), so the link goes in the text.
- A recommendation request is a message; it needs the author's word.

## The application sitting

Standing conditions, for any author: nothing changes on the live profile without the author's
express request, with the author present; the seat edits through the author's own browser
session; reading is permitted where the author permits it. A PDF export of the live profile comes
before any change and after the last. Nothing is trimmed to a numeric target; a field's counter
is read, never pre-empted. Messages, recommendation requests, reader experiments and settings
changes each need the author's word; none is implied by the application.

Before the sitting: the source validates and every section reads approved; the Skills list is
validated as above; the browser tools are loaded in one call, the tab context read first, the
work done in a new tab; the baseline PDF exported (the profile page, the More menu, Save to PDF)
and recorded as a dated baseline beside the earlier one, with the endorsement count beside every
skill. The PDF stays out of the repository.

The sitting, in the source's order, every field read at its counter: the top card (name,
pronouns, location, industry, the custom URL unchanged); update sharing off, then the headline and
About; Featured; Skills first where the list changes (the list, then the order, then the three
pins, every name per the typeahead), because a card links only a name already on the list;
Experience, Education, Licences, Projects, Publications, Volunteering, Organisations, each entry
in the file's order, a card's linked skills set from the list; settings last. The
author reads each field before Save; the seat presses nothing the author has not read; a dialog
nobody read is closed without saving.

After the sitting: the second PDF export recorded beside the first; the author's registry updated
from the live list with counts; every applied section's status note carries the date; the thread
record's block. Where the author edits the live surface in parallel, the source follows the live
state and a read-back precedes every write.

## Proofs

- **The re-opened dialog is the proof, never the alert.** "Save was successful" has been shown
  over a dropped media link (three times) and over a form-filled tick the server never saw.
- **Read back on the page**, not in the dialog alone: a card, a details page scrolled to its end,
  a publications page's date in words.
- **A stopped batch of actions never saved**: after any interruption the state is re-read before
  the next action, since an interrupted untick may have persisted and may not.
- **Typed text is read back for an exact match before Save.** The description of a position and
  the headline are contenteditable fields: a form fill refuses them and typing dropped doubled
  letters now and then; one `insertText` command through the page's own script, then a read-back,
  is the route. Plain inputs, textareas and native selects take a form fill. A media link's
  address and title typed by the automation lost letters; set by the native value setter with
  input and change events they were accepted.
- **Sub-dialogs** (Add media, Add skill) need real clicks on their buttons, and a sub-dialog's
  Save position is read from a screenshot of that instance: a click by old coordinates closed a
  sub-dialog unsaved while the main Save still reported success.
- **A dialog query is document-wide**: a `[role=dialog]` selector matched the Messaging panel.
- **The page's script tool refuses to return a string holding a query string or base64**, so an
  address is reduced to its id before it is returned.

## References

- `references/field-limits.md`: every field's limit, verified or believed, with dates
- `references/industry-taxonomy.md`: the industry picker's values
- `scripts/check-against-2018-crawl.sh`, `scripts/check-list-against-registry.sh`
- `.agent/skills/editorial/write-for-the-reader/SKILL-CANONICAL.md`: the copy's order of work
- `.agent/directives/editorial-guidance.md`: how a person is modelled and conveyed
- `docs/editorial/author.md`: the host's author file
- In this host: `linkedin/README.md`, `linkedin/profile.md`, `linkedin/profile-replacement.md`,
  `linkedin/reference/skills-registry.md`, the dated baselines under `linkedin/reference/`, and
  `.agent/directives/privacy.md` §LinkedIn workspace authorisation
- LinkedIn Help: add and remove skills (a549047), skill endorsements (a565106), display order of
  skills (a568137); Microsoft Learn, LinkedIn API: Standardized Data §Skills, Profile Edit API
  §Skills, Reputation §Endorsement, Talent Solutions §StubProfile and §AWLI schema; LinkedIn
  Engineering, the Skills Graph (2022) and the skills taxonomy (2023)
