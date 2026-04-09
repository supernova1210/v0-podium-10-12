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
import FormationGestePostureApproche from "@/components/formation-geste-posture-approche"
import FormationGestePostureProgramme from "@/components/formation-geste-posture-programme"
import FormationGestePostureFAQ from "@/components/formation-geste-posture-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import { PodiumButton } from "@/components/ui/podium-button"

export const metadata: Metadata = {
  title: "Formation Geste et Posture – Podium",
  description:
    "Prévenez les douleurs au travail avec notre formation Geste et Posture : apprenez à bouger intelligemment, protégez votre corps et boostez votre énergie au quotidien !",
  openGraph: {
    title: "Formation Geste et Posture – Podium",
    description:
      "Prévenez les douleurs au travail avec notre formation Geste et Posture : apprenez à bouger intelligemment, protégez votre corps et boostez votre énergie au quotidien !",
    type: "website",
  },
}

export default function FormationGestePosturePage() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#061952] leading-tight break-words max-w-full">
              Formation Geste et Posture
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Prévenez les douleurs au travail avec notre formation Geste et Posture : apprenez à bouger intelligemment,
              protégez votre corps et boostez votre énergie au quotidien !
            </p>

            <BadgesGrid>
              <Badge icon="clock">
                <div>
                  <div className="font-semibold text-[#061952]">Durée</div>
                  <div className="text-gray-600">3h30 ou 7h</div>
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
            src="/images/atelier-yoga-podium-bien-etre.jpg"
            alt="Formation Geste et Posture – Podium"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Notre approche */}
      <FormationGestePostureApproche />

      {/* Programme */}
      <FormationGestePostureProgramme />

      {/* FAQ */}
      <FormationGestePostureFAQ />

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
