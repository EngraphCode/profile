# Why the LinkedIn lane cost what it cost, and where its lessons live

A retrospective on the LinkedIn workspace and profile lane, 26 September to 25 October 2026, run
on 27 October at the owner's word ("extract the lessons, including those we will package as
skills") by the retrospective skill, in the modes it names. Reconstructed from primary sources: the
owner's typed turns from the three seats' sessions (three ledgers, held in the private
repository), the merged pull requests, the commit history of the lane's files, the thread record
`.agent/memory/operational/threads/linkedin-workspace.next-session.md`, the editorial decision
records, and the exploration record of 25 October
(`2026-10-25-what-the-linkedin-lane-can-teach-and-how-to-extract-it.md`). Counts are recomputed
from those sources at writing time. The record is public under the second cut of the lane's plan
node (`editorial-doctrine-in-three-layers`): it quotes the owner's words about the writing and the
process, and nothing about him beyond what his published surfaces carry.

## 1. The arc, with its anchors

| Segment | Dates | Seat | What happened |
| --- | --- | --- | --- |
| Research and the workspace | 26 to 28 Sep | the owner's Codex agent | The LinkedIn research reports; the `linkedin/` workspace created; its authorisation in `privacy.md` dated 28 September |
| Plumbing | 29 to 30 Sep | Galaxy binds Gravity | The workspace as a documents-only package (272, 273); a build-cache tangent (275); no copy written |
| The model, the headline, the About | 6 to 10 Oct | Cedar turns Grove | The impact model; the headline and About approved on 8 October after a failed draft; the editorial machinery built (the editorial skills directory, `write-for-the-reader`, the firing rule, the audience reader); the local editor (325, 9 Oct); the first Oak entry rounds |
| The Oak content, the skills, the links | 10 to 23 Oct | Shrew rides Eventide | The Oak entry's rounds and the mis-cast reader (EDR-008, 11 Oct); the Skills list (11 Oct); the contact links (12 Oct); the owner's own edits (12 to 14 Oct); the Oak figures from the official reports; the limits read at the counters (19 Oct); the partition and its recovery (EDR-009, 21 Oct); the readers on the whole and the FT Labs card (23 Oct); 341 merged 23 Oct |
| The check and the application | 23 to 25 Oct | Shrew rides Eventide | The Skills check (348); the profile applied live in two sittings with the owner present, each save proved by re-opening (349); "Congratulations, we are done" |

Anchors: six lane pull requests (272, 273, 325, 341, 348, 349); 131 commits touching
`linkedin/`, the editorial skills, `docs/editorial/` and the two editorial directives between 26
September and 25 October, with spikes on 28 September (11), 8 October (18), 11 October (18) and
25 October (21); three seats; roughly 290 typed turns from the owner across the three sessions,
pasted notes excluded. Beside the lane: the profanity hook (335, 338), born of the lane's records;
the interview-question-exploration skill (347) in a sibling worktree.

## 2. What the owner spent

The clearest measure is his own, 11 October: "I am spending more time trying to keep you on
course than I am spending on improving my linkedin, massively more time ... We must have reached
the right mindset five times in the last two days, and then you move away from it again." Across
the three ledgers there are at least fourteen corrections of the seat's direction, as distinct
from corrections of fact: "Step back. Step back more", "STOP IT", "Reground, and do it properly
this time", "Stop being basic please", "you are jumping into 'fixing things', I want a
DISCUSSION", "you are turning it from good writing into a litany of facts with no soul and no
connection", "What are you talking about, what is 'mine'?", "stop telling me, this is perhaps the
third time", "that is pandering to a reader finding that was never a problem", "This edit takes
away too much", "this was supposed to be a tiny fix, it is spiralling, reign it in right now",
and on an instrument built in the lane's name, "wasting my time, my money, and your attention".

Corrections of fact were cheap and expected ("I am sure I will have plenty of corrections"). The
cost was the corrections of direction, each of which returned the seat to a place it had already
been.

## 3. The causal stack

