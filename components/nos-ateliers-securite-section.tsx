"use client"
import Link from "next/link"
import { PodiumButton } from "@/components/ui/podium-button"

const rseWorkshops = [
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
    id: "mur-des-addictions",
    title: "Le mur des addictions",
    category: "SÉCURITÉ",
    duration: "à partir de 20 min",
    participants: "À partir de 8 participants",
    image: "/images/atelier-le-mur-des-addictions-image-2.jpg",
    slug: "/atelier/le-mur-des-addictions",
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
    id: "reveil-musculaire",
    title: "Réveil musculaire ludique",
    category: "SÉCURITÉ",
    duration: "à partir de 20 min",
    participants: "À partir de 6 participants",
    image: "/images/reveil-musculaire-podium-atelier.jpg",
    slug: "/atelier/reveil-musculaire-ludique",
  },
]

export default function NosAteliersSecuriteSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#061952] mb-6">
            Top 4 de nos ateliers en journée sécurité
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez notre sélection d'ateliers spéfiquement adaptés pour une journée sécurité.
          </p>
        </div>

        {/* Workshop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rseWorkshops.map((workshop) => (
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
                    workshop.category.includes("QVT") ? "bg-yellow-400 text-[#061952]" : "bg-[#061952] text-white"
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <PodiumButton href="/nos-ateliers" variant="primary" className="text-lg px-8 py-4">
            Découvrir tous nos ateliers
          </PodiumButton>
        </div>
      </div>
    </section>
  )
}
