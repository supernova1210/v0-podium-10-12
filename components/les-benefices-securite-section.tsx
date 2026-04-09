"use client"

import { useState } from "react"
import { Target, Award, Users, Lightbulb, Heart, HandHeart, ChevronDown } from "lucide-react"

export default function LesBeneficesSecuriteSection() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const entrepriseBenefits = [
    {
      id: "entreprise-1",
      icon: Target,
      title: "Engagement renforcé",
      description:
        "Des formats interactifs et immersifs pour capter l'attention et faire participer activement les équipes.",
    },
    {
      id: "entreprise-2",
      icon: Award,
      title: "Changement des comportements",
      description:
        "Les participants expérimentent, prennent conscience, et adoptent les bons réflexes.",
    },
    {
      id: "entreprise-3",
      icon: Users,
      title: "Mémorisation durable",
      description:
        "Les messages sont ancrés grâce à l'expérience vécue, loin des simples rappels théoriques.",
    },
    {
      id: "entreprise-4",
      icon: Users,
      title: "Image employeur boostée",
      description:
        "Un signal fort envoyé à vos collaborateurs, partenaires et clients : vous agissez concrètement.",
    },
  ]

  const collaborateursBenefits = [
    {
      id: "collaborateurs-1",
      icon: Lightbulb,
      title: "Sortez des sentiers battus",
      description:
        "Osez des formats créatifs, inattendus et mémorables. Rien à voir avec une formation classique.",
    },
    {
      id: "collaborateurs-2",
      icon: HandHeart,
      title: "Intervenants experts",
      description:
        "Des professionnels qualifiés pour animer, transmettre et inspirer vos équipes.",
    },
    {
      id: "collaborateurs-3",
      icon: Heart,
      title: "Le sport comme levier",
      description:
        "Bouger, coopérer, ressentir : l'activité physique comme vecteur de prévention et de cohésion.",
    },
    {
      id: "collaborateurs-4",
      icon: Heart,
      title: "Jeux & challenges",
      description:
        "Des quiz, des épreuves, des mises en situation : l'apprentissage devient concret, vivant et fun.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#061952] mb-4 text-balance">
            Impacts positifs et approche novatrice
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Company Benefits */}
          <div className="space-y-8">
            {/* Company Header */}
            <div className="text-center">
              <div className="inline-block bg-[#061952] text-white px-8 py-4 rounded-full text-xl font-semibold">
                Les impacts positifs d'une Approche Novatrice
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
                Nos Approches Pédagogiques
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