Each layer answers why the layer above was possible. The stack stops where the next "why" leaves
the estate's control.

**Surface: what the drafts did.** Four shapes recurred in the copy. A draft assembled from the
sources' fragments ("a dull litany of tell not show. It's a Frankenstein of earlier statement
fragments", 8 October). A number treated as an instruction: a card cut four times to a believed
limit, two contact links traded away to fit two more, a card partitioned by a date seam to meet a
verified limit ("a litany of facts with no soul and no connection", 21 October). A reader's
finding applied as a cure, three rounds in a row, until the reader's doubt "turned from a
suspicion into a certainty" (10 October). And the author's chat answer pasted as copy ("I wrote
them for you, I did not write them for the audience of linkedin", 10 October).

**Process: why the drafts could do that.**

1. *The guidance existed and nothing fired it.* The editorial directives and the voice skill named
   every fault of the 8 October About before it was written. They were loaded and not applied at
   the drafting moment. The owner's question that day, "Do we need better editorial guidance, do
   we need rules, do we need specialist subagents?", was answered by building the firing: the
   `write-for-the-reader` method, the `public-copy-runs-the-editorial-workflow` rule, the
   `audience-reader`. The About succeeded on the next round.
2. *The seat reached for an authority that was not the author.* The CV's content read as a
   baseline to correct the profile to; a recruiter's frame read as the reader; a reviewer's finding
   read as an instruction; a vendor review read as a privacy ruling; a limit read as a target. Each
   pulled the copy toward the generic professional profile and away from the understanding the
   headline and About carried. The owner named it four times between 7 and 11 October; EDR-008
   records the cure's axis; `write-for-the-reader` carries it as the last gotcha.
3. *The audience brief was mis-cast.* A head hunter for a senior engineering search was cast as
   the primary reader; the reader's first questions (headcount, budget, reporting line) became the
   drafts' answers; three rounds grew a two-card block to three and 2,454 characters to 2,986,
   with no exit criterion. The loop diverged because the frame was the seat's own and the reader's
   verdict was treated as the audience's. EDR-008 fixes the axis every reader decides on; the
   `audience-reader` template now carries it so a mis-cast brief contradicts it visibly.
4. *The collaboration protocol was learned by correction, not designed.* Changes made without the
   author (the contact links); "at your word" deferrals; settled items relisted; a diff shown
   instead of a conversation; readers drifting into stock-taking; "mine" as a label for his
   decisions. Each cost his attention once and became a sentence in `write-for-the-reader`
   §Working with the author, where they now stand for any author.
