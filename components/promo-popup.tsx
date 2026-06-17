"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X, CalendarDays, ArrowRight } from "lucide-react"

interface PromoPopupProps {
  storageKey?: string
  eyebrow?: string
  title?: string
  dates?: string
  description?: string
  image?: string
  ctaLabel?: string
  ctaHref?: string
  delay?: number
}

export default function PromoPopup({
  storageKey = "podium_promo_semaine_qvct",
  eyebrow = "Événement en cours",
  title = "Semaine de la QVCT",
  dates = "Du 15 au 19 juin 2026",
  description =
    "Cette semaine, on met la qualité de vie au travail à l'honneur : ateliers, animations et temps forts pour vos équipes. Découvrez le programme.",
  image = "/images/olympiades-qvct-atelier.jpg",
  ctaLabel = "Découvrir la Semaine QVCT",
  ctaHref = "/nos-evenements/semaine-qvct",
  delay = 700,
}: PromoPopupProps) {
  const [phase, setPhase] = useState<"hidden" | "modal" | "banner">("hidden")
  const [modalIn, setModalIn] = useState(false)

  useEffect(() => {
    let state: string | null = null
    try {
      state = sessionStorage.getItem(storageKey)
    } catch {
      state = null
    }
    if (state === "all") return
    if (state === "modal") {
      setPhase("banner")
      return
    }
    const t = setTimeout(() => {
      setPhase("modal")
      requestAnimationFrame(() => setModalIn(true))
    }, delay)
    return () => clearTimeout(t)
  }, [storageKey, delay])

  useEffect(() => {
    if (phase !== "modal") return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  const persist = (value: string) => {
    try {
      sessionStorage.setItem(storageKey, value)
    } catch {
      /* no-op */
    }
  }

  const closeModal = () => {
    setModalIn(false)
    persist("modal")
    setTimeout(() => setPhase("banner"), 300)
  }

  const closeBanner = () => {
    persist("all")
    setPhase("hidden")
  }

  if (phase === "hidden") return null

  if (phase === "banner") {
    return (
      <div className="relative z-30 bg-[#061952] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-x-3 gap-y-1 py-2.5 text-sm flex-wrap">
            <span className="flex items-center gap-2 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
              {title} · {dates}
            </span>
            <a
              href={ctaHref}
              className="inline-flex items-center gap-1.5 font-poppins font-semibold text-[#FFD25D] hover:underline"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <button
          onClick={closeBanner}
          aria-label="Fermer le bandeau"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    )
  }

  return (
    <div
      onClick={closeModal}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#061952]/60 backdrop-blur-sm transition-opacity duration-300 ${
        modalIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`relative w-full max-w-lg bg-white rounded-[28px] overflow-hidden shadow-[0_40px_100px_rgba(6,25,82,0.35)] transition-all duration-300 ${
          modalIn ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Image */}
        <div className="relative h-44 sm:h-52 w-full">
          <Image src={image} alt={title} fill className="object-cover" />
          <button
            onClick={closeModal}
            aria-label="Fermer"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-[#061952] flex items-center justify-center hover:bg-white transition-colors shadow-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="relative p-7 sm:p-8">
          <div aria-hidden className="absolute -top-10 -right-10 w-32 h-32 rounded-[28px] bg-[#FFD25D]/15" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
              {eyebrow}
            </span>

            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#061952] tracking-tight mt-3 mb-3">
              {title}
            </h2>

            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD25D]/20 border border-[#FFD25D]/40 px-3.5 py-1.5 text-sm font-poppins font-semibold text-[#061952] mb-4">
              <CalendarDays className="w-4 h-4" />
              {dates}
            </span>

            <p className="text-[15px] text-gray-600 leading-relaxed mb-7">{description}</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-[15px] px-7 py-3.5 rounded-full bg-[#FFD25D] text-[#061952] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5"
              >
                {ctaLabel}
                <ArrowRight className="w-[18px] h-[18px]" />
              </a>
              <button
                onClick={closeModal}
                className="inline-flex items-center justify-center font-poppins font-medium text-[15px] px-6 py-3.5 rounded-full text-gray-500 hover:text-[#061952] hover:bg-gray-100 transition-colors"
              >
                Plus tard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
