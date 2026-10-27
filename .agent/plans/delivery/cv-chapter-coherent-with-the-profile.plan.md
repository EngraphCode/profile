---
id: cv-chapter-coherent-with-the-profile
node_type: delivery
name: The CV improved from the profile's facts and the lane's lessons, coherent with LinkedIn
overview: >-
  The CV content model is rewritten from the verified facts and shape decisions of the LinkedIn
  lane under the person-neutral editorial doctrine and the author's two information files, with
  the author present, so that the CV and the profile read as one person with different
  compositions, every fact the same, no sentence copied, rendered in browser and print from the
  content model. Planned in the extraction session at the owner's word; performed in its own
  session at his word, as one pull request.
status: sketch
serves: content-as-cv
impact_areas:
  - editorial-content
tickets: []
depends_on:
  - plan: editorial-doctrine-in-three-layers
    kind: blocking
owner_gates: []
last_updated: 2026-10-27
---

# The CV improved from the profile's facts and the lane's lessons, coherent with LinkedIn

The owner's words, 25 October 2026: "Opening the CV chapter: Not this session, later. 3. Apply
all the lessons learned, and understanding about me and my professional identity and facts, to
improving the CV, making sure it is aligned with linkedin, it doesn't need to be the same, it does
to be coherent and complimentary and not contradict it." And 27 October: "planning the CV work is
part of this session, performing it is not." His words of 11 October set the direction of
derivation: "We are deriving the canonical skills in the profile, then we will update the CV, we
may or may not allow the CV skills to be a superset of the linkedin skills, that is an open
question, but it is not a current priority."

This node is written in the extraction session as a sketch. It governs no work until his word
ratifies it, and it depends on the extraction lane landing first: the `cv` skill, the person-neutral
guidance and the two author files are its inputs.

## Goal

When this lands: the CV at the site's `/cv` route and its PDF read as the same person the LinkedIn
profile presents, with the same facts, the same beliefs left in the reader and the same verbs for
each piece of work, composed for a deliberate evidential read rather than a scanning one; every
sentence is written for the CV's reader from the facts, none pasted from the profile; the Oak
entry carries the arc the profile settled (why, the call, the cost, the authority, the impact) in
the proportion the page wants; the capabilities say what the profile's Skills list says in the
CV's register; and the content model holds every change, so the rendered surfaces follow by build.

## User groups and value

- The author: a CV he can send or point at that stands beside his profile without contradiction,
  written with him present and every fact his; the open question on the capabilities list
  decided by him at the step where it matters.
- The CV's readers (the standing audiences of the composition directive, reading on EDR-008's
  axis): one designed read with hierarchy and adjacency doing the work the profile's fragments
  cannot; the level shown in decisions and consequences, never argued.
- Search and AI systems: the structured data (`knowsAbout`, `hasOccupation`, the Person entity)
  consistent with the narrative under ADR-011, retrieval carried by the data rather than by
  keywords in prose.
- The next editorial lane (the front page): a CV and a profile that agree, as the fact base it
  starts from.

## Mechanism

- **The order of work** is `write-for-the-reader`: the CV reader's decision on paper first, with
  the author; the beliefs the CV must leave and the moment that proves each; continuous prose in
  the CV register (`editorial-voice`: evidential, precise, agentic, scannable in structure and
  continuous in prose); facts verified against the sources afterwards; then the readers (the
  voice check; `editor`, then `prose-expert`; `audience-reader` on the revised draft, the brief
  built from the author's information files and EDR-008's axis); then the author. The
  public-copy rule fires: the owner reads second.
- **The surface** is the `cv` skill: its own order and weight; designed hierarchy; print and
  browser both inspected; cumulative evidence across adjacent sections; the whole career where
  the profile leaves entries out; the six-point coherence check with the profile (facts, the
  story, the level, the verbs, no copied sentence, the private boundary) run on every change.
- **The inputs**: `linkedin/profile.md` as the most verified fact base the estate holds (dates,
  titles, figures with sources, product names as their owners spell them, the Skills list with
  its provenance); the editorial decision records, EDR-009's shape (one whole principal entry
  carrying why, the call, the cost, the authority and the impact, the how in project entries) as
  a candidate for the Oak entry's proportion, never a rule; EDR-002 and EDR-008; the public author
  file for identity, voice and standing decisions; the private author file, loaded and never
  quoted; the current CV at `jcdotnet/content/cv.content.json` (the headline, two positioning
  paragraphs, one experience entry, three prior roles, five capabilities, three education
  entries, links) and its rendering at `jcdotnet/app/cv/page.tsx` with the PDF route.
