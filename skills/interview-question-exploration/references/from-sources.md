# From sources: a knowledge base about the writer, and scaffold answers to talk from

This file is loaded when the writer supplies source material about themselves: a LinkedIn
profile, one or more CVs, previous applications, cover letters, appraisals, references, a
portfolio, a list of projects. It carries what each kind of source is worth, how to take sources
in on each platform, the extraction and reconciliation rules, the knowledge base, the criteria
map, the scaffold answers and the conventions that keep them honest, and the hand-off into the
upgrade conversation where scaffolds become answers.

The governing sentence of this mode: **the sources are projections of the writer; the writer is
the source.** A document is evidence and a prompt for memory. It never outranks what the writer
says now, and it never supplies a moment, a motive or a figure the writer has not confirmed.

## Why this mode exists, and what it does not do

In testing, a sift answer scored three when it had the particular, the decision and an outcome,
and five when it also had the other people read and responded to, the method chosen for a
reason, honest cost, a judgement, and what persists. Sources reliably hold
the first kind of thing: roles, dates, scale, outcomes, figures, the writer's own prior sentences.
They rarely hold the second kind: nobody's CV records what the finance director said. So this
mode builds the three-star skeleton from documents, marks the holes where the fifth star lives,
and hands the writer into the conversation that fills them. It saves the writer the hour of
reciting their career from memory; it does not write the answer.

Two of the skill's rules look as if they forbid this mode, and the reconciliation is exact. Step
5's rule that the writer drafts first, and the elicitation rule that artefacts prompt memory
rather than supply sentences, protect the final answer's voice; a scaffold is not a final
answer, it is the writer's own prior words laid in the shape with the gaps visible, so that they
can see them and replace them, and the read-aloud gate still stands between it and the form.
"The agent writes no sentence of its own" holds here in its strictest form: every sentence in a
scaffold is a source's sentence or a close paraphrase of one, tagged with the source, or a
bracketed ask. The agent's own words in a scaffold are the label, the tags, the asks and the
count line, nothing else; a scaffold has no joining words, and anything a join would do is done
inside a paraphrase that carries its tag.

## What each kind of source is worth

| Source                           | Reliably holds                                                           | Rarely holds                            | Reliability notes                                                                               |
| -------------------------------- | ------------------------------------------------------------------------ | --------------------------------------- | ----------------------------------------------------------------------------------------------- |
| CV, any vintage                  | Roles, titles, dates, scale, outcomes as claims, skills, qualifications  | People, cost, reflection, method        | Dated to its vintage; verbs inflate; stale after a role change                                  |
| LinkedIn profile                 | The same as a CV, in a public register; recommendations by third parties | Moments, honest cost                    | Written for a public reader; polish is not a fact; recommendations are evidence of others' view |
| Previous application answers     | Episodes already in the shape; the writer's own first-person prose       | Whatever that question did not ask      | The writer's own words; the best voice sample; check the date and whether the facts moved on    |
| Cover letters                    | Motive, voice, the writer's view of their own pattern                    | Figures, dates                          | Persuasive register; keep the facts, drop the register                                          |
| Appraisals, feedback, references | Third parties' account of the writer; named outcomes; development needs  | The writer's decisions as they saw them | Evidence class, not the writer's claim; confidential, often names people                        |
| Project write-ups, portfolios    | Method, technical substance, figures                                     | The writer's part versus the team's     | Attribution must be set by the writer                                                           |
| The writer's own notes           | Anything                                                                 | Structure                               | Often the richest and least polished; treat as the writer's words                               |

## Intake

Every item has first been classified by the support it gives (SKILL.md §Intake), with the writer
confirming; the items that give professional history or prior questions are the sources of this
mode, and the same item may also be a voice sample or a draft answer and go to those uses too.
Collect the sources into the working folder as files, or as pasted text in the conversation,
and give each an id, S1, S2, S3, in the order received. Record each in the knowledge base's
sources index: id, kind, date or vintage, where it is held, and one line on its reliability from
the table above, confirmed with the writer ("this CV is from 2022, before the promotion").

How sources arrive on each platform:

- **Claude Code and Codex.** Files in a `sources/` folder beside the working papers. Text,
  Markdown, Word documents and HTML are read by `scripts/source_text.py`; PDFs are read directly
  where the agent can read PDFs, otherwise by the script where a PDF text tool is installed,
  otherwise the writer pastes the text.
- **Claude.ai and ChatGPT.** Files added to the project, or text pasted into the conversation.
  The model reads uploads directly.
- **LinkedIn.** Agents usually cannot read a LinkedIn page behind the sign-in. The writer opens
  their own profile, uses the profile's "Save to PDF" (or copies the text), and supplies that.
  A link alone is not a source until its text is in hand.
- **Links in general.** Where the agent has a fetch tool and the page is public, fetch and
  record the date; otherwise the writer pastes.

