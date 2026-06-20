import { useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/content.js'
import './ProjectDetail.css'

const ease = [0.22, 1, 0.36, 1]
const statusLabel = { live: 'live', wip: 'в разработке', done: 'готово' }

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const stripRef = useRef(null)
  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return
    const active = strip.querySelector('.detail__nav-strip-item.is-active')
    active?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'auto' })
  }, [id])

  if (!project) {
    return (
      <div className="detail detail--missing">
        <p>Проект не найден.</p>
        <Link to="/#projects" className="detail__back">← к карте</Link>
      </div>
    )
  }

  const idx = projects.findIndex((p) => p.id === id)
  const next = projects[(idx + 1) % projects.length]

  return (
    <motion.main
      className="detail"
      style={{ '--accent': project.accent }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        {/* на телефоне — горизонтальная навигация (на ПК та же роль у боковой колонки) */}
        <nav className="detail__nav-strip" aria-label="Все проекты">
          <ul className="detail__nav-strip-list" ref={stripRef}>
            {projects.map((p) => {
              const active = p.id === id
              return (
                <li key={p.id}>
                  <Link
                    to={`/project/${p.id}`}
                    className={`detail__nav-strip-item ${active ? 'is-active' : ''}`}
                    data-status={p.status}
                    style={{ '--accent': p.accent }}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span className="detail__nav-strip-dot" />
                    <span className="detail__nav-strip-name">{p.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <button className="detail__back" onClick={() => navigate('/#projects')}>
          ← к карте проектов
        </button>

        <div className="detail__layout">
          <div className="detail__main">
            <motion.header
              className="detail__head"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="detail__meta">
                <span className="detail__dot" data-status={project.status} />
                {[statusLabel[project.status], project.period, project.context].filter(Boolean).join(' · ')}
              </div>
              <h1 className="detail__title display">{project.name}</h1>
              <p className="detail__subtitle">{project.subtitle}</p>
              <p className="detail__summary">{project.summary}</p>
            </motion.header>

            <motion.div
              className="detail__stack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
            >
              {project.stack.map((s) => (
                <span key={s} className="detail__chip">{s}</span>
              ))}
            </motion.div>

            <div className="detail__body">
              <h2 className="detail__h2 display">Что сделано</h2>
              <ul className="detail__highlights">
                {project.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease }}
                  >
                    {h}
                  </motion.li>
                ))}
              </ul>
            </div>

            <Link to={`/project/${next.id}`} className="detail__next">
              <span className="detail__next-label">Следующий проект</span>
              <span className="detail__next-name display">{next.name} →</span>
            </Link>
          </div>

          {/* навигация по всем проектам: активный — зелёный, описание по наведению */}
          <motion.aside
            className="detail__nav"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <ul className="detail__nav-list">
              {projects.map((p) => {
                const active = p.id === id
                return (
                  <li key={p.id}>
                    <Link
                      to={`/project/${p.id}`}
                      className={`detail__nav-item ${active ? 'is-active' : ''}`}
                      data-status={p.status}
                      style={{ '--accent': p.accent }}
                    >
                      <span className="detail__nav-name">{p.name}</span>
                      <span className="detail__nav-desc">{p.short || p.subtitle}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.aside>
        </div>
      </div>
    </motion.main>
  )
}
