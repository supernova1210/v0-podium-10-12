"use client"

import { useState } from "react"
import { ChevronDown, Plus } from "lucide-react"

const faqData = [
  {
    question: "A qui s'adresse le réveil musculaire en entreprise ?",
    answer:
      "Le réveil musculaire en entreprise s'adresse à tous les collaborateurs, quels que soient leur poste ou leur condition physique, afin de favoriser le bien-être et prévenir les troubles musculo-squelettiques. Il est particulièrement adapté aux équipes exposées à des efforts physiques ou à des positions statiques prolongées.",
  },
  {
    question: "Pourquoi former un ambassadeur ?",
    answer:
      "Les ambassadeurs sont essentiels dans la réalisation et l'animation de l'éveil musculaire. Ils s'assurent que chaque salarié réalise les mouvements de manière sécuritaire et efficace, en veillant aux douleurs et capacités physiques de chacun. Former des ambassadeurs revient à responsabiliser les salariés concernant la santé et le bien-être au travail. Cette approche pérennise la démarche Qualité de Vie et des Conditions de Travail (QVCT), car les échauffements deviennent un moment privilégié pour les salariés, animé par des salariés.",
  },
  {
    question: "La mise en place du réveil musculaire nécessite-t-elle du matériel ?",
    answer:
      "Le réveil musculaire ne nécessite aucun matériel, ce qui permet une mise en place simple et rapide directement sur le lieu de travail. Cependant, il est tout à fait possible de faire évoluer les séances en intégrant des accessoires légers pour varier les exercices et intensifier les bénéfices.",
  },
]

export default function FormationArmFAQ() {
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
