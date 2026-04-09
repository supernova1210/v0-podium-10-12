"use client"

import { PodiumButton } from "@/components/ui/podium-button"
import { MessageCircle, Lightbulb, CheckCircle } from "lucide-react"

export default function LesEtapesSecuriteSection() {
  const etapes = [
    {
      number: "1",
      title: "Brief client",
      subtitle: "On écoute. Vraiment.",
      description:
        "Nous échangeons en visio ou en présentiel sur vos objectifs, votre contexte et vos attentes. C'est l'étape clé pour vous proposer un événement sur-mesure et impactant.",
      icon: MessageCircle,
      color: "bg-[#061952]",
    },
    {
      number: "2",
      title: "Conception & ajustements",
      subtitle: "On pense à tout pour que tout roule.",
      description:
        "Nous concevons un programme adapté à votre entreprise, en mobilisant nos partenaires et en anticipant tous les aspects logistiques.",
      icon: Lightbulb,
      color: "bg-gradient-to-r from-[#F4C430] to-[#FFD700]",
    },
    {
      number: "3",
      title: "Journée & évaluation",
      subtitle: "Le jour J, vous profitez. On s'occupe de tout.",
      description:
        "Notre coordinateur est présent sur place pour gérer l'événement. Après la journée, nous débriefons ensemble pour mesurer l'impact.",
      icon: CheckCircle,
      color: "bg-[#061952]",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#061952] mb-6 text-balance">Les étapes</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-pretty">
            Notre processus en trois étapes pour organiser votre journée sécurité sur mesure.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full top-0"></div>

            {/* Steps */}
            <div className="space-y-4 lg:space-y-6">
              {etapes.map((etape, index) => (
                <div
                  key={etape.number}
                  className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Step Content */}
                  <div className={`w-full lg:w-6/12 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
                      {/* Step Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`w-16 h-16 ${etape.color} rounded-2xl flex items-center justify-center shadow-lg`}
                        >
                          <etape.icon
                            className={`w-8 h-8 ${etape.color.includes("gradient") ? "text-[#061952]" : "text-white"}`}
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#061952] mb-1">
                            Étape {etape.number} – {etape.title}
                          </h3>
                          <p className="text-lg font-semibold text-[#F4C430]">{etape.subtitle}</p>
                        </div>
                      </div>

                      {/* Step Description */}
                      <p className="text-gray-600 leading-relaxed text-pretty">{etape.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node - Desktop only */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block w-4/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <PodiumButton href="/contact" variant="primary" className="text-lg px-8 py-4">
            Organiser votre journée sécurité
          </PodiumButton>
        </div>
      </div>
    </section>
  )
}
