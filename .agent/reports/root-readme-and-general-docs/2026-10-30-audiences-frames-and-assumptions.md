# The root README and the general docs: audiences, frames and assumptions

Lane `docs/root-readme-and-general-docs`, 30 October 2026, written at the owner's word: "Start by
defining audiences. Only then read the readme and docs first, and analyse them using all
appropriate skills. Identify frames and assumptions and adversarially question them." Sections 0
to 2 were written before the README or any document under `docs/` was opened; the sources for
them are the composition directive (`editorial-strategy.md` §Begin with the reader's decision and
§Standing audiences), EDR-008, the public author file, the orientation lens (`under-the-hood`),
the private author file's readers (named, never quoted), and the facts under §0. The later
sections are the read, the analysis and the adversarial pass, in the order the owner set.

## 0. What was known before the README was opened

- **The surface.** GitHub renders `README.md` as the landing page of `EngraphCode/profile`, below
  the file list. The about field reads "jimcresswell.net content", homepage `jimcresswell.net`, no
  topics. Nothing is pinned on the user profile or the organisation profile. A search result, a
  social preview and a skimming reader see the about field, the first heading and the first
  paragraph, and nothing else.
- **The routes in.** The site's entity graph names the GitHub user and the repository under its
  old name (`jimCresswell/jimcresswell.net`, which redirects); the front page names the GitHub
  user; the CV's content names Oak's repository, not this one. Whether the LinkedIn profile's
  contact links carry this repository is checked in §3.
- **Observed traffic**, the fourteen days to 30 October, as measured: 30 views by 5 unique
  visitors; referrers `aocr.org` (3 unique; a site behind a bot challenge, unidentified),
  `github.com` and Google (1 each); the popular paths are the pull-request list under the old
  name (10 views, 1 unique), the repository root under both names (2 views, 1 unique each), four
  pull-request pages and one Practice decision record (1 view each); 1,998 clones by 412 unique
  cloners. GitHub's traffic says nothing about who viewed. Inferences, labelled as such: the
  pull-request reading is the owner's; the clones are services and bots; the README has had no
  external human reader the data can show. Every human audience below is prospective, created by
  where the owner places links and by what the profile surfaces say about the repository. That is
  not a reason to write for nobody; it is the reason the first screen must already do its job on
  the day a link is placed.

## 1. The audiences

Each reader by the five items of the composition directive: who, what they decide, what they
believe or doubt at first contact, the surface and the reading mode, what must be newly clear.
This section is the hypothesis written before the read. The adversarial pass (§7) found its
primary reader imported from another surface's audiences on a route that does not exist, and
amended the set; read §1 as what was believed and §7 as the set that stands.

### A. The verifier (primary)

A hiring manager, senior leader, search partner, founder or funder (standing audiences 1 and 4)
who has read the LinkedIn profile, the CV or the site and followed a link to the repository. They
are deciding, on EDR-008's axis, whether the claims hold against the artefact: is the work real,
is it his, is the way of working what the profile describes (origination, making sense of
problems that have no shape yet, systems whose consequences outlast him). They are not deciding
whether to clone or contribute. At first contact they believe a personal-site repository is a
vanity project and that "working with agents" means prompts; they doubt that quality survives
agent speed; they may not know the repository holds anything but the site. They read the first
screen on GitHub, under a minute, and follow at most one or two links. What must be newly clear:
what this repository is (his profile and the practice that produces it, made with agents), that
one person made it, where the evidence is (the live site and CV, the decisions, the Practice), and
the one thing about it that is distinctive.

Variant: the recruiter (standing audience 2), same first screen, deciding only whether they can
recognise and forward the profile accurately; served by the same first paragraph and never by an
argument about level.

### B. The peer and collaborator (secondary; controls the body)

An engineer, AI-builder, designer, writer or editor (standing audience 3) weighing whether the
work and the way of thinking merit engagement, and perhaps whether they could work this way or
with him. They believe agentic coding produces sloppy code; they doubt the gates are real and
blocking; they want to see decisions, not adjectives. They read the README in full and follow
into the architecture decisions, the engineering docs and the Practice. What must be newly clear:
the shape of the repository (what each workspace is for), the few decisions that make it
distinctive, how quality and safety survive agent speed, and where each deeper thread starts.

### C. The Practice-curious (prospective; contingent on the extraction goal)

Someone interested in the agent-collaboration Practice itself: a researcher of agentic
engineering, a prospective adopter, or someone new to working with agents (the reader of the
portable primer the repository carries). They are deciding whether the Practice is something to
learn from or adopt, and what it consists of. They believe it is a pile of prompt files; they may
not know a sibling estate exists. They read the README's Practice section, then `.agent/README.md`,
`.agent/HUMANS.md` and the practice index. What must be newly clear: that the Practice is a thing
with a name, a provenance and an index; what it does for the work; where it begins. The owner's
goal of two equally capable Practices and then extraction (PDR-143) makes this reader real in the
future, not today; the README serves them with one section and a pointer, and never by becoming
the Practice's README.

