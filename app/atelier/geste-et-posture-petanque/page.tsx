import {
  WorkshopHero,
  HeroContent,
  HeroText,
  HeroImage,
  BadgesGrid,
  Badge,
  HeroButtons,
  AtelierLabel, // Added AtelierLabel import
} from "@/components/workshop-hero"
import { WorkshopObjectives, ObjectivesColumn, ObjectiveItem } from "@/components/workshop-objectives"
import { WorkshopTimeline, TimelineSteps, TimelineStep } from "@/components/workshop-timeline"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import { PodiumButton } from "@/components/ui/podium-button"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Atelier Gestes et Postures façon pétanque",
  description: "La pétanque pour sensibiliser aux bonnes postures et prévenir les TMS en s’amusant. Atelier prévention animé en entreprise, Ain & Rhône-Alpes.",
  alternates: { canonical: "/atelier/geste-et-posture-petanque" },
}

export default function AtelierMurDesAddictionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <AtelierLabel>SECURITE</AtelierLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight break-words max-w-full">
              Geste et posture pétanque
            </h1>

            <BadgesGrid>
              <Badge icon="clock">
                <div>
                  <div className="font-semibold text-blue-950">Durée</div>
                  <div className="text-gray-600">à partir de 20 min</div>
                </div>
              </Badge>
              <Badge icon="users">
                <div>
                  <div className="font-semibold text-blue-950">À partir de</div>
                  <div className="text-gray-600">6 participants</div>
                </div>
              </Badge>
              <Badge icon="location">
                <div>
                  <div className="font-semibold text-blue-950">Intérieur</div>
                  <div className="text-gray-600">ou extérieur</div>
                </div>
              </Badge>
            </BadgesGrid>

            <p className="text-lg text-gray-700 leading-relaxed">
              Un atelier ludique qui utilise la pétanque pour sensibiliser aux bonnes postures, comprendre l’impact des mauvaises habitudes et intégrer des corrections concrètes en s’amusant.
            </p>

            <HeroButtons>
              <PodiumButton variant="primary" href="/contact">
                Réserver mon atelier
              </PodiumButton>
              <PodiumButton
                variant="secondary"
                href="/documents/atelier-geste-et-posture-petanque-securite.pdf"
                target="_blank"
              >
                Télécharger le programme
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage
            src="/images/atelier-geste-et-posture-petanque-4.jpg"
            alt="Participants utilisant des lunettes de simulation d'addiction"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Objectives & Methods */}
      <WorkshopObjectives>
        <ObjectivesColumn title="Objectifs" icon="target">
          <ObjectiveItem>
            Sensibiliser les pratiquants à l’impact d’une mauvaise posture dans une situation du quotidien.
          </ObjectiveItem>
          <ObjectiveItem>
            Permettre aux pratiquants de ressentir et de mieux appréhender l’importance d’une posture en adéquation avec le mouvement associé.
          </ObjectiveItem>
        </ObjectivesColumn>

        <ObjectivesColumn title="Modalités pédagogiques" icon="book">
          <ObjectiveItem type="method">
            Pédagogie ludique (réalisation d’une partie de pétanque).
          </ObjectiveItem>
          <ObjectiveItem type="method">Mise en situation avec des apports correctifs en instantané.</ObjectiveItem>
          <ObjectiveItem type="method">Travail en sous groupe.</ObjectiveItem>
          <ObjectiveItem type="method">Débat participatif.</ObjectiveItem>
        </ObjectivesColumn>
      </WorkshopObjectives>

      {/* Timeline */}
      <WorkshopTimeline>
        <TimelineSteps>
          <TimelineStep icon="play" step={1}>
            L’atelier démarre par une partie de pétanque au temps.
          </TimelineStep>
          <TimelineStep icon="settings" step={2}>
            Ensuite, il s’agit de comprendre l’impact qu’une mauvais posture peut avoir sur soi.
          </TimelineStep>
          <TimelineStep icon="play" step={3}>
            Enfin, des corrections seront présentées et proposé lors d’une nouvelle partie de pétanque.
          </TimelineStep>
        </TimelineSteps>
      </WorkshopTimeline>

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
