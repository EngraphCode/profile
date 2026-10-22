Question 3. Tell us about introducing a new way of working to a team that did not want it.
What was the resistance, how did you work with it, and what is the practice's state now?

[scaffold: assembled from your sources. Expect it to read like a list; the conversation is where
it becomes yours. Confirm every tagged sentence; answer every ask.]

I was Lead Engineer at Eastgate Museum from 2021 to 2022. [S1] [paraphrase] In the autumn of
2021 the museum's new ticketing engine was due to take its first members' pre-sale, and nobody
on the team had run anything through a spike like it. [S2] Our members' sales produce about
forty times the normal daily peak in the first hour. [S2] I had argued earlier in the year for
using a hosted provider for exactly this reason, and the head of digital had kept the decision
to build our own engine so that the member journey stayed ours end to end. [S2] Once that was
settled I took on the load-testing workstream myself, because I was the person most worried
about the spike and I wanted the test written by someone who expected it to fail. [S2] I took
the previous year's pre-sale traffic and replayed it against the new engine in a two-day spike
test, three weeks before the sale. [S2] [ask: the method and why. Why replay the previous
year's traffic rather than the obvious alternative, and what had already been tried?] [ask: the
resistance. The question asks about a team that did not want the practice, and neither source
says anyone resisted the replay test or the gate it became. Who, by role, did not want it; what
did they say, as near to their words as you can; and what was their best case? If nobody
resisted, say so: then this episode cannot carry this question and the choice goes back to the
criteria map.] [ask: working with the resistance. What did you change in the practice, or in
how you brought it in, because of what they said?] The first run fell over at about a quarter
of the expected load. [S2] We found the bottleneck in the session store, fixed it, and ran the
replay again twice more until it held at one and a half times the expected peak. [S2] [ask: the
cost, and who did which part. Who is the "we" that found and fixed the bottleneck, by role; and
what did the three runs cost in time or in anything that slipped?] On the day the pre-sale sold
40,000 tickets in the first hour with no outage. [S1, S2] [ask: the reflection. What worked,
and what would you do differently the next time you bring a practice to a team?] The replay
test became a standing gate: nothing changes on the sales path now without the previous
pre-sale's traffic being replayed against it first. [S2] [ask: the practice's state now. The
question asks for its state now. S2 was written in 2023 and S1 in 2024, both after you left the
museum in 2022. Is the gate still the team's release check today, how do you know, who runs it
without you, and what figure shows it in use?] [ask: terms. In eight words each, for a reader
outside the museum: the ticketing engine; a members' pre-sale; the session store.]

[count: 236 words without tags and asks, of a 250-word limit. Attribution unresolved: S1 says
introduced the gate; S2 says I took on the workstream, we found and fixed the bottleneck, and
the replay test became a gate with no one named. Expect this scaffold to score below three for
this question: parts one and four are sourced; part two, the resistance, is wholly unsourced,
and part three with it. Whether this is the right episode is open in the criteria map, with the
definition of done at Northshire as the alternative. The head of digital sentence, element
three, keeps S2's order because the sentence after it refers to it.]
