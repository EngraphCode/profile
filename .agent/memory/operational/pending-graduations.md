---
fitness_line_target: 1100
fitness_line_limit: 1467
fitness_char_limit: 200000
fitness_line_length: 100
fitness_item_count: required
fitness_item_count_target: 0
fitness_item_count_soft: 2
fitness_item_count_hard: 3
fitness_item_dwell_target: 2
fitness_item_dwell_soft: 4
fitness_item_dwell_hard: 7
lifecycle_model: >-
  canonical pending-graduations register — every live item is decision-debt
  (status pending/due/overdue) until it is graduated, rejected, or marked
  duplicate. Provenance and adaptation are the safety net for a wrong call.
access_pattern: >-
  consolidation-pass-only — read at consolidations and drain sessions; not
  loaded every session by every agent
drain_strategy: >-
  Drain by DECIDING: graduate (write the doctrine into its rule/PDR/ADR/pattern/
  governance-doc home, then remove the entry) or reject (decided not worth a
  home, with the reason). The decision-debt count falls only through a recorded
  terminal disposition — never by deleting an undecided item and never by raising
  a limit. Do not split, shard, or hide buffer depth.
fitness_rationale: >-
  The primary health signal for this buffer is the decision-debt count
  (fitness_item_count, target 0) — a flow-rate reading of whether graduation is
  keeping pace with capture. The line and character limits are a secondary
  structural signal: drain-cadence back-pressure for a consolidation-pass-only
  buffer, not a size cap. Recalibrated 2026-06-08: line hard 2200 -> 1467, target
  1500 -> 1100, so line-critical (hard x 1.5, the global ADR-144 ratio) lands at
  ~2200. Both signals are reported and acted on, never chased: substance is never
  trimmed to clear a zone (knowledge-preservation), and the register is drained
  down by deciding items, not by tombstone-removal.
merge_class: mostly-append-register
fitness_content_role: drainable-buffer
---

# Pending Graduations

The canonical register of **learned doctrine awaiting its permanent home** —
a lesson, pattern, or decision that is _already settled_ and simply not yet
written into the rule / PDR / ADR / pattern file / governance doc where it will
live and fire. Every live entry is decision-debt (`status: pending/due/overdue`),
drained by **graduating** it (write it into its home, verify, then remove the
entry) or **rejecting** it (decided not worth a home, with the reason). The
target is empty (`fitness_item_count_target: 0`); provenance and adaptation are
the safety net for a wrong call.

## What belongs here — and what does not

An entry belongs ONLY if all three hold:

1. **It is learned doctrine** — a settled lesson, pattern, or decision, validated
   by implementation, by surviving at least one later session uncorrected, or by
   an owner correction. Not a hypothesis, not a proposal, not a question.
2. **Its home is a doctrine surface** — a rule, PDR, ADR, `patterns/` file, or
   governance doc. (If the natural home is a _plan_ or a _report_, the item is
   future work or a proposal, not a graduation — see below.)
3. **It is not yet written there** — the only outstanding act is authoring it
   into that home.

**Belongs** (worked shapes):

- _"The prove-the-checker-with-a-negative-control lesson is stable across three
  instances and has no pattern file yet."_ → graduates to a `patterns/` file.
- _"The decision-locus doctrine (product scope is the owner's; engineering is
  collaborative) is settled and uncorrected, but lives only in the napkin."_ →
  graduates to a `user-collaboration.md` section.

**Does NOT belong** — route via the destinations table in
[`ephemeral-to-permanent-homing.md`](ephemeral-to-permanent-homing.md):

