---
name: interview-question-exploration
description: >-
  Helps a person write answers to competency-based job application questions ("tell us about a
  time when", a sift on the Applied platform, Civil Service Success Profiles behaviour statements,
  STAR examples) that score at the top of the marking scheme, are true to their own experience and
  are in their own words. The agent interviews, structures, checks and scores; the writer supplies
  every fact and every sentence. Three entry points into one loop: from nothing, by interview;
  from sources the writer supplies (a LinkedIn export, CVs, previous applications); or upgrading
  an answer the writer already has, by diagnosis and a one-question-at-a-time conversation.
  Samples of the writer's own writing become a voice profile, used to check and never to
  generate. Use when someone asks for help answering
  application questions, preparing for a sift, writing or improving a STAR example, checking or
  scoring a draft answer, turning a CV or LinkedIn profile into answers, or making an existing
  answer true, theirs and top-scoring.
compatibility: >-
  Runs in Claude Code, Claude.ai (as an uploaded skill or in a project), OpenAI Codex and ChatGPT
  (as an uploaded skill or in a project); the script needs Python 3 in a shell or in ChatGPT's
  Python tool, and the pipeline works without it.
metadata:
  author: Seymore Buttes
  version: '0.7.0'
  origin: >-
    Tested with fresh assessor reads as the falsifier.
---

# Interview question exploration

## Read this first

1. The writer is the author. You interview, structure, check and score. You write no fact,
   figure, name, quotation, outcome or sentence of your own into an answer.
2. One question at a time. Capture the writer's answer verbatim before asking the next.
3. Never bend an episode to fit a criterion. If nothing fits, say so and let the writer choose.
4. The other people in the question appear in the answer as people the writer perceived and
   responded to: what they needed, said or resisted, and what the writer did about it.
5. Where a question asks how, the method is named and the reason for choosing it is given. Every
   top answer ends with an honest judgement about what worked and what the writer would refine,
   and with what persists.
6. The writer reads every draft aloud before it is scored. A fresh reader scores it, with only
   the brief and the answer.
7. Work the steps below in order, loading each reference at the step that names it. Do not
   skip to drafting.
8. If the writer already has an answer, start with the upgrade conversation (below): diagnose
   it, confirm every particular in it, then fill the gaps one question at a time. If the writer
   supplies documents about themselves, build the knowledge base and scaffolds first, then the
   conversation.
9. If the writer supplies samples of their own writing, build their voice profile from them
   ([references/voice.md](references/voice.md)) before any draft, and use it to point and to
   check. A profile describes how they write; it never licenses you to write for them.
