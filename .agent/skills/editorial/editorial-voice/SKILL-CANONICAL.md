---
name: editorial-voice
classification: active
metadata:
  layer: general
description: >-
  The craft of a first-person professional voice on every surface that represents a person: the
  registers (evidential, agentic and scannable for a CV or profile; narrative and reflective for a
  front page) and their overlap, the five pitfalls (justification, passive framing, tell
  sentences, hedging, unclear abstractions), what an adjective needs to stand, and the
  five-question check. The author's own voice in one line, their registers' overlap and their
  standing decisions come from the host's author instance. Load it whenever writing or editing CV
  content, front page narrative, positioning, capabilities, profile fields, bios, posts or any
  sentence a reader will take as the author speaking, even a one-line edit; the order of work
  around it is write-for-the-reader, which calls this skill at the prose and at the check. Not for
  repository prose, records, plans or code comments. Right looks like: "I conceived and built", a
  sentence that shows what and what it creates. Wrong looks like: "my work has focused on", an
  explanation of why, a hedge on a true claim, "ecosystem".
---

# Editorial Voice

Read the host's author instance, `.agent/directives/editorial-guidance.md`, before any content
work: it holds this author's identity, positioning, voice in one line, the registers' overlap and
the standing decisions. This skill holds the craft that applies to any author. Read
`.agent/directives/editorial-strategy.md` too: it governs audience, surface-specific composition,
attention, readability, section weight and platform fit. Voice is one editorial lens, not the
whole review.

The order of work that puts this skill in its place is
`.agent/skills/editorial/write-for-the-reader/SKILL-CANONICAL.md`: the reader's decision first,
the beliefs and the moments, then this skill at the prose and at the check, then the readers
(`editor`, `prose-expert`, `audience-reader`) before the author. A draft that reaches for voice
before the reader's decision exists polishes a structure that has not earned its shape.

## The voice in one line

Every author has one, and the author instance states it. The craft test is the same for all of
them: the copy should sound like the author at their most themselves, someone who knows exactly
who they are, not someone carefully calibrating a message.

## Two registers, one person

A front page and a CV share the same voice but serve different purposes. A reader who encounters
both should recognise the same person.

A profile usually draws on the evidential CV register, but its fixed fields, collapsed previews
and fragmented entry points require a different composition (`editorial-strategy.md`
§Composition is surface-specific; the `linkedin-profile` skill).

### CV register

- **Evidential.** Every sentence carries weight: it claims something or demonstrates something.
  No filler.
- **Precise and agentic.** "I conceived and built" not "my work has focused on." First person,
  active, direct.
- **Claims-oriented.** The positioning makes abstract claims; the experience sections show them
  happening; the capabilities bridge both.
- **Scannable.** The people who decide read first on a scan. Significance should be visible on a
  first pass.

### Front page register

- **Narrative and reflective.** A storytelling register.
- **More expansive.** Room for interests, values, philosophical threads.
- **Openly emotional** where the CV would not be.
- **Invitational.** Ends with openness.

### Overlap

Where a concept appears in both registers, the framing is consistent: same person, different
context. The author instance names the concepts this author carries across surfaces.

## Common pitfalls

These recur in editorial sessions across authors. They are the most frequent ways a first-person
voice goes wrong.

### Justification

The most common failure. Justification explains _why_ the author did something, as if the reader
needs convincing. A confident person states what they did and what it creates.

| Justification (wrong)                                 | Confident intent (right)                                       |
| ----------------------------------------------------- | -------------------------------------------------------------- |
| "I built these tools to lower the cost of innovation" | "These tools lower the cost of innovation for everyone"        |
| "The intent is deliberately indirect, reflecting..."  | Just describe what the work does and what it makes possible    |
| "I backed a rebuild because..."                       | "I backed a rebuild, accepting and managing near-term risk..." |

If a sentence explains _why_, rewrite it to state _what_ and _what it creates_. The reader who
understands the positioning will recognise the pattern.

### Passive and descriptive framing

| Passive (wrong)                                  | Agentic (right)                           |
| ------------------------------------------------ | ----------------------------------------- |
| "My work has focused on treating X as..."        | "I conceived and built X..."              |
| "This has included exposing it through..."       | "I designed and delivered..."             |
| "Contributes to infrastructure that supports..." | "I create infrastructure that enables..." |

### Tell sentences

If the preceding paragraphs already demonstrate something, do not add a sentence summarising it.
Trust the narrative to carry its own weight. A sentence that carries almost no information ("the
way of working that built it: the human defines the vision and strategy, and agents build") is
better removed and its job given to the surface that can do it.

### Hedging

| Hedged (wrong)                                                   | Direct (right)                                                                |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| "Enabling durable, ethical, and high-impact solutions to emerge" | "Giving teams a clear frame to build against with confidence"                 |
| "Instincts that now underpin my exploratory leadership"          | Show the instincts in action: describe a moment where they produced a result |

A hedge stacked on a hedge ("with colleagues I helped") turns a true claim into none; say what the
reader needs and put the credit beside it.

### Unclear abstractions

Words like "ecosystem" should be replaced with what they actually mean: systems, context, and
creating the conditions for new states to emerge. If a word could mean anything, it means nothing.
A term with specific meanings in several fields ("model") is replaced with the plain word
("understanding") unless the specific meaning is the one intended.

## What an adjective needs

An adjective stands when it is true by the author's authority (the author invented the thing and
calls it innovative) or when it is an accepted fact among the readers (an institution's standing
in its field). The pitfall above is for claims the reader would doubt; asking the author for a
number to prove an adjective of the first kind is the seat applying a rule by surface analogy.
Level, on the other hand, shows and is never argued: the title is a fact carried plainly, and what
was built, the call made, the cost accepted and what others now build on carry the level of
operation; an org chart argues a title up, which is justification by another name.

## Verbs the author would not use

The verb carries the author's relationship to the work. "Set" for an author who describes
enabling, guiding and holding space is the opposite of what they said; "built" for a project that
was research is a false claim; "helped" beside a claim the author owns is a hedge. Choose the verb
with the author, from the author's own description of the relationship.

## The check

After writing or editing content, ask:

1. Does this sound like someone who knows exactly who they are?
2. Would the author say this out loud, confidently, to someone they respect?
3. Is every sentence showing or claiming, never explaining or justifying?
4. Does a reader who saw one surface and then another recognise the same person?
5. Does the author instance's implicit reading test hold: does a reader finish with the
   impression the instance names as the one the whole must leave?

Read the passage aloud before the readers do; repetition hides in nouns, and rhythm is editorial
evidence.

## Reference

- `.agent/directives/editorial-guidance.md`: the host's author instance
- `.agent/directives/editorial-strategy.md`: audience, surface composition, attention,
  readability, length and platform fit
- `.agent/skills/editorial/write-for-the-reader/SKILL-CANONICAL.md`: the order of work
- `docs/editorial/decision-records/`: the author's specific editorial decisions with context and
  rationale
