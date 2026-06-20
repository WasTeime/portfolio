import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import SideVines from './components/SideVines.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import ProjectsMap from './components/ProjectsMap.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Toaster from './components/Toaster.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsMap />
      <Experience />
      <Contact />
    </>
  )
}

// Скроллит к секции по якорю (#projects) или наверх при обычной навигации.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // ждём, пока секция отрисуется после монтирования главной
      requestAnimationFrame(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' })
        else window.scrollTo(0, 0)
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Nav />
      <SideVines />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}
