'use client'

import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  intensity?: number
  range?: number
}

export function MagneticButton({
  children,
  intensity = 0.5,
  range = 50,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Motion values for magnetic effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring physics for smooth return animation
  const springConfig = { damping: 15, stiffness: 150, mass: 1 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Only apply magnetic effect within range
    const absX = Math.abs(distanceX)
    const absY = Math.abs(distanceY)

    if (absX < range && absY < range) {
      x.set(distanceX * intensity)
      y.set(distanceY * intensity)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className="magnetic-wrapper inline-block"
      style={{
        x: xSpring,
        y: ySpring,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}
