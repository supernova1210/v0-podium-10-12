import type { Metadata } from "next"
import AteliersHubHero from "@/components/atelier/ateliers-hub-hero"
import AteliersGrid from "@/components/atelier/ateliers-grid"
import AteliersFocus from "@/components/atelier/ateliers-focus"
import AteliersJeuCoeur from "@/components/atelier/ateliers-jeu-coeur"
import AteliersProcess from "@/components/atelier/ateliers-process"
import FormationFAQ from "@/components/formation/formation-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"

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

const faqData = [
  {
    question: "Qu'est-ce qu'un atelier QVT en entreprise ?",
    answer:
      "Un atelier QVT (Qualité de Vie au Travail) est une session courte, ludique et participative, animée directement dans vos locaux. Il vise à sensibiliser vos collaborateurs sur des thèmes comme la prévention des TMS, la gestion du stress, les gestes et postures ou le bien-être au travail. Podium propose des formats de 15 à 45 minutes, adaptés à tous les profils et tous les secteurs.",
  },
  {
    question: "Quels ateliers QVT Podium propose-t-il ?",
    answer:
      "Podium propose 19 ateliers : escape game sécurité, réveil musculaire, gestes et postures, théâtre d'improvisation santé mentale, prévention des addictions, yoga bulle d'oxygène, quiz sur-mesure et bien d'autres. Chaque atelier est conçu pour allier apprentissage concret et expérience mémorable.",
  },
  {
    question: "Combien de participants peuvent participer à un atelier QVT ?",
    answer:
      "Nos ateliers sont accessibles à partir de 4 participants et s'adaptent à toutes les tailles de groupe. Pour les événements plus larges (journées sécurité, séminaires), nous intervenons auprès de plusieurs centaines de collaborateurs en organisant des rotations.",
  },
  {
    question: "Podium intervient-il à Lyon et en Rhône-Alpes ?",
    answer:
      "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Villeurbanne, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse, Saint-Étienne et bien d'autres villes. Nos animateurs se déplacent directement dans vos locaux.",
  },
  {
    question: "Quelle est la durée d'un atelier QVT ?",
    answer:
      "La plupart de nos ateliers durent de 15 à 45 minutes par session, ce qui permet de faire tourner plusieurs groupes dans la journée. Certains formats, comme le théâtre d'impro santé mentale, durent 1h à 2h. Nous construisons le programme selon vos contraintes organisationnelles.",
  },
  {
    question: "Comment réserver un atelier QVT pour mon entreprise ?",
    answer:
      "Contactez-nous via notre formulaire en ligne ou au 07 70 00 36 72. Nous vous répondons sous 12h avec une proposition adaptée à vos besoins, votre secteur et votre budget. Devis gratuit et sans engagement.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

export default function NosAteliersPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AteliersHubHero />
      <AteliersGrid />
      <AteliersFocus />
      <AteliersJeuCoeur />
      <AteliersProcess />
      <FormationFAQ faqData={faqData} />
      <ContactezNousSection />
    </main>
  )
}
