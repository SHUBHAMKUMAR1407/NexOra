'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const onMouseLeave = () => setVisible(false)
    const onMouseEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [visible])

  // Fix hydration mismatch by waiting for mount
  if (!mounted) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '8px',
        height: '8px',
        backgroundColor: '#111',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        zIndex: 9999,
        transition: 'transform 0.12s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.3s ease',
        opacity: visible ? 1 : 0,
      }}
    />
  )
}
