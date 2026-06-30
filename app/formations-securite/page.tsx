import type { Metadata } from "next"
import SecuriteHero from "@/components/securite/securite-hero"
import SecuriteAtouts from "@/components/securite/securite-atouts"
import SecuriteProcess from "@/components/securite/securite-process"
import FormationsGrid from "@/components/formation/formations-grid"
import FormationFAQ from "@/components/formation/formation-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import { securiteFormations } from "@/lib/formations"

export const metadata: Metadata = {
  title: "Formation Sécurité au travail Lyon & Rhône-Alpes",
  description:
    "Podium propose des formations sécurité à Lyon et en Rhône-Alpes : gestes qui sauvent, premiers secours, prévention des risques, réveil musculaire. Intervention dans vos locaux, devis gratuit sous 12h.",
  alternates: {
    canonical: "https://www.ofpodium.fr/formations-securite",
  },
  openGraph: {
    title: "Formation Sécurité au travail Lyon & Rhône-Alpes | Podium",
    description:
      "Formations sécurité pour vos équipes à Lyon et en Rhône-Alpes : gestes qui sauvent, premiers secours, prévention des risques. Intervention dans vos locaux.",
    url: "https://www.ofpodium.fr/formations-securite",
    type: "website",
  },
}

const faqData = [
  {
    question: "À qui s'adressent les formations sécurité ?",
    answer:
      "À tous les collaborateurs concernés par la prévention : opérateurs, managers, référents sécurité, RH. La plupart de nos formations ne demandent aucun prérequis, notamment les sensibilisations comme les Gestes Qui Sauvent.",
  },
  {
    question: "Quelle différence entre la Sensibilisation aux Gestes Qui Sauvent et le Premiers Secours Citoyen ?",
    answer:
      "La Sensibilisation aux Gestes Qui Sauvent est un format court (2h) pour acquérir les réflexes essentiels. La formation Premiers Secours Citoyen est plus complète (7h) et débouche sur un certificat de compétences PSC.",
  },
  {
    question: "Comment financer une formation sécurité ?",
    answer:
      "Plusieurs dispositifs permettent de financer une formation : OPCO, plan de développement des compétences de l'entreprise, selon les cas. Contactez-nous pour qu'on vous oriente vers la solution la plus adaptée.",
  },
  {
    question: "Les formations ont-elles lieu dans nos locaux ?",
    answer:
      "Oui, toutes nos formations se déroulent directement dans vos locaux, partout en Auvergne-Rhône-Alpes : Lyon, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse et bien d'autres.",
  },
  {
    question: "Délivrez-vous une attestation ou un certificat ?",
    answer:
      "Cela dépend de la formation : attestation de participation, attestation d'initiation aux Gestes Qui Sauvent ou certificat de compétences PSC pour le Premiers Secours Citoyen.",
  },
]

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Formation Sécurité au travail",
    description:
      "Formations sécurité en entreprise : gestes qui sauvent, premiers secours, prévention des risques. Pédagogie active, intervention en Rhône-Alpes.",
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

export default function FormationsSecuritePage() {
  return (
    <div>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <SecuriteHero />
      <SecuriteAtouts />
      <FormationsGrid
        formations={securiteFormations}
        eyebrow="Nos formations"
        title="Les formations Sécurité"
        subtitle="Cinq formations pour prévenir les risques, maîtriser les gestes qui sauvent et ancrer une culture sécurité durable."
        accent="jaune"
        categoryLabel="Formation Sécurité"
      />
      <SecuriteProcess />
      <FormationFAQ faqData={faqData} />
      <ContactezNousSection />
    </div>
  )
}
