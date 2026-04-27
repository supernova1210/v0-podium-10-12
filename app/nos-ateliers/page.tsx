import type { Metadata } from "next"
import AteliersHeroSection from "@/components/ateliers-hero-section"
import WorkshopsDisplaySection from "@/components/workshops-display-section"
import EscapeGamePresentationSection from "@/components/escape-game-presentation-section"
import TheatrePresentationSection from "@/components/theatre-presentation-section"
import ObjectifsAteliersSection from "@/components/objectifs-ateliers-section"
import JeuAuCoeurSection from "@/components/jeu-au-coeur-section"
import FAQSection from "@/components/faq-section"
import ContactezNousSection from "@/components/contactez-nous-section"

export const metadata: Metadata = {
  title: "Ateliers QVT Lyon & Rhône-Alpes — Sensibilisation & Prévention",
  description:
    "Podium propose des ateliers QVT ludiques et participatifs pour vos équipes à Lyon et en Rhône-Alpes : prévention des TMS, gestion du stress, escape game sécurité, réveil musculaire. Intervention sur site, devis gratuit.",
  alternates: {
    canonical: "https://www.ofpodium.fr/nos-ateliers",
  },
  openGraph: {
    title: "Ateliers QVT Lyon & Rhône-Alpes — Sensibilisation & Prévention | Podium",
    description:
      "Des ateliers QVT interactifs pour sensibiliser et fédérer vos équipes. Podium intervient à Lyon et dans toute la région Rhône-Alpes.",
    url: "https://www.ofpodium.fr/nos-ateliers",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un atelier QVT en entreprise ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un atelier QVT (Qualité de Vie au Travail) est une session courte, ludique et participative, animée directement dans vos locaux. Il vise à sensibiliser vos collaborateurs sur des thèmes comme la prévention des TMS, la gestion du stress, les gestes et postures ou le bien-être au travail. Podium propose des formats de 2 à 4 heures, adaptés à tous les profils et tous les secteurs.",
      },
    },
    {
      "@type": "Question",
      name: "Quels ateliers QVT Podium propose-t-il ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Podium propose une large gamme d'ateliers : escape game sécurité, réveil musculaire, gestes et postures, théâtre d'improvisation, prévention des addictions, yoga et bulle d'oxygène, et bien d'autres. Chaque atelier est conçu pour allier apprentissage concret et expérience mémorable.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de participants peuvent participer à un atelier QVT ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos ateliers sont adaptables à toutes les tailles de groupe, généralement de 8 à 30 participants. Pour les événements plus larges (journées sécurité, séminaires), nous pouvons intervenir auprès de plusieurs centaines de collaborateurs en organisant des rotations.",
      },
    },
    {
      "@type": "Question",
      name: "Podium intervient-il à Lyon et en Rhône-Alpes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Villeurbanne, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse, Saint-Étienne et bien d'autres villes. Nos formateurs se déplacent directement dans vos locaux, sans frais supplémentaires selon la zone.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la durée d'un atelier QVT ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La durée varie selon le format choisi : de 1h30 pour une session flash à une demi-journée complète (4h). Nous construisons le programme en fonction de vos contraintes organisationnelles et de vos objectifs.",
      },
    },
    {
      "@type": "Question",
      name: "Comment réserver un atelier QVT pour mon entreprise ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contactez-nous via notre formulaire en ligne ou au 07 70 00 36 72. Nous vous répondons sous 12h avec une proposition adaptée à vos besoins, votre secteur et votre budget. Devis gratuit et sans engagement.",
      },
    },
  ],
}

export default function NosAteliersPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AteliersHeroSection />
      <WorkshopsDisplaySection />
      <EscapeGamePresentationSection />
      <TheatrePresentationSection />
      {/* <ObjectifsAteliersSection /> */}
      <JeuAuCoeurSection />
      <FAQSection />
      <ContactezNousSection />
    </main>
  )
}
