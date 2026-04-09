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
import FormationLancerDynamiserReunionApproche from "@/components/formation-lancer-dynamiser-reunion-approche"
import FormationLancerDynamiserReunionProgramme from "@/components/formation-lancer-dynamiser-reunion-programme"
import FormationLancerDynamiserReunionFAQ from "@/components/formation-lancer-dynamiser-reunion-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import { PodiumButton } from "@/components/ui/podium-button"

export const metadata: Metadata = {
  title: "Formation : Lancer et dynamiser une réunion – Podium",
  description:
    "Savoir lancer ses réunions avec un icebreaker qui capte l'attention, met de l'énergie dans le groupe et crée du lien dès les premières minutes.",
  openGraph: {
    title: "Formation : Lancer et dynamiser une réunion – Podium",
    description:
      "Savoir lancer ses réunions avec un icebreaker qui capte l'attention, met de l'énergie dans le groupe et crée du lien dès les premières minutes.",
    type: "website",
  },
}

export default function FormationLancerDynamiserReunionPage() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#061952] leading-tight break-words max-w-full">
              Lancer et dynamiser une réunion
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Savoir lancer ses réunions avec un icebreaker qui capte l'attention, met de l'énergie dans le groupe et
              crée du lien dès les premières minutes.
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
            src="/images/atelier-cohesion-min.jpg"
            alt="Formation Lancer et dynamiser une réunion – Podium"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Notre approche */}
      <FormationLancerDynamiserReunionApproche />

      {/* Programme */}
      <FormationLancerDynamiserReunionProgramme />

      {/* FAQ */}
      <FormationLancerDynamiserReunionFAQ />

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
