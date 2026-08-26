"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { Play, X, Clock } from "lucide-react"

interface VideoPlayerProps {
  src: string
  poster: string
  title: string
  /** Durée affichée sur la vignette, ex. "1 min 50" */
  duration?: string
  /** L'encart s'élargit franchement au lancement */
  expandOnPlay?: boolean
  /** Passe en mini-lecteur flottant quand on scrolle hors de vue pendant la lecture */
  miniPlayerOnScroll?: boolean
  className?: string
}

export default function VideoPlayer({
  src,
  poster,
  title,
  duration,
  expandOnPlay = false,
  miniPlayerOnScroll = false,
  className = "",
}: VideoPlayerProps) {
  const slotRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const startedRef = useRef(false)
  const dismissedRef = useRef(false)

  const [started, setStarted] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [docked, setDocked] = useState(false)

  // Mini-lecteur : piloté au scroll (plus fiable qu'un IntersectionObserver ici)
  const evaluate = useCallback(() => {
    if (!miniPlayerOnScroll) return
    const slot = slotRef.current
    if (!slot) return
    const r = slot.getBoundingClientRect()
    const vh = window.innerHeight || 0
    // "hors de vue" = moins d'un quart de l'encart visible
    const visible = Math.min(r.bottom, vh) - Math.max(r.top, 0)
    const outOfView = visible < r.height * 0.25

    if (outOfView && startedRef.current && !dismissedRef.current) {
      setDocked(true)
    } else if (!outOfView) {
      dismissedRef.current = false
      setDocked(false)
    }
  }, [miniPlayerOnScroll])

  useEffect(() => {
    if (!miniPlayerOnScroll || !started) return
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        evaluate()
        raf = 0
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [miniPlayerOnScroll, started, evaluate])

  const start = () => {
    setStarted(true)
    startedRef.current = true
    if (expandOnPlay) setExpanded(true)
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {})
    })
  }

  const closeMini = () => {
    videoRef.current?.pause()
    dismissedRef.current = true
    setDocked(false)
  }

  return (
    <div ref={slotRef} className={className}>
      {/* Encart : s'élargit au lancement, laisse sa place quand le lecteur flotte */}
      <div
        className={`relative mx-auto transition-[width,margin,transform] duration-500 ease-out ${
          expanded && !docked ? "w-full md:w-[118%] md:-ml-[9%]" : "w-full"
        }`}
      >
        {/* Placeholder qui garde la hauteur pendant le mode flottant */}
        <div
          className={`aspect-video rounded-[22px] border-2 border-dashed border-[#061952]/15 bg-[#fafbfe] flex items-center justify-center transition-opacity duration-300 ${
            docked ? "opacity-100" : "hidden"
          }`}
        >
          <span className="font-poppins font-medium text-sm text-[#061952]/50">Lecture en cours…</span>
        </div>

        <div
          className={
            docked
              ? "fixed bottom-4 right-4 z-[90] w-[min(440px,calc(100vw-2rem))] rounded-2xl overflow-hidden shadow-[0_24px_70px_rgba(6,25,82,0.45)] ring-2 ring-[#FFD25D] animate-in"
              : "relative rounded-[22px] overflow-hidden shadow-[0_18px_50px_rgba(6,25,82,0.16)] transition-shadow duration-500"
          }
          style={
            docked
              ? { animation: "podium-dock-in 320ms cubic-bezier(0.22, 1, 0.36, 1)" }
              : undefined
          }
        >
          {docked ? (
            <button
              onClick={closeMini}
              aria-label="Fermer le mini-lecteur"
              className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-[#061952]/85 text-white flex items-center justify-center hover:bg-[#061952] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          ) : null}

          {started ? (
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              controls
              playsInline
              preload="metadata"
              onPlay={() => evaluate()}
              onEnded={() => {
                startedRef.current = false
                setDocked(false)
              }}
              className="w-full aspect-video object-cover bg-black"
            />
          ) : (
            <button onClick={start} aria-label={`Lire la vidéo : ${title}`} className="group relative block w-full">
              <div className="relative aspect-video">
                <Image
                  src={poster}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span
                aria-hidden
                className="absolute inset-0 bg-[#061952]/25 transition-colors duration-300 group-hover:bg-[#061952]/10"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FFD25D] text-[#061952] flex items-center justify-center shadow-[0_14px_40px_rgba(6,25,82,0.35)] transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-7 h-7 md:w-8 md:h-8 ml-1" fill="currentColor" />
                </span>
              </span>
              <span className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between gap-3 text-left">
                <span className="font-poppins font-semibold text-sm md:text-base text-white [text-shadow:0_2px_12px_rgba(6,25,82,0.9)]">
                  {title}
                </span>
                {duration ? (
                  <span className="inline-flex items-center gap-1.5 font-poppins font-semibold text-xs px-2.5 py-1.5 rounded-full bg-white/90 text-[#061952] flex-shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    {duration}
                  </span>
                ) : null}
              </span>
            </button>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes podium-dock-in {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  )
}
