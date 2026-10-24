import { describe, expect, it } from 'vitest';

import { reportFile } from '../model/report.js';
import type { StructureTable } from '../model/structure-table.js';

import { renderDiff } from './diff-render.js';

const table: StructureTable = {
  sections: [
    { heading: 'About', body: 'paragraphs', entries: false, limit: 2600, entryLimit: null },
    { heading: 'Experience', body: 'paragraphs', entries: true, limit: null, entryLimit: 2000 },
    { heading: 'Skills', body: 'list', entries: false, limit: null, entryLimit: null },
  ],
  folds: [10, 20],
};

/** The same table with a position's limit a short entry can pass. */
const tightTable: StructureTable = {
  ...table,
  sections: table.sections.map((section) =>
    section.heading === 'Experience' ? { ...section, entryLimit: 5 } : section,
  ),
};

const profile = (about: string, entry: string, skills = '- Tooling'): string =>
  `# Profile\n\n## About\n\nStatus: approved\n\n${about}\n\n## Experience\n\nStatus: drafted\n\n### Role · Place · 2020 – Present\n\nStatus: drafted\n\n${entry}\n\n## Skills\n\nStatus: open\n\n${skills}\n`;

const render = (before: string, after: string, structure = table): string =>
  renderDiff({ before: reportFile(before, structure), after: reportFile(after, structure) });

describe('renderDiff', () => {
  it('says the review matches the source and collapses every section when nothing differs', () => {
    const text = profile('About copy.', 'Entry copy.');

    const html = render(text, text);

    expect(html).toContain(
      '<div class="strip strip-ok">No differences: the review matches the source.</div>',
    );
    expect(html).toContain(
      '<details class="diff-section"><summary><h2>About <span class="badge status-open">unchanged</span></h2></summary>',
    );
    expect(html).not.toContain('<section class="diff-section">');
  });

  it('marks the removed words on the before side and the added words on the after side of a changed paragraph', () => {
    const html = render(profile('I built it.', 'Entry.'), profile('I rebuilt it.', 'Entry.'));

    expect(html).toContain('<div class="strip strip-ok">1 of 3 sections changed: About</div>');
    expect(html).toContain(
      '<section class="diff-section"><h2>About <span class="badge changed">changed</span></h2>',
    );
    expect(html).toContain(
      '<div class="row row-changed"><div class="cell mark"><span class="badge marker">changed</span></div><div class="cell before"><p>I <del>built</del> it.</p></div><div class="cell after"><p>I <ins>rebuilt</ins> it.</p></div></div>',
    );
  });

  it('names a pair that differs only in spacing, where no word is marked', () => {
    const html = render(profile('A  b.', 'Entry.'), profile('A b.', 'Entry.'));

    expect(html).toContain(
      '<div class="row row-changed"><div class="cell mark"><span class="badge marker">spacing changed</span></div><div class="cell before"><p>A b.</p></div><div class="cell after"><p>A b.</p></div></div>',
    );
  });

  it('puts each entry heading in an h3 with its count and limit on both sides', () => {
    const html = render(profile('About.', 'Entry copy.'), profile('About.', 'Longer entry copy.'));

    expect(html).toContain(
      '<div class="cell before"><h3>Role · Place · 2020 – Present</h3><div class="counts">11 characters · limit 2,000</div></div>',
    );
    expect(html).toContain(
      '<div class="cell after"><h3>Role · Place · 2020 – Present</h3><div class="counts">18 characters · limit 2,000</div></div>',
    );
  });

  it('classes a count past its limit as over', () => {
    const html = render(profile('About.', 'Four.'), profile('About.', 'Longer.'), tightTable);

    expect(html).toContain('<div class="counts">5 characters · limit 5</div>');
    expect(html).toContain('<div class="counts over">7 characters · limit 5</div>');
  });

  it('leaves the other cell empty for a one-sided row and names a moved block at both ends', () => {
    const html = render(
      profile('One.\n\nTwo.', 'Entry.'),
      profile('Two.\n\nOne.\n\nThree.', 'Entry.'),
    );

    expect(html).toContain(
      '<div class="row row-moved-out"><div class="cell mark"><span class="badge marker">moved from here</span></div><div class="cell before"><p>One.</p></div><div class="cell after empty"></div></div>',
    );
    expect(html).toContain(
      '<div class="row row-moved-in"><div class="cell mark"><span class="badge marker">moved to here</span></div><div class="cell before empty"></div><div class="cell after"><p>One.</p></div></div>',
    );
    expect(html).toContain(
      '<div class="row row-added"><div class="cell mark"><span class="badge marker">added</span></div><div class="cell before empty"></div><div class="cell after"><p>Three.</p></div></div>',
    );
  });

  it('renders a list item as an item paragraph', () => {
    const html = render(
      profile('About.', 'Entry.'),
      profile('About.', 'Entry.', '- Tooling\n- Testing'),
    );

    expect(html).toContain(
      '<div class="cell before empty"></div><div class="cell after"><p class="item">Testing</p></div>',
    );
  });

  it('carries the review file structure errors as a strip, which the diff alone would not show', () => {
    const html = render(
      profile('About.', 'Entry.'),
      profile('About.', 'Entry.', '- Tooling\nTesting'),
    );

    expect(html).toContain(
      '<div class="strip strip-ok">No differences: the review matches the source.</div><div class="strip strip-error"><strong>The review file: 1 structure error</strong><ul><li>L24 Skills: a line that is not a list item</li></ul></div>',
    );
  });

  it('escapes the copy on both sides', () => {
    const html = render(profile('A & <b>', 'Entry.'), profile('A & <i>', 'Entry.'));

    expect(html).toContain('<p>A &amp; <del>&lt;b&gt;</del></p>');
    expect(html).toContain('<p>A &amp; <ins>&lt;i&gt;</ins></p>');
  });

  it('renders the parse error of whichever file cannot be parsed and no sections', () => {
    const sourceBroken = render('Stray.\n# Profile\n', profile('About.', 'Entry.'));
    const reviewBroken = render(profile('About.', 'Entry.'), 'Stray.\n# Profile\n');
    const bothBroken = render('Stray.\n# Profile\n', '# Profile\n\n# Again\n');

    expect(sourceBroken).toBe(
      '<div class="strip strip-error"><strong>Cannot parse the source:</strong> L1 no-title</div>',
    );
    expect(reviewBroken).toBe(
      '<div class="strip strip-error"><strong>Cannot parse the review:</strong> L1 no-title</div>',
    );
    expect(bothBroken).toBe(
      '<div class="strip strip-error"><strong>Cannot parse the source:</strong> L1 no-title</div><div class="strip strip-error"><strong>Cannot parse the review:</strong> L3 second-title</div>',
    );
  });
});
