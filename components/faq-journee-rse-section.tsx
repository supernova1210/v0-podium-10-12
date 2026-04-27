"use client"

import { useState } from "react"
import { ChevronDown, Plus } from "lucide-react"
import Image from "next/image"

const faqData = [
  {
    question: "Qu'est-ce qu'une journée RSE en entreprise ?",
    answer:
      "Une journée RSE est un événement organisé dans vos locaux pour sensibiliser et mobiliser vos collaborateurs autour des enjeux de responsabilité sociétale. Elle combine ateliers interactifs, mises en situation et formats participatifs pour ancrer une culture RSE concrète et partagée.",
  },
  {
    question: "Quels ateliers peut-on intégrer à la journée RSE ?",
    answer:
      "Podium propose une large sélection d'ateliers RSE : fresque du climat, mur des addictions, sensibilisation au handicap, tri des déchets, mobilité douce, bien-être et santé au travail, diversité et inclusion. Nous construisons le programme selon vos engagements et votre secteur d'activité.",
  },
  {
    question: "La journée RSE peut-elle se tenir en demi-journée ?",
    answer:
      "Oui, tout à fait. Nous adaptons le nombre d'ateliers et le contenu selon le temps disponible. Une demi-journée permet déjà d'aborder plusieurs thématiques RSE de façon structurée et impactante.",
  },
  {
    question: "Combien de collaborateurs peuvent participer à la journée RSE ?",
    answer:
      "Pas de limite. Que vous réunissiez une petite équipe ou plusieurs centaines de collaborateurs, nous organisons des rotations pour que chacun puisse participer dans les meilleures conditions.",
  },
  {
    question: "Podium organise-t-il des journées RSE à Lyon et en Rhône-Alpes ?",
    answer:
      "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse et les environs. Nous venons directement dans vos locaux avec tout le matériel nécessaire.",
  },
  {
    question: "Comment organiser une journée RSE avec Podium ?",
    answer:
      "Contactez-nous via notre formulaire ou au 07 70 00 36 72. Nous échangeons sur vos objectifs, vos engagements RSE et vos contraintes, puis nous vous proposons un programme sur mesure. Devis gratuit sous 12h.",
  },
]

export default function FaqJourneeRseSection() {
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
