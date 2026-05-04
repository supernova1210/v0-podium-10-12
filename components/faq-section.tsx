"use client"

import { useState } from "react"
import { ChevronDown, Plus } from "lucide-react"
import Image from "next/image"

const faqData = [
  {
    question: "Qu'est-ce qu'un atelier QVT en entreprise ?",
    answer:
      "Un atelier QVT (Qualité de Vie au Travail) est une session courte, ludique et participative, animée directement dans vos locaux. Il vise à sensibiliser vos collaborateurs sur des thèmes comme la prévention des TMS, la gestion du stress, les gestes et postures ou le bien-être au travail. Podium propose des formats sur mesure à partir de 30 minutes par atelier, adaptés à tous les profils et tous les secteurs.",
  },
  {
    question: "Quels ateliers QVT Podium propose-t-il ?",
    answer:
      "Podium propose une large gamme d'ateliers : escape game sécurité, réveil musculaire, gestes et postures, théâtre d'improvisation, prévention des addictions, yoga et bulle d'oxygène, et bien d'autres. Chaque atelier est conçu pour allier apprentissage concret et expérience mémorable.",
  },
  {
    question: "Combien de participants peuvent participer à un atelier QVT ?",
    answer:
      "Nos ateliers accueillent généralement de 6 à 16 participants par groupe. Pour les événements plus larges (journées sécurité, séminaires), nous créons plusieurs groupes et proposons des formations libres avec ou sans rotation, permettant d'intervenir auprès d'un grand nombre de collaborateurs.",
  },
  {
    question: "Podium intervient-il à Lyon et en Rhône-Alpes ?",
    answer:
      "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Villeurbanne, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse, Saint-Étienne, Saint-Vulbas et bien d'autres villes. Nos formateurs se déplacent directement dans vos locaux, sans frais supplémentaires selon la zone.",
  },
  {
    question: "Quelle est la durée d'un atelier QVT ?",
    answer:
      "La durée varie selon le format choisi : à partir de 3 minutes pour une session flash jusqu'à une demi-journée (3h). Nous construisons le déroulé en fonction de vos contraintes organisationnelles et de vos objectifs.",
  },
  {
    question: "Comment réserver un atelier QVT pour mon entreprise ?",
    answer:
      "Contactez-nous via notre formulaire en ligne ou au 07 70 00 36 72. Nous vous répondons sous 12h avec une proposition adaptée à vos besoins, votre secteur et votre budget. Devis gratuit et sans engagement.",
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
