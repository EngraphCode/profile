# Run notes: upgrade mode on question 2 (writer A. B.)

Live test of the upgrade conversation in `references/upgrade-conversation.md`, run 2026-10-21
against `q2-three.md`. Working files alongside: `q2-diagnosis.md`, `q2-ledger.md`,
`q2-current.md` (the answer after each turn), `q2-upgraded.md` (the final answer).

## Scoreboard per turn

States are the skill's: present, partial, absent. Never a star; stars come only from the fresh
read.

| Turn | Question asked                                                                                                                                                                                                                                          | 1 Particular | 2 Decision, method | 3 Others | 4 Cost                                         | 5 Outcome                                                          | 6 Reflection / persists                                          | Words of 250                                                                  |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------ | -------- | ---------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 0    | Diagnosis shown; provenance list of 18 put to the writer to mark                                                                                                                                                                                        | present      | partial            | absent   | absent                                         | partial                                                            | absent / partial                                                 | 131                                                                           |
| 1    | The provenance marking; reply laid in; one cut proposed (the Monday clause)                                                                                                                                                                             | present      | present            | present  | absent                                         | present                                                            | present / present                                                | 316 by the script, about 329 with 13 bracketed joining words; over by 66 (79) |
| 2    | The cost; the cut taken, the joins rewritten by the writer; one cut proposed (the three-phones echo)                                                                                                                                                    | present      | present            | present  | present                                        | present (service result); the residents' backlog still an activity | present / present                                                | 399; over by 149                                                              |
| 3    | The backlog's result; the fold taken, "while" sentence rewritten by the writer; one cut proposed (the 214 echo)                                                                                                                                         | present      | present            | present  | present                                        | present (service result and the residents' result)                 | present / present                                                | 433; over by 183                                                              |
| 4    | The term; the fold taken, the cause said in the writer's plain words; the limit pass proposed (nine cuts, about 95 words, plus compression pointers)                                                                                                    | present      | present            | present  | present                                        | present                                                            | present / present                                                | 427; over by 177                                                              |
| 5    | The writer's cuts (seven taken, one refused and done their own way, one fallen away) and their compression, laid in verbatim; proof pass clean; figure style flagged                                                                                    | present      | present            | present  | present                                        | present                                                            | present / present                                                | 300; over by 50                                                               |
| 6    | The writer's second cut laid in verbatim; figures settled (words below a hundred); proof pass flags one wording against L26 (the slip attached to the form, not its accessibility fixes)                                                                | present      | present            | present  | present                                        | present                                                            | present / present                                                | 265; over by 15                                                               |
| 7    | The writer's third cut laid in verbatim, the slip as the ledger holds it; script clean; proof clean; checklist mechanical items pass; fresh read launched (q2-assessor-brief.md)                                                                        | present      | present            | present  | present                                        | present                                                            | present / present                                                | 248                                                                           |
| 8    | Fresh read round 1: 4; lever the obstacle (who agreed the rota's money and the slip, before or after); two noise items ("me directing" unclear; the residents' words without their source). Triage put to the writer with the lever as the one question | present      | present            | present  | partial (a cost absorbed, not shown navigated) | present                                                            | present / present                                                | 248                                                                           |
| 9    | The lever's facts laid in (the director signed off the rota's money, put to her that week; the benefits service manager told before, agreed on the June re-test); "with me on the call"; "residents told us"; cuts proposed to pay (about 28)           | present      | present            | present  | present (navigated)                            | present                                                            | present / present                                                | 310; over by 60                                                               |
| 10   | The writer's fourth cut laid in verbatim (the three thousand attempts and "leaks near electrics" given up by the writer to keep who agreed and when); proof pass flags "the manager" as ambiguous after "its service manager"                           | present      | present            | present  | present                                        | present                                                            | present / present                                                | 252; over by 2                                                                |
| 11   | "that evening" and "morning" out, "the housing office manager" in; proof clean                                                                                                                                                                          | present      | present            | present  | present                                        | present                                                            | present / present                                                | 251; over by 1                                                                |
| 12   | "the Sunday" to "Sunday"; script clean; proof clean; checklist pass; q2-upgraded.md written; second fresh read launched                                                                                                                                 | present      | present            | present  | present                                        | present                                                            | present / present                                                | 250                                                                           |
| 13   | Fresh read round 2: 4; lever the act that stops a known weakness being deferred (not worked, the writer closed); ceiling stated at 4; dispositions recorded in q2-diagnosis.md                                                                          | present      | present            | present  | present                                        | present                                                            | present / present (the admitted failure has no cure in the list) | 250                                                                           |

Fresh reads: round 1 scored 4 (lever: who agreed the rota's money and the slip, before or
after; worked); round 2 scored 4 (lever: the act that now stops a known weakness being deferred;
not worked, the writer closed). The ceiling is stated in q2-diagnosis.md, Exit. Both reports
are there verbatim, with the proposed dispositions.

## Unclear or contradictory points, continued

10. The exit's ceiling template offers two choices, "a different episode" or "a candid N", and
    neither fits this case: the episode carries every element and the round 2 lever is a fact
    the writer may hold but was never asked, because the round 1 lever took the question. A
    third choice, one more question and submission without a third read, is what the situation
    called for; the template could carry it, and the sentence "a third round means the episode
    is wrong" (SKILL.md step 7) does not hold when both levers were fact gaps on the right
    episode.
