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
import FormationArmApproche from "@/components/formation-arm-approche"
import FormationArmProgramme from "@/components/formation-arm-programme"
import FormationArmFAQ from "@/components/formation-arm-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import { PodiumButton } from "@/components/ui/podium-button"

export const metadata: Metadata = {
  title: "Formation Ambassadeur Réveil Musculaire – Podium",
  description:
    "Devenez Ambassadeur du Réveil Musculaire et changez les habitudes au travail !",
  openGraph: {
    title: "Formation Ambassadeur Réveil Musculaire – Podium",
    description:
      "Devenez Ambassadeur du Réveil Musculaire et changez les habitudes au travail !",
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
              Formation Ambassadeur Réveil Musculaire
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Devenez Ambassadeur du Réveil Musculaire et changez les habitudes au travail !
            </p>

            <BadgesGrid>
              <Badge icon="clock">
                <div>
                  <div className="font-semibold text-[#061952]">Durée</div>
                  <div className="text-gray-600">9h</div>
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
            src="/images/reveil-musculaire-podium-atelier.jpg"
            alt="Formation Ambasseur Réveil Musculaire – Podium"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Notre approche */}
      <FormationArmApproche />

      {/* Programme */}
      <FormationArmProgramme />

      {/* FAQ */}
      <FormationArmFAQ />

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
