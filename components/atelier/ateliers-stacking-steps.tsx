"use client"

import { useEffect, useRef } from "react"
import { MessagesSquare, PencilRuler, Gamepad2, MessageCircleHeart, Repeat } from "lucide-react"

const steps = [
  {
    icon: MessagesSquare,
    color: "#FFD25D",
    iconColor: "#061952",
    title: "Choix des thèmes",
    description:
      "TMS, addictions, santé mentale, cohésion : on part de vos enjeux, de votre secteur et de vos équipes pour choisir les bons ateliers.",
  },
  {
    icon: PencilRuler,
    color: "#57B3B7",
    iconColor: "#FFFFFF",
    title: "Préparation sur-mesure",
    description:
      "Contenus, quiz et scénarios adaptés à vos consignes internes. Vous validez, on affine, rien n'est générique.",
  },
  {
    icon: Gamepad2,
    color: "#C9426B",
    iconColor: "#FFFFFF",
    title: "Animation dans vos locaux",
    description:
      "Des sessions courtes et rythmées de 15 à 45 minutes, en rotation si besoin, animées avec tout le matériel fourni.",
  },
  {
    icon: MessageCircleHeart,
    color: "#F4B609",
    iconColor: "#061952",
    title: "Débriefing et ancrage",
    description:
      "Chaque atelier se termine par un temps d'échange qui relie le jeu au quotidien de travail de vos équipes.",
  },
  {
    icon: Repeat,
    color: "#061952",
    iconColor: "#FFD25D",
    title: "Bilan et suite",
    description:
      "Retour à chaud, pistes pour prolonger la dynamique : atelier récurrent, formation certifiante ou événement complet.",
  },
]

const BASE_TOP = 100
const STEP_OFFSET = 22

export default function AteliersStackingSteps() {
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
    <div className="max-w-2xl mx-auto">
      {steps.map((step, i) => (
        <div
          key={i}
          ref={(el) => {
            wrapsRef.current[i] = el
          }}
          className="sticky"
          style={{ top: `${BASE_TOP + i * STEP_OFFSET}px`, zIndex: i + 1 }}
        >
          <div
            className="relative overflow-hidden bg-white border border-gray-200 rounded-[24px] p-7 md:p-8 mb-6 shadow-[0_18px_50px_rgba(6,25,82,0.14)] flex items-start gap-5 will-change-transform"
            style={{ transformOrigin: "center top" }}
          >
            {/* Barre colorée */}
            <span aria-hidden className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: step.color }} />
            {/* Numéro en filigrane */}
            <span
              aria-hidden
              className="absolute -right-2 -bottom-7 font-poppins font-extrabold text-[110px] leading-none text-[#061952]/[0.05] select-none"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <span
              className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
              style={{ backgroundColor: step.color }}
            >
              <step.icon className="w-7 h-7 md:w-8 md:h-8" style={{ color: step.iconColor }} />
            </span>
            <div className="flex-1 pt-0.5 relative">
              <div className="flex items-center gap-3">
                <span className="font-poppins font-bold text-sm" style={{ color: step.color }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-poppins font-semibold text-xl md:text-2xl text-[#061952]">{step.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mt-2 text-[15.5px]">{step.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
