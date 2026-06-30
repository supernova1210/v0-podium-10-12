import type { Metadata } from "next"
import QvctHero from "@/components/qvct/qvct-hero"
import QvctAtouts from "@/components/qvct/qvct-atouts"
import QvctProcess from "@/components/qvct/qvct-process"
import FormationsGrid from "@/components/formation/formations-grid"
import FormationFAQ from "@/components/formation/formation-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import { qvctFormations } from "@/lib/formations"

export const metadata: Metadata = {
  title: "Formation QVCT Lyon & Rhône-Alpes",
  description:
    "Podium propose des formations QVCT à Lyon et en Rhône-Alpes : prévention des TMS, RPS, bien-être au travail. Programmes sur mesure, intervention dans vos locaux. Devis gratuit sous 12h.",
  alternates: {
    canonical: "https://www.ofpodium.fr/formations-qvct",
  },
  openGraph: {
    title: "Formation QVCT Lyon & Rhône-Alpes | Podium",
    description:
      "Formations QVCT pour vos équipes à Lyon et en Rhône-Alpes. Prévention des TMS, RPS, bien-être au travail. Programmes sur mesure, intervention dans vos locaux.",
    url: "https://www.ofpodium.fr/formations-qvct",
    type: "website",
  },
}

const faqData = [
  {
    question: "Qu'est-ce qu'une formation QVCT et à qui s'adresse-t-elle ?",
    answer:
      "Une formation QVCT (Qualité de Vie et Conditions de Travail) est un dispositif structuré qui aide les entreprises à améliorer le bien-être de leurs salariés, prévenir les risques professionnels et renforcer l'engagement des équipes. Elle s'adresse aux RH, managers, référents sécurité et à tout collaborateur impliqué dans les démarches de prévention.",
  },
  {
    question: "Comment financer une formation QVCT ?",
    answer:
      "Plusieurs dispositifs permettent de financer une formation QVCT : OPCO, plan de développement des compétences de l'entreprise, CPF selon les cas. Contactez-nous pour qu'on vous oriente vers la solution la plus adaptée à votre situation.",
  },
  {
    question: "Quelle est la différence entre une formation QVCT et un atelier QVT ?",
    answer:
      "Un atelier QVT est une session courte (2 à 4 heures), ludique et participative, idéale pour sensibiliser vos équipes. Une formation QVCT est un dispositif plus approfondi, avec des objectifs pédagogiques précis, un programme structuré et un suivi des acquis.",
  },
  {
    question: "Podium propose-t-il des formations QVCT à Lyon et en Rhône-Alpes ?",
    answer:
      "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse et bien d'autres villes. Toutes nos formations se déroulent directement dans vos locaux.",
  },
  {
    question: "Quels résultats peut-on attendre d'une formation QVCT ?",
    answer:
      "Les entreprises qui déploient une démarche QVCT constatent en général une réduction de l'absentéisme, une amélioration de l'engagement des collaborateurs et une diminution des accidents du travail. Les effets dépendent du programme choisi et de l'implication de l'encadrement.",
  },
]

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Formation QVCT : Qualité de Vie et Conditions de Travail",
    description:
      "Formation sur la Qualité de Vie et Conditions de Travail. Programme sur mesure, pédagogie active, intervention en Rhône-Alpes.",
    provider: {
      "@type": "Organization",
      name: "Podium",
      url: "https://www.ofpodium.fr",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ambérieu-en-Bugey",
        addressRegion: "Ain",
        addressCountry: "FR",
      },
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      location: {
        "@type": "Place",
        name: "Dans vos locaux, Lyon et Rhône-Alpes",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
]

export default function FormationsQVCTPage() {
  return (
    <div>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <QvctHero />
      <QvctAtouts />
      <FormationsGrid
        formations={qvctFormations}
        eyebrow="Nos formations"
        title="Les formations QVCT"
        subtitle="Sept formations pour améliorer durablement la qualité de vie et les conditions de travail de vos équipes."
        accent="teal"
        categoryLabel="Formation QVCT"
      />
      <QvctProcess />
      <FormationFAQ faqData={faqData} />
      <ContactezNousSection />
    </div>
  )
}
