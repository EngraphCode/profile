# The upgrade conversation: from an existing answer to five

This file is loaded when the writer already has an answer. It carries the triggers, the
diagnosis, the provenance pass, the turn-by-turn protocol of the conversation that fills the
gaps by interview, the probes for each kind of gap, and the exit. The hard rules of the skill
apply throughout: the writer supplies every fact and every sentence; the agent asks, reflects
back, proposes cuts and checks.

## When to run it, and when to suggest it

Run the upgrade conversation when any of these is true:

- The writer arrives with an existing answer: their own draft, an answer from a previous
  application, an example they adapted, or an answer a machine drafted that they now want made
  true and their own.
- The writer asks for a score, a check, a review, "is this any good", "make this better",
  "tighten this", "does this answer the question".
- In the main pipeline, after the first fresh read, an answer scores below five and the lever is
  a fact the writer holds. The conversation is step 7's "route back to step 4" made explicit, one
  answer at a time.
- The writer is short of time and the episode is already the right one. Three to six turns on an
  existing answer are quicker than a bank interview.

Suggest the main pipeline instead, and say why, when:

- The diagnosis finds an episode gap: the episode cannot carry a five honestly, because the
  element the question needs never happened in it, or the writer influenced rather than led.
- The provenance pass strikes most of the particulars: the answer was not the writer's, and
  what is left is a template. Step 2's bank interview is faster than rebuilding a hollow answer.
- What the writer calls an answer is a list of bullets or a job description. That is step 2's
  raw material, not an answer to upgrade.

Never use the upgrade conversation to make a template or a machine-drafted answer presentable
without the provenance pass. The pass is what makes the result true and the writer's own.

## The diagnosis

Read the answer once against the question and the criterion, as the assessor would. Then fill
the table in [assets/upgrade-diagnosis.md](../assets/upgrade-diagnosis.md) and show it to the
writer before asking anything. The writer may correct the reading; their correction is primary.

For each of the six elements, and for the parts of the question, the behaviour screened out at
one star, the counted outcome, the terms, and the limit: present, partial or absent, with the
sentence that shows it quoted, and the class of any gap:

- **Prose gap.** The element is in the writer's knowledge and implied in the answer, but buried,
  generic or at the wrong altitude: a method used but not named; "the board" with no moment,
  where the writer plainly remembers one; a result stated as a feeling. One question surfaces
  the particular; usually one sentence changes.
- **Fact gap.** The element is absent and only the writer can supply it: a measure, a person's
  words, what they would change next time, who now does the thing. The targeted interview fills
  it. If the writer cannot supply it after the one-level-down rule below, the gap becomes part
  of the ceiling.
- **Episode gap.** The episode cannot carry the element honestly: no one else was in it, there
  is no result of the counted kind, the decision was someone else's. No question fixes this; step 3 does,
  by choosing another episode, or the writer accepts the ceiling.

Close the diagnosis with the predicted score under the rubric and the single lever: the one
gap with the most score in it, which is the first question of the conversation. Where two gaps
hold equal score, the order of value in the conversation below decides.

## The provenance pass

Before any new fact enters, every particular already in the answer is confirmed, corrected or
struck by the writer: each name, role, number, date, title, product, decision and outcome, and
each claim of the form "I decided" or "I led". Go through them in a short list, one line each,
and ask the writer to mark each one. The list is the opening turn's single ask: the writer marks
it in one reply, and the first question follows in the next message. Confirmed particulars go
into the fact ledger with their attribution class; struck ones leave the answer before the
first question.

Signs that an answer was machine-drafted or lifted, which make the pass essential: round
figures with no period or form; sentences of uniform length; lists of three everywhere; a
closing moral; "we" with no one in it; claims the writer hesitates over when asked. None of
these is a reason to refuse the answer; all of them are reasons to confirm every line.

When the writer says "I don't remember exactly" about a figure, the figure becomes its form
("about a third", "a six-figure sum") until they can check it, and the ledger records it as
unconfirmed.

## The conversation

One question per message, including in ChatGPT, where the model's habit is to ask several.
Each turn has five moves, in order:

1. **Ask one question**, aimed at the gap with the most score in it. The order of value, when
   several gaps are open: a part of the question not answered; the particular's stake and scale
   where it is thin (a scaffold built from a CV usually lacks it); the counted outcome; the
   others as people read and responded to; the method and its reason; an obstacle navigated;
   the reflection; what persists; a term undefined; the limit.
2. **Wait, then capture verbatim.** Do not fill the pause. Mark paraphrase as paraphrase.
3. **Reflect back.** Show the paragraph the gap lives in, rebuilt with the writer's words laid
   into it and any joining words in square brackets for them to rewrite; and, if the addition
   takes the answer over the limit, one cut proposed to pay for it, with the reason (the
   readers' usual reasons: a sentence that adds nothing new, a flourish where evidence should
   be, a figure without its form, a tell, a signpost written for the marker).
