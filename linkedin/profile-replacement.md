# LinkedIn profile replacement — the working object

7 October 2026 · Field by field · Replaces Draft 1 as the working object (Draft 1 stays as a
source for the earlier entries).

Every field of the profile appears here with a status. **Approved** text is Jim's word on the
exact copy and changes only on his word. **Open** fields carry the settled decisions that govern
their drafting. Nothing here is applied to LinkedIn until Jim asks, with him present, in one
sitting, after a PDF export of the old profile. The reasoning behind the design is in the thread
record `.agent/memory/operational/threads/linkedin-workspace.next-session.md`.

Naming and attribution: the product is the **Oak AI plugin** on the profile, Oak's own language
(its page is <https://www.thenational.academy/ai-plugin>); Model Context Protocol (MCP) appears
once in the Oak entry as the technical term and as a skill; vendor terms (plugin, app, connector)
appear only when naming a vendor's listing; Jim's five contributions and the credit to Oak's
curriculum experts govern the Oak entry's plugin movement. The decisions and their context are
[EDR-007](../docs/editorial/decision-records/007-oak-ai-plugin-naming-and-attribution.md)
(8 October).

The copy of every field lives in [`profile.md`](profile.md), the one home, under the LinkedIn
section headings with a status line each; this container holds the decisions. Jim reads and
edits the copy in the local editor (`pnpm --filter linkedin editor`; the README's editor section),
whose rendering reports each field's count against its believed limit and shades the 200 and 300
character folds; his edits land in `profile.review.md`, never in the source.

## Headline — approved (Jim, 7 October 2026; set by him in August)

The copy: [`profile.md` § Headline](profile.md#headline).

## About — approved (Jim, 7 October 2026, "I am very happy")

The copy: [`profile.md` § About](profile.md#about). Paragraph one is what shows before "see
more"; the editor reports the count.

## Experience — Oak National Academy — drafted, revised by Jim, under the readers

Three positions, grouped under Oak, dated by Jim on 10 October (correcting the chronology the
8 October draft carried; "a consulting Principal after the first 5 months", the dates showing
the move from independent consultant to employee): **Senior Developer (consulting)**, August to
December 2020, "there at the beginning", five months to ship the first teacher-facing service;
**Principal Engineer (consulting)**, January 2021 to May 2022, the strategy through the move
from emergency response to permanent service and from contractors to teams, closing on the
position being formalised; **Principal Engineer**, June 2022 to present, meaning
engineering strategy, in labelled movements in Jim's words: joining to
get the first teacher-facing service over the line; contributing to defining the engineering
function (best practice, the first QA and engineering-manager hires, collaborative approaches,
long-term investment in reducing the cost of innovation); checks and continuous delivery before
the rebuild; driving the rebuild and accepting the risk; the Oak AI plugin, with the SDK as the
necessary step, spanning the last two and a half years (the OCE repository about the last year,
before it a hand-written SDK for the Oak Open API and the Practice's progenitors); the shift from
what is possible to how Oak's values are embodied; the Practice. No Head of DevOps entry; the
June 2022 employment change is where the Principal entry starts. Location per Jim's rule
(entries with a location carry it; remote says United Kingdom).

The plugin movement follows EDR-007: Jim's five contributions in his order (conceiving the
opportunity; formulating and expressing the need; creating the engineering framework for rapid
development with AI, the Practice; carrying out the development; steering the strategy
throughout); the curriculum content and its sequencing credited to Oak's curriculum experts; and
the completion of zero to one with the phased handover to a cross-discipline, stream-aligned
product squad as the movement's closing beat, worded to stay true after the handover completes.
The entry names Model Context Protocol once: the plugin works in any AI assistant that supports
MCP. Title: Principal Engineer stands; Senior Principal Engineer only if it is the title Oak would
confirm, Jim's word (8 October: LinkedIn's seniority facet reads the title and buckets both the
same, so the prefix buys nothing there).

### The draft (8 October, by the write-for-the-reader method; Jim reads second)

Written from the reader's decision and the three beliefs (the private record holds them), read by
`editor`, `prose-expert` and the `audience-reader` before this text was set down, then proofed
against the sources. The copy of both entries: [`profile.md` § Experience](profile.md#experience),
the Principal Engineer entry and the Senior Developer (consulting) entry, each
`Status: drafted (8 October 2026; revised by Jim, 10 October 2026, under the readers)`: on
10 October Jim revised both entries and the About in the local editor (the dates above, the
squad count, the leadership audience, the Team Topologies beat, the Practice sentence, the
consulting entry's opening and closing sentences), and the revised text went back through
`prose-expert` and the `audience-reader`. A second round the same day, from Jim's answers to
that read (the consulting years split into two cards; the level at Oak, Principal beside Head of
Engineering under the Director of Engineering, one holding strategy, standard and vendor and
partner relationships, the other budget and people; the Practice defined for a reader who has
never met it, and its adoption by the engineers on the Open Curriculum Ecosystem repository):
the `editor` and `prose-expert` read the new material in parallel, the structural change landed
(the level stated as the shape of the function in the Principal card's opening, as fact and not
as a denial; the current card keeps the arc from four contractors to nine teams and the
consulting cards own their years), then the `audience-reader` read the whole block. Jim's
correction of that round, kept: his answers to the seat are not copy; the reader's sentence is
written from the fact, never pasted from the chat. One number entered the block that day, Oak's
scale during the closures from a colleague's public profile, and left it on 11 October as
borrowed scale; Oak's own published figure returns only at Jim's word. The 11 October step-back
(Jim: "Step back. Step back more. ... What is this all for?"): the seat's reader brief had cast a
head hunter for a run-the-org engineering search, and three rounds had cured to that reader's
objection, an org chart and a reporting line on the current card. EDR-008 fixes the axis every
reader decides on (origination, sense-making where nothing has a shape yet, strategy and systems
shaped at scale, breadth) and what the copy never does (argue a title up); the org chart and the
reporting line left the card, the consulting cards became plain facts, and the readers ran once
more under a brief built on that axis. Length is
information, never a target: the editor reports each entry's count against the believed limit
of 2,000 for a position description, unverified until the live editor (the Principal entry
stands above it; Jim, 10 October: rounds of editing remain and the count comes down later). If
the field refuses the text, what moves to another surface is Jim's editorial choice.

Open for Jim, with the draft:

- The rebuild's date, now load-bearing: "I made the emergency platform safe to change before
  anything else" sits on the current card and the pre-rebuild work sits on the consulting card
  (its dates); if the rebuild was argued before June 2022 the whole movement moves to the
  consulting card and the current card keeps the consequence sentence.
- "meant no child missed out on education": Jim's phrase, chosen twice; the editor's reading
  stands beside it, that a funder discounts an absolute no reader can check.
- "As Oak became a permanent public body, an arm's-length body of the Department for
  Education": Oak's own description (the status from September 2022, after the June 2022
  formalisation, so the sentence ties the two by "as", a process, not a date); Jim's "England's
  official curriculum body" is the stronger phrase and his to restore.
- The About's fold: the first ~200 characters carry the opener and the physics sentence and no
  leadership signal; a proposed second sentence that states the level and the largest
  consequence is with Jim in chat, not applied, the About being approved copy.

- The handover tense. "has its own cross-discipline product squad now, building out the
  direction I set" is true during the phased handover and after it; "stream-aligned" is dropped
  for the reader; Jim's 10 October revision of that sentence kept both.
- The pattern sentence ("go where the next problem is still unformed") on a current role: Oak
  colleagues can read it as a departure notice. His call.
- Whether anyone else on the plugin's engineering needs credit beside the curriculum experts; no
  source names a team size and the draft claims none.
- What was deliberately not built, and what the plugin cost, if he wants either named; no source
  holds them.
- An adoption or reach figure for the plugin, if one exists and is publishable; the path proves
  existence, not use.
- The About's "In the spring of 2020" against the Senior entry's "launched that April" and its
  August start; his to reconcile or leave.
- "began in 2024" is derived from his "two and a half years" of 7 October; "Four years on" is his
  particular and the About's, and the readers compute it against today, so the rebuild's year
  would let the entry carry an absolute date instead.
- "checks and continuous delivery", the two mechanism words of his pre-rebuild movement, are out
  of the entry on the readers' word (mechanism at every reader's altitude); the movement's
  substance stays as "made the emergency platform safe to change before anything else".
- The level claim, settled on 11 October by EDR-008: the reader is never a line-role screen, so
  the org chart and the reporting line are off the card and the structured data holds them; the
  level shows in the decisions the card carries (what gets built and what does not, the rebuild
  call and its cost, the vendor and partner relationships, what others now build on), and the
  title is a fact carried plainly.
- "Oak had launched that April" rests on public knowledge of April 2020; "before the plugin was
  more than an SDK, I was building a Practice" and the Senior entry's "the first months had left
  no time for" are the seat's readings of his chronology and the entity graph's role description.
- The plugin carrying the curriculum principles and accessibility standards is verified for the
  Claude plugin (0.1.6); whether the ChatGPT app carries them is not.
- "helped define the function" is the one collaborative hedge kept on purpose; the title
  question above. The site's entity graph was brought to the three cards on 10 October at Jim's
  word ("fix the graph to match the linkedin data, don't overwrite the content"): the 2021 to
  2022 role is Principal Engineer (Consulting), January 2021 to May 2022, its description kept;
  the squad count is six in the graph and the CV content. The LinkedIn content itself reaches
  the graph later, as new nodes, at his word.

## Top card, photo, banner, volunteering, organisations, interests — open

The photo stays (Jim, 6 October: everything changes except the photo, for want of a better one).
Name as now; pronouns are Jim's call. Top-card location and industry are set deliberately as
retrieval coordinates at application, verified live. The live industry value was never recorded
(the September baseline did not capture it); the `editor`'s rule for it, 11 October: read it at
application, and if it names a function, replace it with the sector Oak sits in, against
LinkedIn's taxonomy, since the sector filter is the one a funder or a national-organisation
leader uses and the function filter is the line-role screen. Banner: open, Jim's call. Volunteering
(Growing Communities) and organisations (Institute of Physics, current) stay, brief and true.
Activity and interests are not profile content and are left as they are. The VoxQuant company
page under Jim's account reserves a name only (Jim, 7 October) and gets no entry and no
organisation line.

## Experience — earlier entries — drafted, awaiting Jim

Brief and true, each a concrete instance of the pattern, never a repeated theme: Code Science
(founder; incorporated 9 February 2015, dissolved 2 January 2024); Medicspot; Obaith (a research
project, full time); the UK Passport Office; British Airways; We Predict; FT Labs; Carnegie
Mellon University in Qatar; the University of Portsmouth; HP Labs. Draft 1 is the source for
their facts. "Fractious" goes.

Drafted 11 October by the method, each entry with one job on EDR-008's axis (the `editor`'s
mapping): Code Science frames the consultancy years as range by design; HM Passport Office is the
answer that was a practice, not a system (six teams agreeing what to build before anyone built
it); Obaith is the problem with no shape and the decision to stop; British Airways is changing
the context rather than optimising within it; HP Labs is the earliest instance of the pattern
the Oak card closes on (build the first version, hand it on, it outlasts him); FT Labs 2011 to
2013 is originating on the open web; the PhD is the method and one result; Medicspot, We Predict,
FT Labs 2013 to 2014 and Carnegie Mellon are plain facts with no consequence claim. Two claims
the sources did not support came out at the `editor`'s evidence pass: completed developer-support
work at FT Labs 2013 to 2014, and continuous-delivery tooling in place at the Passport Office;
each returns in Jim's words if it shipped. The copy: [`profile.md` § Experience](profile.md#experience).

Open for Jim: Code Science's dates (LinkedIn February 2015 to February 2024 against the
graph's 2018) and the named clients (Oak only is sourced as a Code Science engagement; the
Passport Office and British Airways return on his word); Obaith's title (the card says
"Independent research", LinkedIn says Founder), dates and work pattern; FT Labs as two cards or
one; "multi-award-winning" for the FT Web App (his live words; the CV says award-winning);
whether the one-in-ten galaxy finding is his thesis's or the collaboration's; the FT Firefox OS
app as a shipped product beside Windows 8 (his live record; the contribution analysis called it
experimental); the locations (Carnegie Mellon's card says Qatar, the seat's inference; the
Portsmouth and HP Labs cards say United Kingdom).

