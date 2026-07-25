const cases = [
  {
    id: 'defensaos',
    name: 'DefensaOS',
    tag: 'Legal · inteligencia defensiva',
    status: 'en vivo',
    statusClass: 'live',
    image: 'images/defensaos-panel-redacted.jpg',
    problema:
      'Una abogada penalista real tenía legajos de más de 3.000 documentos — declaraciones, pericias, actas, audio y video de audiencias — que debía revisar a mano, con los tiempos que impone el proceso acusatorio de la provincia del Neuquén encima. Es materialmente imposible leer y clasificar ese volumen a tiempo. El resultado: llegaba a las audiencias sin el caso digerido, porque armar el mapa del expediente a mano se comía el tiempo que debería haber usado para pensar la estrategia de defensa.',
    hice: 'Construí Defensa OS Penal: un pipeline que hace OCR sobre PDFs e imágenes (Mistral), transcribe audio y video de audiencias con diarización (AssemblyAI), indexa todo con embeddings semánticos (pgvector, búsqueda híbrida) y corre 9 módulos de análisis con Claude Opus 4.7 — mapa de imputación, matriz de estafa, contradicciones, preguntas para audiencia, entre otros. Cada hallazgo tiene que traer una cita textual verificada contra el documento original (chequeo de similitud, tolerancia 5%) o queda etiquetado como dato_no_acreditado — el sistema no inventa lo que no puede citar. Documenté cada decisión técnica en ADRs (10 hasta ahora) y construí todo con Claude Code.',
    resultado:
      'Sistema entregado y en producción con la primera clienta paga (PROD_READY=true activo). Validado con un legajo real de 1.870 documentos y ~5.012 chunks — la corrida completa procesó todo, incluidos los audios y videos con testimonios de víctimas y testigos, sin recortes.',
  },
  {
    id: 'elite',
    name: 'Experiencia Elite',
    tag: 'Eventos · ticketing',
    status: 'en vivo',
    statusClass: 'live',
    image: 'images/elite-hero.jpg',
    problema:
      'Neuquén no tenía un evento con autos exóticos — la idea era que los pibes se pudieran subir a una Ferrari 458 Italia. Puertas adentro, el quilombo real era otro: ticketing y coordinar la info de la dinámica del evento a mano, por WhatsApp y planillas, en una gira de varias ciudades.',
    hice: 'Armé la web en Vercel con Supabase para el CRM de sponsors, integré EventoSimple/InstaTicketQR para el ticketing, y trabajé con Claude la estructura para que fuera legible tanto por gente como por buscadores y agentes de IA — SEO limpio desde el diseño, no parchado después. Las campañas de Meta Ads las manejo con Claude vía MCP: prendo, mido y ajusto todo charlando desde la terminal, sin tocar la interfaz de Meta.',
    resultado:
      '4.200 personas en el primer evento. Reportes de campañas en tiempo real sin abrir Ads Manager — la única interfaz que uso es la conversación.',
  },
  {
    id: 'inmodesk',
    name: 'InmoDesk',
    tag: 'Real estate · SaaS B2B',
    status: 'en validación',
    statusClass: 'validating',
    image: 'images/inmodesk-dashboard.jpg',
    problema:
      'Las inmobiliarias que administran entre 100 y 1.500 unidades gestionan los reclamos de mantenimiento por WhatsApp suelto, mails o llamados — sin trazabilidad. Se pierden reclamos, no queda registro de quién aprobó qué, y el administrador termina de teléfono descompuesto entre inquilino, propietario y el proveedor de turno.',
    hice: 'Construí InmoDesk como un flujo trazable de punta a punta: el inquilino reporta, IA clasifica por rubro y urgencia, entra al panel del administrador, pasa por aprobación del propietario cuando corresponde, se asigna proveedor y cierra con evidencia. React 19 + Vite + Supabase real (no mock data), construido con Claude Code. Cuando lo mostré en LinkedIn y alguien marcó la informalidad del rubro como obstáculo de adopción, ajusté el enfoque: InmoDesk no le exige formalidad a nadie, absorbe esa informalidad en la capa intermedia y da valor por trazabilidad, no por imponer proceso.',
    resultado:
      'Backend real funcionando — dashboard, incidencias, propiedades, propietarios, proveedores, simulador de reclamo para demos — validado con feedback de mercado real tras la exposición pública. Falta conectar WhatsApp, el canal de entrada real; es el próximo paso.',
  },
]

function Work() {
  return (
    <section className="work">
      <h1>Work</h1>
      {cases.map((c) => (
        <article key={c.id} className="case-study">
          <img
            src={`${import.meta.env.BASE_URL}${c.image}`}
            alt={`Screenshot de ${c.name}`}
          />
          <div className="case-body">
            <div className="case-heading">
              <span className="tag">{c.tag}</span>
              <span className={`status status-${c.statusClass}`}>
                {c.status}
              </span>
            </div>
            <h2>{c.name}</h2>
            <p>
              <strong>Problema:</strong> {c.problema}
            </p>
            <p>
              <strong>Qué hice / decidí:</strong> {c.hice}
            </p>
            <p>
              <strong>Resultado:</strong> {c.resultado}
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Work
