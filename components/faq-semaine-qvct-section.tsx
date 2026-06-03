"use client"

import { useState } from "react"
import { ChevronDown, Plus } from "lucide-react"
import Image from "next/image"

const faqData = [
  {
    question: "Pourquoi organiser une semaine de la QVCT en entreprise ?",
    answer:
      "Organisez une semaine de la QVCT pour sensibiliser vos collaborateurs à la qualité de vie et aux conditions de travail, renforcer la prévention et créer des temps d'échange autour de sujets concrets : TMS, stress, bien-être, cohésion, sommeil, nutrition ou communication.",
  },
  {
    question: "Quels ateliers peut-on proposer pendant une semaine QVCT ?",
    answer:
      "Vous pouvez proposer des ateliers sur la prévention des TMS, le réveil musculaire, la gestion du stress, l'hygiène de vie, la cohésion d'équipe, la communication, la santé mentale ou encore les gestes et postures. Chaque atelier peut être adapté à vos métiers et à vos contraintes terrain.",
  },
  {
    question: "Les ateliers QVCT sont-ils adaptés à tous les métiers ?",
    answer:
      "Oui. Nous adaptons vos ateliers selon vos équipes : production, logistique, bureau, management, nettoyage, accueil, terrain ou horaires décalés. L'objectif est de proposer des contenus utiles, concrets et directement liés au quotidien professionnel des participants.",
  },
  {
    question: "Combien de temps dure un atelier QVCT ?",
    answer:
      "La durée varie selon vos objectifs et votre organisation. Un atelier peut durer de 20 minutes à 1h30, en format express, en atelier tournant, en animation collective ou en parcours sur plusieurs jours pendant toute la semaine de la QVCT.",
  },
  {
    question: "Comment rendre une semaine QVCT plus engageante ?",
    answer:
      "Misez sur des formats participatifs : jeux, quiz, défis collectifs, mises en situation, échanges terrain ou sport transfert. Plus les collaborateurs vivent l'expérience, plus ils retiennent les messages et s'impliquent dans la démarche QVCT.",
  },
  {
    question: "Comment organiser une semaine QVCT avec PODIUM ?",
    answer:
      "Echangez avec PODIUM sur vos besoins, vos métiers, vos contraintes horaires et vos objectifs. Nous construisons ensuite un programme sur mesure avec des ateliers adaptés à vos équipes, puis nous animons les interventions avec une pédagogie active, ludique et orientée terrain.",
  },
  {
    question: "Où organiser une semaine QVCT avec PODIUM ?",
    answer:
      "Organisez votre semaine QVCT directement dans votre entreprise, sur vos sites de production, dans vos bureaux ou dans un lieu extérieur adapté. PODIUM intervient principalement dans l'Ain, la région lyonnaise, Bourg-en-Bresse, Ambérieu-en-Bugey, la Plaine de l'Ain, Rillieux-la-Pape et plus largement en région Auvergne-Rhône-Alpes.",
  },
]

export default function FaqSemaineQvctSection() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#061952] text-center mb-4">
            Questions fréquentes
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Tout ce que vous souhaitez savoir sur la semaine de la QVCT avec Podium.
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