Privacy: sources are personal data and often carry other people's names and an employer's
confidential detail. Keep them where the writer controls them. On a hosted product, the writer
checks the data settings before uploading an employer's confidential material. In the knowledge
base, other people appear by role, not name, from the start; the answers never carry names.

## Extraction

Read every source in full. For each, extract into the knowledge base, each item tagged with its
source id and location (page, section or paragraph):

1. **Roles.** Organisation, title, dates, scale (team, users, money), employment type.
2. **Episodes.** Anything that was an event with a decision in it: what, when, where, who else
   (by role), what came of it. One line each, in the source's own words where the source is the
   writer's, as a marked paraphrase otherwise.
3. **Figures.** Every number, with the source's exact wording and period.
4. **Standards, assessments, awards.** In the status the source shows (a nomination is a
   nomination).
5. **Voice sample.** Six to twelve first-person sentences from sources the writer wrote (past
   applications, cover letters, notes), chosen because they sound like a person rather than a
   CV. These show the writer their own register and keep the agent from imposing one. They are
   not a template.
6. **Attribution verbs.** For every claim about what the writer did, the verb the source uses
   (led, delivered, helped, contributed). Record it; do not resolve it. The attribution class is
   set only by the writer, in the provenance pass.
7. **Third-party claims.** What references, appraisals or recommendations say, marked as the
   third party's view. Evidence, not the writer's claim.

Rules of extraction: quote or paraphrase closely, and mark which. Never infer a moment, a motive,
a cost or a figure the source does not state. Where a source implies an episode without stating
it ("transformed the release process"), record the claim with its verb and add a question for the
writer; the episode itself is theirs to tell.

## Reconciliation

Lay the sources against each other. List for the writer:

- **Conflicts.** Dates, titles, figures or scope that differ between sources. The writer settles
  each; the settled value goes to the ledger with both sources noted.
- **Stale items.** Anything from a source older than the latest role change, flagged with its
  vintage.
- **Duplicates.** The same episode told in two sources; keep both tellings in the bank, since
  the later one often carries the outcome the earlier lacked.
- **Gaps by criterion.** Criteria in the brief for which no source holds an episode. These go to
  the bank interview, not to inference.

## The knowledge base

The template is [assets/knowledge-base.md](../assets/knowledge-base.md). It is the writer's
private document: the sources index, the timeline, the episode bank with a source column, the
figures with their published forms, the standards and awards, the voice sample, the attribution
verbs, the third-party claims, the conflicts settled and open, the gaps by criterion, and a log of
what later interviews added. It is never submitted, and it outlives the application: the next
application starts from it, with its interview additions already in, which is where the mode pays
for itself twice.

Every entry carries a source and a date. When the writer contradicts a source, the writer's
account is recorded as the current value with the source "interview, date", and the source's
value is kept beside it as history. The knowledge base is the writer's memory with provenance,
never an authority over them.

## The criteria map

With the brief's questions and criteria in hand, map the bank to the questions exactly as step 3
of the pipeline does, with one addition: for each candidate episode, note which of the six
elements the sources already hold and which they do not. A CV alone usually gives the particular
and the decision as claims and often no outcome of the counted kind, so a CV-only scaffold scores
below three; a previous application answer sometimes carries all six. The step 1 reading of each
question and the predicted score of each scaffold are recorded in the criteria map. Choose
one episode per question with the writer, by the step 3 tests, and record the choice and the
known holes. Write the map to `criteria-map.md` beside the knowledge base; it is a working paper,
kept with the brief. In this mode the knowledge base stands in for the episode bank; the answer
worksheets and the fact ledger are still used per question, the ledger filled at the provenance
pass from the tags the writer confirms.

## Scaffold answers

A scaffold is a first draft written for one reader: the writer, deciding three things in one
read: which of these sourced facts are true and mine; which holes are where the answer actually
lives; and whether this is the right episode for this question. It is not written for the
assessor and must not be mistaken for an answer. What it must leave the writer believing: these
are my facts, with where they came from; the answer is not written yet, and these marked holes
are where it will come from; this episode is the one, or it is not.

Rules of assembly:

- The scaffold file opens with the question as its first paragraph, beginning with the word
  "Question", which is how the script knows to exclude it; then the label, then the scaffold.
  The limit is recorded in the count line.
- Every sentence is a source's sentence, or a close paraphrase of one, and ends with its source
  tag in square brackets: `[S2]`. A sentence drawn from two sources carries both in one tag:
  `[S1, S2]`.
