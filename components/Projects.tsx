'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '@/lib/data'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'
import { MagneticButton } from './MagneticButton'

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-lighter" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
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
          <span className="inline-block px-3 py-1 text-xs font-medium text-accent-purple bg-accent-purple/10 rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="mt-4 text-lg text-light-muted max-w-2xl">
            A collection of projects showcasing my expertise in software development, 
            machine learning, and data analysis.
          </p>
        </motion.div>

        {/* Projects Grid - Vertical */}
        <div className="flex flex-col gap-12 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: typeof projects[0]
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className="project-card relative w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      <div className={`card gradient-border overflow-hidden group md:flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Project Image/Placeholder */}
        <div className={`relative h-64 md:h-auto md:w-1/2 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}>
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id={`grid-${project.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill={`url(#grid-${project.id})`} />
            </svg>
          </div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <FiCode className="text-white" size={48} />
            </div>
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-dark-card via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 flex flex-col justify-center md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-light mb-3 group-hover:gradient-text transition-all">
            {project.name}
          </h3>
          <p className="text-light-muted leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>

          <MagneticButton>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-cyan transition-colors font-medium"
              data-cursor="hover"
            >
              <FiGithub size={18} />
              <span>View on GitHub</span>
              <FiExternalLink size={14} className="opacity-50" />
            </a>
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  )
}
