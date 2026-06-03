import type { Metadata } from "next"
import SemaineQvctHeroSection from "@/components/semaine-qvct-hero-section"
import SemaineQvctPourquoiPodium from "@/components/semaine-qvct-pourquoi-podium"
import LesEtapesSemaineQvct from "@/components/les-etapes-semaine-qvct"
import NosAteliersSemaineQvctSection from "@/components/nos-ateliers-semaine-qvct-section"
import LesBeneficesSemaineQvctSection from "@/components/les-benefices-semaine-qvct-section"
import FaqSemaineQvctSection from "@/components/faq-semaine-qvct-section"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import SemaineQvctLocalNavigation from "@/components/semaine-qvct-local-navigation"

export const metadata: Metadata = {
  title: "Semaine QVCT en entreprise Lyon & Rhône-Alpes | Podium",
  description:
    "Podium organise votre semaine QVCT sur mesure à Lyon et en région Auvergne-Rhône-Alpes. Ateliers participatifs, prévention des TMS, bien-être, cohésion d'équipe. Intervention directement dans vos locaux.",
  alternates: {
    canonical: "https://www.ofpodium.fr/nos-evenements/semaine-qvct",
  },
  openGraph: {
    title: "Semaine QVCT en entreprise Lyon & Rhône-Alpes | Podium",
    description:
      "Semaine QVCT sur mesure pour vos équipes à Lyon et en Rhône-Alpes. Ateliers participatifs, prévention des TMS, formats adaptés à vos métiers et vos contraintes.",
    url: "https://www.ofpodium.fr/nos-evenements/semaine-qvct",
    type: "website",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Pourquoi organiser une semaine de la QVCT en entreprise ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Organisez une semaine de la QVCT pour sensibiliser vos collaborateurs à la qualité de vie et aux conditions de travail, renforcer la prévention et créer des temps d'échange autour de sujets concrets : TMS, stress, bien-être, cohésion, sommeil, nutrition ou communication.",
      },
    },
    {
      "@type": "Question",
      name: "Quels ateliers peut-on proposer pendant une semaine QVCT ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous pouvez proposer des ateliers sur la prévention des TMS, le réveil musculaire, la gestion du stress, l'hygiène de vie, la cohésion d'équipe, la communication, la santé mentale ou encore les gestes et postures. Chaque atelier peut être adapté à vos métiers et à vos contraintes terrain.",
      },
    },
    {
      "@type": "Question",
      name: "Les ateliers QVCT sont-ils adaptés à tous les métiers ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous adaptons vos ateliers selon vos équipes : production, logistique, bureau, management, nettoyage, accueil, terrain ou horaires décalés. L'objectif est de proposer des contenus utiles, concrets et directement liés au quotidien professionnel des participants.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps dure un atelier QVCT ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La durée varie selon vos objectifs et votre organisation. Un atelier peut durer de 20 minutes à 1h30, en format express, en atelier tournant, en animation collective ou en parcours sur plusieurs jours pendant toute la semaine de la QVCT.",
      },
    },
    {
      "@type": "Question",
      name: "Comment organiser une semaine QVCT avec PODIUM ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Echangez avec PODIUM sur vos besoins, vos métiers, vos contraintes horaires et vos objectifs. Nous construisons ensuite un programme sur mesure avec des ateliers adaptés à vos équipes, puis nous animons les interventions avec une pédagogie active, ludique et orientée terrain.",
      },
    },
    {
      "@type": "Question",
      name: "Où organiser une semaine QVCT avec PODIUM ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PODIUM intervient principalement dans l'Ain, la région lyonnaise, Bourg-en-Bresse, Ambérieu-en-Bugey, la Plaine de l'Ain, Rillieux-la-Pape et plus largement en région Auvergne-Rhône-Alpes.",
      },
    },
  ],
}

export default function SemaineQvctPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SemaineQvctLocalNavigation />
      <div id="semaine-qvct" className="scroll-mt-32">
        <SemaineQvctHeroSection />
      </div>
      <div id="pourquoi-podium" className="scroll-mt-32">
        <SemaineQvctPourquoiPodium />
      </div>
      <div id="etapes" className="scroll-mt-32">
        <LesEtapesSemaineQvct />
      </div>
      <div id="ateliers-qvct" className="scroll-mt-32">
        <NosAteliersSemaineQvctSection />
      </div>
      <div id="benefices" className="scroll-mt-32">
        <LesBeneficesSemaineQvctSection />
      </div>
      <div id="faq" className="scroll-mt-32">
        <FaqSemaineQvctSection />
      </div>
      <div id="contact" className="scroll-mt-32">
        <ContactezNousSection />
      </div>
    </main>
  )
}
