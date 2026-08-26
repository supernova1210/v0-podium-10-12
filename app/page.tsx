import type { Metadata } from "next"
import ModernHeroSection from "../modern-hero-section"
import PourquoiPodiumSection from "../components/pourquoi-podium-section"
import AteliersImmersifsSection from "../components/ateliers-immersifs-section"
import ContextesInterventionSection from "../components/contextes-intervention-section"
import FormationsPharesSection from "../components/formations-phares-section"
import ServicesCardsSection from "../components/services-cards-section"
import VideoSection from "../components/video-section"
import GoogleReviewsSection from "../components/google-reviews-section"
import NosReferencesSection from "../components/nos-references-section"
import NousRejoindreSection from "../components/nous-rejoindre-section"
import ContactezNousSection from "../components/contactez-nous-section"
import NosPartenairesSection from "../components/nos-partenaires-section"
import HomepageFAQSection from "../components/homepage-faq-section"

export const metadata: Metadata = {
  title: {
    absolute: "Organisme de formation QVCT Lyon & Rhône-Alpes | Podium",
  },
  description:
    "Podium accompagne les entreprises de Lyon et de toute la région Rhône-Alpes avec des formations QVCT, ateliers prévention et événements ludiques. Interventions sur site, devis gratuit sous 12h.",
  alternates: {
    canonical: "https://www.ofpodium.fr",
  },
  openGraph: {
    title: "Organisme de formation QVCT Lyon & Rhône-Alpes | Podium",
    description:
      "Formations QVCT, ateliers prévention et événements sur mesure pour vos équipes. Podium intervient dans toute la région Rhône-Alpes. Devis gratuit.",
    url: "https://www.ofpodium.fr",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce que la QVCT et pourquoi est-ce important pour mon entreprise ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La QVCT (Qualité de Vie et Conditions de Travail) désigne l'ensemble des actions menées pour améliorer le bien-être des salariés, prévenir les risques professionnels et renforcer l'engagement des équipes. Pour les entreprises de Lyon et de toute la région Rhône-Alpes, investir dans la QVCT permet de réduire l'absentéisme, d'améliorer la performance collective et de fidéliser les talents.",
      },
    },
    {
      "@type": "Question",
      name: "Dans quelles villes Podium intervient-il ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Villeurbanne, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse, Saint-Étienne, Villefranche-sur-Saône et bien d'autres villes. Nous nous déplaçons directement dans vos locaux pour toutes nos formations, ateliers et événements.",
      },
    },
    {
      "@type": "Question",
      name: "Les formations Podium sont-elles certifiées Qualiopi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Podium est actuellement en cours de labellisation Qualiopi. En attendant, nous travaillons avec des partenaires certifiés et vous accompagnons dans vos démarches de financement de la formation professionnelle.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre un atelier QVT et une formation QVCT ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un atelier QVT est une session courte (2 à 4 heures), ludique et participative, idéale pour sensibiliser vos équipes sur des thèmes comme la prévention des TMS, la gestion du stress ou le bien-être au travail. Une formation QVCT est un dispositif plus structuré (1 à plusieurs jours), avec des objectifs pédagogiques précis, un programme certifiant et un suivi des acquis.",
      },
    },
    {
      "@type": "Question",
      name: "Comment obtenir un devis pour une intervention de Podium ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contactez-nous via notre formulaire en ligne ou par téléphone au 07 70 00 36 72. Nous vous répondons sous 12h et construisons avec vous un programme sur mesure adapté à vos besoins, à la taille de vos équipes et à votre budget.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on financer les formations Podium avec l'OPCO ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le financement via votre OPCO (Opérateur de Compétences) est possible selon les dispositifs. Nous vous accompagnons dans les démarches administratives pour faciliter la prise en charge de vos formations QVCT.",
      },
    },
  ],
}

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ModernHeroSection />
      <PourquoiPodiumSection />
      <AteliersImmersifsSection />
      <ContextesInterventionSection />
      <FormationsPharesSection />
      <ServicesCardsSection />
      <VideoSection
        eyebrow="En images"
        title="Comment se passe une formation avec Podium ?"
        subtitle="Plongez dans une séance de réveil musculaire animée par nos formateurs : du mouvement, du jeu et de l'énergie collective."
        src="/videos/formation-reveil-musculaire-podium.mp4"
        poster="/images/video-poster-reveil-musculaire.jpg"
        videoTitle="Le réveil musculaire en action"
        description="Découvrez en vidéo comment se déroule une formation Podium en entreprise : une séance de réveil musculaire ludique et participative pour prévenir les TMS."
        duration="1 min 25"
        isoDuration="PT1M25S"
      />
      <GoogleReviewsSection />
      <NosReferencesSection />
      <NousRejoindreSection />
      <HomepageFAQSection />
      <ContactezNousSection />
      <NosPartenairesSection />
    </div>
  )
}
