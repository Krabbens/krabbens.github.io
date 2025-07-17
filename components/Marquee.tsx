'use client'

import { motion } from 'framer-motion'

interface MarqueeProps {
  items: string[]
  direction?: 'left' | 'right'
  speed?: number
}

export function Marquee({ items, direction = 'left', speed = 30 }: MarqueeProps) {
  // Duplicate items to create seamless loop
  const duplicatedItems = [...items, ...items, ...items]

  return (
    <div className="marquee-container relative overflow-hidden">
      <motion.div
        className="marquee-content whitespace-nowrap"
        animate={{
          x: direction === 'left' ? ['-0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-4 mx-4 md:mx-8"
          >
            <span className="text-lg md:text-xl font-medium text-light-muted hover:text-light hover:gradient-text transition-colors">
              {item}
            </span>
            {index < duplicatedItems.length - 1 && (
              <span className="w-2 h-2 rounded-full bg-accent-blue/50" />
            )}
          </span>
        ))}
      </motion.div>

      {/* Gradient Overlays for Fade Effect */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-dark to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-dark to-transparent pointer-events-none" />
    </div>
  )
}
