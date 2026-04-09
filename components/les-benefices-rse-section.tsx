"use client"

import { useState } from "react"
import { Target, Award, Users, Lightbulb, Heart, HandHeart, ChevronDown } from "lucide-react"

export default function LesBeneficesRseSection() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const entrepriseBenefits = [
    {
      id: "entreprise-1",
      icon: Target,
      title: "Expertise et solutions RSE clés en main",
      description:
        "O.F PODIUM et l'Agence Déclic apportent leur savoir-faire et proposent des activités RSE variées et impactantes, simplifiant l'organisation pour l'entreprise et garantissant une journée réussie et alignée avec ses objectifs de développement durable.",
    },
    {
      id: "entreprise-2",
      icon: Award,
      title: "Renforcement de l'image et de la marque employeur",
      description:
        "En s'associant à des acteurs spécialisés, l'entreprise démontre un engagement RSE crédible et renforce son attractivité auprès des clients, partenaires et futurs talents.",
    },
    {
      id: "entreprise-3",
      icon: Users,
      title: "Mobilisation et engagement des équipes facilités",
      description:
        "Les animations proposées par O.F PODIUM sont conçues pour être ludiques et participatives, favorisant l'adhésion des collaborateurs et stimulant une culture d'entreprise responsable de manière engageante.",
    },
  ]

  const collaborateursBenefits = [
    {
      id: "collaborateurs-1",
      icon: Lightbulb,
      title: "Sensibilisation concrète et ludique aux enjeux RSE",
      description:
        "Les activités proposées permettent aux collaborateurs de mieux comprendre les défis environnementaux et sociaux de manière interactive et engageante.",
    },
    {
      id: "collaborateurs-2",
      icon: HandHeart,
      title: "Opportunité d'agir et de contribuer positivement",
      description:
        "Participer à une journée RSE offre aux employés la possibilité de s'impliquer concrètement dans des actions ayant un impact positif, renforçant leur sentiment d'utilité et leur fierté d'appartenance à une entreprise responsable.",
    },
    {
      id: "collaborateurs-3",
      icon: Heart,
      title: "Renforcement du lien social et de la cohésion",
      description:
        "Les activités collectives et conviviales organisées par O.F PODIUM et l'agence Déclic favorisent les échanges entre collègues, renforcent l'esprit d'équipe et contribuent à un environnement de travail plus positif.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#061952] mb-4 text-balance">
            Les bénéfices pour votre entreprise & vos collaborateurs
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Company Benefits */}
          <div className="space-y-8">
            {/* Company Header */}
            <div className="text-center">
              <div className="inline-block bg-[#061952] text-white px-8 py-4 rounded-full text-xl font-semibold">
                Les bénéfices pour votre entreprise
              </div>
            </div>

            {/* Company Benefits Accordion */}
            <div className="space-y-4">
              {entrepriseBenefits.map((benefit) => {
                const isExpanded = expandedItems.includes(benefit.id)
                return (
                  <div
                    key={benefit.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleExpanded(benefit.id)}
                      className="w-full p-6 flex items-center gap-4 text-left hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-[#061952] rounded-xl flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="flex-1 text-lg font-semibold text-[#061952] text-balance">{benefit.title}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#061952] transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed text-pretty pl-16">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Employee Benefits */}
          <div className="space-y-8">
            {/* Employee Header */}
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-[#F4C430] to-[#FFD700] text-[#061952] px-8 py-4 rounded-full text-xl font-semibold">
                Les bénéfices pour vos collaborateurs
              </div>
            </div>

            {/* Employee Benefits Accordion */}
            <div className="space-y-4">
              {collaborateursBenefits.map((benefit) => {
                const isExpanded = expandedItems.includes(benefit.id)
                return (
                  <div
                    key={benefit.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleExpanded(benefit.id)}
                      className="w-full p-6 flex items-center gap-4 text-left hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#F4C430] to-[#FFD700] rounded-xl flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-[#061952]" />
                      </div>
                      <h3 className="flex-1 text-lg font-semibold text-[#061952] text-balance">{benefit.title}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#061952] transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed text-pretty pl-16">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
