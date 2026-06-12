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
  title: "Atelier Cohésion d’Équipe en entreprise",
  description: "Un atelier collectif pour renforcer la cohésion d’équipe et l’état d’esprit positif. Intervention sur site à Lyon, dans l’Ain et en Rhône-Alpes.",
  alternates: { canonical: "/atelier/cles-cohesion-equipe" },
}

export default function AtelierMurDesAddictionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <AtelierLabel>ATELIER QVT</AtelierLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight break-words max-w-full">
              Les clés de la cohésion d’équipe
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
              Un atelier collectif pour renforcer la cohésion, développer un état d’esprit positif et expérimenter les dynamiques qui font fonctionner une équipe.
            </p>

            <HeroButtons>
              <PodiumButton variant="primary" href="/contact">
                Réserver mon atelier
              </PodiumButton>
              <PodiumButton
                variant="secondary"
                href="/documents/atelier-cles-de-la-cohesion-qvt.pdf"
                target="_blank"
              >
                Télécharger le programme
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage
            src="/images/atelier-cohesion-min.jpg"
            alt="Participants utilisant des lunettes de simulation d'addiction"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Objectives & Methods */}
      <WorkshopObjectives>
        <ObjectivesColumn title="Objectifs" icon="target">
          <ObjectiveItem>
            Définir l’inclusion comme socle fondamentale permettant de définir les limites d’un groupe.
          </ObjectiveItem>
          <ObjectiveItem>
            Développer un état d’esprit sein et positif entre collaborateur. Placer la cohésion comme facteur de performance.
          </ObjectiveItem>
          <ObjectiveItem>
            Unir le manager et son équipe dans une dynamique commune.
          </ObjectiveItem>
        </ObjectivesColumn>

        <ObjectivesColumn title="Modalités pédagogiques" icon="book">
          <ObjectiveItem type="method">
            Jeu “Une tribu une or”. Un jeu en équipe qui favorise la le partage et met en avant les différents rôles que l’on retrouve au sein d’une équipe.
          </ObjectiveItem>
          <ObjectiveItem type="method">Une méthode pédagogique inclusive mettant en scène l’ensemble des acteurs.</ObjectiveItem>
          <ObjectiveItem type="method">Dimension de l’atelier : 5m x 5m.</ObjectiveItem>
        </ObjectivesColumn>
      </WorkshopObjectives>

      {/* Timeline */}
      <WorkshopTimeline>
        <TimelineSteps>
          <TimelineStep icon="settings" step={1}>
            Créer des équipes afin qu’elles puissent s’identifier à travers un nom, un cris, une couleurs (une tribu).
          </TimelineStep>
          <TimelineStep icon="play" step={2}>
            Permettre à l’équipe de coopérer à travers des règles de communication et de fonctionnement (leader, qui répond ?, qui buzz ?…).
          </TimelineStep>
          <TimelineStep icon="message-circle" step={3}>
            Transmettre des outils permettant aux participants de reproduire des situations en entreprises (les bases de la préparation mentale).
          </TimelineStep>
        </TimelineSteps>
      </WorkshopTimeline>

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
