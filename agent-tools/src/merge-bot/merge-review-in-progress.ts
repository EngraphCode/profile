import type { PrStateReading, PrVerdict } from '../pr-watch/state-types.js';

/**
 * What GitHub shows in progress for an expected reviewer, read from the
 * surfaces themselves rather than from the aggregate verdict (the owner's word
 * of 2026-10-11: "if github says a review is in progress, we don't merge, we
 * wait for that review"). The merge door's records class consults this before
 * it opens; the verdict alone names only the most blocking leg.
 *
 * @packageDocumentation
 */

/** A reviewer login as GitHub spells it on a check-run: lower-cased, the `[bot]` suffix dropped. */
export function reviewerKey(name: string): string {
  return name.toLowerCase().replace(/\[bot\]$/u, '');
}

/**
 * What GitHub shows in progress for an expected reviewer, read from the
 * surfaces themselves rather than from the aggregate verdict: an outstanding
 * request, a live run mapped to the pull request, a pending check-run in the
 * reviewer's own name. The verdict names only the most blocking leg, so
 * SILENT-WAIT-NO-REVIEWER (one reviewer never requested) can stand while
 * another expected reviewer's request is outstanding, and the timeout arm
 * reads a request still outstanding as a skip; the owner's word of 2026-10-11
 * binds on the surfaces: "if github says a review is in progress, we don't
 * merge, we wait for that review".
 */
export function reviewInProgress(reading: PrStateReading): readonly string[] {
  const expected = new Set(reading.expectedReviewers.map(reviewerKey));
  const requested = reading.reviewRequests
    .filter((login) => expected.has(reviewerKey(login)))
    .map((login) => `expected reviewer requested: ${login}`);
  const live =
    reading.reviewRuns.kind === 'read'
      ? reading.reviewRuns.runs
          .filter((run) => run.completedAt === null)
          .map((run) => `review run live: ${run.id} (${run.name})`)
      : [];
  const pendingRuns = reading.namedChecks
    .filter((check) => check.bucket === 'pending' && expected.has(reviewerKey(check.name)))
    .map((check) => `reviewer check-run pending: ${check.name}`);
  return [...requested, ...live, ...pendingRuns];
}

/** The records door held open as a wait: the verdict rewritten to the in-flight state, the in-progress review named. */
export function heldForReview(verdict: PrVerdict, inProgress: readonly string[]): PrVerdict {
  return {
    state: 'WAITING-REVIEW-RUN-LIVE',
    evidence: [
      `records-class: a review is in progress and the merge waits for it (the owner's word of 2026-10-11), never for a timer; the verdict as read was ${verdict.state}`,
      ...inProgress,
      ...verdict.evidence,
    ],
  };
}
