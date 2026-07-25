import { Link } from 'react-router-dom'

function Home() {
  const heroStyle = {
    backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-texture.png)`,
  }

  return (
    <>
      <section className="hero" style={heroStyle}>
        <h1>
          Construyo y lanzo sistemas de negocio con IA como socio de
          ingeniería, no como autocompletado.
        </h1>
        <p className="proof-line">
          Sin equipo: un evento con 4.200 personas, un motor de
          clasificación de legajos penales corriendo en producción, un
          SaaS de gestión de reclamos ya validado en el mercado.
        </p>
        <Link to="/contact" className="cta">
          Hablemos
        </Link>
      </section>

      <section className="proof-strip">
        <Link to="/work" className="proof-item">
          <strong>4.200 personas</strong>
          <span>en el primer evento — Experiencia Elite</span>
        </Link>
        <Link to="/work" className="proof-item">
          <strong>1.870 documentos</strong>
          <span>procesados en producción — DefensaOS</span>
        </Link>
        <Link to="/work" className="proof-item">
          <strong>Backend real</strong>
          <span>validado con feedback de mercado — InmoDesk</span>
        </Link>
      </section>
    </>
  )
}

export default Home