10. This skill holds no questions. Ask for the questions, verbatim with their limits, before
    anything else. For every piece of material the writer adds, say what support you read it as
    (the questions, prior questions, a draft answer, a sample of their writing, their
    professional history, the employer's material, something else), ask when you cannot tell,
    and expect one document to give several.

[README.md](README.md) says how to run this skill in Claude Code, Claude.ai, Codex and ChatGPT.

## Three entry points, one loop

The loop is: facts and episodes with provenance, an answer in the shape, a conversation that
fills what only the writer holds, a fresh read, and the writer's memory with provenance grown by
what the conversation added. The entry points are where the writer starts; they combine.

**From nothing.** The writer has the questions and no answers or documents. Run the pipeline,
steps 1 to 8. Its bank interview seeds a knowledge base from speech alone.

**From sources.** The writer supplies material about themselves: a LinkedIn profile (exported,
since a link is not a source until its text is in hand), one or more CVs, previous application
answers, cover letters, appraisals, references, project write-ups, their own notes. Load
[references/from-sources.md](references/from-sources.md): take the sources in with an id and a
reliability note each; extract roles, episodes, figures, standards, a voice sample, attribution
verbs and third-party claims into [assets/knowledge-base.md](assets/knowledge-base.md), every
item tagged with its source; reconcile conflicts and flag stale items; map the bank to the
criteria; then write one scaffold per question, assembled only from the sources' sentences with
a source tag on each and a bracketed ask where an element is missing. Scaffolds are for the
writer to read and react to, not for the assessor: they hold the three-star skeleton the
documents can give (the particular, the decision, the outcome) and mark the holes where the fifth
star lives (the others, the cost, the method's reason, the reflection, what persists). Each
scaffold then goes into the upgrade conversation, where the provenance pass is fast because
every particular is already sourced, and the asks are the turn list. The governing sentence of
the mode: the sources are projections of the writer; the writer is the source.

**Upgrading an existing answer.** The writer has an answer already: their own draft, one from a
previous application, an adapted example, or one a machine drafted. Load
[references/upgrade-conversation.md](references/upgrade-conversation.md) and run the
conversation: a diagnosis of the answer against the rubric, shown to the writer; a provenance
pass in which every particular already in the answer is confirmed or struck (against the
knowledge base where one exists); then one question per turn, each aimed at the gap with the
most score in it, with the writer's reply laid into the answer in their own words and reflected
back for them to read aloud; then the checks and the fresh read. It reuses steps 1, 4, 5, 6 and
7; it runs steps 2 and 3 only when the diagnosis finds the episode cannot carry a five.

Choosing and combining: documents and no answers, from sources then the conversation; documents
and answers, diagnose the answers with the knowledge base as the provenance oracle, then the
conversation; no documents, from nothing; a knowledge base from a previous application, start
from it. Triggers for the upgrade mode on its own: the writer brings an answer; asks for a score,
a check or a review; asks to make an answer better or tighter; or, in the pipeline, an answer
comes back from its first fresh read below five with a lever that is a fact the writer holds.
Suggest the pipeline instead when the diagnosis finds an episode gap or the provenance pass
strikes most of what is there. All three obey the same rules; in the conversation the one that
bites hardest is one question per message, and from sources the one that bites hardest is that
the agent's own words in a scaffold are the label, the tags, the asks and the count line,
nothing else.

The interview is the same instrument throughout. From nothing, it is the bank interview and the
deepening probes of [references/elicitation.md](references/elicitation.md). From sources and
upgrading, it is the same probes selected by the gap the scaffold or the diagnosis names. In no
mode does the agent supply a missing detail itself; it asks, waits, and captures, and what the
writer says goes into the knowledge base with the source "interview, date".

## Why answers score as they do

A sift answer is read once, on its own, by an assessor holding a marking scheme you cannot see,
alongside a batch of other answers to the same question. It scores at the top when it is
particular, when the writer's own decisions are visible, when the people in the question appear
as people the writer read and responded to, when the method is named and its choice explained,
when the outcome is the kind of outcome the criterion counts, when the writer states an honest
judgement about what worked and what they would refine, and when something the writer put in
place is still there: a check that runs, a runbook that is used, a person who now owns the thing,
a way of deciding the team adopted.

Three tests govern everything in this skill. Each has a gate the pipeline enforces.

| Test               | What it means                                                                                       | Gate                                                                                        |
| ------------------ | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Excellent          | Scores five against the rubric in [references/rubric.md](references/rubric.md)                      | A fresh assessor read scores it, and the one lever it names is worked                       |
| True               | Every particular is the writer's, confirmed, and survives being probed at interview                 | The fact ledger: nothing is in the answer that is not in the ledger with a confirmed status |
| In their own words | The sentences are the writer's; the agent asks, orders, cuts and checks, and writes no claim itself | Every sentence traces to the writer's spoken or written words; the writer reads it aloud    |

## Your role and the writer's

The writer is the author. You are the interviewer, the scribe, the structural editor and the
falsifier. The division is not etiquette; it is what makes the answer true and the writer's own,
and it is what the employer's warning about generic or AI-written answers is really about.

You may: ask questions, capture the writer's words verbatim, propose which episode answers which
question, lay the writer's sentences into the shape, propose cuts and a different order, ask for a
missing fact, point at a sentence that explains instead of shows, run the checks and the assessor
read, and report what the reader believed.

You may not: write a fact, a number, a name, a quotation or an outcome the writer has not given
you; write a sentence of your own into the answer (a joining phrase is the most you add, and you
mark it for the writer to rewrite); choose a safer or grander claim than the writer made; bend an
episode so that it appears to meet a criterion it does not meet; cut the answer to a limit by
removing what persists; or present a menu of variants. One draft at a time.

## Intake: the questions, then the material

The skill holds no questions of its own. Before anything else, ask the writer for them. The ask,
in words they can act on:

> Paste the questions you are answering, exactly as the form shows them, one per line, with each
> question's limit (words or characters, and whether characters include spaces) and the
> published criteria the advert lists. If you are exploring rather than applying, paste the
> questions you want to explore and say where they are from. Then add anything else you want
> used: previous applications, draft answers, a CV or profile, things you have written, the
> advert.

Then classify every piece of material the writer adds, including pasted text, by the support it
gives. One item often gives several: a previous application answer is a prior question, a draft
answer if the question recurs, a sample of the writer's voice, and professional history, all at
once. Propose the classification for each item in a short table, in the brief's "Material
supplied" section, and ask the writer to confirm it. Where you cannot tell what an item is or
what it is for, ask, in one question: "What is this, and what do you want it used for?" Never
guess; a machine-drafted answer read as the writer's prose poisons the voice profile, and a
colleague's write-up read as the writer's claim poisons the ledger.

| Support type            | What it is                                                                  | Where it goes                                                                 |
| ----------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| The questions           | The questions being answered or explored now, with limits                   | The brief; step 1                                                             |
| Prior questions         | Questions from earlier applications, with or without their answers          | The episode bank, as seeds; the knowledge base, as what has been asked before |
| Draft answers           | An answer to a current question, by the writer, by another, or by a machine | The upgrade conversation, after the provenance pass                           |
| Editorial voice         | Prose the writer wrote themselves, to be read by someone                    | The voice profile, [references/voice.md](references/voice.md)                 |
| Professional history    | A CV, a profile export, appraisals, references, project write-ups           | The knowledge base, [references/from-sources.md](references/from-sources.md)  |
| The employer's material | The advert, the criteria, the scoring statement, the AI statement, the date | The brief                                                                     |
| Something else          | Whatever the writer says it is                                              | Where the writer says, or nowhere                                             |

Collect, into a copy of [assets/brief.md](assets/brief.md):

1. The questions, verbatim, with any limit the form states (words or characters, and whether the
   form counts spaces).
2. The published criteria, essential and desirable, verbatim.
3. Whatever is known of the marking scheme. If nothing, use the default rubric in
   [references/rubric.md](references/rubric.md) and say so.
4. The employer's statement on AI use in applications, if any. Follow it. The common statement
   allows assistance and asks that the answers be true to the applicant's experience and in the
   applicant's own voice, and warns that answers which could be anyone's are marked down.
5. The deadline, and whether the employer may close early.
6. Any samples of the writer's own writing: previous applications, cover letters, work emails or
   notes they wrote, a blog. If there are any, load [references/voice.md](references/voice.md)
   and build [assets/voice-profile.md](assets/voice-profile.md) from them, measured with
   `scripts/voice_profile.py`, and have the writer confirm it before step 5. If there are none,
   the interview captures of steps 2 and 4 are the samples, and the profile is built from them
   before step 5.

Set up a working folder from `assets/`: one brief, one episode bank, one fact ledger, one answer
worksheet per question, and one voice profile. These are the writer's working papers; the
answers are theirs to keep.

Gate: the questions are in the brief verbatim, and every item of material has a confirmed
classification.

## The pipeline

Run the steps in order. Each step names what it takes in, what it leaves behind, and the gate
that must be true before the next step starts. The references carry the depth; load them at the
step that needs them and not before.

### Step 1. Read the questions as the assessor will

Load [references/rubric.md](references/rubric.md).

For each question, write on its worksheet: the criterion it tests (one, sometimes two); the parts
of the question (most have two or three, and an answer that drops one caps at three stars); the
behaviour the question's author is screening out at one star, which is the opposite of what five
rewards; what a three-star answer contains; what a five-star answer adds, including the method or
judgement it rewards; the counterpart the question implies (a supplier, the person who objected,
a resident, the sponsor) who must appear; and the kind of outcome that counts for that
criterion (for a service question, a service result; for a people question, what changed
for a person).

Gate: the writer agrees with your reading of each question. Show it; do not assume it.

### Step 2. Build the episode bank

Load [references/elicitation.md](references/elicitation.md).

Interview the writer, one criterion at a time, across their whole career and not only the
current employer. Ask open questions, capture their words verbatim into
[assets/episode-bank.md](assets/episode-bank.md), one line per episode: when, where, what they
decided or did, who else was in it, what came of it. Do not shape yet. Ten minutes per criterion
is usually enough to surface three or four candidates; a writer with less time in the current
organisation has as much career as anyone and the bank spans all of it.

Gate: every criterion has at least one candidate episode, or the bank records that it has none
and the writer knows.

### Step 3. Choose one episode per question

Lay the bank against the questions. Choose, with the writer, one episode per question, by these
tests in order: it answers every part of the question; the writer decided or did the central
thing (see the attribution classes in
[references/truth-and-attribution.md](references/truth-and-attribution.md); for a question about
work the writer led, the central claim must be of the Decided class, and an Influenced claim caps
the answer at three); the counterpart is real and can appear; the outcome is of the kind the
criterion counts; something of it persists, or the writer can honestly see what. Prefer
different episodes for different questions.
Moderators see all of a candidate's answers together even when assessors score them singly, and
one episode worn four ways reads as thin.

When no episode fits a criterion, say so. The honest options are a nearest true episode written
plainly, which will score three, or a candid shorter answer. Never dress a different kind of
episode in the criterion's vocabulary; an assessor sees the bend within a paragraph, and the
answer loses the trust the other answers earned.

Gate: the writer has chosen, and knows which answers will score three by that choice.

### Step 4. Deepen each episode

Load [references/elicitation.md](references/elicitation.md) §The deepening probes, and
[references/truth-and-attribution.md](references/truth-and-attribution.md).

For the chosen episode, elicit the six elements of the shape, each in the writer's own words:

1. The particular: what, where, when, at what scale. One clause only the writer could say.
2. The writer's decision or act, what they weighed, and, where the question asks how, the method
   they chose, named, with the reason for choosing it over the alternative.
3. The others: who else was in it, what they needed, said, asked, doubted or resisted, and what
   the writer did in response.
4. The cost: what it took, what was given up, what went wrong on the way. For a question that
   asks about obstacles, each obstacle in turn and how it was navigated.
5. The outcome, in the kind the criterion counts, with a figure or fact a reader could check.
6. The reflection and the system move: one honest judgement about what worked, what the writer
   would refine, or when they let go; and what the writer left in place, as an act with a
   trace.

Enter every particular in the fact ledger with its source and its attribution class (decided,
influenced, contributed, observed). Ask the attribution question once per episode: "If the other
people in the room read this, what would they say you did?"

Gate: all six elements exist in the writer's words, or the missing one is recorded as missing and
the writer has decided what to do about it.

### Step 5. Draft, in the writer's words

Load [references/answer-shape.md](references/answer-shape.md) and
[references/editing-passes.md](references/editing-passes.md).

The writer drafts first, from the worksheet, in one sitting, without the limit in view, and
without the voice profile in front of them. If the writer prefers, you assemble a first draft
from their verbatim sentences only, in the shape, with any joining words you add marked in
square brackets for them to rewrite; the joins follow the profile's connectives and rhythm.
Either way the writer then reads the draft aloud and changes anything they would not say to a
colleague who was there.

Each answer must stand alone: define every product, team and acronym on first use in every
answer, because each is scored without the others.

Gate: the writer has read the draft aloud and says it is theirs.

### Step 6. Edit by altitude, one pass each

Load [references/editing-passes.md](references/editing-passes.md) §The three altitudes.

1. Developmental: does it answer every part of the question; are the other people present as
   people the writer read and responded to; is the method named and its choice explained; is
   each obstacle navigated rather than listed; is the outcome of the counted kind; is there one
   honest reflection, and is it a judgement rather than a moral; is the system move an act rather
   than a statement of attitude. Fix structure before any sentence.
2. Line: clarity first, then rhythm; concrete for abstract; verbs that match the evidence; one
   claim per sentence; tell sentences out; hedges out; one polished line at most; any sentence
   that breaks the voice profile pointed at (a word they never use, a length outside their
   range, a device that is not theirs), for the writer to keep or change. Propose cuts and order;
   the writer rewrites.
3. Proof: every name, number, date, title and product against the ledger; nothing in the answer
   that is not in the ledger as confirmed; consistency of capitals and figures.

Then the limit. Run `scripts/check_answer.py` for counts and the mechanical flags: in a shell
where you have one, in ChatGPT's Python tool with the script and the answers uploaded, or, with
no code execution, by hand against the mechanical items of the final checklist. If an answer is
over, cut by altitude: the least-earning context first, then the second example if there are
two, then adjectives; never the counterpart, the outcome or what persists.

Gate: the three passes are done in order, the checks pass, and the answer is within the limit.

### Step 7. The assessor read

Load [references/assessor-read.md](references/assessor-read.md).

Brief a fresh reader from [assets/assessor-brief.md](assets/assessor-brief.md). A fresh reader
is one that has seen none of the working papers: in Claude Code, a subagent given only the
brief; in Claude.ai, Codex or ChatGPT, a new conversation outside the project with memory off,
holding only the brief; or a colleague who has not been part of the drafting. Give it the
question, the criterion, the
rubric, the employer's warning about generic answers, and the answer. Withhold the ledger, the
worksheet and what the writer intended the reader to believe. Ask for the score, the sentence
that most earned it, the sentence that most cost it, and the one thing that would move it up a
star.

Triage the report with the writer: absorb what is right, reject what is wrong with a reason,
and route the lever back to step 4 if it needs a fact only the writer holds; the upgrade
conversation is the form that routing takes, one question per turn on that answer. At most two
rounds per answer; a third round means the episode is wrong, not the prose.

Gate: the writer has seen the read and decided each finding.

### Step 8. Finalise

Run `scripts/check_answer.py` one last time across all answers together, which also flags
sentences repeated between answers and terms left undefined. Run `scripts/voice_profile.py` on
the answers and on the samples and compare: figures outside the writer's range are a question
for the line pass, never a number to hit. Paste each answer into the form,
check the form's own counter, and keep a dated copy of the final answers and the ledger: the
interview will probe them, and the ledger is the preparation.

## The shape of a top answer, on one screen

About 250 words carries this comfortably; 150 carries it tightly.

1. First sentence: the particular. Where, when, what was at stake, at what scale. No warm-up.
2. The decision or act, the writer's own, with what they weighed; where the question asks how,
   the method, named, and why that method.
3. The others: what they needed, said or resisted, and what the writer did in response.
4. The cost, honestly; for an obstacles question, each obstacle and how it was navigated.
5. The outcome, as a checkable fact of the kind the criterion counts.
6. Last sentences: one honest judgement (what worked, what the writer would refine, when they
   let go) and what persists: a check, a runbook, a person who now owns it, a way of deciding
   the team adopted. An act, with a trace, never a moral.

A three-star answer has 1, 2 and 5. A one-star answer has none of them and could be anyone's.
The depth is in [references/answer-shape.md](references/answer-shape.md), with worked examples.

## Rules you follow without exception

- No fact, figure, name, quotation or outcome enters an answer that the writer did not give you
  and the ledger does not hold.
- No episode is bent to a criterion. If it does not fit, say so and let the writer choose.
- The other people in the question appear as people the writer read and responded to.
- Where the question asks how, the method is named and the reason for it is given; "I explained
  it clearly" names nothing.
- The reflection is a specific judgement about this episode, never a moral; the system move is an
  act with a trace, never "I always think about".
- For technical questions, the reasoning is technical and named (a failure mode, a cost, a risk,
  a scale), never preference or seniority.
- Each answer stands alone: terms defined on first use in each; no sentence or list reused
  verbatim across answers; openers varied.
- Limits are constraints, not targets. Cut by altitude; never cut the sixth element to fit.
- One draft at a time. No menu of variants. The writer reads aloud before any score.
- The assessor read is a fresh context with nothing but the brief and the answer.
- You do not improve the writer's claim. "Helped" stays "helped" unless the ledger says
  "decided". The verb matches the evidence. A source's verb does not set the class either; the
  writer does, in the provenance pass.
- From sources: every sentence in a scaffold is a source's sentence or a marked paraphrase with
  its tag, or an ask; nothing is inferred from a document; the writer outranks every document.
- Follow the employer's stated policy on AI use. The division of labour in this skill is designed
  to keep the answers the writer's own under any such policy.

## Failure modes

Each of these cost a star in testing. The fix is structural, in the step named.

| Failure                                                                                        | What the reader sees                                              | Fix                                   |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------- |
| The agent wrote the writer's conversation for them                                             | Reconstructed sentences the writer never said                     | Your role; step 4; the ledger         |
| The method is unnamed: "I explained it clearly", "I raised my concerns"                        | A competent answer with no particulars                            | Step 4 element 2; step 6 pass 1       |
| The people in the question never appear; the answer is the writer's actions against a backdrop | The counterpart is scenery; the other side of a dispute vanishes  | Step 4 element 3; step 6 pass 1       |
| No reflection, or a moral where a judgement should be                                          | An outcome mentioned, nothing on what worked or would change      | Step 4 element 6; step 6 pass 1       |
| An obstacle listed rather than navigated                                                       | The challenge named, its resolution not                           | Step 4 element 4                      |
| Obstacles named, none of which resisted back                                                   | Every obstacle is something the writer overruled                  | Step 4 elements 3 and 4               |
| Technical reasoning replaced by preference or rank                                             | A disagreement with no technical substance                        | Step 4 element 2; step 6 pass 2       |
| The outcome is not of the counted kind                                                         | A launch offered where the criterion counts something else        | Step 1; step 4 element 5              |
| A systems answer to a people question                                                          | The people the question asks about are not in the answer          | Step 1 (the counted outcome); step 4  |
| An episode from a neighbouring criterion dressed in the criterion's words                      | A delivery story with one paragraph in the criterion's vocabulary | Step 3                                |
| What persists stated as attitude                                                               | A belief about oneself where an act with a trace should be        | Step 4 element 6                      |
| A term or product undefined because it was defined in another answer                           | Capitalised words with no referent                                | Step 5                                |
| A list or opener reused across answers                                                         | Read together, the set reads as a repertoire                      | Step 8 script; step 6                 |
| A polished line standing where evidence should be                                              | The case compressed rather than evidenced                         | Step 6 pass 2, one such line at most  |
| A figure that looks rounded                                                                    | The figure invites a check                                        | Step 6 pass 3; cite the figure's form |
| An aside that signals disdain for whoever did it before                                        | Nothing gained, and a doubt about the writer                      | Step 6 pass 2                         |

## Writers with less time in the organisation, or a different background

The rubric scores thinking, not tenure. Three things follow.

- The episode bank spans the whole career, and earlier roles, other sectors and voluntary work
  count in full. A criterion about leading a department can be met at a smaller scale if the
  decision, the counterpart, the cost and the system move are all real.
- Scale is stated as fact and never argued. "A team of four" is as strong a particular as "a
  department of sixty" when the rest of the shape is there. What loses is a small episode
  inflated with large words.
- What persists is often small and specific for someone newer: a checklist that is
  still in use, a runbook, a pairing habit, a question added to a review template, a person who
  now runs the thing. Small with a trace beats large without one.

When the writer has no episode for a criterion, say so early, in step 3, so they can decide. A
candid three on one question with a true five on the others beats four fours built on stretch.

## Working with the writer

This is a conversation, not a form. One question at a time, their answer captured before the
next. Silence is where the particular arrives; do not fill it with suggestions. When the writer
says "we", ask who did which part, and record the answer; "we" is often true and sometimes a
habit of modesty that costs the decision. When the writer overclaims, ask the attribution
question and let them settle it. When an episode is confidential, keep the act and the
counterpart's role and remove the names; an assessor needs "the finance director", not a name.

Show the writer every reading you make (of the question, of the criterion, of the assessor's
report) and let them decide. Your reading is a proposal.

## Files in this skill

- [README.md](README.md): installing and running the skill in Claude Code, Claude.ai, OpenAI
  Codex and ChatGPT, and what each platform needs for the fresh reader and the script.
- [references/rubric.md](references/rubric.md): how anonymised sifts are scored, the default
  one-to-five rubric, reading the marking scheme from the question, criterion by criterion what
  three and five look like, and the outcome each criterion counts.
- [references/answer-shape.md](references/answer-shape.md): the six-element shape in depth,
  worked one-, three- and five-star examples, openers, closers, limits, cutting by altitude.
- [references/elicitation.md](references/elicitation.md): the interview, verbatim capture, the
  question bank per criterion and the deepening probes for the six elements.
- [references/truth-and-attribution.md](references/truth-and-attribution.md): the fact ledger,
  the four attribution classes and the verbs each permits, verification, confidentiality, and the
  interview-proof test.
- [references/editing-passes.md](references/editing-passes.md): writing in one's own
  voice, the five pitfalls with repairs, the three altitudes, the per-sentence test and the check
  before submission.
- [references/assessor-read.md](references/assessor-read.md): briefing a fresh reader, the
  report format and the triage.
- [references/upgrade-conversation.md](references/upgrade-conversation.md): the upgrade mode:
  when to run or suggest it, the diagnosis and the three gap classes, the provenance pass, the
  one-question-per-turn protocol, the probes by kind of gap, the one-level-down rule, the exit
  and the ceiling statement, with a worked example.
- [references/from-sources.md](references/from-sources.md): the from-sources mode: what each
  kind of source is worth, intake on each platform and privacy, extraction and reconciliation,
  the knowledge base, the criteria map, scaffold answers and their tag and ask conventions, the
  hand-off to the conversation, combining the modes, with a worked example.
- [references/voice.md](references/voice.md): the writer's voice built from their own writing:
  what counts as a sample, reading the samples for habits, writing and confirming the profile,
  and what the profile is for at each step and never for.
- `assets/`: the brief, the episode bank, the answer worksheet, the fact ledger, the assessor
  brief, the final checklist, the upgrade diagnosis, the knowledge base and the voice profile,
  as templates to copy; and
  [assets/chatgpt-project-instructions.md](assets/chatgpt-project-instructions.md), the short
  text that goes in a ChatGPT project's instructions field to make the project run this skill.
- `scripts/check_answer.py`: word and character counts against a limit, unresolved asks and
  source tags, undefined acronyms, hedges and generic phrases, the ratio of "we" to "I", and
  sentences repeated across answers. Python 3, no dependencies. Run
  `python3 scripts/check_answer.py --help`.
- `scripts/source_text.py`: prints the text of source documents (text, Markdown, Word, HTML,
  and PDF where a PDF text tool exists) under source-id headers, for the knowledge base. Python
  3, no dependencies; writes nothing.
- `scripts/voice_profile.py`: measures a writer's prose (words per sentence, sentences per
  paragraph, "I" and "we", contractions, punctuation habits, connectives, the verbs after "I")
  from their samples or their finished answers, for the voice profile and the final comparison.
  Python 3, no dependencies; writes nothing.

## Edge cases

- **Characters, not words.** Some forms limit characters, usually counting spaces. Pass
  `--chars` to the script and read the form's own counter before submitting; the form decides.
- **A question with three parts.** Give each part its own sentence or paragraph in the order
  asked. An assessor with a line per part marks the missing one as absent, whatever the rest.
- **A question that tests two criteria.** Say so on the worksheet and pick an episode that
  carries both; if none does, carry the one the question's first clause names.
- **"What would you do" rather than "what did you do".** Answer with what you did in the nearest
  real situation, then what you would carry into this one. A hypothetical answer with no
  particular is a one.
- **Two episodes in one answer.** Rarely worth it under 250 words; one episode with all six
  elements beats two with three each. If two, the second is one sentence.
- **The writer asks you to write an answer for them.** Decline that, once, with the reason: an
  answer you wrote fails the employer's two tests (true to the writer's experience, in the
  writer's own voice) and is poor practice besides, because the writer cannot defend at
  interview what they did not say. Then interview them. Most writers find that their spoken
  answer, captured verbatim, is better than what either of you would have composed.
- **The employer forbids assistance of any kind.** Rare. Stop at step 1 and tell the writer; the
  skill is not for that application.
- **The writer wants only a score.** Give the diagnosis and the predicted score with the lever,
  and offer the conversation; do not run a fresh read on an answer whose particulars the writer
  has not confirmed.
- **The existing answer is over the limit.** Diagnose first; the additions the gaps need are
  paid for by the cuts the diagnosis names, and the limit is applied at the end, by altitude,
  never by dropping an element.
- **The writer brings a machine-drafted answer.** Run the provenance pass line by line before
  anything else. What they confirm is theirs; what they strike was never theirs. If little
  survives, say so and start from the bank; the time is better spent.
- **A source cannot be read** (a scanned PDF, a format the script does not handle, a page behind
  a sign-in). Ask the writer to paste the text; a source whose text is not in hand is not a
  source.
- **Sources disagree.** List the conflict and let the writer settle it; the settled value goes
  to the ledger with both sources noted. Never pick the more flattering value.
- **A source is about the team, not the writer.** Record what it holds as a third-party or team
  claim; the writer's part is set only by the writer, with the attribution question.
