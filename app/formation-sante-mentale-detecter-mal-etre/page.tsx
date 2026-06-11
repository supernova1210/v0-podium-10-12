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
import FormationSanteMentaleApproche from "@/components/formation-sante-mentale-approche"
import FormationSanteMentaleProgramme from "@/components/formation-sante-mentale-programme"
import FormationSanteMentaleFAQ from "@/components/formation-sante-mentale-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import { PodiumButton } from "@/components/ui/podium-button"

export const metadata: Metadata = {
  title: "Formation Santé Mentale – Détecter une personne en détresse – Podium",
  description:
    "Apprenez à repérer les signes de mal-être chez un collègue ou un usager, à adopter une posture d'écoute sécurisante et à réagir de manière adaptée pour prévenir les risques psychosociaux.",
  openGraph: {
    title: "Formation Santé Mentale – Détecter une personne en détresse – Podium",
    description:
      "Apprenez à repérer les signes de mal-être chez un collègue ou un usager, à adopter une posture d'écoute sécurisante et à réagir de manière adaptée pour prévenir les risques psychosociaux.",
    type: "website",
  },
}

export default function FormationSanteMentalePage() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#061952] leading-tight break-words max-w-full">
              Formation Santé Mentale : détecter une personne en détresse
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Développez une posture professionnelle pour repérer les premiers signes de mal-être, écouter avec
              justesse et réagir de manière adaptée face à un collègue ou un usager en difficulté.
            </p>

            <BadgesGrid>
              <Badge icon="clock">
                <div>
                  <div className="font-semibold text-[#061952]">Durée</div>
                  <div className="text-gray-600">3h</div>
                </div>
              </Badge>
              <Badge icon="users">
                <div>
                  <div className="font-semibold text-[#061952]">Participants</div>
                  <div className="text-gray-600">4 à 12 personnes</div>
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
            src="/images/atelier-theatre-entreprise.jpg"
            alt="Formation Santé Mentale – Détecter une personne en détresse – Podium"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Notre approche */}
      <FormationSanteMentaleApproche />

      {/* Programme */}
      <FormationSanteMentaleProgramme />

      {/* FAQ */}
      <FormationSanteMentaleFAQ />

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
