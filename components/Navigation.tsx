'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navItems, personalInfo } from '@/lib/data'
import { MagneticButton } from './MagneticButton'
import { FiMenu, FiX } from 'react-icons/fi'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div
            className={`rounded-full px-6 py-3 transition-all duration-300 ${
              isScrolled
                ? 'glass shadow-lg'
                : 'bg-transparent border border-transparent'
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <MagneticButton>
                <a
                  href="#"
                  className="text-xl font-display font-bold gradient-text"
                  data-cursor="hover"
                >
                  {personalInfo.initials}
                </a>
              </MagneticButton>

              {/* Navigation Links */}
              <div className="flex items-center gap-1">
                {navItems.map((item, index) => (
                  <MagneticButton key={item.label}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="nav-link px-4 py-2 text-sm font-medium text-light-muted hover:text-light transition-colors"
                      data-cursor="hover"
                      style={{
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {item.label}
                    </button>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Button */}
      <motion.div
        className="fixed top-4 right-4 z-50 md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <MagneticButton>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="glass p-3 rounded-full text-light hover:text-accent-blue transition-colors"
            data-cursor="hover"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </MagneticButton>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-overlay md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-6">
              {/* Logo */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="text-6xl font-display font-bold gradient-text">
                  {personalInfo.initials}
                </span>
              </motion.div>

              {/* Navigation Links */}
              <nav className="flex flex-col items-center gap-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-2xl md:text-3xl font-display font-medium text-light-muted hover:text-light hover:gradient-text transition-all"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.3 + index * 0.1,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              {/* Decorative Elements */}
              <motion.div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
