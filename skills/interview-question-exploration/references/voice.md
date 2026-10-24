# The writer's voice, built from their own writing

This file is loaded when the writer supplies samples of their own writing, at any entry point,
and again at steps 5 and 6 and in the upgrade conversation. It says what counts as a sample, how
to read the samples for the writer's habits, how to write the voice profile in
[assets/voice-profile.md](../assets/voice-profile.md), how the writer confirms it, and what the
profile is for and not for. The profile makes "would you say this aloud?" a question with
evidence behind it. It never licenses the agent to write in the writer's voice.

## What the profile is for

A sift answer is scored partly on whether it reads as one person's own account. The employer's
warning about generic or machine-written answers is a warning about voice. The pipeline keeps the
answer the writer's by construction (their facts, their sentences, read aloud), and the profile
adds three things:

1. **A test with evidence.** "Would you say this to a colleague who was there?" is answered by
   the writer, and the profile lets the agent point at the sentence that does not sound like them
   before they are asked: a word they never use, a rhythm that is not theirs, a device they do not
   reach for.
2. **Joins that fit.** The agent's bracketed joins and reorderings are chosen to match the
   writer's habits (their connectives, their sentence length), and are still marked for the
   writer to rewrite. A join that sounds like the writer is rewritten less; one that sounds like
   the agent is rewritten more.
3. **A check on the whole set.** Four answers from one person should sound like one person. The
   profile is the reference the line pass and the final check read against.

What it is not for: generating sentences. A profile is a description of how someone writes; it
does not make the agent that someone. Every rule in [SKILL.md](../SKILL.md) §Your role and the
writer's stands with a profile exactly as without one.

## What counts as a sample

Prose the writer wrote themselves, to be read by someone else, in their own name. In order of
worth:

1. Previous application answers, cover letters and personal statements they wrote.
2. Messages and emails they wrote about work: a post-incident note, a proposal, a disagreement
   put in writing, a handover.
3. A blog, a talk's script, a self-assessment for an appraisal.
4. The interview captures from this skill: everything the writer said in the bank interview and
   the deepening, recorded verbatim, is a sample of how they speak, which is the register a sift
   answer wants.

Not samples: CV bullets (fragments, not prose); documents edited heavily by others; anything a
machine drafted (ask; a writer usually knows); formal documents written to a house style. A
writer who has none of the first three kinds has the fourth by the end of step 2, and the
profile is built from it.

Enough is about 500 words of continuous prose, more than one piece if possible, and at least one
piece written to be read by a stranger. Record each sample's kind, date and source in the
profile's sources table. Samples stay in the writer's working folder and are never submitted;
the only sentences of theirs that reach an answer are the ones they choose.

## Reading the samples

Read every sample once as a reader, then once as an editor, with the profile's headings open.
Look for habits, which repeat, not moments, which do not. Six headings, in the order the profile
takes them:

1. **Rhythm.** Typical sentence length and its range; whether they vary length or run even;
   whether paragraphs are short or long; whether they use lists. Measure it with
   `scripts/voice_profile.py` and record the figures beside the impression; give the script
   files that hold only the writer's prose.
2. **Openings and connectives.** How their sentences start (a time, a person, "I", a
   conjunction); how they join ideas ("so", "because", "which meant", a semicolon, a full stop
   and a new sentence); whether they signpost or just go.
3. **Verbs and stance.** The verbs they reach for when they describe their own acts ("decided",
   "argued", "sorted", "pushed back"); whether they claim or hedge; whether they say "I" or
   "we" and when; how they talk about other people (by role, by name, warmly, drily).
4. **Vocabulary.** The words they use for the things in their world, and the words they never
   use. Jargon they are fluent in and jargon they avoid. Whether they spell British or American.
   Contractions or not. Numbers in words or figures.
5. **Devices and texture.** Humour and how much; metaphor or none; questions; contrast;
   parentheses; dashes; the sentence they are fond of ending a paragraph with.
6. **Register range.** Which registers the samples show (chatty, formal, reflective, technical)
   and how the writer sounds in the one a sift answer wants: plain, first person, evidential,
   addressed to a stranger. If no sample is in that register, say so, and build that section from
   the interview captures.

Quote the samples for each habit. A habit with no quotation is an impression, and impressions
are what the writer will correct.

## Writing the profile

Fill [assets/voice-profile.md](../assets/voice-profile.md): the voice in one line; the sources;
the measured figures; the six headings with quotations; the writer's own pitfalls, which are the
five in [editing-passes.md](editing-passes.md) found in their own prose, each with a line of
theirs that shows it and, where the samples hold one, a line of theirs that avoids it; the short
list of things they never do; and the check, which is the generic check with the writer's name
in it.

Write the profile in plain description, not praise. "Short sentences, rarely over twenty words,
one idea each; joins with 'so' and 'which meant'; never a semicolon" is a profile. "A clear and
confident writer" is not.

The one line is the agent's proposal and the writer's to rewrite. Most writers cannot describe
their own voice and recognise it at once when it is described; the line is settled when the
writer says "yes, that is how I write" or rewrites it.

## The writer confirms it

The profile goes to the writer before it is used, with the samples' quotations in it. They read
it aloud. They strike what is wrong, add what is missing, and answer two questions: "Which of
these habits do you want kept in the answers?" and "Which would you rather lose?" A habit the
writer wants to lose (a tic, a hedge, a joke that does not travel) is recorded as such and the
line pass points at it when it appears. The confirmed profile is theirs.

## Using the profile

- **At step 5 (the draft).** When the writer drafts, the profile is not shown; it would make
  them self-conscious. When the agent assembles from verbatim sentences, the joins follow the
  profile's connectives and rhythm and are still bracketed.
- **At step 6 (the line pass).** Beside the five pitfalls, the agent points at any sentence
  that breaks the profile: a word they never use, a length outside their range, a device that is
  not theirs, a register shift. The writer decides. A sentence can break the profile and stay;
  the point of the pointer is that it was a choice.
- **In the upgrade conversation.** Captured replies are laid into the answer as said. Where a
  reply is spoken and loose, the agent proposes a tightening in the writer's own habits and marks
  it; the writer rewrites. The profile tells the agent what "the writer's own habits" are.
- **From sources.** The knowledge base's voice sample and this profile are the same material;
  build the profile from the first-person sources and extend it from the interview. The
  scaffold keeps a source's register only where the source is the writer's own prose, which the
  profile's sources table decides, provisionally, until the writer has confirmed the profile.
- **At step 8.** Run `scripts/voice_profile.py` on the finished answers and on the samples and
  compare: the figures should sit inside the writer's range. A set of answers with sentences
  twice the writer's usual length, or with none of their connectives, has drifted toward the
  agent, and the line pass runs again. The figures are a check, not a target; nothing is cut or
  padded to hit them.
- **With the fresh reader.** Withheld. The reader scores the answer, not its likeness to the
  writer; if the answer is in the writer's voice the reader finds a person in it without help.

## When the samples disagree with the writer

A writer whose samples are formal and whose speech is plain usually writes better than they
think when they write as they speak; show them the two side by side and let them choose the
register for the answers. A writer whose samples were written for a different reader (a team,
a friend) has a register shift to make, and the profile names what carries over (the rhythm, the
verbs) and what does not (the in-jokes, the shorthand). The writer's choice stands; the profile
records it so the line pass does not re-litigate it on every sentence.
