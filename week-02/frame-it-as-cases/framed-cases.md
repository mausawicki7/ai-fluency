# Framed Cases

## Voice card

**Directo, técnico, concreto, sin venta forzada.**

## Bio

Construyo y lanzo sistemas de negocio en producción — paneles, CRMs,
plataformas — con IA como socio de ingeniería en todo el ciclo, no como
autocompletado. Sin equipo: un evento con 4.200 personas, un motor de
clasificación de legajos penales corriendo en producción, un SaaS de
gestión de reclamos ya validado en el mercado. Si necesitás algo
funcionando ya, no en seis meses, hablemos.

## Contact / CTA

Contame qué necesitás. Proyectos típicos: 2 a 4 semanas de la primera
charla a producción. No entrego y desaparezco — sigo siendo tu punto de
contacto después del lanzamiento.

→ mau.sawicki@gmail.com

---

## Experiencia Elite

**Problema:** [Tu ciudad] no tenía un evento con autos exóticos — la idea
era que los pibes se pudieran subir a una Ferrari 458 Italia. Puertas
adentro, el quilombo real era otro: ticketing y coordinar la info de la
dinámica del evento a mano, por WhatsApp y planillas, en una gira de 4
ciudades.

**Qué hice / decidí:** Armé la web en Vercel con Supabase para el CRM de
sponsors, integré EventoSimple/InstaTicketQR para el ticketing, y trabajé
con Claude la estructura para que fuera legible tanto por gente como por
buscadores y agentes de IA — SEO limpio desde el diseño, no parchado
después. Las campañas de Meta Ads las manejo con Claude vía MCP: prendo,
mido y ajusto todo charlando desde la terminal, sin tocar la interfaz de
Meta.

**Resultado:** 4.200 personas en el primer evento. Reportes de campañas en
tiempo real sin abrir Ads Manager — la única interfaz que uso es la
conversación.

**Estado:** en vivo.

---

## DefensaOS

**Problema:** Una abogada penalista real tenía legajos de más de 3.000
documentos — declaraciones, pericias, actas, audio y video de
audiencias — que debía revisar a mano, con los tiempos que impone el
proceso acusatorio de la provincia del Neuquén encima. Es materialmente
imposible leer y clasificar ese volumen a tiempo. El resultado: llegaba a
las audiencias sin el caso digerido, porque armar el mapa del expediente
a mano se comía el tiempo que debería haber usado para pensar la
estrategia de defensa.

**Qué hice / decidí:** Construí Defensa OS Penal: un pipeline que hace
OCR sobre PDFs e imágenes (Mistral), transcribe audio y video de
audiencias con diarización (AssemblyAI), indexa todo con embeddings
semánticos (pgvector, búsqueda híbrida) y corre 9 módulos de análisis con
Claude Opus 4.7 — mapa de imputación, matriz de estafa, contradicciones,
preguntas para audiencia, entre otros. Cada hallazgo tiene que traer una
cita textual verificada contra el documento original (chequeo de
similitud, tolerancia 5%) o queda etiquetado como `dato_no_acreditado` —
el sistema no inventa lo que no puede citar. Documenté cada decisión
técnica en ADRs (10 hasta ahora) y construí todo con Claude Code.

**Resultado:** Sistema entregado y en producción con la primera clienta
paga (USD 900 cobrados, `PROD_READY=true` activo). Validado con un
legajo real de 1.870 documentos y ~5.012 chunks — la corrida completa
procesó todo, incluidos los audios y videos con testimonios de víctimas y
testigos, sin recortes.

**Estado:** en vivo — cliente real pagando.

---

## InmoDesk

**Problema:** Las inmobiliarias que administran entre 100 y 1.500 unidades
gestionan los reclamos de mantenimiento por WhatsApp suelto, mails o
llamados — sin trazabilidad. Se pierden reclamos, no queda registro de
quién aprobó qué, y el administrador termina de teléfono descompuesto entre
inquilino, propietario y el proveedor de turno.

**Qué hice / decidí:** Construí InmoDesk como un flujo trazable de punta a
punta: el inquilino reporta, IA clasifica por rubro y urgencia, entra al
panel del administrador, pasa por aprobación del propietario cuando
corresponde, se asigna proveedor y cierra con evidencia. React 19 + Vite +
Supabase real (no mock data), construido con Claude Code. Cuando lo mostré
en LinkedIn y alguien marcó la informalidad del rubro como obstáculo de
adopción, ajusté el enfoque: InmoDesk no le exige formalidad a nadie,
absorbe esa informalidad en la capa intermedia y da valor por
trazabilidad, no por imponer proceso.

**Resultado:** Backend real funcionando — dashboard, incidencias,
propiedades, propietarios, proveedores, simulador de reclamo para demos —
validado con feedback de mercado real tras la exposición pública. Falta
conectar WhatsApp, el canal de entrada real; es el próximo paso.

**Estado:** en validación (backend real + demo pública, WhatsApp pendiente).

---

## Before / After

Para mostrar la diferencia entre una pasada genérica de IA y la versión
editada, esto es lo que Claude generaría por defecto para la sección
"qué hice / decidí" de Elite si no le doy el voice card ni los hechos
concretos, contra lo que quedó en la case final:

**Antes (genérico):**

> Leveraged a robust, scalable tech stack to deliver a seamless,
> results-driven digital experience that empowers stakeholders and drives
> engagement across the entire event lifecycle, while harnessing the power
> of AI to optimize search visibility and marketing performance.

**Después (editado, voice card aplicado):**

> Armé la web en Vercel con Supabase para el CRM de sponsors, integré
> EventoSimple/InstaTicketQR para el ticketing, y trabajé con Claude la
> estructura para que fuera legible tanto por gente como por buscadores y
> agentes de IA — SEO limpio desde el diseño, no parchado después. Las
> campañas de Meta Ads las manejo con Claude vía MCP: prendo, mido y
> ajusto todo charlando desde la terminal, sin tocar la interfaz de Meta.

La versión genérica no menciona un solo hecho verificable (ni stack real,
ni herramienta, ni decisión) — podría describir cualquier evento de
cualquier persona. La editada nombra el stack real, la decisión concreta
(consultar con Claude la arquitectura de discoverability) y cómo maneja
las campañas hoy (MCP desde la terminal), que es información que solo yo
tengo.
