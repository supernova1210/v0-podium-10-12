import JourneeSecuriteHeroSection from "@/components/journee-securite-hero-section"
import JourneeSecuritePourquoiPodium from "@/components/journee-securite-pourquoi-podium"
import LesEtapesSecuriteSection from "@/components/les-etapes-securite-section"
import NosAteliersSecuriteSection from "@/components/nos-ateliers-securite-section"
import LesBeneficesSecuriteSection from "@/components/les-benefices-securite-section"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import JourneeSecuriteLocalNavigation from "@/components/journee-securite-local-navigation"

export default function JourneeSecuritePage() {
  return (
    <main className="min-h-screen">
      <JourneeSecuriteLocalNavigation />

      <div id="journee-securite" className="scroll-mt-32">
        <JourneeSecuriteHeroSection />
      </div>
      <div id="format" className="scroll-mt-32">
        <JourneeSecuritePourquoiPodium />
      </div>
      <div id="etapes" className="scroll-mt-32">
        <LesEtapesSecuriteSection />
      </div>
      <div id="ateliers-securite" className="scroll-mt-32">
        <NosAteliersSecuriteSection />
      </div>
      <div id="benefices" className="scroll-mt-32">
        <LesBeneficesSecuriteSection />
      </div>
      <div id="contact" className="scroll-mt-32">
        <ContactezNousSection />
      </div>
    </main>
  )
}
