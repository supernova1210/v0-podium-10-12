"use client"

import { useState } from "react"
import { ChevronDown, Plus } from "lucide-react"
import Image from "next/image"

const faqData = [
  {
    question: "Qu'est-ce que la QVCT et pourquoi est-ce important pour mon entreprise ?",
    answer:
      "La QVCT (Qualité de Vie et Conditions de Travail) désigne l'ensemble des actions menées pour améliorer le bien-être des salariés, prévenir les risques professionnels, dont les TMS (troubles musculo-squelettiques), et renforcer l'engagement des équipes. Pour les entreprises de Lyon et de toute la région Rhône-Alpes, investir dans la QVCT permet de réduire l'absentéisme, d'améliorer la performance collective et de fidéliser les talents.",
  },
  {
    question: "Dans quelles villes Podium intervient-il ?",
    answer:
      "Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Villeurbanne, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse, Saint-Étienne, Saint-Vulbas, Villefranche-sur-Saône et bien d'autres villes. Nous nous déplaçons directement dans vos locaux pour toutes nos formations, ateliers et événements.",
  },
  {
    question: "Les formations Podium sont-elles certifiées Qualiopi ?",
    answer:
      "Podium est actuellement en cours de labellisation Qualiopi. En attendant, nous travaillons en partenariat avec un organisme certifié qui porte nos projets de formation. Nous sommes donc en mesure de faire passer le financement de vos actions de formation via votre OPCO.",
  },
  {
    question: "Quelle est la différence entre un atelier QVT et une formation QVCT ?",
    answer:
      "Un atelier QVT est une session courte (à partir de 30 minutes), ludique et participative, idéale pour sensibiliser vos équipes sur des thèmes comme la prévention des TMS, la gestion du stress ou le bien-être au travail. Une formation QVCT est un dispositif plus structuré (1 à plusieurs jours), avec des objectifs pédagogiques précis, un programme certifiant, un suivi des acquis et une évaluation des compétences.",
  },
  {
    question: "Comment obtenir un devis pour une intervention de Podium ?",
    answer:
      "Contactez-nous via notre formulaire en ligne ou par téléphone au 07 70 00 36 72. Nous vous répondons sous 12h et construisons avec vous un programme sur mesure adapté à vos besoins, à la taille de vos équipes et à votre budget.",
  },
  {
    question: "Peut-on financer les formations Podium avec l'OPCO ?",
    answer:
      "Oui, le financement via votre OPCO (Opérateur de Compétences) est possible. Podium est en cours de labellisation Qualiopi et travaille en partenariat avec un organisme certifié qui porte les projets de formation. Nous vous accompagnons dans les démarches administratives pour faciliter la prise en charge de vos formations QVCT.",
  },
]

export default function HomepageFAQSection() {
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
          <h2 className="font-poppins font-bold tracking-tight text-3xl md:text-5xl text-[#061952] text-center mb-4">
            Questions fréquentes
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Tout ce que vous souhaitez savoir sur nos formations QVCT et nos interventions en Rhône-Alpes.
          </p>

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
