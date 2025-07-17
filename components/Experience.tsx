'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { experiences } from '@/lib/data'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineScaleY = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <section id="experience" ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
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
          <span className="inline-block px-3 py-1 text-xs font-medium text-accent-cyan bg-accent-cyan/10 rounded-full mb-4">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="gradient-text">Work History</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px hidden md:block">
            <motion.div
              className="timeline-line"
              style={{ scaleY: lineScaleY, transformOrigin: 'top' }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={exp.id}
                experience={exp}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ExperienceItemProps {
  experience: typeof experiences[0]
  index: number
  isEven: boolean
}

function ExperienceItem({ experience, index, isEven }: ExperienceItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col md:flex-row gap-8 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 hidden md:flex items-center justify-center">
        <motion.div
          className="w-4 h-4 rounded-full bg-gradient-to-br from-accent-blue via-accent-cyan to-accent-purple"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        />
        <motion.div
          className="absolute w-12 h-12 rounded-full bg-accent-blue/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        />
      </div>

      {/* Date Column */}
      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} md:px-8`}>
        <motion.div
          className={`inline-flex items-center gap-2 text-sm text-light-muted mb-2 ${
            isEven ? 'md:flex-row-reverse' : ''
          }`}
          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        >
          <FiCalendar />
          <span>{experience.period}</span>
        </motion.div>
        <motion.div
          className={`inline-flex items-center gap-2 text-sm text-accent-cyan ${
            isEven ? 'md:flex-row-reverse' : ''
          }`}
          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        >
          <FiMapPin />
          <span>{experience.location}</span>
        </motion.div>
      </div>

      {/* Content Column */}
      <div className={`flex-1 md:px-8`}>
        <motion.div
          className="card gradient-border p-6 md:p-8"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 via-accent-cyan/20 to-accent-purple/20 flex items-center justify-center flex-shrink-0">
              <FiBriefcase className="text-accent-blue" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-light mb-1">
                {experience.title}
              </h3>
              <p className="text-accent-cyan font-medium">{experience.company}</p>
              <p className="text-sm text-light-muted mt-1">{experience.duration}</p>
            </div>
          </div>
          <p className="text-light-muted leading-relaxed">
            {experience.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
