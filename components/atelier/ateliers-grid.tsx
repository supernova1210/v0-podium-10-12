"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users } from "lucide-react"
import Reveal from "@/components/reveal"
import { allAteliers } from "@/lib/ateliers"

interface GridAtelier {
  slug: string
  title: string
  description: string
  category: "qvct" | "securite"
  duree: string
  participants: string
  image: string
}

const ateliers: GridAtelier[] = [
  ...allAteliers.map((a) => ({
    slug: `/atelier/${a.slug}`,
    title: a.cardTitle,
    description: a.cardDescription,
    category: a.category,
    duree: a.duree,
    participants: a.participants,
    image: a.heroImage,
  })),
  {
    slug: "/atelier/escape-game-securite",
    title: "Escape Game Sécurité",
    description:
      "Un jeu connecté sur la sécurité au travail où les équipes relèvent des défis variés en temps limité.",
    category: "securite",
    duree: "à partir de 20 min",
    participants: "à partir de 6",
    image: "/images/escape-game-atelier-podium.jpg",
  },
]

const ACCENTS = {
  qvct: {
    chip: "bg-[#57B3B7]/90 text-white",
    label: "Atelier QVCT",
    hover: "group-hover:text-[#2c6e72]",
    arrow: "group-hover:bg-[#57B3B7] group-hover:text-white group-hover:border-[#57B3B7]",
    sweep: "bg-[#57B3B7]/25",
  },
  securite: {
    chip: "bg-[#FFD25D]/95 text-[#061952]",
    label: "Atelier Sécurité",
    hover: "group-hover:text-[#B8860B]",
    arrow: "group-hover:bg-[#FFD25D] group-hover:text-[#061952] group-hover:border-[#FFD25D]",
    sweep: "bg-[#FFD25D]/35",
  },
} as const

const FILTERS = [
  { id: "all", label: "Tous les ateliers" },
  { id: "qvct", label: "QVCT" },
  { id: "securite", label: "Sécurité" },
] as const

type FilterId = (typeof FILTERS)[number]["id"]

export default function AteliersGrid() {
  const [filter, setFilter] = useState<FilterId>("all")

  const visible = ateliers.filter((a) => filter === "all" || a.category === filter)

  return (
    <section id="ateliers" className="scroll-mt-20 py-16 md:py-24 bg-white relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-50px] top-32 hidden xl:block w-44 h-44 rounded-[36px] bg-[#57B3B7]/15" />
        <div className="absolute right-[-40px] bottom-40 hidden xl:block w-48 h-48 rounded-[38px] border-2 border-[#FFD25D]/40" />
        <div className="absolute right-24 top-24 hidden xl:block w-24 h-24 rounded-[24px] bg-[#C9426B]/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
            Notre catalogue
          </span>
          <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-5xl mt-4 mb-4">
            Les ateliers QVCT et Sécurité
          </h2>
          <p className="text-lg text-gray-600">
            Dix-neuf ateliers ludiques et participatifs, animés dans vos locaux, qui s&apos;adaptent à vos équipes,
            votre secteur et vos contraintes terrain.
          </p>
        </Reveal>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map((f) => {
            const active = filter === f.id
            const activeClass =
              f.id === "qvct"
                ? "bg-[#57B3B7] text-white shadow-[0_10px_26px_rgba(87,179,183,0.4)]"
                : f.id === "securite"
                  ? "bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.45)]"
                  : "bg-[#061952] text-white shadow-[0_10px_26px_rgba(6,25,82,0.3)]"
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`font-poppins font-semibold text-[15px] px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
                  active ? activeClass : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        {/* Grille */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {visible.map((a, i) => {
            const acc = ACCENTS[a.category]
            return (
              <Reveal key={a.slug} delay={(i % 4) * 80}>
                <Link
                  href={a.slug}
                  className="group relative flex flex-col h-full bg-white rounded-[22px] border border-gray-200 overflow-hidden shadow-[0_4px_18px_rgba(6,25,82,0.06)] transition-all duration-300 hover:shadow-[0_18px_50px_rgba(6,25,82,0.14)] hover:-translate-y-1.5"
                >
                  {/* Filtre coloré qui balaye la carte au survol */}
                  <span
                    aria-hidden
                    className={`absolute inset-0 z-10 pointer-events-none -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out ${acc.sweep}`}
                  />
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className={`absolute top-4 left-4 inline-flex items-center font-poppins font-semibold text-xs px-3 py-1.5 rounded-full backdrop-blur ${acc.chip}`}
                    >
                      {acc.label}
                    </span>
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 font-poppins font-semibold text-xs px-3 py-1.5 rounded-full bg-white/90 text-[#061952]">
                      <Clock className="w-3.5 h-3.5" />
                      {a.duree}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <h3
                      className={`font-poppins font-semibold text-lg text-[#061952] leading-snug transition-colors duration-300 ${acc.hover}`}
                    >
                      {a.title}
                    </h3>
                    <p className="text-[15px] text-gray-600 leading-relaxed mt-2.5 flex-1">{a.description}</p>
                    <div className="flex items-center justify-between mt-5">
                      <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        {a.participants}
                      </span>
                      <span className="inline-flex items-center gap-2 font-poppins font-semibold text-[15px] text-[#061952]">
                        Découvrir
                        <span
                          className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 ${acc.arrow}`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
