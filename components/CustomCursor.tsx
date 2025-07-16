'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface CustomCursorProps {
  enabled?: boolean
}

export function CustomCursor({ enabled = true }: CustomCursorProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const isTouchRef = useRef(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 28 })

  useEffect(() => {
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    isTouchRef.current = isTouch
    if (isTouch) return

    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="hover"]') ||
        target.classList.contains('magnetic-wrapper')
      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  if (!enabled || !isVisible) return null

  return (
    <>
      <motion.div
        className="custom-cursor custom-cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className={`custom-cursor custom-cursor-ring ${isHovering ? 'hovering' : ''}`}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ scale: isHovering ? 1.5 : 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </>
  )
}
