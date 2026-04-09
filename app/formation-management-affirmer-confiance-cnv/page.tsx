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
import FormationAffirmerConfianceCnvApproche from "@/components/formation-affirmer-confiance-cnv-approche"
import FormationAffirmerConfianceCnvProgramme from "@/components/formation-affirmer-confiance-cnv-programme"
import FormationAffirmerConfianceCnvFAQ from "@/components/formation-affirmer-confiance-cnv-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import { PodiumButton } from "@/components/ui/podium-button"

export const metadata: Metadata = {
  title: "Formation : S'affirmer avec confiance – CNV – Podium",
  description:
    "S'affirmer avec justesse et clarté dans ses échanges professionnels. Formation CNV pour développer une communication respectueuse et efficace.",
  openGraph: {
    title: "Formation : S'affirmer avec confiance – CNV – Podium",
    description:
      "S'affirmer avec justesse et clarté dans ses échanges professionnels. Formation CNV pour développer une communication respectueuse et efficace.",
    type: "website",
  },
}

export default function FormationAffirmerConfianceCnvPage() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#061952] leading-tight break-words max-w-full">
              S'affirmer avec confiance – CNV
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              S'affirmer avec justesse et clarté dans ses échanges professionnels.
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
                  <div className="text-gray-600">4 à 10 personnes</div>
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
            src="/images/atelier-CNV-agressivite-physique.jpg"
            alt="Formation S'affirmer avec confiance – CNV – Podium"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Notre approche */}
      <FormationAffirmerConfianceCnvApproche />

      {/* Programme */}
      <FormationAffirmerConfianceCnvProgramme />

      {/* FAQ */}
      <FormationAffirmerConfianceCnvFAQ />

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
