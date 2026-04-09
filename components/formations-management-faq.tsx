"use client"

import { useState } from "react"
import { ChevronDown, Plus } from "lucide-react"

const faqData = [
  {
    question: "Qu'est-ce que le management ?",
    answer:
      "Le management est l'art de diriger, organiser et coordonner les activités d'une équipe ou d'une organisation pour atteindre des objectifs spécifiques. Il implique la planification, la prise de décision, la motivation des employés et l'évaluation des performances.",
  },
  {
    question: "Quels sont les bénéfices d'une formation en management ?",
    answer:
      "Une formation en management permet de développer des compétences essentielles telles que le leadership, la communication, la résolution de problèmes et la gestion d'équipe. Elle aide les managers à améliorer leur efficacité, à motiver leurs équipes et à atteindre de meilleurs résultats pour leur organisation.",
  },
  {
    question: "Comment choisir la bonne formation en management ?",
    answer:
      "Pour choisir la bonne formation en management, identifiez d'abord vos besoins spécifiques et ceux de votre organisation. Recherchez des formations qui offrent un bon équilibre entre théorie et pratique, et qui sont dispensées par des formateurs expérimentés. N'hésitez pas à demander des références et à lire les témoignages d'anciens participants.",
  },
]

export default function FormationsManagementFAQ() {
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
