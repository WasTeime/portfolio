import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useT } from '../i18n/lang.jsx'
import MapOverlay from './MapOverlay.jsx'
import ProjectPin from './ProjectPin.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectsList from './ProjectsList.jsx'
import useIsMobile from '../hooks/useIsMobile.js'
import { asset } from '../lib/asset.js'
import './ProjectsMap.css'

const ease = [0.22, 1, 0.36, 1]

export default function ProjectsMap() {
  const { projects, ui } = useT()
  const [selected, setSelected] = useState(null)
  const [focusPin, setFocusPin] = useState(null)
  const [view, setView] = useState('map') // 'map' | 'list' — выбор пользователя
  const isMobile = useIsMobile(768)
  // на телефоне карта неудобна — всегда показываем список
  const showMap = !isMobile && view === 'map'
  const scale = selected ? selected.focus?.scale || 4.5 : 1
  // origin держим на последнем выбранном домике: зум исходит из него и сворачивается обратно в него
  const origin = focusPin ? `${focusPin.x}% ${focusPin.y}%` : '50% 50%'

  const handlePin = (project) => {
    setFocusPin(project.pin)
    setSelected((cur) => (cur?.id === project.id ? null : project))
  }
  const reset = () => setSelected(null)
  const switchView = (v) => {
    setSelected(null)
    // клик по уже активной кнопке переключает на другой вид — не нужно тянуться ко второй
    setView((cur) => (cur === v ? (v === 'map' ? 'list' : 'map') : v))
  }

  return (
    <section id="projects" className="section projects">
      <div className="container projects__head">
        <div className="projects__head-text">
          <span className="eyebrow">{ui.projects.eyebrow}</span>
          <h2 className="projects__title display">
            {showMap ? ui.projects.mapTitle : ui.projects.listTitle}
          </h2>
          <p className="projects__hint">
            {showMap ? ui.projects.hintMap : ui.projects.hintList}
          </p>
        </div>

        {/* переключатель карта / список (на телефоне скрыт — там только список) */}
        {!isMobile && (
          <div className="projects__toggle" role="tablist" aria-label={ui.projects.viewLabel}>
            <button
              className={`projects__toggle-btn ${view === 'map' ? 'is-active' : ''}`}
              onClick={() => switchView('map')}
              aria-label={ui.projects.toggleMap}
              title={ui.projects.toggleMap}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
                <path d="M9 4v14M15 6v14" />
              </svg>
            </button>
            <button
              className={`projects__toggle-btn ${view === 'list' ? 'is-active' : ''}`}
              onClick={() => switchView('list')}
              aria-label={ui.projects.toggleList}
              title={ui.projects.toggleList}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M8 6h13M8 12h13M8 18h13" />
                <circle cx="3.6" cy="6" r="1.1" fill="currentColor" stroke="none" />
                <circle cx="3.6" cy="12" r="1.1" fill="currentColor" stroke="none" />
                <circle cx="3.6" cy="18" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {!showMap ? (
        <div className="container">
          <ProjectsList />
        </div>
      ) : (
      <div className="map-wrap">
        <div className="map-frame">
          {/* масштабируемая сцена: картинка + анимации + маркеры */}
          <motion.div
            className="map-stage"
            style={{ transformOrigin: origin }}
            animate={{ scale }}
            transition={{ duration: 0.9, ease }}
            onClick={reset}
          >
            <img
              className="map-img"
              src={asset('Map.png')}
              alt={ui.projects.mapAlt}
              onError={(e) => e.currentTarget.parentElement.classList.add('map-stage--noimg')}
            />
            <div className="map-img-fallback">
              <span className="hand">сохрани карту в /public/map.jpg</span>
            </div>

            <MapOverlay />

            {projects.map((p) => (
              <ProjectPin
                key={p.id}
                project={p}
                active={selected?.id === p.id}
                mapScale={scale}
                onClick={handlePin}
              />
            ))}
          </motion.div>
        </div>

        {/* UI-слой вынесен из рамки (overflow:hidden), чтобы карточка у края не обрезалась */}
        <div className="map-ui">
          <AnimatePresence>
            {selected && <ProjectCard key={selected.id} project={selected} />}
          </AnimatePresence>
        </div>
      </div>
      )}
    </section>
  )
}
