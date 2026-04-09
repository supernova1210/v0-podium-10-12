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
import FormationVppApproche from "@/components/formation-vpp-approche"
import FormationVppProgramme from "@/components/formation-vpp-programme"
import FormationVppFAQ from "@/components/formation-vpp-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import { PodiumButton } from "@/components/ui/podium-button"

export const metadata: Metadata = {
  title: "Formation Valoriser sa posture professionnelle – Podium",
  description:
    "Affirmez votre posture et votre non-verbal pour gagner en impact, confiance et crédibilité.",
  openGraph: {
    title: "Formation Valoriser sa posture professionnelle – Podium",
    description:
      "Affirmez votre posture et votre non-verbal pour gagner en impact, confiance et crédibilité.",
    type: "website",
  },
}

export default function FormationValoriserPostureProfessionnellePage() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#061952] leading-tight break-words max-w-full">
              Formation Valoriser sa posture professionnelle
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Affirmez votre posture et votre non-verbal pour gagner en impact, confiance et crédibilité.
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
                  <div className="text-gray-600">6 à 12 personnes</div>
                </div>
              </Badge>
              <Badge icon="location">
                <div>
                  <div className="font-semibold text-[#061952]">Lieu</div>
                  <div className="text-gray-600">Formation intra-entreprise</div>
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
            src="/images/accompagnement-podium-coaching.jpg"
            alt="Formation Geste et Posture – Podium"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Notre approche */}
      <FormationVppApproche />

      {/* Programme */}
      <FormationVppProgramme />

      {/* FAQ */}
      <FormationVppFAQ />

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
