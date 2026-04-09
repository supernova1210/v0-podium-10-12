import type { Metadata } from "next"
import {
  WorkshopHero,
  HeroContent,
  HeroText,
  HeroImage,
  BadgesGrid,
  Badge,
  HeroButtons,
} from "@/components/workshop-hero"
import FormationManagementTechniqueAnimationApproche from "@/components/formation-management-technique-animation-approche"
import FormationTechniqueAnimationProgramme from "@/components/formation-technique-animation-programme"
import FormationTechniqueAnimationFAQ from "@/components/formation-technique-animation-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import { PodiumButton } from "@/components/ui/podium-button"

export const metadata: Metadata = {
  title: "Formation technique d'animation – Podium",
  description: "Donner vie à ses réunions pour capter l’attention, créer du lien et garder le cap jusqu’aux résultats.",
  openGraph: {
    title: "Formation technique d'animation – Podium",
    description:
      "Donner vie à ses réunions pour capter l’attention, créer du lien et garder le cap jusqu’aux résultats.",
    type: "website",
  },
}

export default function FormationArmPage() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#061952] leading-tight break-words max-w-full">
              Formation technique d'animation
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Donner vie à ses réunions pour capter l’attention, créer du lien et garder le cap jusqu’aux résultats.
            </p>

            <BadgesGrid>
              <Badge icon="clock">
                <div>
                  <div className="font-semibold text-[#061952]">Durée</div>
                  <div className="text-gray-600">3h30</div>
                </div>
              </Badge>
              <Badge icon="users">
                <div>
                  <div className="font-semibold text-[#061952]">Participants</div>
                  <div className="text-gray-600">2 à 10 personnes</div>
                </div>
              </Badge>
              <Badge icon="location">
                <div>
                  <div className="font-semibold text-[#061952]">Tarif</div>
                  <div className="text-gray-600">Sur devis</div>
                </div>
              </Badge>
            </BadgesGrid>

            <HeroButtons>
              <PodiumButton
                href="https://calendly.com/nicolas-ofpodium/30min"
                variant="primary"
                className="w-full sm:w-auto"
              >
                Prendre rendez-vous
              </PodiumButton>
              <PodiumButton variant="outline" href="/contact">
                Contact
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage
            src="/images/atelier-communication-non-violente-CNV-min.jpg"
            alt="Formation Technique Animation – Podium"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Notre approche */}
      <FormationManagementTechniqueAnimationApproche />

      {/* Programme */}
      <FormationTechniqueAnimationProgramme />

      {/* FAQ */}
      <FormationTechniqueAnimationFAQ />

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