The `audience-reader` on the run, under a brief on EDR-008's axis, 11 October: both readers now
read Oak as a pattern and not a one-off ("everywhere he has been, the thing he changed was how
the people around him decided what to build, and the thing he left behind tended to keep running
after he left"); the Passport Office and PhD sentences answered "a problem whose answer was not a
system"; the breadth read as one thread through different places, with the restlessness flicker
coming from the three short fragments (We Predict, Carnegie Mellon, FT Labs 2013 to 2014) and
Medicspot, which changed nothing either reader believed and together made the middle of the run
read as a technician's CV; Obaith is the card both found most interesting and least satisfying,
the only one where he shaped the problem himself and the only one with no stated outcome, and
the question both would open a conversation with. Verdicts for Jim: drop We Predict and Carnegie
Mellon from the run (two months each, a stack and a tool; the gaps they leave are shorter than
the flicker they cause); make FT Labs one card, 2011 to 2014, so the tooling year rides the Web
App story (the graph already records one role, Senior Developer; the title is his); keep
Medicspot as the plain fact it is; and give Obaith its outcome in his words, what the two years
produced and whether the question still drives him, since no source holds it.

Jim's dispositions, 11 October, and what followed: (1) the About's opening gains the second
sentence (level and consequence inside the fold), agreed; (2) We Predict and Carnegie Mellon
removed, on the reasoning that they change no decision for the readers the profile is for, that a
two-month D3 card and a Perl-harness card are the keyword hooks for the approaches he does not
want, and that the CV keeps both, so the record loses nothing; the cost named: one small instance
of research meeting engineering (Carnegie Mellon) and a data-visualisation signal that belongs in
Skills if anywhere; (3) FT Labs is one card titled Senior Developer, 2011 to 2014, "I joined as a
developer" carrying the progression; (4) "Oak's public code" rejected as inaccurate (Oak has 32
public repositories); the Open Curriculum Ecosystem is "a collection of tools for working with the
Oak Open Curriculum Data, via API, SDK and MCP app", and the gloss is chosen from options put to
him; (5) Obaith's outcome in a sentence written from his words (research he still draws on, a
sharper sense of what he cares about and how change happens, the delivery lesson); (6) the
rebuild carries no date at his word (the subject is sensitive): the current card keeps the call
and its consequence, the consulting card keeps the groundwork, and the current card's opening no
longer claims the groundwork twice. The rebuild's decide-or-recommend stays as written.