- **The content model owns every change.** Copy lands in `cv.content.json`; a shared identity atom
  (a title, a date, an organisation) lands in `jcdotnet/content/entities.json` under ADR-020, and
  the CV reads it from there; no rendered surface is edited by hand. The `pkg` skill governs any
  change to the entity file, and the graph's structure is not changed by this lane.
- **The capabilities and the Skills list.** The author decides at the capabilities step whether
  the CV's capabilities are a superset of the profile's Skills list or the same set in the CV's
  register. The decision is recorded as an editorial decision record in the pull request; a
  decision made at its action moment, not a gate on this node.
- **Proof of rendering**: the `visual-verification` skill's renders of the `/cv` route in browser
  and of the PDF, read by the seat and the author; the repository's end-to-end and visual
  regression suites for the route, baselines updated where the design changes.
- **Shape decisions** new to the CV are recorded as editorial decision records in the same pull
  request. Nothing about the author beyond published facts and decisions is written into a tracked
  file; a sentence that fails the second cut goes to the private author file with its date.

## Steps, in order, one session, one pull request

1. Grounding: this node, the `cv` skill, `write-for-the-reader`, `editorial-voice`, the two
   editorial directives, the two author files, the decision records, `linkedin/profile.md`, the
   current CV model and its render in browser and print.
2. The CV reader's decision and the beliefs the CV must leave, written with the author, as the
   lane's brief; the fact diff between the profile and the CV model (coherence check 1), with
   every difference cured at its source, the author deciding which source is right.
3. The Oak entry rewritten from the profile's facts in the CV register, the proportion decided
   with the author; the readers; the author.
4. The prior roles and the education entries checked and rewritten where the facts or the verbs
   differ from the profile; the readers on what changed.
5. The positioning paragraphs and the headline read against the profile's About for the same
   beliefs; the headline stands unless the author changes it; changes through the readers.
6. The capabilities: the author's decision on the superset question at this step; the entries
   rewritten in the CV register; the decision record written.
7. The coherence check, all six points, run on the whole; the no-copied-sentence check by a
   script comparing the profile's sentences with the model's.
8. Render and inspect: the `/cv` route and the PDF in browser and print; baselines updated where
   the design changed; the end-to-end suite green.
9. Gates green; one commit by pathspec per settled step or one for the lane, as the round budget
   allows; one push; the pull request description carries the coherence check's result and the
   readers' dispositions; the author reads and merges.

## Acceptance criteria

1. Every date, title, organisation, figure, licence and product name on the CV is identical to
   the profile's as their owners spell them; proof `owner-held`: the coherence check's table in
   the pull request description, read by the author.
2. No sentence appears on both the CV model and the profile; proof `repo-safe`: the sentence
   comparison script's empty output recorded in the description (the script lives in the pull
   request if it is kept, or its one-line invocation does).
3. The CV renders in browser and print from the content model with no hand-edited surface; proof
   `repo-safe`: the end-to-end and visual regression suites green on the route and the PDF.
4. The structured data agrees with the narrative under ADR-011; proof `repo-safe`: the content
   and JSON-LD tests green.
5. The readers ran in order and every finding carries a disposition before the author's read;
   proof `owner-held`: the dispositions in the description, read by the author.
6. The author reads the CV as himself beside his profile and merges; proof `owner-held`: the
   merge.

## Out of scope

- The front page and any other surface than the CV and the shared atoms it reads.
- Changes to the live LinkedIn profile or to `linkedin/profile.md` beyond a fact the coherence
  check finds wrong on the profile's side, which the author changes on the live surface himself
  at his request, with him present.
- The graph's structure, new entity types or the graph expression of the author's information
  (GRAPH-1).
- Redesign of the CV's layout or the visual system; proportion within the existing design only.

## Cost

One pull request; authored files about five (the content model, the entity file where an atom
moves, one or two decision records, a test baseline), within the small-pull-request bands. Seat
time is estimated at pickup from the fact diff's size, not here; the brief step is the first
measure.

## Where the first-principles check fires

- **Landing path.** `cv.content.json` and `entities.json` are read by the content and JSON-LD
  tests and the build; decision records land under `docs/editorial/decision-records/` where
  markdownlint, prettier and the links validator read them; baselines under the visual regression
  harness's directory.
- **Capability locus.** The `cv`, `write-for-the-reader`, `editorial-voice`, `pkg` and
  `visual-verification` skills are repository-local under `.agent/skills/`; the readers are this
  host's sub-agent templates.
- **Optionality.** The one open question (the superset) is assigned to the author at a named step
  and recorded as a decision record; nothing in the node waits on it.
- **Record consumer.** The coherence check's table and the readers' dispositions are read by the
  author at his read of the pull request; the decision they change is whether he merges.

## Ratification

Born sketch 2026-10-27, in the extraction session at the owner's word that planning the CV work is
part of that session. Its ratification and its start are his; it depends on the extraction lane
landing first.
