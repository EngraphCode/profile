---
id: editorial-doctrine-in-three-layers
node_type: delivery
name: Editorial doctrine in three layers — general writing practice, the surface class, the author instance
overview: >-
  The editorial directives, skills, rules, sub-agent templates and decision records separated
  along the seam the Practice already uses for tooling policy (general, family, contextual):
  general writing and editorial practice; best practice for a surface class (CV, LinkedIn, blog,
  long-form essay); and the instance of that class applied to one author, here Jim; each layer in
  its own directory and files.
status: sketch
serves: content-as-cv
impact_areas:
  - editorial-content
  - practice-and-estate
tickets: []
depends_on: []
owner_gates:
  - awaiting: owner-decision
    clears_when: >-
      Jim ratifies the layering and the directory shape below, or amends them; he named the work
      on 2026-10-11 as "not for right now".
    expires: 2026-11-01
last_updated: 2026-10-11
---

# Editorial doctrine in three layers

Born sketch on 2026-10-11 from the owner's direction, verbatim: "not for right now, but across
directives, guidance, rules, skills, subagents, we need to distinguish between general writing
and editorial best practice, best practice for particular surfaces, such as CVs, linkedin, blogs,
long-form essays, and within those the particular instance of that class applied to a person as
the author, in this case me. The separation should be along appropriate seams, but additionally
separated by directory structure and files". The instance that prompted it is the same day's
EDR-008: the reader's decision for Jim's profile lived in a private memory and in scattered
sentences of two mixed directives, a generic audience list stood in for it, and three rounds of
readers cured to a reader that the instance layer, had it existed as a file, would have refused.

## Goal

When this lands, every editorial file in the estate belongs to exactly one of three layers and
says which, and the three live apart in the tree:

1. **General writing and editorial practice**: the reader's decision, attention and progressive
   disclosure, structure and section weight, readability, evidence and attribution, the review
   sequence, the voice pitfalls that hold for any author. Host-agnostic, person-free, Practice
   core, carried to every estate as the same bytes.
2. **The surface class**: what a CV, a LinkedIn profile, a blog post or a long-form essay needs
   that the others do not: LinkedIn's card, folds and believed field limits, selective repetition
   because readers enter by section, the application procedure; the CV's page hierarchy, print
   and browser; the essay's argument shape. Person-free; one directory per class; shareable.
3. **The author instance**: this author's identity, positioning, voice, readers and the axis they
   decide on, standing decisions (the EDRs), the private boundary. Host-specific, public-safe
   only; the private companion stays where privacy.md puts it.

A seat drafting for a surface reads the three in that order and builds the reader brief from
layer 3. Today the same knowledge sits in two directives, two skills, three sub-agent templates,
one rule, one record series and one workspace README, each mixing two or three layers.

## User groups and value

- Jim: his identity, readers and decisions in one place he can read whole, apart from craft he
  need not re-read; a correction to his layer never risks the general layer, and vice versa.
- A seat drafting public copy: the brief for the readers comes from one file, so the mis-cast of
  2026-10-10 cannot recur by omission; surface knowledge (a fold, a limit) is found where the
  surface is named, not inferred from an example about another surface.
- The sibling estate and the Practice extraction: layers 1 and 2 travel as the same bytes; layer 3
  stays home. Capability parity costs one carry per general change, not a merge of mixed files.
- Readers of the public copy, indirectly: the brief that shapes it names them correctly.

## Mechanism

The seam is the one the Practice ratified for tooling policy on 2026-10-04 (general, family,
contextual): the same three rates of change. General craft changes when the Practice learns;
surface practice changes when a platform changes; the instance changes when the author's work or
intent changes. The move is a split along that seam, not a rewrite:

- `editorial-strategy.md` splits into a general writing directive (Practice core) and the
  surface table's per-class files; `editorial-guidance.md` becomes the author-instance file,
  with its general principles (show, don't justify; agency through outcomes) lifted to layer 1
  and the EDRs that originated them kept as the record of origin.
- `editorial-voice` splits into general voice craft (the pitfalls, the check) and the author's
  voice; `write-for-the-reader` keeps the method and loses its author-specific examples to a
  worked-instance file in layer 3.
- Sub-agent templates: `prose-expert` reads layer 1; `editor` and `audience-reader` read all
  three, naming the layer 3 files as required inputs; the audience brief is built from layer 3's
  readers file.
- Rules: `public-copy-runs-the-editorial-workflow` restated in general form ("copy that
  represents the host's author") with the instance binding beside it.
- Directory shape, to be ratified: layer 1 under the Practice core's directives and skills; layer
  2 under an editorial surfaces directory, one subdirectory per class; layer 3 under a host
  editorial directory beside the decision records (`docs/editorial/`), the LinkedIn workspace
  staying where privacy.md authorises it.
- Each file declares its layer in frontmatter; a validator in `check` refuses a layer 1 or 2 file
  that names a person, and a layer 2 file that names another surface's mechanics.

One pull request for the split, text moved not rewritten, with the readers' templates regenerated
by the portability fix and the carry to the sibling estate for layers 1 and 2 in the exchange's
next cycle.

## Acceptance criteria

1. Every editorial file carries a layer declaration and the validator passes; proof `repo-safe`:
   the new validator in `pnpm check`, green on the split tree and red on a seeded person name in
   a layer 1 file.
2. The audience-reader template requires the layer 3 readers file as an input and the subagents
   check passes; proof `repo-safe`: `pnpm subagents:check` and `pnpm portability:check`.
3. Layers 1 and 2 are byte-identical in both estates after the carry; proof `repo-safe`: `cmp`
   over the carried paths in the exchange record.
4. Jim reads the split and ratifies the layering and the directory shape; proof `owner-held`:
   his word on the pull request or in session, recorded in `ratified_where`.

## Counterframe, held open

Two layers suffice: general and instance, with surface knowledge as sections in each, because
only two surface classes have real practice today and a third directory multiplies files. Held
against it: the blog is an existing category (the owner's blog-ideas repository, a sibling
checkout, 2026-10-11), the essay is named as a surface to come, the CV and LinkedIn already
differ in mechanics that change on the platform's clock and nobody else's, and
a section inside a general file cannot be carried to another estate without the file. The seam
is the rate of change; three rates, three layers. The sketch stands or falls on that claim, and
the falsifier is a surface-class file that turns out to hold nothing a general file does not.

## Out of scope

- Any change to public copy, the LinkedIn application, or the private boundary (privacy.md).
- Re-litigating settled EDRs; they move, they do not change.
- The sibling estate's own author instance, if it ever has one.
