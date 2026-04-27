// app/components/WorkshopsDisplaySection.tsx
"use client"
import { useState } from "react"
import Link from "next/link"

const workshops = [
  {
    id: "yoga-bulle-oxygene",
    title: "Yoga bulle d'oxygène",
    category: "QVT",
    duration: "à partir de 20 min",
    participants: "À partir de 6 participants",
    image: "/images/atelier-yoga-bulle-oxygene-v2.png",
    slug: "/atelier/atelier-bulle-oxygene",
  },
  {
    id: "communication-non-violente-1",
    title: "CNV Agressivité verbale",
    category: "QVT & SÉCURITÉ",
    duration: "à partir de 20 min",
    participants: "À partir de 4 participants",
    image: "/images/atelier-communication-non-violente-CNV-min.jpg",
    slug: "/atelier/cnv-agressivite-verbale",
  },
  {
    id: "cnv-agressivite-physique",
    title: "CNV Agressivité physique",
    category: "QVT & SÉCURITÉ",
    duration: "à partir de 20 min",
    participants: "À partir de 4 participants",
    image: "/images/atelier-CNV-agressivite-physique.jpg",
    slug: "/atelier/cnv-agressivite-physique",
  },
  {
    id: "geste-posture-petanque",
    title: "Geste et posture pétanque",
    category: "SÉCURITÉ",
    duration: "à partir de 20 min",
    participants: "À partir de 6 participants",
    image: "/images/atelier-geste-et-posture-petanque-4.png",
    slug: "/atelier/geste-et-posture-petanque",
  },
  {
    id: "gestion-des-emotions-sophrologie",
    title: "Gestion des émotions Sophrologie",
    category: "QVT",
    duration: "à partir de 20 min",
    participants: "À partir de 6 participants",
    image: "/images/podium_organisme_formation_atelier_sophrologie-min.png",
    slug: "/atelier/gestion-des-emotions-sophrologie",
  },
  {
    id: "jeu-plateau-geant",
    title: "Jeu de plateau géant",
    category: "QVT & SÉCURITÉ",
    duration: "à partir de 20 min",
    participants: "À partir de 6 participants",
    image: "/images/atelier-plateau-de-jeu-geant-min.jpg",
    slug: "/atelier/jeu-de-plateau-geant",
  },
  {
    id: "mur-des-addictions",
    title: "Le mur des addictions",
    category: "SÉCURITÉ",
    duration: "à partir de 20 min",
    participants: "À partir de 8 participants",
    image: "/images/atelier-le-mur-des-addictions-image-2.jpg",
    slug: "/atelier/le-mur-des-addictions",
  },
  {
    id: "sante-mentale",
    title: "Santé mentale",
    category: "QVT",
    duration: "à partir de 20 min",
    participants: "À partir de 4 participants",
    image: "/images/stress-management-confidence-workshop.png",
    slug: "/atelier/prevention-sante-mentale",
  },
  {
    id: "quiz-sur-mesure",
    title: "Quiz sur-mesure",
    category: "QVT & SÉCURITÉ",
    duration: "à partir de 20 min",
    participants: "À partir de 6 participants",
    image: "/images/atelier-quiz-2-min.jpeg",
    slug: "/atelier/quiz-sur-mesure",
  },
  {
    id: "secourir-sans-panique",
    title: "Secourir sans panique - bobologie",
    category: "SÉCURITÉ",
    duration: "à partir de 20 min",
    participants: "À partir de 4 participants",
    image: "/images/atelier-secourir-sans-panique-bobologie.png",
    slug: "/atelier/secourir-sans-panique",
  },

  {
    id: "escape-game-securite",
    title: "Escape Game Sécurité",
    category: "SÉCURITÉ",
    duration: "60 à 75 min",
    participants: "Équipes de 4 à 6 participants",
    image: "/images/escape-game-atelier-podium.jpg",
    slug: "/atelier/escape-game-securite",
  },
  {
    id: "reveil-musculaire",
    title: "Réveil musculaire ludique",
    category: "SÉCURITÉ",
    duration: "à partir de 20 min",
    participants: "À partir de 6 participants",
    image: "/images/reveil-musculaire-podium-atelier.jpg",
    slug: "/atelier/reveil-musculaire-ludique",
  },
  {
    id: "nutrition-performance",
    title: "Nutrition et performance",
    category: "QVT",
    duration: "45 à 60 min",
    participants: "À partir de 4 participants",
    image: "/images/atelier-nutrition-performance-v2.jpg",
    slug: "/atelier/atelier-nutrition-performance",
  },
  {
    id: "sensibiliser-handicap",
    title: "Sensibiliser au handicap auditif",
    category: "SÉCURITÉ",
    duration: "à partir de 20 min",
    participants: "À partir de 6 participants",
    image: "/images/atelier-sensibilisation-handicap-auditif.png",
    slug: "/atelier/sensibiliser-au-handicap",
  },
  {
    id: "sensibiliser-au-handicap-visuel",
    title: "Sensibiliser au handicap visuel",
    category: "SÉCURITÉ",
    duration: "à partir de 20 min",
    participants: "À partir de 4 participants",
    image: "/images/atelier-sensibiliser-handicap-visuel-1.jpg",
    slug: "/atelier/sensibiliser-au-handicap-visuel",
  },
  {
    id: "cles-cohesion-equipe",
    title: "Les clés de la cohésion d'équipe",
    category: "QVT",
    duration: "à partir de 20 min",
    participants: "À partir de 4 participants",
    image: "/images/atelier-cohesion-min.jpg",
    slug: "/atelier/cles-cohesion-equipe",
  },
  {
    id: "posture-pro-defi-flash",
    title: "La posture pro - défi flash",
    category: "QVT",
    duration: "à partir de 20 min",
    participants: "À partir de 6 participants",
    image: "/images/atelier-posture-pro-defi-flash.png",
    slug: "/atelier/posture-pro-defi-flash",
  },
]

