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
      "Organisez une journée sécurité en entreprise qui marque les esprits. Podium conçoit des formats ludiques et interactifs — escape game sécurité, gestes qui sauvent, mur des addictions, gestes et postures — pour ancrer durablement les réflexes de prévention des risques professionnels. Intervention sur site à Lyon et dans toute la région Rhône-Alpes, pour toutes les tailles d'équipes.",
    image: "/images/journee-securite-evenement-podium.jpg",
    imageAlt: "Journée sécurité en entreprise animée par Podium à Lyon",
    href: "/nos-evenements/journee-securite",
  },
  {
    id: "journee-rse",
    title: "Journée RSE",
    description:
      "Engagez concrètement vos équipes dans votre démarche de responsabilité sociétale. Podium et l'Agence Déclic co-construisent votre journée RSE avec des ateliers participatifs adaptés à vos enjeux : environnement, inclusion, handicap, bien-être au travail. Un format modulable, animé dans vos locaux à Lyon et en Auvergne-Rhône-Alpes.",
    image: "/images/podium-olympiade-equipe.webp",
    imageAlt: "Équipe mobilisée lors d'une journée RSE animée par Podium",
    href: "/nos-evenements/journee-rse",
  },
  {
    id: "semaine-qvct",
    title: "Semaine QVCT",
    description:
      "La semaine QVCT est l'occasion d'organiser plusieurs jours d'ateliers autour de la qualité de vie et des conditions de travail, avec un fil conducteur fort et une progression cohérente. Prévention des TMS, bien-être, cohésion, gestion du stress : chaque atelier est pensé pour répondre à vos enjeux terrain, à vos métiers et à vos contraintes d'organisation.",
    image: "/images/atelier yoga.png",
    imageAlt: "Semaine QVCT organisée par Podium à Lyon et en Rhône-Alpes",
    href: "/nos-evenements/semaine-qvct",
  },
  {
    id: "journee-seminaire",
    title: "Journée séminaire",
    description:
      "Transformez votre séminaire d'entreprise en un moment de travail collectif vivant et mémorable. Podium intervient à Lyon et en Rhône-Alpes pour co-animer vos journées de travail : ateliers de cohésion d'équipe, intelligence collective, prise de parole, formats participatifs. Moins de réunions passives, plus d'énergie et de résultats.",
    image: "/images/seminaire-podium-2.jpg",
    imageAlt: "Séminaire d'entreprise animé par Podium à Lyon et en Rhône-Alpes",
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
