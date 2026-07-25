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
| 2 | [Matthew McConaughey — "Es hora de madurar"](https://www.youtube.com/watch?v=E7kJutQuim4) | 1:05 | ~15s | [run-2-note.md](run-2-note.md) / [raw extraction](run-2-notebooklm-extraction.md) |
| 3 | ["Mira este video cada mañana"](https://www.youtube.com/watch?v=W_yM7OkmHgM) | 0:55 | ~15s | [run-3-note.md](run-3-note.md) / [raw extraction](run-3-notebooklm-extraction.md) — generic source, weakest signal so far |
| 4 | [Marcus Elevation Taylor — "Debo continuar"](https://www.youtube.com/watch?v=qLHnu16XOaY) | 0:50 | ~15s | [run-4-note.md](run-4-note.md) / [raw extraction](run-4-notebooklm-extraction.md) |
| 5 | [Coach Pain — "Cuando duele"](https://www.youtube.com/watch?v=6Di3pJGL2y4) | 0:38 | ~15s | [run-5-note.md](run-5-note.md) / [raw extraction](run-5-notebooklm-extraction.md) |

All 5 runs done, 5/5 completed end to end, no failures. Manual
baseline timed for real: 10:00 for one note by hand, vs. ~1:23 average
per note through the pipeline (~86% time saved, including setup cost).
Full accounting and honest failure points in
[walkthrough.md](walkthrough.md).

## Pending

1. Post to the track thread.

## Deliverable links

- Pipeline design: [pipeline-design.md](pipeline-design.md)
- Walkthrough with all 5 runs, time accounting, failure points:
  [walkthrough.md](walkthrough.md)
