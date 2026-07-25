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

## Pending (needs Mau)

1. **Confirm the page looks right** — was running at
   `http://localhost:5184/` during the session for a local check.
2. **Enable GitHub Pages on the repo** (one-time, can't be done from
   here): on GitHub.com → this repo → Settings → Pages → under "Build
   and deployment", set **Source: GitHub Actions**. The workflow is
   already in place; it just needs Pages turned on to actually publish.
3. Once enabled, push (or re-run the workflow) and the site goes live at
   `https://mausawicki7.github.io/ai-fluency/`.
4. **Open that URL on your phone**, not just the laptop, to satisfy the
   "confirm it's really live" criterion — screenshot it.
5. Drop the identity kit, case studies, and content map into the Claude
   Project (`AI Fluency — Portfolio Build`) so build week has everything
   in one place.
6. Post to the track thread.

## Deliverable links

- Live URL (after Pages is enabled):
  `https://mausawicki7.github.io/ai-fluency/`
