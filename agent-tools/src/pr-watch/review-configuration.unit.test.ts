import { describe, expect, it } from 'vitest';

import { parseReviewConfiguration, reviewConfigurationEvidence } from './review-configuration.js';

describe('parseReviewConfiguration', () => {
  it('reads the copilot_code_review rule as configured, with both switches', () => {
    expect(
      parseReviewConfiguration([
        { type: 'deletion' },
        {
          type: 'copilot_code_review',
          parameters: { review_on_push: false, review_draft_pull_requests: false },
        },
      ]),
    ).toStrictEqual({
      ok: true,
      value: { kind: 'configured', reviewOnPush: false, reviewDraft: false },
    });
  });

  it('reads a review on push by any of several Copilot rules as a review on push', () => {
    const parsed = parseReviewConfiguration([
      {
        type: 'copilot_code_review',
        parameters: { review_on_push: false, review_draft_pull_requests: true },
      },
      {
        type: 'copilot_code_review',
        parameters: { review_on_push: true, review_draft_pull_requests: false },
      },
    ]);
    expect(parsed).toStrictEqual({
      ok: true,
      value: { kind: 'configured', reviewOnPush: true, reviewDraft: true },
    });
  });

  it('reads a branch without the rule as absent', () => {
    expect(parseReviewConfiguration([{ type: 'required_status_checks' }])).toStrictEqual({
      ok: true,
      value: { kind: 'absent' },
    });
  });

  it.each([
    ['a Copilot rule without parameters', [{ type: 'copilot_code_review' }]],
    ['a Copilot rule with empty parameters', [{ type: 'copilot_code_review', parameters: {} }]],
    ['a response that is not a rules list', { message: 'Not Found' }],
  ])('refuses %s rather than reading it as an unconfigured branch', (_case, value) => {
    expect(parseReviewConfiguration(value).ok).toBe(false);
  });

  it('names each state in one evidence line, carrying the decision tokens', () => {
    expect(reviewConfigurationEvidence({ kind: 'unread', reason: 'no gh' })).toContain(
      'unread (no gh)',
    );
    expect(reviewConfigurationEvidence({ kind: 'absent' })).toContain(
      'no copilot_code_review rule',
    );
    const configured = reviewConfigurationEvidence({
      kind: 'configured',
      reviewOnPush: false,
      reviewDraft: true,
    });
    expect(configured).toContain('review_on_push=false');
    expect(configured).toContain('review_draft_pull_requests=true');
  });
});
