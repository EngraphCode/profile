/**
 * Per-(reviewer, tip) leg computation for `pr state`, executing the
 * pr-lifecycle SKILL review-round state machine item 3 (the SKILL stays
 * canonical): each EXPECTED reviewer's leg reads SATISFIED, SKIPPED, or OWED,
 * evaluated against the FULL review harvest — never the per-author
 * `latestReviews` pointer, which moves BACKWARDS when an older-tip review job
 * completes after a newer push (the false-silent-wait class).
 *
 * The expected reviewer set is a DECLARED input (SKILL: read from the
 * repository's automatic-review configuration, declared by the shepherd) —
 * the caller supplies it; this module never infers it from who happened to
 * review.
 */

import { COPILOT_REVIEWER_LOGIN, type ReviewConfiguration } from './review-configuration.js';

/** One review from the full paginated harvest (`reviews` connection). */
export interface HarvestedReview {
  /** The review's own node id: the key a body-only finding's disposition line names. */
  readonly id: string;
  readonly author: string;
  /** `APPROVED` | `CHANGES_REQUESTED` | `COMMENTED` | `DISMISSED` | … */
  readonly state: string;
  readonly body: string;
  /** Empty when gh omits the reviewed commit. */
  readonly commitOid: string;
  readonly submittedAt: string;
}

/**
 * One expected reviewer's leg for the current tip. A SKIPPED leg carries its
 * reason STRUCTURALLY — settlement classifies on `skipReason`, never on the
 * prose `detail` (security D1, 2026-08-06): a quota skip is an owner-ruled
 * settled state, while a timeout skip means THAT expected reviewer never
 * reviewed this tip and must never read merge-eligible — other legs in the
 * same round may well be SATISFIED.
 */
export type ReviewerLeg =
  | {
      readonly reviewer: string;
      /** UNOWED: the configuration reviews no later push and nothing is requested on this tip. */
      readonly state: 'SATISFIED' | 'OWED' | 'UNOWED';
      readonly detail: string;
    }
  | {
      readonly reviewer: string;
      readonly state: 'SKIPPED';
      readonly skipReason: 'quota' | 'timeout';
      readonly detail: string;
    };

export interface ComputeReviewerLegsInput {
  readonly headRefOid: string;
  readonly expectedReviewers: readonly string[];
  readonly reviews: readonly HarvestedReview[];
  readonly reviewRequests: readonly string[];
  /** Max completedAt across green checks; null while checks are not yet green. */
  readonly checksGreenAt: string | null;
  /** Injected clock (ISO) — the checks-green timeout leg is time-bound. */
  readonly now: string;
  /** The base branch's automatic-review configuration; `unread` keeps every leg owed. */
  readonly reviewConfiguration: ReviewConfiguration;
}

/**
 * SKILL item 3/4: the checks-green timeout and the settled quiet window (more
 * than 10 min) that ends a leg nobody serves. The only clock in settlement:
 * item 4 reads measured state (every leg landed, no expected reviewer
 * requested, no run live); the pull-request tally reads the same window.
 */
export const QUIET_WINDOW_MS = 10 * 60 * 1000;

// Skip-marker classification (SKILL: substantive reviews vs SKIPPED markers).
// A skip phrase alone declares NO REVIEW OCCURRED — such a body must never
// read SATISFIED. Only a marker whose scope is evaluable (a quota/billing
// declaration, per the owner ruling 2026-07-21) settles the leg as SKIPPED
// immediately; an unevaluable marker ("service unavailable") falls through
// to the checks-green timeout arm instead.
const SKIP_PATTERN = /review skipped|unable to review/iu;
const QUOTA_PATTERN = /spend limit|overage|quota/iu;

function isSkipMarker(body: string): boolean {
  return SKIP_PATTERN.test(body);
}

function isScopeDeclaredSkip(body: string): boolean {
  return isSkipMarker(body) && QUOTA_PATTERN.test(body);
}

// Binding is EXACT: the full harvest retains historical reviews, so a
// missing/empty commit oid must stay UNPROVEN — a wildcard would let an old
// null-commit review satisfy every later push forever. The conservative wait
// this creates is already bounded by the checks-green timeout leg.
function bindsTip(review: HarvestedReview, headRefOid: string): boolean {
  return review.commitOid === headRefOid;
}

// Logins are case-insensitive; compare through one casing so a declared
// `--expect jimcresswell` matches the API's `jimCresswell` (display keeps the
// declared form). An app login's `[bot]` suffix is the REST spelling; GraphQL
// carries Bot logins without it on both the reviews harvest and the
// review-request surface, and the `--expect` grammar admits either form, so
// the suffix is stripped on both sides of every comparison.
const BOT_SUFFIX = /\[bot\]$/u;

/** The one login comparison key: lower-cased, the app suffix stripped. */
export function normaliseLogin(login: string): string {
  return login.toLowerCase().replace(BOT_SUFFIX, '');
}

// A PENDING (draft, unsubmitted) review has not landed: it must neither
// satisfy a leg nor act as a skip marker.
export function hasLanded(review: HarvestedReview): boolean {
  return review.state !== 'PENDING';
}

