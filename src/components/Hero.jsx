import { motion } from 'framer-motion'
import { profile } from '../data/content.js'
import SocialIcon from './SocialIcon.jsx'
import { showToast } from '../lib/toast.js'
import { asset } from '../lib/asset.js'
import './Hero.css'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__stage">
        {/* «Привет» + фото по центру, слово за фотографией */}
        <div className="hero__center">
          <motion.h1
            className="hero__greeting display"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
          >
            {profile.greeting}
          </motion.h1>

          <motion.div
            className="hero__portrait"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
          >
            <div className="hero__portrait-frame">
            <img
              src={asset('portrait.png')}
              alt={profile.name}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'flex'
              }}
            />
            <div className="hero__portrait-fallback">
              <span className="hand">твоё фото →<br />/public/portrait.png</span>
            </div>
            </div>
          </motion.div>
        </div>

        {/* подпись слева */}
        <motion.div
          className="hero__intro"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
        >
          <p className="hero__name">
            меня зовут
            <br />
            <span className="hero__name-em display">{profile.name}</span>
          </p>
          <p className="hero__role hand">{profile.role}</p>
        </motion.div>

        {/* соцсети справа капсулами */}
        <motion.div
          className="hero__socials"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease }}
        >
          {profile.socials.map((s, i) => {
            const isMail = s.href.startsWith('mailto:')
            const onMailClick = (e) => {
              e.preventDefault()
              navigator.clipboard?.writeText(s.href.replace('mailto:', ''))
              showToast('Почта скопирована')
            }
            return (
              <motion.a
                key={s.label}
                className="hero__social"
                href={s.href}
                {...(isMail
                  ? { onClick: onMailClick }
                  : { target: '_blank', rel: 'noreferrer' })}
                aria-label={s.label}
                title={s.label}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.08, ease }}
              >
                <SocialIcon name={s.label} />
              </motion.a>
            )
          })}
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span>листай</span>
        <motion.div
          className="hero__scroll-line"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
