"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Reveal from "@/components/reveal"

const pillars = [
  {
    icon: "/images/picto-personne-celebrant.png",
    alt: "Le corps comme levier",
    title: "Le corps comme levier d'apprentissage",
    description:
      "Chez PODIUM, la prévention passe par l'expérience. Nos formats mettent les participants en mouvement pour favoriser la prise de conscience, l'ancrage et l'adoption durable des bonnes pratiques.",
    style: "light" as const,
    bar: "bg-[#FFD25D]",
    iconBox: "bg-[#FFD25D]",
    invert: true,
  },
  {
    icon: "/images/picto-personne-etoile.png",
    alt: "Formats immersifs",
    title: "Des formats immersifs et participatifs",
    description:
      "Escape game, théâtre d'improvisation, ateliers collectifs : nos interventions rendent chaque participant acteur. Cette pédagogie immersive favorise l'engagement, la cohésion et l'appropriation des enjeux de prévention.",
    style: "navy" as const,
    bar: "bg-[#57B3B7]",
    iconBox: "bg-white",
    invert: false,
  },
  {
    icon: "/images/picto-puzzle.png",
    alt: "Marque employeur",
    title: "Un levier concret pour votre marque employeur",
    description:
      "Nos ateliers valorisent votre démarche QVCT et renforcent votre image d'employeur engagé. Ils contribuent à améliorer le bien-être, la cohésion et la culture prévention au sein de vos équipes.",
    style: "light" as const,
    bar: "bg-[#C9426B]",
    iconBox: "bg-[#061952]",
    invert: true,
  },
]

export default function PourquoiPodiumSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current) return
      const rect = titleRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const startPoint = windowHeight
      const endPoint = windowHeight * 0.3
      const currentPoint = rect.top
      if (currentPoint >= startPoint) {
        setScrollProgress(0)
      } else if (currentPoint <= endPoint) {
        setScrollProgress(1)
      } else {
        const progress = (startPoint - currentPoint) / (startPoint - endPoint)
        setScrollProgress(Math.min(Math.max(progress, 0), 1))
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const titleWords = ["Pourquoi", "choisir", "PODIUM", "pour", "vos", "formations", "QVCT", "et", "prévention", "?"]

  return (
    <section className="py-16 md:py-24 bg-[#fafbfe] relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-45px] top-24 hidden xl:block w-48 h-48 rounded-[38px] border-2 border-[#FFD25D]/40" />
        <div className="absolute left-[-50px] bottom-28 hidden xl:block w-44 h-44 rounded-[36px] bg-[#57B3B7]/10" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Titre avec révélation progressive au scroll */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
            Notre différence
          </span>
          <h2 ref={titleRef} className="font-poppins font-bold tracking-tight text-3xl md:text-5xl leading-tight mt-4 max-w-4xl">
            {titleWords.map((word, index) => {
              const wordProgress = Math.min(Math.max((scrollProgress * titleWords.length - index) / 1.5, 0), 1)
              return (
                <span
                  key={index}
                  className="inline-block mr-3 transition-all duration-300"
                  style={{ color: `rgba(6, 25, 82, ${0.2 + wordProgress * 0.8})` }}
                >
                  {word}
                </span>
              )
            })}
          </h2>
        </div>

        {/* Trois piliers */}
        <div className="grid md:grid-cols-3 gap-7">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} y={44} scale={0.95} duration={700}>
              <div
                className={`group relative h-full rounded-[22px] p-8 lg:p-9 overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  p.style === "navy"
                    ? "bg-[#061952] shadow-[0_18px_50px_rgba(6,25,82,0.25)] hover:shadow-[0_26px_70px_rgba(6,25,82,0.35)]"
                    : "bg-white border border-gray-100 shadow-[0_4px_18px_rgba(6,25,82,0.06)] hover:shadow-[0_22px_55px_rgba(6,25,82,0.14)]"
                }`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2.5 ${p.bar}`} />
                {p.style === "navy" ? (
                  <div aria-hidden className="absolute -bottom-10 -right-10 w-32 h-32 rounded-[28px] border-2 border-[#FFD25D]/20" />
                ) : null}

                <span
                  className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${p.iconBox}`}
                >
                  <Image
                    src={p.icon}
                    alt={p.alt}
                    width={44}
                    height={44}
                    className={p.invert ? "brightness-0 invert" : ""}
                  />
                </span>
                <h3
                  className={`font-poppins font-semibold text-xl lg:text-2xl mb-4 ${
                    p.style === "navy" ? "text-white" : "text-[#061952]"
                  }`}
                >
                  {p.title}
                </h3>
                <p className={`text-[15.5px] leading-relaxed ${p.style === "navy" ? "text-white/85" : "text-gray-600"}`}>
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
