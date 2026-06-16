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
import FormationPscApproche from "@/components/formation-psc-approche"
import FormationPscProgramme from "@/components/formation-psc-programme"
import FormationPscFAQ from "@/components/formation-psc-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import { PodiumButton } from "@/components/ui/podium-button"

export const metadata: Metadata = {
  title: "Formation Premiers Secours Citoyen – Podium",
  description:
    "Donnez à vos équipes les gestes qui sauvent avec la formation Premiers Secours Citoyen : protéger, alerter et intervenir face à une situation d'urgence. Certificat de compétences PSC.",
  alternates: {
    canonical: "https://www.ofpodium.fr/formation-securite-premiers-secours-citoyen",
  },
  openGraph: {
    title: "Formation Premiers Secours Citoyen – Podium",
    description:
      "Donnez à vos équipes les gestes qui sauvent avec la formation Premiers Secours Citoyen : protéger, alerter et intervenir face à une situation d'urgence. Certificat de compétences PSC.",
    type: "website",
  },
}

export default function FormationPremiersSecoursCitoyenPage() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#061952] leading-tight break-words max-w-full">
              Formation Premiers Secours Citoyen
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Apprenez les gestes qui sauvent : protéger une victime, alerter les secours et intervenir efficacement face
              à une situation d'urgence, jusqu'à la prise en charge par les services de secours.
            </p>

            <BadgesGrid>
              <Badge icon="clock">
                <div>
                  <div className="font-semibold text-[#061952]">Durée</div>
                  <div className="text-gray-600">7h</div>
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
            src="/images/atelier-secourir-sans-panique-bobologie.png"
            alt="Formation Premiers Secours Citoyen – Podium"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Notre approche */}
      <FormationPscApproche />

      {/* Programme */}
      <FormationPscProgramme />

      {/* FAQ */}
      <FormationPscFAQ />

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
