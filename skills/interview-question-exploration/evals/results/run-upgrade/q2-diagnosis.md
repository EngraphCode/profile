# Upgrade diagnosis: question 2

Filled by the agent from one read of the existing answer, shown to the writer before any
question is asked. The writer corrects the reading where it is wrong.

## The question, verbatim

> Tell us about a service you were responsible for failed the people who depend on it. What
> did you do in the first days, what did you change afterwards, and what of that change is still
> in place?

Criterion tested: 5, "Learning from service failures, and changing the service rather than the
explanation"; criterion 2, "Running live public-facing services to a standard: availability,
accessibility and data protection", behind it.
Limit: 250 words (the brief states words; nothing on spaces).
Current length: 131 words (script, question paragraph excluded).

### The step 1 reading (the upgrade mode reuses step 1)

- Parts, four: (a) a time the service failed the people who depend on it; (b) what the writer
  did in the first days; (c) what the writer changed afterwards; (d) what of that change is
  still in place.
- Behaviour screened out at one star (rubric, "Running a service that failed its users" and
  "Learning from failure"): a post-mortem that blames a supplier or a predecessor; a fix with no
  change to how the service is run; a failure that was not the writer's.
- Its opposite, which five rewards: the first days owned, the users told, a cause found, a
  control that has run on every change since; the writer's own judgement examined.
- Counterpart: the residents who depend on the service; the housing office staff who took the
  phone calls; the team; whoever is, or was not, paged.
- Counted outcome: a changed practice with a trace (criterion 5); an availability result in its
  measured form, not a launch (criterion 2).
- The thinking-beyond move the author probably hoped for: a control that runs on every change,
  and a person or rota that now handles the weekend without the writer.
- Marking scheme: nothing published beyond the criteria, so the default rubric applies.

## The existing answer, as received

> In February 2024 the online repairs-reporting service at Westmere County Council was down for
> fourteen hours over a storm weekend, when around three thousand residents tried to report
> leaks and damage. I was head of digital platforms and responsible for the service. On the
> Monday I brought the team together, got the service restored and worked with the housing
> office to clear the backlog of reports that had come in by phone. We found that the cause was
> a stalled queue consumer and an alert that went to a mailbox nobody read at weekends.
> Afterwards I introduced a weekend on-call rota, validation on uploads, and a check that tests
> the service every five minutes. There has been no outage since, and the on-call rota and the
> check are still in place.

## Element by element

Present, partial or absent; the sentence that shows it, quoted; the gap class (prose, fact,
episode) where it is not fully present.

| Element                                         | State                                | Evidence (quoted)                                                                                                                                                                                                      | Gap class                                                                                                                                                                                       | First probe                                                                                 |
| ----------------------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 1. The particular (where, when, stakes, scale)  | Present                              | "In February 2024 the online repairs-reporting service at Westmere County Council was down for fourteen hours over a storm weekend, when around three thousand residents tried to report leaks and damage."             | None. The figure "around three thousand" needs its form confirmed at provenance (how counted).                                                                                                  | (provenance line 6)                                                                         |
| 2. The decision; the method named, with reason  | Partial                              | "On the Monday I brought the team together, got the service restored and worked with the housing office to clear the backlog"; "Afterwards I introduced a weekend on-call rota, validation on uploads, and a check"    | Prose: what the writer decided first on the Monday, and why that order, is not visible. Fact: the rota and the check answer the unread mailbox; nothing says what "validation on uploads" answers. | "What did you decide first on the Monday, and why that before the rest?"                    |
| 3. The others, read and responded to            | Absent                               | "the team"; "the housing office"; "nobody read at weekends"; "around three thousand residents"                                                                                                                         | Fact: no one needs, says, asks or resists; the residents are a count, the housing office a backdrop, the team a noun.                                                                           | "Put me back in the room on the Monday. Who else was in it, by role?"                       |
| 4. The cost; obstacles navigated                | Absent                               | No sentence.                                                                                                                                                                                                           | Fact: nothing went wrong on the way, nothing was given up; a weekend rota costs someone their weekends and the answer says nothing of it.                                                        | "What did it cost: time, money, goodwill, something that slipped?"                          |
| 5. The outcome, in the counted kind             | Partial                              | "There has been no outage since"; "clear the backlog of reports that had come in by phone"                                                                                                                             | Prose/fact: "no outage since" has no period and no measured form; what became of the three thousand reports is told as an activity ("clear the backlog"), not as a result.                     | "'No outage since': measured how, and to when, in the form you would give a sceptic?"       |
| 6. The reflection; what persists                | Reflection absent; persists partial  | "the on-call rota and the check are still in place"                                                                                                                                                                    | Fact: no judgement about what worked or what the writer would refine. Persists: a trace is named but no one runs it, the check is not said to run on every change, and the validation is not said to persist. | "What would you do sooner, later or differently?"; "Who runs the rota now, without you?"    |

