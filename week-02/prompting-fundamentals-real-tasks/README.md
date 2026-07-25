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
- Cross-model comparison run for real: same final prompt + same data
  pasted by hand (no MCP, so it's a fair comparison), run on ChatGPT —
  raw output saved at [chatgpt-output.md](chatgpt-output.md). Structure
  and diagnosis accuracy matched Claude's; the real divergence was in
  root-cause assumption (ad-set/targeting vs. creative fatigue) with
  neither model flagging that it was guessing.
- Final reusable template updated after the comparison: now requires the
  model to name what evidence is missing instead of silently picking one
  explanation when a metric drop has more than one plausible cause.
- Full log: [prompt-iteration-log.md](prompt-iteration-log.md).

- Anthropic Prompt Engineering Interactive Tutorial (basics chapters)
  completed.

## Pending

1. Track thread post.

## Deliverable links

- Prompt iteration log: [prompt-iteration-log.md](prompt-iteration-log.md)
- ChatGPT raw output: [chatgpt-output.md](chatgpt-output.md)
