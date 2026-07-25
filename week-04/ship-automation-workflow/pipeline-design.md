# Pipeline design — Podcast → Structured Research Notes

From [FL-01's workflow audit](../../week-01/ai-workflow-audit-and-tool-setup/workflow-audit.md),
task #14: "Listen to podcasts for research and inspiration" — today
100% manual ("Just me"). This pipeline doesn't replace listening, it
replaces the note-taking-and-filtering that currently doesn't happen at
all.

## Step diagram

```
1. GATHER (NotebookLM)
   Add the episode as a source (audio file, transcript, or YouTube link).
   Handoff → a NotebookLM notebook with the source loaded.
        ↓
2. SYNTHESIZE (NotebookLM)
   Run the extraction prompt against the source.
   Handoff → grounded extraction: key points + citations + actionable
             ideas + open questions, copied out as plain text.
        ↓
3. DRAFT (Claude Project "Podcast Research Notes")
   Paste the extraction in; get back a formatted study note.
   Handoff → a study note in a fixed template.
        ↓
4. REVIEW (human — Mau)
   Skim the note against the extraction, catch anything misrepresented
   or forced, file it.
   Handoff → approved note + a note of what had to be corrected (this
             feeds the failure-points section below).
```

Four distinct steps, three real handoffs. NotebookLM does the two
source-grounded steps (nothing invented, everything traceable to the
episode); Claude does the one step that needs *my* filter — deciding
what's actually relevant to how I work.

## Step 1-2 — NotebookLM prompt

Paste this into the NotebookLM chat once the source is loaded:

```
Basado en esta fuente, dame:
1. Los 5-8 puntos clave o afirmaciones más importantes, cada uno con la
   cita o el timestamp de dónde viene.
2. Cualquier idea accionable que se pueda aplicar a un negocio (no
   teoría abstracta).
3. Preguntas o puntos que el episodio deja sin resolver.

No agregues nada que no esté en la fuente.
```

## Step 3 — Claude Project custom instructions

Create a new Claude Project named `Podcast Research Notes`, paste this
as the project instructions:

```
Sos mi asistente de research. Te voy a pasar una extracción de
NotebookLM de un episodio de podcast (puntos clave, citas, ideas
accionables, preguntas abiertas) — no el audio, ya viene resumido y
con cita a la fuente.

Tu trabajo: convertir eso en UNA nota de estudio con este formato fijo:

## [Nombre del episodio/podcast]
**TL;DR:** una frase.
**3-5 ideas clave**, cada una con: la idea + por qué me importa a mí
específicamente (construyo sistemas de negocio AI-native —
automatización, e-commerce, ads, ops — para eventos, estudios legales,
real estate). Si una idea no tiene conexión real con mi trabajo,
decilo — no fuerces relevancia.
**Una cosa para probar esta semana**: la idea más accionable, convertida
en una acción concreta.
**Preguntas abiertas**: lo que el episodio no resolvió y debería
investigar más.

Reglas:
- No inventes nada que no esté en la extracción que te paso.
- Sé breve — esto es una nota de estudio, no un ensayo.
```

## What I need from you, per run

For each of the 5 real episodes:

1. Add it to NotebookLM, run the Step 1-2 prompt, time how long that
   takes you.
2. Paste the extraction into the `Podcast Research Notes` project, time
   that too.
3. Paste both the extraction and the final note back to me (or just tell
   me and I'll draft the note here using the same instructions — your
   call), plus your two timings.
4. Tell me, honestly, if anything in the note is wrong, forced, or
   missed — that's the failure-points data, not a nice-to-have.

Also time yourself doing this manually once (listen + take your own
notes, no AI) for one episode, so the time-saved estimate is real, not
assumed.
