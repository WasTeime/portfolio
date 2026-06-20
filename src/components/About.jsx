import { motion } from 'framer-motion'
import { about } from '../data/content.js'
import { asset } from '../lib/asset.js'
import './About.css'

const ease = [0.22, 1, 0.36, 1]

export default function About() {
  return (
    <section id="about" className="section about">
      {/* бледный рисованный фон — стройка продукта */}
      <img className="about__bg" src={asset('base.jpg')} alt="" aria-hidden draggable="false" />

      <div className="container about__inner">
        <div className="about__text">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            Обо мне
          </motion.span>

          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className="about__p"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1 * i, ease }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="about__cards">
          {about.cards.map((c, i) => (
            <motion.div
              key={c.id}
              className="value-card"
              initial={{ opacity: 0, y: 30, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.5 : -1.5 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1 * i, ease }}
              whileHover={{ rotate: 0, y: -6 }}
            >
              <div className="value-card__img">
                <img src={asset(`${c.id}.jpg`)} alt={c.title} draggable="false" />
              </div>
              <div className="value-card__strip">
                <div className="value-card__title display">{c.title}</div>
                <div className="value-card__caption hand">{c.caption}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
