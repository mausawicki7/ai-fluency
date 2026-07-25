# Prompt Ladder

Track del prompt: copy/estructura de landing para Experiencia Elite
(venta de entradas).

## V0 — Baseline (flojo a propósito)

**Prompt:**

> Haceme una web de autos que venda.

**Output:**

> ¡Claro! Para una web de autos que venda, te recomiendo:
> - Un diseño moderno y atractivo, con fotos grandes de los vehículos
> - Un hero section con un call-to-action claro ("Contactanos hoy")
> - Catálogo de autos con filtros (marca, precio, año)
> - Testimonios de clientes satisfechos
> - Formulario de contacto o "Solicitá tu test drive"
> - Botones de WhatsApp/llamada visibles
> - Optimización para SEO y velocidad de carga
>
> ¿Querés que te ayude con el código o preferís que profundice en alguna
> sección?

Sabe que es sobre autos, pero nada más: asume que es una concesionaria
vendiendo vehículos (catálogo, test drive, filtros por marca), cuando en
realidad Elite no vende autos — vende entradas para subirse a ellos. No
sabe qué se vende de verdad, a quién, ni por qué. Podría ser la respuesta
a cualquier negocio de autos.

---

## V1 — Capa: objetivo más claro

**Qué cambié:** agregué el objetivo específico — no es una concesionaria
vendiendo autos, es vender entradas con urgencia de fecha límite.

**Prompt:**

> Hacé una web que venda entradas para un evento con fecha límite. El
> objetivo específico es maximizar la compra de tickets antes de que se
> agoten o venza la fecha del evento.

**Output (extracto):**

> Para vender entradas con urgencia de fecha límite:
> - Countdown timer hasta el evento
> - Stock de entradas visible ("quedan 120 lugares")
> - CTA principal: "Comprá tu entrada ahora"
> - Sección de FAQ sobre el evento
> - Integración con pasarela de pago
> - Testimonios de ediciones anteriores

**Qué mejoró en el output:** dejó de asumir que es una concesionaria
(catálogo, test drive, filtros por marca) y pasó a mecánicas de urgencia
de evento (countdown, stock de entradas visible) — ya apunta a
conversión de tickets, no a venta de vehículos.

**Qué sigue fallando:** sigue siendo una plantilla de "evento genérico" —
podría ser un recital, una conferencia, cualquier cosa. No sabe que es un
motor show con autos exóticos.

**Qué probaría después:** darle el contexto real del evento.

---

## V2 — Capa: contexto real

**Qué cambié:** metí la info real del evento — qué es, la propuesta de
valor central, las 4 ciudades, la plataforma de ticketing real.

**Prompt:**

> [Todo lo anterior] Contexto real: es Experiencia Elite, un motor show
> itinerante de autos exóticos que recorre Neuquén, Córdoba, Buenos Aires
> y Bariloche. La atracción central es que la gente se puede subir a
> autos como una Ferrari 458 Italia — no es solo mirar, es la experiencia
> de estar adentro. El ticketing corre por EventoSimple/InstaTicketQR.

**Output (extracto):**

> Con ese contexto, la web debería:
> - Hero con foto/video de alguien subiéndose a la Ferrari 458 — esa es
>   la promesa central, no "ver autos"
> - Selector de ciudad/fecha (Neuquén, Córdoba, Bs. As., Bariloche) bien
>   arriba, porque cada ciudad tiene su propia fecha y entrada
> - Botón de compra que lleva directo al checkout de
>   EventoSimple/InstaTicketQR por ciudad
> - Galería de los autos exóticos presentes en esa edición
> - Sección "qué incluye la entrada"

**Qué mejoró en el output:** dejó de ser un template de evento genérico —
ahora gira específicamente en torno al hook real (subirse al auto) y a la
logística real (selector de ciudad, la integración de ticketing
puntual). Ya no podría describir cualquier evento.

**Qué sigue fallando:** no sabe quién es el visitante típico — el tono y
el copy podrían no estarle hablando a la persona correcta.

**Qué probaría después:** definir la audiencia.

---

## V3 — Capa: audiencia definida

**Qué cambié:** definí quién decide la compra — no "gente interesada en
autos" en general.

**Prompt:**

> [Todo lo anterior] La audiencia principal son familias — padres que
> quieren darles a sus hijos la experiencia de subirse a un auto que
> nunca van a poder pagar, no fanáticos técnicos de autos que ya conocen
> las specs. El copy le tiene que hablar a ese padre que decide en el
> momento, no al que investiga durante semanas.

**Output (extracto):**

> El copy cambia de tono: menos ficha técnica de motor, más "mirá la
> cara que va a poner tu hijo cuando se suba a una Ferrari de verdad."
> El CTA pasa de "Comprá tu entrada" a algo más emocional, tipo "Regalale
> esta experiencia." Los precios se simplifican a "familia de X personas
> = $X" en vez de tiers complejos.

