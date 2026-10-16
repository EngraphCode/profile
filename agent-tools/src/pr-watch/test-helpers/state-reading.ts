import type { PrStateReading } from '../state-types.js';

/**
 * The settled-PR reading the `pr state` verdict specs start from: green
 * checks anchored at 12:00Z, one tip-bound Copilot review at 12:05Z, no
 * threads open, the review configuration unread. Variation is expressed
 * through `overrides` at call sites, never by editing this base
 * (consolidate-at-second-consumer: the verdict suites share one premise).
 * The merge-bot suites carry their own base in
 * `merge-bot/test-helpers/pr-state-reading.ts`, anchored to their own clock.
 */

export const TIP = 'a'.repeat(40);
export const OLD_TIP = 'b'.repeat(40);
export const COPILOT = 'copilot-pull-request-reviewer';
/** A now safely past every fixture timestamp's checks-green timeout. */
export const LATE_NOW = '2026-07-21T13:00:00Z';

export function settledReading(overrides: Partial<PrStateReading> = {}): PrStateReading {
  return {
    number: 999,
    url: 'https://github.com/jimCresswell/jimcresswell.net/pull/999',
    author: 'app/jimbot-of-the-devonshire-jimbots',
    state: 'OPEN',
    isDraft: false,
    mergeable: 'MERGEABLE',
    mergeStateStatus: 'BLOCKED',
    headRefOid: TIP,
    checks: { total: 3, passed: 3, failed: 0, pending: 0 },
    namedChecks: [
      { name: 'secret-scan', bucket: 'passed' },
      { name: 'SonarCloud Code Analysis', bucket: 'passed' },
      { name: 'CI / static-checks', bucket: 'passed' },
    ],
    checksGreenAt: '2026-07-21T12:00:00Z',
    reviewThreads: { total: 4, unresolved: 0 },
    autoMergeArmed: false,
    reviewRequests: [],
    expectedReviewers: [COPILOT],
    expectedDeclared: true,
    reviews: [
      {
        id: 'PRR_1',
        author: COPILOT,
        state: 'COMMENTED',
        body: 'Reviewed 2 of 2 files.',
        commitOid: TIP,
        submittedAt: '2026-07-21T12:05:00Z',
      },
    ],
    reviewRuns: { kind: 'read', runs: [] },
    issueComments: [],
    reviewConfiguration: { kind: 'unread', reason: 'the test reading declares none' },
    ...overrides,
  };
}
