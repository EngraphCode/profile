# Running the interview-question-exploration skill

This skill follows the Agent Skills format (a `SKILL.md` with frontmatter, plus `references/`,
`assets/` and `scripts/`). It is written to run the same way in Claude Code, Claude.ai, OpenAI
Codex and ChatGPT. It has three entry points: from nothing, by interview; from
sources the writer supplies (an exported LinkedIn profile, CVs, previous applications), built
into a private knowledge base and scaffold answers; and upgrading an answer the writer already
has, by a diagnosis and a one-question-at-a-time conversation. The agent picks the entry point
from what the writer brings; `SKILL.md` §Three entry points says how. When the writer supplies
samples of their own writing, the agent builds a voice profile from them
(`references/voice.md`) and uses it to check the answers against the writer's own habits, never
to write for them.

The skill holds no questions of its own: its first ask is always for the questions, verbatim
with their limits and the published criteria. Supplying material: put files in a `sources/`
folder beside the working papers (Claude Code, Codex) or add them to the project (Claude.ai,
ChatGPT). The agent says what support it reads each item as (the questions, prior questions, a
draft answer, a sample of the writer's voice, professional history, the employer's material) and
asks when it cannot tell; one document often gives several. A LinkedIn profile is supplied as
the profile's own PDF export or pasted text; a link is not a source until its text is in hand.
`scripts/source_text.py` prints text, Markdown, Word and HTML files, and PDFs where a PDF text
tool is installed. Sources are personal data: keep them where the writer controls them and check
a hosted product's data settings before uploading an employer's confidential material.

The instructions the agent follows are in [SKILL.md](SKILL.md); this file says how to get the
skill in front of each product and what each one needs for the two steps that depend on the
environment: the fresh assessor read (step 7) and the checking script (steps 6 and 8).

## What the skill needs from the environment

- **A way to load `SKILL.md` and, on demand, the references.** Products that support Agent
  Skills do this themselves. Products that do not can hold the files in a project and be told to
  read `SKILL.md` first.
- **A fresh session for the assessor read**, which has seen none of the working papers. Each
  product has a way to make one; see below.
- **Optionally, Python 3**, to run `scripts/check_answer.py`. Without it, the final checklist's
  mechanical items are done by hand.

The working papers (the brief, the episode bank, the worksheets, the fact ledger) are the
writer's private documents. Keep them where the writer controls them, and check the product's
data settings before uploading an employer's confidential material anywhere.

## Packaging for upload

Claude.ai and ChatGPT take the skill as one ZIP file whose single top-level entry is the
`interview-question-exploration` folder: the archive holds
`interview-question-exploration/SKILL.md`, never `SKILL.md` at its root. The whole folder ships,
`evals/` included; only caches, dotfiles and the `out/` folder the archive is written to are left
out. From the folder that contains `interview-question-exploration/`:

```bash
zip -r interview-question-exploration/out/interview-question-exploration.zip interview-question-exploration -x '*/out/*' '*__pycache__*' '*.pyc' '*/.*'
unzip -l interview-question-exploration/out/interview-question-exploration.zip
```

Every entry in the listing starts with `interview-question-exploration/`. A `.skill` file, which Anthropic's
skill-creator produces, is the same ZIP under another extension; rename it to `.zip` if an upload
form refuses it. Claude Code and Codex take the folder itself, unzipped.

## Claude Code

Copy the `interview-question-exploration` directory into the project's `.claude/skills/` directory, or into
`~/.claude/skills/` for every project. Claude Code reads the frontmatter at start and loads
`SKILL.md` when the task matches; the references load when a step names them. The script runs in
the shell:

```bash
python3 .claude/skills/interview-question-exploration/scripts/check_answer.py --words 250 answers/q1.md answers/q2.md
```

Fresh reader: a subagent whose whole prompt is the filled `assets/assessor-brief.md`, told to
read nothing else. The calling session triages the report with the writer.

## Claude.ai

