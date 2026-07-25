# Prompting Fundamentals on Real Tasks v2

**Code:** FL-02
**Track:** General AI Fluency
**Estimated workload:** 6h
**Phase:** Foundations

## Brief

Full brief: [brief.md](brief.md)

Work through the Anthropic Prompt Engineering Interactive Tutorial, take
one FL-01 target task, iterate a naive prompt through 5+ named
techniques, run the final version on both Claude and ChatGPT, and
distill a reusable template.

## What was delivered

- Target task (from [FL-01's target-task list](../../week-01/ai-workflow-audit-and-tool-setup/workflow-audit.md)):
  managing Meta Ads campaigns via Claude MCP, using real Experiencia
  Elite campaign data as the working example.
- Baseline + 5 iterations, each tied to exactly one named technique:
  role assignment → context and motivation → few-shot examples → output
  structure → step decomposition.
- Honest regression: the output-structure pass (traffic-light format)
  read faster but hid the reasoning that made the alert trustworthy —
  fixed in the next iteration (step decomposition forces the reasoning
  before compressing to a color).
- Final reusable template, no personal context required to use it.
- Full log: [prompt-iteration-log.md](prompt-iteration-log.md).

## Pending (can't be done from here)

1. **Anthropic Prompt Engineering Interactive Tutorial** (basics
   chapters) — external resource, has to be worked through directly.
2. **Cross-model comparison** — the final prompt needs to actually run
   in ChatGPT (real output, not simulated) so the comparison in the log
   is honest. Paste the ChatGPT output back and I'll write the
   tone/accuracy/structure/failure-point comparison against Claude's
   output.
3. Track thread post.

## Deliverable links

- Prompt iteration log: [prompt-iteration-log.md](prompt-iteration-log.md)
