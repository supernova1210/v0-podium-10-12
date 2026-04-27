import type { Metadata } from "next"
import JourneeSecuriteHeroSection from "@/components/journee-securite-hero-section"
import JourneeSecuritePourquoiPodium from "@/components/journee-securite-pourquoi-podium"
import LesEtapesSecuriteSection from "@/components/les-etapes-securite-section"
import NosAteliersSecuriteSection from "@/components/nos-ateliers-securite-section"
import LesBeneficesSecuriteSection from "@/components/les-benefices-securite-section"
import FaqJourneeSecuriteSection from "@/components/faq-journee-securite-section"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import JourneeSecuriteLocalNavigation from "@/components/journee-securite-local-navigation"

export const metadata: Metadata = {
  title: "Journée Sécurité entreprise Lyon & Rhône-Alpes",
  description:
    "Podium organise votre journée sécurité en entreprise à Lyon et en Rhône-Alpes. Ateliers de prévention sur mesure, sensibilisation ludique, intervention dans vos locaux. Devis gratuit.",
  alternates: {
    canonical: "https://www.ofpodium.fr/nos-evenements/journee-securite",
  },
  openGraph: {
    title: "Journée Sécurité entreprise Lyon & Rhône-Alpes | Podium",
    description:
      "Journée sécurité sur mesure pour vos équipes à Lyon et en Rhône-Alpes. Ateliers de prévention interactifs, intervention dans vos locaux.",
    url: "https://www.ofpodium.fr/nos-evenements/journee-securite",
    type: "website",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'une journée sécurité en entreprise ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une journée sécurité est un événement organisé dans vos locaux pour sensibiliser vos équipes aux enjeux de la prévention et de la sécurité au travail. Elle réunit ateliers pratiques, mises en situation et formats ludiques pour ancrer durablement les bons réflexes.",
      },
    },
    {
      "@type": "Question",
      name: "Quels ateliers de prévention peut-on intégrer à une journée sécurité ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Podium propose une large sélection d'ateliers : escape game sécurité, gestes et postures, mur des addictions, secourir sans panique, sensibilisation au handicap, réveil musculaire et bien d'autres. Nous construisons le programme selon vos priorités.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on adapter le format en demi-journée ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, tout à fait. Nous ajustons le nombre d'ateliers et le contenu selon le temps disponible. Une demi-journée permet déjà de couvrir plusieurs thématiques de prévention de façon efficace.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de participants peuvent prendre part à la journée sécurité ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pas de limite. Que vous soyez une petite équipe ou plusieurs centaines de collaborateurs, nous organisons des rotations pour que tout le monde participe dans les meilleures conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Podium organise-t-il des journées sécurité à Lyon et en Rhône-Alpes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse et les environs. Nous venons directement dans vos locaux avec tout le matériel nécessaire.",
      },
    },
    {
      "@type": "Question",
      name: "Comment organiser une journée sécurité avec Podium ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contactez-nous via notre formulaire ou au 07 70 00 36 72. Nous échangeons sur vos objectifs, vos équipes et vos contraintes, puis nous vous proposons un programme sur mesure. Devis gratuit sous 12h.",
      },
    },
  ],
}

export default function JourneeSecuritePage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <JourneeSecuriteLocalNavigation />
      <div id="journee-securite" className="scroll-mt-32">
        <JourneeSecuriteHeroSection />
      </div>
      <div id="format" className="scroll-mt-32">
        <JourneeSecuritePourquoiPodium />
      </div>
      <div id="etapes" className="scroll-mt-32">
        <LesEtapesSecuriteSection />
      </div>
      <div id="ateliers-securite" className="scroll-mt-32">
        <NosAteliersSecuriteSection />
      </div>
      <div id="benefices" className="scroll-mt-32">
        <LesBeneficesSecuriteSection />
      </div>
      <div id="faq" className="scroll-mt-32">
        <FaqJourneeSecuriteSection />
      </div>
      <div id="contact" className="scroll-mt-32">
        <ContactezNousSection />
      </div>
    </main>
  )
}