Anthropic's help centre lists custom skills on the Free, Pro, Max, Team and Enterprise plans,
with code execution turned on in the settings; on Team and Enterprise an owner can turn uploads
off. Upload the ZIP from [Packaging for upload](#packaging-for-upload) under Customize, then
Skills, the + button, Create skill and Upload a skill, and turn the skill on. It then loads as in
Claude Code. An uploaded skill is visible only to the person who uploaded it until they share it,
which Team and Enterprise plans allow.

Where uploads are off, make a project, add every file in the directory to the project's
knowledge, and put this in the project's instructions:

> Read SKILL.md before anything else and follow its steps in order. Load a reference file only
> when a step names it.

Fresh reader: a new conversation outside the project, with the filled assessor brief pasted in.
The script can run in a conversation that has code execution; otherwise do the checklist by hand.

## OpenAI Codex

Copy the directory into `.codex/skills/` in the repository, or into `~/.codex/skills/` for every
repository, where the version in use supports Agent Skills; otherwise point the session at the
directory and ask it to read `SKILL.md` first. The script runs in the shell as above.

Fresh reader: a new session in a directory that holds only the filled brief, or a subagent where
the version in use supports one.

## ChatGPT

Two routes, by plan.

**As a skill.** OpenAI's help centre lists Skills for Business, Enterprise, Healthcare and Edu
workspaces, where a workspace admin decides whether members may upload them. Upload the ZIP from
[Packaging for upload](#packaging-for-upload) as a new skill (Skills, then New skill, then Upload
from your computer). ChatGPT loads it when a request matches the skill's description, or when
the writer names it with `@`.

**As a project**, on Plus, Pro and any plan without Skills. Make a project. Add every file in
the directory to the project's files. Paste the text of
[assets/chatgpt-project-instructions.md](assets/chatgpt-project-instructions.md) into the
project's instructions; it is short because the instructions field has a character limit, and
it tells the model to read `SKILL.md` from the files and follow it. Keep the writer's working
papers in the same project as files, or as the conversation itself.

Fresh reader: a new temporary chat, or a chat outside the project, with memory off for that
chat, and the filled assessor brief pasted in. A reader inside the project can see the working
papers and is not fresh.

Script: upload `scripts/check_answer.py` and the answer files to a chat that has the Python tool
and ask it to run the script with the limit; the script uses only the standard library. Without
the Python tool, do the final checklist's mechanical items by hand.

## Differences between models, and what the skill does about them

Both model families follow the pipeline. Two tendencies differ and the skill guards against
both in its first section, "Read this first", so the guard is loaded before any step:

- A model that is eager to help will draft sentences for the writer, supply a plausible figure
  or polish a claim upward. The first rule forbids all three, and the fact ledger makes the
  breach visible at the proof pass.
- A model that is eager to be thorough will ask several questions at once and overwhelm the
  interview. The second rule is one question at a time, captured before the next.

If a session drifts from either rule, say "read this first" and it will re-read the section.

## Layout

```text
interview-question-exploration/
├── SKILL.md
├── README.md
├── references/
│   ├── rubric.md
│   ├── answer-shape.md
│   ├── elicitation.md
│   ├── truth-and-attribution.md
│   ├── editing-passes.md
│   ├── assessor-read.md
│   ├── upgrade-conversation.md
│   ├── from-sources.md
│   └── voice.md
├── assets/
│   ├── brief.md
│   ├── episode-bank.md
│   ├── answer-worksheet.md
│   ├── fact-ledger.md
│   ├── assessor-brief.md
│   ├── final-checklist.md
│   ├── upgrade-diagnosis.md
│   ├── knowledge-base.md
│   ├── voice-profile.md
│   └── chatgpt-project-instructions.md
├── scripts/
│   ├── check_answer.py
│   ├── source_text.py
│   └── voice_profile.py
└── evals/
    ├── README.md
    ├── fixtures/
    ├── scripts/
    └── results/
```

`evals/` holds an invented sift (a role, its criteria, four questions, a marking scheme,
answers at three and five stars, and two source documents for a fictional applicant), scripts
that build prompts for fresh readers, and the results of runs against that material. Its
README says what is measured and how to run it. Nothing in it describes a real employer. It ships
with the skill.
