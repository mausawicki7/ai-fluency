# MCP evidence — 3 tasks chat alone couldn't do

Connector: **Meta Ads MCP**, already wired into this Claude session,
run against Mauricio's real, live ad accounts (read-only — no spend or
config changes). Every result below is real API data, not simulated.

## Task 1 — List real ad accounts

Tool: `ads_get_ad_accounts`. Chat alone has no way to know these exist;
this is a live API call against Meta's servers.

Returned 18 real ad accounts, including:
`Experiencia Elite Motor Show` (446362718218365, ACTIVE),
`Pantera` (Pantera Fiesta), `Aruba Fitness Club`, `Aruba Fast Food`,
`OZUKA`, `COSTA BRAVA`, `Borderline Chile`,
`Subsecretaría de Capacitación` (a government account) — real accounts
Mauricio manages, with real IDs, currencies, and statuses.

## Task 2 — Performance trend on a real campaign

Tool: `ads_insights_performance_trend`, scoped to the Elite account
(446362718218365). Result:

```
Cohort: Optimization Goal = LANDING_PAGE_VIEWS, prospecting (new customers)
Metric analyzed: CPR (cost per result)

- Jeque Drift · BMW E92 · Córdoba · Tráfico — CPR change 19.90%, trend: BAD
- AD | Ferrari — CPR change 3.98%, trend: BAD
- AD | Elegí tu día — CPR change 18.72%, trend: GOOD
- AD | Entradas — CPR change 0.56%, trend: GOOD
```

This is a computed trend over real spend/conversion data — chat has no
access to this without the tool call.

## Task 3 — List real campaigns with spend

Tool: `ads_get_ad_entities`, level `campaign`, last 30 days, Elite
account. Result:

| Campaign | Status | Spend (ARS) | Impressions |
|---|---|---|---|
| Córdoba · Jeque Drift · THRUPLAY | ACTIVE | $25.162,63 | 34.474 |
| Córdoba · Jeque Drift · Tráfico | ACTIVE | $58.936,90 | 82.634 |
| EE \| Córdoba \| Tráfico | ACTIVE | $198.958,85 | 286.934 |
| EE \| Córdoba \| Video | ACTIVE | $3.526,09 | 7.383 |

## Bonus — a real failure, also evidence of a real tool call

Tool: `ads_account_get_activity_logs`, same account. Result: an actual
API error —

```
This tool is new and is being gradually rolled out across ad accounts.
Please check back at a later date. Ad account ID: 446362718218365
```

Left in on purpose: it's proof the call actually hit Meta's live
infrastructure rather than returning a canned response — a fake demo
doesn't produce a real rollout error.
