# Ship an Automation Workflow v2

**Code:** FL-04
**Track:** General AI Fluency
**Estimated workload:** 7h
**Phase:** Build (core)

## Brief

Full brief: [brief.md](brief.md)

Pick a real pipeline from the FL-01 audit, design 3+ steps, build it
no-code, run it on 5 real inputs timed against manual, note where it
breaks.

## What was delivered

- Pipeline chosen from the audit: **podcast → structured research
  notes** (task #14, "listen to podcasts for research," currently 100%
  manual with zero note-taking).
- 4-step design with real handoffs: NotebookLM (gather) → NotebookLM
  (synthesize, source-grounded) → Claude Project (draft into a fixed
  template, applies Mau's own relevance filter) → human review.
- Both configurations written: the NotebookLM extraction prompt and the
  Claude Project custom instructions.
- Full design doc: [pipeline-design.md](pipeline-design.md).

## Runs

| # | Source | Step 1-2 time | Step 3 time | Note |
|---|---|---|---|---|
| 1 | [Shi Heng Yi — "Enfócate en ti y guarda silencio"](https://www.youtube.com/watch?v=J9CiWjLRu2g) | 2:14 | ~15s | [run-1-note.md](run-1-note.md) / [raw extraction](run-1-notebooklm-extraction.md) |

## Pending

1. Runs 2-5 with real episodes, timed the same way.
2. Time one manual pass (no AI) for a real time-saved comparison.
3. Compile the final walkthrough: all 5 runs + honest failure points +
   time accounting.
4. Post to the track thread.

## Deliverable links

- Pipeline design: [pipeline-design.md](pipeline-design.md)
- Walkthrough with the 5 runs: _(pending)_
