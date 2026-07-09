"use client"

import { useEffect, useRef } from "react"
import { MessageCircle, Lightbulb, CheckCircle, PencilRuler, Gamepad2, Repeat, ArrowRight } from "lucide-react"
import Reveal from "@/components/reveal"

const ICONS = {
  message: MessageCircle,
  lightbulb: Lightbulb,
  check: CheckCircle,
  pencil: PencilRuler,
  gamepad: Gamepad2,
  repeat: Repeat,
} as const

export interface EtapeStack {
  icon: keyof typeof ICONS
  color: string
  iconColor?: string
  title: string
  subtitle?: string
  description: string
}

interface EvenementEtapesStackingProps {
  eyebrow?: string
  title: string
  subtitle: string
  steps: EtapeStack[]
  ctaLabel?: string
  ctaHref?: string
}

// sous le header sticky (137px) + la barre d'ancres sticky (~56px)
const BASE_TOP = 204
const STEP_OFFSET = 22

export default function EvenementEtapesStacking({
  eyebrow = "Notre méthode",
  title,
  subtitle,
  steps,
  ctaLabel,
  ctaHref = "/contact",
}: EvenementEtapesStackingProps) {
  const wrapsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let raf = 0
    const update = () => {
      const wraps = wrapsRef.current
      wraps.forEach((wrap, i) => {
        const card = wrap?.firstElementChild as HTMLElement | null
        if (!card) return
        const next = wraps[i + 1]
        let p = 0
        if (next) {
          const cardRect = card.getBoundingClientRect()
          const nextRect = next.getBoundingClientRect()
          if (cardRect.height > 0) {
            p = Math.min(1, Math.max(0, (cardRect.bottom - nextRect.top) / cardRect.height))
          }
        }
        card.style.transform = `scale(${1 - p * 0.07}) translateY(${-p * 10}px)`
        card.style.filter = `brightness(${1 - p * 0.16})`
        card.style.opacity = `${1 - p * 0.25}`
      })
      raf = 0
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-[#fafbfe] relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-45px] top-28 hidden xl:block w-48 h-48 rounded-[38px] border-2 border-[#FFD25D]/40" />
        <div className="absolute left-[-50px] bottom-32 hidden xl:block w-44 h-44 rounded-[36px] bg-[#57B3B7]/12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9426B]" />
            {eyebrow}
          </span>
          <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-5xl mt-4 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </Reveal>

        {/* Cartes en stacking scroll-driven */}
        <div className="max-w-2xl mx-auto">
          {steps.map((step, i) => {
            const Icon = ICONS[step.icon]
            return (
              <div
                key={i}
                ref={(el) => {
                  wrapsRef.current[i] = el
                }}
                className="sticky"
                style={{ top: `${BASE_TOP + i * STEP_OFFSET}px`, zIndex: i + 1 }}
              >
                <div
                  className="relative overflow-hidden bg-white border border-gray-200 rounded-[24px] p-7 md:p-9 mb-6 shadow-[0_18px_50px_rgba(6,25,82,0.14)] will-change-transform"
                  style={{ transformOrigin: "center top" }}
                >
                  <span aria-hidden className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: step.color }} />
                  <span
                    aria-hidden
                    className="absolute -right-2 -bottom-8 font-poppins font-extrabold text-[120px] leading-none text-[#061952]/[0.05] select-none"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex items-start gap-5">
                    <span
                      className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8" style={{ color: step.iconColor ?? "#061952" }} />
                    </span>
                    <div className="flex-1 pt-0.5">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-poppins font-bold text-sm" style={{ color: step.color }}>
                          Étape {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-poppins font-semibold text-xl md:text-2xl text-[#061952]">{step.title}</h3>
                      </div>
                      {step.subtitle ? (
                        <p className="font-poppins font-semibold text-[15px] text-[#B8860B] mt-1">{step.subtitle}</p>
                      ) : null}
                      <p className="text-gray-600 leading-relaxed mt-2 text-[15.5px]">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {ctaLabel ? (
          <Reveal className="text-center mt-12">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#061952] text-white transition-all duration-300 hover:bg-[#0a2068] hover:-translate-y-0.5"
            >
              {ctaLabel}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
