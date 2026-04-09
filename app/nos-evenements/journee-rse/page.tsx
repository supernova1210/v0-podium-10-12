import JourneeRseHeroSection from "@/components/journee-rse-hero-section"
import JourneeRseFormatSection from "@/components/journee-rse-format-section"
import NosAteliersRseSection from "@/components/nos-ateliers-rse-section"
import LesBeneficesRseSection from "@/components/les-benefices-rse-section"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import JourneeRseLocalNavigation from "@/components/journee-rse-local-navigation"

export default function JourneeRsePage() {
  return (
    <main className="min-h-screen">
      <JourneeRseLocalNavigation />

      <div id="journee-rse" className="scroll-mt-32">
        <JourneeRseHeroSection />
      </div>
      <div id="format" className="scroll-mt-32">
        <JourneeRseFormatSection />
      </div>
      <div id="ateliers-rse" className="scroll-mt-32">
        <NosAteliersRseSection />
      </div>
      <div id="benefices" className="scroll-mt-32">
        <LesBeneficesRseSection />
      </div>
      <div id="contact" className="scroll-mt-32">
        <ContactezNousSection />
      </div>
    </main>
  )
}
