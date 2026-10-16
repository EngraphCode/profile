import { describe, expect, it } from 'vitest';

import {
  EXPERIENCE_REGISTER,
  PRACTICE_HOME,
  isBinaryContent,
  isInProfanityScope,
  isRootDocument,
  profanityUniverse,
} from './repo-check-profanity.js';

describe('isInProfanityScope', () => {
  it('reads the Practice and the root documents', () => {
    expect(isInProfanityScope(`${PRACTICE_HOME}memory/active/napkin.md`)).toBe(true);
    expect(isInProfanityScope(`${PRACTICE_HOME}rules/records-are-technical-not-emotional.md`)).toBe(
      true,
    );
    expect(isInProfanityScope(`${PRACTICE_HOME}family/typescript/hooks/pre-commit`)).toBe(true);
    expect(isInProfanityScope('README.md')).toBe(true);
    expect(isInProfanityScope('CONTRIBUTING.md')).toBe(true);
  });

  it('never reads the experience register, whose records keep their words as captured', () => {
    expect(isInProfanityScope(`${EXPERIENCE_REGISTER}2026-04-23-a-letter.md`)).toBe(false);
  });

  it('never reads content, a workspace or a generated surface', () => {
    expect(isInProfanityScope('jcdotnet/content/cv.content.json')).toBe(false);
    expect(isInProfanityScope('linkedin/profile.md')).toBe(false);
    expect(isInProfanityScope('docs/engineering/build-system.md')).toBe(false);
    expect(isInProfanityScope('agent-tools/README.md')).toBe(false);
    expect(isInProfanityScope('agent-tools/src/profanity/lexicon.ts')).toBe(false);
    expect(isInProfanityScope('.claude/rules/read-agent-md.md')).toBe(false);
    expect(isInProfanityScope('package.json')).toBe(false);
  });
});

describe('isRootDocument', () => {
  it('is a markdown file with no directory, and nothing else', () => {
    expect(isRootDocument('README.md')).toBe(true);
    expect(isRootDocument('README.txt')).toBe(false);
    expect(isRootDocument('docs/README.md')).toBe(false);
  });
});

describe('profanityUniverse', () => {
  it('keeps the staged files inside the scope, in order, and nothing else', () => {
    const staged = [
      'README.md',
      'jcdotnet/content/cv.content.json',
      `${PRACTICE_HOME}memory/active/napkin.md`,
      `${EXPERIENCE_REGISTER}2026-04-23-a-letter.md`,
      'agent-tools/src/profanity/lexicon.ts',
      `${PRACTICE_HOME}rules/a-rule.md`,
    ];
    expect(profanityUniverse(staged)).toStrictEqual([
      'README.md',
      `${PRACTICE_HOME}memory/active/napkin.md`,
      `${PRACTICE_HOME}rules/a-rule.md`,
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
