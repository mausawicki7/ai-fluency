# Agent Concepts and MCP Basics

**Code:** FL-05
**Track:** General AI Fluency
**Estimated workload:** 5h
**Phase:** Build (core)

## Brief

Full brief: [brief.md](brief.md)

Workflow vs. agent distinction applied to FL-04, MCP's three
primitives, one real connector run three times on live tasks, a
600-900 word explainer.

## What was delivered

- **Workflow vs. agent**, applied to FL-04: it's a workflow, not an
  agent — every step order is fixed in advance, nothing in the system
  decides on its own what to do next or whether to retry.
- **MCP demo, real and live**: used the Meta Ads MCP connector already
  wired into this session (Mauricio's actual production tool for
  Experiencia Elite) against his real ad accounts, read-only. Three
  successful tasks chat alone couldn't do — listing 18 real ad
  accounts, a real performance-trend analysis on Elite's Córdoba ads,
  and a real campaign/spend list — plus one real API error left in as
  evidence the calls hit live infrastructure, not a canned demo.
  Evidence: [mcp-evidence.md](mcp-evidence.md), with visual proof
  ([mcp-tool-call-permission.jpg](mcp-tool-call-permission.jpg),
  [mcp-tool-call-result.jpg](mcp-tool-call-result.jpg)) from re-running
  the same queries in claude.ai, where connector calls render visibly.
- **Explainer** (794 words): [explainer.md](explainer.md).

## Pending

1. Read the two linked resources yourself (Building Effective Agents,
   the MCP intro) — the explainer is drafted from the same material,
   but it needs to actually be checked against the sources and sound
   like you before it counts as "your own words."
2. Post to the track thread.

## Deliverable links

- Explainer: [explainer.md](explainer.md)
- MCP evidence (3 real tool-call tasks): [mcp-evidence.md](mcp-evidence.md)
