import { Outlet, NavLink } from 'react-router-dom'

function Layout() {
  return (
    <div className="site">
      <header className="site-header">
        <NavLink to="/" end className="brand">
          Mauricio Sawicki
        </NavLink>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <NavLink to="/about">About</NavLink>
        <a href="mailto:mau.sawicki@gmail.com">mau.sawicki@gmail.com</a>
      </footer>
    </div>
  )
}

export default Layout
