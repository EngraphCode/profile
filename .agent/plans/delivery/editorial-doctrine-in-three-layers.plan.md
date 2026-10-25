---
id: editorial-doctrine-in-three-layers
node_type: delivery
name: Editorial doctrine in three layers, and the LinkedIn lane's understanding extracted into them
overview: >-
  The editorial directives, skills, sub-agent templates, rule and decision records separated into
  three layers that any person's profile work can use: general writing and editorial practice; the
  surface class (a LinkedIn profile, a CV); and the author instance, here Jim, kept apart and
  public-safe. The understanding the LinkedIn lane of September and October 2026 produced lands
  in those layers in the same motion: one session, one pull request, no distribution yet.
status: ratified
ratified_by: Jim Cresswell
ratified_date: 2026-10-25
ratified_where: >-
  The owner's words in the Shrew rides Eventide session (371a2b) on 2026-10-25, after the LinkedIn
  lane closed: "you can have ONE PR for the understanding extraction work. Of course we need a plan
  for this work. I want a single session, simple, straightforward extraction of understanding. One
  session, one PR, strictly bounded ... All skills and rules and guidance created must apply to any
  person, it must not be specific to me. Will we distribute this understanding to others, yes,
  eventually, but not yet." Recorded on the linkedin-workspace thread record's block of that hour.
serves: content-as-cv
impact_areas:
  - editorial-content
  - practice-and-estate
tickets: []
depends_on: []
owner_gates: []
last_updated: 2026-10-25
---

# Editorial doctrine in three layers, and the LinkedIn lane's understanding extracted into them

Born sketch on 2026-10-11 from the owner's direction, verbatim: "not for right now, but across
directives, guidance, rules, skills, subagents, we need to distinguish between general writing
and editorial best practice, best practice for particular surfaces, such as CVs, linkedin, blogs,
long-form essays, and within those the particular instance of that class applied to a person as
the author, in this case me. The separation should be along appropriate seams, but additionally
separated by directory structure and files". Ratified on 2026-10-25 when the LinkedIn lane closed
and he asked for its understanding extracted in a form that applies to any person: the extraction
and the split are one motion, because every file the extraction would touch is a file the split
moves, and landing the understanding into mixed files would move the same text twice.

## Goal

When this lands, every editorial file in the estate declares one of three layers in its
frontmatter and holds nothing from another layer, and the LinkedIn lane's understanding sits in
the layer its reader loads:

1. **General writing and editorial practice** (`layer: general`): the reader's decision and the
   audience hops words cross; the beliefs and the moments; the method of writing with the subject
   present (the subject supplies facts and judges likeness; the seat writes the reader's
   sentence); the three editing altitudes; the readers as falsifiers; the voice craft (the
   pitfalls and the check, for any first-person professional voice); the failure classes and
   their cures. Person-free; carried to any estate as the same bytes.
2. **The surface class** (`layer: surface`): what a LinkedIn profile needs that a CV does not
   (the platform's fields, folds, cards and limits as verified and dated; the Skills section's
   mechanics and selection method; the application procedure with its proofs), and what a CV
   needs that a profile does not (its page, print and browser, its reader, its coherence with the
   profile). Person-free; one skill per class.
3. **The author instance** (`layer: author`): this author's identity, positioning, voice,
   readers and the axis they decide on, standing decisions (the EDRs), the private boundary, and
   the worked instances of the lane with the author's own words and dates. Host-specific,
   public-safe; the private companion stays where privacy.md puts it. The instance directive
   keeps its path, `.agent/directives/editorial-guidance.md`, and the sketch's directory shape
   for this layer is amended to that: the separation that protects something (the carry of
   layers 1 and 2 as the same bytes, the privacy boundary) is a declaration every file carries
   and a validator enforces, not a third directory.

A seat drafting for a surface reads the three in that order and builds the reader brief from the
author instance.

## User groups and value

- Jim: his identity, readers and decisions in one file he can read whole, apart from craft he
  need not re-read; the CV lane (his next chapter) starts from the landed method without
  relearning the LinkedIn lane's failures; a correction to his layer never risks the general one.
- A seat drafting public copy for any author: the brief comes from one file, so a mis-cast reader
  cannot recur by omission; surface knowledge is found where the surface is named.
- Other people, later: the general and surface layers are the body of a distributable skill in the
  form `skills/interview-question-exploration` sets (self-contained, host-neutral, evals with
  fresh reads); packaging is a later act at his word, not this lane's.
- The sibling estate and the Practice extraction: layers 1 and 2 travel as the same bytes.

## Mechanism

The seam is the rate of change: general craft changes when the Practice learns; surface practice
changes when a platform changes; the instance changes when the author's work or intent changes.
The move is a split along that seam with the new understanding written into the split files, not
a rewrite of settled text.

