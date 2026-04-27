import type { Metadata } from "next"
import JourneeSeminaireHeroSection from "@/components/journee-seminaire-hero-section"
import JourneeSeminairePourquoiPodium from "@/components/journee-seminaire-pourquoi-podium"
import LesEtapesSeminaireSection from "@/components/les-etapes-seminaire-section"
import NosAteliersSeminaireSection from "@/components/nos-ateliers-seminaire-section"
import FaqSeminaireSection from "@/components/faq-seminaire-section"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import JourneeSeminaireLocalNavigation from "@/components/journee-seminaire-local-navigation"

export const metadata: Metadata = {
  title: "Séminaire d'entreprise Lyon & Rhône-Alpes",
  description:
    "Podium organise votre séminaire d'entreprise à Lyon et en Rhône-Alpes. Journée participative et apprenante sur mesure : ateliers ludiques, cohésion d'équipe, formats modulables.",
  alternates: {
    canonical: "https://www.ofpodium.fr/nos-evenements/journee-seminaire",
  },
  openGraph: {
    title: "Séminaire d'entreprise Lyon & Rhône-Alpes | Podium",
    description:
      "Séminaire d'entreprise sur mesure à Lyon et en Rhône-Alpes. Journées participatives et apprenantes pour renforcer la cohésion de vos équipes.",
    url: "https://www.ofpodium.fr/nos-evenements/journee-seminaire",
    type: "website",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "La journée séminaire est-elle adaptable à notre organisation ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, totalement. Chaque journée est conçue sur mesure selon vos objectifs, vos contraintes et le format qui vous convient (demi-journée, journée complète, en intérieur ou en extérieur). Vous définissez le rythme et les temps forts.",
      },
    },
    {
      "@type": "Question",
      name: "Quels types d'ateliers peut-on intégrer à la journée séminaire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous choisissez parmi une large palette d'ateliers ludiques et participatifs : bien-être, posture, communication, cohésion, sécurité, nutrition, etc. Nous vous aidons à construire un programme cohérent et adapté à votre public.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de participants peut-on accueillir lors d'un séminaire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les formats sont flexibles. Que vous soyez une petite équipe ou un grand groupe, nous adaptons l'organisation, le matériel et le nombre d'intervenants pour garantir une expérience fluide et dynamique à chacun.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il un lieu spécifique pour organiser le séminaire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pas nécessairement. Nous intervenons aussi bien dans vos locaux que sur des sites extérieurs, salles de séminaires ou espaces atypiques. Nous pouvons également vous aider à trouver un lieu adapté.",
      },
    },
    {
      "@type": "Question",
      name: "Podium organise-t-il des séminaires d'entreprise à Lyon et en Rhône-Alpes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse et les environs. Nous nous déplaçons dans vos locaux ou dans le lieu de votre choix.",
      },
    },
  ],
}

export default function JourneeSeminairePage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <JourneeSeminaireLocalNavigation />
      <div id="journee-seminaire" className="scroll-mt-32">
        <JourneeSeminaireHeroSection />
      </div>
      <div id="format" className="scroll-mt-32">
        <JourneeSeminairePourquoiPodium />
      </div>
      <div id="etapes" className="scroll-mt-32">
        <LesEtapesSeminaireSection />
      </div>
      <div id="ateliers-seminaire" className="scroll-mt-32">
        <NosAteliersSeminaireSection />
      </div>
      <div id="faq" className="scroll-mt-32">
        <FaqSeminaireSection />
      </div>
      <div id="contact" className="scroll-mt-32">
        <ContactezNousSection />
      </div>
    </main>
  )
}
