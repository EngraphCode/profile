---
id: editorial-doctrine-in-three-layers
node_type: delivery
name: The editorial doctrine as processes for any person, the author's information apart
overview: >-
  The editorial directives, skills and reader templates become processes and mechanisms that
  serve any author, in two layers (general craft; the surface class); the information about this
  host's author leaves the doctrine and becomes one public information file, a facet of the one
  Person entity of the personal knowledge graph written in prose for now; sensitive information
  stays in the private repository. The understanding the LinkedIn lane of September and October
  2026 produced lands in those files in the same motion: one session, one pull request, no
  distribution yet.
status: ratified
ratified_by: Jim Cresswell
ratified_date: 2026-10-26
ratified_where: >-
  The owner's words in the Shrew rides Eventide session (371a2b) on 2026-10-26, recorded verbatim
  on the linkedin-workspace thread record's current block
  (.agent/memory/operational/threads/linkedin-workspace.next-session.md): the landed work approved
  as the implementation of the editorial doctrine into skills; the three-way division approved;
  the third part corrected: "editorial guidance about how a person is modelled and conveyed and
  how to structure their story lives in the general repo as guidance and rules. Information about
  me that is public domain lives in the general repo and information, not guidance. Information
  about me that is sensitive or private lives in the private repo. Guidance and rules and skills
  are not just more specific types of information, they are a different sort of thing, processes
  and mechanisms rather than information about entities"; and the information in the repo named
  as part of his personal knowledge graph, to be expressed that way eventually.
serves: content-as-cv
impact_areas:
  - editorial-content
  - practice-and-estate
tickets: []
depends_on: []
owner_gates: []
last_updated: 2026-10-26
---

# The editorial doctrine as processes for any person, the author's information apart

Born sketch on 2026-10-11 from the owner's direction for a later time: the editorial doctrine
distinguished into general writing practice, practice for a surface class, and the instance of
that class applied to one person as the author. Taken up on 2026-10-25 when the LinkedIn lane
closed and he asked for its understanding extracted in a form that applies to any person, one
session, one pull request. Ratified on 2026-10-26 at the words in the frontmatter, which also
corrected the sketch's third part: the author is not a layer of doctrine. Guidance, rules and
skills are processes and mechanisms; information about a person is a different sort of thing, and
the two never share a file or a directory. The sketch's directory clause is met in that one way.

## Goal

A seat drafting for any author loads person-neutral guidance (the editorial directives, the
editorial skills, the reader templates) and that author's information file, and nothing else. The
host author's public information is one file he can read whole, apart from the process he need
not re-read; his sensitive information stays in the private repository and is never quoted. A
check in the gate refuses the author's name in any guidance file and refuses an author
information file inside the doctrine directories.

## The two sorts of thing

**Processes and mechanisms** (guidance, rules, skills, reader templates), all person-neutral, in
two layers declared in frontmatter:

1. **General** (`layer: general`): how to write for a reader's decision and the audience hops the
   words cross; how a person is modelled, conveyed and their story structured (the author's
   information model as the template for any person; the conveying principles; the direction of
   derivation from information to content to derived surfaces; consistency across outputs; the
   decision-record mechanism); working with the author; the voice craft; the composition
   doctrine. Carried to any estate as the same bytes.
2. **Surface** (`layer: surface`): what a LinkedIn profile needs that a CV does not, and the
   reverse, as verified and dated. One skill per class.

**Information about an entity**, never a directive, rule, skill or template:

- **Public information about the author**, in the repository as information: the file
  `docs/editorial/author.md`, titled with his name, frontmatter `author_names` and no `layer`.
  It is a facet of the one `Person` entity of the personal knowledge graph
  (`https://www.jimcresswell.net/#person`, the source of truth for shared identity atoms under
  ADR-020) written in prose for now; its frontmatter names that entity; its sections are the
  facets a graph would carry; and it states that the content model's JSON, the LinkedIn
  workspace and this file describe the same entity. The eventual expression as graph is the
  knowledge-graph stream's work (GRAPH-1, Track B), not this lane's, and nothing in the file's
  shape forecloses it.
