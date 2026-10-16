import { reviewConfigurationEvidence } from './review-configuration.js';
import type { PrStateReading, ReviewRun } from './state-types.js';

/**
 * The evidence lines every reviewer-leg verdict carries about the reading it
 * was made from: the review configuration the legs were read against, whether
 * the expected set was declared, and the run surface's gaps. One owner, so a
 * settled verdict and a blocked one name the same grounds the same way.
 *
 * @packageDocumentation
 */

/** The runs mapped to the PR and still in flight; none when the leg is unavailable. */
export function liveRuns(reading: PrStateReading): readonly ReviewRun[] {
  return reading.reviewRuns.kind === 'read'
    ? reading.reviewRuns.runs.filter((run) => run.completedAt === null)
    : [];
}

/**
 * The run surface's gaps, named on every verdict that carries the runs leg.
 * A truncated read that still observed a live run says so through the run's
 * own line (roundInFlight), not through a "none observed" line beside it.
 */
export function runsEvidence(reading: PrStateReading): string[] {
  if (reading.reviewRuns.kind === 'unavailable') {
    return [
      `review-run surface unavailable (${reading.reviewRuns.reason}): no live run observed; the review round is measured by the request surface, which this read carries`,
    ];
  }
  const note = reading.reviewRuns.note === undefined ? [] : [reading.reviewRuns.note];
  return reading.reviewRuns.truncated === true && liveRuns(reading).length === 0
    ? [
        ...note,
        'review-run surface incomplete: no live run observed in the part read; the review round is measured by the request surface, which this read carries',
      ]
    : note;
}

function expectedSetEvidence(reading: PrStateReading): string[] {
  return reading.expectedDeclared
    ? []
    : [
        'expected reviewer set DEFAULTED from the observed surface — declare --expect for the first-round guarantee',
      ];
}

/** The configuration, the expected set's source and the run surface, on every reviewer-leg verdict. */
export function readingEvidence(reading: PrStateReading): string[] {
  return [
    reviewConfigurationEvidence(reading.reviewConfiguration),
    ...expectedSetEvidence(reading),
    ...runsEvidence(reading),
  ];
}
