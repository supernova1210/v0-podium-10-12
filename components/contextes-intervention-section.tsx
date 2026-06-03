"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const contextes = [
  {
    id: "journee-securite",
    number: "01",
    title: "Journée sécurité",
    description: "Animations, ateliers et sensibilisation pour vos collaborateurs lors de votre journée sécurité annuelle.",
    button: "Organiser une journée sécurité",
    href: "/nos-evenements/journee-securite",
    accent: "#FFD25D",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
      </svg>
    ),
  },
  {
    id: "semaine-qvct",
    number: "02",
    title: "Semaine QVCT",
    description: "Un programme complet et clé en main pour animer votre semaine de la qualité de vie et des conditions de travail.",
    button: "Organiser une semaine QVCT",
    href: "/nos-evenements/semaine-qvct",
    accent: "#FFD25D",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.4 17 3.4s.2 2.5-2 5.6"/>
        <path d="M14.8 14.8c3.1-2.2 5.6-2 5.6-2s-1.5 1.5-3.5 7.2A7 7 0 0 1 14.8 14.8"/>
        <path d="M6.3 12.5c0 3.9 3.2 7 7 7 0-3.9-3.2-7-7-7z"/>
      </svg>
    ),
  },
  {
    id: "seminaire",
    number: "03",
    title: "Séminaire d'entreprise",
    description: "Des ateliers sur-mesure pour dynamiser vos temps forts et créer des moments de cohésion mémorables.",
    button: "Enrichir votre séminaire",
    href: "/nos-evenements/journee-seminaire",
    accent: "#FFD25D",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: "plan-prevention",
    number: "04",
    title: "Plan de prévention annuel",
    description: "Un accompagnement sur-mesure tout au long de l'année pour structurer votre démarche de prévention.",
    button: "Construire votre plan personnalisé",
    href: "/contact",
    accent: "#FFD25D",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4"/>
        <path d="M16 2v4"/>
        <rect width="18" height="18" x="3" y="4" rx="2"/>
        <path d="M3 10h18"/>
        <path d="m9 16 2 2 4-4"/>
      </svg>
    ),
  },
]

export default function ContextesInterventionSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Soft warm background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9E6] via-white to-[#F0F4FF]" />

      {/* Subtle texture */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-[15%] w-64 h-64 bg-[#FFD25D] rounded-full opacity-[0.06] blur-3xl" />
        <div className="absolute bottom-10 left-[10%] w-80 h-80 bg-[#061952] rounded-full opacity-[0.04] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#061952]/[0.03] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#061952] bg-[#FFD25D] px-4 py-1.5 rounded-full uppercase tracking-wide">
            Vos contextes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#061952] mt-5 mb-4 text-balance">
            {"Vous organisez une action de prévention ?"}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            {"Nous adaptons nos formats à votre contexte et à vos objectifs."}
          </p>
        </div>

        {/* Interactive horizontal layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contextes.map((ctx, index) => (
            <Link
              key={ctx.id}
              href={ctx.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-[#061952] transition-all duration-500" />

              {/* Accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 group-hover:h-2"
                style={{ backgroundColor: ctx.accent }}
              />

              {/* Decorative background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-[0.07] transition-all duration-700 group-hover:opacity-[0.12] group-hover:scale-125"
                  style={{ backgroundColor: ctx.accent }}
                />
                <div
                  className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-[0.05] transition-all duration-700 group-hover:opacity-[0.10] group-hover:scale-110"
                  style={{ backgroundColor: ctx.accent }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-7 flex flex-col flex-1">
                {/* Number */}
                <span
                  className="text-5xl font-black opacity-10 absolute top-4 right-5 transition-all duration-500 group-hover:opacity-20"
                  style={{ color: ctx.accent }}
                >
                  {ctx.number}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg"
                  style={{
                    backgroundColor: hoveredIndex === index ? ctx.accent : "rgba(255,255,255,0.1)",
                    color: hoveredIndex === index ? "#061952" : "white",
                    boxShadow: hoveredIndex === index ? `0 8px 24px ${ctx.accent}40` : "none",
                  }}
                >
                  {ctx.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  {ctx.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6 flex-1 group-hover:text-white/80 transition-colors duration-300">
                  {ctx.description}
                </p>

                {/* CTA */}
                <div
                  className="flex items-center gap-2 text-sm md:text-base font-semibold transition-all duration-300"
                  style={{ color: ctx.accent }}
                >
                  <span>{ctx.button}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FFD25D] text-[#061952] font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-[#FFD25D]/25 hover:shadow-xl hover:shadow-[#FFD25D]/30 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
          >
            Nous contacter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