5. *Instruments and ceremony displaced the work.* A local editor built with the accessibility bar
   of a public service and a security reviewer's host restriction ("Finish the ... basic editor";
   "it is supposed to be SIMPLE"); a branch fold run under "prepare for compaction" until the
   compaction fired on its own; broadcasts to a peer seat; a build-cache tangent in the first
   session; a push gate that blocked an important fix ("the check must be a trigger that makes
   the agent think"). Each was a seat initiative inside a session the owner had opened for copy.
6. *Material about the author reached public files by the seat's hand, three times.* His
   priority readers in a decision record and a template (8 October); his reasons for claiming
   skill names and his words on positions in the napkin (11 October); the guidance directive's
   self-view lines, inherited from February, about to be gathered into one public author file (27
   October). All three were caught by a side agent reading the public record as a reader; none by
   the seat. The mechanism is one: the public repository is the seat's working surface for
   everything, including what it learns about the person it writes for. The cure is the lane's
   two cuts and two author files, and the privacy ruling landing in the directive.

**Meta: why the process could fail that way.**

- *The last correction generalised across axes.* After "no cuts", no edits; after "the innovator,
  never the engineering leader", the engineering evidence removed entirely ("This edit takes away
  too much", 23 October); after "stop relisting settled items", a question he had not settled
  closed on his behalf ("I agree to all four" read as an answer to an open question inside
  proposal one). The metacognition directive names this oscillation; the lane supplied three
  instances.
- *Fluent frames accepted as authority.* The recruiter's frame, the reviewer's finding, the
  limit, the vendor review: each arrived smoothly and was acted on before the situation it
  presupposed was checked. The owner's own words were the authority throughout, and were in the
  transcript, not in any file a seat loads.
- *Completion drive at boundaries.* The fold under "prepare for compaction", the deferral of live
  work to "the next sitting" while he was present ("_this_ is the live session, we are doing
  things right now"), the records that asserted a state ahead of the work (ratified before the
  words; a sort declared clean before the sort). The drive to finish produced ceremony and
  overclaim in the same stretch.
- *The Practice's doctrine was written for software.* "You are applying rules designed for
  software design to a linkedin rewrite" (7 October). The estate had no editorial method, no
  audience reader and no firing rule until 8 October, and no protocol for working with a present
  author on their own words until the lane taught one. The directives said what good copy was;
  nothing said how a seat and an author produce it together.

**Beyond the estate's control.** "By asking a coding model to do this work, am I creating an
unfair problem?" (8 October). In part: a model that assembles from what it has read and over-fits
to the last instruction will do both again. The estate's answer is structural, not hopeful: the
method skill, the readers as falsifiers of the seat's frame, the firing rule, the author's
instruments, and the second cut on everything about the author. Those are the cures the lane
bought, and the layer below them is the model.

## 4. The counterfactual

The strongest counterfactual is inside the arc. From 23 to 25 October the work ran under the
cured method: the readers once on the whole draft with the brief built on EDR-008's axis; the FT
Labs card written from his facts and his own old code in one round ("I accept the FT Labs card");
his edits applied as his; the Skills check at his question; the application in two sittings with
every save proved by re-opening the dialog and the PDF exported before and after. His words at
the close: "The profile is ready", then "Congratulations, we are done. That was epic, and I believe
totally worth it." Two over-corrections surfaced in that segment and were caught in his review
rather than costing a round: the engineering evidence removed too far, and a deferral of live
work to a future sitting while he was present.

Per unit: the About took one failed draft and one successful one once the method changed (8
October); the Oak entry took the better part of two weeks under the uncured process and was
finished in two days under the cured one. Had the method skill, the firing rule, the reader axis,
"answers are facts, never copy", "a limit is never a reason to cut" and "a conversation before a
change" existed on 6 October, the shape of 23 to 25 October is the plausible shape of the whole
lane: his review and his edits, which no method removes, and little else. The irreducible cost is
his time on facts and sentences; the avoidable cost was the fourteen corrections of direction and
the days each one cost to recover.

## 5. Honest credit

What the cost bought, stated plainly and without excusing the price:

- A profile the owner calls "totally worth it", applied live with proofs, the Skills list with its
  provenance and evidence map.
- The editorial method for any author (`write-for-the-reader`: the reader's decision, the audience
  hops, the beliefs and moments, working with the author, the readers before the author, the three
  editing altitudes, repetition across entry points, the gotchas); the voice skill refined; the
  surface skills `linkedin-profile` (the platform's limits, folds and cards verified and dated, the
  Skills mechanics, the application sitting and its proofs) and `cv`; the `audience-reader` and the
  firing rule; nine editorial decision records including the two shape decisions.
- The author's working instruments, now general: the table edited in place, the question cards,
  the diff against the accepted version shown where the author reads, the local editor he used for
  every edit of his own.
- The privacy cures: the profanity hook; the private repository's role sharpened; the two cuts and
  the two author files; the privacy ruling of 27 October.
- Practice lessons homed outside the editorial estate: a gate makes the agent think and never
  blocks value; an MVP instrument takes MVP ceremony; "prepare for compaction" means records safe,
  then stop; folds when useful, never by the clock; a gate clears only on words that address its
  condition; a check's name is not its coverage.
- An instrument for retrospectives: the owner's typed turns, filtered from the session
  transcripts into a dated ledger, are a cheap, complete primary source for an owner-corrected
  arc.

## 6. The disposition of the lessons

Every lesson the ledgers hold has a home or a reasoned discard. "Landed" names the file that
carries it today; "lands in this pull request" names the step of the plan node that puts it there.

| Lesson, in the owner's terms | Home | Status |
| --- | --- | --- |
| The reader's decision before the first sentence; who the audience is, what we communicate, how | `write-for-the-reader` §1; `editorial-strategy.md` §Begin with the reader's decision | landed |
| The profile designed as a whole for a specific effect; narrative density a global property, never a local cut | `write-for-the-reader` §3, §9, Gotchas | landed |
| The author's answers are facts, never copy; the words never cross an audience hop unchanged | `write-for-the-reader` §2, §5 | landed |
| An assembled draft, a litany, a label and a colon are the failure | `write-for-the-reader` §4, Gotchas; the firing rule's named failures | landed |
| A limit is never a reason to cut; read the counter, never pre-empt it; a partition is not writing | `write-for-the-reader` §5, Gotchas; `linkedin-profile` §The application sitting; EDR-009 | landed |
| A conversation before a change; no change without the author; never "at your word"; the author's earlier words never cited back as rules | `write-for-the-reader` §5 | landed |
| The author's instruments (the table, the cards, the diff against the accepted version, the editor) | `write-for-the-reader` §5 | landed |
| Every message leads with the unasked change; settled items never relisted; agreed intent never critiqued | `write-for-the-reader` §5 | landed |
| An adjective true by the author's authority stands; the author's figures are not web-checked; official claims used where they benefit the author; a contestable absolute is made true as stated | `write-for-the-reader` §5, §6 | landed |
| Readers are information, never authority; a finding that was never a problem is pandering; readers drifting into stock-taking | `write-for-the-reader` §7; the firing rule | landed |
| The mis-cast reader; every reader decides on one axis; level shows, never argued | EDR-008; `write-for-the-reader` Gotchas; `audience-reader` | landed |
| Collaborative credit; the verb chosen with the author ("set" is the opposite of enabling); a sensitive date left unattached | `write-for-the-reader` Gotchas; `editorial-guidance.md` §Collaborative credit (general form lands at step 7) | landed |
| Repetition across sections justified by audiences; an identical opener traced to intent | `write-for-the-reader` §10 | landed |
| High-impact claims made once, prominently | `write-for-the-reader` §3; `editorial-voice` | landed |
| Vendor names for one product chosen consistently per listing | `write-for-the-reader` Gotchas; EDR-007 | landed |
| The live surface edited by the author's hand is the source; a read-back precedes every write | `write-for-the-reader` §5; `linkedin-profile` §The application sitting | landed |
| The re-opened dialog is the proof, never the alert; typed text read back; a stopped batch never saved | `linkedin-profile` §Proofs | landed |
| Endorsements are history, never lost for nothing; the Skills cap, pins, typeahead, evidence map | `linkedin-profile` §The Skills section | landed |
| The live profile changes only at the author's express request with the author present; the baseline export; notifications the author's | `linkedin-profile` §The application sitting | landed |
| The CV stands apart from the profile: coherent and complementary, never the same sentences | `cv` §Coherence with the profile; the CV chapter's plan node | landed; the chapter planned |
| A correction names an emphasis, never a deletion: after "the innovator, never the engineering leader" the engineering evidence stays as evidence of range | `write-for-the-reader` Gotchas | lands in this pull request (proposal 1) |
| An editorial sitting spends the author's attention on the copy; the seat's tools, folds and ceremony wait for the author's word | `write-for-the-reader` §5 | lands in this pull request (proposal 2) |
| Personal insight is always sensitive, whoever wrote the sentence; a line's presence in the public tree is not a classification; two cuts, two author files | `privacy.md` (the 27 October clause); `editorial-guidance.md` §The author's information model | lands in this pull request (the node's step 7) |
| The owner's typed turns as a retrospective's primary source | `retrospective` §Workflow step 2 | lands in this pull request (proposal 3) |
| A plan never defers needed work to "later", "a later session", "the next pull request" or "the second instance" | `plan` §Pre-Author Scope-Vocabulary Check | lands in this pull request (proposal 4) |
| Reviewing agents and vendor reviews are information, never authority | `review-feedback-defaults-to-triage`; the firing rule | landed |
| A gate makes the agent think and never blocks value; the smallest change that achieves the value | the merge tool and its decision record (24 October) | landed |
| An MVP instrument takes MVP ceremony; a public-service accessibility bar is not for a local editor | `proportionality` §Step back and be sensible | landed, as the general form |
| "Prepare for compaction" means records safe, then stop; folds when useful | `wrap`, `session-handoff` | landed |
| A gate on the owner clears only on words that address its condition | the plan skill's born-sketch ratification; the napkin of 26 October | landed in the napkin; the skill's sentence is the plan skill's own ("ratified_where a traceable pointer to where the word lives") |

The per-user memory buffer (the seat's local notes) was read against this table: every editorial
entry that touches the lane is landed above or is private material whose home is the private
repository; the Practice entries born in the arc (the gate, MVP ceremony, compaction, folds, peer
messages, timescales, "say OCE") are landed in the files the table names or in the owner's
standing words recorded on the thread record. No entry is discarded; the buffer stays as the
seat's recall aid under its rule.

## 7. Proposals, each with its warrant and falsifier

All four are operational and route to the fast lane: they land in pull request 354 as the plan
node's step 4. None is constitutional; no slow-lane register entry is proposed.

1. **A gotcha in `write-for-the-reader`: a correction names an emphasis, never a deletion.**
   Warrant: 23 October, the engineering evidence removed entirely after the innovator decision
   ("This edit takes away too much"); 10 and 11 October, the same oscillation in the other
   direction. Falsifier: the CV chapter produces a draft that drops a class of evidence after a
   correction about emphasis.
2. **A sentence in `write-for-the-reader` §Working with the author: an editorial sitting spends
   the author's attention on the copy; the seat's tools, folds, fleets and Practice ceremony wait
   for the author's word.** Warrant: the editor's accessibility and security rounds (8 and 9
   October), the fold under "prepare for compaction" (9 October), the peer broadcasts (10
   October), the push gate (24 October), each named by the owner as a cost. Falsifier: an
   editorial sitting after this lands in which a seat-initiated instrument or ceremony costs the
   author a correction.
3. **A sentence in `retrospective` §Workflow step 2: for an arc the owner corrected in chat, the
   owner's typed turns filtered from the session transcripts into a dated ledger are the primary
   source, read in order against what the seat had just done.** Warrant: this record's causal
   stack rests on three such ledgers (110 KB, about 290 turns) read whole in under an hour, where
   the alternative was 800 MB of transcript or a thread record that is the seat's own account.
   Falsifier: a retrospective whose ledger misses a correction the thread record carries.
4. **The plan skill's scope-vocabulary check names the deferral words: "later", "a later
   session", "the next pull request", "at his word later", "the second instance proposes it".**
   Warrant: the extraction node carried all five on 27 October and the owner's correction named
   the pattern ("this has expanded to multiple sessions ... I have rejected the 'second instance'
   made up rule so many times I have lost count"). Falsifier: a plan node after this lands that
   carries one of them without an owner's words cited inline.

One prediction, recorded here for the CV chapter to test rather than registered on the slow lane:
with the method skill, the firing rule, the reader axis and the two author files in place, the CV
chapter produces no assembled draft, no cut to a count, no partition, no engineering-leader drift
and no deferral of live work while the author is present. Its plan node's acceptance criteria are
the test; a failure of any one reopens this record with an addendum.

## 8. What this record does not do

It does not re-litigate the editorial decisions (EDR-002 to EDR-009); they are the author's record
of origin. It quotes nothing of the insight class and names no reader of his beyond the axis
EDR-008 makes public. It schedules nothing: its proposals land in the lane's pull request, and the
CV chapter starts at the owner's word on its own node.
