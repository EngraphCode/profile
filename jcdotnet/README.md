# jimcresswell.net

The site workspace, `@jimcresswell/www`: the front page and the CV at
[www.jimcresswell.net](https://www.jimcresswell.net), the knowledge graph behind them, the PDF,
and the end-to-end and visual proof. Built with Next.js 16, React 19 and Tailwind CSS 4, deployed
on Vercel. The repository's [root README](../README.md) has the setup, the gates and the Practice.

## Overview

A personal site with a front page and one CV. Inter sets headings and labels, Literata sets
prose, and whitespace carries the hierarchy; the palette is warm, the themes are light and dark,
and print styles produce the PDF. Everything the reader sees as content comes from JSON under
`content/`; components render it and never write it.

## Content and configuration

- **Content** (`content/`): `cv.content.json` holds the CV's prose, the headline and the project
  link; `frontpage.content.json` holds the home page; `entities.json` is the entity graph, the one
  source for the shared identity atoms (name, headline, profile links) and for the JSON-LD. How
  content becomes pages, metadata and the PDF is the
  [content model](../docs/architecture/content-model.md).
- **Configuration**: `next.config.ts`, `playwright.config.ts`, `vitest.config.ts`,
  `visual-regression.config.ts` (the routes and comparison allowances the visual harness reads),
  `vercel.json`, and the theme and print CSS in `app/globals.css`. Local development needs no
  environment variables; `.env.local` is only for the Vercel Blob PDF path (see the
  [architecture docs](../docs/architecture/README.md)).

## Structure

```text
app/                         # Next.js App Router pages and layouts
  api/graph/route.ts         # The knowledge graph as JSON-LD
  api/accept-md/route.ts     # The Markdown conversion handler (internal)
  cv/                        # The CV, the PDF handler and the PDF-unavailable page
  globals.css                # Theme colours, Tailwind configuration, print styles
  layout.tsx                 # Root layout: fonts, theme provider, analytics
  sitemap.ts                 # The sitemap
  manifest.ts                # The web app manifest

components/                  # React components, server-rendered unless marked (client)
  cv-layout.tsx              # The whole CV
  site-header.tsx            # Navigation, theme toggle, page actions (client)
  site-footer.tsx            # Copyright and external links
  theme-toggle.tsx           # Light, dark, auto (client)
  theme-provider.tsx         # next-themes wrapper (client)
  ...                        # prose, sections, entries, links, the logo, the skip link

content/                     # Page JSON and the entity graph

lib/                         # Content accessors, entity validation, JSON-LD builders, PDF paths

proxy.ts                     # Content negotiation: Markdown, JSON-LD, the .md aliases

scripts/                     # generate-pdf.ts (after next build), the end-to-end server and its
                             # setup, the visual-regression harness adapter

visual-regression-harness/   # Capture, comparison and git-snapshot engine
e2e/                         # Playwright: journeys/ (user stories) and behaviour/ (a11y, SEO, content)
public/icons/                # Favicon, Apple touch icon, OG image
logo/                        # Icon generation from the logo font
```

## Routes

| Route                 | Purpose                                                                   |
| --------------------- | ------------------------------------------------------------------------- |
| `/`                   | Front page: a personal narrative with inline links                        |
| `/cv/`                | The CV: positioning, experience, prior roles, capabilities, education     |
| `/cv/pdf`             | The PDF, downloaded or shown inline (a route handler)                     |
| `/cv/pdf/unavailable` | The branded 404 when no PDF has been generated                            |
| `/api/graph`          | The whole JSON-LD knowledge graph (Schema.org `@graph`)                   |
| `/<page>.md`          | Markdown alias for a supported editorial document (`/cv.md`, `/index.md`) |

The home page and the CV answer content negotiation: `Accept: text/markdown` returns Markdown and
`Accept: application/ld+json` returns the full knowledge graph. Native subroutes and missing
routes keep their own responses. See
[ADR-009](../docs/architecture/decision-records/009-content-negotiation-proxy.md) and
[ADR-010](../docs/architecture/decision-records/010-canonical-url-graph-identity.md).

## Design decisions

- **Server components by default.** Three components use `"use client"`: the theme toggle, the
  theme provider and the site header. Everything else is server-rendered.
- **One canonical CV.** `/cv/` is the only CV; the former tilt variants are kept as architecture
  reference material and their old links return the branded 404
  ([ADR-021](../docs/architecture/decision-records/021-canonical-only-cv-identity.md)).
- **The PDF is built with the site.** Puppeteer drives full Chrome after `next build`; the file
  goes to Vercel Blob in production and to the local filesystem in local builds; `/cv/pdf` serves
  it; one set of `@media print` CSS shapes the PDF and a browser print alike
  ([ADR-001](../docs/architecture/decision-records/001-build-time-pdf-generation.md),
  [ADR-002](../docs/architecture/decision-records/002-pdf-serving-architecture.md)).
- **Accessibility.** The target is WCAG 2.2 AA: a skip link, semantic HTML, a clear heading
  hierarchy, visible focus, 44px touch targets, `prefers-reduced-motion` respected, theme changes
  announced to assistive technology.
- **No icons, charts or decorative elements.** Controls are text.

## Stack

| Layer          | Technology                                    |
| -------------- | --------------------------------------------- |
| Framework      | Next.js 16 (App Router)                       |
| UI             | React 19, Tailwind CSS 4                      |
| Fonts          | Inter (sans), Literata (serif) via next/font  |
| Theming        | next-themes (class strategy)                  |
| PDF generation | Puppeteer (build-time), Vercel Blob (storage) |
| Testing        | Vitest, Playwright                            |
| Linting        | ESLint (eslint-config-next)                   |
| Formatting     | Prettier                                      |
| Analytics      | Vercel Analytics                              |
| Hosting        | Vercel                                        |

## Commands

Run from the repository root with the workspace filter; the root `pnpm check` runs the site's
build, lint, type-check, tests and end-to-end suite with everything else.

```bash
pnpm --filter @jimcresswell/www dev              # the site at http://localhost:3000
pnpm --filter @jimcresswell/www build            # next build, then the PDF
pnpm --filter @jimcresswell/www start            # the production server
pnpm --filter @jimcresswell/www test             # Vitest; also test:watch and test:coverage
pnpm --filter @jimcresswell/www test:e2e         # Playwright against a production build the harness builds and serves
pnpm --filter @jimcresswell/www test:ui          # Playwright UI mode
pnpm --filter @jimcresswell/www visual-regression:harness <base-ref> <target-ref>
pnpm --filter @jimcresswell/www generate:icons   # favicon and OG images from the logo
```

The end-to-end suite needs the browser installed once per machine:
`pnpm --filter @jimcresswell/www exec playwright install chromium-headless-shell`. The test
organisation and the map from journeys to user stories are in [`e2e/README.md`](e2e/README.md).
