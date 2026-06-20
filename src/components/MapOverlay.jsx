import { motion } from 'framer-motion'
import { mapAnchors } from '../data/content.js'
import Clouds from './Clouds.jsx'

// Анимированный слой поверх карты: луч маяка, птицы.
// Координаты — в % от размеров карты, поэтому слой масштабируется вместе с ней.

// крылья: верхний и нижний взмах
const WING_UP = 'M2 12 Q7 1 13 8 Q19 1 24 12'
const WING_DOWN = 'M2 7 Q7 9 13 8 Q19 9 24 7'

function Bird({ b }) {
  const flap = 0.4 + ((b.delay % 4) * 0.04) // темп взмахов, с лёгким разбросом
  return (
    <motion.div
      className="map-bird"
      style={{ top: `${b.y}%` }}
      initial={{ left: '-4%' }}
      animate={{ left: ['-4%', '104%'] }}
      transition={{ duration: b.duration, repeat: Infinity, ease: 'linear', delay: b.delay }}
    >
      <svg viewBox="0 0 26 14" width={b.size || 30} aria-hidden>
        <motion.path
          fill="none"
          stroke="#241d12"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          // вниз → короткая пауза → вверх → короткая пауза
          animate={{ d: [WING_DOWN, WING_DOWN, WING_UP, WING_UP, WING_DOWN] }}
          transition={{
            duration: flap,
            times: [0, 0.15, 0.5, 0.65, 1],
            repeat: Infinity,
            ease: 'easeInOut',
            delay: b.delay,
          }}
        />
      </svg>
    </motion.div>
  )
}

export default function MapOverlay() {
  const { lighthouse, birds } = mapAnchors
  return (
    <div className="map-overlay" aria-hidden>
      {/* свет маяка: тёплое пульсирующее свечение + медленный луч */}
      <div className="map-lighthouse" style={{ left: `${lighthouse.x}%`, top: `${lighthouse.y}%` }}>
        <motion.div
          className="map-lighthouse__glow"
          animate={{ opacity: [0.25, 0.7, 0.25], scale: [0.9, 1.15, 0.9] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="map-lighthouse__beam"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <Clouds />

      {birds.map((b, i) => (
        <Bird key={i} b={b} />
      ))}
    </div>
  )
}
