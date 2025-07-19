'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Preloader } from '@/components/Preloader'
import { CustomCursor } from '@/components/CustomCursor'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Education } from '@/components/Education'
import { Achievements } from '@/components/Achievements'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { NoiseTexture } from '@/components/NoiseTexture'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log(`
    ╔═══════════════════════════════════════════╗
    ║                                           ║
    ║   K G  —  Kosma Gąsiorowski Portfolio     ║
    ║                                           ║
    ║   Built with Next.js, Framer Motion,      ║
    ║   and Tailwind CSS                        ║
    ║                                           ║
    ╚═══════════════════════════════════════════╝
    `)
  }, [])

  const handlePreloaderComplete = () => {
    setIsLoading(false)
  }

  return (
    <main className="relative min-h-screen bg-dark">
      {/* Preloader */}
      <AnimatePresence>
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      {/* Custom Cursor */}
      {!isLoading && <CustomCursor />}

      {/* Noise Texture Overlay */}
      <NoiseTexture />

      {/* Main Content */}
      <motion.div
        style={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Navigation */}
        <Navigation />

        {/* Sections */}
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />

        {/* Footer */}
        <Footer />
      </motion.div>
    </main>
  )
}
