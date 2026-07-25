import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="about">
      <h1>About</h1>

      <div className="objection">
        <h2>¿Por qué no necesito un equipo de 6 personas?</h2>
        <p>
          Trabajo solo porque uso IA (Claude Code) como socio de
          ingeniería en cada etapa del ciclo — arquitectura, código,
          debugging, hasta las campañas de marketing — no como
          autocompletado. Los tres sistemas reales en{' '}
          <Link to="/work">Work</Link> son la prueba de que ese método
          sostiene proyectos de producción, no solo prototipos.
        </p>
      </div>

      <div className="objection">
        <h2>¿Cómo sé que no es solo teoría de IA?</h2>
        <p>
          Cada caso en Work es un sistema real, con clienta real o
          exposición pública real, no un mockup. DefensaOS tiene una
          clienta pagando y usándolo en casos reales hoy.
        </p>
      </div>

      <div className="objection">
        <h2>¿Trabajás con cualquier tipo de negocio?</h2>
        <p>
          Mi nicho real es automatizar operaciones para negocios de
          servicios — eventos, estudios legales, real estate. No vendo
          un producto genérico de "IA para tu empresa": construyo el
          sistema específico que tu operación necesita.
        </p>
      </div>
    </section>
  )
}

export default About
