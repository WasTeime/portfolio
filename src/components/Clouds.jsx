import { motion } from 'framer-motion'

// Облака, плывущие над картой. Берём 4 облака из спрайт-листа clouds.png (сетка 2×2).
// quad: [x%, y%] позиция квадранта при background-size: 200% 200%.
const clouds = [
  { quad: [0, 0], top: '6%', width: 200, duration: 70, delay: 0, opacity: 0.9 },
  { quad: [100, 0], top: '20%', width: 150, duration: 95, delay: -30, opacity: 0.6 },
  { quad: [0, 100], top: '40%', width: 230, duration: 80, delay: -55, opacity: 0.7 },
  { quad: [100, 100], top: '58%', width: 170, duration: 60, delay: -15, opacity: 0.8 },
  { quad: [0, 0], top: '13%', width: 130, duration: 110, delay: -70, opacity: 0.5 },
  { quad: [100, 100], top: '30%', width: 190, duration: 85, delay: -40, opacity: 0.65 },
  { quad: [100, 0], top: '50%', width: 120, duration: 100, delay: -20, opacity: 0.5 },
  { quad: [0, 100], top: '66%', width: 160, duration: 75, delay: -60, opacity: 0.7 },
  { quad: [0, 0], top: '74%', width: 140, duration: 90, delay: -10, opacity: 0.55 },
]

export default function Clouds() {
  return (
    <div className="map-clouds" aria-hidden>
      {clouds.map((c, i) => (
        <motion.div
          key={i}
          className="map-cloud"
          style={{
            top: c.top,
            width: `${c.width}px`,
            opacity: c.opacity,
            backgroundImage: 'url(/clouds.png)',
            backgroundPosition: `${c.quad[0]}% ${c.quad[1]}%`,
          }}
          initial={{ x: '-25%' }}
          animate={{ x: '125vw' }}
          transition={{ duration: c.duration, repeat: Infinity, ease: 'linear', delay: c.delay }}
        />
      ))}
    </div>
  )
}
