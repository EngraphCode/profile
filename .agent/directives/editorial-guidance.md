---
fitness_line_target: 195
fitness_line_limit: 225
fitness_char_limit: 15000
fitness_line_length: 100
layer: general
split_strategy: Split by responsibility — extract pitfall examples to a separate reference, or voice register details to register-specific files
---

# Editorial Guidance

This directive is process: how a person is modelled and conveyed in writing that represents them,
and how their story is structured, for any author. Read and internalise it before any content work
that represents an author (a CV, a front page, a LinkedIn profile, a bio, a post, a positioning
line), alongside [editorial-strategy.md](./editorial-strategy.md), which governs audience,
surface-specific composition, attention, readability, section weight and platform fit. The author's
own information is a different sort of thing and lives elsewhere (§The author's information).

The skills carry the method: `write-for-the-reader` is the order of work, `editorial-voice` the
craft of the first-person voice, `linkedin-profile` and `cv` the surfaces. The reader templates
(`editor`, `prose-expert`, `audience-reader`) take the author's file as the brief's source. This
directive holds the principles those skills apply and the model of a person they work from.

## The author's information

Information about the author is never written into guidance, a rule, a skill or a template. It has
two homes, cut by a privacy rule ([privacy.md](./privacy.md) §Private editorial material):

- **The public author file**, one file under `docs/editorial/` that declares `author_names` in
  its frontmatter and no layer. It holds what the author's published surfaces already carry: the
  voice in one line, the registers' shared topics, the positioning vocabulary and what it means,
  the research or career facts and what is never conflated, the keyword decisions, the standing
  decisions with their decision records, and the homes of the facts (the content model, the
  workspaces). A seat drafting for the author loads it with this directive.
- **The private author file**, in the private editorial repository. It holds everything that gives
  psychological or non-public insight into the author: inner states, self-view, values stated as
  psychology, attitudes, feared readings, the impression a piece is meant to leave unstated,
  positioning rationale, career intentions, the author's editorial working agreements, the
  author's priority readers and the level aimed at. A seat drafting for the author reads it where
  the host has one and lets it inform the choices; its absence changes nothing; it is never quoted
  or summarised on a public surface, and its existence and a document in it may be named, as
  privacy.md says.

The validator `validate-editorial-layers` (in `docs-validators:check`) fails on the author's names
in any file declaring `layer: general` or `layer: surface`, and refuses an `author_names` file under
the editorial roots of `.agent/` (the directives, the skills, the reader templates), a second one,
or one that declares a layer: information about an entity is never a directive, rule, skill or
template, and it is not a layer.

**This host.** The author is the owner of this repository; the public author file is
[docs/editorial/author.md](../../docs/editorial/author.md), a facet of the Person entity in the
content model. The LinkedIn workspace holds the profile draft and the non-sensitive LinkedIn
material listed in privacy.md's [LinkedIn workspace authorisation][linkedin-authorisation]; private
material stays in its existing home.

## Voice and register

A person has one voice across their surfaces, and the surfaces serve different purposes. A reader
who meets two of them should recognise the same person. The voice itself (its adjectives, in one
line) is the author file's; the registers are the craft's:

- **CV register**: evidential, precise, agentic, scannable. Every sentence carries weight. "I
  conceived and built", not "my work has focused on". Claims-oriented: the positioning makes
  abstract claims, the experience sections show them happening. A LinkedIn profile takes this
  register in the platform's fragments, each read alone; the `cv` and `linkedin-profile` skills
  hold the two surfaces and their coherence.
- **Front page register**: narrative, reflective, expansive, invitational. A storytelling register
  with room for interests, values and openly emotional language, ending with openness. The front
  page is not a lighter version of the CV; it is a different thing, conveying a flavour of who the
  author is through interests and passions rather than evidence of professional capability.

Where a concept appears on two surfaces the framing is consistent; the copy and the composition
need not be shared (editorial-strategy.md §Composition is surface-specific). The topics the
registers share are in the author file.

## Working with the author

The author is the authority on every fact and every sentence. Editorial changes are a conversation
in which the seat brings the trade space and what it thinks is best in context and why, and the
draft does not move until the conversation settles a named list; nothing outside that list changes.
A limit (a field's characters, a count of links) is never a reason to cut; it is a reason to ask
where else the content lives. The author chooses the instrument of review; the seat never defers to
a later word, nor cites the author's earlier words back as rules. Structured question tools
(checkboxes, multiple choice) are not editorial instruments. Outside eyes (the reader templates) go
to every removal and every number. `write-for-the-reader` §Working with the author holds the full
agreement and its failure classes.

## Conveying a person

These principles were discovered in the first headline and positioning sessions and hold for all
content work that represents a person.

- **Show, don't justify.** Describe what the author did and what it makes possible. Do not explain
  why: justification is calibration, and calibration undermines confidence. A reader who
  understands the positioning recognises the pattern; one who does not is not convinced by
  explanation ([EDR-002](../../docs/editorial/decision-records/002-show-dont-justify.md)).
- **Agency through outcomes, not persistence.** Force comes through in what the work produces, not
  in metaphors of tenacity or grip; the confidence of the claims carries it.
- **Level shows, it is never argued.** The job title is a fact and is carried plainly. What was
  built and what was not, the call made and the cost accepted, what others now build on: these
  carry the level of operation. An org chart or a reporting line argues a title up, which is
  justification by another name
  ([EDR-008](../../docs/editorial/decision-records/008-the-innovator-never-the-engineering-leader.md)).
- **"My" not "the".** "Shaping the problem is my creative act": a personal claim, not a universal
  one. It leaves room for others to create differently and is more confident for being less
  sweeping.
- **The headline filters; the first paragraph rewards those who stay.** A headline most readers
  walk away from is doing its work when the author has chosen that. Retired alternatives live in
  the author's reference material, never on the live surface; a surface-specific headline is a new
  editorial decision.
- **The cumulative impression is never stated.** A piece is written to leave the reader with a
  belief about the author, which is the cumulative effect of agency, origination, judgement and
  system-level thinking, never a sentence. When the impression fails, the fix is in the evidence
  (the experience sections), not in the positioning.
- **Breadth as range, not restlessness.** A career spanning several fields reads as range and
  curiosity when the experience sections carry staying-power evidence: sustained impact, long-term
  consequences of decisions, systems that endured. Without that anchor, forward-leaning
  positioning reads as inability to commit.
- **Collaborative credit.** Never claim solo credit for collaborative work: "as part of a group",
  "helping build", never "I designed the team structure" for a group's work. Describe creating
  conditions, not dictating. The author's own form of words is a standing decision in the author
  file.
- **A delivery frame is honoured, not opposed.** Problem-shaping positioning sits inside a frame
  that can be confidently delivered against, never against delivery.
- **A quality is earned on the page, never claimed.** Playfulness, rigour, commercial awareness,
  product instinct: each is shown by what the work was and did. A sensibility the author wants
  visible is visible across every current surface or it is not there.
- **A background is silent ballast.** A research or academic background provides proven rigour
  without being claimed; its insight is in the thinking, never labelled. Distinct research lines are
  never conflated with one another, and positioning language is never written as a description of
  the research. The author's facts about this are in the author file.
- **Vocabulary belongs to a community.** When a surface addresses a specific community with a
  specific set of values (impact funding, public digital infrastructure), define the vocabulary as
  that community uses it, in the author file, and never let a word drift to a neighbouring meaning.
- **Keywords are carried by structured data.** JSON-LD (`knowsAbout`, `hasOccupation`) and Open
  Graph metadata carry the terms machines index, freeing narrative content for human readers. The
  concepts in `knowsAbout` are still evidenced or alluded to in the narrative, as natural references
  to the same reality, never as keyword placement: the narrative and the structured data are two
  views of the same person.

## Editorial hierarchy

The direction of derivation for all content:

1. **This directive, `editorial-strategy.md` and the author's two files** govern editorial
   strategy, voice, principles and positioning constraints.
2. **The content model** (the positioning paragraphs and capabilities; the front page hero summary)
   is the most carefully edited content and the editorial baseline everything else aligns with. The
   author file names the files.
3. **Derived surfaces** (Open Graph descriptions, JSON-LD fields, manifest entries, a profile's
   fields) remain editorially aligned with those sources.

Shared identity atoms have structural ownership in the Person entity; domain-specific descriptions
may differ and are reconciled by editorial review, not equality.

## Editorial consistency across outputs

All descriptions of the author, wherever they live in the data model, whichever channel they serve
and whichever audience they address, are editorially consistent with the current positioning, voice
and identity. An OG description for social sharing, a JSON-LD Person description for machines, a
manifest description for app launchers and a search result snippet are different artefacts in
different domains serving different audiences; they describe the same person and tell the same
story in their registers. A reader who meets the author through a LinkedIn share card, a search
snippet and an AI assistant's answer should recognise the same person.

This is an editorial principle, not a structural constraint. The descriptions live where their
domains dictate
([ADR-011](../../docs/architecture/decision-records/011-domain-appropriate-descriptions.md)), and
consistency is maintained through review, not through data proximity.

## Editorial decision records

Specific editorial decisions (how content is framed, what language to use or avoid, how to describe
particular work) are recorded as Editorial Decision Records in
[docs/editorial/decision-records/](../../docs/editorial/decision-records/). They preserve the
context and alternatives considered, so future agents and humans understand not just the principles
but the choices made. These directives hold the principles; the EDRs hold the decisions that applied
them.

[linkedin-authorisation]: ./privacy.md#linkedin-workspace-authorisation--28-september-2026
