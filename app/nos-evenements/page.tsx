import type { Metadata } from "next"
import EvenementsHeroSection from "@/components/evenements-hero-section"
import EvenementsCardsSection from "@/components/evenements-cards-section"
import EvenementsDetailsSection from "@/components/evenements-details-section"
import PourquoiConfianceSection from "@/components/pourquoi-confiance-section"
import EvenementsFaqSection from "@/components/evenements-faq-section"
import ContactezNousSection from "@/components/contactez-nous-section"

export const metadata: Metadata = {
  title: "Nos événements | PODIUM",
  description:
    "Événements engageants pour une cohésion maximale. Des événements interactifs conçus pour renforcer l'esprit d'équipe et développer les compétences.",
}

export default function NosEvenementsPage() {
  return (
    <main className="min-h-screen bg-white">
      <EvenementsHeroSection />
      <EvenementsCardsSection />
      <EvenementsDetailsSection />
      <PourquoiConfianceSection />
      <EvenementsFaqSection />
      <ContactezNousSection />
    </main>
  )
}
