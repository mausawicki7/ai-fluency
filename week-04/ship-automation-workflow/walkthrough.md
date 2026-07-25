# Walkthrough — Podcast → Structured Research Notes

FL-04, from the [pipeline design](pipeline-design.md). All 5 runs
completed end to end, no failed runs.

## Step diagram

```
1. GATHER (NotebookLM) — add source
        ↓
2. SYNTHESIZE (NotebookLM) — extraction prompt, source-grounded
        ↓
3. DRAFT (Claude Project "Podcast Research Notes") — fixed-template note
        ↓
4. REVIEW (human) — verify, file
```

Full prompts/configuration: [pipeline-design.md](pipeline-design.md).

## The 5 runs

| # | Source | Type | Step 1-2 | Step 3 | Note |
|---|---|---|---|---|---|
| 1 | [Shi Heng Yi — "Enfócate en ti y guarda silencio"](https://www.youtube.com/watch?v=J9CiWjLRu2g) | named speaker, substantive | 2:14 | ~15s | [run-1-note.md](run-1-note.md) |
| 2 | [Matthew McConaughey — "Es hora de madurar"](https://www.youtube.com/watch?v=E7kJutQuim4) | named speaker, substantive | 1:05 | ~15s | [run-2-note.md](run-2-note.md) |
| 3 | ["Mira este video cada mañana"](https://www.youtube.com/watch?v=W_yM7OkmHgM) | generic compilation | 0:55 | ~15s | [run-3-note.md](run-3-note.md) |
| 4 | [Marcus Elevation Taylor — "Debo continuar"](https://www.youtube.com/watch?v=qLHnu16XOaY) | generic compilation | 0:50 | ~15s | [run-4-note.md](run-4-note.md) |
| 5 | [Coach Pain — "Cuando duele"](https://www.youtube.com/watch?v=6Di3pJGL2y4) | generic compilation | 0:38 | ~15s | [run-5-note.md](run-5-note.md) |

## Time accounting (honest, including setup)

- **Setup cost (one-time):** 0:26 — creating the Claude Project and
  pasting the instructions.
- **Manual baseline (no AI, one note, timed for real):** 10:00.
- **Pipeline per run (step 1-2 + step 3):** run 1 2:29, run 2 1:20,
  run 3 1:10, run 4 1:05, run 5 0:53. **Average: ~1:23.**
- **Time saved per note:** ~8:37 (~86% reduction, roughly 7x faster
  than manual) — and that's *including* a first run that was slower
  purely from not knowing the NotebookLM UI yet (2:14 vs. 0:38 by run
  5). Steady-state savings are better than the average suggests.
- **Total time this session:** setup (0:26) + 5 runs (6:57) + the one
  manual baseline run (10:00) = ~17:23, for 5 real notes plus a reusable
  pipeline. Going forward, only the ~1:23/note marginal cost applies —
  setup is already paid.

## Where it breaks / what a human must still check

1. **Source quality isn't fixable by the pipeline.** Runs 1-2 (named
   speakers, real substance) produced notes with genuinely specific,
   non-generic connections. Runs 3-5 (generic YouTube motivational
   compilations) produced mostly abstract self-help claims — the
   pipeline faithfully extracted what was there, but a faithful
   extraction of a shallow source is still a shallow note. **A human
   has to pick sources with actual substance; the pipeline won't
   upgrade one that doesn't have any.**
2. **The "doesn't apply" instruction only works because it's explicit.**
   Every run correctly flagged at least one idea as "no aplica" instead
   of forcing a connection — but that's a direct result of the
   instruction telling it not to force relevance. Without that
   guardrail, the default LLM behavior would likely have manufactured
   a "why this matters" for everything. **A human should spot-check
   that the exclusions are real, not just for-show hedging with
   everything else still forced.**
3. **Citations weren't verified against the actual source.** The
   NotebookLM prompt asks for timestamps/citations, but the extractions
   above mostly lost the specific timestamp in the paraphrase. **A
   human should spot-check at least one claim per note against the
   real video** before trusting the "source-grounded" label at face
   value.
4. **Cross-source repetition isn't caught automatically.** By run 5, at
   least 3 of 5 sources converged on close variants of the same idea
   ("ejecutar ya, no esperar el momento perfecto" — runs 1, 3, 4, 5 in
   different words). The pipeline treats each note independently; if
   the goal is one bigger takeaway across many notes, **a human still
   has to notice the overlap.**
5. **First-run timing is inflated by the learning curve**, not the
   pipeline itself — expect the first 1-2 runs on any new no-code tool
   to run slower than steady state.

## What I'd change next

Given point 4, a real v2 would add a fifth step: after every 5-10 notes,
run one more NotebookLM/Claude pass across all the notes together to
surface repeated ideas — since by run 5 the repetition was already
becoming the more interesting signal than any single note.