## Featured — drafted, awaiting Jim

First: the Oak AI plugin, led by Oak's page <https://www.thenational.academy/ai-plugin>, with the
Claude marketplace listing beside it. Second: the Oak National Academy site. The OCE repository
<https://github.com/oaknational/oak-open-curriculum-ecosystem> serves developers and sits under
Projects as well.

Drafted 11 October as three items, each a warrant in its owner's words and none of them Jim's
claim (the `editor`'s structural change for the new sections: a Featured item warrants, a
Projects entry is the route to the artefact and the record of who built it, Education is the
credential and the thesis title, Publications the one place the research is explained,
Organisations and Volunteering facts without gloss): Oak's plugin page with Oak's own line
("Connect the AI assistant you already use to Oak's free curriculum content."); the Claude
listing <https://claude.com/marketplace/connectors/oak-national-academy> with Anthropic's line
("Free, national curriculum-aligned Oak teaching resources."); Oak's site with Oak's own words
from its who-we-are page. All three resolve (11 October). EDR-007's one-line description is not
on Oak's page today; the page's line is used instead.

## Projects — drafted, awaiting Jim

The Oak AI plugin with the repository link, for the public and indexed route; the FT Web App
kept from the live profile with its collaborative credit; and, from Jim's word of 11 October,
the rebuild as a project with its public code: the site at thenational.academy is
`oaknational/Oak-Web-Application` (public, MIT, active), the result of the rebuild, and the
emergency platform's repository was `oaknational/Acorn`, which is not public (404 on 11 October)
and so is not linked or named on the card. The project card carries no dates at his word.