- **Future work / a build to do later** (_"author the portable Core PDR when a
  second repo adopts X"; "build the IDE plugin once the owner approves"_) → a
  `plans/` entry (in `future/` with a promotion trigger). The underlying doctrine
  may already be homed; the _doing-it-later_ is a plan, not a graduation.
- **A proposal or feasibility finding** (_"here is a design for an IDE
  integration plane"_) → a `reports/` or `research/` artefact, promoted to a plan
  on owner GO.
- **An open question** (_"what liveness primitive should the operating model
  carry?"_) → [`open-questions.md`](open-questions.md) if strategic, or an
  exploration plan if it is a design decision needing a session.
- **An operational what-next or owner decision** (_"should we re-establish the
  Director seat?"_) → [`repo-continuity.md`](repo-continuity.md) (Next Safe Steps
  / Open Owner-Decision Items) or the owning thread record.
- **A tooling gap** → the frictions register.

The test: if you cannot name the _exact_ rule / PDR / ADR / pattern / doc section
the entry will be written into, it is probably not a graduation — find its real
home above. An item only remains live decision-debt when it is genuinely settled
doctrine, has a doctrine home, and that home just has not been authored yet.

## Draining and dwell

Each consolidation decides _every_ decidable item — graduate or reject — toward
an empty register. An item stays only when a named constraint genuinely blocks
authoring its home now. The anti-starvation guard is the **dwell-time axis**
(`fitness_item_dwell_*`, target 2 / soft 4 / hard 7 days): it surfaces the
_oldest_ undecided item's age and escalates it. The dwell reading is **age, not
a hedge** — a short dwell is never licence to leave a decidable item undecided.

New capture appends below as inline-bracket entries — `- **<title>**` then a
backtick-wrapped inline `[…]` block (may wrap across lines) with pipe-separated
`captured / source / target / trigger / size / status` fields (schema:
`agent-tools/src/practice-fitness/item-count.ts`). Every field name carries a
colon (`captured: …`, `trigger: …`). The bracket must NOT be fenced — a fenced
or unwrapped block is silently uncounted (it raises a malformed finding).
`target` must name a doctrine surface (rule / PDR / ADR / pattern / governance
doc); if it names a plan or report, the item belongs elsewhere. **After ANY
append, run the parser's own readout** (`pnpm practice:fitness:informational`,
the Live decision-debt line) **and verify the count MOVED** — colon-less
fields once left four items reading as a clean register (vacuous-green in a
debt register, 2026-07-08).

<!-- New pending-graduation capture appends below as inline-bracket entries. -->

### Drained 2026-10-11 from the Claude per-user memory and the platform plans (Corsair weaves Seabed, 459358)

Each entry carries the owner's words or the lesson as the home will read them, so the graduation
copies the paragraph in. The memory files keep their text as the audit trail; their index lines
retire when the home is read back. Every memory file and every home below was read first-hand by
the seat; an analyst fleet had been sent first and was stopped at the owner's word (the next
entry).

- **A consolidation is single-agent: the seat reads every piece itself; sub-agents lose the lessons**
  `[captured: 2026-10-11 | source: the owner's word of 2026-10-11 11:0xZ, verbatim: "Consolidation
  sessions are single agent only, work via subagents loses all direct understand and therefore
  loses lessons", after this seat sent seventeen analysts over the notebooks, the stream and the
  memories | target: .agent/skills/knowledge/consolidate-until-done/SKILL-CANONICAL.md §Approach
  and step 7's split clause (the seat reads the pieces; no analyst), step 8's fleet line, and
  .agent/skills/knowledge/consolidate-docs/SKILL-CANONICAL.md §Approach, the same bytes in both
  estates; .agent/directives/continuity-practice.md runbook step 1 ("or by a set of readers over
  pieces") in the next context | trigger: the doctrine pull request of this pass for the skills;
  the context after the next compaction for the directive | size: one paragraph and three
  sentence cures | status: due]`

  The split of a large surface is for the seat's own reading, one piece at a time with its notes
  kept as it goes, never a dispatch: a summary of a block is not the block, the understanding that
  makes a lesson homeable is formed only in the reading, and a seat that reads summaries homes
  plausible artefacts it has not understood (the anti-pattern §Forbidden names from 2026-06-16;
  recurred 2026-10-11 under a skill clause that invited it).

- **A fold past ten minutes is a finding; a gate's duration is read from the clock**
  `[captured: 2026-10-11 | source: the owner's words of 2026-10-10 11:1xZ and the retrospective
  2026-10-10-why-a-records-fold-takes-half-an-hour-against-the-owners-ten-minutes.md | target:
  .agent/skills/coordination-fold/SKILL-CANONICAL.md, the ceremony's opening paragraph, the same
  bytes in both estates | trigger: the doctrine pull request of this pass | size: one paragraph |
  status: due]`

  The owner, 2026-10-10, verbatim: "an HOUR is a ridiculous typical time for a fold, ridiculous,
  and a clear signal of a process and engineering failure. 20 minutes would be somewhat excessive,
  10 minutes would be acceptable. We have a problem with our PR approaches and mechanisms". The
  retrospective measured the four folds of 320 to 326 at 25.9 to 57.8 minutes wall; a records-only
  push reaches CI within 2.1 to 3.8 minutes of its commit; the vendor round costs 3.9 to 7.8
  minutes each and the door's floor was about fourteen minutes before any finding. For the home: a
  fold past ten minutes is a finding, never read as normal; no ceremony is added to a fold; a
  gate's duration is never stated from feel, it is read from the commit-to-CI interval or the
  hook's own clock (the fold-clock command prints it).

- **A DUE fold is never run inside a wrap called at the owner's compaction word**
  `[captured: 2026-10-11 | source: the owner's correction of 2026-10-09 13:3xZ; the clause landed in
  this estate's wrap skill lines 76 to 82 and is absent from the sibling's copy | target: the
  sibling's .agent/skills/wrap/SKILL-CANONICAL.md at the same paragraph, the same bytes | trigger:
  the doctrine pull request of this pass | size: one paragraph carried | status: due]`

  The owner, verbatim: "I said prepare for compaction, you ran so long the compaction happened on
  its own, who knows what was lost because you failed to follow my instructions." The wrap is one
  records commit and one push; the fold is named in the report as the next session's first act.

- **A private instrument gets the basest working version; review depth is proportionate to the audience**
  `[captured: 2026-10-11 | source: the owner's words of 2026-10-08 on the local LinkedIn editor |
  target: .agent/skills/cognition/proportionality/SKILL-CANONICAL.md §Domain instances, a
  wrong-instrument-weight instance, the same bytes in both estates | trigger: the doctrine pull
  request of this pass | size: one instance paragraph | status: due]`

  The owner, verbatim: "you are building an MVP editing app, which requires the basest ability to
  be read then changed... and you are applying the a11y requirements of a public service, and thus
  wasting my time, my money, and your attention." For the home: a tool the owner uses alone on his
  machine takes the basest working version, one observation, one pull request and no reviewer
  fleet unless he asks; reviewer and accessibility depth is sized by the audience, a public service
  gets it and a private instrument does not; when he says a thing is SIMPLE, the measure is what he
  must attend to, never the estate's doctrine.

- **Review feedback is triaged by risk, cost and value; a spent budget means decide, never a new pull request**
  `[captured: 2026-10-11 | source: the owner's three words of 2026-10-02 19:4xZ to 20:0xZ | target:
  .agent/rules/review-feedback-defaults-to-triage.md §Action step 4, the same bytes in both
  estates | trigger: the doctrine pull request of this pass | size: one paragraph | status: due]`

  Verbatim: "we do not need to pay attention to feedback, we need to triage it and _decide_ what we
  do with it"; "the point of the PR response budgets is to reduce time spent on PR ceremony. Cutting
  a new branch and a separate PR does not serve that goal, does it?"; "we deal in risk, cost, value,
  assessement". For the home: one assessment per finding (risk, cost, value, home) before anything
  is touched; at budget exhaustion the only moves are absorb into work that already exists or
  decline with a reason, never a pull request of its own; never cure all, never decline all.

- **A seat's first message states the finish; nothing starts without criteria, sizing and ratified value; the full Cricket suite at seating**
  `[captured: 2026-10-11 | source: the owner's words of 2026-10-02 14:4xZ and 17:0xZ | target:
  .agent/skills/start-right-team/SKILL-CANONICAL.md §Goal and
  .agent/skills/cognition/cricket/SKILL-CANONICAL.md §When to call the panel, the same bytes in
  both estates | trigger: the doctrine pull request of this pass | size: two short paragraphs |
  status: due]`

  Verbatim: "you are working on a bounded task, not open ended, we must always understand the goal
  so that we are able to finish"; "NOTHING should be worked on without clear completion criteria,
  sizing, and an unambiguous and provable statement of how it provides ratified value. Run a fully
  Cricket suite". For the homes: every seat, the Director included, states the landing target and
  the finish condition in its first message, arms processes only for the gates on that path and
  stops them at the finish; a lane carries its completion criterion, its sizing (files, commits,
  pushes, hours) and the ratified decision or owner word it serves before it starts, and one that
  lacks any of the three is routed to the Director with the gap named; the four Cricket legs run
  together on the seat's plan at seating and after each re-plan.

- **A pull request held at its door for the owner's reading is a review surface, not work in progress**
  `[captured: 2026-10-11 | source: the Director's ruling of 2026-10-02 under the owner's delegation
  (the parity ledger, 306 and the sibling's 344) | target:
  .agent/skills/change-custody/pr-lifecycle/SKILL-CANONICAL.md §Phase 7, the WIP clause beside the
  owner's 2026-10-02 word, the same bytes in both estates | trigger: the doctrine pull request of
  this pass | size: two sentences | status: due]`

  A pull request that waits on the owner's reading leaves the estate's one in-progress slot free
  and the next lane opens beside it; a guard encodes a reading of a rule and is re-read against the
  current ruling before a seat waits on it.

- **The owner's time guide is a yardstick; the pull requests a plan implies are its cost; twice the guide is a stop to reshape**
  `[captured: 2026-10-11 | source: the owner's words of 2026-10-02 20:0xZ and 2026-10-03 20:0xZ |
  target: .agent/skills/planning/plan/SKILL-CANONICAL.md, the sizing paragraph that carries the
  2026-10-02 bound, the same bytes in both estates | trigger: the doctrine pull request of this
  pass | size: one paragraph | status: due]`

  Verbatim: "Slow and steady is better than fast and wrong every time. The two hour goal is a
  yarstick not a deadline, quality matters far more than speed, esimate remaining time as you go,
  and if it looks like it is going to hit four hours there may be an issue, apply all appropriate
  planning and cognitive skills"; "Now you are telling me that we need all of today and ten
  straight hours tomorrow. And I am telling you, that means we are doing it wrong ... question
  your framing and assumptions." For the home: the guide is a yardstick, not a deadline; the
  remaining time is re-estimated at every boundary and written on the node; an estimate past twice
  the guide is a stop to reshape, never a re-size, because the cause is shape, not speed; when two
  outputs must be the same bytes, one producer and cmp, never two authors; a report is sunk at
  authoring and findings on it are rows for one closing revision; a DRIFTING Cricket changes the
  next hour or is answered in writing.

- **A split from a reduced Cricket suite runs the remaining legs first; a surviving question travels by push**
  `[captured: 2026-10-11 | source: the owner's word of 2026-10-04 | target:
  .agent/skills/cognition/cricket/SKILL-CANONICAL.md §Adjudicate the panel, before the split-panel
  bullet, the same bytes in both estates | trigger: the doctrine pull request of this pass | size:
  three sentences | status: due]`

  Verbatim: "when we run a reduced Cricket suite and they give opposite results, follow up with
  the remainder of the full Cricket suite"; "I have enabled push notifications, so next time you
  have a question it should reach my mobile device." Two legs that agree are a verdict; on any
  opposite pair the remaining legs run before either is acted on; a question that survives the
  lenses goes as a card and, when the owner may be away, as a push notification of one line.

- **No edit to a tree while its push gate runs; a shared text passes the sibling's docs check before either push**
  `[captured: 2026-10-11 | source: the doctrine landing of 2026-10-04 (321 and the sibling's 353) |
  target: .agent/rules/lint-after-edit.md, the records-push paragraph, the same bytes in both
  estates; the harness craft (a refused worker Write arrives as the hand-back message; the write
  hook bans the sibling's organisation slug and one-word name, never the product word) to this
  estate's .agent/claude-harness-integrations/ | trigger: the doctrine pull request of this pass |
  size: two sentences and one host note | status: due]`

  An edit to a working tree while its merge-bot push gate runs corrupts the gate's read; a validator
  only one estate runs refuses the shared text there alone, so the applied bytes pass the sibling's
  check:docs before either estate pushes.

- **A carry is proved by git ls-files and check-ignore, never by a green local gate; knip's exit, not its hint count**
  `[captured: 2026-10-11 | source: the code landing of 2026-10-05 (a bare build ignore line swallowed
  a carried directory; the sibling's gate without its browser build; knip hints as errors in one
  estate only) | target: .agent/reference/shell-and-tooling-gotchas.md beside the check-ignore
  entry, the same bytes in both estates | trigger: the doctrine pull request of this pass | size:
  one entry | status: due]`

  After copying a directory between estates, git ls-files on it in the receiving tree and git
  check-ignore -v on anything missing, before the commit; a sibling's gate that needs a browser
  takes one playwright install per Playwright version; knip's exit is the verdict and its hint
  count is information, the hint policy difference between the estates named as a family drift.

- **A running gate blocks tracked edits, never a new file; a decision lands in its permanent home at occurrence**
  `[captured: 2026-10-11 | source: the owner's word of 2026-10-08 ("comms events are not considered
  durable, they are ephemeral, that is why we created editorial decision records for this repo") |
  target: .agent/rules/permanent-doc-is-the-consolidation-record.md §The durability hierarchy, one
  sentence, the same bytes in both estates | trigger: the doctrine pull request of this pass |
  size: one sentence | status: due]`

  When a decision arrives while a fold or gate holds the tree, it is written into its permanent
  home as a new file at once, linted so the running gate passes over it, and committed after the
  successor cut; the stream carries the pointer and is never the home.

- **The owner's chat answers are facts supplied to the seat, never copy**
  `[captured: 2026-10-11 | source: the owner's correction of 2026-10-10 ("I wrote them for you, I
  did not write them for the audience of linkedin") | target:
  .agent/skills/editorial/write-for-the-reader/SKILL-CANONICAL.md §Gotchas (this estate only; the
  editorial skills are estate-specific) | trigger: the doctrine pull request of this pass | size:
  one gotcha | status: due]`

  Extract the facts, write the reader's sentence in the surface's register, run the readers; his
  words are quoted only where he wrote them as copy.

- **Finish by doing the work, never by reframing; a reporting duty is one message, never a gate**
  `[captured: 2026-10-11 | source: the owner's words of 2026-10-03 ("At every turn you seem to be
  inventing complexity instead of getting on with a simple job"; "you prioritise finishing the
  work by doing the work, and I will try to do better, and we both ask each other questions") |
  target: .agent/directives/user-collaboration.md §Scope Discipline, the same bytes in both
  estates | trigger: the context after the next compaction, under the directive-file budget |
  size: one paragraph | status: due]`

  A reporting duty is one message, never a wait; when a finish looks large, size it and start the
  smallest piece rather than move the boundary; analysis and framing carry no review risk and
  landing diffs does, which is why a seat drifts to them.

- **The cure is the action that stops recurrence, never the one that removes the symptom**
  `[captured: 2026-10-11 | source: the owner's word of 2026-10-07 | target:
  .agent/directives/principles.md §Code Quality, beside "Every issue earns a check", the same bytes
  in both estates | trigger: the context after the next compaction, under the directive-file
  budget | size: two sentences | status: due]`

  Verbatim: "the cure is the action that stops it from happening again, not the action the removes
  the symptom". A cure names the change to the generator (skill, rule, validator, hook) first and
  alone; symptom removal is hygiene, stated as such.

- **The owner's standing words of 2026-10-03: decide and record; highlight the refusable; a start-right word lifts a freeze; fewer seats**
  `[captured: 2026-10-11 | source: the owner's four answers of 2026-10-03, verbatim in the
  per-user memory | target: .agent/directives/user-collaboration.md (decide under the lenses and
  record, only an unknown high-risk item reaches the owner; surface the sentences he would refuse
  before a stamp) in the next context; .agent/memory/executive/owner-signal-interpretation.md §Stop
  Words Are Freezes and .agent/skills/wrap/SKILL-CANONICAL.md's freeze paragraph (a start-right
  invocation lifts the freeze unless he says it remains) and PDR-117's seat-count note (fewer seats
  working continuously) in this pass; the same bytes in both estates | trigger: the doctrine pull
  request of this pass for the executive and skill homes, the next context for the directive |
  size: four sentences | status: due]`

  Verbatim: "Anything that survives the lenses should be assessed for risk, anything unknown and
  high-risk should still come to me, but that is a high bar and I do not expect it to happen
  often"; "agents need to highlight things I might object to, and I need to read questions more
  carefully"; "As a standing rule, if I invoke a start right skill and do not explicitly say that
  the freeze remains then the freeze/pause is lifted"; "I agree that fewer seats working
  continuously might be more effective."

- **Two Turbo facts: the dry run under TURBO_FORCE needs local:rw; the team is named in five places and turbo config is the check**
  `[captured: 2026-10-11 | source: the platform plan of 2026-09-30 for the remote cache (the probes
  it recorded first-hand), its thread record's watchlist | target:
  .agent/reference/shell-and-tooling-gotchas.md, a turbo entry, and docs/engineering/build-system.md
  §Caching, the same bytes in both estates | trigger: the doctrine pull request of this pass |
  size: two short entries | status: due]`

  A dry run under TURBO_FORCE=true meets --cache=local:r with "WARNING no caches are enabled" while
  local:rw is silent, so the pre-commit dry run takes local:rw; the remote cache's team is named
  in five places (turbo.json, the CI workflow, the keychain token, the repository variable, the
  hook notice) and turbo config on each host is the check that they agree.

<!-- Register drained to empty at the 2026-09-09 dedicated consolidation (Vanilla lifts
Nectar): the one row — the triage rule step 4 naming the exhaustion and late-cure transitions
— graduated to review-feedback-defaults-to-triage §Action step 4 in the same change; home
verified by reading it. The commit and the home are the record. -->

<!-- Register drained to empty at the 2026-08-14 dedicated consolidation (Quasar
wakes Nadir, the fresh directive-headroom seat all five rows were gated on):
ends-before-means graduated to principles.md §Ends Before Means, Front of Chain
First; the generality-depth articulation to principles.md §Context Specificity
Gradient; owner-channel-answer-first to user-collaboration.md §Working Model
(bullet); the goal-hook pacing clause to metacognition.md §Fluency (standing
goal-hook paragraph); the file-emitting-watcher clause to
use-monitor-for-event-driven-wake §A File-Emitting Watcher Is Half-Armed
Without a Read Path, cross-referenced from comms-all-channels-watcher §Related
Surfaces. Homes verified live at drain. The commits and the homes are the
record. -->

<!-- Register drained to empty at the 2026-08-07 curator pass (Gull lifts Nimbus, fresh
seat clearing the directive-file-context-budget gate both rows were held on): the
constraint-surface sentence (Badger, 2026-08-02) graduated to principles.md §Separate
Framework from Consumer as the licence-map paragraph; the sentinel-taxonomy row (Birch,
2026-08-03) was found ALREADY LANDED in testing-strategy.md §Prove-behaviour as the
designed-sentinel admissibility clause (commit 92defb609, owner doctrine 2026-08-03,
MCP-462 trigger artefact named in place) — home verified live first-hand, row removed as
already-graduated. The commits and the homes are the record. -->

<!-- Register drained to empty at the 2026-07-20 dedicated consolidation (Siren lifts
Trench): the F-92 heartbeat-loop item was already terminal (duplicate of F-92, whose cure
now also lives in the liveness-heartbeat-cron rule's canonical-invocation clause); the
no-risk-of-loss absoluteness clause graduated to never-use-git-to-remove-work §A Safety
Proof Never Licenses the Class; the "nothing is mine" ruling graduated to the PDR-117
2026-07-20 amendment; derived-output conservation graduated to the
derived-output-conservation pattern; the cut-branch roll-up practice graduated to
no-parallel-long-lived-branches and the verification-methods candidate to the
verification-method-must-answer-the-question pattern; the no-escape-hatches ruling
graduated to principles.md §Strict and Complete. All homes verified live before this
drain. The commits and the homes are the record. -->

### Drained 2026-10-11 from the two napkins (Corsair weaves Seabed, 459358)

The JC.net napkin (1,376 lines, 37 blocks, 2026-10-02T23:16Z to 2026-10-11) and the OCE napkin
(459 lines, 20 blocks, 2026-09-29 to 2026-10-05) were read whole by the seat, every candidate
lesson probed by phrase in both estates' rules, skills, directives, Core, reference, patterns and
executive memory before it was written here (a control term first; a lesson a home already
carries is not an entry). The entries sourced from the OCE napkin sit in the OCE register's batch
of the same date; every target below is the same bytes in both estates unless marked. The napkins
are rotated after this batch, so a source cites the block's heading, which the archive keeps
byte-identical.

- **A frontmatter edit is an adapter edit: render in both estates before any push**
  `[captured: 2026-10-11 | source: napkin blocks 2026-10-03 (Hazel, Efreet), 2026-10-05T16:3xZ
  (Sycamore), 2026-10-08T13:xxZ (Cedar); the OCE napkin 2026-10-02T00:10Z | target:
  .agent/skills/lever-authoring/author-skills/SKILL-CANONICAL.md, the common-mistakes list
  (the line "Editing a description without re-rendering the adapters") | trigger: the doctrine
  pull request of this pass | size: one paragraph | status: due]`

  A rule's or skill's frontmatter (name, description, declaration) is part of the rendered
  adapters: `pnpm portability:fix` after any rule frontmatter edit and `pnpm skills:generate`
  after any skill edit (the sibling under its prefix flag), both before the push, in both estates
  when the bytes are shared; `portability:check` does not read descriptions, `skills:check`
  does. A new slash skill also needs its `Skill(<prefix>-<name>)` entry in the tracked Claude
  settings, and a description containing ": " is quoted or the declaration parser refuses it.

- **A reading of an owner's word that changes a Core decision lands as a PDR amendment**
  `[captured: 2026-10-11 | source: napkin block 2026-10-03T07:1xZ (Hazel) | target:
  .agent/rules/new-rule-vs-pdr-clause.md, one sentence in the decision procedure | trigger: the
  doctrine pull request of this pass | size: one sentence | status: due]`

  A reading of an owner's word that changes what a Core record decides lands as an amendment of
  that record, dated and quoting the word, never as a rule sentence that contradicts the record
  while the record stands.

- **A sentence about what a tool does is written after opening its source and its configuration**
  `[captured: 2026-10-11 | source: napkin block 2026-10-03T02:xxZ (three over-claims caught by
  Copilot in one night; "already" is the tell); the OCE napkin 2026-10-02T10:3xZ (Efreet: the
  failed claims "checked the source or the configuration but not both") and 2026-10-03T19:5xZ
  (paths checked one by one; two listings printed together read as one) | target:
  .agent/rules/verify-dont-trust.md, the claims-about-code clause, and the fold skill's
  precondition 3 brief (the classes the records pass reads for) | trigger: the doctrine pull
  request of this pass | size: one paragraph and one brief line | status: due]`

  A sentence that says what a tool, hook or validator does is written after opening the tool's
  source AND the configuration that wires it; one without the other is a guess ("already" and
  "names none" are the tells). A host binding written at a carry is read back in the carried
  file and each path checked one at a time, never two listings read as one.

- **Cross-estate gates and seam tests are proved on the other tree, by the validator's own node**
  `[captured: 2026-10-11 | source: napkin blocks 2026-10-03T07:1xZ (Hazel), 2026-10-05T11:3xZ
  (Crucible: the depcruise gate pinned one estate's workspace roots) | target:
  .agent/rules/cross-estate-work-must-reduce-divergence.md, the carry step | trigger: the
  doctrine pull request of this pass | size: one paragraph | status: due]`

  A gate or validator that runs in both estates is demonstrated on the other tree before it is
  called done; a seam test on carried shared bytes is routed to the validator's own node, never
  added in one estate alone; a one-body gate that pins a host's directory list is a host binding
  in disguise (compute the list from the workspace manifest).

- **Divergence is measured at the close of a pair; an estate-neutral script resolves the default branch**
  `[captured: 2026-10-11 | source: the OCE napkin 2026-10-02T00:10Z (Hazel: 147 files at the
  open, 150 at 23:16Z, twin pull requests landing an hour apart); napkin block
  2026-10-05T17:3xZ (Sycamore: a containment check assumed the name main on the sibling) | target:
  .agent/rules/cross-estate-work-must-reduce-divergence.md, the measurement clause | trigger:
  the doctrine pull request of this pass | size: two sentences | status: due]`

  The divergence measure is read at the close of a pair of landings, never mid-pair (each
  estate's review changes the bytes until both merge). A script that runs in both estates
  resolves the default branch the way the fold skill does, never by the name `main`.

- **A test file's comment names what each surface proves**
  `[captured: 2026-10-11 | source: napkin block 2026-10-03T07:1xZ (Hazel) | target:
  .agent/directives/testing-strategy.md, the test-description clause (directive, the next
  context below the budget) | trigger: the context after the next compaction | size: one
  sentence | status: due]`

  A test file's opening comment names which surface each test proves (the source, the
  configuration, the rendered adapter), so a reader knows what a green run certifies.

- **The host's mergeability check does not follow renames: merge the default branch in, never rebase**
  `[captured: 2026-10-11 | source: napkin block 2026-10-03T07:1xZ (Hazel) | target:
  .agent/skills/change-custody/pr-lifecycle/SKILL-CANONICAL.md §Phase 1 step 1 "Divergence",
  beside the OCE register's merge-never-rebase entry (OCE commit e2f50a6ed) | trigger: the
  doctrine pull request of this pass | size: one sentence | status: due]`

  The host's mergeability reading does not follow renames across the merge base, so a branch
  that renamed what the default branch edited reads CONFLICTING until the default branch is
  merged in; the cure is the merge, never a rebase.

- **An estimate is summed from the artefact's closures; a sketch node's stamp gates nothing**
  `[captured: 2026-10-11 | source: napkin block 2026-10-03T12:xxZ (Hazel); the OCE napkin
  2026-10-02T18:5xZ (Efreet, the Director's correction absorbed) | target:
  .agent/skills/planning/plan/SKILL-CANONICAL.md §Size (beside the yardstick entry of this
  register) and its ratification clause | trigger: the doctrine pull request of this pass |
  size: two sentences | status: due]`

  An estimate is summed from the artefact's own closures (files, hunks, gate runs), never from
  feel. A sketch delivery node's own stamp gates nothing when the ratified strategic node names
  the target and delegates authoring to the implementer at pickup; writing a wait on that stamp
  rebuilds a gate on the owner that the ruling forbids.

- **A plan drafted at a compaction boundary gets both Cricket stances at the resume**
  `[captured: 2026-10-11 | source: napkin block 2026-10-04T09:4xZ (Crucible: the first sketch
  reproduced the instrument it was replacing; two Crickets in both stances named it before the
  owner read the plan) | target: .agent/skills/cognition/cricket/SKILL-CANONICAL.md §When to
  call the panel, beside the full-suite-at-seating entry of this register | trigger: the
  doctrine pull request of this pass | size: one sentence | status: due]`

  A node written at a compaction boundary inherits the boundary's fatigue shape; at the resume,
  before the owner reads it, two Crickets in both stances read the sketch.

- **The owner's words are read at the scope the owner gave them**
  `[captured: 2026-10-11 | source: napkin blocks 2026-10-04T19:0xZ and 2026-10-05T00:4xZ
  (Crucible: the cost guide read per landing where the owner said it of the whole; "finished"
  tested against an older guide a later ruling had replaced) | target:
  .agent/memory/executive/owner-signal-interpretation.md, one paragraph | trigger: the doctrine
  pull request of this pass | size: one paragraph | status: due]`

  An owner's guide or ruling is read at the scope the owner gave it (the whole, not each
  landing), and the latest ruling on a scope replaces the earlier one; a seat that re-scopes a
  guide to fit a shape it has chosen is narrowing.

- **A comms event is an edit to a tree under a running gate**
  `[captured: 2026-10-11 | source: napkin block 2026-10-05T20:5xZ (Crucible: two consultation
  events posted while the successor's pushes ran; the substrate check refused both pushes at
  the final gate, ten minutes each) | target: .agent/rules/lint-after-edit.md, the records-push
  paragraph, beside the no-edit-under-a-gate entries of this register | trigger: the doctrine
  pull request of this pass | size: two sentences | status: due]`

  The rendered comms read model is gitignored and the substrate check reads it, so a comms
  event during a push gate is an edit to the tree under that gate; the push order is render
  the read model, push, and no event between.

- **Six tool facts for the gotchas reference**
  `[captured: 2026-10-11 | source: napkin blocks 2026-10-03T12:xxZ (Hazel), 2026-10-05T11:3xZ
  (Crucible), 2026-10-10T15:4xZ (Shrew); the OCE napkin 2026-10-02T00:10Z (Hazel) and
  2026-10-03T00:5xZ (Efreet) | target: .agent/reference/shell-and-tooling-gotchas.md, one
  bullet each beside their nearest entry | trigger: the doctrine pull request of this pass |
  size: six bullets | status: due]`

  A table transform rebuilds each row from its cells; the closer's width check is necessary,
  not sufficient, and `grep ' | |$'` finds the empty cell. Markdownlint by explicit path still
  ignores `.agent/reports/**`; lint a report by copying it outside the repository with the repo
  config. A commit pathspec that names a renamed or deleted path aborts the whole `git add`:
  stage what exists, commit by the full pathspec. `pnpm --filter <name>` with no matching
  package prints "Scope: 0 of N" and exits 0; a test run's proof is its "Test Files" line. In
  Python, `open(p, "w").write(compute())` truncates the file before `compute()` runs: compute
  first, then open. A sender probe against the live comms directory writes an event before its
  output step fails: probe against a scratch directory.

- **Harness facts for the Claude integrations reference (this estate only)**
  `[captured: 2026-10-11 | source: the OCE napkin 2026-10-02T18:5xZ (Efreet); napkin blocks
  2026-10-08T15:xxZ (Cedar) and 2026-10-02T18:5xZ | target:
  .agent/claude-harness-integrations/, the page the harness-craft entry of this register names
  | trigger: the doctrine pull request of this pass | size: three bullets | status: due]`

  After a pane-teammate wave, stop the finished panes before the next wave spawns and read each
  judge's final text from its session transcript, never wait on the return notification. A
  sub-agent's report arrives as an agent message and nowhere else, so a report needed past a
  compaction is written to a file before the boundary. A Monitor's output file after its expiry
  is stale: read the stream fresh before any hold line.

- **Three write-time hook facts**
  `[captured: 2026-10-11 | source: napkin blocks 2026-10-06T16:2xZ (Cedar), 2026-10-05T11:3xZ
  (Crucible); the OCE napkin 2026-10-02T10:3xZ (Efreet) | target:
  .agent/rules/hook-policy-substring-discipline.md, the examples list | trigger: the doctrine
  pull request of this pass | size: three sentences | status: due]`

  The write-time policy refuses a record that quotes an owner message containing a user-home
  absolute path (quote in substance with the repo-relative path), a script carrying the
  checkout's absolute path (`$HOME`-relative passes), and a heredoc whose text carries a banned
  phrase (write the brief with the file tool).

### Captured 2026-10-13 from the post-drain buffers (Glowworm lifts Embers, a8c4f8)

The six napkin blocks written since the 11 October drain and the seven per-user memory files
written since it were read whole by the seat; every lesson with a non-directive home was written
there in the same pass (the gotchas reference, read-before-asking, consolidate-until-done,
write-for-the-reader, comms-channels, PDR-063) and only the directive-bound lessons sit here.

- **The owner's instruments for editorial decisions; a review reads his words and the open list**
  `[captured: 2026-10-13 | source: napkin blocks 2026-10-11T16:xxZ, 2026-10-12T09:xxZ and
  2026-10-13T11:xxZ (Shrew rides Eventide); the per-user memory
  review-against-his-words-not-the-seats-frames | target: .agent/directives/editorial-guidance.md
  §Process (this estate only; the editorial directive is estate-specific) | trigger: the context
  after the next compaction, under the directive-file budget | size: one paragraph | status: due]`

  His instruments: a table he edits in place and a numbered reply; for a backlog, self-contained
  question cards, each carrying the text under decision, the reader's take and one proposal per
  option ("ask me all open questions now, as user questions, each self-contained so I can answer
  it from the card alone", 2026-10-12). The process: a conversation by default, the seat bringing
  the trade space and its view of what is best in context; apply only what the conversation
  settled, as a named list; a limit is a question about homes, never a reason to cut; every
  message leads with what changed that he did not ask for. A review reads the open list first and
  marks each item agreed or open; agreed intent is never critiqued; a settled item is never listed
  again, not even as closed ("stop bringing it up as open, I will do it, the matter is settled",
  2026-10-13); an item he calls his own edit gets no proposal; a mindset he names is shown by how
  the page is written, never by a noun's position. Outside eyes go to every removal and every
  number: a side agent, not the seat's own sweep, found the privacy class and the count-driven
  trade (2026-10-11 and 2026-10-13).

- **His reasons about himself leave the public repository at once; the sweep searches for the class**
  `[captured: 2026-10-13 | source: the owner's words of 2026-10-11 (napkin blocks 13:4xZ and
  16:xxZ; the per-user memory owner-reasons-are-private-decisions-are-public) | target:
  .agent/directives/privacy.md §Private editorial material, two sentences | trigger: the context
  after the next compaction, under the directive-file budget | size: two sentences | status: due]`

  When his sentence answers why he can claim a thing or what he is, the tracked file carries the
  decision only and the sentence goes to the private editorial repository the section names,
  never to a directory the seat invents ("you can't just make up a private directory and label it
  as a repo"); a tracked file or an unpushed commit already carrying it is amended before any
  push. The sweep after such a correction searches for the class (his intentions, his reasons
  about himself), never the corrected sentence, and a second reader runs it.

- **On a shared primary the claims and the commit queue coordinate; a message only when the peer must act**
  `[captured: 2026-10-13 | source: the owner's word of 2026-10-11 11:1xZ (napkin block 11:2xZ,
  lesson 4; the per-user memory peer-messages-only-when-the-peer-must-act) | target:
  .agent/directives/user-collaboration.md, the working-model clause on peer coordination, the
  same bytes in both estates; the skill half landed in comms-channels §The behaviours in this
  pass | trigger: the context after the next compaction, under the directive-file budget | size:
  two sentences | status: due]`

  Verbatim: "stop messaging every little to Shrew, they are concentrating on a different task".
  A direct message goes only when the peer must act (a hold to release, a push that will block
  their edits for minutes), batched into one; the registry and the queue carry the rest.

- **A script used repeatedly becomes a standardised agent tool in the agent-tools workspace**
  `[captured: 2026-10-14 | source: the owner's ruling of 2026-10-03 12:1xZ, relayed on this
  estate's stream in the Director's team start of 12:46Z and resume of 13:28Z ("if a script is
  used repeatedly it should be made into a standardised agent tool in the agent tools
  workspace"); the sibling's register carries the same ruling as its own due entry | target:
  .agent/directives/user-collaboration.md, beside the owner's standing words of 2026-10-03 (the
  same bytes in both estates; the Director's resume of 2026-10-03 named this home and no estate
  carries the sentence) | trigger: the context after the next compaction, under the
  directive-file budget | size: one sentence | status: due]`

  A script a seat runs twice is routed for sizing as an agent-tools command, never extended in
  place; the candidates routed on 2026-10-03 (twin-apply, twin-added, reply-resolve, the
  inventory and census scripts, a commit-by-pathspec command) are the open instances.

## Slow lane (PDR-130 — constitutional-class concepts, decided at their review date)

Rows here are live deliverables under a named review gate, NOT decision-debt:
each carries a prediction, a falsifier, and a review date, and is decided
(promote / kill-with-reasoning) AT that date. A dedicated consolidation passes
these by unless a review date has arrived. **Bootstrap exception: a row tracking an
ALREADY-ACCEPTED record is decided retain vs retire-by-its-own-falsifier at
review — promote/kill applies only to not-yet-minted concepts.**

| Concept | Prediction (by review) | Falsifier | Review |
| ------- | ---------------------- | --------- | ------ |
| Settlement under sampling reviewers cures the class, not the instance, and the budget counts the rounds two reviewers add at every push (retrospective 2026-10-05, proposal 3; the record named this section as the row's home in both estates and no row existed until the third dedicated consolidation registered it on 2026-10-11) | the next landing of more than two hundred files settles in at most three pushes per estate | a class cure that draws a further round on the same class | 2026-10-19 |
| Owned doctrine is placed where the situation arises, not only where the instrument's ceremony lives (the arc's retrospective and its second protected pass, 2026-09-16; owner's card filing it to this lane): an estate that imports or accumulates doctrine faster than it places it leaves rules that read correctly and fire nowhere; four situations the arc met were answered by doctrine already in the tree (PDR-140's response pricing, the 2026-07-15 handover ruling, the coordination branch's home clause, pr-lifecycle's silent-CI clause), each surfacing through the owner or a peer, while doctrine firing was otherwise the norm (seventeen decision records and twenty-eight rules cited); the placement question is whether a general mechanism is needed (triggers keyed to the seat's situation) or whether per-instrument gates suffice | With the per-instrument gates adopted (PDR-140's declaration at open, the push-time budget gate, records riding their pull request), owner corrections that already-owned doctrine answered fall to at most one per arc | Two or more such corrections in any arc after the gates land: the gates are too narrow and a general placement mechanism is needed | 2026-12-15 (first consolidation on/after) |
| An "until the tool learns X" clause opens a code-lane item the day it lands, and a synchronous step added to a recurring ceremony states its daily price before it lands, beside PDR-130's falsifier (the retrospective of 2026-10-10, proposal 4: the fold-review clause of 2026-10-02 cost about an hour a day across two estates, never stated; three retrospectives in four weeks priced the review loop and their mechanism findings became doctrine text, while the door's code changed only at the owner's word) | By the review no new mandatory synchronous step has entered the push or fold ceremony without a stated daily price, and at least one proposal of the 2026-10-10 record has landed as code (proposals 1 and 2 landed on 2026-10-10 as the records-class door and the fold clock, the day of the decision) | One unpriced synchronous step lands in either ceremony, or a retrospective proposal that names a mechanism reaches only doctrine text by the review | 2026-12-15 (first consolidation on/after) |

<!-- Drained at the 2026-09-06 dedicated consolidation: ten entries decided, every one already
carried by its target home — pr-lifecycle, the plan skill, start-right-team, the wrap skill, the
cricket skill, the no-moving-targets rule — verified by reading the home; two entries restored
2026-09-07 at review (their targets were not yet carried) and drained again the same day once
PR #75 carried them (pr-lifecycle's reviewer-set clause names the Codex connector; the plan skill
and the plan-templates README carry the decision-log sentence). The commits and the homes are
the record. -->

## Entries

Every entry is an inline-bracket block the item-count parser counts (schema:
`agent-tools/src/practice-fitness/item-count.ts`); the prose under a block carries its
doctrine, prediction and the home read. The five entries captured at the 2026-09-12 transplant
close were folded into this shape on 2026-09-13 (they had carried a heading-and-bullets shape
the parser neither counted nor flagged, so the register read as empty while holding them);
substance unchanged. Session 2 (closure item 8) added its candidates on 2026-09-13 from the
Director's draft (`threads/session-2-synthesis.next-session.md`), each home read first-hand
on `main` at SHA: ea3142b before filing; candidates found already written are recorded there
as duplicates with the home, never here.

### Session 2 candidates (captured 2026-09-13; the owner's card answers are the dispositions)

<!-- Drained 2026-10-01 at the owner's card (the session-2 batch answered whole): the two entries
graduated to testing-strategy (§Site Workspace Conventions; the KISS bullets, both estates); the five
card-gated slow-lane concepts decided: ratified text to precedence-is-not-approval, the method-question
and process-last concepts to user-collaboration, the two consolidation concepts to consolidate-docs §Approach,
each in both estates. The sixth slow-lane row keeps its 2026-12-15 review. The commits and the homes
are the record. -->

The disposition of this batch by owner cards is the ratified node's item 8 verbatim
(`.agent/plans/delivery/practice-completion.plan.md` §Transplant closure, item 8: "the
candidates go to the owner as one batch of cards; the answers are the dispositions; nothing
graduates without them"): an owner word for this batch, not the general pre-approval PDR-100
abolishes; PDR-101's quorum stands for every other graduation. The constitutional-class
candidates of the batch (A, B, C, 1a and 1b under PDR-130's class test: how the estate decides
under ratified text, frames a question to the owner, adds process, and consolidates) sit in
§Slow lane above with review dates and are not decision-debt; the operational lessons file here.