// Signed self-authored disposition replies posted through the shared owner
// credential carry the PDR-027 identity-tuple signature ("— <name> (<hex6>)")
// on their FINAL line; the canonical contract excludes them from the body
// tally and they must not pollute a defaulted expected-reviewer set. The
// check is two linear probes, not one ambiguous regex (S8786 backtracking).
// The canonical parenthesised field is the BARE session_id_prefix (the join
// key — pr-lifecycle SKILL); the optional `-hex3` arm additionally tolerates
// the MCP-145 display token a seat may paste from a rendered surface (the id
// tail can be uppercase: stored ids are lowercase but externally-parsed
// blocks are rendered verbatim). The prefix arm deliberately stays exactly
// six lowercase hex and is NEVER widened toward the schema-unbounded prefix
// domain: a false POSITIVE here is silently destructive at both consumers —
// it removes the reply from body-tally evidence (settlement.ts) and, most
// dangerously, drops its author from the DEFAULTED expected-reviewer set
// (state-gh.ts), which can settle a round without a real reviewer — while a
// false NEGATIVE costs one wrong body-tally evidence line and, in a defaulted
// set, an unnecessary leg for the reply's author: on the reply's own tip the
// reply itself satisfies it (state-gh.ts adds the author; computeReviewerLegs
// reads the tip-bound reply as landed), and on every later tip it reads OWED
// until the timeout arm ends it as SETTLED-NO-REVIEW, a wrong read that is
// never a wrong merge — so the ratified non-hex,
// uppercase-prefix, and hyphen-bearing-prefix rows (the 2a token table in
// tests/collaboration-state/visual-disambiguator.unit.test.ts) are
// deliberate non-matches, and this stays a predicate, never an extractor
// (the token is non-injective; no decode of it can be correct). Reviewer-leg
// SATISFACTION is deliberately unfiltered: a signed self-reply by a DECLARED
// expected reviewer still satisfies that leg — the exclusion binds only the
// body tally and the defaulted set.
const SIGNATURE_SUFFIX = /\([0-9a-f]{6}(?:-[0-9a-fA-F]{3})?\)$/u;

export function isSignedSelfReply(body: string): boolean {
  const lastLine = (body.trimEnd().split('\n').at(-1) ?? '').trim();
  return lastLine.startsWith('—') && SIGNATURE_SUFFIX.test(lastLine);
}

/**
 * A tip the configuration does not review: the base branch's Copilot rule
 * reviews no later push (`review_on_push` false), the vendor has already
 * reviewed an earlier tip of this pull request (its one configured review
 * happened; before it, the leg stays owed so the first review is awaited
 * rather than raced), and nothing is requested on this tip. The leg then
 * settles as UNOWED, and a round whose threads are all resolved settles; a
 * review wanted on such a tip is requested by hand, and the request makes the
 * leg owed again. Binds Copilot's leg only: the rule is Copilot's. Applies
 * only to a tip the vendor has said nothing about: any body bound to this tip
 * (a substantive review, a quota marker, an unevaluable marker after a failed
 * request) is classified by the arms built for it, never by the
 * configuration's silence.
 */
function unowedByConfiguration(
  input: ComputeReviewerLegsInput,
  reviewer: string,
  tipBound: readonly HarvestedReview[],
): ReviewerLeg | undefined {
  const configuration = input.reviewConfiguration;
  if (tipBound.length > 0 || configuration.kind !== 'configured' || configuration.reviewOnPush) {
    return undefined;
  }
  if (normaliseLogin(reviewer) !== COPILOT_REVIEWER_LOGIN) {
    return undefined;
  }
  const requested = input.reviewRequests.some(
    (login) => normaliseLogin(login) === normaliseLogin(reviewer),
  );
  const reviewedAnEarlierTip = input.reviews.some(
    (review) =>
      normaliseLogin(review.author) === normaliseLogin(reviewer) &&
      hasLanded(review) &&
      !isSkipMarker(review.body) &&
      review.commitOid !== '',
  );
  if (requested || !reviewedAnEarlierTip) {
    return undefined;
  }
  return {
    reviewer,
    state: 'UNOWED',
    detail:
      'not owed on this tip: the base branch reviews no later push (copilot_code_review review_on_push=false), the vendor reviewed an earlier tip of this pull request, and nothing is requested here; request a review by hand when one is wanted',
  };
}

function elapsedMs(fromIso: string, nowIso: string): number {
  return Date.parse(nowIso) - Date.parse(fromIso);
}

function legFor(input: ComputeReviewerLegsInput, reviewer: string): ReviewerLeg {
  const tipBound = input.reviews.filter(
    (review) =>
      normaliseLogin(review.author) === normaliseLogin(reviewer) &&
      hasLanded(review) &&
      bindsTip(review, input.headRefOid),
  );
  if (tipBound.some((review) => !isSkipMarker(review.body))) {
    return { reviewer, state: 'SATISFIED', detail: 'review binds current tip' };
  }
  if (tipBound.some((review) => isScopeDeclaredSkip(review.body))) {
    return {
      reviewer,
      state: 'SKIPPED',
      skipReason: 'quota',
      detail: 'tip-bound quota/skip marker (scope-declared; owner ruling 2026-07-21)',
    };
  }
  const unowed = unowedByConfiguration(input, reviewer, tipBound);
  if (unowed !== undefined) {
    return unowed;
  }
  const unevaluableMarker = tipBound.some((review) => isSkipMarker(review.body));
  if (input.checksGreenAt !== null && elapsedMs(input.checksGreenAt, input.now) > QUIET_WINDOW_MS) {
    return {
      reviewer,
      state: 'SKIPPED',
      skipReason: 'timeout',
      detail: `timeout: no ${unevaluableMarker ? 'substantive ' : ''}tip-bound review more than 10 min after checks green (${input.checksGreenAt})`,
    };
  }
  return {
    reviewer,
    state: 'OWED',
    detail: unevaluableMarker
      ? 'tip-bound skip marker with unevaluable scope — no substantive review; awaiting the timeout arm'
      : 'no review binds the current tip',
  };
}

/** Compute every expected reviewer's leg for the current tip, in declared order. */
export function computeReviewerLegs(input: ComputeReviewerLegsInput): ReviewerLeg[] {
  return input.expectedReviewers.map((reviewer) => legFor(input, reviewer));
}
