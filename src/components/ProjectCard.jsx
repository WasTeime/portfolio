import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useT } from '../i18n/lang.jsx'

const ease = [0.22, 1, 0.36, 1]

// Карточка-«сообщение» у домика. Для верхних точек показываем снизу, чтобы не обрезалась.
export default function ProjectCard({ project }) {
  const navigate = useNavigate()
  const { ui } = useT()
  const statusLabel = ui.card.status
  const { pin, accent } = project
  const below = pin.y < 42
  return (
    <div
      className={`proj-card-anchor ${below ? 'proj-card-anchor--below' : ''}`}
      style={{ left: `${pin.x}%`, top: `${pin.y}%`, '--accent': accent }}
    >
    <motion.div
      className="proj-card"
      initial={{ opacity: 0, y: 14, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.94 }}
      transition={{ duration: 0.4, ease }}
      onClick={() => navigate(`/project/${project.id}`)}
      role="button"
    >
      <div className="proj-card__head">
        <span className="proj-card__dot" data-status={project.status} />
        <span className="proj-card__status">{statusLabel[project.status]}</span>
        <span className="proj-card__period">
          {[project.period, project.context].filter(Boolean).join(' · ')}
        </span>
      </div>
      <div className="proj-card__title display">{project.name}</div>
      <div className="proj-card__sub">{project.subtitle}</div>
      <p className="proj-card__summary">{project.summary}</p>
      <div className="proj-card__stack">
        {project.stack.slice(0, 4).map((s) => (
          <span key={s} className="proj-card__chip">{s}</span>
        ))}
      </div>
      <div className="proj-card__more">{ui.card.more}</div>
      <span className="proj-card__tail" />
    </motion.div>
    </div>
  )
}
