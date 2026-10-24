# Run notes: from-sources mode, A. B., Ashcombe sift (invented)

Run on 2026-10-21 by a Claude Code agent with the writer absent. Inputs: `SKILL.md`,
`references/from-sources.md`, `references/rubric.md`, `references/upgrade-conversation.md`,
`references/voice.md`, `references/elicitation.md`, `references/answer-shape.md`,
`references/truth-and-attribution.md`, `references/editing-passes.md`, the three scripts' help
and `check_answer.py`'s source, `assets/knowledge-base.md`, `assets/voice-profile.md`,
`assets/brief.md`, the fixture brief and the two sources. Not read: the marking scheme, the
synthetic answers, the other results directories, `evals/README.md`, anything outside the skill.
The previous contents of this directory were removed unread before writing.

`SKILL.md`, `references/from-sources.md`, `assets/brief.md`, `README.md` and
`assets/chatgpt-project-instructions.md` changed on disk at 17:22 during the run, after the
first reading. The run follows the 17:22 versions (re-read in full for `SKILL.md`,
`from-sources.md` and `brief.md`); the new §Intake and its classification gate are applied. The
`README.md` was not read in either version.

Outputs written here: `knowledge-base.md`, `criteria-map.md` (carrying the brief stand-in, the
proposed material classification, the step 1 reading, the bank against the criteria and the
proposed choices), `voice-profile.md` (from S2 only; unconfirmed), `scaffold-q1.md` to
`scaffold-q4.md`, and this file. The run stops at the hand-off: no conversation was run, no
ask answered, no tag confirmed, no fact ledger or worksheet filled, no fresh read.

## The check script's output on the four scaffolds, verbatim

`python3 -I scripts/check_answer.py --words 250 scaffold-q1.md scaffold-q2.md scaffold-q3.md
scaffold-q4.md`, run after the count lines were written. A first run, before the count lines,
gave the same counts with one scaffold label each instead of two.

