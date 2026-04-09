import JourneeSeminaireHeroSection from "@/components/journee-seminaire-hero-section"
import JourneeSeminairePourquoiPodium from "@/components/journee-seminaire-pourquoi-podium"
import LesEtapesSeminaireSection from "@/components/les-etapes-seminaire-section"
import NosAteliersSeminaireSection from "@/components/nos-ateliers-seminaire-section"
import FaqSeminaireSection from "@/components/faq-seminaire-section"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import JourneeSeminaireLocalNavigation from "@/components/journee-seminaire-local-navigation"

export default function JourneeSeminairePage() {
  return (
    <main className="min-h-screen">
      <JourneeSeminaireLocalNavigation />

      <div id="journee-seminaire" className="scroll-mt-32">
        <JourneeSeminaireHeroSection />
      </div>
      <div id="format" className="scroll-mt-32">
        <JourneeSeminairePourquoiPodium />
      </div>
      <div id="etapes" className="scroll-mt-32">
        <LesEtapesSeminaireSection />
      </div>
      <div id="ateliers-seminaire" className="scroll-mt-32">
        <NosAteliersSeminaireSection />
      </div>
      <div id="faq" className="scroll-mt-32">
        <FaqSeminaireSection />
      </div>
      <div id="contact" className="scroll-mt-32">
        <ContactezNousSection />
      </div>
    </main>
  )
}
