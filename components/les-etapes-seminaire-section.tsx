"use client"

import { PodiumButton } from "@/components/ui/podium-button"
import { MessageCircle, Lightbulb, CheckCircle } from "lucide-react"

export default function LesEtapesSeminaireSection() {
  const etapes = [
    {
      number: "1",
      title: "Préparation",
      subtitle: "On ne laisse rien au hasard.",
      description:
        "Avant même le début de la journée, tout est en place : la salle est installée, le matériel prêt, l’ambiance posée. L’accueil des participants se fait dans la bonne humeur, avec un mot, un café, un sourire.",
      icon: MessageCircle,
      color: "bg-[#061952]",
    },
    {
      number: "2",
      title: "Animation de réunion",
      subtitle: "Pour que la 1ère impression soit la bonne.",
      description:
        "Dès les premiers instants, l’énergie de groupe s’installe. Icebreakers, outils collaboratifs et posture d’animation bienveillante : les participants se sentent impliqués et prêts à contribuer activement.",
      icon: Lightbulb,
      color: "bg-gradient-to-r from-[#F4C430] to-[#FFD700]",
    },
    {
      number: "3",
      title: "Atelier et sensibilisation",
      subtitle: "On fait de ce moment un temps fort.",
      description:
        "Les ateliers ludiques et participatifs permettent d’ancrer les messages autrement. Chaque activité favorise la cohésion, la réflexion collective et la prise de conscience sur des thématiques ciblées.",
      icon: CheckCircle,
      color: "bg-[#061952]",
    },
    {
      number: "4",
      title: "Clôture de la journée",
      subtitle: "On débrief, ensemble.",
      description:
        "Un temps d’échange pour valoriser les apprentissages, partager les ressentis et identifier les pistes d’action pour la suite.",
      icon: MessageCircle,
      color: "bg-gradient-to-r from-[#F4C430] to-[#FFD700]",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#061952] mb-6 text-balance">Une journée type</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-pretty">
            Notre programme en 4 étapes pour vous accompagner lors de votre journée de travail.
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
            Organiser votre journée séminaire
          </PodiumButton>
        </div>
      </div>
    </section>
  )
}
