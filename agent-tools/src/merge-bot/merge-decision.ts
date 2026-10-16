import type { PrVerdict } from '../pr-watch/state-types.js';
import { describeOffenders, type ChangeClass } from './change-class.js';

/**
 * The pure verdict→action mapping for `merge-bot merge` (MCP-508 slice 1).
 *
 * The command acts on exactly one verdict state for a code-class pull request —
 * `SETTLE-READY` — and refuses everything else with the verdict's own name in
 * the reason, so a supervisor reads the outcome by name, never by inference.
 * A records-class pull request (`change-class.ts`: every changed path
 * documentation or Practice prose, computed from the diff) also merges on the
 * verdicts where checks are green, zero threads are unresolved, no suppressed
 * finding is held and NO REVIEW IS IN PROGRESS — the leg never requested, never
 * started, or quota-skipped — the owner's ruling of 2026-09-03 ("Change the
 * merge policy instead") as behaviour, bounded by his word of 2026-10-11: "if
 * github says a review is in progress, we don't merge, we wait for that
 * review", and "we don't need a timeout". An outstanding request or a live
 * vendor run is therefore a wait, never a merge, for every class; a review that
 * lands after a merge made with none in progress is harvested then. The two
 * additional gates carry the estate's
 * standing rulings: merge commits must still be allowed by the repo settings
 * (never a squash fallback), and the expected reviewer set must have been
 * DECLARED — a defaulted set can omit a configured-but-never-requested
 * reviewer, letting settlement read `SETTLE-READY` on a round that owed a leg.
 */

/** The decision: merge (with the ground when a class, not the verdict, opened the door), or a typed refusal. */
export type MergeDecision =
  | { readonly kind: 'merge'; readonly ground?: string }
  | { readonly kind: 'refuse'; readonly reason: string };

/**
 * The verdicts a bounded poll may legitimately outwait: each resolves by
 * waiting alone — checks finishing, a review round in flight (an outstanding
 * request or a live run) completing. Every other verdict needs an operator
 * act or is terminal, so polling on it would burn the budget silently; the
 * CLI refuses those immediately instead. Exported as the ONE authority the
 * usage text derives from — the list must never be transcribed by hand.
 */
export const SETTLEMENT_WAIT_STATES = [
  'CHECKS-RUNNING',
  'WAITING-REVIEW-RUN-LIVE',
] as const satisfies readonly PrVerdict['state'][];

/**
 * The verdicts a records-class pull request merges on: SETTLE-READY and the
 * reviewer-leg states the verdict ladder reaches only after every check is
 * green, every thread resolved, no suppressed finding held and the base
 * current (`states.ts` precedence), where NO review is in progress: nothing
 * requested and no run observed, or a quota-skipped leg. WAITING-REVIEW-RUN-LIVE
 * — an outstanding request or a live run — is a review in progress and is
 * waited for (the owner's word of 2026-10-11: "we don't need a timeout"), and
 * so is SETTLED-NO-REVIEW, the timeout arm's reading of a request still
 * outstanding ten minutes after checks green: GitHub still shows that review
 * in progress, so the door never opens on it (the review of 2026-10-16). The
 * membership is a necessary condition only; the records door also reads the
 * request and run surfaces directly (`merge-records-checks.ts`, reviewInProgress),
 * since SILENT-WAIT-NO-REVIEWER names the most blocking leg and can stand while
 * another expected reviewer's request is outstanding. Exported as the one
 * authority the usage text and the skills derive from.
 */
export const RECORDS_CLASS_MERGE_STATES = [
  'SETTLE-READY',
  'SILENT-WAIT-NO-REVIEWER',
  'QUOTA-SKIPPED',
] as const satisfies readonly PrVerdict['state'][];

/** Widened at the declaration, so membership needs no assertion. */
const WAIT_STATE_SET: ReadonlySet<PrVerdict['state']> = new Set(SETTLEMENT_WAIT_STATES);
const RECORDS_MERGE_SET: ReadonlySet<PrVerdict['state']> = new Set(RECORDS_CLASS_MERGE_STATES);

export function verdictAwaitsSettlement(state: PrVerdict['state']): boolean {
  return WAIT_STATE_SET.has(state);
}

export function verdictMergesRecordsClass(state: PrVerdict['state']): boolean {
  return RECORDS_MERGE_SET.has(state);
}

export interface MergeDecisionInput {
  readonly verdict: PrVerdict;
  readonly allowMergeCommit: boolean;
  readonly expectedDeclared: boolean;
  /** The class read from the diff, when the caller read it; absent, only SETTLE-READY merges. */
  readonly changeClass?: ChangeClass;
}

/** The ground a records class supplies when the verdict alone would not merge. */
function recordsGround(input: MergeDecisionInput): string | undefined {
  const { verdict, changeClass } = input;
  if (changeClass?.kind !== 'records' || verdict.state === 'SETTLE-READY') {
    return undefined;
  }
  if (!verdictMergesRecordsClass(verdict.state)) {
    return undefined;
  }
  return (
    `records-class (${changeClass.pathCount} changed paths, all documentation or Practice prose): ` +
    `merged at checks green with zero unresolved threads and no review in progress on verdict ` +
    `${verdict.state}; a review that lands after this merge is harvested then (the owner ruling of ` +
    '2026-09-03; his word of 2026-10-11: a review in progress is waited for, never a timer)'
  );
}

/** Why a code-class pull request stays at the door on a verdict the records class would pass. */
function codeClassSuffix(input: MergeDecisionInput): string {
  const { verdict, changeClass } = input;
  if (changeClass?.kind !== 'code' || !verdictMergesRecordsClass(verdict.state)) {
    return '';
  }
  const named =
    changeClass.offenders.length === 0
      ? 'no changed path'
      : describeOffenders(changeClass.offenders);
  return `; a records-class pull request would merge here, but the diff is code-class (${named})`;
}

export function decideMergeAction(input: MergeDecisionInput): MergeDecision {
  if (!input.expectedDeclared) {
    return {
      kind: 'refuse',
      reason:
        'the expected reviewer set was DEFAULTED from the observed surface — declare --expect from the repository automatic-review configuration; a defaulted set cannot back an irreversible merge',
    };
  }
  if (input.verdict.state === 'MERGED') {
    return {
      kind: 'refuse',
      reason: 'verdict MERGED — the PR was merged by another actor; this invocation merged nothing',
    };
  }
  const ground = recordsGround(input);
  if (input.verdict.state !== 'SETTLE-READY' && ground === undefined) {
    return {
      kind: 'refuse',
      reason: `verdict ${input.verdict.state} — only SETTLE-READY merges${codeClassSuffix(input)}`,
    };
  }
  if (!input.allowMergeCommit) {
    return {
      kind: 'refuse',
      reason:
        'repo settings no longer allow merge commits (allow_merge_commit is false) — the never-squash ruling stands; restore the setting rather than changing method',
    };
  }
  return ground === undefined ? { kind: 'merge' } : { kind: 'merge', ground };
}
