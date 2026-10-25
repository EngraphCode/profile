#!/usr/bin/env node

/**
 * Editorial-layers validator.
 *
 * Enforces the separation of the editorial doctrine into three layers over the
 * tracked editorial surfaces (the editorial skills, the directives, the reader
 * templates and the editorial decision records): every file that declares
 * `layer: general` or `layer: surface` is free of the author's name tokens,
 * which the one file declaring `layer: author` lists in its `author_names`
 * frontmatter. The general craft and the surface classes then serve any author
 * and travel to any estate as the same bytes, and the author's identity has
 * one home.
 *
 * Wired into root `docs-validators:check`, which runs in `pnpm check` and CI.
 * Exit 0 = clean; exit 1 = at least one author name in a general or surface
 * file; exit 2 = refusal — no author instance, two instances, a malformed
 * declaration, an instance with no names, or a tracked file that cannot be
 * read (the scan never silently skips one). The status is returned from `main`
 * and set on `process.exitCode`, so buffered diagnostics reach a pipe before
 * the process ends.
 *
 * @packageDocumentation
 */

import { resolveRepoRoot } from '../../core/repo-root.js';
import { describeGitReadFailure, listTrackedFiles } from '../../core/repository-paths.js';
import { writeErrorLine, writeLine } from '../../core/terminal-output.js';
import { describeUnreadable, readScanFiles } from '../../core/tracked-file-scan.js';

import {
  type AuthorNameHit,
  type EditorialLayersScan,
  isEditorialSurface,
  scanEditorialLayers,
} from './validate-editorial-layers-helpers.js';

const NAME = 'validate-editorial-layers';

function refuse(reason: string): number {
  writeErrorLine(`${NAME}: ${reason}`);
  return 2;
}

function report(scan: EditorialLayersScan, hits: readonly AuthorNameHit[]): void {
  writeErrorLine(`✖ ${String(hits.length)} author name(s) in general or surface editorial files:`);
  for (const hit of hits) {
    writeErrorLine(`  ${hit.file}:${String(hit.line)}:${String(hit.column)}  ${hit.text}`);
  }
  writeErrorLine('');
  writeErrorLine(
    `A file declaring \`layer: general\` or \`layer: surface\` serves any author and never names this ` +
      `one. Move the sentence to the author instance (${scan.instancePath}) or write it for any author. ` +
      `The names come from that file's \`author_names\` (${scan.names.join(', ')}).`,
  );
}

async function main(): Promise<number> {
  const repoRoot = resolveRepoRoot(import.meta.url);
  const listing = listTrackedFiles(repoRoot);
  if (!listing.ok) {
    return refuse(`cannot list tracked files — ${describeGitReadFailure(listing.error)}`);
  }
  const scoped = listing.value.filter((path) => isEditorialSurface(path));
  const read = readScanFiles(repoRoot, scoped);
  if (!read.ok) {
    return refuse(describeUnreadable(read.error));
  }
  const scan = scanEditorialLayers(read.value);
  if (!scan.ok) {
    return refuse(scan.error);
  }
  if (scan.value.hits.length === 0) {
    writeLine(
      `✓ ${String(scan.value.declared.length)} editorial files declare a layer; no author name ` +
        `(${scan.value.names.join(', ')}) in a general or surface file`,
    );
    return 0;
  }
  report(scan.value, scan.value.hits);
  return 1;
}

process.exitCode = await main();
