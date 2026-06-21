import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang, useT } from '../i18n/lang.jsx'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { lang, toggle } = useLang()
  const t = useT()
  const onHome = pathname === '/'

  const links = [
    { label: t.ui.nav.about, href: '#about' },
    { label: t.ui.nav.projects, href: '#projects' },
    { label: t.ui.nav.experience, href: '#experience' },
    { label: t.ui.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner container">
        {onHome ? (
          <nav className="nav__links">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav__link">
                {l.label}
              </a>
            ))}
          </nav>
        ) : (
          <Link to="/" className="nav__link nav__link--back">
            {t.ui.nav.back}
          </Link>
        )}

        {/* переключатель языка у правого края */}
        <button
          className="nav__lang"
          onClick={toggle}
          aria-label={t.ui.nav.langTitle}
          title={t.ui.nav.langTitle}
        >
          <span className={`nav__lang-opt ${lang === 'ru' ? 'is-on' : ''}`}>RU</span>
          <span className="nav__lang-sep">/</span>
          <span className={`nav__lang-opt ${lang === 'en' ? 'is-on' : ''}`}>EN</span>
        </button>
      </div>
    </motion.header>
  )
}
