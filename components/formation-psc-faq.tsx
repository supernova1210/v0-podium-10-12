"use client"

import { useState } from "react"
import { ChevronDown, Plus } from "lucide-react"

const faqData = [
  {
    question: "À qui s'adresse la formation Premiers Secours Citoyen ?",
    answer:
      "Cette formation s'adresse à toute personne souhaitant acquérir les gestes essentiels de premiers secours, sans prérequis particulier. Elle permet à chacun de savoir protéger, alerter et intervenir face à une situation d'urgence du quotidien comme en entreprise.",
  },
  {
    question: "Une attestation ou un certificat est-il délivré ?",
    answer:
      "Oui. Le certificat de compétences PSC est délivré aux personnes ayant participé à l'ensemble de la formation, ayant réalisé tous les gestes de premiers secours lors des phases d'apprentissage et participé au moins une fois en tant que sauveteur à un cas concret.",
  },
  {
    question: "Quelle est la différence avec la Sensibilisation aux Gestes Qui Sauvent ?",
    answer:
      "La Sensibilisation aux Gestes Qui Sauvent est un format court (2h) pour acquérir les réflexes essentiels. La formation Premiers Secours Citoyen est plus complète (7h) : elle approfondit la pratique à travers des études de cas et des mises en situation, et débouche sur un certificat de compétences.",
  },
  {
    question: "Combien de temps dure la formation et combien de participants ?",
    answer:
      "La formation dure 7 heures et accueille de 2 à 10 participants, pour garantir un temps de pratique suffisant à chacun.",
  },
]

export default function FormationPscFAQ() {
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
