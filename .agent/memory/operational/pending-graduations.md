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
  memories | target: .agent/directives/continuity-practice.md runbook step 1 ("or by a set of
  readers over pieces"), the same bytes in both estates; the skill homes (consolidate-until-done
  §Approach, its step 7 split clause and its fleet line; consolidate-docs §Approach, by the
  owner's own commit) carry the word since 2026-10-14 | trigger: the context after the next
  compaction, under the directive-file budget | size: one sentence cure | status: due]`

  The split of a large surface is for the seat's own reading, one piece at a time with its notes
  kept as it goes, never a dispatch: a summary of a block is not the block, the understanding that
  makes a lesson homeable is formed only in the reading, and a seat that reads summaries homes
  plausible artefacts it has not understood (the anti-pattern §Forbidden names from 2026-06-16;
  recurred 2026-10-11 under a skill clause that invited it).

- **A DUE fold is never run inside a wrap called at the owner's compaction word**
  `[captured: 2026-10-11 | source: the owner's correction of 2026-10-09 13:3xZ; the clause landed in
  this estate's wrap skill lines 76 to 82 and is absent from the sibling's copy | target: the
  sibling's .agent/skills/wrap/SKILL-CANONICAL.md at the same paragraph, the same bytes | trigger:
  the doctrine pull request of this pass | size: one paragraph carried | status: due]`

  The owner, verbatim: "I said prepare for compaction, you ran so long the compaction happened on
  its own, who knows what was lost because you failed to follow my instructions." The wrap is one
  records commit and one push; the fold is named in the report as the next session's first act.

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
  before a stamp), the same bytes in both estates; the executive and skill homes
  (owner-signal-interpretation §Stop Words Are Freezes, the wrap skill's freeze paragraph,
  PDR-117's seat-count amendment) carry their sentences since 2026-10-14 | trigger: the context
  after the next compaction, under the directive-file budget | size: two sentences | status: due]`

  Verbatim: "Anything that survives the lenses should be assessed for risk, anything unknown and
  high-risk should still come to me, but that is a high bar and I do not expect it to happen
  often"; "agents need to highlight things I might object to, and I need to read questions more
  carefully"; "As a standing rule, if I invoke a start right skill and do not explicitly say that
  the freeze remains then the freeze/pause is lifted"; "I agree that fewer seats working
  continuously might be more effective."

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

- **A test file's comment names what each surface proves**
  `[captured: 2026-10-11 | source: napkin block 2026-10-03T07:1xZ (Hazel) | target:
  .agent/directives/testing-strategy.md, the test-description clause (directive, the next
  context below the budget) | trigger: the context after the next compaction | size: one
  sentence | status: due]`

  A test file's opening comment names which surface each test proves (the source, the
  configuration, the rendered adapter), so a reader knows what a green run certifies.

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
  trade (2026-10-11 and 2026-10-13). A profile audit inventories every section present and every
  relevant absent one, then spends its depth where a reader's misunderstanding or a consequential
  choice is material (his correction of 2026-09-26 to a Codex seat, verbatim: "Every single part
  of my LinkedIn needs evaluating"); concrete, evidence-based proposals come before any question
  to him, and a question is asked only where his answer changes the result.

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