### D. The operator

The person at a keyboard who must make the repository run: the owner returning after time away,
a collaborator he invites, or a visitor the orientation lens is walking through hands-on setup.
They are deciding how to install, verify and run, and where each thing lives. They believe it is
a standard pnpm monorepo; they doubt nothing; they want commands that work first time. They read
Getting Started, the commands and the project structure by scanning and executing. What must be
newly clear: the prerequisites with their versions, install, verify, the daily commands, the
layout, and where the rules and the contributor workflow are.

### E. The machine consumers

1. The orientation lens (`under-the-hood`) reads the README's sections by name as its sources of
   fact and relays them live to a newcomer. Its full contract, read from the skill: Overview and
   Workspaces (what the repository is); Getting Started (install and verify, walked one step at a
   time); Quality Gates and Development Standards (what the hooks enforce; contributions by
   invitation); Key Design Decisions ("the six decisions that make the site distinctive, each
   linking its record; the single source; never restate them"); Agent Memory (the Practice's
   first question). Its raw-fetch base still names the repository under its old name. The section
   names, the count of six and the exactness of every command bind the rewrite; nothing in this
   repository checks them mechanically.
2. The docs validators read every cited path and script and every link.
3. GitHub's rendering takes the about field as the social preview and the search description
   (verified: the page's `og:description` is the about field plus GitHub's boilerplate). The
   README's first heading and paragraph are what a reader meets after the file list of 48 root
   entries, the six agent directories first.
4. Search engines index the README's text on the repository page; LLM crawlers take the first
   paragraph as the description of the repository.

What must hold: every section name and count the lens reads; every cited path and script real; a
first paragraph that is true when quoted alone; an about field that says what the first sentence
says.

### Not an audience: the author

Jim is the authority on every fact and reads last (`write-for-the-reader` §8). The README is his
statement about his own work: its voice is his where it speaks of him (the public author file
§Voice) and the repository's plain register where it instructs.

### The reuser, already served

Someone who wants to fork the site as a template, reuse the content model or the Practice's
tooling. The licence section, the two licence files and `ATTRIBUTION.md` are the owner's standing
answer on reuse; the README's licence section serves this reader, and there is nothing to put to
him.

## 2. Which audience controls

The composition directive forbids writing for everyone at once: one audience controls the order
and the vocabulary, the others are served without controlling it.

**The hypothesis, conditional on one fact.** If a profile link brings the verifier, the first
screen is A's. The body is then B's and D's in that order: a verifier who continues becomes a peer,
and the operator's needs are commands, which read as well in the second half as the first. C has
one section and a pointer. E has stable headings and exact facts. The whole never opens as an
engineer's setup guide, because the repository is named `profile` and the links into it come from
the professional surfaces. The fact the hypothesis turns on is checked in §3 and is false today
(the Cricket check of this analysis asked for exactly this restatement); the decision that makes
it true is in §7.

**The serious counter-verdict.** The README is an engineering document; the professional surfaces
are the site, the CV and LinkedIn; a reader who reaches GitHub is technical; the first screen
should orient (what it is, where things are, how to run it), and the profile reader's needs are
met by the homepage link in the about field. On this reading the README's human readers are B and
D, A does not exist as a README reader, and the first screen belongs to B.

**The discriminating observation** is where the owner places the links. If the LinkedIn contact
links or the CV carry this repository's address, A is real and controls the first screen. If they
carry only the site, the counter-verdict holds. Today the site's graph links the repository under
its old name and the CV links Oak's repository. The check of the LinkedIn contact links is in §3;
the placing of links is the owner's decision, and it is the one question in this document the
lenses cannot settle.

## 3. The read

Written after §0 to §2, from the documents themselves, every fact below checked in the tree.

