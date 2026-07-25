# The Through-Line: Map Content & CTAs

## One-line claim — 10 options

Pick one, then sharpen it — that part's yours, not mine.

1. Construyo sistemas que ya están en producción, no wireframes de lo
   que algún día van a ser.
2. Uso IA para lanzar sistemas de negocio reales, no para maquetar
   promesas.
3. Tres sistemas en producción. Cero PowerPoints.
4. No vendo ideas de IA: entrego sistemas que ya están corriendo.
5. Construyo y lanzo sistemas de negocio con IA como socio de
   ingeniería, no como autocompletado.
6. Trabajo solo y entrego a la velocidad de un equipo.
7. Sistemas reales, en producción, construidos con IA de punta a punta.
8. Lo que otros prometen para el próximo trimestre, yo ya lo tengo
   corriendo.
9. Construyo sistemas de negocio que funcionan el día que los entrego.
10. La IA no es mi feature, es cómo construyo todo.

**Elegido:** "Construyo y lanzo sistemas de negocio con IA como socio de
ingeniería, no como autocompletado."

---

## Content map

Ladder: toda página, toda sección, todo CTA apunta a la misma acción de
Week 1 — **que Mau sea contratado directamente** (contacto por email).

### Home

| # | Sección | Contenido | CTA |
|---|---|---|---|
| 1 | Hero | El claim elegido + una línea de prueba (3 sistemas reales) | "Hablemos" → Contact |
| 2 | Proof strip | 3 líneas cortas, una por caso: "4.200 personas en el primer evento" / "Legajo real de 1.870 documentos procesado" / "Backend real, validado con feedback de mercado" — cada una linkea a su caso en Work | (implícito, lleva a Work) |
| 3 | CTA de cierre | Repite la acción antes de que se vayan | "Hablemos" → Contact |

### Work

Orden por fuerza de la prueba, el caso más fuerte lidera:

| # | Caso | Por qué en esa posición | CTA |
|---|---|---|---|
| 1 | **DefensaOS** (lidera) | Cliente real pagando (USD 900), sistema en producción, arquitectura anti-alucinación verificable — la prueba más sólida y menos replicable | "Hablemos" → Contact |
| 2 | **Experiencia Elite** | Prueba de escala real (4.200 personas) + demuestra que el mismo método sirve para marketing/ads, no solo backend | "Hablemos" → Contact |
| 3 | **InmoDesk** | Backend real pero producto todavía en validación (falta WhatsApp) — etiquetado "en validación", no "en vivo" | "Hablemos" → Contact |

### Contact

| # | Sección | Contenido | CTA |
|---|---|---|---|
| 1 | El pedido | Copy ya redactado en [Frame It as Cases](../../week-02/frame-it-as-cases/framed-cases.md): qué necesitás, tiempo típico (2-4 semanas), respuesta a "¿y después?" | mailto: mau.sawicki@gmail.com — **esta es la acción final, no un CTA más** |

### About (secundaria — footer/nav, no está en el camino principal)

No forma parte del ladder principal: es profundidad opcional para quien
ya está convencido y quiere más contexto antes de escribir. No tiene CTA
propio porque no es un paso que alguien deba dar para llegar a Contact.

---

## Gather-list — lo que falta antes de la build week

Honesto, para no bloquear la semana de construcción:

- **InmoDesk no tiene URL pública en vivo todavía** — solo corre local/demo.
  Hasta que se deploye, Work va a mostrar el screenshot + el estado
  "en validación" sin link a producto, en vez de fingir que existe un
  link.
- **DefensaOS no va a tener link público, por diseño** — el sistema real
  vive en `internal.defensaos.com` detrás de Cloudflare Access, por
  confidencialidad del caso y la clienta. La prueba para este caso es el
  screenshot (ya redactado) + el testimonio, no un link navegable. Esto
  no es un pendiente que se resuelva, es una decisión permanente.
- **Testimonio de DefensaOS — existe pero no está formalizado.** La
  abogada dijo (mensaje/verbal, no por escrito todavía) que confía 100%
  en el sistema, que ya lo usa en casos reales, que el informe es muy
  completo, y que las etiquetas epistémicas le hicieron entender un caso
  en un par de horas en vez de semanas. Falta: (1) pedirle la cita
  exacta por escrito, no la versión parafraseada que tengo acá, y
  (2) su permiso explícito para publicarla en un portfolio público.
  **No se publica nada citándola hasta tener las dos cosas.**
- **Elite y DefensaOS no tienen gaps de prueba dura** — número real
  (4.200 asistentes) y número real (1.870 docs / 5.012 chunks / USD 900)
  respectivamente, ambos ya verificados contra los repos.
- **Sin proyecto de internship adicional identificado** más allá de
  estos 3 casos documentados — si aparece algo nuevo antes de la build
  week, agregarlo acá.
