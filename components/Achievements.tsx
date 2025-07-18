'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { achievements } from '@/lib/data'
import { FiAward, FiStar } from 'react-icons/fi'

const iconMap = {
  '🏆': FiAward,
  '⭐': FiStar,
  '🎖️': FiAward,
}

export function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-accent-purple bg-accent-purple/10 rounded-full mb-4">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="gradient-text">Awards & Achievements</span>
          </h2>
          <p className="mt-4 text-lg text-light-muted max-w-2xl mx-auto">
            Recognition from hackathons and competitions showcasing problem-solving 
            skills and technical excellence.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap] || FiAward

            return (
              <motion.div
                key={achievement.id}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Card */}
                <div className="card gradient-border p-8 h-full text-center group-hover:scale-105 transition-transform duration-300">
                  {/* Trophy Icon */}
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-blue/20 via-accent-cyan/20 to-accent-purple/20 flex items-center justify-center"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-4xl">{achievement.icon}</span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-light mb-2">
                    {achievement.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-accent-cyan font-medium">
                    {achievement.organization}
                  </p>

                  {/* Decorative Elements */}
                  <div className="mt-6 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-blue" />
                    <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                    <div className="w-2 h-2 rounded-full bg-accent-purple" />
                  </div>
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/20 via-accent-cyan/20 to-accent-purple/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-light-muted">
            These achievements reflect my passion for competitive programming, 
            hackathons, and pushing the boundaries of what's possible with code.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