**The LinkedIn contact links** (the workspace's `profile.md` §Contact, applied 24 October): the
site, the CV, and `Code: https://github.com/jimCresswell`, the user page, labelled Portfolio.
Nothing is pinned there. The route from the profile to this repository does not exist today: a
reader who follows the Portfolio link lands on a list of repositories under the user, and this one
sits under the organisation. §2's discriminating observation is therefore answered for today:
audience A has no path to the README. Whether it gets one is the owner's decision (§7).

**`README.md`** (265 lines; the monorepo header dates from the Practice transplant of September;
the last change, 27 October, repointed the editorial links). In order: a title, "Jim Cresswell —
personal sites"; a first paragraph naming a monorepo for personal sites and "the agentic
engineering Practice that builds them", then the site's stack; a Workspaces table of three rows
(`jcdotnet`, `agent-tools`, `tooling`) that omits the fourth workspace, `linkedin`; the site's
design overview; Getting Started with six prerequisites, one of them a six-line account of the
bash hooks' mechanics; twenty-nine development commands; a Project Structure tree that is the
site workspace's internal layout presented as if it were the repository's (the root's actual
entries are `agent-tools`, `jcdotnet`, `linkedin`, `tooling`, `docs`, `skills`,
`runtime-only-scripts` and the configuration files), naming two scripts that do not exist
(`scripts/validate-portability.mjs`, `scripts/validate-practice-fitness.mjs`) and a `docs/` with
two subfolders where there are five; the routes; five design decisions, all the site's; the
quality gates; the stack; a Documentation section of four links that omits `docs/engineering`,
`docs/editorial`, `docs/explorations` and the LinkedIn workspace; an Agent Memory paragraph
describing a three-feed pipeline toward `principles.md` and ADR-012; Development Standards ("by
invite only") with five links; the licences. Every command it names exists in `package.json`;
Node 24 matches the engines field; the three client components are the three it names.

What it is: the site's engineering README, written for a developer setting the site up, with a
monorepo preamble and one sentence about the Practice added when the Practice arrived. The Practice
(by volume most of the tree: 119 rules, the skills, the directives, the sub-agent templates, the
tooling) has one sentence, one pointer and one paragraph about memory. The LinkedIn workspace, the
work of the last two months, is absent. The person appears in the title and nowhere else. Read in
under a minute, the first screen says: a Next.js personal site with something called a Practice.

**`docs/README.md`** (19 lines): an index of four folders under the sentence "Project
documentation for www.jimcresswell.net". It omits `explorations/`. Its frame is the site's docs,
yet `editorial/` holds the author file and the editorial decision records, which are about the
person, and `engineering/` is about the monorepo. The frame "project = the site" leaks.

**`CONTRIBUTING.md`** (60 lines): "by invite only"; environment from the README; the standards in
`.agent/directives`, "written for AI agents but define the conventions everyone follows"; a
Workflow section that says the repository owner commits to `main` directly (the estate's rule is
never to commit to `main`; the owner's practice is pull requests merged by the bot), that the
pre-commit hook runs "the PreToolUse guard" (an agent-platform hook, not a git hook), and a
pre-push of `pnpm check && pnpm test:e2e`; code and testing conventions that are the site's
(kebab-case components, the three client components, the test suffixes); an editorial paragraph
repointed on 27 October; a troubleshooting table that is accurate. What it is: a contributor guide
for a human contributor the repository does not invite, whose workflow section describes a
practice two months out of date because nobody who works here reads it: the agents read
`AGENT.md`, and the owner knows.

**`docs/project/`**: an index, ten user stories and eight requirements for the site, written in
February. They are the site's product specification, and they carry the site's own audience
statement: US-01 (a visitor deciding whether to engage further), US-09 ("a recruiter or
colleague" finding the site by search), US-10 (an AI system or crawler reading the markdown and
the graph). They are accurate to the site and say nothing about the repository; they are in scope
only to confirm that the site's audiences and the README's are different documents' concerns.

**The root entry files**: `AGENTS.md`, `CLAUDE.md`, `GEMINI.md` and `skills.md` route each
platform to `AGENT.md`; `AGENTS.md` also carries a code-review paragraph and two "Learned"
sections that are anchors only, the residue of a capture point the learning loop no longer uses.
`SECURITY.md` names the private reporting route and the secrets policy. `ATTRIBUTION.md` records
the Practice's lineage, current. `CODE_OF_CONDUCT.md` is the Contributor Covenant, generic, for a
repository that takes no unsolicited contributions. None of these is a human reader's document;
the entry files are the machine audience's and are governed by the portability check.

## 4. Frames and assumptions, questioned

### The frames

Five ways of seeing the README, each coherent on its own terms. They are not paraphrases: each
admits different evidence, enables a different rewrite and invites a different error.

**F1. The site's engineering README with a monorepo preamble** (the incumbent, embodied by the
document). The repository is a software project; the unit is the site; the reader is a developer
setting it up; the Practice is tooling that builds the site. Evidence admitted: commands,
structure, stack, gates. Rewrite it enables: bring the facts current, add the missing workspace,
fix the tree. Blind spots: the Practice as the larger artefact; the LinkedIn workspace; the person;
any reader who is not at a keyboard. Characteristic error: a stranger concludes "a personal website
in Next.js with a lot of agent configuration". Observation that discriminates: what a stranger says
the repository is after the first screen.

**F2. A professional surface: the evidence behind the profile** (§2's verdict). The repository is
an artefact of a way of working; the unit is the work; the reader is the verifier, then the peer.
Evidence admitted: decisions and their consequences, how quality survives agent speed, what one
person made. Rewrite it enables: a first screen that says what this is and what is distinctive,
the operator's material below. Blind spots: it tips into justification (EDR-002) the moment the
first paragraph argues rather than states; it pushes the operator's facts down; and today no link
brings its reader. Characteristic error: a README that positions. Observation that discriminates:
whether the owner points a profile link at the repository or pins it.

**F3. The repository is the Practice; the site is one of its products.** The unit is the
agentic engineering Practice (two estates, the extraction goal of PDR-143); the readers are the
Practice-curious and the peer. Evidence admitted: `.agent/`, the tooling, the sibling estate, the
provenance. Blind spots: the owner named the repository `profile`, not `practice`; the Practice is
not extracted and the extraction is planned elsewhere; the site and the LinkedIn work are the
estate's purpose. Characteristic error: the README becomes the Practice's README, which §1 C
already forbids. Observation that discriminates: the owner's naming, which is already on record.

**F4. The README is a router.** Its job is to send each reader to the right place in one screen
and to carry no fact that lives elsewhere; the orientation lens's Router Principle inverted. Evidence
admitted: how many of the README's facts are owned by another document already (Getting Started
beside `docs/engineering/working-with-this-repo-for-devs.md`; Project Structure beside
`docs/architecture/README.md`; Quality Gates beside `principles.md` §Code quality). Blind spots:
GitHub renders only the README, so a router without substance leaves the verifier with nothing;
the orientation lens reads the README's sections by name as its sources of fact, so the facts
must stay somewhere the lens is pointed. Characteristic error: a page of links. Observation that
discriminates: the duplication count.

**F5. The README is the owner's public statement about himself** (the affected-party frame).
Every sentence that speaks of him is copy that represents a person, under the editorial order of
work: his to approve, in his voice, never carrying the insight class the private file holds. The
other four frames treat the document as being about a thing; this one notices that the title is a
person's name. Evidence admitted: the sentences about him, counted (today: the title and the
first paragraph's possessive). Characteristic error: a seat that drafts his self-description
without him. Observation that discriminates: none needed; the frame binds whichever of F1 to F4
the owner chooses, for the sentences that are about him.

**Crosswalks.** F1 to F2 is a one-way, lossy mapping: the stack and the gates (F1's evidence)
become "how quality survives agent speed" (F2's belief) when written for the belief; what is lost
is the exhaustive command list, which moves to the operator's section or the engineering docs. F2
and F3 are asymmetric: F2 can carry F3 as one section and a pointer; F3 cannot carry F2's reader.
F4 composes with any of F1 to F3 as a discipline about duplication, never as the frame.

**The owner's own words sit between F1 and F2.** The README rewrite was item 2 of his three-part
closing of the LinkedIn chapter on 25 October ("a rewrite of the root readme and all appropriate
documents"), between extracting the editorial learning and improving the CV. Read one way, that
places the README among the professional surfaces (F2). Read the other, it asks the docs to
reflect what the chapter changed (F1, brought current). Both readings are live; §7 puts the
question that separates them.

### The assumptions, each with its warrant and its falsifier

1. **The README is read by someone other than the owner and the agents.** Unexamined before
   today; measured false for the last fortnight (§0). Every human audience is prospective. What
   changes it: one act of the owner's, a link or a pin. Consequence: the rewrite builds for a
   reader he creates, and the first screen is designed for the day he does.
2. **A verifier follows a link to the repository.** Inferred, and false today: the Portfolio link
   reaches the user page, where nothing is pinned. What settles it: his decision on where the
   Portfolio link points and what is pinned. If he leaves it, audience A is struck, and F1 with
   F4's discipline controls the first screen.
3. **The standing audiences of the CV and the profile transfer to the README.** Inferred by
   analogy, which is the exact failure the editorial skill records: a generic audience list cured a
   draft to a reader the author never wanted, and EDR-008 names a frame "inherited by analogy".
   The honest form: the standing audiences supply the decision axis for whoever arrives (EDR-008
   binds any professional surface); the README's certain readers are D and E, B is likely, A and
   C exist only if the owner makes them real.
4. **The first screen can serve the verifier without justifying.** The risk is EDR-002: a first
   paragraph that says the repository is evidence of origination argues; one that says plainly what
   the repository is and lets the structure show it does not. Falsifier: an editor reads the
   candidate first paragraph as positioning.
5. **The Practice is the distinctive thing.** Inferred from volume and from the extraction goal.
   The counter: the owner named the repository `profile`, and the distinctive thing for a stranger
   may be how the profile is produced (an entity graph, content negotiation for machines, an
   editorial doctrine, a CV built from a content model). Falsifier: the owner's word on what he
   wants a stranger to take away.
6. **The docs under `docs/` are the site's docs.** The index says so; `editorial/` and
   `engineering/` are not. The frame leaks; the fix is one sentence in the index and the missing
   folder.
7. **`CONTRIBUTING.md` has a reader.** It is for a human contributor the repository does not
   invite; its workflow section is two months stale, which is the evidence that nobody who works
   here reads it. Its live content (the conventions, the troubleshooting table) has two real
   consumers: the orientation lens's tour and the engineering docs. Falsifier: a named human who
   read it.
8. **Getting Started belongs in the README.** The orientation lens's contract says so (it reads
   the section by name); the engineering guide under `docs/engineering/` carries the same ground.
   One of the two owns the facts and the other points. Falsifier: the diff between them.
9. **"Docs only" bounds the cures.** The findings include three that are not documents: the
   about field on GitHub, the Portfolio link on LinkedIn, the pins. Each is one act of the owner's
   and is listed as such, never done by the lane.
10. **This analysis is proportionate.** The owner asked for audiences first, a skills-backed
    analysis and an adversarial pass, inside a bounded docs-only session. The instrument is one
    report file, four readers and one frame challenge, no plan node, no new Practice surface, and
    nothing rewritten before he reads. Falsifier: the Cricket verdict and the assumptions reader
    say otherwise.

## 5. The readers' findings, verified and triaged

Four readers were dispatched with the audiences file as their brief: the drift audit
(`docs-adr-expert`), the onboarding path (`onboarding-expert`), the line read (`prose-expert`)
and the first screen for the verifier and the peer (`editor`), with `assumptions-expert` on the
audience hypothesis and a Cricket check on the whole. Every finding below was verified first-hand
in the tree before it was written here; a finding is information, never an instruction, and each
carries its disposition. The Cricket check returned ON-TRACK and SOUND, with one redirection
(the §2 restatement, applied).

### Cured in the rewrite

These change what a reader believes or does, so they land in the lane's pull request.

1. **The Project Structure block describes a tree the repository does not have.** `app/`,
   `components/`, `content/`, `lib/`, `proxy.ts`, `scripts/`, `e2e/`, `public/`, `logo/` and the
   visual-regression files sit under `jcdotnet/`, not at the root; two scripts it names do not
   exist; its `docs/` has two subfolders where there are five; the root workspaces are absent.
   Verified by `ls`. Cure: a root-level structure with one line per workspace, the site's layout
   where the site is documented.
2. **The first screen misdescribes the repository.** "Personal sites" and "the first site" (one
   site exists); the Workspaces table omits `linkedin`, the fourth workspace in
   `pnpm-workspace.yaml`. Cure: the first paragraph says what the repository holds now; the table
   gains its row.
3. **Getting Started cannot be followed to a green gate.** `pnpm exec playwright install` at the
   root fails (no Playwright binary at the root; it is the site workspace's dependency); the
   advice `npm install -g pnpm` contradicts the pinned package manager, whose validator refuses the
   install and says to run `corepack enable`; the shellcheck installer appears in a prerequisite
   bullet and not in the sequence; there is no verify step, and `pnpm dev` at the root also starts
   the eslint package's watcher (`turbo dev` is persistent for every workspace that defines it).
   All verified. Cure: one ordered block (install, the shellcheck installer, the filtered Playwright
   install, `pnpm check`, then the site's `dev`), prerequisites tied to the gate that needs them.
4. **Both documents describe the hooks wrongly, and differently.** The README says two hooks
   and lists three; pre-commit also runs the profanity check; pre-push runs the secret scan, the
   review-cost gate and then `pnpm check`, whose end-to-end leg builds and serves the site, so the
   README's "PDF tests require a prior build and are run explicitly" and `CONTRIBUTING.md`'s
   `pnpm check && pnpm test:e2e` are both wrong. `CONTRIBUTING.md` says the owner commits to
   `main` directly, which the pre-commit guard refuses, and names a "PreToolUse guard", which is an
   agent-platform hook. All verified against `.husky/pre-commit` and `.husky/pre-push`. Cure: one
   true description, in one place, the other pointing at it.
5. **The Agent Memory section cites a superseded record.** ADR-012 is "Superseded by PDR-011";
   the "three feeds" are ADR-012's. Verified. Cure: the Practice section points at
   `.agent/README.md` and PDR-011; the count goes.
6. **The documentation map is incomplete and framed as the site's.** The README's Documentation
   section omits `engineering/`, `editorial/` and `explorations/`; `docs/README.md` omits
   `explorations/` and calls the whole tree "Project documentation for www.jimcresswell.net"
   though `editorial/` is about the person and `engineering/` about the monorepo. Verified by
   `ls docs`. Cure: the README points at `docs/README.md`; the index gains its row and a true
   first sentence; the two documents the orientation lens routes developers to
   (`.agent/HUMANS.md`, `docs/engineering/working-with-this-repo-for-devs.md`) are reachable from
   one of them.
7. **Paths without their workspace.** `e2e/` and `content/` as bare labels in the README and
   `CONTRIBUTING.md`. Cure: `jcdotnet/` prefixes in prose and link text.
8. **The gate list is copied into prose twice** (the README's `pnpm check` comment and REQ-08
   both transcribe the `check` script). Cure: name the script as the source, once.
9. **`SECURITY.md` requires placeholders in a file that does not exist** (`.env.example`; only
   `.env.local` is present). Verified. Cure: the sentence goes, or the owner wants the file.
10. **The README's licence section does not reach `ATTRIBUTION.md`**, the only place the
    Practice's lineage is named. Cure: one link.
11. **The first screen's vocabulary and rhythm.** Practice, agentic, monorepo, identity atoms,
    canonical, adapter generation and collaboration state arrive without a gloss; the design
    sentence, the PDF sentence, the accessibility list and the memory paragraph fail the
    read-aloud test (the line read's rows P1 to P15). Cure: the line pass, after the structure is
    settled, never before. The sentences that speak of the author (P1, P5, P6) reach him as
    proposals; the rest is the repository's plain register.
12. **The invitation rule is stated twice** (README and `CONTRIBUTING.md`, the second with a
    comma splice). Cure: once, fully, the other linking.

### Rejected or held, with the reason

- **Grow `CONTRIBUTING.md` with the lane-setup skill's four steps, the worktree convention and
  the bot identity** (the onboarding read's O8). Held. The document's reader is near-empty
  (assumption 7); the cure is to make what it says true and to point at the engineering guide for
  the rest, not to grow a document nobody who works here reads. The structure decision in §6
  settles it.
- **`/index.md` versus `/cv/index.md`** (D17). Resolved by reading `jcdotnet/proxy.ts`: a
  `.md` path drops the suffix, a trailing `/index` maps to its directory and a bare `/index` to
  `/`, so `/index.md`, `/cv.md` and `/cv/index.md` all serve. The README's examples and the
  project documents' examples are each correct; no change.
- **The user stories and requirements** (D20): checked and hold; no change.
- **The `skills.md` stub and the root `skills/` folder** (D15): the stub is a loader surface;
  the folder is the owner's own; nothing for this lane.

### Routed outside the lane

Not documents, or not this lane's surfaces. Each is one act, named with its owner.

- **The GitHub about field** reads "jimcresswell.net content". One field, the owner's.
- **The Portfolio link on LinkedIn and the pins on GitHub**: §7.
- **The licence metadata contradicts the README's licence section.** The root `package.json`
  declares `"license": "NONE"`, the site's "SEE LICENSE IN LICENSE" with no such file in its
  folder, the LinkedIn workspace "UNLICENSED", the tooling nothing; the README says the code is
  MIT and the root `LICENSE` is MIT. Verified. Configuration, not docs; a verifier who opens
  `package.json` sees the contradiction. One decision of the owner's, then a one-line change per
  manifest in a later pull request.
- **Old repository name in configuration**: the site package's `repository.url` and the issue
  template's link (the second reviewer-verified; the redirect holds). A later configuration
  change, not this lane.
- **The entry files are not parallel.** `AGENTS.md` alone carries a code-review paragraph and
  two "Learned" anchor lists, a capture point the learning loop no longer uses; its anchors name
  headings in `principles.md` that no longer exist verbatim. Striking the residue is docs work and
  is proposed in §6; moving the code-review paragraph into `AGENT.md` so every platform inherits
  it is a directive edit and is listed for the owner, outside this lane's bound.
- **The orientation lens reads the README's sections by name** (Overview, Workspaces, Getting
  Started, Quality Gates, Agent Memory). Amending the lens is a Practice edit, outside the bound,
  so the rewrite keeps every name the lens reads and may add sections; a renamed section is a
  skill change in a later pull request.

### The editor's read, verified

The developmental read (`editor`) agrees with the audience set and with giving the first
paragraph to the verifier, for a reason §1 E carries only in passing: the social preview, the
search snippet and the AI crawlers quote the first paragraph whether or not anyone clicks, so it
reaches A second-hand today and must be true and distinctive when quoted alone. It contradicts
the hypothesis on the route, as §3 does: the verifier's first GitHub screen today is the empty
user page. Its structural findings, each checked: the body is 181 lines of operator material
out of 265; the first decision comes at line 179; the "Key Design Decisions" are the site's
rendering choices, not the repository's; the one description of the Practice cites the superseded
record; the two pages written for the peer (`.agent/HUMANS.md`, the developer guide) are not
linked; `AGENT.md` names `docs/engineering/build-system.md` as the command inventory and says not
to duplicate it, and the README duplicates it (the build-system document carries the gate
commands and the workspace layout but not the site's test, icon and visual-regression commands,
so the inventory is split today); the site has no README of its own; `principles.md`
§Documentation Is Infrastructure says a README points and never carries, and also names the
README as a surface to update on every tooling change, which is how the README became the gates'
changelog (six of its last eight commits are hook and gate fixes). The sentences that reach for
character both break the doctrine: line 26 claims qualities by adjective ("calm, serious, and
intentional"); the memory paragraph spends the voice's mischief inside a justification.

## 6. Proposals

Each is a sentence the owner can accept, edit or refuse. Nothing below is applied.

### The root README, in this order

1. **The title is his name**, and the first paragraph says what the repository is now, who makes
   it and how, and where the evidence starts; it explains the name `profile`, the about field and
   the six agent directories a reader sees above it. The candidate is in §6.4.
2. **What is here**, one line per part by what it is for: the site and CV; the LinkedIn
   workspace; the Practice; the shared tooling; each linking to its own README. The package
   table with its names moves to the operator section.
3. **The decisions that make it distinctive**, each a sentence linked to its record: agents write
   the code under a governed Practice with blocking gates; the entity graph is the one source for
   identity across the site, the CV, the PDF and the machine representations; editorial decisions
   are recorded beside the architectural ones; one Practice runs in two repositories. The site's
   rendering decisions (server components, build-time PDF, no icons) move to the site's own README.
4. **The Practice**, at the peer's altitude: what it is, how quality survives agent speed, where
   to start (`.agent/README.md`, `.agent/HUMANS.md`, the developer guide). It keeps a subsection
   named Agent Memory, one paragraph pointing at PDR-011, so the orientation lens's read still
   resolves; renaming it is a later skill change.
5. **Getting Started**, kept under that name: install, the shellcheck installer, the site
   workspace's Playwright install, `pnpm check` as the verify step, then the site's own `dev`;
   each prerequisite tied to the gate that needs it, the bash paragraph cut to one line with a
   link; the command inventory moves to the build-system document that `AGENT.md` already names as
   its home, and the README keeps the five commands a day needs.
6. **Quality Gates**, kept under that name: the three hooks described once and truly (the branch
   guard, format, markdownlint and the profanity check on staged files, lint on touched
   workspaces; the commit-message check; the secret scan, the review-cost gate and `pnpm check`,
   whose end-to-end leg builds and serves the site); `CONTRIBUTING.md` points here.
7. **Documentation**: one pointer to `docs/README.md` and the two developer pages.
8. **Licence and attribution**: the two licences, and the link to `ATTRIBUTION.md`.

### The general docs

- **A README for the site workspace** (`jcdotnet/README.md`, new): the site's overview, its
  tree, its routes, its stack and its rendering decisions, moved from the root. A document, in
  bound.
- **`docs/README.md`**: a first sentence true to the tree (the site, the editorial records and the
  Practice's host-side records), the `explorations/` row, and the developer start path.
- **`CONTRIBUTING.md`**: the Workflow section made true (every contributor works on a branch and
  lands by pull request; the hooks by pointer to the README's Quality Gates); the invitation
  sentence stated once, fully; the site conventions kept with `jcdotnet/` prefixes; no growth.
- **`SECURITY.md`**: the `.env.example` sentence goes unless the owner wants the file.
- **`AGENTS.md`**: the two "Learned" anchor lists struck as residue of a retired capture point;
  the code-review paragraph stays until the owner says where it lives.
- **`docs/project/`**: no change.

### The line pass

After the structure is settled, never before: the twenty rows of the line read, the glossary of
terms used before they are explained (Practice, agentic, monorepo, identity atoms, canonical,
tilt, ADR, EDR, gates), and the three read-aloud failures. The sentences that speak of the author
reach him as proposals with the fact each rests on.

### 6.4 The candidate first paragraph

PROPOSAL, for the author to edit, in his voice because the repository is named `profile` and the
site speaks in the first person; the editor's draft with two changes of mine (a sentence that
told the reader what was worth a look is struck as a tell; the Practice's description is made a
plain statement):

> This is where my professional profile is made: the site and CV at
> [jimcresswell.net](https://www.jimcresswell.net), rendered from a graph of my work; the working
> copy of my LinkedIn profile; and the agentic engineering Practice that produces them. AI agents
> write the code and the drafts; I set the direction and take the decisions, and every change
> passes the same blocking gates on its way in. The Practice is rules, specialist reviewers, a
> memory that turns each session's corrections into permanent doctrine, and the tooling that
> enforces them, running here and in a second repository. Start with the decisions behind the
> site (`docs/architecture/decision-records/README.md`) or with how the Practice works
> (`.agent/README.md`).

(The two closing phrases are links in the README; they are written here as paths because this
file sits three directories down.)

What it rests on: `.agent/HUMANS.md` ("AI agents write the code, the owner provides direction and
design guardrails"); `.agent/README.md` ("One Practice runs in two estates"); the entity graph
and the gates as the README already states them; the LinkedIn workspace's README. Three gaps,
his: the first person; the verbs "set the direction and take the decisions"; and whether the
Practice is claimed as his own work in public, since `ATTRIBUTION.md` records its arrival here
from the Oak repository and no public file names its originator.

The about field, the owner's one field, would then read as the first sentence does.

## 7. The audience set, amended after the adversarial pass

The challenge (`assumptions-expert`, twelve findings, each verified here before it was taken
up): every link a person can click on the professional surfaces opens the GitHub user page, not
this repository: LinkedIn's Portfolio link, the GitHub link in the footer of every page of the
site (resolved from the Person entity's `sameAs`), the front page's link, OCE's package author
field. That page pins nothing, has no profile README and does not show the EngraphCode
membership. The only link to this repository from any profile surface is the entity graph's
`codeRepository`, under the old name, which only machines read. The profile's claims about the
Practice link OCE, not here. The standing audiences are scoped to the CV and the profile, and the
composition directive's surface table has no repository row. The social preview shows the about
field, not the README. So the verifier of §1 was imported by analogy from another surface's
readers, which is the failure EDR-008's context and the editorial skill's first section both name,
and the beliefs at first contact in §1 have no tracked source: they are the seat's, and they go
to an audience-reader pass if one runs, never into the order of the piece.

The set that stands:

- **The verifier (A), conditional on a route.** Real when a page a professional reader reaches
  (the user page, LinkedIn, the CV, the site) shows this repository; today none does. No claim on
  the first screen until then. The recruiter variant with it.
- **The engineer or peer (B) controls the opening's order and vocabulary**: a reader weighing the
  engineering (the workspaces, the content model and the graph, the PDF, the decisions, the
  gates), who reaches the repository from the user page, from OCE or by search.
- **The Practice-curious (C) is real today**, not prospective: the profile's Practice card says
  the Practice is publicly available and links OCE, whose Practice README names this estate; one
  deep link into a Practice decision record here appears in the fortnight's paths. C lands on
  `.agent/README.md`; the opening names the Practice with one pointer; the question of how
  quality survives agent speed is theirs.
- **The operator (D) controls the body.**
- **The machine consumers (E)** as §1 now lists them, the lens's full contract included.
- **The uninvited would-be contributor** reaches `CONTRIBUTING.md` from GitHub's new-issue and
  new-pull-request pages; its first sentence is for them, and the README's invitation line
  points there. The reader of `docs/README.md` is already inside the repository, browsing `docs/`.

**The verdict, amended.** On today's facts the counter-verdict of §2 is the verdict. The opening
is written in the repository's plain register: what the repository is, who makes it and how,
where the site is, the Practice named with one pointer; true when quoted alone; the body ordered
as §6 has it (what is here, the decisions, the Practice, the operator material). Not in the first
person: an opening that represents the owner fires the public-copy rule, which puts the
four-reader editorial workflow on the README before he reads it, a cost a bounded docs-only
session does not carry for a reader no surface sends. Where the editor's read and the challenge
agree: the current README fails both verdicts, and the opening must say what this is.

The candidate, plain register, replacing §6.4's first-person paragraph unless the owner says yes
to §8 (PROPOSAL, his to edit; the sentences that describe him are his whatever the register):

> Jim Cresswell's professional profile and the system that produces it: the site and CV at
> [jimcresswell.net](https://www.jimcresswell.net), rendered from a graph of his work; the working
> copy of his LinkedIn profile; and the agentic engineering Practice under `.agent/`, in which AI
> agents write the code and the drafts, the owner sets the direction and takes the decisions, and
> every change passes the same blocking gates on its way in. One Practice runs here and in a
> second repository. Start with the decisions behind the site
> (`docs/architecture/decision-records/README.md`) or with how the Practice works
> (`.agent/README.md`).

**Constraints the challenge added to §6.** The decisions section keeps its name and its count of
six, re-chosen for the repository, so the lens's read resolves; the lens's wording and its
old-name fetch base are a later skill change. `CONTRIBUTING.md`'s first sentence is written for
the uninvited reader. The about field is listed with the owner's acts.

## 8. The owner's decision, stated exactly

**Whether `EngraphCode/profile` is to be evidence that his professional surfaces send readers
to.** First put on 30 October 2026, in this record. It matters now because the README rewrite is
the next pull request and the answer decides the opening's voice and whether the editorial
workflow runs on it. Today the repository is not such evidence (§7). The routes, cheapest first:
pin the repository on the GitHub user page, one act in his own account after which every existing
link reaches it; point the Portfolio link here; add a link from the CV in the chapter that
follows. With any route the about field changes too. If he does not want it, the verifier is not
a reader of this README, the opening stays in the plain register, and nothing waits on him. The
rewrite does not block on the answer: the plain opening is true under both, and only the voice
and the about field change later.

Also his, each one act, outside this lane's bound: the about field ("jimcresswell.net
content"); the licence metadata in the manifests against the README's licence section; the old
repository name in the site's manifest and the issue template; the orientation lens's fetch base
and heading contract (a skill pull request); the home of the code-review paragraph that only
`AGENTS.md` carries.

## 9. Next

At his word on this analysis: the rewrite in this lane under §6 as amended by §7, one pull
request, the structure first and the line pass after; the sentences that describe him reach him
as proposals; his read second, as the public-copy rule sets. The CV chapter follows in its own
session and takes nothing from this lane but the audience facts of §7.
