import { describe, expect, it } from 'vitest';

import type { PrStateReading } from '../pr-watch/state-types.js';
import type { GithubApiFetch } from './mint-installation-token.js';
import { ReadingUnavailableError, runMergeExecution } from './merge.js';
import { makeInput } from './test-helpers/merge-execution-input.js';
import { settledReading, SETTLED_HEAD_OID } from './test-helpers/pr-state-reading.js';

/**
 * The records class at the merge door (the owner ruling of 2026-09-03, bounded
 * by his word of 2026-10-11): a bot-authored pull request whose every changed
 * path is documentation or Practice prose merges at checks green by name with
 * no review in progress; a review GitHub shows in progress, on any surface, is
 * waited for. Integration over injected ports: the reading injected as a
 * constant, the fetch port serving files, rules, settings and the merge PUT.
 */

const makeReading = settledReading;

/** A fetch port that also serves the changed files, the base ref and the base branch's rules. */
function makeClassPort(
  files: readonly { filename: string }[],
  options: {
    readonly required?: readonly string[];
    readonly failing?: string;
    /** Rules served by page; absent, one page carrying `required`. */
    readonly rulesPages?: readonly (readonly unknown[])[];
  } = {},
): { fetchImpl: GithubApiFetch; calls: { url: string }[] } {
  const calls: { url: string }[] = [];
  const required = options.required ?? ['run-quality-gates', 'CodeQL'];
  const defaultRules = [
    {
      type: 'required_status_checks',
      parameters: { required_status_checks: required.map((context) => ({ context })) },
    },
  ];
  const rulesAnswer = (url: string): unknown => {
    const page = Number(/[&?]page=(\d+)/u.exec(url)?.[1] ?? '1');
    if (options.rulesPages === undefined) {
      return page === 1 ? defaultRules : [];
    }
    return options.rulesPages[page - 1] ?? [];
  };
  const answer = (url: string): unknown => {
    if (url.includes('/pulls/42/files')) {
      return files;
    }
    if (url.endsWith('/pulls/42/merge')) {
      return { merged: true, sha: 'mergesha1' };
    }
    if (url.endsWith('/pulls/42')) {
      return { base: { ref: 'main' } };
    }
    return url.includes('/rules/branches/main') ? rulesAnswer(url) : { allow_merge_commit: true };
  };
  const fetchImpl: GithubApiFetch = (url) => {
    calls.push({ url });
    if (options.failing !== undefined && url.includes(options.failing)) {
      return Promise.resolve({ status: 502, json: () => Promise.resolve({}) });
    }
    return Promise.resolve({ status: 200, json: () => Promise.resolve(answer(url)) });
  };
  return { fetchImpl, calls };
}

const refusedState = (
  outcome: Awaited<ReturnType<typeof runMergeExecution>>,
): string | undefined =>
  outcome.ok && outcome.value.kind === 'refused' ? outcome.value.verdictState : undefined;
const refusedEvidence = (
  outcome: Awaited<ReturnType<typeof runMergeExecution>>,
): readonly string[] =>
  outcome.ok && outcome.value.kind === 'refused' ? outcome.value.evidence : [];

const owedLegReading = (): PrStateReading =>
  makeReading({ author: 'app/acme-bot', reviews: [], checksGreenAt: '2026-08-06T08:58:00Z' });

const deploymentPendingReading = (): PrStateReading =>
  makeReading({
    author: 'app/acme-bot',
    reviews: [],
    checksGreenAt: null,
    namedChecks: [
      { name: 'run-quality-gates', bucket: 'passed' },
      { name: 'CodeQL', bucket: 'passed' },
      { name: 'Vercel Preview Comments', bucket: 'pending' },
    ],
    checks: { total: 3, passed: 2, failed: 0, pending: 1 },
  });

const vendorRunPendingReading = (): PrStateReading =>
  makeReading({
    author: 'app/acme-bot',
    reviews: [],
    checksGreenAt: null,
    namedChecks: [
      { name: 'run-quality-gates', bucket: 'passed' },
      { name: 'CodeQL', bucket: 'passed' },
      { name: 'copilot-pull-request-reviewer', bucket: 'pending' },
    ],
    checks: { total: 3, passed: 2, failed: 0, pending: 1 },
  });

const recordsFiles = [
  { filename: '.agent/memory/active/napkin.md' },
  { filename: '.agent/memory/operational/repo-continuity.md' },
];

