import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useT } from '../i18n/lang.jsx'

const ease = [0.22, 1, 0.36, 1]

// Список проектов для мобильных (вместо интерактивной карты)
export default function ProjectsList() {
  const navigate = useNavigate()
  const { projects, ui } = useT()
  const statusLabel = ui.card.status
  return (
    <div className="proj-list">
      {projects.map((p, i) => (
        <motion.button
          key={p.id}
          className="proj-list__card"
          style={{ '--accent': p.accent }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: i * 0.05, ease }}
          onClick={() => navigate(`/project/${p.id}`)}
        >
          <div className="proj-list__thumb">
            <img src={p.house} alt="" draggable="false" />
          </div>
          <div className="proj-list__body">
            <div className="proj-list__head">
              <span className="proj-list__dot" data-status={p.status} />
              {[statusLabel[p.status], p.period, p.context].filter(Boolean).join(' · ')}
            </div>
            <div className="proj-list__title display">{p.name}</div>
            <div className="proj-list__sub">{p.subtitle}</div>
            <p className="proj-list__desc">{p.short || p.summary}</p>
            <div className="proj-list__stack">
              {p.stack.slice(0, 3).map((s) => (
                <span key={s} className="proj-list__chip">{s}</span>
              ))}
            </div>
            <span className="proj-list__more">{ui.card.more}</span>
          </div>
        </motion.button>
      ))}
    </div>
  )
}
