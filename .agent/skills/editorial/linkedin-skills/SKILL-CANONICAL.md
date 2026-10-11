---
name: linkedin-skills
classification: active
description: >-
  The Skills section of Jim's LinkedIn profile: what LinkedIn does with the list (the cap, the
  three pinned skills a scanner reads and Recruiter exports, endorsements, the standardised
  taxonomy behind the typeahead), how to choose and order it by the reader's decision (EDR-008)
  under the tiers Jim set (three pins, the next two, the tail, a cap of 45), how to validate every
  name against the taxonomy, and the registry of every name in play with its live, canonical and
  validation status. Load it whenever the Skills list is drafted, re-cut, reordered, validated or
  applied, whenever a name's standardised form or endorsement is in question, or before a baseline
  that records skills. Not for the prose fields (write-for-the-reader) nor the sitting itself
  (apply-linkedin-profile). Right looks like: a name checked at the typeahead and recorded in the
  registry with source and date. Wrong looks like: a free-text skill saved past the dropdown, a
  list trimmed to a number, a rename that drops endorsements unnoticed.
---

# LinkedIn Skills

Jim's word on 11 October 2026: a LinkedIn Skills skill, "so we don't have to rediscover all of
this at a later time". This skill holds what LinkedIn does with the Skills list, how the list is
chosen for the reader this profile is for, how every name is validated against LinkedIn's
taxonomy, and the registry of every name in play. The copy's one home stays
`linkedin/profile.md` (§Skills); the decisions stay in `linkedin/profile-replacement.md` (§Skills);
this skill never duplicates either.

## What LinkedIn does with the list

Each fact carries its source and the date it was read. A fact without a source is a belief and
says so.

- **Cap.** A profile holds up to 100 skills (LinkedIn Help a549047, read 2026-10-11; older guides
  say 50).
- **Three pinned skills.** The member highlights three "top skills"; they show without "Show all".
  Recruiter's one-click export to an ATS or CRM carries exactly "the top 3 member-highlighted
  skills, or 3 most recent skills if member has not highlighted any", and Apply with LinkedIn
  sends "the applicant's top 3 skills" (Talent Solutions, StubProfile and AWLI schema, read
  2026-10-11). The pins are the identity a scanner reads and the only skills that leave LinkedIn
  with the candidate.
- **A skill is a phrase.** A member skill is a "localizable skill name as defined by the member";
  an endorsement record carries that phrase and an optional standardised URN (Profile Edit API
  §Skills, Endorsement schema, Microsoft Learn, read 2026-10-11). A name typed past the dropdown
  is stored as free text and may match no standardised skill.
- **The taxonomy.** About 39,000 skills, 374,000 aliases, 26 locales, curated by taxonomists; it
  serves the profile typeahead, Recruiter search and job matching (LinkedIn Engineering, 2022 and
  2023). The official list is the Standardized Data API, `GET /v2/skills`, fifty a page, for
  approved partner applications only; no public copy exists.
- **Endorsements.** They "reinforce weighting" and "contribute to the strength of your profile";
  deleting a skill deletes them; a language change deletes them (Help a565106, read 2026-10-11).
  A rename on the platform is a delete and an add.
- **Categories and order.** With more than three skills LinkedIn sorts them into Industry
  Knowledge, Tools & Technologies and Interpersonal Skills; the member drags the order within the
  All view and cannot move a skill across categories (Help a568137, read 2026-10-11).
- **Search infers.** Recruiter's Skills filter also infers skills from profile text, résumés and
  connections, and quotes a multi-word entry invisibly; self-entered skills remain reachable by
  operator (secondary: a sourcer's account of LinkedIn Engineering, booleanstrings.com, 2022 and
  2023).

So the three tiers do three jobs: the pins are the identity and the export; the next two are the
first lines under "Show all"; the tail is retrieval and endorsement weight. US spelling is the
standardised form in the `en_US` locale ("Statistical Modeling").

## Choose by the reader's decision

The reader of this profile decides whether Jim originates, makes sense of problems that have no
shape yet, and shapes strategy and systems at scale, never whether he fits a line role
(`docs/editorial/decision-records/008-the-innovator-never-the-engineering-leader.md`). A skill
is a retrieval tag before it is a claim, so each name is judged by the search it answers:

1. **The pins echo the headline.** Three names a scanner can map to the headline's words.
2. **The next two** carry the coordinates the right searches run on (the AI coordinate, leadership
   in general).
3. **The tail, in display order,** runs originator, AI, strategy and systems, open and public,
   scientist, the leadership doors, the endorsed craft.

Remove, by class: stack and tool tags that answer contractor searches (the CV and the entity
graph keep them); process and operations tags at technique altitude; generic self-descriptions no
reader searches; duplicates covered by a kept neighbour; over-specific research tags the
publications carry. Keep against the grain: an endorsed tag that opens a door stays low in the
tail (Team Leadership). Keep by Jim's word: JavaScript, Software Development, Web Applications,
Software Engineering, for their endorsements.

The tiers Jim set on 11 October 2026: a cap of 45 as a ceiling, never a target (nothing is
trimmed to a number); the top three, the next two, the long tail. The proposal under those
tiers, 39 entries, is in the registry with its removal class per name.

## Validate every name

1. **The typeahead is the arbiter.** At application, with Jim present, type each name in the Add
   skill dialog and take the dropdown's string exactly (US spelling, parenthetical abbreviation).
   A name with no dropdown match is free text: take the nearest standardised neighbour named in
   the registry, or keep the free text knowingly. Never press Save to check a name.
2. **Before application, the 2018 crawl is a cross-check.** Run
   `scripts/check-against-2018-crawl.sh <names-file>`: a name found there existed in the
   taxonomy in 2018; a name missing proves nothing (the crawl lacks Innovation, Consulting,
   Programming and Software Engineering). The crawl is third-party data, downloaded to a cache
   directory and only ever read.
3. **Record the result** in `references/skills-registry.md` with the source and the date.
4. **Renames.** "Github" on the live profile is a member phrase; renaming it to "GitHub" drops its
   endorsements. Decide each rename by name, with the count visible.

## The registry

`references/skills-registry.md` holds every name in play: its position on the live profile at the
last baseline, its position in the canonical list, its tier in the current proposal, its 2018
and typeahead status, and the note that explains it. Update it when `linkedin/profile.md`'s list
changes, when a name is validated, and after every application from the new baseline. The
header carries the last-updated date and every source.

## Gotchas

- Endorsement counts were read on 2026-10-11 (the registry's endorsements section); the live
  display order is not endorsement order. Re-read them at every baseline.
- The validator (`pnpm --silent --filter linkedin validate-profile profile.md`) checks the
  section's structure, not the names.
- A skill name added to a position card ("where you put this skill to use") must already be on
  the list.

## References

- `linkedin/profile.md` §Skills, the copy's home; `linkedin/profile-replacement.md` §Skills, the
  decisions
- `linkedin/reference/current-profile-2026-09-27.md` §Skills, the last live baseline
- `.agent/skills/editorial/apply-linkedin-profile/SKILL-CANONICAL.md`, the sitting
- LinkedIn Help: add and remove skills (a549047), skill endorsements (a565106), display order of
  skills (a568137)
- Microsoft Learn, LinkedIn API: Standardized Data §Skills; Profile Edit API §Skills;
  Reputation §Endorsement; Talent Solutions §StubProfile and §AWLI schema
- LinkedIn Engineering: "Building LinkedIn's Skills Graph to Power a Skills-First World" (2022);
  "Building and maintaining the skills taxonomy that powers LinkedIn's Skills Graph" (2023)