## The question's own tests

| Test                                          | State   | Note                                                                                                                                                                                                   |
| --------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Every part of the question answered           | Present | All four parts, at a general level: (a) the storm weekend; (b) one sentence on the Monday; (c) three changes listed; (d) two of the three named as still in place. A reader will ask about the third.   |
| The behaviour screened out at one star absent | Present | No blame of a supplier or predecessor; the fix changes how the service is run (a rota). The opposite five rewards is only partly shown: a cause found, a control introduced; the users told, not stated. |
| Technical reasoning named (if technical)      | Partial | The cause is named ("a stalled queue consumer and an alert that went to a mailbox nobody read at weekends"); the reason for each of the three changes is not.                                           |
| Terms defined on first use                    | Partial | "queue consumer" and "validation on uploads" are undefined for an assessor who is not an engineer. "repairs-reporting service" and "housing office" are plain.                                           |
| Within the limit                              | Present | 131 of 250 words; 119 words of headroom for the additions.                                                                                                                                             |

Signs of machine drafting checked: one list of three ("a weekend on-call rota, validation on
uploads, and a check"); "we" once; no closing moral; the figure carries its form ("around").
Not strongly machine-like; the provenance pass runs regardless, as the skill requires.

Script on the answer as received (`check_answer.py --words 250`): "words 131; characters 755
with spaces, 625 without; hedges: tried to; first person 3, plural 1; RESULT: no hard
failures". The flagged hedge "tried to" is a factual verb phrase (residents tried to report and
could not), not a hedge; triaged as a false positive.

## Provenance

Every particular in the answer, one per line, for the writer to mark confirmed, corrected or
struck; the confirmed ones go to the fact ledger with their attribution class.

