'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '@/lib/data'

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Animate counter from 0 to 100
    const duration = 2500 // 2.5 seconds
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    const increment = 100 / totalFrames

    let frame = 0
    const timer = setInterval(() => {
      frame++
      const newCount = Math.min(Math.round(frame * increment), 100)
      setCount(newCount)

      if (frame >= totalFrames) {
        clearInterval(timer)
        // Start exit animation after counter reaches 100
        setTimeout(() => {
          setIsExiting(true)
        }, 300)
      }
    }, frameDuration)

    return () => clearInterval(timer)
  }, [])

  // Handle exit animation complete
  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        onComplete()
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isExiting, onComplete])

  const firstName = personalInfo.name.split(' ')[0]
  const lastName = personalInfo.name.split(' ')[1] || ''

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          exit={{
            opacity: 0,
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center gap-8">
            {/* Animated Initials */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="text-[clamp(4rem, 15vw, 12rem)] font-display font-bold leading-none">
                <motion.span
                  className="block gradient-text"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {personalInfo.initials}
                </motion.span>
              </div>
            </motion.div>

            {/* Counter */}
            <motion.div
              className="loading-counter stat-number"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {count}%
            </motion.div>

            {/* Progress Bar */}
            <div className="w-48 md:w-64 h-1 bg-dark-card rounded-full overflow-hidden">
              <motion.div
                className="h-full gradient-bg"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6)',
                }}
                initial={{ width: 0 }}
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Full Name Reveal */}
            <motion.div
              className="flex gap-4 md:gap-6 text-sm md:text-base text-light-muted font-medium tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <span>{firstName}</span>
              <span className="text-accent-blue">•</span>
              <span>{lastName}</span>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {/* Gradient Blobs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
