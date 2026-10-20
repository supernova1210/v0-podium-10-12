"use client"

import { useState } from "react"
import { ChevronDown, Plus } from "lucide-react"
import Image from "next/image"

const faqData = [
  {
    question: "Pourquoi organiser un événement journée sécurité ?",
    answer:
      "Organiser une journée sécurité permet de sensibiliser et d'impliquer concrètement vos équipes aux enjeux de la sécurité au travail. C'est l’occasion de renforcer la culture de prévention, de partager les bonnes pratiques, de former aux gestes qui sauvent et de créer un dialogue constructif pour un environnement de travail plus sûr.",
  },
  {
    question: "Pourquoi organiser une journée RSE ?",
    answer:
      "Une journée RSE permet de mobiliser et d'engager vos collaborateurs autour des valeurs de responsabilité sociétale de votre entreprise. Elle permet de sensibiliser aux impacts environnementaux et sociaux, de présenter vos initiatives, de favoriser l'échange et la participation, et de renforcer votre image auprès de vos parties prenantes.",
  },
  {
    question: "Y a-t-il un réel impact à ludifier une journée de travail en séminaire ?",
    answer:
      "Oui, l'impact est significatif. La ludification (utilisation d'éléments de jeu) rend l'apprentissage et la participation plus engageants, mémorables et motivants. Dans un séminaire, des formats ludiques favorisent l'interaction, la créativité, la résolution de problèmes en équipe et une meilleure assimilation des messages clés.",
  },
  {
    question: "Peut-on adapter le format en demi-journée ?",
    answer:
      "Oui, tout à fait. Nous ajustons le nombre d’ateliers et les contenus selon le temps disponible. Une demi-journée permet déjà de couvrir plusieurs thématiques (sécurité, RSE, cohésion) de façon structurée et impactante.",
  },
  {
    question: "Est-ce que je dois trouver le lieu ou est-ce que Podium s’en occupe ?",
    answer:
      "Nous intervenons en priorité dans vos locaux, ce qui simplifie la logistique et renforce l’ancrage terrain. Si vous préférez un lieu externe, nous pouvons vous orienter vers des partenaires à Lyon et en Rhône-Alpes, ou effectuer un repérage selon vos souhaits.",
  },
  {
    question: "Comment se déroule la préparation de l’événement ?",
    answer:
      "Après un premier échange sur vos objectifs et vos contraintes, Podium vous soumet un programme sur mesure avec un planning détaillé. Nous co-construisons le contenu avec vous, puis nous prenons en charge l’animation et la logistique le jour J.",
  },
  {
    question: "Combien de personnes peuvent participer à un événement ?",
    answer:
      "Pas de limite. Que vous soyez une dizaine ou plusieurs centaines de collaborateurs, nous adaptons le format, le nombre d’intervenants et l’organisation des rotations pour garantir une expérience fluide et de qualité pour chacun.",
  },
  {
    question: "Podium organise-t-il des événements à Lyon et en Rhône-Alpes ?",
    answer:
      "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse et les environs. Nous nous déplaçons dans vos locaux ou dans le lieu de votre choix.",
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
        <Image src="/images/fleche-jaune.webp" alt="Decorative arrow" fill className="object-contain" />
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
