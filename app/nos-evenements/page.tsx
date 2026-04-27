import type { Metadata } from "next"
import EvenementsHeroSection from "@/components/evenements-hero-section"
import EvenementsCardsSection from "@/components/evenements-cards-section"
import EvenementsDetailsSection from "@/components/evenements-details-section"
import PourquoiConfianceSection from "@/components/pourquoi-confiance-section"
import EvenementsFaqSection from "@/components/evenements-faq-section"
import ContactezNousSection from "@/components/contactez-nous-section"

export const metadata: Metadata = {
  title: "Journée Sécurité, RSE et Séminaire Lyon & Rhône-Alpes",
  description:
    "Podium organise vos journées sécurité, journées RSE et séminaires d'entreprise à Lyon et en Rhône-Alpes. Ateliers sur mesure, formats modulables, intervention dans vos locaux. Devis gratuit.",
  alternates: {
    canonical: "https://www.ofpodium.fr/nos-evenements",
  },
  openGraph: {
    title: "Journée Sécurité, RSE et Séminaire Lyon & Rhône-Alpes | Podium",
    description:
      "Journées sécurité, RSE et séminaires d'entreprise sur mesure à Lyon et en Rhône-Alpes. Ateliers interactifs, formats modulables.",
    url: "https://www.ofpodium.fr/nos-evenements",
    type: "website",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Pourquoi organiser une journée sécurité en entreprise ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Organiser une journée sécurité permet de sensibiliser et d'impliquer concrètement vos équipes aux enjeux de la sécurité au travail. C'est l'occasion de renforcer la culture de prévention, de partager les bonnes pratiques, de former aux gestes qui sauvent et de créer un dialogue constructif pour un environnement de travail plus sûr.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi organiser une journée RSE ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une journée RSE permet de mobiliser et d'engager vos collaborateurs autour des valeurs de responsabilité sociétale de votre entreprise. Elle permet de sensibiliser aux impacts environnementaux et sociaux, de présenter vos initiatives, de favoriser l'échange et la participation, et de renforcer votre image auprès de vos parties prenantes.",
      },
    },
    {
      "@type": "Question",
      name: "Y a-t-il un réel impact à ludifier une journée de travail en séminaire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, l'impact est significatif. La ludification rend l'apprentissage et la participation plus engageants, mémorables et motivants. Dans un séminaire, des formats ludiques favorisent l'interaction, la créativité, la résolution de problèmes en équipe et une meilleure assimilation des messages clés.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on adapter le format en demi-journée ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui sans aucun problème. Il faudra s'adapter sur les contenus et le nombre d'ateliers, mais c'est tout à fait réalisable.",
      },
    },
    {
      "@type": "Question",
      name: "Podium organise-t-il des événements à Lyon et en Rhône-Alpes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse et les environs. Nous nous déplaçons dans vos locaux ou dans le lieu de votre choix.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de personnes peuvent participer à un événement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pas de limite ! Nous nous adaptons et nous organisons en fonction du nombre de participants, que ce soit une petite équipe ou plusieurs centaines de collaborateurs.",
      },
    },
  ],
}

export default function NosEvenementsPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EvenementsHeroSection />
      <EvenementsCardsSection />
      <EvenementsDetailsSection />
      <PourquoiConfianceSection />
      <EvenementsFaqSection />
      <ContactezNousSection />
    </main>
  )
}
