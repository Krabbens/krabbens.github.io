'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { personalInfo } from '@/lib/data'

export function Hero() {
  const { scrollY } = useScroll()

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 0.95])

  // Split name for animation
  const firstName = personalInfo.name.split(' ')[0]
  const lastName = personalInfo.name.split(' ').slice(1).join(' ')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-visible">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/30 blob-static"
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/30 blob-static"
        style={{ y: y2 }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-cyan/20 blob-static"
        style={{
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-6 text-center"
        style={{ opacity, scale }}
      >
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4 md:mb-6"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-accent-blue/80 bg-accent-blue/10 rounded-full border border-accent-blue/20">
            {personalInfo.tagline}
          </span>
        </motion.div>

        {/* Name - Split into two lines */}
        <motion.h1
          className="font-display font-bold text-display-lg gradient-text mb-4 md:mb-6 pb-1 md:pb-2 [overflow:visible]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.span
            className="block [overflow:visible]"
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {firstName}
          </motion.span>
          <motion.span
            className="block [overflow:visible] pb-0.5"
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {lastName}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-light-muted max-w-xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Computer Science & IoT Engineer
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="btn-primary text-dark font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor="hover"
          >
            <span>View My Work</span>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-lg font-semibold border border-light/20 text-light hover:bg-light/10 transition-all"
            whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
            whileTap={{ scale: 0.95 }}
            data-cursor="hover"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-xs text-light-muted uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-light-muted rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-light-muted rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>

      {/* Decorative Lines */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-accent-blue/30 to-transparent" />
      <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-accent-purple/30 to-transparent" />
    </section>
  )
}
