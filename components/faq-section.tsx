"use client"

import { useState } from "react"
import { ChevronDown, Plus } from "lucide-react"
import Image from "next/image"

const faqData = [
  {
    question: "Qu'est-ce qu'un atelier de sensibilisation ?",
    answer:
      "Un atelier de sensibilisation est une session interactive conçue pour informer et éduquer les participants sur un sujet spécifique. Il vise à accroître la prise de conscience et à encourager la réflexion sur des questions importantes.",
  },
  {
    question: "Quels sont les bénéfices d'un atelier de sensibilisation ?",
    answer:
      "Les ateliers de sensibilisation offrent de nombreux avantages, notamment une meilleure compréhension des enjeux, le développement de l'empathie, l'acquisition de nouvelles perspectives et la promotion de changements positifs dans les comportements et les attitudes.",
  },
  {
    question: "Comment choisir le bon atelier de sensibilisation ?",
    answer:
      "Pour choisir le bon atelier de sensibilisation, identifiez d'abord les besoins spécifiques de votre organisation ou de votre équipe. Recherchez des ateliers qui abordent ces besoins, qui sont animés par des experts qualifiés et qui utilisent des méthodes d'apprentissage interactives et engageantes.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
        <Image src="/images/fleche-jaune.png" alt="Decorative arrow" fill className="object-contain" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