- Every missing element is a bracketed ask at the place it belongs, naming the element and the
  probe: `[ask: the others. Who else was in the room, by role, and what did they say?]` An ask
  holds no square brackets of its own and supplies no words for the writer's answer; it may name
  the element and the kind of thing wanted (a role, a figure's form), never a candidate
  sentence.
- The six elements are laid in the shape's order. A missing element is never filled with a
  plausible sentence; it is an ask.
- The source's register is kept only where the source is the writer's own first-person prose.
  CV fragments and third-party claims are rendered as plain first-person facts with nothing
  added but the "I" and the tense, tagged `[paraphrase]`; they are not polished into voice.
- Terms are defined on first use from the sources where the sources define them; otherwise an
  ask.
- The length is counted once and stated with the tags and asks excluded; the script does this
  and will also report the tags and asks as unresolved notes, which is correct: a scaffold with a
  tag or an ask left in it is not submittable, by construction. Run the script on the scaffold
  first, then write the count line from its output.
- A close paraphrase of a source (an "I" added, a role line and a bullet joined) carries
  `[paraphrase]` after its source tag: `[S1] [paraphrase]`, or `[S1, S2] [paraphrase]` from two
  sources.
- The scaffold is labelled at the top, in square brackets so the script excludes it from the
  count: `[scaffold: assembled from your sources. Expect it to read like a list; the
conversation is where it becomes yours. Confirm every tagged sentence; answer every ask.]`
  The closing count line is bracketed the same way: `[count: 74 words without tags and
asks. ...]`.

Expect a scaffold to score about three where the sources hold the particular, the decision and
the outcome, and below three where a part of the question is wholly unsourced, and say which to
the writer. A scaffold that reads as a litany is doing its job: it shows the writer, in their
own prior words, why the interview is needed.

## Hand-off to the conversation

Each scaffold goes straight into the upgrade conversation in
[upgrade-conversation.md](upgrade-conversation.md), with two things made easier by the
knowledge base:

- **The provenance pass is fast.** Every particular already carries a source. The writer
  confirms, corrects or strikes each tagged sentence; confirmed ones lose their tag and gain a
  ledger row whose source is the document. The writer sets the attribution class for each
  "I led" or "I delivered" with the attribution question; the source's verb does not decide it.
- **The asks are the turn list.** The conversation's first questions are the scaffold's asks,
  in the order of value in the upgrade reference. Each reply is captured verbatim, laid in place
  of the ask, reflected back, read aloud. Each spoken particular goes to the knowledge base with
  the source "interview, date".

The writer outranks the source at every turn. When memory and document differ, the writer's
account stands, the difference is recorded, and the writer may want to fix the document later.

The rest is the conversation's own: the scoreboard, the one-level-down rule, the checks, the
fresh read, the ceiling if there is one.

## Combining with the other modes

- **Sources and no answers**: this mode, then the conversation per question. The common full
  journey.
- **Sources and existing answers**: diagnose each answer as in the upgrade mode, and use the
  knowledge base as the provenance oracle, checking each particular against the documents before
  asking the writer; then the conversation.
- **No sources**: the pipeline from nothing. Its bank interview can seed a knowledge base from
  speech alone, with the source "interview, date" throughout.
- **A knowledge base from a previous application**: start from it; add any new sources; re-run
  reconciliation for anything stale; map to the new criteria; the interview additions from last
  time are now sourced episodes with the moments already in them.

## A worked example, abridged

Everything here is invented.

Sources: S1, a CV from 2024; S2, an application answer from 2023 to a question about delivering
under pressure. Question in hand: "Tell us about a time you improved the reliability of a service your
team ran. What did you change, and what came of it?"

From S1, the knowledge base gains a role ("Digital lead, county library service, 2021 to
present; forty branches; team of five") and an episode line as a claim with its verb
("Eliminated Saturday booking outages by re-engineering the overnight import; led"). From S2 it
gains the same episode told in the writer's own prose, with a particular the CV lacks ("branch
staff had started keeping paper lists") and a figure with its period ("no booking outages in the
following quarter"), and six sentences for the voice sample. Reconciliation: S1 says "led", S2
says "I found and fixed"; recorded, unresolved until the writer settles it.

The scaffold:

> [scaffold: assembled from your sources. Expect it to read like a list; the conversation is
> where it becomes yours. Confirm every tagged sentence; answer every ask.]
>
> In 2023 the online booking service for our forty branch libraries was failing most Saturday
> mornings, when demand peaked, and branch staff had started keeping paper lists. [S2] I found
> that a nightly data import was locking the bookings table for up to twenty minutes. [S2] [ask:
> the method and why. What were the options, and why did you choose the one you chose over the
> obvious one?] [ask: the others. Who else was in it, by role, and what did they say or need?]
> [ask: the cost. What did it take, and what went wrong on the way?] Saturday failures stopped:
> no booking outages in the following quarter. [S2] [ask: the reflection. What would you do
> differently, and in what order?] [ask: what persists. What exists now because of this that did
> not before, and who owns it?]
>
> [count: 74 words without tags and asks. Attribution for "I found that" unresolved: S1 says
> led, S2 says found and fixed.]

The conversation then begins with the first ask, and the five-star version in
[answer-shape.md](answer-shape.md) is what it becomes when the writer supplies the finance lead,
the two days, the week lost and the engineer who now owns the alert.
