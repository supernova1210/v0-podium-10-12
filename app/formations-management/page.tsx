import type { Metadata } from "next"
import FormationsManagementHeroSection from "@/components/formations-management-hero-section"
import FormationsManagementApproche from "@/components/formations-management-approche"
import FormationsManagementCards from "@/components/formations-management-cards"
import FormationsManagementDeroulement from "@/components/formations-management-deroulement"
import FormationsManagementFAQ from "@/components/formations-management-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"

export const metadata: Metadata = {
  title: "Formation Management Lyon & Rhône-Alpes | Podium",
  description:
    "Podium propose des formations management à Lyon et en Rhône-Alpes : leadership, communication, animation de réunion, CNV. Programmes sur mesure, pédagogie active, intervention dans vos locaux.",
  alternates: {
    canonical: "https://www.ofpodium.fr/formations-management",
  },
  openGraph: {
    title: "Formation Management Lyon & Rhône-Alpes | Podium",
    description:
      "Formations management pour vos équipes à Lyon et en Rhône-Alpes. Leadership, communication, animation de réunion. Programmes sur mesure, intervention dans vos locaux.",
    url: "https://www.ofpodium.fr/formations-management",
    type: "website",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "À qui s'adressent les formations management de Podium ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos formations management s'adressent aux managers de proximité, chefs d'équipe, coordinateurs et toute personne amenée à animer, motiver ou structurer une équipe. Elles conviennent aussi aux entreprises souhaitant développer la posture managériale de leurs collaborateurs à potentiel.",
      },
    },
    {
      "@type": "Question",
      name: "Quels thèmes couvrent vos formations management ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Podium propose des formations sur l'animation de réunion, la communication non violente (CNV), la gestion de l'agressivité, le leadership, la confiance en soi et la posture professionnelle. Chaque programme est modulable selon les besoins et le niveau de vos équipes.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la durée d'une formation management ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La durée varie selon le programme : de la demi-journée pour un format flash à plusieurs jours pour un parcours complet. Nous construisons le calendrier en fonction de vos contraintes organisationnelles et de vos objectifs de montée en compétences.",
      },
    },
    {
      "@type": "Question",
      name: "Comment financer une formation management ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plusieurs dispositifs permettent de financer une formation management : OPCO, plan de développement des compétences, CPF selon les cas. Contactez-nous pour être orienté vers la solution la plus adaptée à votre situation et votre secteur.",
      },
    },
    {
      "@type": "Question",
      name: "Podium propose-t-il des formations management à Lyon et en Rhône-Alpes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse et les environs. Toutes nos formations se déroulent directement dans vos locaux, avec du matériel pédagogique fourni.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce qui différencie les formations Podium des formations classiques ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chez Podium, la pédagogie active remplace les cours magistraux. Jeux de rôle, mises en situation, outils ludiques et formateurs terrain : chaque formation est conçue pour que les participants repartent avec des compétences directement applicables, pas des notes dans un classeur.",
      },
    },
  ],
}

export default function FormationsManagementPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FormationsManagementHeroSection />
      <FormationsManagementApproche />
      <FormationsManagementCards />
      <FormationsManagementDeroulement />
      <FormationsManagementFAQ />
      <ContactezNousSection />
    </div>
  )
}
