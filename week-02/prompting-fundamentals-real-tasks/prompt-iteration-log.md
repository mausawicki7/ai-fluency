# Prompt Iteration Log — FL-02

**Target task (from FL-01):** Manejar campañas de Meta Ads vía Claude MCP
(Experiencia Elite — campañas de ticketing con fecha límite por ciudad).

## V0 — Baseline (naive, pre-track)

**Prompt:**

> Como van las campañas de meta

**Output:**

> Che, reviso el estado de tus campañas activas en Meta Ads. Acá el
> resumen de las últimas 24h:
> - Campaña "Elite Bariloche" — Gasto: $4.200, Alcance: 38.500, CTR:
>   1.2%, CPC: $0.34
> - Campaña "Elite Córdoba" — Gasto: $2.800, Alcance: 25.100, CTR: 0.9%,
>   CPC: $0.41
>
> ¿Querés que profundice en alguna métrica en particular?

Tira números pero no dice si eso es bueno o malo, ni cuál mirar primero,
ni qué hacer. Además no sabe cuál ciudad tiene el evento más próximo —
trata las dos campañas como si pesaran lo mismo.

---

## V1 — Técnica: asignación de rol

**Qué cambié:** le di un rol específico (media buyer senior de eventos)
en vez de dejarlo responder como asistente genérico.

**Prompt:**

> Sos mi media buyer senior, especializado en campañas de eventos con
> fecha límite. Como van las campañas de meta.

**Output (extracto):**

> Con la mirada de alguien que corre campañas de evento con deadline:
> Córdoba me preocupa más que Bariloche a pesar de tener menos gasto —
> el CTR de 0.9% es bajo para esta etapa y si no reacciona en los
> próximos días vas a llegar a la fecha del evento con entradas sin
> vender. Bariloche está sana.

**Qué mejoró en el output:** dejó de listar números neutros y empezó a
priorizar — "esto me preocupa más" es un juicio, no un dato. El CTR bajo
de Córdoba ahora tiene una lectura (mala, en esta etapa) en vez de
quedar como una cifra más.

**Qué sigue fallando:** no explica *por qué* un evento con fecha límite
cambia el criterio de qué es "bueno" — lo asume, no lo argumenta. Y sigue
sin saber cuánto falta para cada evento específicamente.

**Qué probaría después:** darle el contexto real de qué estoy vendiendo
y por qué el deadline importa.

---

## V2 — Técnica: contexto y motivación

**Qué cambié:** agregué el porqué del negocio — qué es Elite, que cada
ciudad tiene su propia fecha límite, y que el objetivo es vender
entradas antes del evento, no branding de largo plazo.

**Prompt:**

> [Todo lo anterior] Contexto: son campañas para Experiencia Elite, un
> evento de autos exóticos que recorre Neuquén, Córdoba, Buenos Aires y
> Bariloche, cada ciudad con su propia fecha fija. El objetivo es vender
> entradas antes de que llegue esa fecha — no estoy construyendo marca a
> largo plazo, cada campaña tiene una fecha de vencimiento real.

**Output (extracto):**

> Con eso en mente: en una campaña de branding, un CTR de 0.9% con
> mejora lenta semana a semana estaría bien. Acá no — si Córdoba es el
> 14 y hoy es el 8, te quedan 6 días para revertir esa curva antes de
> que el gasto que ya hiciste se pierda sin traducirse en entradas
> vendidas. La urgencia no es "el CTR es bajo", es "el CTR es bajo Y se
> acaba el tiempo para arreglarlo".

**Qué mejoró en el output:** ahora explica el razonamiento (por qué el
deadline cambia el estándar de "bueno"), no solo lo aplica en silencio.
Empezó a razonar en términos de tiempo restante, no solo de métricas.

**Qué sigue fallando:** el razonamiento es bueno pero está enterrado en
un párrafo largo — para mirar esto todos los días necesito algo que se
lea en 5 segundos, no un análisis.

**Qué probaría después:** darle ejemplos de qué es una alerta real y qué
es ruido, para calibrar cuándo realmente hace falta que me interrumpa.

---

## V3 — Técnica: ejemplos (few-shot)

**Qué cambié:** le di dos ejemplos concretos de qué es una alerta real
contra qué es variación normal que no amerita que me moleste.

**Prompt:**

> [Todo lo anterior] Ejemplos de qué es alerta real contra ruido normal:
> - Alerta real: "CPA subió 40% en 48h y quedan 3 días para el evento en
>   Bariloche — hay que actuar ya."
> - Ruido normal: "CPA subió 5% ayer pero sigue dentro del rango de la
>   semana — no hace falta tocar nada."
> Con ese criterio, decime cómo van las campañas.

