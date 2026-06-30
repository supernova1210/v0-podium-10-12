"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  x?: number
  scale?: number
  duration?: number
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 32,
  x = 0,
  scale = 1,
  duration = 700,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        transitionDelay: `${delay}ms`,
        opacity: show ? 1 : 0,
        transform: show ? "none" : `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}
