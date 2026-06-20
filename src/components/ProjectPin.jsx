import { motion } from 'framer-motion'

// Маркер проекта. Домик масштабируется ВМЕСТЕ с картой (увеличивается при зуме).
export default function ProjectPin({ project, active, onClick }) {
  const { pin, accent, name } = project
  return (
    <div className="pin-anchor" style={{ left: `${pin.x}%`, top: `${pin.y}%`, '--accent': accent }}>
      <button
        className={`pin ${active ? 'pin--active' : ''}`}
        onClick={(e) => {
          e.stopPropagation()
          onClick(project)
        }}
        aria-label={name}
      >
        {/* мягкое белое свечение-подложка */}
        <span className="pin__glow" />
        {/* домик-иллюстрация — лёгкое покачивание */}
        <motion.span
          className="pin__house"
          animate={{ y: [0, -1.5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img src={project.house} alt="" draggable="false" />
        </motion.span>
        <span className="pin__label">{name}</span>
      </button>
    </div>
  )
}