## Skills — drafted, awaiting Jim

Additive: endorsements kept; senior, AI and public-sector skills added; the top three pinned;
tool skills demoted down the list; the limit (believed one hundred) verified at pre-application;
any removal named by Jim at the time.

Drafted 11 October: seventy entries, every live skill kept but the duplicate "TDD", eight added
(Engineering Strategy, Artificial Intelligence (AI), AI Agents, Model Context Protocol (MCP),
Open Data, Public Sector, Digital Public Services, Developer Experience); the pin set Engineering
Strategy, Systems Thinking, Product Strategy (the `editor`: the pins are the only part of Skills
a scanner reads, and Technical Leadership first is the engineering-leader coordinate EDR-008
takes off the surface; it sits fourth, present for retrieval); the AI-literate searcher's terms
in the first ten; the testing middle and the tools below where anyone scrolls. "Github" is
"GitHub" (a rename on the platform drops endorsements; Jim's call). Endorsement counts are not
recorded (the September baseline recorded associations) and may weigh the pins at application.

Jim's word of 11 October supersedes the additive rule for one cluster: "I am fully ready to
leave 'testing' behind but keep my impact on delivery, innovation rate, team wellbeing,
strategy". The reasoning, by the reader's decision rather than by relabelling: a skill on
LinkedIn is a retrieval tag before it is a claim, and the testing tags retrieve the QA and
test-automation searches he does not want while placing him at technique altitude on a page
whose top half is strategy (the final audience read: the testing cards and the testing middle of
Skills pulled him to "test automation consultant" for a beat). So the trade's tags go (Test
Automation, Automated Software Testing, Test Driven Development, TDD, BDD, Cucumber, Coding
Standards, SDLC, Process Improvement), endorsements with them, and the impact is named in the
standard terms the right readers search rather than in value statements: delivery by Continuous
Integration and Continuous Delivery (kept) and Product Engineering; innovation rate by Developer
Experience and Platform Engineering (the three platform groups he helped define); strategy by
Engineering Strategy and Technical Strategy; team wellbeing by Coaching (kept) and Psychological
Safety, the one searchable term for that impact, his to confirm. "Software engineering
excellence" and "delivery strategy" are not added: the first is a value statement no reader
searches and reads as self-praise without endorsements, the second is covered by the delivery
terms. Each added name is checked against LinkedIn's taxonomy at application; a custom string
retrieves nothing. Sixty-six entries now.