- **Sensitive or private information about the author**, in the private repository
  (`.agent/reference-local/editorial-private`, its README's boundary of 28 September 2026):
  reasons, intentions, the application brief, raw words. Never in the public repository, never
  quoted on a public surface. Nothing in the public editorial files today is sensitive, so nothing
  moves there in this lane.

## User groups and value

- The host author: his public information in one file he reads whole; a correction to it never
  touches process, and a process change never touches his facts; the CV chapter starts from the
  landed method and his file without relearning the LinkedIn lane.
- A seat drafting public copy for any author: the brief comes from the author's information file
  and the guidance, so a mis-cast reader cannot recur by omission; surface knowledge is found where
  the surface is named.
- Other people, later: the guidance and the surface skills are the body of a distributable skill
  in the form the repository's `skills/` directory sets (self-contained, host-neutral); their own
  information file follows the model the guidance describes. Packaging is a later act at the
  owner's word.
- The knowledge-graph stream: the author's editorial facets are already sorted into one file with
  a named entity, ready to be expressed as graph when GRAPH-1 reaches them.

## Mechanism

- **The guidance directive** `.agent/directives/editorial-guidance.md` keeps its name and its
  place in the always-loaded set, because every live referrer wants editorial guidance, and
  becomes that for any author (`layer: general`): the author's information model; the conveying
  principles in general form (show, don't justify; agency through outcomes; level shows, never
  argued; "my" not "the"; breadth as range; the cumulative impression never stated; collaborative
  credit; a background as silent ballast; a sensibility shown, never claimed; keywords carried by
  structured data); the direction of derivation and consistency across outputs; the
  decision-record mechanism; working with the author in brief, pointing at `write-for-the-reader`;
  the boundary between public information, sensitive information and process.
- **The composition directive** `.agent/directives/editorial-strategy.md` stays general
  (`layer: general`), its author mentions made neutral and its standing audiences moved to the
  information file as information about the author's readers.
- **The information file** `docs/editorial/author.md` takes the facts the guidance directive held
  (voice, the registers' shared topics, positioning vocabulary and its meaning for him, the
  research facts and what is never conflated, the keyword decisions, standing decisions with
  their decision records), the standing audiences of his surfaces and the axis they decide on,
  his working instruments, the LinkedIn standing conditions he set, the Skills tiers and pins of
  11 October 2026 as the record of origin of the list in the LinkedIn workspace, and the lane's
  worked instances with his public-safe words and dates. Formatted by the repository's prettier
  and markdownlint; no fitness frontmatter.
- **Skills and templates.** `write-for-the-reader` and `editorial-voice` (general),
  `linkedin-profile` and `cv` (surface), and the reader templates `editor`, `prose-expert` and
  `audience-reader` read "the author" and take the information file as the author's input; the
  brief for the audience reader is built from it. Adapters regenerated.
- **Referrers by intent.** Live doctrine and navigation referrers point at the information file
  where they want identity and voice, and at the guidance where they want principles. Records keep
  their history.
- **The validator** in `agent-tools` (`validate-editorial-layers`, in `docs-validators:check`):
  `layer:` admits `general` and `surface`; the author information file is the one file in scope
  carrying `author_names`, and it must sit under `docs/`, so an `author_names` file under
  `.agent/` is a refusal (information about an entity is never a directive, rule, skill or
  template), as is a `layer` key on the information file; whole-word, case-insensitive hits of a
  name in a declared file fail the gate; exit 0 when no file declares a layer and none carries
  `author_names`, so the validator can be carried to an estate without the doctrine.
- **Directive edits** run under `directive-file-context-budget`: as the lane's final step, below
  the context line, with the check repeated before each directive.

## Steps, one session, one pull request

1. This node ratified at the words above; the lane's records corrected (the thread record, the
   napkin); the pull request's description current. One commit, one push.
2. Under the context rule: the information file written; the guidance directive rewritten as
   general; the composition directive edited; AGENT.md's editorial paragraph repointed.
3. Referrers repointed by intent; adapters regenerated.
4. The validator and its tests changed; green on the tree; red on a seeded name in a general
   file; red on an `author_names` file under `.agent/`.
5. Gates green (`markdownlint`, `prettier`, `skills:check`, `portability:check`,
   `subagents:check`, `docs-validators:check`, `plan-gates:check`, agent-tools lint, type-check
   and test); one commit by pathspec; one push; the owner reads and merges.

## Acceptance criteria

1. No guidance file in the editorial scope names the author; proof `repo-safe`: the validator in
   `docs-validators:check`, green on the tree and red on a seeded name (unit test).
2. The author's public information is one file under `docs/editorial/` carrying `author_names`
   and naming the Person entity, and the validator refuses such a file under `.agent/`; proof
   `repo-safe`: the unit test and the gate.
3. Every live doctrine referrer names the right file for its intent and the adapters are current;
   proof `repo-safe`: `pnpm subagents:check`, `pnpm portability:check`, `pnpm skills:check`,
   `pnpm docs-validators:check`.
4. The guidance reads as process for any author and the information file reads as him; the lane's
   understanding is in the files (the audience hops, working with the author, the failure classes,
   the LinkedIn platform facts dated, the Skills mechanics, the CV surface); proof `owner-held`:
   the owner reads the pull request and recognises the lane in it.
5. One pull request, merged at his word; proof `owner-held`: the merge.

## Out of scope

- Moving anything to the private repository: nothing in the public editorial files is sensitive.
- Expressing the author's information as graph: the knowledge-graph stream's work (GRAPH-1).
- Any change to public copy, the live LinkedIn profile, the CV content or the entity graph.
- The CV chapter (the owner's next chapter, a later session): it consumes this lane's output.
- The root README and documentation rewrite (his second closing priority): the next pull request.
- Packaging a distributable skill from the guidance and the surface skills (later, at his word).
- A Practice-wide rule or decision-record clause for the taxonomy (guidance is process;
  information is about entities; they never share a file): one instance today; proposed at the
  second.
- Re-litigating settled editorial decision records; they are the author's record of origin.
- The retrospective on the LinkedIn lane's cost and shape.
