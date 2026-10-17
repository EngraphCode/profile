import { normaliseLogin } from './reviewer-legs.js';
import type { ReviewerLeg } from './reviewer-legs.js';

/**
 * The fold from per-reviewer legs to the one blocking verdict (pr-lifecycle
 * SKILL item 4's gate over item 3's legs): which OWED leg, if any, holds the
 * round, and whether it is a round in flight or a leg nobody is serving.
 *
 * @packageDocumentation
 */

/** The most blocking unresolved leg, or `settled` when nothing is OWED. */
export type BlockingLegVerdict =
  | { readonly kind: 'settled' }
  | {
      readonly kind: 'SILENT-WAIT-NO-REVIEWER' | 'WAITING-REVIEW-RUN-LIVE';
      readonly reviewer: string;
    };

export interface MostBlockingLegInput {
  readonly legs: readonly ReviewerLeg[];
  /** Logins with an outstanding review request, from the GraphQL surface. */
  readonly reviewRequests: readonly string[];
}

/**
 * Resolve OWED legs to the most blocking per-reviewer verdict. An outstanding
 * request IS the round in flight: the platform clears it when the review
 * lands, and no other surface carries a Copilot review run (the agent-task
 * list never did, so reading "requested with no mapped run" as dead read
 * every Copilot review in progress as silent — PR #60, 2026-09-13). An
 * unrequested owed reviewer outranks a requested one, so one
 * reviewer's round in flight never masks another reviewer's stalled leg; a
 * request never served is ended by the checks-green timeout arm (SKILL item
 * 3), never by a deadness inference.
 */
export function mostBlockingLeg(input: MostBlockingLegInput): BlockingLegVerdict {
  const owed = input.legs.filter((leg) => leg.state === 'OWED');
  const requested = new Set(input.reviewRequests.map((login) => normaliseLogin(login)));

  const unrequested = owed.find((leg) => !requested.has(normaliseLogin(leg.reviewer)));
  if (unrequested !== undefined) {
    return { kind: 'SILENT-WAIT-NO-REVIEWER', reviewer: unrequested.reviewer };
  }
  const waiting = owed[0];
  if (waiting !== undefined) {
    return { kind: 'WAITING-REVIEW-RUN-LIVE', reviewer: waiting.reviewer };
  }
  return { kind: 'settled' };
}
