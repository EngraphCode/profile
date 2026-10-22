# A. B. — Application answer, 2023

Everything in this document is invented for an evaluation. Written by the fictional A. B. in
2023 for a different role. The question was: "Tell us about a time you delivered under pressure. What
did you do and what was the result?"

In the autumn of 2021 the museum's new ticketing engine was due to take its first members'
pre-sale, and nobody on the team had run anything through a spike like it. Our members' sales
produce about forty times the normal daily peak in the first hour. I had argued earlier in the
year for using a hosted provider for exactly this reason, and the head of digital had kept the
decision to build our own engine so that the member journey stayed ours end to end. Once that
was settled I took on the load-testing workstream myself, because I was the person most worried
about the spike and I wanted the test written by someone who expected it to fail.

I took the previous year's pre-sale traffic and replayed it against the new engine in a
two-day spike test, three weeks before the sale. The first run fell over at about a quarter of
the expected load. We found the bottleneck in the session store, fixed it, and ran the replay
again twice more until it held at one and a half times the expected peak.

On the day the pre-sale sold 40,000 tickets in the first hour with no outage. The replay test
became a standing gate: nothing changes on the sales path now without the previous pre-sale's
traffic being replayed against it first.
