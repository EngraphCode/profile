/**
 * The swear words the `profanity` topic replaces and what each becomes.
 *
 * @remarks
 * The Good Place censors cursing by swapping each swear for a near-homophone that is not
 * one: the wiki's list of words heard on air is fuck → fork, shit → shirt, bitch → bench,
 * ass → ash, dick → deck and cock → cork
 * (https://thegoodplace.fandom.com/wiki/Censored_Curse_Words), and the show's compounds
 * follow (bullshirt, motherforker, ashhole). The show leaves "kickass" alone, so the table
 * does too. Every other row fills a gap the show never reached, in the same manner, and
 * says so in `source`.
 *
 * Rows are whole words. The replacer carries common suffixes itself (forking, forked,
 * forkers), so a row is needed for a derived form only when the suffix rule would get it
 * wrong (crappy → cruddy, not crudy) or when the word is a compound the stem rule cannot
 * see inside (shithead, bullshit). A row marked `bare` is matched as the whole word only,
 * because its suffixed forms are ordinary English (cocky, half-cocked, damning evidence).
 */

/** Where a row comes from: heard on The Good Place, or this estate's fill-in. */
type LexiconSource = 'the-good-place' | 'fill-in';

export interface LexiconEntry {
  /** The swear, lowercase, letters only. */
  readonly from: string;
  /** What it becomes, lowercase. */
  readonly to: string;
  readonly source: LexiconSource;
  /** Whole word only: no suffix carried, since the suffixed forms are ordinary English. */
  readonly bare?: true;
}

function show(from: string, to: string): LexiconEntry {
  return { from, to, source: 'the-good-place' };
}

function fillIn(from: string, to: string): LexiconEntry {
  return { from, to, source: 'fill-in' };
}

function bare(entry: LexiconEntry): LexiconEntry {
  return { ...entry, bare: true };
}

export const PROFANITY_LEXICON: readonly LexiconEntry[] = [
  show('fuck', 'fork'),
  show('shit', 'shirt'),
  show('bitch', 'bench'),
  show('ass', 'ash'),
  bare(show('dick', 'deck')),
  bare(show('cock', 'cork')),
  show('bullshit', 'bullshirt'),
  show('motherfuck', 'motherfork'),
  show('asshole', 'ashhole'),
  fillIn('arse', 'ash'),
  fillIn('arsehole', 'ashhole'),
  fillIn('smartarse', 'smartash'),
  fillIn('shite', 'shirt'),
  fillIn('shitty', 'shirty'),
  fillIn('shithead', 'shirthead'),
  fillIn('shitshow', 'shirtshow'),
  fillIn('shitstorm', 'shirtstorm'),
  fillIn('shitload', 'shirtload'),
  fillIn('dipshit', 'dipshirt'),
  fillIn('fuckwit', 'forkwit'),
  fillIn('clusterfuck', 'clusterfork'),
  fillIn('dickhead', 'deckhead'),
  fillIn('cockup', 'corkup'),
  fillIn('jackass', 'jackash'),
  fillIn('dumbass', 'dumbash'),
  fillIn('badass', 'badash'),
  fillIn('smartass', 'smartash'),
  fillIn('bollock', 'bollard'),
  fillIn('bastard', 'buzzard'),
  fillIn('bugger', 'badger'),
  fillIn('wank', 'wink'),
  fillIn('twat', 'twit'),
  fillIn('cunt', 'count'),
  fillIn('piss', 'pish'),
  fillIn('crap', 'crud'),
  fillIn('crappy', 'cruddy'),
  bare(fillIn('damn', 'darn')),
  fillIn('dammit', 'darnit'),
  fillIn('damnit', 'darnit'),
  fillIn('goddamn', 'goddarn'),
  fillIn('goddammit', 'goddarnit'),
  fillIn('goddamnit', 'goddarnit'),
  fillIn('bloody', 'blooming'),
  fillIn('sodding', 'socking'),
];
