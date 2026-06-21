import { createContext, useContext, useEffect, useState } from 'react'
import { content } from '../data/content.js'

// Контекст языка: 'ru' | 'en'. Выбор сохраняется в localStorage.
const LangContext = createContext({ lang: 'ru', setLang: () => {}, toggle: () => {} })

function readInitialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'ru' || saved === 'en') return saved
  } catch {
    /* localStorage недоступен — используем язык по умолчанию */
  }
  return 'ru'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang)

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* игнорируем — не критично */
    }
    document.documentElement.lang = lang
    document.title = `${content[lang].profile.name} — product builder`
  }, [lang])

  const toggle = () => setLang((l) => (l === 'ru' ? 'en' : 'ru'))

  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>{children}</LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

// Контент текущего языка (profile / about / projects / experience / skills / education / ui).
export function useT() {
  const { lang } = useContext(LangContext)
  return content[lang]
}
