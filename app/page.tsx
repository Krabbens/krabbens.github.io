'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark">
      <motion.div
        className="p-8"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-muted">Kosma Gąsiorowski — portfolio shell</p>
      </motion.div>
    </main>
  )
}