```text
== <root>/.claude/worktrees/interview-question-exploration-skill/skills/interview-question-exploration/evals/results/run-from-sources/scaffold-q1.md
words 53; characters 329 with spaces, 277 without
UNRESOLVED working notes (13): 8 asks still to answer, 3 source tags still to confirm, 2 scaffold labels to remove, 0 other
  [ask: the particular's scale and
stake. How big was the team that had been on the rebuild, how many residents or repairs a year
did the system carry, and what was at stake if the rebuild had carried on?]
  [ask: the decision
and how you reached it. The question asks how you reached the decision, and the sources hold
only that you made it. What did you see, in what evidence, that turned it; what were the
options, including carrying on; and what tipped it?]
  [ask: the others. The question asks how
you took the people who had built it with you, and no source holds them. Who had built the four
months of work, by role; what did they say when you stopped it, as near to their words as you
can; and what did you do or change because of what they said?]
  [ask: the cost. What did
stopping cost, in work set aside, time or goodwill, and what went wrong on the way?]
  [ask: the freed capacity. The sources hold the integration and the figure above. Who
built the integration and over what period, and is that figure the measure of what the freed
capacity delivered, in the form it was measured?]
  [ask: the reflection. What worked, and what
would you do sooner, later or differently the next time you stop a piece of work?]
  [ask: what
persists. What exists now because of this that did not before, as an act with a trace, and who
owns it?]
  [ask: terms. In eight words each, for a reader outside the council: the housing
repairs case-management system; a contractor-scheduling integration.]
first person 1, plural 0

== <root>/.claude/worktrees/interview-question-exploration-skill/skills/interview-question-exploration/evals/results/run-from-sources/scaffold-q2.md
words 43; characters 272 with spaces, 230 without
UNRESOLVED working notes (17): 9 asks still to answer, 6 source tags still to confirm, 2 scaffold labels to remove, 0 other
  [ask: the particular's stake and scale. The question asks about a
service you were responsible for. Was the repairs-reporting service yours; who depends on it and
how many; and what happened to them during the fourteen hours?]
  [ask: the first days. The
question asks what you did in the first days, and the sources hold only that you led the
response. What did you do, in what order, with your own hands and by directing whom; and what
did you find the cause to be?]
  [ask: the method and why. For what you did first, why that way
and not the obvious one?]
  [ask: the others. Who else was in it, by role: the residents or
frontline staff who could not report repairs, whoever was paged, a supplier, your director. What
did they say or need, as near to their words as you can, and what did you do because of it?]
  [ask: the cost. What did the response and the changes cost, and what went wrong on the way?]
  [ask: the counted outcome. What is the service result since the changes, in the
form it was measured: outages, time to detect or to recover, over what period?]
  [ask: the
reflection. What worked, what would you refine, and what would you do sooner next time?]
  [ask:
what persists. The question asks what of that change is still in place. You left Westmere in
2024 and the sources say nothing about the current state. Which of the three changes still
runs, how do you know, and who owns each now?]
  [ask: terms. In eight words each, for a reader
outside the council: the repairs-reporting service; upload validation; a synthetic check.]
first person 3, plural 0

== <root>/.claude/worktrees/interview-question-exploration-skill/skills/interview-question-exploration/evals/results/run-from-sources/scaffold-q3.md
words 236; characters 1284 with spaces, 1049 without
UNRESOLVED working notes (20): 7 asks still to answer, 11 source tags still to confirm, 2 scaffold labels to remove, 0 other
  [ask: the method and why. Why replay the previous
year's traffic rather than the obvious alternative, and what had already been tried?]
  [ask: the
resistance. The question asks about a team that did not want the practice, and neither source
says anyone resisted the replay test or the gate it became. Who, by role, did not want it; what
did they say, as near to their words as you can; and what was their best case? If nobody
resisted, say so: then this episode cannot carry this question and the choice goes back to the
criteria map.]
  [ask: working with the resistance. What did you change in the practice, or in
how you brought it in, because of what they said?]
  [ask: the
cost, and who did which part. Who is the "we" that found and fixed the bottleneck, by role; and
what did the three runs cost in time or in anything that slipped?]
  [ask: the reflection. What worked,
and what would you do differently the next time you bring a practice to a team?]
  [ask: the practice's state now. The
question asks for its state now. S2 was written in 2023 and S1 in 2024, both after you left the
museum in 2022. Is the gate still the team's release check today, how do you know, who runs it
without you, and what figure shows it in use?]
  [ask: terms. In eight words each, for a reader
outside the museum: the ticketing engine; a members' pre-sale; the session store.]
first person 6, plural 4

== <root>/.claude/worktrees/interview-question-exploration-skill/skills/interview-question-exploration/evals/results/run-from-sources/scaffold-q4.md
words 37; characters 242 with spaces, 206 without
UNRESOLVED working notes (15): 9 asks still to answer, 4 source tags still to confirm, 2 scaffold labels to remove, 0 other
  [ask: the particular's stake and scale. When did the reduction land and from whom;
how big was the team and what did the platform carry for residents; and what was at stake if
the cut had been passed down evenly?]
  [ask: what you protected and why. The sources hold the
two things kept and no reason. Why those two, over what else, and what did you weigh?]
  [ask:
what you dropped. The question asks what you dropped, and no source holds it. What was dropped
or cut, line by line, and what did each cost the people who used it?]
  [ask: the others, and how
you explained it. The question asks how you explained the choices to the people it affected,
and no source holds them. Who were they, by role: a supplier, the team, a service manager, your
director, finance. In what order and by what means did you tell them; what did they ask or push
back on, as near to their words as you can; and what did you change because of it?]
  [ask: the
cost. What did the cut cost in practice, and what went wrong on the way?]
  [ask: the counted
outcome. Did the year close within £355,000, and in what form was that measured?]
  [ask: the
reflection. What worked, what would you decide differently, and in what order would you tell
people next time?]
  [ask: what persists. What exists now because of this that did not before, as
an act with a trace, and who owns it?]
  [ask: terms. In eight words each, for a reader outside
the council: the platform budget; on-call cover; the accessibility audit, and against which
standard.]
first person 2, plural 0

RESULT: hard failures present
EXIT STATUS: 1
```

## Reading the output

- Exit status 1, from the unresolved notes alone. No scaffold is over the limit. The reference
  says this is the correct result: a scaffold with a tag or an ask in it is not submittable by
  construction.
