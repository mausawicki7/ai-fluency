# Three Roads: Choose Your Stack

## The four constraints

1. **Free only.** No paid tools, no paid hosting.
2. **Honest skill level.** Not a beginner learning a framework from
   scratch — already ships React 19 + Vite (+ Supabase) and Next.js in
   production, AI-native, working with Claude Code. The real skill is
   "component-based, AI-native building," not "any HTML I can hand-write."
3. **What the portfolio needs to do** (from the
   [sitemap](../../week-01/draw-the-path-portfolio-sitemap/) and
   [content map](../../week-03/the-through-line/through-line.md)): Home
   (headline + proof strip + CTA), Work (3 case studies — text + real
   screenshots), Contact (mailto). No forms that submit anywhere, no user
   accounts, no content that needs to change without a redeploy.
4. **How the work must be displayed:** real screenshots (a handful of
   images, not a big gallery), three-beat case-study text, one external
   live link (Elite only — DefensaOS and InmoDesk can't be linked live,
   confidentiality/not deployed). No embedded demos, no public code repo
   links (all three are client work).

**Dynamic yet?** No. Nothing on the current content map needs a backend.

## Three options, simplest to most powerful

### A — Plain HTML/CSS, no build step

- **Build:** hand-written HTML/CSS, maybe a few lines of vanilla JS for
  nav.
- **Host:** GitHub Pages, free, no build step at all.
- **Backend:** none — not needed.
- **Trade-off:** Right-sized for what the site does today. Zero
  tooling, zero framework overhead. But it doesn't match how I actually
  build (React + Claude Code, component by component) — I'd be writing
  in a way I don't work in, and any later interactive piece (even
  something small) means starting over with tooling I'd have to add
  from scratch.

### B — React + Vite, static build (chosen, already shipped)

- **Build:** React + Vite, fully client-side, no server.
- **Host:** GitHub Pages (already live at
  `mausawicki7.github.io/ai-fluency`), free.
- **Backend:** none needed now; easy to bolt on a serverless function
  later (a real contact form, for instance) without rewriting the
  frontend.
- **Trade-off:** Some overhead (React runtime, build step) for a site
  that's currently pure static content — by the book, that's slightly
  more machine than the job needs. What it buys: it's the same stack I
  already use to ship Elite, DefensaOS, and InmoDesk, built the same
  AI-native way with Claude Code. Using it on my own portfolio isn't
  just convenience, it's consistent with the claim itself ("I build
  production systems this way") — and I don't have to context-switch
  workflows to work on my own site.

### C — Next.js + Vercel, MDX case studies

- **Build:** Next.js App Router, case studies as MDX, image
  optimization, room for API routes later (real contact form, dynamic
  OG images).
- **Host:** Vercel free tier — literally the same host as DefensaOS.
- **Backend:** none needed today, but the most headroom if I want one —
  API routes are one file away.
- **Trade-off:** The most powerful and the most "mine" (matches
  DefensaOS exactly), but the most to maintain — framework version
  bumps, more config surface, more decisions — for a site whose actual
  job today is: show 3 screenshots and some text. Overkill for the
  current need.

## Pressure-testing B (the front-runner)

- **What breaks if I pick the simplest (A)?** Nothing breaks — A would
  serve today's content map just fine. This is the honest tension: A is
  the more "correct" minimal choice by the numbers. B wins on
  workflow-fit and headroom, not on a hard requirement A can't meet.
- **What do I maintain if I pick the most powerful (C)?** Framework
  upgrades and config for a static content site — real maintenance for
  no near-term payoff, since nothing on the map needs Next's actual
  advantages (SSR, API routes, image pipeline) yet.
- **Can I finish in two weeks?** Already finished and live — B shipped
  in week 4, ahead of the two-week bar. A would've too. C could have,
  but with more setup overhead for the same end result this week.
- **Does it show my work the way it needs to be shown?** Yes — same
  answer for all three, since the format (screenshots + text) doesn't
  require any framework capability. This isn't where B earns its place.

## Decision

**Chosen: B — React + Vite on GitHub Pages.**

Honestly, A is the more textbook-correct answer for what the site does
*today* — no backend, no interactivity, plain HTML would do the job
with less machinery. I'm not picking B because the site needs it yet.
I'm picking it because it's the stack I actually build in — the same
one behind all three real case studies — and using anything else for my
own portfolio means working in a way I don't otherwise work, for a
project that's supposed to prove exactly that way of working. C would
have been the "more mine" choice too, but the maintenance cost (Next.js
upgrades, more config) isn't earned by anything the current content map
needs — that's a real cost with no real benefit right now, so I didn't
pick it.

**Can I maintain this?** Yes — it's a subset of a stack I already run
in production on client work, so there's nothing new to learn to keep
it running, and no dependency I'm not already tracking elsewhere.

**Does it show my work well?** Yes for the current content map — but
that's true of all three options equally, so it isn't the reason B won.
