import { motion } from 'framer-motion'
import { experience, skills, education } from '../data/content.js'
import './Experience.css'

const ease = [0.22, 1, 0.36, 1]

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <span className="eyebrow">Опыт</span>
        <h2 className="experience__title display">Путь</h2>

        <div className="experience__list">
          {experience.map((e, i) => (
            <motion.div
              key={i}
              className="xp-row"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease }}
            >
              <div className="xp-row__period">{e.period}</div>
              <div className="xp-row__main">
                <div className="xp-row__title display">{e.title}</div>
                <div className="xp-row__org">{e.org}</div>
              </div>
              <div className="xp-row__note">{e.note}</div>
            </motion.div>
          ))}
        </div>

        <div className="experience__grid">
          <div className="skills">
            <h3 className="experience__sub display">Навыки</h3>
            <div className="skills__cols">
              {skills.map((s) => (
                <motion.div
                  key={s.group}
                  className="skill-group"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease }}
                >
                  <div className="skill-group__name">{s.group}</div>
                  <div className="skill-group__items">
                    {s.items.map((it) => (
                      <span key={it} className="skill-chip">{it}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="education">
            <h3 className="experience__sub display">Образование</h3>
            <div className="edu-card">
              <div className="edu-card__place display">{education.place}</div>
              <div className="edu-card__faculty">{education.faculty}</div>
              <div className="edu-card__dir">{education.direction}</div>
              <div className="edu-card__period">{education.period}</div>
              <div className="edu-card__courses">
                {education.courses.map((c) => (
                  <span key={c} className="skill-chip">{c}</span>
                ))}
              </div>
            </div>
            <ul className="edu-extra">
              {education.extra.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