- Body words without tags and asks: Q1 53, Q2 43, Q3 236, Q4 37. Asks: 8, 9, 7, 9 (33 in all).
  Source tags: 3, 6, 11, 4 (24 in all). Scaffold labels: 2 each (the label and the count line).
- Q1, Q2 and Q4 are CV-only scaffolds: three or four sourced sentences each and the rest asks.
  That is the litany the reference says to expect, and it shows the writer where the answer
  will come from.
- Q3 is 236 words before any ask is answered, because S2's prose is 232 words of it. When the
  asks are answered the answer will be over the limit, and the cut by altitude will fall on
  context (the hosted-provider sentence and the forty-times sentence are the least-earning
  context for this question); that is the conversation's business, not the scaffold's.
- Nothing flagged for hedges, generic phrases, tell sentences, undefined acronyms, the
  question's words handed back, or sentences repeated across answers. The first-run check,
  before the count lines, gave the same.
- Q3's "first person 6, plural 4" is S2's "We found the bottleneck..." and "Our members'
  sales..."; not more "we" than "I", so no note from the script; the ask for who did which part
  covers it.
- Lint: the seven Markdown outputs pass the repository's markdownlint rules
  (`.markdownlint.json`) with 0 issues. Under markdownlint's defaults (80-column lines, aligned
  tables) they fail, as the skill's own references do; the repository's gate turns those rules
  off and covers tracked files only, and this branch is local.

## Hand-off items for the writer

The gates that need the writer, all open:

1. Intake: confirm the classification of each item of material (`criteria-map.md`, "Material
   supplied").
2. Confirm the sources index's reliability notes ("this CV is from 2024"; "that answer is from
   2023 and the facts may have moved on").
3. Agree or correct the step 1 reading of each question (`criteria-map.md`).
4. Settle the three conflicts (the pre-sale figure's wording; who made the replay test a gate;
   whether the hosted-provider argument and the payments move are one thread) and answer the
   stale items (the Northshire role's status now; how the writer knows the gate's state now; the
   outage changes' and the budget's state after 2024).
5. Choose the episode per question: Q1 E2, Q2 E3, Q4 E4 proposed with no alternative in the
   bank; Q3 E5 proposed with E1 the alternative and the resistance unsourced for both. Decide,
   knowing which answers will score three by the choice.
6. Read the voice profile aloud; strike, add, and answer "keep" and "lose".
7. Per scaffold, the provenance pass: confirm, correct or strike every tagged sentence; set the
   attribution class for each "I stopped", "I led", "I introduced", "I managed", "I absorbed",
   "I took on", and the "we" in Q3, with the attribution question.
8. Then the asks, one per turn, in the upgrade reference's order of value. By that order the
   first question for each scaffold is: Q1, how you reached the decision (a part of the question
   unanswered); Q2, the first days (a part unanswered); Q3, the resistance (a part unanswered,
   and the one that decides whether E5 can carry the question); Q4, what you dropped (a part
   unanswered).

Questions recorded for the bank interview, outside the four scaffolds: criterion 6 (frontline
staff and residents as evidence) and criterion 7 (developing people) have no sourced episode;
the skills line's "coaching and mentoring" and the profile's "building high-performing teams"
are claims without an episode.

## Points in the skill's instructions found unclear or contradictory while following them

This list is independent of the previous run's: that run's notes were not read.

1. The scaffold's first paragraph must begin with the literal word "Question" for
   `check_answer.py` to treat it as the question; `from-sources.md` says only "opens with the
   question as its first paragraph, as the script expects". A verbatim question ("Tell us
   about...") would be counted as answer text. The run prefixed "Question 1." and so on; the
   reference could say so.
2. Where the predicted score ("say which to the writer") is written is unstated: the count
   line, the criteria map, or the conversation. The run put it in both the count line and the
   map.
3. The form of a tagged paraphrase: the reference says `[paraphrase]` goes "beside its source
   tag", and the script accepts `[S1] [paraphrase]` as two tags; the worked example shows none,
   so the exact form is a guess. Whether a sentence joined from two sources and paraphrased is
   `[S1, S2] [paraphrase]` is likewise unshown.
4. "The six elements are laid in the shape's order" is silent on a source's sentences that refer
   to each other in a different order. In S2, "Once that was settled" refers to the head of
   digital sentence before it (element 3 before element 2). The run kept S2's order for that
   pair and said so in the count line.
5. The step 1 reading's home in this mode: `SKILL.md` puts it on each worksheet, the brief
   template has a table for it, and `from-sources.md` names only the knowledge base and the
   criteria map, then says the worksheets "are still used per question". The run put it in the
   criteria map. The reference could say which paper holds it from sources.
6. Which gates must close before a scaffold is written is unstated. `from-sources.md` says
   "Choose one episode per question with the writer ... record the choice and the known holes",
   then describes scaffolds, so the step 3 choice precedes the scaffold; the new §Intake gate
   and the step 1 gate precede it too. With the writer absent, every gate stayed open and the
   scaffolds were written on the proposed choices, marked as proposals. A live run with a
   writer who answers slowly would want to know whether scaffolds may be drafted ahead of the
   choice.
7. The ask's licence, "may name the element and the kind of thing wanted (a role, a figure's
   form), never a candidate sentence", sits close to `rubric.md`'s instruction to write down
   "what the author probably hoped would persist" (for example "a review point the team now
   uses"). Naming that kind in an ask edges toward a candidate. The run kept the asks to the
   skill's generic kinds ("an act with a trace") and put the guesses in the criteria map.
8. `voice_profile.py` counts possessive apostrophes as contractions: 1.3 per 100 words on a
   sample that has none ("members'", "year's", "pre-sale's"). The profile records both the
   reported and the read figure.
9. `voice_profile.py` measures every line not starting with `#`, `>` or `|` and not in square
   brackets, so a sample file's non-writer text (here, the fixture's preamble) is measured with
   the prose. `voice.md` does not say that a sample file must hold only the writer's prose. The
   run measured a copy of S2's three body paragraphs.
