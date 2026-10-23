/**
 * The diff page's wiring: load both files from the server and render the review against the
 * source; the Reload button loads them again. Pure work (the diff, the rendering) lives in
 * modules with tests; this file only binds them to the DOM and the network, and is proven by use.
 */

import { documentPayloadSchema, parseWith } from '../model/schema.js';

import { renderDiff } from './diff-render.js';

interface Elements {
  readonly pane: HTMLElement;
  readonly status: HTMLElement;
  readonly reload: HTMLButtonElement;
}

function elements(): Elements | null {
  const pane = document.querySelector('#diff');
  const status = document.querySelector('#status');
  const reload = document.querySelector('#reload');
  if (
    !(pane instanceof HTMLElement) ||
    !(status instanceof HTMLElement) ||
    !(reload instanceof HTMLButtonElement)
  ) {
    return null;
  }
  return { pane, status, reload };
}

function clock(): string {
  return new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

async function load(els: Elements): Promise<void> {
  els.status.textContent = 'Loading…';
  const response = await fetch('/api/document');
  const payload = parseWith(documentPayloadSchema, await response.json());
  if (!payload.ok) {
    els.status.textContent = `Could not load: ${payload.error}`;
    return;
  }
  els.pane.innerHTML = renderDiff({ before: payload.value.source, after: payload.value.review });
  els.status.textContent = `Read ${clock()}`;
}

function failure(els: Elements): (error: unknown) => void {
  return (error) => {
    els.status.textContent = `Load failed: ${error instanceof Error ? error.message : String(error)}`;
  };
}

function start(): void {
  const els = elements();
  if (els === null) {
    return;
  }
  els.reload.addEventListener('click', () => {
    load(els).catch(failure(els));
  });
  load(els).catch(failure(els));
}

start();
