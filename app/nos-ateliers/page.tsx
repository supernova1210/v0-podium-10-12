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
  title: "Nos Ateliers - Podium",
  description:
    "Découvrez nos ateliers QVT et Sécurité : gestion du stress, réveil musculaire, prévention des addictions et bien plus encore.",
}

export default function NosAteliersPage() {
  return (
    <main className="min-h-screen bg-white">
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