## Recommendations — open

Two or three specific ones from senior colleagues at Oak or its department; who to ask is Jim's.

## Education, publications, certifications, contact — drafted, awaiting Jim

From the entity graph and Draft 1; the thesis spelling is Theremin; Institute of Physics
membership is current.

Drafted 11 October: Education as the credential and the thesis title only (the PhD card and the
Publications carry the explanations), the three theses in title case, the Portsmouth heading as
"University of Portsmouth" with the Institute of Cosmology and Gravitation in the body (the live
school field names the institute and truncated at one width in September; the change is
deliberate and Jim's to confirm); Publications in the journals' forms of the titles with
summaries a non-physicist can repeat and the co-authors beside the claim; Licences the five
retained with the two safety courses proposed for removal (the `editor`'s information for Jim:
the two 2016 course certificates are the same kind of keyword hook as the short contracts he
removed; his relevance choice stands until he says otherwise); Volunteering titled "Volunteer
market gardener" as the CV and the graph have it, the cause field his call; Organisations one
line; Contact three routes with distinct labels, the GitHub URL in the graph's spelling
(jimCresswell). The site's entity graph brought to the badges at the same time: AgilePM
Foundation (not Practitioner), Monitoring the Oceans from Space (not a satellite meteorology
course), the two Johns Hopkins course certificates (not a specialization), and the Institute
"of" Cosmology and Gravitation; the site's unit tests green.

## Settings — open

Open to Work off. The "share profile updates with your network" setting stays off during
editing; one deliberate notification at the end. Public visibility as now. The custom profile URL
stays.
