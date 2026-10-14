import { describe, expect, it } from 'vitest';

import { PROFANITY_LEXICON } from './lexicon.js';
import { replaceProfanity } from './replace.js';

describe('replaceProfanity', () => {
  it.each([
    ['fuck off', 'fork off'],
    ['that is bullshit', 'that is bullshirt'],
    ['son of a bitch', 'son of a bench'],
    ['kiss my ass', 'kiss my ash'],
    ['what a dick', 'what a deck'],
    ['cock block', 'cork block'],
  ])('replaces the show’s words: %s', (text, expected) => {
    expect(replaceProfanity(text).text).toBe(expected);
  });

  it('keeps the case of the original', () => {
    expect(replaceProfanity('Fuck. FUCK. fuck.').text).toBe('Fork. FORK. fork.');
  });

  it.each([
    ['Finish the fucking basic editor', 'Finish the forking basic editor'],
    ['for fuck sake', 'for fork sake'],
    ["for fuck's sake", "for fork's sake"],
    ['somebody royally fucked up', 'somebody royally forked up'],
    ['the fuckers', 'the forkers'],
    ["fuckin' hell", "forkin' hell"],
    ['shitting and shitty and shite', 'shirting and shirty and shirt'],
    ['the shittiest editor, shittier still', 'the shirtiest editor, shirtier still'],
    ['bitches', 'benches'],
    ['crappy', 'cruddy'],
    ['crapped and twatting', 'crudded and twitting'],
    ['half-arsed', 'half-ashed'],
    ['arsing about, two arses, shites', 'ashing about, two ashes, shirts'],
    ['bullshitting motherfuckers', 'bullshirting motherforkers'],
    ['papering over a fuck up', 'papering over a fork up'],
    ['a sodding bloody wanker', 'a socking blooming winker'],
    ['bollocks, a right bollocking', 'bollards, a right bollarding'],
    ['goddammit and goddamnit', 'goddarnit and goddarnit'],
    [
      'clusterfuck shitload dipshit smartarse cockup',
      'clusterfork shirtload dipshirt smartash corkup',
    ],
  ])('carries the suffix and the shape: %s', (text, expected) => {
    expect(replaceProfanity(text).text).toBe(expected);
  });

  it('finds a swear inside underscore emphasis and snake_case, which a word-boundary match would miss', () => {
    expect(replaceProfanity('_fucking_ hell, fuck_this, __shit__').text).toBe(
      '_forking_ hell, fork_this, __shirt__',
    );
  });

  it('matches whole words only, and leaves kickass alone as the show does', () => {
    const text = 'class assessment in the cockpit; a passion for shiitake; kickass; Hancock';
    expect(replaceProfanity(text)).toStrictEqual({ text, replacements: [] });
  });

  it('leaves the ordinary English that a bare row would otherwise reach through a suffix', () => {
    const text = 'cocky, half-cocked, a cocker spaniel, a dicky heart, damning evidence';
    expect(replaceProfanity(text)).toStrictEqual({ text, replacements: [] });
    expect(replaceProfanity('damn it, cock, dick').text).toBe('darn it, cork, deck');
  });

  it('reports every replacement with its line, in line order', () => {
    const result = replaceProfanity('one\ntwo fuck\nthree Shit, bitch\n');
    expect(result.text).toBe('one\ntwo fork\nthree Shirt, bench\n');
    expect(result.replacements).toStrictEqual([
      { line: 2, from: 'fuck', to: 'fork' },
      { line: 3, from: 'Shit', to: 'Shirt' },
      { line: 3, from: 'bitch', to: 'bench' },
    ]);
  });

  it('is a fixed point: the censored forms are not swears', () => {
    const censored = PROFANITY_LEXICON.map((entry) => `${entry.to} ${entry.to}ing ${entry.to}s`);
    const text = censored.join('\n');
    expect(replaceProfanity(text)).toStrictEqual({ text, replacements: [] });
  });
});

describe('the lexicon', () => {
  it('holds lowercase whole words, each once', () => {
    const froms = PROFANITY_LEXICON.map((entry) => entry.from);
    expect(new Set(froms).size).toBe(froms.length);
    for (const entry of PROFANITY_LEXICON) {
      expect(entry.from).toMatch(/^[a-z]+$/u);
      expect(entry.to).toMatch(/^[a-z]+$/u);
    }
  });

  it('names the six words the wiki lists as heard on the show', () => {
    const heard = PROFANITY_LEXICON.filter((entry) => entry.source === 'the-good-place').map(
      (entry) => `${entry.from}>${entry.to}`,
    );
    expect(heard).toEqual(
      expect.arrayContaining([
        'fuck>fork',
        'shit>shirt',
        'bitch>bench',
        'ass>ash',
        'dick>deck',
        'cock>cork',
      ]),
    );
  });
});
