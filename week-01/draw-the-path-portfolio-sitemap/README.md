# Draw the Path: Portfolio Sitemap + Toolkit

**Track:** AI Fluency (AIF)
**Estimated workload:** 3h

## Brief

> Sketch a portfolio sitemap, the few pages it takes to walk your one person
> from landing to believing you to the one action, and nothing more.
>
> Set up your free toolkit: accounts for Claude, ChatGPT, Gemini, and
> Perplexity. Create one Claude Project named for this build, with custom
> instructions (your proof statement pasted in) and a request to act as a
> tutor. Run one real prompt: have it pressure-test your sitemap against your
> one action and your claim. Save the answer.

**Deliverable:** A photo of your sitemap sketch + a screenshot of your
configured Claude Project and the pressure-test prompt + output, in your
track thread.

Full brief: [brief.md](brief.md)

## What was delivered

- Before sketching, checked the [proof statement](../what-are-you-proving/proof-statement.md)
  against real shipped work (Experiencia Elite, DefensaOS, InmoDesk). Found
  a mismatch: the claim said "e-commerce," but the real projects are events
  ticketing, legal ops, and real estate — not e-commerce. It also claimed AI
  running live in production, when AI is actually the build method, not an
  end-user feature, in these projects. Revised the proof statement to match
  what's provable before sketching the sitemap on top of it.
- Sitemap: 4 pages (Home → Work → About → Contact), each justified against
  the claim/action. Rendered as a diagram:
  [sitemap.html artifact](https://claude.ai/code/artifact/2a5466af-6bed-4a50-b821-bd67e0947217)
  — screenshot this as the sketch deliverable.
- Work section case studies confirmed presentable (no NDA/client
  restrictions): Experiencia Elite, DefensaOS, InmoDesk. Islanegra left out
  — context unconfirmed.
- Pending (manual steps, can't be done from the repo): Claude/ChatGPT/Gemini/
  Perplexity accounts, creating the actual Claude Project, running the
  pressure-test prompt, taking screenshots, posting to the track thread.

## Sitemap

| # | Page | Content | Why it earns its place |
|---|---|---|---|
| 1 | Home | Headline = the claim, one proof line, single CTA ("Hablemos") | No claim to believe without it |
| 2 | Work | Elite / DefensaOS / InmoDesk — problem → what was built → stack → status | Only page that proves the claim instead of restating it |
| 3 | About | How I work (AI-native, solo, shipping pace) — not a bio | Answers "why you, not a 5-person team" before it's asked |
| 4 | Contact | One path: email or call, no long form | The action defined in the proof statement |

## Claude Project setup

Create a project named e.g. `AI Fluency — Portfolio Build`. Paste this as
custom instructions:

```
Sos mi tutor para las 8 semanas del programa AI Fluency. Mi proof statement es:

Claim: Puedo construir y lanzar a producción sistemas operativos completos
para negocios (plataformas web, paneles internos, CRMs) trabajando de forma
AI-native de punta a punta — usando IA como socio de ingeniería en todo el
ciclo, no solo autocompletado.
Persona: un dueño de negocio que necesita un sistema construido y
funcionando ya, no dentro de seis meses con un equipo grande.
Acción: que me contrate directamente.

Tu trabajo:
- Cuestionar cualquier entregable mío que no sea coherente con este claim,
  esta persona y esta acción.
- Empujarme cuando agregue páginas, features o contenido "porque sí" en vez
  de porque le sirve a la acción.
- Ser específico y exigente, no complaciente — preferís señalar el problema
  aunque me moleste, antes que aprobar algo mediocre.
- Recordarme el claim/persona/acción cada vez que me desvíe.
```

## Pressure-test prompt

Run this inside the project, with the sitemap table above pasted in:

```
Este es mi sitemap para el portfolio:

[pegar la tabla de 4 páginas de arriba]

Pressure-testealo contra mi claim y mi acción:
1. ¿Alguna página no le sirve directamente a que la persona haga la acción?
   Si es así, decime cuál sacarías.
2. ¿Falta algo que la persona necesitaría ver antes de confiar lo suficiente
   para actuar?
3. ¿El orden de las páginas es el que más rápido lleva a la acción, o hay
   uno mejor?

Sé duro, no me digas que está bien si no lo está.
```

Save the output, screenshot it, and note at least one thing you'd change —
required by the pass/revise criteria.

## Deliverable links

- Sitemap diagram: [artifact](https://claude.ai/code/artifact/2a5466af-6bed-4a50-b821-bd67e0947217)
- Claude Project screenshot: _(pending)_
- Pressure-test prompt + output screenshot: _(pending)_
- Track thread post: _(pending)_
