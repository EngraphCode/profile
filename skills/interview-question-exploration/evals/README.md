# Evals for the interview-question-exploration skill

Everything in this directory is invented: the employer, the role, the criteria, the questions,
the marking scheme, the answers and the applicant's documents. It describes no real recruitment.
Add further fixtures the same way, invented and labelled as such.

## What is measured

Five things, each a comparison between what the skill produces or assumes and what the invented
marking scheme in `fixtures/marking-scheme.md` says.

1. **Inference.** The skill's step 1 asks the agent to infer, from the question and the
   published criteria alone, what the marking scheme rewards: the parts, the behaviour screened
   out at one star, what three contains, what five adds (method, judgement), the counterpart,
   the counted outcome. A fresh agent runs step 1 with the skill and nothing else; the readings
   are then scored by hand against the scheme on those dimensions.
2. **Rubric agreement.** The same answers are scored twice by fresh readers: once with the
   skill's default rubric (from `assets/assessor-brief.md`), once with the scheme. If the
   scores and the named levers agree, the default rubric is a good proxy where an employer
   publishes nothing.
3. **Shape validity.** The answers in `fixtures/synthetic-answers.md` were written to the
   skill's description of three and five stars. The fives should score five under the scheme
   and the threes three. If a five scores lower, the shape is missing something the scheme
   rewards; the lever named is the gap.
4. **From-sources mode.** A fresh agent runs the mode over `fixtures/sources/` for the four
   questions. Every scaffold sentence must carry a source tag or `[paraphrase]`, every missing
   element must be an ask, and no sentence may be inferred. The scaffolds should score about
   three under the scheme before any conversation.
5. **Upgrade mode.** An agent runs the upgrade conversation on one three-star answer while a
   second party plays the writer, holding the facts of the matching five-star answer and
   nothing else. The result should score five under the scheme, and every added particular must
   trace to something the writer said.

## Layout

```text
evals/
├── README.md
├── fixtures/
│   ├── questions-and-criteria.md # the invented role, criteria and four questions
│   ├── marking-scheme.md         # the invented scheme, one section per question
│   ├── synthetic-answers.md      # invented answers at three and five stars per question
│   └── sources/                  # invented documents for the fictional applicant A. B.
├── scripts/
│   ├── make_prompts.py           # build the inference, default and scheme prompts
│   ├── decode.py                 # print a .b64 fixture (for fixtures kept encoded)
│   └── encode.py                 # encode a plain file
└── results/
    ├── <date>-summary.md         # scores and dimension-level findings
    └── raw/                      # the readers' reports, verbatim
```

## Running it

From this directory, with the skill one level up:

```bash
python3 scripts/make_prompts.py --skill .. inference
python3 scripts/make_prompts.py --skill .. default
python3 scripts/make_prompts.py --skill .. scheme
```

Each prints one prompt. Give each prompt to a fresh reader (a subagent, or a new conversation
with nothing else in it). The `inference` reader must be able to read the skill directory and
the questions file, and nothing else. The `default` and `scheme` readers need only their prompt,
which carries the answers inline. Add `--answers FILE ...` to either scoring variant to score
other answers (for example the scaffolds, or the output of an upgrade conversation), each file
with its answers under `##` headings that name the question and the set.

For the from-sources test, give a fresh agent the skill directory, the questions file and
`fixtures/sources/`, and ask it to run the mode and write its knowledge base, criteria map and
scaffolds into `results/run-from-sources/`. For the upgrade test, give one agent the skill and a
three-star answer, and have a second party answer its questions from the matching five-star
answer's facts only.

Keep each reader's raw report in `results/raw/` and write the summary by hand: the scores side by
side, the levers, the inference scored per dimension, and what changed in the skill as a result.
