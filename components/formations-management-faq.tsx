"use client"

import { useState } from "react"
import { ChevronDown, Plus } from "lucide-react"

const faqData = [
  {
    question: "À qui s'adressent les formations management de Podium ?",
    answer:
      "Nos formations management s'adressent aux managers de proximité, chefs d'équipe, coordinateurs et toute personne amenée à animer, motiver ou structurer une équipe. Elles conviennent aussi aux entreprises souhaitant développer la posture managériale de leurs collaborateurs à potentiel.",
  },
  {
    question: "Quels thèmes couvrent vos formations management ?",
    answer:
      "Podium propose des formations sur l'animation de réunion, la communication non violente (CNV), la gestion de l'agressivité, le leadership, la confiance en soi et la posture professionnelle. Chaque programme est modulable selon les besoins et le niveau de vos équipes.",
  },
  {
    question: "Quelle est la durée d'une formation management ?",
    answer:
      "La durée varie selon le programme : de la demi-journée pour un format flash à plusieurs jours pour un parcours complet. Nous construisons le calendrier en fonction de vos contraintes organisationnelles et de vos objectifs de montée en compétences.",
  },
  {
    question: "Comment financer une formation management ?",
    answer:
      "Plusieurs dispositifs permettent de financer une formation management : OPCO, plan de développement des compétences, CPF selon les cas. Contactez-nous pour être orienté vers la solution la plus adaptée à votre situation et votre secteur.",
  },
  {
    question: "Podium propose-t-il des formations management à Lyon et en Rhône-Alpes ?",
    answer:
      "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse et les environs. Toutes nos formations se déroulent directement dans vos locaux, avec du matériel pédagogique fourni.",
  },
  {
    question: "Qu'est-ce qui différencie les formations Podium des formations classiques ?",
    answer:
      "Chez Podium, la pédagogie active remplace les cours magistraux. Jeux de rôle, mises en situation, outils ludiques et formateurs terrain : chaque formation est conçue pour que les participants repartent avec des compétences directement applicables.",
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
