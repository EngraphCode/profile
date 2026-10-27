---
author_names: [Jim, Cresswell, jimcresswell]
entity: https://www.jimcresswell.net/#person
---

# Jim Cresswell

This file is information about the author of this repository's public surfaces: what those
surfaces already carry, gathered so a seat drafting for him loads one file beside the editorial
directives and skills. It is a facet of the Person entity `https://www.jimcresswell.net/#person`,
the source of truth for shared identity atoms (ADR-020), written in prose; the content model in
`jcdotnet/content/`, the LinkedIn workspace and this file describe the same entity. It declares no
layer: the editorial doctrine is process, this is information, and the two never share a file
([editorial-guidance.md](../../.agent/directives/editorial-guidance.md) §The author's information).
Anything that gives psychological or non-public insight into him is in the private author file in
the private editorial repository and is never quoted here.

## Identity

Jim Cresswell. Personal site <https://www.jimcresswell.net>, the CV at `/cv`; LinkedIn
<https://www.linkedin.com/in/jimcresswell>; GitHub `jimCresswell`. Based in the United Kingdom.

## Voice

Confident, a touch joyful and mischievous, with underlying seriousness. Content should sound like
Jim at his most himself: someone who knows exactly who they are, not someone carefully calibrating
a message.

## What the registers share

The front page and the CV share the same voice and serve different purposes. Both carry cosmology,
published research, the open web, ecology, systems thinking and AI for public benefit; where a
concept appears in both, the framing is consistent.

## Positioning vocabulary

- **Impact** means climate, ecological and societal good, as in "impact funding", not "business
  impact" or "digital transformation impact". The default CV speaks to anyone who cares about
  creating lasting systemic impact, regardless of sector.
- **"Zero to one"** means seeing a future connection nobody else sees and building towards it, not
  starting from nothing.
- **Origination.** He has created research projects (Obaith, before Oak; Reforest Now, during
  early Oak) and this website; the dates are the LinkedIn profile's and the entity graph's to
  carry. Both projects
  were genuine in-depth research, not ventures, and are never overstated. "Founder" is not an
  explicit claim on the canonical CV.
- **Product safety, not data safety.** At Oak the data is open by design; access is not
  constrained. The responsibility concern is about AI products consuming the data: making those
  services reliable, safe and accurate, through technical means. The `knowsAbout` term
  "Responsible AI" is understood in this light.
- **Leverage**, the enabling vision
  ([EDR-004](./decision-records/004-enabling-vision-leverage-third-order.md)): the SDK and MCP
  work at Oak, tools that make trusted curriculum data directly accessible to AI-powered services,
  where the benefit from what others build will far exceed the cost of creating them.

## Research facts

The MSc (Sussex) was observational cosmology, CMB topology; the PhD (Portsmouth) was fitting
parametric and non-parametric models to large galaxy surveys, combining traditional survey
statistics with Galaxy Zoo citizen science data. These are distinct research lines and are never
conflated. Model fitting and strategic uncertainty are unrelated domains and are never conflated
either; positioning language ("second and third-order effects") is not a description of the
research and is never written as one (20 February 2026).

## Career range

The career spans research, public services, labs, start-ups and market gardening; the CV and the
front page carry the items.

## Keyword decisions

"AI" does not need to appear in the canonical headline; it belongs in narrative evidence and
structured data for machine consumers. The retired alternate headline "The questions keep getting
bigger" remains in
[the tilt reference](../architecture/reference/cv-tilt-content-and-rationale.md) rather than on the
live CV.

## Standing decisions

- **The innovator, not the engineering leader.** The profile expresses his innovation and his
  breadth of interest and capability: systems thinking, multi-order impact, making sense of
  problems before their requirements exist, creating the first options, setting direction. It never
  collapses to "engineering leader" (7 and 11 October 2026;
  [EDR-008](./decision-records/008-the-innovator-never-the-engineering-leader.md)).
- **Collaborative credit.** For industry stories the collaborative form is "helping build", never
  sole credit (20 February 2026).
- **The Oak card is one piece of writing under the limits**
  ([EDR-009](./decision-records/009-the-oak-card-is-one-piece-of-writing-under-the-limits.md)).
- The other decisions are in the [decision records](./decision-records/README.md).

## Where the facts live

- The positioning paragraphs and capabilities: `jcdotnet/content/cv.content.json`, the most
  carefully edited content and the editorial baseline.
- The front page hero summary: `jcdotnet/content/frontpage.content.json`, the primary
  representation of him on the home page.
- The entity graph: `jcdotnet/content/entities.json`, the Person entity and its roles.
- The LinkedIn profile as applied, its skills list and the lane's records:
  [the LinkedIn workspace](../../linkedin/README.md).

## The boundary

The private author file holds the insight class: his reasons, intentions, readers, inner view and
working preferences. A tracked record may say the private repository exists and name a document in
it; it never quotes one
([privacy.md](../../.agent/directives/privacy.md) §Private editorial material).
