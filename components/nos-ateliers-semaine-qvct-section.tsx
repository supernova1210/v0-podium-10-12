"use client"
import Link from "next/link"

const qvctWorkshops = [
  {
    id: "geste-et-posture-petanque",
    title: "Geste et Posture Pétanque",
    category: "QVCT",
    duration: "A partir de 20 min",
    participants: "A partir de 6 participants",
    extra: "En libre accès - Intérieur ou extérieur",
    image: "/images/atelier-geste-et-posture-petanque-min.jpg",
    slug: "/atelier/geste-et-posture-petanque",
  },
  {
    id: "quiz-sur-mesure",
    title: "Quiz sur mesure",
    category: "QVCT",
    duration: "A partir de 20 min",
    participants: "A partir de 6 participants",
    extra: "Thématique sur mesure - Intérieur ou extérieur",
    image: "/images/stress-management-confidence-workshop.png",
    slug: "/atelier/quiz-sur-mesure",
  },
  {
    id: "conference",
    title: "Conférence",
    category: "QVCT",
    duration: "A partir de 30 min",
    participants: "Sur inscription",
    extra: "Thématique sur mesure",
    image: "/images/conférence.webp",
    slug: "#",
  },
  {
    id: "gestion-des-emotions-sophrologie",
    title: "Gestion des émotions Sophrologie",
    category: "QVCT",
    duration: "A partir de 45 min",
    participants: "A partir de 6 participants",
    extra: "Sur inscription - Cours collectif",
    image: "/images/podium_organisme_formation_atelier_sophrologie-min.png",
    slug: "/atelier/gestion-des-emotions-sophrologie",
  },
]

export default function NosAteliersSemaineQvctSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#061952] mb-6">
            Top 4 de nos ateliers pour une semaine QVCT
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez une sélection d'ateliers spécialement adaptés à la semaine de la QVCT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qvctWorkshops.map((workshop) => (
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
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-400 text-[#061952]">
                  {workshop.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <h3 className="md:group-hover:opacity-0 md:group-hover:invisible transition-all duration-300 text-white text-xl font-bold mb-2 drop-shadow-lg">
                  {workshop.title}
                </h3>

                {/* Mobile */}
                <div className="md:hidden">
                  <p className="text-white/90 text-sm mb-1 drop-shadow">{workshop.duration}</p>
                  <p className="text-white/90 text-sm mb-1 drop-shadow">{workshop.participants}</p>
                  <p className="text-white/90 text-sm mb-3 drop-shadow">{workshop.extra}</p>
                  {workshop.slug !== "#" && (
                    <Link
                      href={workshop.slug}
                      aria-label={`Découvrir l'atelier ${workshop.title}`}
                      className="bg-[#FFD25D] text-[#061952] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 inline-flex items-center gap-2"
                    >
                      Découvrir
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>

              {/* Desktop Hover Overlay */}
              <div className="hidden md:block absolute inset-0 z-20 bg-[#FFD25D]/90 will-change-transform transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-[#061952]">
                  <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                  <p className="text-sm mb-1 opacity-80">{workshop.duration}</p>
                  <p className="text-sm mb-1 opacity-80">{workshop.participants}</p>
                  <p className="text-sm mb-4 opacity-80">{workshop.extra}</p>
                  {workshop.slug !== "#" && (
                    <Link
                      href={workshop.slug}
                      aria-label={`Découvrir l'atelier ${workshop.title}`}
                      className="bg-[#061952] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 inline-flex items-center gap-2"
                    >
                      Découvrir
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
