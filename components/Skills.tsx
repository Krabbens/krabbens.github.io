'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '@/lib/data'
import { FiCode, FiLayers, FiTrendingUp } from 'react-icons/fi'

// Category configuration
const categoryConfig = {
  languages: {
    title: 'Languages',
    icon: FiCode,
    color: 'text-accent-blue',
    bgColor: 'bg-accent-blue/10',
    borderColor: 'border-accent-blue/20',
  },
  frameworks: {
    title: 'Frameworks & Libraries',
    icon: FiLayers,
    color: 'text-accent-cyan',
    bgColor: 'bg-accent-cyan/10',
    borderColor: 'border-accent-cyan/20',
  },
  areas: {
    title: 'Areas of Expertise',
    icon: FiTrendingUp,
    color: 'text-accent-purple',
    bgColor: 'bg-accent-purple/10',
    borderColor: 'border-accent-purple/20',
  },
}

/**
 * CSS rotate → translateX → counter-rotate.
 * The wrapper shares the exact same `inset-*` as the visible ring guide,
 * so the pill traces the **same** circle regardless of container size.
 */
function OrbitItem({
  label,
  phaseDeg,
  orbitInset,
  durationSec,
  reverse,
  pillClassName,
}: {
  label: string
  phaseDeg: number
  orbitInset: string
  durationSec: number
  reverse?: boolean
  pillClassName: string
}) {
  const dir = reverse ? -1 : 1
  const end = phaseDeg + dir * 360

  return (
    <motion.div
      className={`absolute ${orbitInset} rounded-full pointer-events-none select-none`}
      initial={{ rotate: phaseDeg }}
      animate={{ rotate: end }}
      transition={{ duration: durationSec, repeat: Infinity, ease: 'linear' }}
    >
      <motion.div
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ rotate: -phaseDeg }}
        animate={{ rotate: -end }}
        transition={{ duration: durationSec, repeat: Infinity, ease: 'linear' }}
      >
        <div className={`${pillClassName} whitespace-nowrap shadow-md shadow-black/30`}>
          {label}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  // Group skills by category
  const groupedSkills = {
    languages: skills.filter((s) => s.category === 'languages'),
    frameworks: skills.filter((s) => s.category === 'frameworks'),
    areas: skills.filter((s) => s.category === 'areas'),
  }

  return (
    <section id="skills" ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
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
          <span className="inline-block px-3 py-1 text-xs font-medium text-accent-cyan bg-accent-cyan/10 rounded-full mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="mt-4 text-lg text-light-muted max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience 
            in software development, machine learning, and data analysis.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => {
            const Config = categoryConfig[category as keyof typeof categoryConfig]
            const Icon = Config.icon

            return (
              <motion.div
                key={category}
                className="card gradient-border p-6 md:p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${Config.bgColor} ${Config.borderColor} border flex items-center justify-center`}>
                    <Icon className={Config.color} size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-light">
                    {Config.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-tag px-4 py-2 rounded-lg bg-dark-card border border-light/10 text-light font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.2 + skillIndex * 0.05,
                      }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: 'rgba(59, 130, 246, 0.5)',
                      }}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills Visualization - Orbital Layout */}
        <motion.div
          className="relative mt-24 md:mt-32 hidden md:block select-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative aspect-square max-w-2xl mx-auto">
            {/* Orbital ring guides (behind tags) */}
            <motion.div
              className="absolute inset-0 z-0 border border-accent-blue/20 rounded-full pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-8 z-0 border border-accent-cyan/20 rounded-full pointer-events-none"
              animate={{ rotate: -360 }}
              transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-16 z-0 border border-accent-purple/20 rounded-full pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
            />

            {/* Outer orbit — same inset-0 as outer ring */}
            {['C++', 'Python', 'CUDA', 'SQL'].map((skill, i) => (
              <OrbitItem
                key={skill}
                label={skill}
                phaseDeg={i * 90}
                orbitInset="inset-0"
                durationSec={110}
                pillClassName="skill-tag px-4 py-2 rounded-full bg-dark-card border border-accent-blue/30 text-accent-blue text-sm font-medium"
              />
            ))}
            {/* Middle orbit — same inset-8 as middle ring */}
            {['PyQt5', 'Pandas', 'Qt', 'ML'].map((skill, i) => (
              <OrbitItem
                key={skill}
                label={skill}
                phaseDeg={45 + i * 90}
                orbitInset="inset-8"
                durationSec={85}
                reverse
                pillClassName="skill-tag px-4 py-2 rounded-full bg-dark-card border border-accent-cyan/30 text-accent-cyan text-sm font-medium"
              />
            ))}
            {/* Inner orbit — same inset-16 as inner ring */}
            {['IoT', 'LLMOps', 'Data Analysis', 'Salesforce'].map((skill, i) => (
              <OrbitItem
                key={skill}
                label={skill}
                phaseDeg={22.5 + i * 90}
                orbitInset="inset-16"
                durationSec={62}
                pillClassName="skill-tag px-4 py-2 rounded-full bg-dark-card border border-accent-purple/30 text-accent-purple text-sm font-medium"
              />
            ))}

            {/* Center hub on top so labels never cover the title */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
              <motion.div
                className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue via-accent-cyan to-accent-purple"
                animate={{
                  boxShadow: [
                    '0 0 60px rgba(59, 130, 246, 0.3)',
                    '0 0 100px rgba(139, 92, 246, 0.3)',
                    '0 0 60px rgba(59, 130, 246, 0.3)',
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span className="text-white font-display font-bold text-xl select-none">
                  Full Stack
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
