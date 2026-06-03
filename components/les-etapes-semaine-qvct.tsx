"use client"

import { PodiumButton } from "@/components/ui/podium-button"
import { MessageCircle, Lightbulb, CheckCircle } from "lucide-react"

export default function LesEtapesSemaineQvct() {
  const etapes = [
    {
      number: "1",
      title: "Brief client",
      subtitle: "On part de votre réalité terrain.",
      description:
        "Nous échangeons avec vous sur vos objectifs, votre organisation, vos métiers, vos contraintes horaires, vos risques prioritaires et les attentes de vos équipes. Cette étape nous permet d'identifier les thématiques les plus pertinentes : TMS, stress, sommeil, nutrition, communication, cohésion, management ou bien-être au travail.",
      icon: MessageCircle,
      color: "bg-[#061952]",
    },
    {
      number: "2",
      title: "Conception du programme",
      subtitle: "On construit une semaine cohérente, pas une simple addition d'ateliers.",
      description:
        "Nous imaginons un fil conducteur sur plusieurs jours, avec une progression claire et des formats adaptés : ateliers courts, temps forts collectifs, animations en petits groupes, interventions sur poste, challenges ou temps d'échanges. Chaque contenu est ajusté à votre environnement de travail.",
      icon: Lightbulb,
      color: "bg-gradient-to-r from-[#F4C430] to-[#FFD700]",
    },
    {
      number: "3",
      title: "Animation et bilan",
      subtitle: "Le jour J, vos équipes participent. Nous animons, coordonnons et ajustons.",
      description:
        "Nos intervenants animent les ateliers avec une pédagogie active, ludique et accessible. A la fin de la semaine QVCT, nous pouvons réaliser un temps de bilan pour identifier les retours des participants, les points forts et les pistes d'amélioration à poursuivre dans le temps.",
      icon: CheckCircle,
      color: "bg-[#061952]",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#061952] mb-6 text-balance">Les étapes</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-pretty">
            Notre processus en trois étapes pour organiser votre semaine QVCT sur mesure.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full top-0"></div>

            <div className="space-y-4 lg:space-y-6">
              {etapes.map((etape, index) => (
                <div
                  key={etape.number}
                  className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`w-full lg:w-6/12 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
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
                            Etape {etape.number} - {etape.title}
                          </h3>
                          <p className="text-lg font-semibold text-[#F4C430]">{etape.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-pretty">{etape.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="hidden lg:block w-4/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <PodiumButton href="/contact" variant="primary" className="text-lg px-8 py-4">
            Organiser votre semaine QVCT
          </PodiumButton>
        </div>
      </div>
    </section>
  )
}