describe('runMergeExecution — the records class (the owner ruling of 2026-09-03)', () => {
  it('merges a records fold at checks green while the vendor leg is still owed, naming the ground', async () => {
    const { fetchImpl, calls } = makeClassPort(recordsFiles);

    const outcome = await runMergeExecution(makeInput(owedLegReading(), fetchImpl));

    expect(outcome.ok).toBe(true);
    if (outcome.ok) {
      expect(outcome.value.kind).toBe('merged');
      expect(
        outcome.value.evidence.some((line) => line.startsWith('records-class (2 changed paths')),
      ).toBe(true);
    }
    const urls = calls.map((call) => call.url);
    expect(urls.findIndex((url) => url.includes('/pulls/42/files'))).toBeLessThan(
      urls.findIndex((url) => url.endsWith('/pulls/42/merge')),
    );
  });

  it("waits while another expected reviewer's request is outstanding, though the verdict names an unrequested leg", async () => {
    const { fetchImpl, calls } = makeClassPort(recordsFiles);
    const reading = makeReading({
      author: 'app/acme-bot',
      reviews: [],
      checksGreenAt: '2026-08-06T08:58:00Z',
      expectedReviewers: ['copilot-pull-request-reviewer', 'chatgpt-codex-connector'],
      reviewRequests: ['chatgpt-codex-connector'],
    });

    const outcome = await runMergeExecution(makeInput(reading, fetchImpl));

    expect(refusedState(outcome)).toBe('WAITING-REVIEW-RUN-LIVE');
    expect(
      refusedEvidence(outcome).some((line) =>
        line.includes('expected reviewer requested: chatgpt-codex-connector'),
      ),
    ).toBe(true);
    expect(refusedEvidence(outcome).some((line) => line.includes('SILENT-WAIT-NO-REVIEWER'))).toBe(
      true,
    );
    expect(calls.some((call) => call.url.endsWith('/pulls/42/merge'))).toBe(false);
    expect(calls.some((call) => call.url.includes('/pulls/42/files'))).toBe(false);
  });

  it('waits on an outstanding request when a pending deployment check sent the verdict through the narrowing branch', async () => {
    const { fetchImpl, calls } = makeClassPort(recordsFiles);
    const reading = makeReading({
      author: 'app/acme-bot',
      reviews: [],
      checksGreenAt: null,
      expectedReviewers: ['copilot-pull-request-reviewer', 'chatgpt-codex-connector'],
      reviewRequests: ['chatgpt-codex-connector'],
      namedChecks: [
        { name: 'run-quality-gates', bucket: 'passed' },
        { name: 'CodeQL', bucket: 'passed' },
        { name: 'Vercel Preview Comments', bucket: 'pending' },
      ],
      checks: { total: 3, passed: 2, failed: 0, pending: 1 },
    });

    const outcome = await runMergeExecution(makeInput(reading, fetchImpl));

    expect(refusedState(outcome)).toBe('WAITING-REVIEW-RUN-LIVE');
    expect(
      refusedEvidence(outcome).some((line) =>
        line.includes('expected reviewer requested: chatgpt-codex-connector'),
      ),
    ).toBe(true);
    expect(calls.some((call) => call.url.endsWith('/pulls/42/merge'))).toBe(false);
  });

  it('waits on a request still outstanding past the checks-green timeout, never merging a records fold on SETTLED-NO-REVIEW', async () => {
    const { fetchImpl, calls } = makeClassPort(recordsFiles);
    const reading = makeReading({
      author: 'app/acme-bot',
      reviews: [],
      reviewRequests: ['copilot-pull-request-reviewer'],
    });

    const outcome = await runMergeExecution(makeInput(reading, fetchImpl));

    expect(refusedState(outcome)).toBe('WAITING-REVIEW-RUN-LIVE');
    expect(refusedEvidence(outcome).some((line) => line.includes('SETTLED-NO-REVIEW'))).toBe(true);
    expect(calls.some((call) => call.url.endsWith('/pulls/42/merge'))).toBe(false);
  });

  it('waits on a live run beside a quota-skipped leg: the skip settles the leg, the run is a review in progress', async () => {
    const { fetchImpl, calls } = makeClassPort(recordsFiles);
    const reading = makeReading({
      author: 'app/acme-bot',
      reviews: [
        {
          id: 'PRR_q',
          author: 'copilot-pull-request-reviewer',
          state: 'COMMENTED',
          body: 'Review skipped: spend limit reached for this billing cycle',
          commitOid: SETTLED_HEAD_OID,
          submittedAt: '2026-08-06T08:05:00Z',
        },
      ],
      reviewRuns: {
        kind: 'read',
        runs: [
          {
            id: 'run-7',
            name: 'Copilot review',
            createdAt: '2026-08-06T08:50:00Z',
            completedAt: null,
          },
        ],
      },
    });

    const outcome = await runMergeExecution(makeInput(reading, fetchImpl));

    expect(refusedState(outcome)).toBe('WAITING-REVIEW-RUN-LIVE');
    expect(refusedEvidence(outcome).some((line) => line.includes('review run live: run-7'))).toBe(
      true,
    );
    expect(refusedEvidence(outcome).some((line) => line.includes('QUOTA-SKIPPED'))).toBe(true);
    expect(calls.some((call) => call.url.endsWith('/pulls/42/merge'))).toBe(false);
  });

  it('merges a records fold on SETTLED-NO-REVIEW when nothing is in progress: a tip the vendor never reviewed, nothing requested, no run', async () => {
    const { fetchImpl, calls } = makeClassPort(recordsFiles);
    const reading = makeReading({ author: 'app/acme-bot', reviews: [] });

    const outcome = await runMergeExecution(makeInput(reading, fetchImpl));

    expect(outcome.ok).toBe(true);
    if (outcome.ok) {
      expect(outcome.value.kind).toBe('merged');
      expect(outcome.value.evidence.some((line) => line.includes('SETTLED-NO-REVIEW'))).toBe(true);
    }
    expect(calls.some((call) => call.url.endsWith('/pulls/42/merge'))).toBe(true);
  });

  it("waits while the vendor's own review run is in progress: no merge, no files read, the hold named", async () => {
    const { fetchImpl, calls } = makeClassPort(recordsFiles);

    const outcome = await runMergeExecution(makeInput(vendorRunPendingReading(), fetchImpl));

    expect(refusedState(outcome)).toBe('CHECKS-RUNNING');
    expect(
      refusedEvidence(outcome).some((line) =>
        line.startsWith('records-class: a review is in progress (copilot-pull-request-reviewer)'),
      ),
    ).toBe(true);
    expect(calls.some((call) => call.url.endsWith('/pulls/42/merge'))).toBe(false);
    expect(calls.some((call) => call.url.includes('/pulls/42/files'))).toBe(false);
  });

  it('merges a records fold whose only pending check is a deployment the rules do not require, naming what was set aside', async () => {
    const { fetchImpl, calls } = makeClassPort(recordsFiles);

    const outcome = await runMergeExecution(makeInput(deploymentPendingReading(), fetchImpl));

    expect(outcome.ok).toBe(true);
    if (outcome.ok) {
      expect(outcome.value.kind).toBe('merged');
      expect(
        outcome.value.evidence.some((line) => line.includes('set aside (Vercel Preview Comments)')),
      ).toBe(true);
    }
    expect(calls.some((call) => call.url.includes('/rules/branches/main'))).toBe(true);
  });

  it('keeps a code diff at the door on a pending deployment check and names the code paths', async () => {
    const { fetchImpl, calls } = makeClassPort([
      { filename: '.agent/memory/active/napkin.md' },
      { filename: 'agent-tools/src/merge-bot/merge.ts' },
    ]);

    const outcome = await runMergeExecution(makeInput(deploymentPendingReading(), fetchImpl));

    expect(refusedState(outcome)).toBe('CHECKS-RUNNING');
    expect(calls.some((call) => call.url.endsWith('/pulls/42/merge'))).toBe(false);
    expect(calls.some((call) => call.url.includes('/pulls/42/files'))).toBe(true);
  });

  it('holds a records fold while a REQUIRED context is pending, whatever else is set aside', async () => {
    const { fetchImpl, calls } = makeClassPort(recordsFiles, {
      required: ['run-quality-gates', 'CodeQL', 'secret-scan'],
    });

    const outcome = await runMergeExecution(makeInput(vendorRunPendingReading(), fetchImpl));

    expect(outcome.ok).toBe(true);
    if (outcome.ok) {
      expect(outcome.value.kind).toBe('refused');
      if (outcome.value.kind === 'refused') {
        expect(outcome.value.verdictState).toBe('CHECKS-RUNNING');
      }
    }
    expect(calls.some((call) => call.url.endsWith('/pulls/42/merge'))).toBe(false);
  });

  it('keeps a code diff at the door on an owed leg and names the code paths', async () => {
    const { fetchImpl, calls } = makeClassPort([
      { filename: '.agent/memory/active/napkin.md' },
      { filename: 'agent-tools/src/merge-bot/merge.ts' },
    ]);

    const outcome = await runMergeExecution(makeInput(owedLegReading(), fetchImpl));

    expect(outcome.ok).toBe(true);
    if (outcome.ok) {
      expect(outcome.value.kind).toBe('refused');
      if (outcome.value.kind === 'refused') {
        expect(outcome.value.verdictState).toBe('SILENT-WAIT-NO-REVIEWER');
        expect(outcome.value.reason).toContain('agent-tools/src/merge-bot/merge.ts');
      }
    }
    expect(calls.some((call) => call.url.endsWith('/pulls/42/merge'))).toBe(false);
  });

  it('reads no files on a settled verdict: a failing files port cannot stop the merge there', async () => {
    const { fetchImpl } = makeClassPort([{ filename: 'agent-tools/src/merge-bot/merge.ts' }], {
      failing: '/pulls/42/files',
    });

    const outcome = await runMergeExecution(makeInput(makeReading(), fetchImpl));

    expect(outcome.ok && outcome.value.kind === 'merged').toBe(true);
  });

  it('reports a failed files read on an owed leg as a retryable reading failure, never a merge', async () => {
    const files = makeClassPort(recordsFiles, { failing: '/pulls/42/files' });

    const onFiles = await runMergeExecution(makeInput(owedLegReading(), files.fetchImpl));

    expect(onFiles.ok).toBe(false);
    if (!onFiles.ok) {
      expect(onFiles.error).toBeInstanceOf(ReadingUnavailableError);
      expect(onFiles.error.message).toContain('changed files read answered 502');
    }
    expect(files.calls.some((call) => call.url.endsWith('/pulls/42/merge'))).toBe(false);
  });

  it('keeps CHECKS-RUNNING as read, naming the reason, when the rules or the files cannot be read this poll', async () => {
    const rules = makeClassPort(recordsFiles, { failing: '/rules/branches/' });
    const files = makeClassPort(recordsFiles, { failing: '/pulls/42/files' });

    const onRules = await runMergeExecution(makeInput(deploymentPendingReading(), rules.fetchImpl));
    const onFiles = await runMergeExecution(makeInput(deploymentPendingReading(), files.fetchImpl));

    for (const outcome of [onRules, onFiles]) {
      expect(outcome.ok).toBe(true);
      if (outcome.ok) {
        expect(outcome.value.kind).toBe('refused');
        if (outcome.value.kind === 'refused') {
          expect(outcome.value.verdictState).toBe('CHECKS-RUNNING');
          expect(
            outcome.value.evidence.some((line) =>
              line.startsWith('records-class narrowing unavailable this poll:'),
            ),
          ).toBe(true);
        }
      }
    }
    expect(rules.calls.some((call) => call.url.endsWith('/pulls/42/merge'))).toBe(false);
    expect(files.calls.some((call) => call.url.endsWith('/pulls/42/merge'))).toBe(false);
  });

  it('reads every rules page: a required context on the second page still binds', async () => {
    const filler = Array.from({ length: 100 }, () => ({ type: 'deletion' }));
    const secondPage = [
      {
        type: 'required_status_checks',
        parameters: {
          required_status_checks: [{ context: 'run-quality-gates' }, { context: 'CodeQL' }],
        },
      },
    ];
    const { fetchImpl, calls } = makeClassPort(recordsFiles, { rulesPages: [filler, secondPage] });

    const outcome = await runMergeExecution(makeInput(deploymentPendingReading(), fetchImpl));

    expect(outcome.ok && outcome.value.kind).toBe('merged');
    expect(calls.filter((call) => call.url.includes('/rules/branches/main'))).toHaveLength(2);
  });

  it('closes the records door on a pull request a person authored, whatever its paths', async () => {
    const pending = makeClassPort(recordsFiles);
    const owed = makeClassPort(recordsFiles);
    const human = { author: 'jimCresswell' };

    const onPending = await runMergeExecution(
      makeInput({ ...vendorRunPendingReading(), ...human }, pending.fetchImpl),
    );
    const onOwed = await runMergeExecution(
      makeInput({ ...owedLegReading(), ...human }, owed.fetchImpl),
    );

    expect(refusedState(onPending)).toBe('CHECKS-RUNNING');
    expect(refusedState(onOwed)).toBe('SILENT-WAIT-NO-REVIEWER');
    for (const outcome of [onPending, onOwed]) {
      expect(
        refusedEvidence(outcome).some((line) =>
          line.startsWith('records-class door closed: the author jimCresswell'),
        ),
      ).toBe(true);
    }
    for (const port of [pending, owed]) {
      expect(port.calls.some((call) => call.url.includes('/pulls/42/files'))).toBe(false);
      expect(port.calls.some((call) => call.url.includes('/rules/branches/'))).toBe(false);
    }
  });

  it('reads no files while a code-class pull request waits on its own required checks', async () => {
    const { fetchImpl, calls } = makeClassPort([
      { filename: 'agent-tools/src/merge-bot/merge.ts' },
    ]);
    const requiredPending = makeReading({
      reviews: [],
      checksGreenAt: null,
      namedChecks: [
        { name: 'run-quality-gates', bucket: 'pending' },
        { name: 'CodeQL', bucket: 'passed' },
      ],
      checks: { total: 2, passed: 1, failed: 0, pending: 1 },
    });

    const outcome = await runMergeExecution(makeInput(requiredPending, fetchImpl));

    expect(outcome.ok && outcome.value.kind === 'refused' && outcome.value.verdictState).toBe(
      'CHECKS-RUNNING',
    );
    expect(calls.some((call) => call.url.includes('/pulls/42/files'))).toBe(false);
  });
});
