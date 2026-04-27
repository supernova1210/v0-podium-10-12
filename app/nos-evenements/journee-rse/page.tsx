import type { Metadata } from "next"
import JourneeRseHeroSection from "@/components/journee-rse-hero-section"
import JourneeRseFormatSection from "@/components/journee-rse-format-section"
import NosAteliersRseSection from "@/components/nos-ateliers-rse-section"
import LesBeneficesRseSection from "@/components/les-benefices-rse-section"
import FaqJourneeRseSection from "@/components/faq-journee-rse-section"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import JourneeRseLocalNavigation from "@/components/journee-rse-local-navigation"

export const metadata: Metadata = {
  title: "Journée RSE entreprise Lyon & Rhône-Alpes",
  description:
    "Podium organise votre journée RSE en entreprise à Lyon et en Rhône-Alpes. Ateliers collaboratifs sur mesure pour engager vos équipes dans une démarche de responsabilité sociétale.",
  alternates: {
    canonical: "https://www.ofpodium.fr/nos-evenements/journee-rse",
  },
  openGraph: {
    title: "Journée RSE entreprise Lyon & Rhône-Alpes | Podium",
    description:
      "Journée RSE sur mesure pour vos équipes à Lyon et en Rhône-Alpes. Ateliers collaboratifs, formats modulables, intervention dans vos locaux.",
    url: "https://www.ofpodium.fr/nos-evenements/journee-rse",
    type: "website",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'une journée RSE en entreprise ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une journée RSE est un événement organisé dans vos locaux pour mobiliser vos équipes autour des enjeux de responsabilité sociétale. Elle combine ateliers participatifs, mises en situation et temps d'échange pour sensibiliser vos collaborateurs aux impacts environnementaux et sociaux de l'entreprise.",
      },
    },
    {
      "@type": "Question",
      name: "Quels ateliers peut-on intégrer à une journée RSE ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Podium propose des ateliers adaptés aux thématiques RSE : sensibilisation au handicap, bien-être au travail, cohésion d'équipe, gestes éco-responsables, etc. Nous construisons le programme en fonction de vos priorités et de votre secteur d'activité.",
      },
    },
    {
      "@type": "Question",
      name: "La journée RSE est-elle adaptable en demi-journée ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, tout à fait. Nous ajustons le contenu et le nombre d'ateliers selon le temps disponible. Une demi-journée permet déjà de traiter plusieurs thématiques RSE de façon concrète et engageante.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de personnes peuvent participer à une journée RSE ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tous les formats sont possibles. Que vous soyez une petite équipe ou plusieurs centaines de collaborateurs, nous adaptons l'organisation et prévoyons des rotations pour garantir une expérience de qualité à chacun.",
      },
    },
    {
      "@type": "Question",
      name: "Podium organise-t-il des journées RSE à Lyon et en Rhône-Alpes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse et les environs. Nous venons directement dans vos locaux avec tout le matériel nécessaire.",
      },
    },
    {
      "@type": "Question",
      name: "Comment organiser une journée RSE avec Podium ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contactez-nous via notre formulaire ou au 07 70 00 36 72. Nous échangeons sur vos objectifs et vos contraintes, puis nous vous proposons un programme sur mesure. Devis gratuit sous 12h.",
      },
    },
  ],
}

export default function JourneeRsePage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <JourneeRseLocalNavigation />
      <div id="journee-rse" className="scroll-mt-32">
        <JourneeRseHeroSection />
      </div>
      <div id="format" className="scroll-mt-32">
        <JourneeRseFormatSection />
      </div>
      <div id="ateliers-rse" className="scroll-mt-32">
        <NosAteliersRseSection />
      </div>
      <div id="benefices" className="scroll-mt-32">
        <LesBeneficesRseSection />
      </div>
      <div id="faq" className="scroll-mt-32">
        <FaqJourneeRseSection />
      </div>
      <div id="contact" className="scroll-mt-32">
        <ContactezNousSection />
      </div>
    </main>
  )
}
