import type { Metadata } from "next"
import PourquoiPodiumAboutSection from "@/components/pourquoi-podium-about-section"
import NotrePedagogieSection from "@/components/notre-pedagogie-section"
import NosCoequipiersSection from "@/components/nos-coequipiers-section"
import NosPartenairesAboutSection from "@/components/nos-partenaires-about-section"
import NosReferencesSection from "@/components/nos-references-section"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import AboutLocalNavigation from "@/components/about-local-navigation"

export const metadata: Metadata = {
  title: "À propos - Podium",
  description:
    "Découvrez Podium, notre équipe, notre pédagogie et nos valeurs. Un organisme de formation spécialisé en QVCT, management et sécurité.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutLocalNavigation />

      <div id="pourquoi-podium" className="scroll-mt-32">
        <PourquoiPodiumAboutSection />
      </div>
      <div id="pedagogie" className="scroll-mt-32">
        <NotrePedagogieSection />
      </div>
      <div id="coequipiers" className="scroll-mt-32">
        <NosCoequipiersSection />
      </div>
      <div className="scroll-mt-32">
        <NosPartenairesAboutSection />
      </div>
      <div id="references" className="scroll-mt-32">
        <NosReferencesSection />
      </div>
      <div id="contact" className="scroll-mt-32">
        <ContactezNousSection />
      </div>
    </main>
  )
}