**Output (extracto):**

> Con ese criterio: Córdoba es alerta real (CTR viene cayendo 3 días
> seguidos y quedan 6 días de evento). Bariloche es ruido normal (CPC
> subió 8% pero está dentro de la variación típica de fin de semana, y
> quedan 19 días).

**Qué mejoró en el output:** dejó de "sonar" alarmado por todo o nada —
ahora clasifica explícitamente cada campaña contra el criterio que le
di, en vez de decidir con una vara implícita que yo no controlo.

**Qué sigue fallando:** la clasificación está bien pero la respuesta
sigue siendo prosa corrida — para un chequeo diario rápido necesito
verlo estructurado, no leer dos párrafos para encontrar cuál campaña
mirar.

**Qué probaría después:** pedir un formato de salida fijo.

---

## V4 — Técnica: estructura de salida (la que no terminó de ayudar)

**Qué cambié:** pedí un formato fijo — semáforo por campaña + una sola
acción del día + qué no tocar.

**Prompt:**

> [Todo lo anterior] Respondé en 3 bloques: 1) Semáforo por campaña
> (🟢🟡🔴), 2) La única cosa que requiere acción hoy, si hay alguna,
> 3) Qué NO tocar porque está funcionando bien.

**Output (extracto):**

> 1) Córdoba 🔴 · Bariloche 🟢
> 2) Bajar el CPA de Córdoba: pausar el ad set de peor CTR y subir 20%
>    el presupuesto del que mejor convierte.
> 3) No tocar Bariloche.

**Qué mejoró en el output:** ahora se lee en 5 segundos, exactamente lo
que pedí.

**Qué sigue fallando / qué empeoró:** el semáforo esconde matiz. Un 🔴
por "3 días para el evento y el CTR cae" es urgente-y-corregible; un 🔴
podría también significar "quedan 2 horas y no hay nada que hacer" —
son rojos completamente distintos y el formato los trata igual. Al
comprimir a un emoji, perdí la cadena de razonamiento que la V2/V3
tenían y que era justo lo que hacía la alerta confiable. Este paso
mejoró la lectura pero bajó la calidad del juicio detrás.

**Qué probaría después:** forzar que el razonamiento (comparar períodos,
identificar el evento más próximo, mirar CPA vs. ticket promedio) pase
*antes* de comprimir a un color — no que el color reemplace el análisis.

---

## V5 — Técnica: descomposición en pasos

**Qué cambié:** le di el orden de pasos que tiene que seguir *antes* de
armar el resumen, para que el semáforo sea la conclusión de un análisis
y no un reemplazo.

**Prompt:**

> [Todo lo anterior] Antes de responder, seguí este orden: 1) traé las
> métricas de las últimas 48h y comparalas contra los 7 días previos,
> 2) identificá qué campaña tiene el evento más próximo — esa pesa más
> en la prioridad, 3) para esa campaña puntual, compará CPA/CTR contra
> el promedio de esta campaña, no contra un estándar genérico, 4) recién
> ahí armá el resumen en el formato de 3 bloques.

**Output (extracto):**

> Paso 1-2: Córdoba tiene el evento más próximo (6 días). Bariloche, 19
> días.
> Paso 3: en Córdoba, el CTR de hoy (0.9%) está 35% debajo del promedio
> de esta misma campaña en los últimos 7 días (1.38%) — no es una
> comparación contra un número general, es una caída real de su propia
> base.
>
> 1) Córdoba 🔴 (caída real vs. su propio promedio, 6 días para el
>    evento) · Bariloche 🟢
> 2) Córdoba: pausar el ad set de peor CTR, redistribuir presupuesto al
>    que mejor convierte.
> 3) No tocar Bariloche.

**Qué mejoró en el output:** el 🔴 ahora carga el razonamiento que se
había perdido en V4 — "caída real vs. su propio promedio, 6 días para
el evento" en vez de un color pelado. Recuperó el juicio de V2/V3 sin
perder la lectura rápida de V4.

**Qué sigue fallando:** todavía no lo probé contra un escenario donde no
hay ninguna alerta real — hay que confirmar que no fuerza a encontrar un
🔴 cuando en realidad todo está bien.

**Qué probaría después:** correrlo varios días seguidos y ver si alguna
vez dice honestamente "no hay nada que mirar hoy".

---

## Prompt final (limpio, reusable sin mi contexto personal)

