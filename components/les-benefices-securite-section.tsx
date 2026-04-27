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
        "Les ateliers de prévention Podium sont conçus pour sortir vos équipes de la passivité. Escape game sécurité, mises en situation, challenges collectifs : chaque format capte l'attention et crée une vraie participation.",
    },
    {
      id: "entreprise-2",
      icon: Award,
      title: "Changement des comportements",
      description:
        "Une journée sécurité efficace ne se résume pas à des diapositives. En vivant les situations, vos collaborateurs intègrent les bons réflexes de prévention des risques professionnels de façon naturelle et durable.",
    },
    {
      id: "entreprise-3",
      icon: Users,
      title: "Mémorisation durable",
      description:
        "Le cerveau retient ce qu'il a vécu. En combinant l'action, l'émotion et le collectif, nos ateliers de sensibilisation à la sécurité au travail ancrent les messages bien au-delà d'une simple formation théorique.",
    },
    {
      id: "entreprise-4",
      icon: Users,
      title: "Image employeur boostée",
      description:
        "Organiser une journée sécurité sur mesure, c'est aussi envoyer un signal fort à vos collaborateurs sur votre engagement QVCT. Un investissement visible, apprécié, et qui renforce l'attractivité de l'entreprise.",
    },
  ]

  const collaborateursBenefits = [
    {
      id: "collaborateurs-1",
      icon: Lightbulb,
      title: "Sortez des sentiers battus",
      description:
        "Nos journées sécurité n'ont rien d'une conférence classique. Escape game, mur des addictions, réveil musculaire, secourir sans panique : des formats inattendus qui marquent les esprits et donnent envie de participer.",
    },
    {
      id: "collaborateurs-2",
      icon: HandHeart,
      title: "Intervenants experts",
      description:
        "Chaque atelier est animé par un professionnel formé à la prévention des risques. Podium intervient à Lyon, Grenoble, Annecy, Chambéry, Valence et dans toute la région Rhône-Alpes, directement dans vos locaux.",
    },
    {
      id: "collaborateurs-3",
      icon: Heart,
      title: "Le sport comme levier",
      description:
        "L'activité physique favorise la prise de conscience corporelle, réduit les TMS et renforce la cohésion d'équipe. Chez Podium, le mouvement est un outil de prévention à part entière, pas un simple bonus.",
    },
    {
      id: "collaborateurs-4",
      icon: Heart,
      title: "Jeux & challenges",
      description:
        "Quiz sur les risques professionnels, épreuves en équipe, défis pratiques : la sensibilisation à la sécurité au travail devient un moment concret, vivant et ancré dans la réalité de vos équipes.",
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
