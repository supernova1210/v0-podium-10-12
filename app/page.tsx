import type { Metadata } from "next"
import ModernHeroSection from "../modern-hero-section"
import PourquoiPodiumSection from "../components/pourquoi-podium-section"
import AteliersImmersifsSection from "../components/ateliers-immersifs-section"
import ContextesInterventionSection from "../components/contextes-intervention-section"
import FormationsPharesSection from "../components/formations-phares-section"
import ServicesCardsSection from "../components/services-cards-section"
import GoogleReviewsSection from "../components/google-reviews-section"
import NosReferencesSection from "../components/nos-references-section"
import NousRejoindreSection from "../components/nous-rejoindre-section"
import ContactezNousSection from "../components/contactez-nous-section"
import NosPartenairesSection from "../components/nos-partenaires-section"

export const metadata: Metadata = {
  title: "Podium - Organisme de formation QVCT, Management et Sécurité",
  description:
    "Podium, votre organisme de formation spécialisé en QVCT, management et sécurité. Formations, ateliers et événements pour améliorer la qualité de vie au travail.",
}

export default function Page() {
  return (
    <div>
      <ModernHeroSection />
      <PourquoiPodiumSection />
      <AteliersImmersifsSection />
      <ContextesInterventionSection />
      <FormationsPharesSection />
      <ServicesCardsSection />
      <GoogleReviewsSection />
      <NosReferencesSection />
      <NousRejoindreSection />
      <ContactezNousSection />
      <NosPartenairesSection />
    </div>
  )
}
