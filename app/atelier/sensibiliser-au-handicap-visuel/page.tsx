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
  title: "Atelier Sensibilisation au Handicap Visuel",
  description: "Expérimenter les défis du handicap visuel et apprendre des techniques de guidage en binôme. Atelier immersif animé en entreprise en Rhône-Alpes.",
  alternates: { canonical: "/atelier/sensibiliser-au-handicap-visuel" },
}

export default function AtelierMurDesAddictionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <AtelierLabel>ATELIER SECURITE</AtelierLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight break-words max-w-full">
              Sensibiliser au handicap visuel
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
              Un atelier immersif pour comprendre les défis du handicap visuel, développer la confiance en binôme et expérimenter des techniques simples de communication et de guidage.
            </p>

            <HeroButtons>
              <PodiumButton variant="primary" href="/contact">
                Réserver mon atelier
              </PodiumButton>
              <PodiumButton
                variant="secondary"
                href="/documents/atelier-sensibilisation-handicap-visuel.pdf"
                target="_blank"
              >
                Télécharger le programme
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage
            src="/images/atelier-sensibiliser-handicap-visuel-1.jpg"
            alt="Participants utilisant des lunettes de simulation d'addiction"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Objectives & Methods */}
      <WorkshopObjectives>
        <ObjectivesColumn title="Objectifs" icon="target">
          <ObjectiveItem>
            Sensibiliser aux difficultés rencontrées par une personne malvoyante.
          </ObjectiveItem>
          <ObjectiveItem>
            Apprendre à faire confiance à son partenaire.
          </ObjectiveItem>
          <ObjectiveItem>
            Découvrir des solutions de communication simple.
          </ObjectiveItem>
        </ObjectivesColumn>

        <ObjectivesColumn title="Modalités pédagogiques" icon="book">
          <ObjectiveItem type="method">
            Pédagogie expérimentale et ludique avec des mises en situation et des moments de co-analyse.
          </ObjectiveItem>
          <ObjectiveItem type="method">Apprentissage autonome.</ObjectiveItem>
          <ObjectiveItem type="method">Encadrement par un animateur APA.</ObjectiveItem>
        </ObjectivesColumn>
      </WorkshopObjectives>

      {/* Timeline */}
      <WorkshopTimeline>
        <TimelineSteps>
          <TimelineStep icon="settings" step={1}>
            Des binômes sont formés, une personne devient “malvoyante” (bandeau/masque).
          </TimelineStep>
          <TimelineStep icon="play" step={2}>
            La personne voyante du binôme doit guider son partenaire sur un parcours. Les rôles sont échangés au bout de quelques minutes.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={3}>
            Un débriefing collectif est réalisé afin de partager ses ressentis et les techniques d’adaptations mises en place.
          </TimelineStep>
        </TimelineSteps>
      </WorkshopTimeline>

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
