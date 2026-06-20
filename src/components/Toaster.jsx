import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Toaster.css'

const ease = [0.22, 1, 0.36, 1]

export default function Toaster() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const onToast = (e) => {
      const id = Date.now() + Math.random()
      setToasts((t) => [...t, { id, message: e.detail.message }])
      setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2400)
    }
    window.addEventListener('app:toast', onToast)
    return () => window.removeEventListener('app:toast', onToast)
  }, [])

  return (
    <div className="toaster">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            className="toast"
            initial={{ opacity: 0, y: -14, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.32, ease }}
          >
            <span className="toast__check">✓</span>
            <span>{t.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
