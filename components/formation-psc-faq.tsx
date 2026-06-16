"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

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
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="scroll-mt-20 py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
            On répond à vos questions
          </span>
          <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-5xl mt-4">
            Questions fréquentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto grid gap-3.5">
          {faqData.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-2xl bg-white overflow-hidden transition-all duration-300 border ${
                  open ? "border-[#FFD25D] shadow-[0_4px_18px_rgba(6,25,82,0.06)]" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-poppins font-medium text-[17px] text-[#061952]">{faq.question}</span>
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      open ? "bg-[#FFD25D] rotate-180" : "bg-[#061952]/[0.06]"
                    }`}
                  >
                    <ChevronDown className="w-[18px] h-[18px] text-[#061952]" />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 pt-[18px] text-[15.5px] text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