**Qué mejoró en el output:** el copy dejó de sonar a landing de nicho
para "autofans" y empezó a hablarle a un padre indeciso — cambió el
ángulo emocional del CTA y bajó el nivel de tecnicismo.

**Qué sigue fallando:** la respuesta sigue siendo una lista de bullets
sueltos, no algo que se pueda copiar/pegar y armar en orden.

**Qué probaría después:** pedir un formato de salida concreto.

---

## V4 — Capa: formato de salida (la que no ayudó del todo)

**Qué cambié:** pedí formato explícito — lista numerada de secciones, en
orden, con nombre/contenido/objetivo.

**Prompt:**

> [Todo lo anterior] Dame la respuesta como una lista numerada de
> secciones en el orden en que van a aparecer en la página, cada una con:
> nombre de la sección, qué contiene, y en una frase, qué objetivo
> cumple.

**Output (extracto):**

> 1. Hero — video/foto subiendo a la Ferrari + selector de ciudad.
>    Objetivo: comunicar la promesa central en 3 segundos.
> 2. Autos de la edición — galería por ciudad. Objetivo: generar deseo
>    específico.
> 3. Qué incluye la entrada — bullets simples. Objetivo: bajar la
>    fricción de "no sé qué estoy comprando".
> 4. Precios por familia — tabla simple. Objetivo: facilitar la decisión.
> 5. CTA de compra — botón grande. Objetivo: conversión.
> 6. FAQ — logística. Objetivo: resolver dudas de último momento.

**Qué mejoró en el output:** ahora es directamente accionable — alguien
podría armar el wireframe sin traducir nada.

**Qué sigue fallando / qué empeoró:** perdí algo. La V3 tenía frases de
copy reales metidas en la explicación ("mirá la cara que va a poner tu
hijo"); al forzar el formato de "sección + objetivo en una frase" el
output volvió a sonar a checklist de consultora. "Objetivo: conversión"
en la sección 5 no dice nada específico de Elite — es genérico de nuevo.
Formalizar de más aplanó parte de la voz que había ganado en V3. Este es
el paso que no ayudó tanto como pensé.

**Qué probaría después:** pedir ejemplos de copy real dentro de cada
sección, no solo el objetivo abstracto.

---

## V5 — Capa: ejemplos de qué se ve bien

**Qué cambié:** para cada sección, pedí la frase de copy final, no la
descripción de qué debería decir.

**Prompt:**

> [Todo lo anterior de V4] Para cada sección, además del objetivo,
> escribime un ejemplo real de la frase de copy que iría ahí — no la
> descripción de qué debería decir, la frase final, en el tono de alguien
> hablándole directo a un padre, no un consultor.

**Output (extracto):**

> 1. Hero — copy: "Subite a una Ferrari 458 con tu hijo. Es real, y va a
>    ser la foto que van a mostrar todo el año."
> 2. Autos de la edición — copy: "Estos son los autos que vas a poder
>    tocar en [ciudad], el [fecha]."
> 3. Qué incluye — copy: "Tu entrada te deja subirte, sacarte fotos y
>    ver de cerca cada auto de la edición. Nada de 'mirar desde lejos'."
> 4. Precios — copy: "Entrada familiar (hasta 4 personas): $X. Sin letra
>    chica."
> 5. CTA — copy: "Comprá ahora, quedan pocos turnos por horario."
> 6. FAQ — "¿Hay edad mínima para subirse? ¿Dónde estaciono?"

**Qué mejoró en el output:** recuperó la voz que se había perdido en
V4 — cada sección tiene una frase que se podría pegar directo en la web,
con el ángulo emocional de V3 ("nada de letra chica") en vez de jerga de
consultora.

**Qué sigue fallando:** no hay ninguna restricción de qué NO hacer — si
alguien lo ejecuta mal, podría terminar con foto de stock genérica de
autos que no son los reales, y el copy seguiría siendo "correcto" según
este prompt.

**Qué probaría después:** agregar una restricción explícita contra el
resultado genérico.

---

## Prompt final (limpio, reusable por cualquiera en la track)

```
Quiero copy y estructura de secciones para la landing de venta de
entradas de [nombre del evento].

Objetivo: vender entradas antes de una fecha límite (evento con cupo o
fecha fija), no una web institucional.

Contexto real del evento (completar antes de pedir el copy):
- Qué es y qué lo hace único, en una frase
- Ciudades/fechas si es itinerante
- Con qué plataforma de ticketing se integra

Audiencia: [una persona concreta que decide la compra, con su nivel de
conocimiento del tema — no "todos"]

Restricción: nada de foto de stock genérica ni copy que podría describir
cualquier evento. Si una línea se puede pegar en otro evento sin cambiar
nada, está mal.

Formato de salida: lista numerada de secciones en el orden en que
aparecen. Para cada una: nombre, y la frase de copy real que iría ahí
(no la descripción del copy — el copy final).
```
