import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