| #  | Particular (as written)                                                                      | Writer's mark | Corrected form | Ledger row |
| -- | -------------------------------------------------------------------------------------------- | ------------- | -------------- | ---------- |
| 1  | February 2024                                                                                | confirmed     |                | L1         |
| 2  | the online repairs-reporting service                                                         | confirmed     |                | L2         |
| 3  | Westmere County Council                                                                      | confirmed     |                | L3         |
| 4  | down for fourteen hours                                                                      | confirmed     | "fourteen hours" | L4       |
| 5  | over a storm weekend                                                                         | confirmed     | "the storm weekend in February" | L5 |
| 6  | around three thousand residents tried to report leaks and damage (how counted; "around" its form?) | corrected | the number of attempts to open the form over the weekend, from the analytics; "about" is right; attempts, not people | L6 |
| 7  | I was head of digital platforms                                                              | confirmed     |                | L7         |
| 8  | responsible for the service                                                                  | confirmed     |                | L8         |
| 9  | On the Monday I brought the team together (the writer's call?)                               | corrected     | it did not start on the Monday: the housing office manager rang on the Sunday, three people answering phones, no way to tell residents when the form would be back; bringing the team together on the Monday was the writer's call | L9, L22 |
| 10 | got the service restored (own hands or directed; who restored it?)                           | corrected     | the engineer who runs the queue restored it on the Sunday evening with the writer on the call; he did the restart and the fix; the writer directed and took the call with the housing office | L10 |
| 11 | worked with the housing office to clear the backlog of reports that had come in by phone (who, by role?) | corrected | the housing office manager, by role; on the Monday morning the writer sat in the housing office to hear what residents were saying: they had assumed the council had ignored them | L11, L23 |
| 12 | We found that the cause was a stalled queue consumer (who found it?)                         | corrected     | the engineer found the stalled consumer; it had stalled on a malformed photo upload; the mailbox part was the writer's to find and to own: known for months to be weak, put behind other work | L12, L24 |
| 13 | an alert that went to a mailbox nobody read at weekends                                      | confirmed     |                | L13        |
| 14 | Afterwards I introduced a weekend on-call rota (the writer's decision?)                      | confirmed, the writer's decision | a paid weekend on-call rota with paging | L14 |
| 15 | validation on uploads (of what; still in place?)                                             | corrected, kept | validation that rejects a bad photo upload instead of stalling the queue; still in place | L15 |
| 16 | a check that tests the service every five minutes                                            | confirmed     | a synthetic check that submits a test report every five minutes and pages if it fails | L16 |
| 17 | There has been no outage since (measured how; to when?)                                      | struck        | "I cannot measure that honestly"; in its place: the check has caught two faults since, both fixed before a resident noticed | L17 struck; L20 |
| 18 | the on-call rota and the check are still in place                                            | confirmed     | and the housing office manager now gets the same page we do; she asked for it, "and I should have offered" | L18, L19 |
| 19 | (volunteered by the writer, not in the answer as received)                                   | new           | a notice on the service and on the council's homepage saying what had failed and that phone reports would be honoured in the order received, in the first two days | L21 |

### Turn 1 reply, verbatim (A. B., 2026-10-21)

> A. B. here. Your reading is right; the people are missing and I can see it now you lay it out.
> The eighteen, in order:
>
> 1. Confirm.
> 2. Confirm.
> 3. Confirm.
> 4. Confirm, fourteen hours.
> 5. Confirm, the storm weekend in February.
> 6. Correct the form: "about three thousand" is the number of attempts to open the form over the
>    weekend, from the analytics, so "about" is right and it is attempts, not people.
> 7. Confirm.
> 8. Confirm.
> 9. Correct: it did not start on the Monday. The housing office manager rang me on the Sunday;
>    she had three people answering phones and no way to tell residents when the form would be
>    back. Bringing the team together on the Monday was my call, yes.
> 10. Correct: the engineer who runs the queue restored it on the Sunday evening with me on the
>     call; he did the restart and the fix, I directed and I took the call with the housing
>     office.
> 11. Correct: the housing office manager, by role. And I did more than clear the backlog with
>     them: on the Monday morning I sat in the housing office to hear what residents were saying,
>     which was that they had assumed the council had ignored them.
> 12. Correct: the engineer found the stalled consumer; it had stalled on a malformed photo
>     upload. The mailbox part was mine to find, and to own: I had known for months that alert
>     mailbox was weak and had put it behind other work.
> 13. Confirm.
> 14. Confirm, my decision: a paid weekend on-call rota with paging.
> 15. Correct and keep: validation that rejects a bad photo upload instead of stalling the queue.
>     Still in place.
> 16. Confirm: a synthetic check that submits a test report every five minutes and pages if it
>     fails.
> 17. Strike "there has been no outage since"; I cannot measure that honestly. What I can say:
>     the check has caught two faults since, both fixed before a resident noticed.
> 18. Confirm, and one more thing in place: the housing office manager now gets the same page we
>     do. She asked for it, and I should have offered.
>
> One more thing I did in the first two days that is not in the answer: I put a notice on the
> service and on the council's homepage saying what had failed and that phone reports would be
> honoured in the order received.

### Turn 4: the limit pass, as proposed

The answer at 427 words, sixteen sentences (S01 to S16). Proposals in altitude order, each with
its reason and saving; the writer takes or refuses each and rewrites any join.

| #   | Altitude                 | Sentence | Cut proposed                                                                                                   | Reason                                                                                                          | Saves |
| --- | ------------------------ | -------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----- |
| C1  | 1, context               | S01      | "to report leaks and damage"                                                                                    | a storm weekend and a repairs-reporting service already say what the attempts were for                          | 5     |
| C2  | 1, context               | S02      | "head of digital platforms and", leaving "I was responsible for the service."                                   | the question's premise is the responsibility; the acts that follow show the level                               | 5     |
| C3  | 1, context               | S04      | "with me on the call" and "and I took the call with the housing office"                                         | S03 has the manager ringing the writer; "I directed" says the writer was there                                  | 14    |
| C4  | 1, context               | S06      | "and then worked with the housing office manager to clear the backlog of 214 reports that had come in by phone"; the 214 carried into S07 by the writer's join | the activity is told again as its result in S07, and the result is what earns             | ~15   |
| C5  | 2, the second example    | S12 or S13 | one of the two cost sentences                                                                                 | one honest cost with a figure carries the element; the two days of visits is already in S03                      | 29    |
| C6  | 2, the second example    | S10      | "The mailbox part was mine to find, and to own:"                                                                | the second half shows the ownership the clause claims; what it loses is that the writer, not the engineer, found the mailbox | 10 |
| C7  | 3, adjectives            | S11      | "synthetic"; "if it fails"; "instead of stalling the queue"                                                     | S08 already shows what a bad upload did; "pages" says what happens when the check fails                         | 9     |
| C8  | 3, adjectives            | S12      | "in on-call payments" (if S12 is kept)                                                                          | "The rota costs ... a year" says it                                                                             | 3     |
| C9  | 4, a mechanism clause    | S05      | "and on the council's homepage"                                                                                 | one place the notice went is enough for the reader to believe the users were told                               | 5     |

Total if all taken: about 95, to about 332. The remaining 80 or so is the writer's compression
inside sentences that earn, pointed at with what each must keep: S03 (the Sunday call, the
three on phones instead of visits, no way to tell residents); S06 (the Monday morning in the
housing office, what residents said); S07 (214, the Tuesday evening, the urgent ones inside 48
hours); S08 and S09 (the two causes, which could be one sentence); S11 (the three changes); S15
(the three still in place, the manager's page). Nothing proposed touches the people, the
outcome or what persists.

## Predicted score and lever

- Predicted score under the rubric: 3. A specific real example, the writer's own actions clear,
  every part answered, an outcome stated. None of the four that make a four: no other person
  appears, no cost, no visible judgement, the outcome not in checkable form.
- The lever (the one gap with the most score in it): the others (element 3). The question is
  about failing the people who depend on the service, and its first-days part is scored on what
  those people needed and what the writer did about it; the answer has no one in it. The
  outcome's form (element 5) is a smaller gap and comes after.
- Mode: upgrade conversation. The episode can carry a five: a real failure, the writer
  responsible, a cause found, changes with a trace.

## Turn log

| Turn | Question asked | Reply (verbatim) | Paragraph reflected | Cut proposed | Scoreboard after |
| ---- | -------------- | ---------------- | ------------------- | ------------ | ---------------- |
| 0    | Diagnosis shown; provenance list of 18 put to the writer to mark | (awaiting) | none | none | 1 present; 2 partial; 3 absent; 4 absent; 5 partial; 6 reflection absent, persists partial; 131/250 |
| 1    | The provenance marking (the eighteen: confirm, correct or strike) | see "Turn 1 reply, verbatim" above: 12 confirmed, 7 corrected (6, 9, 10, 11, 12, 15; 14 confirmed with its form), 1 struck (17), 1 volunteered (the notice) | The whole answer rebuilt from the marks: the Sunday call, the engineer's restore with credit beside it, the notice, the Monday morning in the housing office, the two causes with the mailbox owned, the three changes in their corrected forms, the two faults caught, the manager's page. Five joins in brackets for the writer. | "On the Monday I brought the team together, [and that] morning" to "On the Monday morning": names no method; with the Sunday call and the housing office morning present it tells the reader nothing new. Running total: about 79 over, more cuts at the end by altitude. | 1 present; 2 present; 3 present; 4 absent; 5 present; 6 reflection present, persists present; 316/250 by the script, about 329 with the joins |
| 2    | "What did it cost: time, money, goodwill, or something that slipped to make room for the rota, the validation and the check?" | "I read it aloud; it is mine. Take the cut: 'On the Monday morning I sat in the housing office'. The joins, as I would say them: '[with]' becomes 'while'; '[to report leaks and damage]' is right, keep it as mine; '[then]' becomes 'and then'; '[The other cause was]' becomes 'The reason nobody knew was'. The cost. The rota costs about nine thousand pounds a year in on-call payments, which I took out of the contractor line I had been holding back for the dashboard work. The validation and the check took the queue engineer two weeks that were meant to go on the benefits form, so the form's accessibility fixes slipped by a month. And the housing office manager had three people on phones for two days who should have been on visits." | The cut taken and the joins laid in as the writer said them. The three costs laid in: the housing office's beside the Monday backlog sentence; the money and the engineer's two weeks after the three changes they paid for. | "The housing office manager had three people on phones for two days who should have been on visits" echoes "she had three people answering phones" from the Sunday sentence: fold "for two days who should have been on visits" into the Sunday sentence and drop the rest; about nine words. Line pointer, not a question: "while about three thousand attempts to open the form to report leaks and damage" has no verb after "while". | All six present; 399/250, over by 149; element 5 holds the service result (two faults caught) but the residents' backlog is told as an activity, not a result |
| 3    | "The backlog of phone reports: what became of it, in a form a sceptic could check, and cleared by when?" | "Take the fold: 'she had three people answering phones for two days who should have been on visits', and drop the separate sentence. And you are right about 'while'; make it 'while residents made about three thousand attempts to open the form to report leaks and damage', those are my words. The backlog: 214 reports came in by phone over the weekend. All of them were logged on the system by the Tuesday evening, and the urgent ones, leaks near electrics and no heating, got a visit inside the 48 hours our policy promises; the housing office's own log shows that, which is where I would send a sceptic." | The fold and the "while" sentence laid in as said. The backlog result laid in after the Monday backlog sentence; the sceptic's source (the housing office's own log) to the ledger, not the answer. | "214 reports came in by phone over the weekend" echoes "the backlog of reports that had come in by phone": fold the figure into the backlog sentence ("the backlog of 214 reports that had come in by phone") and drop the separate sentence; about eight words, and no sentence opens with a numeral. | All six present, the residents' result now checkable (L28 to L30); 433/250, over by 183; "queue consumer" still undefined |
| 4    | "In eight words or so, what is a queue consumer to someone outside?" | "Take the fold: 'the backlog of 214 reports that had come in by phone', and drop the separate sentence. For the term, say the cause without it, in my words: 'the process that files each incoming report had stuck on a malformed photo upload'. Then let's do the limit pass; propose the cuts line by line and I will take or refuse each." | The fold and the plain-words cause laid in. The whole answer shown numbered by sentence for the limit pass. | The limit pass (step 6, line altitude): nine proposals in altitude order, about 95 words, listed under "Turn 4: the limit pass"; the remaining 80 or so named as the writer's compression inside sentences that earn, with what each must keep. Developmental letter: no structural change; the order follows the question's parts. | All six present; no term undefined; 427/250, over by 177 |
| 5    | "Taking the nine in order, which do you take and which do you refuse?" | "I take 1, 2, 3, 4, 5 (keeping S13, your reasoning is right), 7 and 9. I refuse 6 as written but I have cut the first half myself, the second half carries it. 8 falls away with S12. And I have done the compression you asked for, in my own words; here is the whole thing as I would say it: [the 300-word answer, now q2-current.md verbatim] Run the count and the checks on that. If it is still over, tell me by how much and I will take one more pass." | The writer's whole answer laid in verbatim. Proof pass against the ledger: every particular present is in the ledger as confirmed; L7 (the title), "for two days" (L27), "on the system" (L29) and the engineer's finding (L12's credit) are now out of the answer by the writer's compression, with no claim left that misattributes; figures mixed in style (fourteen, three thousand in words; 214, 48 in numerals), flagged for the writer, not changed. | None at an altitude left: the four altitudes are spent. Pointers at the mechanism clauses still in the text ("who runs the queue", "saying what had failed and", "every five minutes"), about twelve words, and the per-sentence counts with what each must keep, for the writer's pass. | All six present; 300/250, over by 50 |
| 6    | "Fifty over: where do you take it from?" | "Figures: words below a hundred, so 'forty-eight hours'; 214 stays as it is. Here it is again, cut by me: [the 265-word answer, now q2-current.md verbatim] If that is within the limit, run the checks and the fresh read, and bring me its report to triage." | The writer's answer laid in verbatim. Script: 265, over by 15; nothing else flagged. Proof pass: every particular in the ledger except one wording: "two weeks meant for the benefits form, which slipped a month" attaches the slip to the form; L26 holds "the form's accessibility fixes slipped by a month". Flagged, not changed. The fresh read waits for the limit and the flag. | None at an altitude; pointers at the per-sentence counts for the last fifteen. | All six present; 265/250, over by 15; one proof flag open |
| 7    | "Fifteen over, nineteen if you take the ledger's wording: where do you take it from?" | "The ledger is right: it was the accessibility fixes that slipped, not the whole form; take its wording. The rest I have cut myself, in my words: [the 248-word answer, now q2-current.md verbatim] If that is within the limit, run the fresh read and bring me its report." | The writer's answer laid in verbatim. Script: 248 words, no hard failures, first person 8, plural 2. Proof pass clean: every particular a confirmed row; the slip as L26 holds it. Final checklist, mechanical items: all pass; the writer's own items (read aloud, two levels deeper) are theirs. | None. | All six present; 248/250; checks pass; fresh read launched from q2-assessor-brief.md |
| 8    | Fresh read round 1 shown with dispositions; "The paid rota's money and the slip on the accessibility fixes: who agreed each, and did you put it to them before or after?" | "Both were put to people before, not after. The rota: I took the money from the contractor line I held and put it to the director of resident services that week; she signed it off. The slip: I told the benefits service manager before the engineer started that her accessibility fixes would move a month, and she agreed because the form's audit re-test was not until June. On 'me directing': drop it; say 'with me on the call', which is what I was. On the residents: I was on the phones with the housing office staff that morning, so say 'residents told us they assumed the council had ignored them'. Lay those in and propose the cuts to pay for them; the list of three changes can lose 'every five minutes' and 'when it fails' if it must. Then the second read." | The two obstacle sentences laid in after the changes (L32, L33); "with me on the call" (L34) and "residents told us" (L35) laid in. Script: 310, over by 60. | S8 "every five minutes", "when it fails" (6, the writer's offer); S10 "which slipped a month" (4, said again in S11); S10 and S11 merged in the writer's words (about 12); S5 "leaks near electrics and no heating" (6, last resort). The rest the writer's compression. | All six present, the cost now navigated (the director's sign-off, the manager told before); 310/250, over by 60 |
| 10   | "Sixty over: where do you take it from?" | "I take 1, 2 and 3, and I have done the rest myself, including losing the three thousand attempts and 'leaks near electrics' to keep who agreed and when. Here it is, mine: [the 252-word answer, now q2-current.md verbatim] Count it; if it is at or under 250, run the second read and close with the final answer and your notes." | The writer's answer laid in verbatim. Script: 252, over by 2. Proof pass: every particular a confirmed row ("I ran" the writer's verb for L8, same class); one ambiguity introduced by the compression: "the manager now gets the same page we do" follows "its service manager" (the benefits form's), so the nearer referent is the wrong manager; L19 is the housing office manager. Flagged, not changed. | Two words over, four with the referent restored; candidates named ("that evening", "On Monday morning" to "On Monday", "malformed photo" to the writer's word); the writer chooses. | All six present; 252/250; one proof flag open; second read held |
| 11   | "Four words and the housing office manager named: where do you take them from?" | "Good catch on the two managers. Take 'that evening' and 'morning', and make the last two sentences: 'All three are still in place, and the housing office manager now gets the same page we do. She asked for it; I should have offered.' Keep 'malformed photo upload'. Run the count and the second read, then close with the final answer and your notes; no more turns after that." | The three changes laid in. Script: 251, over by 1 (three out, two in). Proof pass clean: the referent settled. | None; one word is the writer's. | All six present; 251/250; second read held for one word |
| 12   | "Which one word goes?" | "'the Sunday' to 'Sunday'. Run the read and close." | The word out. Script: 250, no hard failures, first person 9, plural 3. Proof clean. Final checklist, mechanical items: pass. q2-upgraded.md written. Second fresh read launched on this text (q2-assessor-brief.md, round 2). | None. | All six present; 250/250; checks pass; round 2 read running |

### Fresh read, round 1, verbatim (a fresh agent given q2-assessor-brief.md and nothing else)

```text
Score: 4
What I now believe about this applicant against the criterion: They ran a real repairs service, it failed on a weekend because of a fault they had already noticed and deferred, and they say so. They changed the service in three concrete ways that answer the causes (unread mailbox, bad upload, silent failure) rather than the storm, and the changes have since been tested by events and held. What I do not know is whether they carried the people the cost fell on (the benefits form's users, whoever funds a paid rota) or simply absorbed it and reported it here.
The sentence that most earned the score: "I had known for months that mailbox was weak and had put it behind other work."
The sentence that most cost it: "I introduced a paid weekend on-call rota, validation that rejects a bad upload, and a check that submits a test report every five minutes and pages when it fails."
What was noise for me: "The engineer restored it that evening, me directing, and I posted a notice promising phone reports would be honoured in order." — the clause "me directing" is unclear and not quite believed: the engineer restored it, and I cannot tell what directing consisted of, so it reads as a credit claim grafted onto someone else's act; the notice half of the sentence is useful. "On the Monday morning I sat in the housing office; residents assumed the council had ignored them." — the second half is unclear in its source: I cannot tell whether residents said this on the phone, staff reported it, or the applicant inferred it, so the reading of residents is asserted rather than shown. Everything else carried something new; this is a lean answer.
Where I skimmed or stopped, and why: read to the end
The one thing that would move this up a star: The list of three changes and the month's slip arrive as settled facts, so the obstacle is missing: who agreed a paid weekend rota at a council, who was told the benefits form's accessibility fixes would slip and whether that trade-off was put to them before or after, which is the difference between a cost that was navigated and a cost that was absorbed.
```

Dispositions proposed to the writer (theirs to decide):

- The lever: route to step 4, a fact gap. Half of it was in the answer at turn 2 and cut for the limit (L25: the rota's money taken from the contractor line the writer had been holding back for the dashboard work); the other half (who was told of the slip, before or after) is new. One question.
- "me directing": absorb. L10 holds "he did the restart and the fix, I directed"; the compression dropped what directing was. The writer says what it consisted of in a few words, or drops the claim.
- "residents assumed the council had ignored them": absorb. L23 holds that the writer heard residents say it, in the housing office; the compression dropped the source. A few words restore it.
- The score and the earned sentence: absorb.

### Fresh read, round 2, verbatim (a second fresh agent given the round 2 brief and nothing else)

```text
Score: 4
What I now believe about this applicant against the criterion: This applicant ran a real service, found the actual cause of the outage including their own part in it, and changed the service in three ways that each map to a cause, with a checkable result since and a trade-off they negotiated openly with the people who paid for it. I believe they learn from failure and fix the service rather than the story. What I do not yet see is the learning reaching the failure they admit: the months-long deferral of a known weakness has no cure in the list, and the reasons for the three choices are left for me to infer from the cause sentence rather than stated.
The sentence that most earned the score: "I had known for months that mailbox was weak and had put it behind other work."
The sentence that most cost it: "I introduced a paid weekend on-call rota, validation that rejects a bad upload, and a check that submits a test report and pages."
What was noise for me: "I told its service manager before he started, and she agreed a month's delay because the audit re-test was in June." (unclear: "he" and "she" in one clause for what reads as one person; I had to work out that "he" is the engineer). "On Monday I sat in the housing office; residents told us they assumed the council had ignored them." (unclear what it changed: the belief is reported but nothing in the answer answers it; the notice came before it and the logging is an outcome, not a response to being thought ignored).
Where I skimmed or stopped, and why: "I told its service manager before he started, and she agreed a month's delay because the audit re-test was in June." I stopped to resolve the pronouns, then read to the end.
The one thing that would move this up a star: Name the act that now stops a known weakness being deferred for months, since that deferral is the failure the answer admits and none of the three changes touches it.
```

Dispositions proposed (the writer closed the conversation at turn 12, so these are recorded for
them, not decided with them):

- The lever: a fact gap, and a true one. The answer's most-earning sentence admits a months-long
  deferral, and nothing in the three changes answers that failure; whether something now does
  (a rule, a register, a review) is a fact only the writer holds and was not asked, because the
  round 1 lever took the one question the limit allowed. Route to step 4 if the writer reopens.
- "he" and "she" in one clause: absorb, a line fix in the writer's words; "he" is the engineer,
  named a sentence earlier only as "the engineer". The compression at turn 10 made it.
- The residents' belief with nothing answering it: absorb as a finding about order and
  altitude. The notice (a response to it) sits before the belief; the writer could order them
  so the belief is heard and then answered, at no word cost. The reader is right that logging
  is an outcome, not a response.
- The reasons for the three choices left to inference: absorb. The changes sit beside the cause
  sentence and the reader inferred them; a stated reason costs words the limit does not have,
  so this stays a known cost of the 250-word box.

## Exit

- Checks run (script, checklist): script on the final 250-word answer, no hard failures;
  proof pass clean; the final checklist's mechanical items pass; the writer's own items
  (read aloud, two levels deeper) are theirs and were taken at each turn.
- Fresh read score and lever, round 1: 4. Lever: the obstacle, who agreed the paid rota and
  who was told of the accessibility slip, before or after. Worked at turns 9 to 12.
- Round 2: 4. Lever: the act that now stops a known weakness being deferred for months. Not
  worked; the writer closed the conversation at turn 12.
- Ceiling stated: This answer tops out at 4 because the failure it admits, a known weakness
  deferred for months, has no act in the answer that stops that recurring, and the reasons for
  the three changes are inferred rather than stated. The choices are: one more question on
  whether such an act exists (a fact only the writer holds) and a line fix for the pronouns,
  then submission without a third read; or this answer as a candid 4, which is honest and will
  survive interview. A different episode is not indicated: the episode carries every element.
