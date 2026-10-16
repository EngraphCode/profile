import { describe, expect, it } from 'vitest';

import {
  PROFANITY_LEXICON_HOME,
  isBinaryContent,
  profanityUniverse,
} from './repo-check-profanity.js';

describe('profanityUniverse', () => {
  it('leaves out everything under the lexicon home and nothing else, keeping the order', () => {
    const staged = [
      'docs/a.md',
      'public/icon.png',
      `${PROFANITY_LEXICON_HOME}lexicon.ts`,
      'agent-tools/src/profanity-adjacent.ts',
    ];
    expect(profanityUniverse(staged)).toStrictEqual([
      'docs/a.md',
      'public/icon.png',
      'agent-tools/src/profanity-adjacent.ts',
    ]);
  });

  it('is empty when nothing is staged', () => {
    expect(profanityUniverse([])).toStrictEqual([]);
  });
});

describe('isBinaryContent', () => {
  it('reads a NUL byte as binary, as git does, and anything else as text', () => {
    expect(isBinaryContent('\u0089PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR')).toBe(true);
    expect(isBinaryContent('')).toBe(false);
    expect(isBinaryContent('plain text with a tab\tand ümlauts\n')).toBe(false);
  });
});