11. The one question per turn and the word limit together put the second lever out of reach.
    Working the round 1 lever cost 60 words and four turns of the writer's compression; by the
    time the count was 250 the writer had closed. The references could say that when the first
    read's lever is a fact, the writer should be told that the second read may name another,
    so they decide before the limit pass how many more questions they will take.
12. The proof pass has no item for pronouns or referents. Two of the round 2 reader's three
    noise items were made by the writer's compression ("he" and "she" in one clause; the
    manager ambiguity caught at turn 10 by hand). Same family as point 9: a proof item "every
    pronoun and 'the [role]' resolves to one person on a first read" would catch them before
    the read, at no word cost.
13. Harness, not skill: each turn of the conversation was one SubagentHandback and one
    SendMessage back, and the fresh reads arrived as subagent notifications; the skill's
    description of a Claude Code fresh read ("a subagent given only the brief") held.

14. The limit pass cut what the lever then asked for. At turn 2 the answer held "which I took out of
    the contractor line I had been holding back for the dashboard work" (L25); the altitude cut
    C5 removed the whole rota-cost sentence to make the limit, and the fresh read's lever asked
    who funds a paid rota. The cut was by the skill's altitude order (the second example), and
    the reader's lever shows that of two costs the one that carried the navigation was the one
    cut. The references could say that when one of two costs must go, the one that shows a
    person agreeing or objecting stays, since the obstacle element lives in it.
15. Compression blurred two attributions. The writer's own compression turned "with me on the
    call; he did the restart and the fix, I directed" into "me directing" and "to hear what
    residents were saying, which was that they had assumed" into "residents assumed", and the
    fresh read named both as unclear. The proof pass checks particulars against the ledger and
    passed both, since no fact changed; it has no item for a claim whose source or content the
    compression has removed. A proof item for "each attribution still says who did what and how
    the writer knows" would have caught both before the read.

## Unclear or contradictory points, third batch

6. One cut per turn against an answer that grows. The conversation's move 3 proposes "one cut"
   per turn to pay for an addition; the additions the probes elicit ran to 300 words over four
   turns, so one cut per turn cannot keep pace, and the mode does not say when the per-turn
   cut hands over to step 6's full line pass. I handed over when all six elements were present
   and the writer asked for the pass.
7. The altitude list runs out. Step 6 and answer-shape.md cut by altitude (context, the second
   example, adjectives, a mechanism clause) and never the counterpart, the outcome or the
   thinking-beyond move. On this answer the four altitudes reach about 95 of 177 words; the
   rest can only come from the writer compressing sentences that earn, which the agent may
   point at but not rewrite. The references could name the writer's compression as the step
   after the four altitudes, and could warn that the deepening probes fill an answer well past
   the box, so the limit pass is where the writer chooses which particular carries each element.

## Script output

Baseline, on the answer as received (`python3 -I scripts/check_answer.py --words 250 q2-three.md`):

```text
== .../evals/results/run-upgrade/q2-three.md
words 131; characters 755 with spaces, 625 without
hedges: tried to
first person 3, plural 1

RESULT: no hard failures
exit=0
```

Final answer (`python3 -I scripts/check_answer.py --words 250 evals/results/run-upgrade/q2-upgraded.md`), verbatim:

```text
== <root>/.claude/worktrees/interview-question-exploration-skill/skills/interview-question-exploration/evals/results/run-upgrade/q2-upgraded.md
words 250; characters 1431 with spaces, 1182 without
first person 9, plural 3

RESULT: no hard failures
exit=0
```

## Unclear or contradictory points in the skill's instructions, as met

1. The provenance pass and the one-question rule. `upgrade-conversation.md` says the diagnosis
   is shown "before asking anything", that the provenance pass asks the writer "to mark each
   one" of a list, and that struck particulars leave "before the first question". It does not
   say whether the marking request is itself a turn of the conversation or how an eighteen-line
   marking sits with "one question per message". I treated the marking as the single ask of the
   opening turn and held the lever question until the list is settled. The test brief read the
   other way ("end your turn with the first question"); the skill's own order won.
2. The brief and step 1 in the upgrade mode. SKILL.md "Before you start" wants a copy of
   `assets/brief.md`; the upgrade mode "reuses steps 1, 4, 5, 6 and 7" but says nothing about
   the brief, and `assets/upgrade-diagnosis.md` has a slot for "Criterion tested" only, with
   nowhere for the rest of step 1's reading (parts, the behaviour screened out, the counterpart,
   the counted outcome, the thinking-beyond move). I put the step 1 reading in the diagnosis
   file under its own heading and did not make a brief copy.
3. Choosing the lever. "The diagnosis" says the lever is "the one gap with the most score in
   it". "The conversation", move 1, gives an order of value that puts the counted outcome ahead
   of the others. The worked example picks the others over a present outcome. With the outcome
   partial and the others absent, I chose the others by "most score" and read the move 1 list
   as a tie-break, not a priority rule; the two passages could say which governs.
4. The script's hedge list. `check_answer.py` flagged "tried to" in "three thousand residents
   tried to report", which is a fact (they tried and could not), not a hedge. Step 6 says to
   triage the script's flags, which is what happened; a note in the script's output that hedges
   are candidates, not faults, would save a writer a worry.
5. Turn move 5 in a turn-based exchange. "The writer reads the paragraph aloud and confirms it
   or rewrites it. Only then the next question." Where the writer is reached only by ending the
   turn, the read-aloud confirmation and the next question would each cost a round trip. I
   asked the writer to confirm or rewrite the reflected paragraph in the same reply as their
   answer to the next question; the reference could say that this folding is allowed.
