"use client"

import Image from "next/image"
import { PodiumButton } from "@/components/ui/podium-button"

interface EventDetail {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  href?: string
}

// Placeholder data - user will provide the actual texts
const eventDetails: EventDetail[] = [
  {
    id: "journee-securite",
    title: "Journée Sécurité",
    description:
      "La sécurité au travail, c'est sérieux, mais ça peut aussi être fun ! Une journée sécurité ludique, c'est l'occasion de sensibiliser vos collaborateurs de manière originale et mémorable. En alliant apprentissage et divertissement, vous favorisez l'engagement de tous et renforcez la culture de la sécurité au sein de votre entreprise. Grâce à des activités ludiques et interactives, les collaborateurs assimilent plus facilement les règles de sécurité et acquièrent de bons réflexes.",
    image: "/images/journee-securite-evenement-podium.jpg",
    imageAlt: "Formation sécurité en entreprise",
    href: "/nos-evenements/journee-securite",
  },
  {
    id: "journee-rse",
    title: "Journée RSE",
    description:
      "Engagez vos collaborateurs autour de valeurs fortes et donnez un sens profond à votre démarche RSE. O.F PODIUM vous propose des team buildings axés sur la prise de conscience et l'action collective. Relevez des défis concrets, sensibilisez vos équipes aux enjeux environnementaux et sociétaux !",
    image: "/interactive-workshop-with-team-collaboration.png",
    imageAlt: "Atelier RSE collaboratif",
    href: "/nos-evenements/journee-rse",
  },
  {
    id: "semaine-qvt",
    title: "Semaine QVT",
    description:
      "Cette semaine est l'occasion de créer des moments forts et impactants pour les salariés. La durée de cet événement permet de varier et d'innover dans les choix des activités tout en gardant un fil conducteur. C'est également l'opportunité de transmettre les valeurs et les engagements de l'entreprise à partir de la mise en place d'ateliers traitants les mêmes sujets.",
    image: "/images/seminaire-podium-1.jpg",
    imageAlt: "Semaine qualité de vie au travail",
  },
  {
    id: "journee-seminaire",
    title: "Journée séminaire",
    description:
      "Dites adieu aux séminaires monotones ! O.F PODIUM réinvente vos journées de travail collectif en y injectant une dose de fun et de ludique. Dans un cadre stimulant et participatif, favorisez l'échange, la créativité et l'émergence d'idées nouvelles. Ensemble, transformant chaque session de travail en une expérience enrichissante et mémorable.",
    image: "/images/seminaire-podium-2.jpg",
    imageAlt: "Journée séminaire d'entreprise",
    href: "/nos-evenements/journee-seminaire",
  },
]

export default function EvenementsDetailsSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFD25D]/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-[#061952]/5 rounded-full blur-lg"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#FFD25D]/8 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#061952]/8 rounded-full blur-lg"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#061952] mb-6">
            Découvrez nos événements en{" "}
            <span className="relative">
              détail
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFD25D] rounded-full opacity-60 group-hover:opacity-100 group-hover:w-2 group-hover:h-20 transition-all duration-300"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Chaque événement est conçu pour répondre aux besoins spécifiques de votre entreprise
          </p>
        </div>

        <div className="space-y-16">
          {eventDetails.map((event, index) => (
            <div key={event.id} className="group relative">
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-[#FFD25D]/20 transition-all duration-500 overflow-hidden border border-gray-100/50 hover:scale-[1.02] hover:-translate-y-2">
                <div className={`grid gap-0 ${index % 2 === 0 ? "lg:grid-cols-[2fr_1fr]" : "lg:grid-cols-[1fr_2fr]"}`}>
                  {/* Text Content - Always takes 2/3 of space */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative">
                      <div className="absolute -left-4 top-0 w-1 h-16 bg-[#FFD25D] rounded-r-full opacity-60 group-hover:opacity-100 group-hover:w-2 group-hover:h-20 transition-all duration-300"></div>

                      <h3 className="text-3xl md:text-4xl font-bold text-[#061952] mb-6 relative">
                        {event.title}
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#FFD25D] rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
                      </h3>

                      <p className="text-lg text-gray-600 leading-relaxed mb-8">{event.description}</p>

                      <div className="inline-block">
                        {event.href && (
                          <PodiumButton
                            variant="primary"
                            size="default"
                            className="group-hover:scale-105 transition-transform duration-300"
                            showArrow={true}
                            href={event.href}
                          >
                            En savoir plus
                          </PodiumButton>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Image - Always takes 1/3 of space */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Gradient overlay for sophistication */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Decorative corner elements */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-[#FFD25D] rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
                      <div className="absolute bottom-4 left-4 w-3 h-3 bg-white/80 rounded-full opacity-40 group-hover:opacity-80 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD25D]/0 via-[#FFD25D]/5 to-[#061952]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD25D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
