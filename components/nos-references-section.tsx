"use client"

import { useState } from "react"

const partners = [
  {
    name: "AMOS Sport Business School",
    logo: "/images/logo-amos-sport.webp",
    alt: "AMOS Sport Business School logo",
  },
  {
    name: "Ville de Villeurbanne",
    logo: "/images/logo-villeurbanne.svg",
    alt: "Ville de Villeurbanne logo",
  },
  {
    name: "Berthelet",
    logo: "/images/logo-berthelet.svg",
    alt: "Berthelet logo",
  },
  {
    name: "Log'ins Ares & GXO",
    logo: "/images/logo-logins.jpg",
    alt: "Log'ins Ares & GXO logo",
  },
  {
    name: "GSF",
    logo: "/images/logo-gsf.svg",
    alt: "GSF logo",
  },
  {
    name: "ESMP",
    logo: "/images/logo-esmp.svg",
    alt: "ESMP logo",
  },
  {
    name: "Engagés",
    logo: "/images/logo-engages.png",
    alt: "Engagés Engagements Partagés logo",
  },
  {
    name: "Proman",
    logo: "/images/logo-proman.jpg",
    alt: "Proman Intérim CDD CDI logo",
  },
  {
    name: "Piroux Groupe",
    logo: "/images/logo-piroux.png",
    alt: "Piroux Groupe logo",
  },
]

export default function NosReferencesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-200 rounded-full opacity-10 blur-sm"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-blue-900 rounded-full opacity-5 blur-sm"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-300 rounded-full opacity-8 blur-sm"></div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#061952] mb-6">Nos références</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ils nous font confiance pour accompagner leurs équipes vers l'excellence
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 ease-out border border-gray-100"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card content */}
              <div className="flex items-center justify-center h-24 relative">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.alt}
                  className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                    hoveredIndex === index ? "scale-105" : ""
                  }`}
                />
              </div>

              {/* Hover effect overlay */}
              <div
                className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                  hoveredIndex === index ? "bg-gradient-to-br from-yellow-50/30 to-blue-50/30" : ""
                }`}
              ></div>

              {/* Subtle border accent on hover */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
                  hoveredIndex === index ? "border-yellow-200" : "border-transparent"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative text */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            Et bien d'autres partenaires qui nous accompagnent dans notre mission
          </p>
        </div>
      </div>
    </section>
  )
}