```
Sos mi media buyer senior, especializado en campañas con fecha límite
(no branding de largo plazo).

Contexto que tenés que completar antes de pedir el análisis:
- Qué se vende y por qué hay una fecha límite real (evento, oferta,
  lanzamiento con cupo)
- Las campañas activas y la fecha límite de cada una

Criterio de alerta: algo es una alerta real solo si (a) hay una caída
medible contra el propio promedio de esa campaña en los últimos 7 días,
Y (b) queda poco tiempo para corregirlo antes de la fecha límite. Si
falta cualquiera de las dos condiciones, es ruido normal.

Antes de responder, seguí este orden:
1. Traé las métricas de las últimas 48h y comparalas contra los 7 días
   previos de la MISMA campaña (no contra un estándar genérico).
2. Identificá qué campaña tiene la fecha límite más próxima — esa pesa
   más en la prioridad.
3. Aplicá el criterio de alerta del punto anterior.
4. Recién ahí armá la respuesta en 3 bloques: (1) semáforo por campaña
   con una frase de por qué, no el color solo, (2) la única acción que
   requiere hoy si hay alguna, (3) qué no tocar porque está funcionando.

Si la causa de una caída admite más de una explicación (ej: creativo
cansado vs. audiencia mal targeteada) y no tenés datos para descartar
una, decilo explícitamente en vez de elegir una en silencio — nombrá
qué dato te faltó para estar seguro.
```

*(El último párrafo se agregó después de la comparación cross-model:
Claude y ChatGPT diagnosticaron causas distintas para la misma caída de
Córdoba — uno audiencia/entrega, el otro creativo — y ninguno avisó que
estaba suponiendo. Sin ese dato, cualquiera de las dos "únicas acciones"
podría ser la equivocada.)

---

## Comparación cross-model (Claude vs. ChatGPT)

Mismo prompt final, mismos datos pegados a mano (sin MCP, para que sea
comparación justa). Salida real de ChatGPT:

> **1. Semáforo por campaña**
> 🔴 Elite Córdoba — alerta real. El CTR cayó de 1,38% a 0,90%, una baja
> aproximada del 35% contra su propio promedio de 7 días. Como el evento
> es en 6 días, queda poco margen para recuperar volumen de ventas.
> 🟢 Elite Bariloche — variación normal. El CPC subió apenas 8%, dentro
> de su comportamiento habitual, y todavía faltan 19 días.
>
> **2. Única acción requerida hoy**
> Renovar inmediatamente el creativo de Elite Córdoba, sin modificar
> audiencias ni reconstruir la campaña. [incluye copy de anuncio
> sugerido con gancho de urgencia y fecha]
>
> **3. Qué no tocar**
> No tocaría Elite Bariloche. En Córdoba tampoco cambiaría presupuesto,
> segmentación, objetivo ni estructura por ahora — el problema visible
> está en la capacidad del anuncio para generar clics, no en la
> audiencia o el costo de entrega.

**Estructura:** idéntica — los dos respetaron el formato de 3 bloques al
pie de la letra, y los dos hicieron el razonamiento (comparar contra el
propio promedio de 7 días, citar el % de caída) antes de asignar el
color, en vez de tirar un semáforo pelado. La disciplina de la
descomposición en pasos sobrevivió el cambio de modelo.

**Precisión:** idéntica en el diagnóstico — mismo 35% de caída en
Córdoba, mismo "no tocar" en Bariloche, mismas cifras. Ninguno inventó
un número.

**Tono:** distinto. Claude quedó telegráfico ("Paso 1-2: ... Paso 3:
..."), casi notas para uso interno. ChatGPT escribió más narrado, con
negritas tipo informe para cliente, y agregó un copy de anuncio real sin
que se lo pidiera explícitamente — se excedió del formato pedido (el
prompt pedía "la única acción", no un borrador de creativo).

**El punto de falla real — divergencia de diagnóstico:** acá es donde
importa. Los dos coinciden en que Córdoba es la alerta, pero asumen
causas distintas sin decir que están asumiendo. Claude recomienda
"pausar el ad set de peor CTR y redistribuir presupuesto" — un
diagnóstico de segmentación/entrega, sin explicar por qué descarta que
sea un problema de creativo. ChatGPT diagnostica fatiga de creativo
("la capacidad del anuncio para generar clics") y lo dice explícito, con
más razonamiento auditable que Claude en ese punto — pero tampoco tiene
evidencia real para descartar que sea un tema de audiencia. Ninguno de
los dos prompts (ni el mío) le pidió al modelo que aclare qué evidencia
le falta para distinguir "creativo cansado" de "audiencia mal
targeteada" — los dos modelos rellenaron ese hueco con una suposición
distinta y ninguno avisó que estaba suponiendo. Ese es el hueco real del
template, no una diferencia de calidad entre modelos.
