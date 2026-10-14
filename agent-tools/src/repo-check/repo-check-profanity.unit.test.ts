import { describe, expect, it } from 'vitest';

import { PROFANITY_LEXICON_HOME, profanityUniverse } from './repo-check-profanity.js';

describe('profanityUniverse', () => {
  it('leaves out the binaries and everything under the lexicon home, keeping the order', () => {
    const staged = [
      'docs/a.md',
      'public/icon.png',
      `${PROFANITY_LEXICON_HOME}lexicon.ts`,
      'agent-tools/src/profanity-adjacent.ts',
    ];
    expect(profanityUniverse(staged, new Set(['public/icon.png']))).toStrictEqual([
      'docs/a.md',
      'agent-tools/src/profanity-adjacent.ts',
    ]);
  });

  it('is empty when nothing is staged', () => {
    expect(profanityUniverse([], new Set())).toStrictEqual([]);
  });
});