4. **Show the scoreboard**: the six elements as present, partial or absent, and the word or
   character count against the limit. Never a star; stars come only from the fresh read.
5. **The writer reads the paragraph aloud** and confirms it or rewrites it. Only then the next
   question. Where every message is a turn, the reflected paragraph and the next question go in
   one message, and the writer's confirmation or rewrite comes back with their answer.

Three to six turns usually close the gaps an answer can close. If the same gap is still open
after two turns on it, apply the one-level-down rule and move on.

### The one-level-down rule

When the writer answers "nothing happened", "I don't remember" or "there wasn't anyone", ask
once more from a different angle, one level down: "what would they have been worried about?",
"what did you expect to go wrong?", "who would have objected if they had known?", "what would a
sceptic ask for?". If the second answer is also empty, accept it, record the gap as unfillable,
and carry on. An unfillable fact gap is part of the ceiling, and the ceiling is stated honestly
at the exit; it is never papered over with a plausible sentence.

### Probes by kind of gap

The full bank is in [elicitation.md](elicitation.md). These are the probes that fit each gap
the diagnosis names; ask one at a time.

| Gap                               | Probes                                                                                                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A part of the question unanswered | "The question also asks [the part]. What happened on that?"                                                                                                         |
| The counted outcome absent        | "What is the result of the kind this criterion is about, in a form a sceptic could check?" "What number would they ask for, and what is it, in the form it was measured?" |
| The others absent                 | "Put me back in the room. Who was there, by role?" "What did [the role] say or ask, as near to their words as you can?" "What did you do because of it?"             |
| The method unnamed                | "You say you explained it. How, exactly? What did they see or hold?" "Why that way and not the obvious one? What had already been tried?"                             |
| Technical substance absent        | "What could the system not do, and why?" "Which failure mode, cost, risk or limit? What would you have said to someone who called it a preference?"                 |
| An obstacle listed, not navigated | "What stood in the way, one thing at a time? Who or what?" "How did you get past that one, and what did it cost?"                                                   |
| The reflection absent             | "What would you do sooner, later or differently?" "When did you decide to stop pushing, and how did you judge that?" "How was the result better for your part in it?" |
| What persists absent              | "What exists now that did not exist before?" "Who does this now without you?"                                                                                       |
| A term undefined                  | "In eight words, what is [the term] to someone outside?"                                                                                                             |
| Over the limit                    | "Which of these sentences would you miss least?" with the agent's proposed cut and its reason                                                                        |
| "I led" where the ledger says influenced | "Who made the final call? If they read this, what would they say you did?"                                                                                    |

## The exit

When the scoreboard shows every element present, or every remaining gap unfillable, run the
checks (`scripts/check_answer.py`, then the final checklist) and the fresh read from
[assets/assessor-brief.md](../assets/assessor-brief.md). Triage its report with the writer as
in [assessor-read.md](assessor-read.md). At most two rounds; if the lever after two rounds is
still a fact the writer does not hold, state the ceiling:

```text
This answer tops out at [N] because [the gap, named]. The choices are: a different episode for
this question (back to the bank), or this answer as a candid [N], which is honest and will
survive interview.
```

Hand back the answer, the ledger rows added, and the dispositions. The writer keeps all three.

## A worked example, abridged

The starting answer is the three-star library answer in [answer-shape.md](answer-shape.md).
Everything in it is invented, including the writer's replies.

Diagnosis, shown to the writer: particular present ("failing most Saturday mornings"); decision
present; method partial (the fix is described, the choice of it is not); the others absent; cost
absent; outcome present and of the counted kind ("no booking outages in the following quarter");
reflection absent; what persists absent. Predicted three. Lever: the others, because the
question's criterion is about running a service with other people in it and the answer has no
one in it.

Turn 1. Question: "Put me back in the room when you found the lock. Who else was in it, by
role?" Reply, verbatim: "The finance lead, really. She'd just turned down more hosting money and
when I said capacity would fix it she asked me what the money would actually buy and whether it
would happen again, and I couldn't promise it wouldn't." Reflected paragraph: "The simplest fix
was more database capacity; the finance lead, who had just refused a hosting increase, asked me
what the money would buy and whether it would happen again. I could not promise it would not,
[so] I rescheduled the import to run in small batches and added an alert on lock duration."
Scoreboard: the others present; cost partial; reflection absent; what persists absent; 142
words of 250. The writer reads it aloud and changes "[so]" to "and because I could not, I".

Turn 2. Question: "What would you do sooner next time?" Reply, verbatim: "Ask her first what
she could live with. I wasted about a week arguing for capacity I didn't need." Reflected
sentence, in her words, placed after the outcome. Scoreboard: reflection present.

Turn 3. Question: "What exists now because of this that didn't before?" Reply: "The lock check
is in the deploy checks, and the engineer who runs the import owns the alert; she's handled the
two warnings since." Reflected sentences placed last. Scoreboard: all six present; 221 words.
Checks, then the fresh read.
