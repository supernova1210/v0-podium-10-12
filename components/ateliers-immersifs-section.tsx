"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

const workshops = [
  {
    id: "escape-game",
    title: "Escape Game QVCT & Sécurité",
    description:
      "Une expérience immersive où les équipes collaborent pour résoudre des situations liées à la prévention, la sécurité et la QVCT.",
    image: "/images/escape-game-atelier-podium.jpg",
    href: "/nos-ateliers#escape-game",
    comingSoon: false,
  },
  {
    id: "theatre",
    title: "Théâtre d'improvisation & prévention",
    description:
      "Des mises en situation réalistes et interactives pour déclencher des prises de conscience et encourager le dialogue autour des enjeux de prévention.",
    image: "/images/atelier-theatre-entreprise.jpg",
    href: "/nos-ateliers#theatre-improvisation",
    comingSoon: false,
  },
  {
    id: "olympiades",
    title: "Olympiades QVCT & cohésion",
    description:
      "Des défis collectifs ludiques pour renforcer la cohésion et sensibiliser aux enjeux de santé et de prévention.",
    image: "/images/olympiades-qvct-atelier.jpg",
    href: "",
    comingSoon: true,
  },
]

export default function AteliersImmersifsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-[#061952] relative overflow-hidden">
      {/* Rich textured background */}
      <div className="absolute inset-0">
        {/* Radial gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#0a2670] rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#0d1d4a] rounded-full blur-3xl opacity-50" />

        {/* Decorative circles */}
        <div className="absolute top-16 right-16 w-80 h-80 border border-white/[0.04] rounded-full" />
        <div className="absolute top-24 right-24 w-56 h-56 border border-white/[0.03] rounded-full" />
        <div className="absolute bottom-16 left-12 w-72 h-72 border border-white/[0.04] rounded-full" />
        <div className="absolute bottom-24 left-20 w-48 h-48 border border-[#FFD25D]/[0.04] rounded-full" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.02] rounded-full" />

        {/* Dot grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>

        {/* Floating yellow accents */}
        <div className="absolute top-20 left-[15%] w-3 h-3 bg-[#FFD25D] rounded-full opacity-15 blur-sm" />
        <div className="absolute top-[40%] right-[10%] w-2 h-2 bg-[#FFD25D] rounded-full opacity-20 blur-sm" />
        <div className="absolute bottom-32 left-[60%] w-4 h-4 bg-[#FFD25D] rounded-full opacity-10 blur-md" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="mb-14">
          <span className="text-xs font-bold text-[#061952] bg-[#FFD25D] px-4 py-1.5 rounded-full uppercase tracking-wide">
            Nos formats
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-5 leading-tight max-w-2xl">
            Des ateliers immersifs pour ancrer la prévention
          </h2>
          <p className="text-white/60 mt-3 max-w-xl text-base leading-relaxed">
            {"Des expériences collectives pensées pour engager vos équipes et transformer la prévention en moment fédérateur."}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left side - Workshop cards (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            {workshops.map((workshop, index) => (
              <div
                key={workshop.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group cursor-pointer rounded-2xl p-6 transition-all duration-500 relative overflow-hidden ${
                  activeIndex === index
                    ? "bg-white/20 shadow-lg shadow-black/10 scale-[1.02] -translate-y-1"
                    : "bg-white/[0.08] hover:bg-white/[0.13]"
                }`}
              >
                {/* Active left accent bar */}
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 rounded-r-full transition-all duration-500 ${
                    activeIndex === index ? "h-16 bg-[#FFD25D] opacity-100" : "h-8 bg-white/20 opacity-0"
                  }`}
                />

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                    activeIndex === index
                      ? "opacity-100 bg-gradient-to-r from-[#FFD25D]/[0.06] to-transparent"
                      : "opacity-0"
                  }`}
                />

                {/* Decorative dot */}
                <div
                  className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-[#FFD25D] opacity-80 scale-100"
                      : "bg-white opacity-20 scale-75"
                  }`}
                />

                <div className="flex items-start gap-5 relative z-10">
                  {/* Number badge */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                      activeIndex === index
                        ? "bg-[#FFD25D] text-[#061952] shadow-lg shadow-[#FFD25D]/30 scale-110 rotate-3"
                        : "bg-white/15 text-white/70 group-hover:bg-white/20"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`text-lg md:text-xl font-bold mb-2 transition-colors duration-300 ${
                        activeIndex === index ? "text-[#FFD25D]" : "text-white/90 group-hover:text-white"
                      }`}
                    >
                      {workshop.title}
                    </h3>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm md:text-base leading-relaxed text-white/70 mb-3">
                        {workshop.description}
                      </p>
                      {workshop.comingSoon ? (
                        <span className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-white/40 cursor-default">
                          {"Bientôt disponible"}
                        </span>
                      ) : (
                        <Link
                          href={workshop.href}
                          className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-[#FFD25D] hover:text-white transition-colors duration-300 group/link"
                        >
                          {"Découvrir l'atelier"}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-300 group-hover/link:translate-x-1"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Image (2 cols) */}
          <div className="lg:col-span-2 relative">
            <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
              {workshops.map((workshop, index) => (
                <div
                  key={workshop.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                >
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061952]/70 via-[#061952]/10 to-transparent" />
                </div>
              ))}

              {/* Active workshop title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white/90 font-bold text-sm">
                  {workshops[activeIndex]?.title}
                </p>
              </div>

              {/* Active indicator dots */}
              <div className="absolute bottom-5 right-5 flex gap-1.5">
                {workshops.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      activeIndex === index ? "bg-[#FFD25D] w-5 h-2" : "bg-white/40 w-2 h-2 hover:bg-white/60"
                    }`}
                    aria-label={`Voir atelier ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative elements around image */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#FFD25D] rounded-full opacity-15 blur-2xl" />
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#FFD25D] rounded-full opacity-10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
