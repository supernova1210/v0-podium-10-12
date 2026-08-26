"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Play, X, Clock } from "lucide-react"

interface VideoPlayerProps {
  src: string
  poster: string
  title: string
  /** Durée affichée sur la vignette, ex. "1 min 50" */
  duration?: string
  /** L'encart s'agrandit en douceur au lancement */
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
  const wrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [docked, setDocked] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  // Mini-lecteur flottant quand la vidéo sort de l'écran pendant la lecture
  useEffect(() => {
    if (!miniPlayerOnScroll || !started) return
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && playing && !dismissed) setDocked(true)
        if (entry.isIntersecting) {
          setDocked(false)
          setDismissed(false)
        }
      },
      { threshold: 0.25 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [miniPlayerOnScroll, started, playing, dismissed])

  const start = () => {
    setStarted(true)
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {})
    })
  }

  const closeMini = () => {
    videoRef.current?.pause()
    setDocked(false)
    setDismissed(true)
  }

  const isDocked = docked && !dismissed

  return (
    <div
      ref={wrapRef}
      className={`transition-all duration-500 ease-out ${
        expandOnPlay && started ? "md:scale-[1.03]" : ""
      } ${className}`}
    >
      {/* Réserve la place quand le lecteur est en mode flottant */}
      <div className={isDocked ? "aspect-video rounded-[22px] bg-[#061952]/5" : "hidden"} />

      <div
        className={
          isDocked
            ? "fixed bottom-4 right-4 z-[80] w-[min(420px,calc(100vw-2rem))] rounded-2xl overflow-hidden shadow-[0_24px_70px_rgba(6,25,82,0.45)] transition-all duration-300"
            : "relative rounded-[22px] overflow-hidden shadow-[0_18px_50px_rgba(6,25,82,0.16)] transition-all duration-300"
        }
      >
        {isDocked ? (
          <button
            onClick={closeMini}
            aria-label="Fermer le mini-lecteur"
            className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-[#061952]/80 text-white flex items-center justify-center hover:bg-[#061952] transition-colors"
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
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => {
              setPlaying(false)
              setDocked(false)
            }}
            className="w-full aspect-video object-cover bg-black"
          />
        ) : (
          <button onClick={start} aria-label={`Lire la vidéo : ${title}`} className="group relative block w-full">
            <div className="relative aspect-video">
              <Image src={poster} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            {/* Voile léger pour la lisibilité */}
            <span aria-hidden className="absolute inset-0 bg-[#061952]/20 transition-colors duration-300 group-hover:bg-[#061952]/10" />
            {/* Bouton play */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FFD25D] text-[#061952] flex items-center justify-center shadow-[0_14px_40px_rgba(6,25,82,0.35)] transition-transform duration-300 group-hover:scale-110">
                <Play className="w-7 h-7 md:w-8 md:h-8 ml-1" fill="currentColor" />
              </span>
            </span>
            {/* Titre + durée */}
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
  )
}