- **Layer by declaration, not by a third directory.** Each editorial file carries `layer:` in its
  frontmatter. General and surface skills stay flat under `.agent/skills/editorial/`, because the
  adapter generator reads two levels and a directory per layer would multiply paths for no reader;
  the author instance lives apart under `docs/editorial/`, beside the decision records, so the
  instance is separated by directory where the separation protects something (privacy, the carry).
  The sketch's counterframe (two layers) is resolved the same way: three layers, one directory
  fewer than sketched.
- **General skills.** `write-for-the-reader` keeps the method and gains the lane's understanding
  (the audience hops, working with the subject, the failure classes); its author-specific examples
  move to the instance file. `editorial-voice` keeps the craft (the pitfalls, the check) and loses
  the author's voice to the instance file.
- **Surface skills.** `linkedin-profile` replaces `apply-linkedin-profile` and `linkedin-skills`:
  one skill for the surface, person-free, with the platform facts dated, the Skills section's
  mechanics and selection method, the application procedure and its proofs; its references
  (field limits, the industry taxonomy) made person-free; the author's own registry of names moves
  to the LinkedIn workspace. `cv` is new: the CV as a surface, from the September research, the
  strategy directive's surface table and the lane's hand-off to the CV chapter.
- **The author instance.** `.agent/directives/editorial-guidance.md` is the instance file,
  declared `layer: author`, keeping its path because thirty tracked files already point at it as
  the home of the author's identity and voice. It takes the strategy directive's standing
  audiences, the voice skill's one line and registers, the skills' author-specific standing
  conditions and tiers, and the lane's worked instances with the author's words and dates; its
  frontmatter names the author's name tokens for the validator. The decision records beside it
  under `docs/editorial/` stay the instance's record of origin.
- **Sub-agent templates.** `editor`, `prose-expert` and `audience-reader` read "the author" and
  take the instance file as a required input; adapters regenerated by `pnpm portability:fix`.
- **The rule.** `public-copy-runs-the-editorial-workflow` restated for the host's author.
- **The validator.** A docs validator in `agent-tools` reads the author's name tokens from the
  instance file's frontmatter and refuses any `layer: general` or `layer: surface` file that
  contains one; wired into `docs-validators:check` with its unit test.
- **The directives, last.** `editorial-strategy.md` becomes the general directive, declared
  `layer: general` and person-free, its standing audiences moved to the instance;
  `editorial-guidance.md` becomes the instance as above. Directive edits run under
  `directive-file-context-budget`: below the context line, or after the next compaction, as the
  lane's final step; until then the skills point at the two directives by their unchanged paths.

## Steps, one session, one pull request

1. This node ratified; `linkedin-profile-rewrite-completion` archived as done.
2. The owner's corrections read from the lane's sessions (his typed turns, extracted by filter
   into a private ledger), the seat's buffer, the comms events naming the lane, the napkin
   archives, the plans and the workspace notes; each understanding routed to a layer.
3. The author instance written; the general skills rewritten; the surface skills written; the old
   skill directories removed; adapters regenerated.
4. The sub-agent templates and the rule restated; adapters regenerated.
5. The validator with its test, wired into the gate.
6. The directives, under the context rule.
7. Gates green (`markdownlint`, `prettier`, `skills:check`, `portability:check`,
   `subagents:check`, `docs-validators:check`, `plan-gates:check`); records; one push; one pull
   request under the bot identity; the owner reads and merges.

## Acceptance criteria

1. Every editorial skill, template and directive carries a layer declaration; the validator is
   green on the split tree and red on a seeded author name in a general file; proof `repo-safe`:
   the validator's unit test and `pnpm docs-validators:check`.
2. No general or surface file names the author; proof `repo-safe`: the validator.
3. The audience-reader, editor and prose-expert templates name the instance file as an input and
   the subagents and portability checks pass; proof `repo-safe`: `pnpm subagents:check`,
   `pnpm portability:check`, `pnpm skills:check`.
4. The lane's understanding is in the layers: the audience hops, the subject-and-seat protocol,
   the failure classes, the LinkedIn platform facts dated, the Skills mechanics, the CV surface;
   proof `owner-held`: the owner reads the pull request and recognises the lane in it.
5. One pull request, merged at his word; proof `owner-held`: the merge.

## Out of scope

- Any change to public copy, the live LinkedIn profile, the CV content or the entity graph.
- The CV chapter (his next priority, a later session): it consumes this lane's output.
- The root README and documentation rewrite (his second closing priority): the next pull request.
- Packaging a distributable skill from the general and surface layers (later, at his word).
- Re-litigating settled EDRs; they are the instance layer's record of origin and do not change.
- The retrospective on the lane's cost and shape.
