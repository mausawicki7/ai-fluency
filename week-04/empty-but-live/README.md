# Empty but Live: Ship a Blank Page

**Track:** General AI Fluency
**Estimated workload:** 2h
**Phase:** Build

## Brief

Full brief: [brief.md](brief.md)

Ship a near-blank page on a real, reachable URL — the portfolio *is*
the capstone, decided this week (see [capstone/CLAUDE.md](../../capstone/CLAUDE.md)),
built with React + Vite (Node), matching the stack already documented
there.

## What was delivered

- Scaffolded a Vite + React app inside `capstone/` (kept the existing
  `README.md`/`CLAUDE.md`, added the actual project files).
- Near-blank page: name, the claim chosen in
  [The Through-Line](../../week-03/the-through-line/through-line.md),
  and a mailto link — styled with the
  [identity kit](../../week-03/decide-once-identity-kit/) (Plex Mono,
  sage/pine/orange palette, dark by default).
- Removed the Vite/React boilerplate (counter, logos, docs links) —
  nothing in a near-blank page should point anywhere but the one action.
- `npm run build` verified clean.
- GitHub Actions workflow added
  ([.github/workflows/deploy-capstone.yml](../../.github/workflows/deploy-capstone.yml))
  to build `capstone/` and deploy to GitHub Pages on every push to
  `main` that touches `capstone/`.
- `vite.config.js` sets `base: '/ai-fluency/'` to match the GitHub
  Pages project-page path.

- GitHub Pages enabled (Source: GitHub Actions), workflow ran green
  after fixing two issues along the way: Pages had to be enabled before
  `configure-pages` could find the site (first run failed on that), and
  a Node 20-deprecation warning fixed by bumping the workflow to Node 24.
- **Live and confirmed on a real phone**, not a resized desktop window:
  [mobile-check.jpeg](mobile-check.jpeg).

## Pending

1. Drop the identity kit, case studies, and content map into the Claude
   Project (`AI Fluency — Portfolio Build`) so build week has everything
   in one place.
2. Post to the track thread.

## Deliverable links

- Live URL: **https://mausawicki7.github.io/ai-fluency/**
- Mobile confirmation screenshot: [mobile-check.jpeg](mobile-check.jpeg)
