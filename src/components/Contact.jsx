import { motion } from 'framer-motion'
import { useT } from '../i18n/lang.jsx'
import SocialIcon from './SocialIcon.jsx'
import { showToast } from '../lib/toast.js'
import { asset } from '../lib/asset.js'
import './Contact.css'

const ease = [0.22, 1, 0.36, 1]

export default function Contact() {
  const { profile, ui } = useT()
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="eyebrow">{ui.contact.eyebrow}</span>
          <h2 className="contact__title display">
            {ui.contact.titleLine1}
            <br />
            {ui.contact.titleLine2}
          </h2>
          <p className="contact__text">{profile.intro}</p>

          <div className="contact__links">
            {profile.socials.map((s) => {
              const isMail = s.href.startsWith('mailto:')
              const onMailClick = (e) => {
                e.preventDefault()
                const email = s.href.replace('mailto:', '')
                navigator.clipboard?.writeText(email)
                showToast(ui.toast.mailCopied)
              }
              return (
                <a
                  key={s.label}
                  className="contact__link"
                  href={s.href}
                  {...(isMail
                    ? { onClick: onMailClick }
                    : { target: '_blank', rel: 'noreferrer' })}
                >
                  <span className="contact__link-label">
                    <span className="contact__ico">
                      <SocialIcon name={s.label} />
                    </span>
                    {s.label}
                  </span>
                  <span className="contact__arrow">↗</span>
                </a>
              )
            })}
          </div>
        </motion.div>

        {/* без motion-обёртки: анимация opacity/scale изолирует слой и ломает
            mix-blend-mode на ~1с (гифка мелькает белым). Домик и так анимирован. */}
        <div className="contact__house">
          <img src={asset('footer_house.gif')} alt={ui.contact.houseAlt} draggable="false" />
        </div>
      </div>
    </section>
  )
}
