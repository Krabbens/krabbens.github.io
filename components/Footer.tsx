'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { MagneticButton } from './MagneticButton'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Krabbens',
      icon: FiGithub,
    },
    {
      name: 'LinkedIn',
      url: `https://linkedin.com/in/${personalInfo.linkedin}`,
      icon: FiLinkedin,
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.email}`,
      icon: FiMail,
    },
  ]

  return (
    <footer className="relative py-12 border-t border-light/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#" className="text-3xl font-display font-bold gradient-text">
              {personalInfo.initials}
            </a>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <MagneticButton key={link.name}>
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-dark-card border border-light/10 flex items-center justify-center text-light-muted hover:text-light hover:border-accent-blue/50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  data-cursor="hover"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </motion.a>
              </MagneticButton>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            className="text-sm text-light-muted text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            © {currentYear} {personalInfo.name}. All rights reserved.
          </motion.p>

          {/* Back to Top Button */}
          <MagneticButton>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-card border border-light/10 text-light-muted hover:text-light hover:border-accent-blue/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              data-cursor="hover"
            >
              <FiArrowUp size={16} />
              <span className="text-sm">Back to Top</span>
            </motion.button>
          </MagneticButton>

          {/* Decorative Line */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" />
        </div>
      </div>
    </footer>
  )
}