const filterCategories = [
  { id: "all", label: "Tous", color: "bg-gray-100 text-gray-700 hover:bg-gray-200" },
  { id: "QVT", label: "QVT", color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" },
  { id: "SÉCURITÉ", label: "Sécurité", color: "bg-blue-100 text-[#061952] hover:bg-blue-200" },
]

export default function WorkshopsDisplaySection() {
  const [activeFilters, setActiveFilters] = useState<string[]>(["all"])

  const toggleFilter = (filterId: string) => {
    if (filterId === "all") {
      setActiveFilters(["all"])
    } else {
      const newFilters = activeFilters.includes("all")
        ? [filterId]
        : activeFilters.includes(filterId)
          ? activeFilters.filter((f) => f !== filterId)
          : [...activeFilters, filterId]

      setActiveFilters(newFilters.length === 0 ? ["all"] : newFilters)
    }
  }

  const filteredWorkshops = workshops.filter((workshop) => {
    if (activeFilters.includes("all")) return true
    return activeFilters.some(
      (filter) =>
        workshop.category.includes(filter) ||
        (filter === "QVT" && workshop.category.includes("QVT")) ||
        (filter === "SÉCURITÉ" && workshop.category.includes("SÉCURITÉ")),
    )
  })

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#061952] mb-6">Nos ateliers QVT et Sécurité</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Format court, pédagogie active, résultats concrets. Chaque atelier s'adapte à vos équipes, votre secteur
            et vos contraintes terrain.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => toggleFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeFilters.includes(category.id) || (category.id === "all" && activeFilters.includes("all"))
                    ? category.id === "QVT"
                      ? "bg-yellow-400 text-[#061952]"
                      : category.id === "SÉCURITÉ"
                        ? "bg-[#061952] text-white"
                        : "bg-gray-800 text-white"
                    : category.color
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Workshop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredWorkshops.map((workshop) => (
            <div
              key={workshop.id}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer will-change-transform transition-all duration-200 ease-out hover:scale-[1.02] hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    workshop.category.includes("QVT") && workshop.category.includes("SÉCURITÉ")
                      ? "bg-gradient-to-r from-yellow-400 to-[#061952] text-white"
                      : workshop.category.includes("QVT")
                        ? "bg-yellow-400 text-[#061952]"
                        : "bg-[#061952] text-white"
                  }`}
                >
                  {workshop.category}
                </span>
              </div>

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <h3 className="md:group-hover:opacity-0 md:group-hover:invisible transition-all duration-300 text-white text-xl font-bold mb-2 drop-shadow-lg">
                  {workshop.title}
                </h3>

                {/* Mobile: Show details by default */}
                <div className="md:hidden">
                  <p className="text-white/90 text-sm mb-1 drop-shadow">{workshop.duration}</p>
                  <p className="text-white/90 text-sm mb-3 drop-shadow">{workshop.participants}</p>
                  <div className="inline-block">
                    <Link
                      href={workshop.slug}
                      aria-label={`Découvrir l'atelier ${workshop.title}`}
                      className="bg-[#FFD25D] text-[#061952] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center gap-2 inline-flex"
                    >
                      Découvrir
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Desktop Hover Overlay */}
              {/* ↑ Make overlay sit ABOVE content so the button is clickable */}
              <div className="hidden md:block absolute inset-0 z-20 bg-[#FFD25D]/90 will-change-transform transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-[#061952]">
                  <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                  <p className="text-sm mb-1 opacity-80">{workshop.duration}</p>
                  <p className="text-sm mb-4 opacity-80">{workshop.participants}</p>
                  <div className="inline-block">
                    <Link
                      href={workshop.slug}
                      aria-label={`Découvrir l'atelier ${workshop.title}`}
                      className="bg-[#061952] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 flex items-center gap-2 inline-flex"
                    >
                      Découvrir
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredWorkshops.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun atelier ne correspond aux filtres sélectionnés.</p>
          </div>
        )}
      </div>
    </section>
  )
}
