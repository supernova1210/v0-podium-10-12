"use client"

import { useState } from "react"
import { ChevronDown, Plus } from "lucide-react"

const faqData = [
  {
    question: "Qu'est-ce que la QVCT ?",
    answer:
      "La Qualité de Vie et des Conditions de Travail (QVCT) englobe l'ensemble des actions qui permettent de concilier l'amélioration des conditions de travail pour les salariés et la performance globale des entreprises.",
  },
  {
    question: "Quels sont les bénéfices d'une démarche QVCT ?",
    answer:
      "Une démarche QVCT permet de réduire l'absentéisme, d'améliorer l'engagement des collaborateurs, de diminuer les risques professionnels et d'augmenter la productivité tout en favorisant le bien-être au travail.",
  },
  {
    question: "Comment mettre en place une démarche QVCT ?",
    answer:
      "La mise en place d'une démarche QVCT nécessite un diagnostic initial, l'implication de tous les acteurs de l'entreprise, la définition d'un plan d'action et un suivi régulier des mesures mises en place.",
  },
]

export default function FormationsQvctFAQ() {
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
