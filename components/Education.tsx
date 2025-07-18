'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { education } from '@/lib/data'
import { FiAward, FiMapPin, FiCalendar } from 'react-icons/fi'

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="education" ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-lighter" />
      
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
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
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="gradient-text">Academic Background</span>
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} education={edu} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface EducationCardProps {
  education: typeof education[0]
  index: number
  isInView: boolean
}

function EducationCard({ education, index, isInView }: EducationCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      className="card gradient-border p-8 group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue/20 via-accent-cyan/20 to-accent-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <FiAward className="text-accent-blue" size={32} />
      </div>

      {/* Degree */}
      <h3 className="text-2xl font-display font-bold text-light mb-2">
        {education.degree}
      </h3>

      {/* Institution */}
      <p className="text-xl text-accent-cyan font-medium mb-4">
        {education.institution}
      </p>

      {/* Details */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-light-muted">
          <FiCalendar className="text-accent-purple" size={16} />
          <span className="text-sm">{education.period}</span>
        </div>
        <div className="flex items-center gap-2 text-light-muted">
          <FiMapPin className="text-accent-blue" size={16} />
          <span className="text-sm">{education.location}</span>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="mt-6 pt-6 border-t border-light/10">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple rounded-full" />
        </div>
      </div>
    </motion.div>
  )
}
