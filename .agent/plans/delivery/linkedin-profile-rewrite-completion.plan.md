---
id: linkedin-profile-rewrite-completion
node_type: delivery
name: Finish the LinkedIn profile rewrite, the Skills derived and the draft ready for Jim's review
overview: >-
  The last open section of the LinkedIn draft, Skills, derived at Jim's word under a selection
  method that cannot regenerate the seat's recurring error, and the whole draft handed to him for
  his full review and edit before any application.
status: ratified
ratified_by: Jim Cresswell
ratified_date: 2026-10-11
ratified_where: >-
  The owner's approval of this plan in the Shrew rides Eventide session (371a2b) on 2026-10-11,
  after his corrections of the same hour (the CV and the graph are sources, never an authority;
  finishing the rewrite is the priority; a repo plan node wanted). Recorded on the
  linkedin-workspace thread record's block of that hour.
serves: content-as-cv
impact_areas:
  - editorial-content
tickets: []
depends_on: []
owner_gates: []
last_updated: 2026-10-24
---

# Finish the LinkedIn profile rewrite, the Skills derived and the draft ready for Jim's review

## Goal

When this lands, `linkedin/profile.md` is a complete draft Jim reads in one sitting: every
section drafted or approved, the Skills section derived at his decisions with every name's
provenance recorded in the `linkedin-skills` registry, and the open items for his review gathered
in one place in `linkedin/profile-replacement.md`. The doctrine that selects skill names carries
the method below. None of that is true now: the Skills section holds thirty-nine names below a
line awaiting his word, his dispositions of 11 October are unapplied, the registry carries no
provenance, and the selection text in the skill still judges a name by the search it answers.

## User groups and value

- **Jim**: his attention goes to reading and editing his profile; the Skills reach him as one
  draft he can read aloud, and no name he set is proposed for removal.
- **The readers the profile is for** (`editorial-strategy.md` §Standing audiences, on the axis
  EDR-008 fixes): the headline, the About, the cards and the Skills say the same person.
- **The next seat**: the skill and its registry carry the method and the provenance; this node
  carries the finish.

## Mechanism

Jim is the authority on every name. The CV content, the entity graph's `knowsAbout`, LinkedIn's
taxonomy, the research and the editorial readers are sources to explore and instruments to test
with, never a baseline the list is corrected to. The list is derived from the understanding the
headline and the About carry (innovator, engineer, scientist; making sense of the unknown;
shaping strategy and systems) and from his words on the names. A name earns its place when the
page shows it, when it says one of those things about him or carries an endorsed past he keeps
at his word, and when a reader meeting it beside the three pins reads the same person. A name
leaves when it classifies him as something he is not, when the typeahead does not know it, when a
kept neighbour already says it, or when it says nothing. Provenance is read first; a proposal
carries one sentence of what the name says about him to the reader and nothing else as its
reason; uncertainty goes to Jim in open conversation. Retrieval follows from truthful names and
is never the selector. The falsifier is the `audience-reader`, once, on the whole profile with
Skills in its reading path under the EDR-008 brief: a repeated "tester", "contractor", "line
manager" or "consultant" is the finding.

## Acceptance criteria (each with a proof)

- Every section of `linkedin/profile.md` carries a status of `drafted` or `approved` and the
  validator passes. Proof: `repo-safe`, `pnpm --silent --filter linkedin validate-profile
  profile.md`.
- Every entry in `linkedin/profile.md` §Skills has a registry row carrying its provenance and
  the card that shows it, or a recorded exception at Jim's word. Proof: `repo-safe`, a script in
  `.agent/skills/editorial/linkedin-skills/scripts/` that diffs the list against the registry's
  names, exit non-zero on a gap.
- The skill's selection section carries the method above and not the retired sentence "a skill
  is a retrieval tag before it is a claim". Proof: `repo-safe`, `git grep` for the retired
  sentence returns nothing; `pnpm skills:check` and `pnpm portability:check` green.
- The `audience-reader` under the EDR-008 brief repeats none of the wrong nouns from the list.
  Proof: `owner-held`, the report in chat and the seat's dispositions on the linkedin-workspace
  thread record.
- Jim reads the whole draft and recognises himself; no name he set was proposed for removal.
  Proof: `owner-held`, his word in chat, recorded on the thread record.

## Todos

Slices land as commits by pathspec on the coordination branch under its draft pull request, the
lane's landing path; the fold's settlement budget applies at the fold.

1. The selection section of `.agent/skills/editorial/linkedin-skills/SKILL-CANONICAL.md`
   rewritten to the mechanism above; the registry given a provenance column on every table and
   its archetype-derived candidates struck; adapters regenerated; checks green.
2. Jim's dispositions of 11 October applied to the canonical list, its status line, the
   container's decisions and the registry: Parameter Estimation, Scientific Writing, Product
   Engineering and Digital Strategy stay; Mentoring replaces Coaching; Digital Transformation is
   not added; Social Entrepreneurship stands as the first pin with the About unchanged.
3. The remaining names derived as one draft for his dispositions in open conversation, each
   with the sentence of what it says about him, the card that shows it, its endorsements and the
   seat's verdict; the stack and tool tags put as one decision with the trade stated; applied at
   his word.
4. One public-safe paragraph in the container mapping headline anchor to section to skill
   cluster, with the open items for his review gathered beneath it.
5. The `audience-reader` once on the whole profile; dispositions shown.
6. The records: the thread record and napkin blocks, this node's state. Then his full review and
   edit in the editor at his word.

## Out of scope

- The application to the live profile: a later plan under the `apply-linkedin-profile` skill,
  with Jim present and a PDF export first, because nothing changes on LinkedIn without his
  express request.
- The CV content and the entity graph: they change after the LinkedIn work at Jim's word; whether
  the CV's skills become a superset of the LinkedIn list is an open question he has not
  prioritised.
- The editorial doctrine in three layers: a separate sketch node under an owner gate.
- Requests for recommendations and any settings change: his word, at application.

## State, 2026-10-24

Finished. Todo 6 closed on 23 October when Jim declared the draft his ("The profile is ready,
the next act is to start updating the live surface"), the readers having run on the whole draft
and the Skills check he queued on 22 October run the same day; the lane merged through pull
request 341. The application, out of this node's scope, ran on 24 October as one sitting under
the `apply-linkedin-profile` skill with Jim present and no separate plan node, at his word of 21
October that the LinkedIn work runs without ceremony: every section of `linkedin/profile.md` is
on the live profile and read back, the after-baseline is
`linkedin/reference/current-profile-2026-10-24-after.md`, and the LinkedIn thread record's
current block carries the three items at his word (the thesis date, the first paper's co-author,
the Principal card's first sentence). Every acceptance criterion above holds; the node stays
ratified as the record of the finish.

## State, 2026-10-21

Todos 1 to 5 landed on 11 October (`SHA:5a848254`, `SHA:5afc493e`, `SHA:6971531e` and their
neighbours); todo 6 is in progress as the owner's review and edit of the whole draft in the
editor, the seat absorbing his edits of 17 and 19 October, the Skills settled. The count of the
merged Principal card against the limit he verified at LinkedIn's counter (2,852 against 2,000)
is resolved in shape, not in characters: EDR-009, the card one piece of writing carrying the why,
the call, the cost, the authority and the impact, the how in the three Project cards. The next act
is the reader's decision and the beliefs for that card on paper, then one draft by the method,
the Project cards, the readers, then the owner; the LinkedIn thread record's current block is the
pickup.
