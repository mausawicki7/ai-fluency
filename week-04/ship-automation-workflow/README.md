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

## Pending

1. Create the `Podcast Research Notes` Claude Project with the
   instructions in the design doc.
2. Run the pipeline on 5 real episodes, timed.
3. Time one manual pass (no AI) for a real time-saved comparison.
4. Compile the walkthrough: 5 runs + outputs + honest failure points +
   time accounting.
5. Post to the track thread.

## Deliverable links

- Pipeline design: [pipeline-design.md](pipeline-design.md)
- Walkthrough with the 5 runs: _(pending)_