10. The CV-fragment rule, "nothing added but the 'I' and the tense", and the paraphrase rule, "a
    role line and a bullet joined", describe different licences: joining a role line adds "as",
    "at" and "from ... to". Minor, but a strict reader of the first rule would not join.
11. Terms: "defined on first use from the sources where the sources define them; otherwise an
    ask" does not say whether each term is its own ask or the terms share one. The run bundled
    the terms into one ask per scaffold. More generally, several asks hold more than one
    question, and the asks are "the turn list" of a one-question-per-turn conversation; whether
    one ask is one turn or is split into turns is unstated.
12. `SKILL.md` ("Three entry points") says the agent's own words in a scaffold are "headings,
    tags and asks, nothing else"; `from-sources.md` says "the label, the tags, the asks and the
    count line, nothing else". A scaffold has no headings in the worked example; the two lists
    should match.
13. The voice profile is used at scaffold time (its sources table "decides" which register the
    scaffold keeps) before the writer has confirmed it, while `SKILL.md` §Intake item 6 and
    `voice.md` have the writer confirm the profile before it is used. In a live run the profile
    would go to the writer before the scaffolds; the order could be stated.
14. Where the limit is recorded in a scaffold file is unstated (the question paragraph, the
    label, or the count line). The run put it in the count line ("of a 250-word limit").
15. A CV outcome fragment that is not a first-person claim ("the average time ... fell from
    eleven days to six") and is laid in verbatim: the rules cover first-person renderings
    (`[paraphrase]`) and the writer's own prose (`[S2]`), not a verbatim third-person fact from
    a CV. The run tagged it `[S1]` alone.
16. All four scaffolds come out "below three" by the reference's own test (a part of the
    question wholly unsourced), which is the normal case for a CV-only source. The reference's
    "expect a scaffold to score about three where the sources hold the particular, the decision
    and the outcome" reads as the common case; for a CV it is the rare one. An observation, not
    a contradiction.
17. The fixture says each question is scored "by the person who wrote it"; `rubric.md` says
    "each answer is scored by more than one assessor". `rubric.md` also says the employer's
    description wins, which settles it; noted because the step 1 table's "author" framing
    depends on it.
18. The skill's files changed on disk mid-run (point above the script output). A run that
    reads the entry point at 17:13 and the reference at 17:22 would follow two versions; the
    run re-read both. Not a fault in the instructions, a fact about this test.
