# LinkedIn profile field limits and folds

What is believed about each field's limit and fold, where the belief comes from, and whether a
counter has confirmed it. A limit is confirmed only by the field's own counter in the live
editor, read during a sitting; everything else is a belief. Nothing is trimmed to a believed
limit (Jim's standing word); the counter is read when the copy is applied.

- **Last updated:** 2026-10-21.
- **The validator's limits:** `linkedin/src/model/structure-table.ts` (headline 220, About
  2,600, a position description 2,000; the About's folds at 200 and 300 characters), reported as
  notes by `pnpm --silent --filter linkedin validate-profile profile.md`.

| Field                                    | Believed limit   | Source and date                                                                 | Status                      |
| ---------------------------------------- | ---------------- | ------------------------------------------------------------------------------- | --------------------------- |
| Headline                                 | 220 characters   | the validator's belief; third-party posts of 2025 agree (older posts say 120)    | confirmed at the counter by Jim, 2026-10-19 |
| About                                    | 2,600 characters | the validator's belief; third-party posts of 2025 agree (older posts say 2,000)  | confirmed at the counter by Jim, 2026-10-19 |
| About, fold before "see more"            | 200 to 300 characters, or the first two or three lines | the validator's folds; third-party posts disagree on two or three lines | belief; observe at the sitting |
| Position title                           | 100 characters   | older third-party posts                                                         | belief                      |
| Position description                     | 2,000 characters | the validator's belief; third-party posts agree                                 | confirmed at the counter by Jim, 2026-10-19 |
| Skills, entries                          | 100              | LinkedIn Help a549047, read 2026-10-11                                          | confirmed by Help           |
| Skills, pinned "top skills"              | 3                | Talent Solutions StubProfile and AWLI schema (Microsoft Learn), read 2026-10-11 | confirmed by the API docs   |
| Featured, Projects, Publications, Licences | not known       | no source read                                                                  | read the counter            |

LinkedIn's Help Center pages read on 2026-10-11 state no character limits for the headline or
the About (a553140 recommends "one or two paragraphs"); the numbers above come from the
validator and third-party posts and are held as beliefs until a sitting confirms them. Record
each confirmation here with the date.
