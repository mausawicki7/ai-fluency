# Still ugly

Honest, not exhaustive:

- **The DefensaOS screenshot doesn't match the other two visually.**
  It's got big black redaction boxes covering most of the image (for
  real reasons — it hides a real defendant's name and case data — but
  next to Elite's clean hero shot and InmoDesk's dashboard crop, the
  three images don't read as a consistent set.
- **Hero texture image is heavy** (~1MB PNG) and isn't optimized —
  fine on desktop wifi, probably slow on mobile data.
- **URLs are hash-based** (`#/work`, not `/work`) — a deliberate
  trade-off for GitHub Pages compatibility without extra config, but it
  looks less clean than a real path.
- **About is genuinely hidden** — footer-only, no nav link. That's the
  sitemap decision (it's optional, not required to reach Contact), but
  a first-time visitor has no visual cue that it exists at all unless
  they scroll to the very bottom.
- **No custom favicon or page title per route** — still the default
  Vite favicon, and the browser tab always says "Mauricio Sawicki"
  regardless of which page is open.
- **No transition between routes** — page changes are an instant, hard
  cut, no fade or any sense of navigation happening.
- **InmoDesk's own gap is still open, not just a portfolio issue** — the
  case honestly says WhatsApp isn't connected yet. That's accurate, not
  a bug, but it means one of three proof points is weaker than the
  other two on the actual live site, not just in the write-up.
