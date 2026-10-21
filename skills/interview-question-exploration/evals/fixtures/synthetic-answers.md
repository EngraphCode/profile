# Invented answers to the invented Ashcombe questions

Everything here is invented for testing the skill. The applicant is the fictional A. B. of the
`sources/` files; the three-star answers are written to the skill's description of three, the
five-star answers to its description of five. A reader scoring them does not see these labels'
intent, only the label.

## Q1, three stars

In early 2023 at Westmere County Council my team of six started rebuilding the housing repairs
case-management system in-house, because the supplier's product was slow and residents
complained about the time it took to get a repair booked. Four months in I reviewed progress and
the evidence we had collected and decided to stop the rebuild. The resident survey showed that
the delay residents complained about was in contractor scheduling, not in the case system, and
the supplier had released an API that would let us integrate scheduling directly. I explained
the decision to the team and we moved the work to a scheduling integration. The integration went
live in early 2024 and the average time from a repair report to an appointment fell from eleven
days to six. The team took the change well once they understood the reasons, and the integration
is now the main way repairs are scheduled across the council.

## Q1, five stars

In early 2023 at Westmere County Council my team of six began rebuilding the housing repairs
case-management system in-house; the supplier's product was slow and residents complained about
how long a repair took to book. Four months in, two things arrived in the same week: the
supplier released a scheduling API, and the resident survey I had commissioned came back showing
that the delay residents felt was between the booking and the contractor's visit, not in the
case system we were rebuilding. I did not act on either alone. I had our analyst join the survey
data to the case records, and the join held: the median wait was two days in our system and nine
with contractors. I decided to stop the rebuild. The lead engineer said we were four months in
and three from done, and that stopping would look like failure. I told the whole team myself,
with the join on the screen, and agreed with him that we would write up the rebuild's design so
it was not lost. We redirected to the scheduling integration; by March 2024 the average time from
report to appointment had fallen from eleven days to six. I stopped about six weeks later than
the evidence allowed, because I wanted the survey rather than the complaints to carry the
decision; next time I would start the join sooner. The team now runs a stop-or-continue review at
every third sprint on any piece of work more than a quarter old, and has used it twice without
me.

## Q2, three stars

In February 2024 the online repairs-reporting service at Westmere County Council was down for
fourteen hours over a storm weekend, when around three thousand residents tried to report leaks
and damage. I was head of digital platforms and responsible for the service. On the Monday I
brought the team together, got the service restored and worked with the housing office to clear
the backlog of reports that had come in by phone. We found that the cause was a stalled queue
consumer and an alert that went to a mailbox nobody read at weekends. Afterwards I introduced a
weekend on-call rota, validation on uploads, and a check that tests the service every five
minutes. There has been no outage since, and the on-call rota and the check are still in place.

## Q2, five stars

On a storm weekend in February 2024 the online repairs-reporting service I ran at Westmere County
Council was down for fourteen hours while about three thousand residents tried to report leaks
and damage. The housing office manager rang me on the Sunday; she had three people answering
phones and no way to tell residents when the form would be back. In the first two days I did
three things: restored the service (a queue consumer had stalled on a malformed photo upload, and
its alert had gone to a mailbox nobody reads at weekends); sat in the housing office on Monday
morning to hear what residents were saying, which was that they assumed the council had ignored
them; and put a notice on the service and the council's homepage saying what had failed and that
phone reports would be honoured in the order received. The cause was not the upload. It was that
I had known for months the alert mailbox was weak and had put it behind other work. I changed
three things: a paid weekend on-call rota with paging, validation that rejects a bad upload
instead of stalling the queue, and a synthetic check that submits a test report every five
minutes and pages if it fails. The check has caught two faults since, both fixed before a resident
noticed. The rota and the check are still running, and the housing office manager now gets the
same page we do, which she asked for and I should have offered.

## Q3, three stars

At Eastgate Museum in 2021 I introduced a rule that nothing changes on the ticketing sales path
without the previous members' pre-sale traffic being replayed against it first. The two senior
developers did not want it; they said it would slow every release and that they knew the code. I
explained why I thought it was necessary, given that the first pre-sale would produce forty times
normal traffic, and I ran the first replay myself to show how it worked. Over time the team
accepted the gate and it became part of the release process. The first pre-sale on the new engine
sold 40,000 tickets in an hour without an outage, and the replay gate is still used by the team
today.

## Q3, five stars

At Eastgate Museum in 2021 I introduced a gate on the ticketing engine: nothing changes on the
sales path without last year's members' pre-sale traffic being replayed against it first. The two
senior developers were against it. One said it would add a day to every release; the other said
they knew the code and a replay would tell them nothing. The second objection was the one I took
seriously, because he was right about the code and wrong about the load, and a mandate would have
proved nothing to him. Rather than present the gate, I asked him to run the first replay with me,
on the engine as it stood. It fell over at a quarter of the expected load, in the session store,
which neither of us had suspected. After that the argument was about cost, not value, so I spent
a week making the replay a single command that ran in under an hour, which answered the first
objection. I accepted one exemption request, for a copy change, on condition that the request
was written down, and that log is now how exemptions work. The first pre-sale sold 40,000
tickets in an hour with no outage. What I got wrong was the order: I announced the gate before I
had the evidence, and spent a fortnight arguing that I could have spent testing. The gate is
still in use in 2024, run by the developer who opposed it; he added the exemption log himself.

## Q4, three stars

In 2023 the platform budget I managed at Westmere County Council was cut from £420,000 to
£355,000 for the following year. I reviewed every line with my product manager and decided to
protect the out-of-hours on-call cover and the accessibility audit, because both affect residents
directly, and to drop a second data-visualisation licence and a contractor who had been building
reporting dashboards. I told the team at our monthly meeting and explained the reasons, and I
told the housing office manager that the live repairs dashboard would move to a monthly report.
The cut was absorbed without any reduction in the services residents use, and the team
understood why the choices had been made.

## Q4, five stars

In autumn 2023 the platform budget I held at Westmere County Council was cut from £420,000 to
£355,000 for the next year, about fifteen per cent, with eight weeks to set the lines. I started
from what residents would lose rather than what the team would miss. I protected out-of-hours
on-call cover, because the February outage had shown what a weekend without it costs, and the
accessibility audit, because the benefits form had failed its last one. I dropped a second
data-visualisation licence and ended a contractor's engagement building reporting dashboards,
which meant the housing office's live repairs dashboard became a monthly report. I told the
contractor first, in person, with six weeks' notice and a reference. I told the housing office
manager before the finance circular reached her; she asked whether the dashboard was the first of
several things to go, and I showed her the ranked list of what would be cut next if the budget
fell again, which was the honest answer and which she had not expected to be allowed to see.
Monthly reporting cost her two days a month of hand-collation, which I had underestimated; we
automated the export in the spring. What I would do differently is ask the housing office what
they used the dashboard for before deciding it was the thing to drop. The ranked next-cuts list
is now a standing page the team maintains and the director reads each quarter.
