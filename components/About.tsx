'use client'

import { motion, useInView, useTransform, useScroll } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { bio, stats, techStackMarquee } from '@/lib/data'
import { Marquee } from './Marquee'
import { FiUser, FiCode, FiAward } from 'react-icons/fi'

// Animated Counter Component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const frameDuration = 1000 / 60
      const totalFrames = Math.round(duration / frameDuration)
      const increment = value / totalFrames

      let frame = 0
      const timer = setInterval(() => {
        frame++
        const newCount = Math.min(Math.round(frame * increment), value)
        setCount(newCount)

        if (frame >= totalFrames) {
          clearInterval(timer)
        }
      }, frameDuration)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="stat-number">
      {count}{suffix}
    </span>
  )
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const yInverse = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])

  return (
    <section id="about" ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -right-32 top-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"
          style={{ y, rotate }}
        />
        <motion.div
          className="absolute -left-32 bottom-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"
          style={{ y: yInverse }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-accent-blue bg-accent-blue/10 rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="gradient-text">Who I Am</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-light-muted leading-relaxed text-balance">
              {bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center md:justify-start justify-center gap-2 mb-2">
                    {index === 0 && <FiUser className="text-accent-blue" size={20} />}
                    {index === 1 && <FiCode className="text-accent-cyan" size={20} />}
                    {index === 2 && <FiAward className="text-accent-purple" size={20} />}
                    <span className="text-3xl md:text-4xl font-display font-bold gradient-text">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <p className="text-sm text-light-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Decorative Element */}
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 border-2 border-accent-blue/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-8 border-2 border-accent-cyan/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-16 border-2 border-accent-purple/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 glass rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-4xl font-display font-bold gradient-text">KG</span>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 glass rounded-2xl flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FiCode className="text-accent-blue" size={24} />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 glass rounded-2xl flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <FiAward className="text-accent-purple" size={24} />
              </motion.div>
              <motion.div
                className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 glass rounded-2xl flex items-center justify-center"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <FiUser className="text-accent-cyan" size={24} />
              </motion.div>
              <motion.div
                className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-16 h-16 glass rounded-2xl flex items-center justify-center"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <span className="text-xl font-bold gradient-text">{'</>'}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          className="mt-24 md:mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Marquee items={techStackMarquee} />
        </motion.div>
      </div>
    </section>
  )
}
