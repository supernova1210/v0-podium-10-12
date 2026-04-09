"use client"

import { useState } from "react"
import { ChevronDown, Plus } from "lucide-react"

const faqData = [
  {
    question: "Qu'est-ce que la formation technique d'animation ?",
    answer:
      "La formation technique d'animation est conçue pour donner vie à vos réunions et capter l'attention de vos participants. Elle vous apprend à créer du lien et à garder le cap jusqu'aux résultats en utilisant des techniques d'animation dynamiques et engageantes.",
  },
  {
    question: "Combien de participants peuvent suivre cette formation ?",
    answer:
      "Cette formation accueille de 2 à 10 participants maximum, ce qui permet un accompagnement personnalisé et des mises en situation pratiques pour chaque participant.",
  },
  {
    question: "Quelle est la durée de la formation ?",
    answer:
      "La formation dure 3h30, incluant des apports théoriques et des exercices pratiques en sous-groupes pour expérimenter les techniques d'animation.",
  },
  {
    question: "Quelles sont les méthodes pédagogiques utilisées ?",
    answer:
      "Nous utilisons des méthodes actives et participatives : une formation dynamique où chaque participant repart avec une véritable boîte à outils adaptée à ses objectifs.",
  },
  {
    question: "Y a-t-il un suivi après la formation ?",
    answer:
      "Oui, un plan d'action est remis aux participants. De plus, 1h30 de session e-learning est proposée pour approfondir les profils DISC et mettre en place des fiches actions concrètes.",
  },
]

export default function FormationTechniqueAnimationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="scroll-mt-20 py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#061952] text-center mb-12">
            Questions fréquentes
          </h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md group"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-[#061952] pr-4 group-hover:text-yellow-500 transition-colors duration-200">
                    {faq.question}
                  </h3>

                  <div className="relative flex-shrink-0">
                    <Plus className="w-5 h-5 text-[#061952] group-hover:text-yellow-500 transition-all duration-200 opacity-0 group-hover:opacity-100 absolute inset-0" />
                    <ChevronDown
                      className={`w-5 h-5 text-[#061952] group-hover:text-yellow-500 transition-all duration-300 ${
                        openIndex === index ? "rotate-180 opacity-100" : "opacity-100 group-hover:opacity-0"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="h-px bg-gray-200 mb-4"></div>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
