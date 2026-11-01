# Contributing

Guidelines for contributing to this repository. Contributions are by invitation only. Please do
not open unsolicited pull requests; the owner's contact details are on
[jimcresswell.net](https://www.jimcresswell.net).

## Before you start

1. **Set up your environment** by the [Getting Started](README.md#getting-started) section of
   the README: Node.js 24, pnpm at the pinned version, gitleaks, jq, bash 5.2 or later and the
   pinned shellcheck, then `pnpm check` green.
2. **Read the development standards.** The rules for every contributor, human or agent, are in
   `.agent/directives/`: [principles.md](.agent/directives/principles.md) (TDD, type safety,
   code quality, documentation) and [testing-strategy.md](.agent/directives/testing-strategy.md)
   (the test types, their naming, the philosophy). The sections below are the
   repository-specific details you need each day.

## Workflow

- Every contributor, the owner included, works on a branch and lands by pull request; the
  pre-commit hook refuses a commit on `main`. The agents work in worktrees under
  `.claude/worktrees/`, cut from `origin/main`, and a branch carries a draft pull request from
  its first push; a human contributor may do the same.
- The three git hooks and what each runs are in the README's
  [Quality Gates](README.md#quality-gates). The pre-push hook runs the full `pnpm check`, which
  takes minutes; never skip a hook (`--no-verify` is not permitted).
- The workflow from branch to merge, and the skills that enact each phase, is
  [docs/engineering/workflow.md](docs/engineering/workflow.md).
- If you touch agent tooling or platform adapters, `pnpm portability:check` must pass; it is
  part of `pnpm check`. If you touch Practice Core or directive docs that carry the fitness
  frontmatter, run `pnpm practice:fitness:informational` and `pnpm practice:vocabulary`.
- An architectural decision gets an ADR in `docs/architecture/decision-records/` in the existing
  format; see the [ADR index](docs/architecture/decision-records/README.md). An editorial
  decision gets an EDR in `docs/editorial/decision-records/`.

## Code conventions

These are repository-specific conventions. For the general principles (DRY, KISS, YAGNI, SOLID),
see [principles.md](.agent/directives/principles.md).

- **File naming**: components are `kebab-case.tsx`; tests use the suffixes `*.unit.test.ts`,
  `*.integration.test.ts`, `*.e2e-ui.test.ts` and `*.e2e-api.test.ts`. See
  [testing-strategy.md](.agent/directives/testing-strategy.md) for the full taxonomy.
- **Server components by default**: add `"use client"` only when browser APIs are needed. Three
  client components today: `ThemeToggle`, `ThemeProvider`, `SiteHeader`.
- **Content changes go in JSON** under `jcdotnet/content/`, never in component code. The
  [content model](docs/architecture/content-model.md) shows how content flows to pages.
- **Type safety**: no `as`, `any` or `!`; label type imports (`import type`). Full details in
  [principles.md](.agent/directives/principles.md).
- **TSDoc on all exports**; inline comments explain why, not what.

## Testing conventions

Assumes TDD familiarity. For the full philosophy and rules, see
[testing-strategy.md](.agent/directives/testing-strategy.md).

- **Unit tests** (`*.unit.test.ts`): pure functions, no mocks, no IO. Co-located with source.
- **Integration tests** (`*.integration.test.ts`): React components via RTL and Vitest jsdom.
  Co-located with source.
- **End-to-end tests** (`*.e2e-ui.test.ts`, `*.e2e-api.test.ts`) in `jcdotnet/e2e/`: journeys
  map to user stories; behaviour tests cover accessibility, SEO and content integrity. The suite
  runs against a production build the harness builds and serves itself. See the
  [test map](jcdotnet/e2e/README.md).
- **No global state mocking**: product code accepts configuration as parameters. If you need a
  mock, inject a simple fake as an argument.

## Content and editorial voice

- All user-visible text lives in `jcdotnet/content/*.json`. Components render it verbatim; they
  do not edit, summarise or reorder it.
- Before any content work, read [editorial-guidance.md](.agent/directives/editorial-guidance.md)
  (how a person is modelled and conveyed) with [docs/editorial/author.md](docs/editorial/author.md)
  (the author's voice, vocabulary, facts and standing decisions), and follow the
  `write-for-the-reader` skill; [editorial-strategy.md](.agent/directives/editorial-strategy.md)
  governs audience and composition.
- For how content JSON becomes rendered pages, metadata and the PDF, see the
  [content model](docs/architecture/content-model.md).

## Troubleshooting

| Problem                                       | Solution                                                                                                                                                                                                       |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install` refuses the package manager    | The install accepts only the pinned pnpm. Run `corepack enable` and install again.                                                                                                                             |
| `gitleaks: command not found`                 | Install gitleaks: `brew install gitleaks` on macOS, or see the [releases](https://github.com/gitleaks/gitleaks/releases) for other platforms.                                                                  |
| `lint:shell` cannot run the pinned shellcheck | Run `.agent/setup/install-shellcheck.sh`; it installs the pinned version into the ignored `.tools/bin`, which the gate runs before `PATH`, on macOS and Linux.                                                 |
| `lint:shell` refuses a deleted script         | A tracked shell script deleted with the change unstaged refuses the push. Stage your own change; never undo another agent's work. A deleted file that is not a script (read from git's index) refuses nothing. |
| a secrets hook smoke says `jq is not on PATH` | Install jq: `brew install jq` on macOS when `/usr/bin/jq` is absent, `sudo apt-get install jq` on Debian and Ubuntu.                                                                                           |
| `pnpm check` fails on knip                    | An unused export. Delete it, or if it is used dynamically, add a targeted entry in `knip.config.ts`. See [ADR-005](docs/architecture/decision-records/005-knip-unused-code-detection.md).                      |
| `pnpm portability:check` fails                | A thin wrapper, reviewer adapter or surface-matrix entry has drifted from the canonical `.agent/` source. Fix the wrapper or update the local surface contract so they match again.                            |
| `pnpm practice:fitness:informational` warns   | A governed doc has exceeded a target or hard limit. Reflow prose, split the doc by responsibility, or agree a new limit before raising it in a follow-up reconciliation pass.                                  |
| Playwright says the browser is not installed  | Run `pnpm --filter @jimcresswell/www exec playwright install chromium-headless-shell`.                                                                                                                         |
| PDF not generated locally                     | Run `pnpm build` first. `/cv/pdf` redirects to a branded 404 until a build has run.                                                                                                                            |
