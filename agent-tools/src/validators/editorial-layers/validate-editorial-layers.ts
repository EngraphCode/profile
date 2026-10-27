#!/usr/bin/env node

/**
 * Editorial-layers validator.
 *
 * Enforces the separation of editorial process from information about the
 * author over the tracked editorial surfaces (the editorial skills, the
 * directives, the reader templates and the editorial records): every file that
 * declares `layer: general` or `layer: surface` is free of the author's name
 * tokens, which the one author file under `docs/editorial/` lists in its
 * `author_names` frontmatter; that file declares no layer and never sits under
 * the editorial roots of `.agent/` (the directives, the skills, the reader
 * templates), because information about an entity is never a directive, rule,
 * skill or template. The general craft and the surface classes then serve any author
 * and travel to any estate as the same bytes, and the author's identity has
 * one home.
 *
 * Wired into root `docs-validators:check`, which runs in `pnpm check` and CI.
 * Exit 0 = clean, or nothing to check when no editorial file declares a layer
 * (an estate that has not adopted the layers) and no `author_names` file is
 * misplaced; exit 1 = at least one author name in a general or surface file;
 * exit 2 = refusal — declared layers with no author file, two author files, an
 * author file outside `docs/editorial/` or with a `layer` key, a malformed
 * declaration (`layer: author` among them), an author file with no names, or a
 * tracked file that cannot be read (the scan never silently skips one). The status is returned from `main` and set on
 * `process.exitCode`, so buffered diagnostics reach a pipe before the process
 * ends.
 *
 * @packageDocumentation
 */

import { resolveRepoRoot } from '../../core/repo-root.js';
import { describeGitReadFailure, listTrackedFiles } from '../../core/repository-paths.js';
import { writeErrorLine, writeLine } from '../../core/terminal-output.js';
import { describeUnreadable, readScanFiles } from '../../core/tracked-file-scan.js';

import {
  type EditorialLayersScan,
  isEditorialSurface,
  scanEditorialLayers,
  type ScanFile,
} from './validate-editorial-layers-helpers.js';

const NAME = 'validate-editorial-layers';

function refuse(reason: string): number {
  writeErrorLine(`${NAME}: ${reason}`);
  return 2;
}

function report(scan: EditorialLayersScan): void {
  writeErrorLine(
    `✖ ${String(scan.hits.length)} author name(s) in general or surface editorial files:`,
  );
  for (const hit of scan.hits) {
    writeErrorLine(`  ${hit.file}:${String(hit.line)}:${String(hit.column)}  ${hit.text}`);
  }
  writeErrorLine('');
  writeErrorLine(
    `A file declaring \`layer: general\` or \`layer: surface\` serves any author and never names this ` +
      `one. Move the sentence to the author file (${scan.authorFilePath}) or write it for any author. ` +
      `The names come from that file's \`author_names\` (${scan.names.join(', ')}).`,
  );
}

/**
 * The scannable editorial files, or the refusal already written (exit 2) when
 * the tracked files cannot be listed or one cannot be read.
 */
function readEditorialFiles(repoRoot: string): readonly ScanFile[] | number {
  const listing = listTrackedFiles(repoRoot);
  if (!listing.ok) {
    return refuse(`cannot list tracked files — ${describeGitReadFailure(listing.error)}`);
  }
  const read = readScanFiles(
    repoRoot,
    listing.value.filter((path) => isEditorialSurface(path)),
  );
  return read.ok ? read.value : refuse(describeUnreadable(read.error));
}

async function main(): Promise<number> {
  const files = readEditorialFiles(resolveRepoRoot(import.meta.url));
  if (typeof files === 'number') {
    return files;
  }
  const outcome = scanEditorialLayers(files);
  if (!outcome.ok) {
    return refuse(outcome.error);
  }
  if (outcome.value.kind === 'nothing-to-check') {
    // An estate whose editorial files declare no layer has nothing to check:
    // the family carries the validator, the layers are a host's choice.
    writeLine('✓ no editorial file declares a layer; nothing to check');
    return 0;
  }
  const { scan } = outcome.value;
  if (scan.hits.length === 0) {
    writeLine(
      `✓ ${String(scan.declared.length)} editorial files declare a layer; no author name ` +
        `(${scan.names.join(', ')}) in a general or surface file`,
    );
    return 0;
  }
  report(scan);
  return 1;
}

process.exitCode = await main();
