"use client"

import { useState } from "react"
import { Target, Award, Users, Lightbulb, Heart, HandHeart, ChevronDown } from "lucide-react"

export default function LesBeneficesSemaineQvctSection() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const impactsBenefits = [
    {
      id: "impacts-1",
      icon: Target,
      title: "Engagement renforcé",
      description:
        "Les collaborateurs participent davantage lorsque les sujets abordés parlent de leur quotidien, de leurs contraintes et de leurs vrais enjeux de travail.",
    },
    {
      id: "impacts-2",
      icon: Award,
      title: "Prévention plus concrète",
      description:
        "Les messages sont plus efficaces quand ils sont reliés aux gestes, aux rythmes, aux postes et aux situations vécues par les équipes.",
    },
    {
      id: "impacts-3",
      icon: Users,
      title: "Cohésion durable",
      description:
        "La semaine QVCT crée des temps d'échange entre collègues, managers et équipes, dans un cadre plus ouvert, participatif et fédérateur.",
    },
    {
      id: "impacts-4",
      icon: Users,
      title: "Image employeur valorisée",
      description:
        "Organiser une semaine QVCT en entreprise montre que vous agissez concrètement pour la santé, le bien-être et les conditions de travail de vos collaborateurs.",
    },
  ]

  const pedagogieBenefits = [
    {
      id: "pedagogie-1",
      icon: Lightbulb,
      title: "Sortez du format descendant",
      description:
        "Fini les messages théoriques qui s'oublient aussitôt. Les participants vivent, testent, échangent et s'approprient les bons réflexes.",
    },
    {
      id: "pedagogie-2",
      icon: HandHeart,
      title: "Des intervenants experts et accessibles",
      description:
        "Nos intervenants apportent du contenu sérieux, tout en gardant une posture humaine, bienveillante et proche du terrain.",
    },
    {
      id: "pedagogie-3",
      icon: Heart,
      title: "Le sport comme levier d'apprentissage",
      description:
        "Bouger, coopérer, ressentir, s'adapter : le sport devient un outil puissant pour travailler les savoir-être, la prévention et le collectif.",
    },
    {
      id: "pedagogie-4",
      icon: Heart,
      title: "Des jeux et challenges pour ancrer les messages",
      description:
        "Quiz, défis, mises en situation, ateliers tournants ou formats express : la QVCT devient plus vivante, plus concrète et plus mémorable.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#061952] mb-4 text-balance">
            Impacts positifs et approche novatrice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Les bénéfices d'une semaine QVCT personnalisée
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Impacts positifs */}
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-block bg-[#061952] text-white px-8 py-4 rounded-full text-xl font-semibold">
                Les impacts positifs
              </div>
            </div>

            <div className="space-y-4">
              {impactsBenefits.map((benefit) => {
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
                        className={`w-5 h-5 text-[#061952] transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed text-pretty pl-16">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Approches pédagogiques */}
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-[#F4C430] to-[#FFD700] text-[#061952] px-8 py-4 rounded-full text-xl font-semibold">
                Nos approches pédagogiques
              </div>
            </div>

            <div className="space-y-4">
              {pedagogieBenefits.map((benefit) => {
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
                        className={`w-5 h-5 text-[#061952] transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
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
