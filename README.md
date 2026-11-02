# Jim Cresswell: profile

## Overview

This repository holds Jim Cresswell's professional profile and the system that produces it: the
site and CV at [www.jimcresswell.net](https://www.jimcresswell.net), rendered from a graph of his
work; the working copy of his LinkedIn profile; and the agentic engineering Practice under
`.agent/`, in which AI agents write the code and the drafts, the owner sets the direction and
takes the decisions, and every change passes the same blocking gates on its way in. One Practice
runs here and in a second repository. Start with
[the decisions behind the site](docs/architecture/decision-records/README.md) or with
[how the Practice works](.agent/README.md).

Three kinds of thing live here and are kept apart:

- **Mechanisms** decide how work is done and never what the content says: the Practice
  (`.agent/`), its tooling (`agent-tools/`), the shared packages (`tooling/`), the git hooks and
  the gates.
- **Configuration** binds the mechanisms to this repository: the root tooling configuration
  (`package.json`, `turbo.json`, the lint, format and type configuration), the platform entry
  files (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`) with the adapters generated from the Practice,
  the hooks under `.husky/` and the workflows under `.github/`.
- **Content** is every public sentence about the author and the data behind it: the site's
  content model (`jcdotnet/content/`), the LinkedIn workspace (`linkedin/`) and the editorial
  records (`docs/editorial/`). Components render content and never write it.

## Workspaces

| Workspace                      | Package                | What it is                                                                                                                                                                           |
| ------------------------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`jcdotnet/`](jcdotnet/)       | `@jimcresswell/www`    | The site: the front page, the CV, the knowledge graph, the PDF, and the end-to-end and visual proof. Its [README](jcdotnet/README.md) has the structure, routes, stack and commands. |
| [`linkedin/`](linkedin/)       | `linkedin`             | The LinkedIn workspace: the profile as applied, field by field with its status, the decisions behind each field and the research. Documents only.                                    |
| [`agent-tools/`](agent-tools/) | `@engraph/agent-tools` | The Practice's tooling: the validators the gates run, the adapter generators, the collaboration state, the merge bot.                                                                |
| [`tooling/`](tooling/)         | `@engraph/*`           | Shared packages: the eslint plugin, result, safe-path, type-helpers, workspace-config.                                                                                               |

The Practice itself (directives, rules, skills, reviewer templates, plans and memory) is under
[`.agent/`](.agent/README.md), with [`.agent/HUMANS.md`](.agent/HUMANS.md) for a human reader.
Documentation is under [`docs/`](docs/README.md). Root commands run through Turborepo
(`pnpm check`, `pnpm build`, `pnpm test`); one workspace's command takes the filter
(`pnpm --filter @jimcresswell/www dev`).

## Key Design Decisions

Six decisions shape the repository; each links its record.

1. **Agents write the code under a governed Practice.** The owner sets the direction and takes
   the decisions; the agents work under written directives and rules, with specialist reviewers,
   and nothing lands without the same blocking gates a human would face. See
   [`.agent/HUMANS.md`](.agent/HUMANS.md) and [`principles.md`](.agent/directives/principles.md).
2. **One source for identity.** The entity graph (`jcdotnet/content/entities.json`) owns the
   shared identity atoms; page JSON owns the prose; the server composes them into the pages, the
   PDF and the machine representations, and components never edit, summarise or reorder copy.
   See [ADR-020](docs/architecture/decision-records/020-entity-model-source-of-truth-for-shared-atoms.md)
   and the [content model](docs/architecture/content-model.md).
3. **One canonical CV.** `/cv/` is the only CV; audience variants were retired and their old
   links return the site's 404. See
   [ADR-021](docs/architecture/decision-records/021-canonical-only-cv-identity.md).
4. **The same content for machines.** The home page and the CV answer content negotiation with
   Markdown or the JSON-LD graph, `.md` aliases serve Markdown to a browser, and the whole graph
   is at `/api/graph`. See
   [ADR-009](docs/architecture/decision-records/009-content-negotiation-proxy.md) and
   [ADR-010](docs/architecture/decision-records/010-canonical-url-graph-identity.md).
5. **The PDF is built with the site.** Puppeteer drives full Chrome at build time, the file goes
   to Vercel Blob in production and to the local filesystem in local builds, and `/cv/pdf` serves
   it; one set of print CSS shapes the PDF and a browser print alike. See
   [ADR-001](docs/architecture/decision-records/001-build-time-pdf-generation.md) and
   [ADR-002](docs/architecture/decision-records/002-pdf-serving-architecture.md).
6. **Editorial decisions are recorded beside the architectural ones.** The doctrine for writing
   about a person is person-neutral and lives in the directives; the author's public facts and
   standing decisions are one file; each significant editorial decision is a record. See
   [`docs/editorial/`](docs/editorial/decision-records/README.md).

## The Practice

A written way of working for a person and AI agents building together. Directives set the rules
of work (principles, testing, editorial guidance, privacy); rules are always-on behavioural
modifiers, listed in [`RULES_INDEX.md`](RULES_INDEX.md); skills are the procedures; sub-agent
templates are the specialist reviewers; plans and memory carry the work across sessions. Quality
survives agent speed because the gates block: the pre-commit, pre-push and continuous-integration
checks run the same `pnpm check`, reviewers are dispatched on every change of consequence, and
tests are written before the code they prove. The Practice runs here and in a second repository
as one text with a host-specific layer in each; its lineage is in
[`ATTRIBUTION.md`](ATTRIBUTION.md). Start at [`.agent/README.md`](.agent/README.md), then
[`.agent/HUMANS.md`](.agent/HUMANS.md); for working here with the agents, read
[the developer guide](docs/engineering/working-with-this-repo-for-devs.md).

### Agent Memory

What the agents learn (corrections, surprises, settled decisions) is carried into the permanent
documents a human would open anyway, through the continuity surfaces
[PDR-011](.agent/practice-core/decision-records/PDR-011-continuity-surfaces-and-surprise-pipeline.md)
describes: a session's notes, a distilled quick reference, then the directives, the decision
records and the reference pages. A reader of `principles.md` finds a rule without needing to know
which session it came from.

## Getting Started

Prerequisites, each named with the gate that needs it:

- **Node.js 24** (`.nvmrc`): use [fnm](https://github.com/Schniz/fnm) or
  [nvm](https://github.com/nvm-sh/nvm).
- **pnpm at the pinned version**: run `corepack enable`; the install refuses any other version
  and names the pin.
- **gitleaks**, for the secret scan in `pnpm check` and the pre-push hook: `brew install gitleaks`
  on macOS, or the [releases](https://github.com/gitleaks/gitleaks/releases).
- **jq**, read by the secrets hooks: `brew install jq` on macOS if `/usr/bin/jq` is absent,
  `sudo apt-get install jq` on Debian and Ubuntu, or the [downloads](https://jqlang.org/download/).
- **bash 5.2 or later**, required by every shell script and the two secrets hooks: macOS ships
  3.2, so `brew install bash` and put it first on `PATH`; Debian 12 and Ubuntu 24.04 or later
  `sudo apt-get install bash`.
- **shellcheck at the pinned version**, installed by the second command below into the ignored
  `.tools/bin`, which the shell lint gate runs before any shellcheck on your `PATH`.

```bash
pnpm install                                   # dependencies, the git hooks, the agent-tools build
.agent/setup/install-shellcheck.sh             # the pinned shellcheck, once per checkout
pnpm --filter @jimcresswell/www exec playwright install chromium-headless-shell  # the browser the end-to-end leg drives
pnpm check                                     # every blocking gate; green means the checkout works
pnpm --filter @jimcresswell/www dev            # the site at http://localhost:3000
```

Day to day: `pnpm check` proves the tree, `pnpm fix` runs the auto-fixers, `pnpm test` and
`pnpm build` run across every workspace, and `pnpm check:docs` is the gate for documentation-only
work. The full command inventory is in the
[build system](docs/engineering/build-system.md#command-inventory). Local development needs no
environment variables; `.env.local` is only for the Vercel Blob PDF path (see the
[architecture docs](docs/architecture/README.md)).

## Project Structure

```text
.agent/                 # The Practice: directives, rules, skills, reviewer templates, plans, memory
agent-tools/            # @engraph/agent-tools: validators, adapter generators, collaboration state, the merge bot
jcdotnet/               # @jimcresswell/www: the site (its README has the site's own layout)
linkedin/               # The LinkedIn workspace: documents only
tooling/                # @engraph/*: shared packages
docs/                   # architecture, engineering, editorial, explorations, project
skills/                 # Standalone skills distributed outside the Practice
runtime-only-scripts/   # Scripts that run under node alone, before dependencies are installed
.agents/ .claude/ .codex/ .cursor/ .gemini/   # Platform adapters generated from .agent/ (pnpm portability:fix)
.husky/ .github/        # Git hooks and GitHub workflows
```

## Quality Gates

Three git hooks, managed by [Husky](https://typicode.github.io/husky/) and installed by
`pnpm install`:

- **pre-commit**: the branch guard (no commits on `main`), Prettier and markdownlint on the
  staged files, the profanity check, and lint in every workspace the commit touches.
- **commit-msg**: commitlint. To check a message without committing:
  `pnpm agent-tools:check-commit-message -m "type(scope): subject"` (or `-F <file>`; exit 0
  conforms, 1 violates).
- **pre-push**: the secret scan of the pushed commits, the review-cost gate, then `pnpm check`,
  whose end-to-end leg builds the site and runs the Playwright suite, PDF tests included, against
  that build. Continuous integration runs the same `pnpm check`.

`pnpm check` writes no tracked file; its legs are the `check` script in `package.json`, explained
in the [build system](docs/engineering/build-system.md#quality-gate-commands). `pnpm fix` runs
the auto-fixers; run `pnpm check` again afterwards. The gate sequence and the restart-on-fix
discipline are in [`principles.md`](.agent/directives/principles.md#code-quality). Practice and
directive fitness (`pnpm practice:fitness:informational`, `pnpm practice:vocabulary`) is advisory
and outside `pnpm check`.

## Documentation

[`docs/README.md`](docs/README.md) is the index: the architecture and its decision records, the
engineering of the monorepo (the build system, the workflow, the testing recipes), the editorial
records (the author's public file and the editorial decision records), the explorations, and the
project's user stories and requirements. For the site's tests, see
[`jcdotnet/e2e/README.md`](jcdotnet/e2e/README.md).

## Development Standards

Written rules cover code quality, testing and editorial voice, and they bind humans and agents
alike. Contributions are by invitation only; please do not open unsolicited pull requests
([`CONTRIBUTING.md`](CONTRIBUTING.md) has the workflow, the conventions and the troubleshooting).

- [`.agent/directives/AGENT.md`](.agent/directives/AGENT.md): where an agent starts.
- [`.agent/directives/principles.md`](.agent/directives/principles.md): TDD, type safety, code
  quality, documentation.
- [`.agent/directives/testing-strategy.md`](.agent/directives/testing-strategy.md): the test
  types, their naming, the philosophy.
- [`.agent/directives/editorial-guidance.md`](.agent/directives/editorial-guidance.md), with
  [`docs/editorial/author.md`](docs/editorial/author.md): how a person is written about, and the
  author's voice, facts and standing decisions; read both before any content work.

## Licence

- **Code**: [MIT](LICENSE).
- **Content**: [CC BY-NC 4.0](LICENSE-CONTENT) for the CV text, biographical information, logo
  and identity assets; free to share and adapt with attribution, not for commercial use.
- **Attribution**: [`ATTRIBUTION.md`](ATTRIBUTION.md) records what was adopted from outside this
  repository, the Practice's lineage included.
