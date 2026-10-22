# The assessor read

This file is loaded at step 7. It explains why a fresh reader is the falsifier, how to brief one,
what to withhold, the report to ask for, and how to triage the report with the writer.

## Why a fresh reader

The writer and the agent have both read the ledger, the worksheet and the question's intended
reading. They cannot read the answer as the assessor will, because they know what it was meant
to say. A reader who has seen none of that reports the answer's actual effect: what it made them
believe, what they skipped, what they did not trust. The gap between that and what the writer
intended is the finding, and it is the only reliable one.

The fresh reader can be an AI session with nothing in it but the brief and the answer, or a
colleague who has not been part of the drafting. An AI reader is cheaper and available; a
colleague who sits on real panels is better calibrated. Use either; use neither more than twice
per answer.

What "fresh" means on each platform:

- Claude Code: a subagent, given the filled brief as its whole prompt and told to read nothing
  else.
- Claude.ai: a new conversation outside the project in which the drafting happened, with the
  brief pasted in.
- OpenAI Codex: a new session in a directory that holds only the filled brief, or a subagent
  where the version in use supports one.
- ChatGPT: a new temporary chat, or a chat outside the project, with memory off for that chat,
  and the brief pasted in. The project's files are the working papers; the reader must not be in
  the project.

In every case the test of freshness is the same: the reader can quote nothing it was not given.

## What to give the reader

Copy [assets/assessor-brief.md](../assets/assessor-brief.md) and fill it from the brief:

- The reader's role: an assessor at this kind of organisation, scoring an anonymised sift for
  this role, with no CV and no other answers from the applicant, reading a batch of answers to
  this question in one sitting.
- The question, verbatim.
- The criterion the question tests, verbatim from the published criteria.
- The rubric: the employer's scheme if published, otherwise the default one-to-five rubric from
  [rubric.md](rubric.md), including what "excellent" means.
- The employer's warning about generic or machine-written answers, if there is one.
- The reading mode: plain text, once, at an assessor's pace.
- The answer, exactly as it will be submitted, with the question above it.

## What to withhold

- The fact ledger and the worksheet.
- The writer's reading of the question from step 1.
- What the writer intends the reader to believe, and what they intend the reader to see
  persisting.
- The other answers, for the per-answer read. (A separate moderation read, below, sees them all.)

The withholding is the point. A reader who knows what the answer was meant to do reports the
intention; a reader who does not reports the effect.

## The report to ask for

One block per answer:

```text
Score: [1 to 5]
What I now believe about this applicant against the criterion: [two or three sentences]
The sentence that most earned the score: "[exact quote]"
The sentence that most cost it: "[exact quote]"
What was noise for me: [quoted sentences, each with why: nothing new, wrong altitude, unclear, not believed]
Where I skimmed or stopped, and why: [exact quote, or "read to the end"]
The one thing that would move this up a star: [one sentence]
```

Ask the reader to quote exactly, to describe effects rather than propose wording, and to say
when they did not believe something and why.

## The moderation read

After the per-answer reads, give one reader all the answers together, with the brief, and ask
only for: sentences, lists or openers repeated across answers; terms defined in one answer and
undefined in another; one episode doing duty for more than one question; and the overall
impression of the applicant from the set. This is what a moderating panel sees, and it catches
what the per-answer reads cannot.

## Triage

Every finding is information for the writer, not an instruction. With the writer, for each:

- **Absorb** what is right and proportionate: an undefined term, a tell sentence, a missing part
  of the question, a flourish where evidence should be.
- **Reject** with a reason what is wrong: a reader who misread the question, or who wanted an
  outcome of a kind the writer's true episode does not have (in which case the choice of episode
  is the finding, not the prose).
- **Route** to step 4 what needs a fact only the writer holds: the counterpart's words, the
  figure, the person who now does the thing. The lever the reader names is almost always one of
  these.

Record the dispositions on the worksheet. At most two rounds per answer. If a third round would
be needed, the episode is wrong for the question; go back to step 3 with the writer rather than
polishing further.

## When the reader scores the set

Scores across a set tend to cluster. A set of fours with one three is a strong application; a set
with one five and three twos is a weak one. If the writer has the time for one more pass, spend
it on the lowest score, where a star is cheapest, rather than lifting a four to a five.
