# Agentes, MCP, y dónde queda parado mi pipeline

## Workflow vs. agente

Un **workflow** es un sistema donde el camino ya está decidido de
antemano: yo (o el código que orquesta todo) defino los pasos, en qué
orden van, y qué entra y sale de cada uno. El modelo de lenguaje puede
estar adentro de cada paso haciendo trabajo real, pero no decide cuál
es el próximo paso ni si hace falta repetir uno — eso lo decidí yo
cuando diseñé el pipeline.

Un **agente** es distinto: el propio modelo dirige su proceso. Recibe
un objetivo, no una receta, y en un loop decide qué herramienta llamar,
mira el resultado, decide si eso alcanza o si tiene que intentar otra
cosa, y sigue así hasta que el objetivo está cumplido o se rinde. El
control del "qué hago ahora" vive en el modelo, no en mi código.

**Mi pipeline de FL-04 (podcast → notas de investigación) es un
workflow, no un agente.** Los cuatro pasos (NotebookLM junta la fuente,
NotebookLM la sintetiza con un prompt fijo, un Claude Project la
convierte en nota con una plantilla fija, yo reviso) están decididos de
antemano. Nada en el sistema decide por sí mismo si una fuente vale la
pena, si hace falta pedir más detalle antes de redactar la nota, o si
debería buscar otro episodio. Yo elijo el episodio, yo copio el
resultado de un paso al siguiente, y el orden nunca cambia. Es
automatización de pasos fijos, no un sistema que persigue un objetivo
por su cuenta.

## Qué es MCP

MCP (Model Context Protocol) es el estándar abierto que le permite a
una aplicación de IA como Claude conectarse con herramientas y datos
externos sin que cada integración se tenga que reinventar de cero —
la comparación oficial es "el puerto USB-C de la IA": un solo protocolo
que cualquier cliente (Claude, otro) puede hablar para conectarse a
cualquier servidor (Meta Ads, Gmail, Supabase, lo que sea), en vez de
un cable distinto por cada combinación.

MCP define tres primitivas:

- **Tools (herramientas):** funciones ejecutables que el modelo puede
  llamar — "traeme las campañas de esta cuenta", "mandá este mail".
  Son acciones con efecto, no solo lectura de datos.
- **Resources (recursos):** datos o contenido que el servidor expone
  para darle contexto al modelo — un archivo, el resultado de una
  consulta, una tabla — sin que sea necesariamente una acción que el
  modelo "ejecuta", más bien algo que puede leer.
- **Prompts (prompts):** plantillas de instrucciones reusables que el
  propio servidor MCP puede ofrecer, para que no tenga que redactar
  cada instrucción desde cero cada vez que se usa esa herramienta.

## La demo real

Usé el conector de **Meta Ads MCP**, que ya tengo conectado a Claude
desde antes (lo uso de verdad para manejar las campañas de Experiencia
Elite). Corrí tres tareas reales, de solo lectura, contra mi cuenta en
vivo — nada que el chat solo pudiera inventar o saber sin la
herramienta:

1. Listar mis 18 cuentas de Meta Ads reales (nombres, IDs, estado).
2. Traer la tendencia de performance real de los anuncios de Elite en
   Córdoba (CPR con dirección de tendencia por anuncio).
3. Listar las campañas activas de Elite con gasto real de los últimos
   30 días.

Los tres devolvieron datos reales de la API de Meta — el detalle está
en [mcp-evidence.md](mcp-evidence.md). Un cuarto intento (activity
logs) devolvió un error real de la API ("todavía no está habilitado
para esta cuenta") — lo dejé como evidencia también, porque un error
real de infraestructura es más prueba de que la herramienta pega contra
un servicio de verdad que una respuesta perfecta simulada.

## Qué necesitaría mi pipeline para ser un agente

Hoy, el pipeline funciona porque yo soy el pegamento entre NotebookLM y
Claude: elijo la fuente, copio la extracción, la pego en el Project.
Para que fuera un agente de verdad, necesitaría tres cosas:

1. **Un objetivo, no una receta.** En vez de "procesá este episodio",
   algo como "encontrame ideas de negocio accionables esta semana" —
   el agente decide cuántas fuentes revisar y cuáles, no yo.
2. **Herramientas que pueda llamar en loop**, no un copiar-pegar manual
   entre dos apps — necesitaría una herramienta MCP real que le dé
   acceso a fuentes (búsqueda de episodios, transcripción) sin que yo
   sea el intermediario entre NotebookLM y Claude.
3. **Un criterio de parada propio.** Que decida si una nota está lo
   bastante buena (con el mismo filtro de "no fuerces la relevancia"
   que ya le puse) o si tiene que volver a intentarlo con otra fuente,
   en vez de que yo sea quien juzga cada nota al final.

Sin esas tres cosas, sigue siendo — con razón — un workflow bien
armado, no un agente.
