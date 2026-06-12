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
  title: "Atelier Gestion des Émotions par la sophrologie",
  description: "Comprendre les mécanismes du stress et transformer ses émotions grâce à la sophrologie. Atelier QVCT animé en entreprise en Rhône-Alpes.",
  alternates: { canonical: "/atelier/gestion-des-emotions-sophrologie" },
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
              Gestion des émotions sophrologie
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
              Un atelier interactif pour comprendre les mécanismes du stress, apprendre à transformer ses émotions
              négatives et découvrir des outils pratiques pour mieux les gérer au quotidien.
            </p>

            <HeroButtons>
              <PodiumButton variant="primary" href="/contact">
                Réserver mon atelier
              </PodiumButton>
              <PodiumButton variant="secondary" href="/documents/atelier-gestion-des-emotions-sophrologie.pdf" target="_blank">
                Télécharger le programme
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage
            src="/images/podium_organisme_formation_atelier_sophrologie-min.png"
            alt="Participants dans un atelier de gestion du stress apprenant des techniques de confiance"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Objectives & Methods */}
      <WorkshopObjectives>
        <ObjectivesColumn title="Objectifs" icon="target">
          <ObjectiveItem>
            Apprendre à gérer son stress et les émotions négatives qui affectent la confiance en soi.
          </ObjectiveItem>
          <ObjectiveItem>
            Apprendre à gérer la peur de l’échec et à utiliser les échecs comme des opportunités d'apprentissage.
          </ObjectiveItem>
        </ObjectivesColumn>

        <ObjectivesColumn title="Modalités pédagogiques" icon="book">
          <ObjectiveItem type="method">
            Pédagogie active et ludique (rendre le jeune acteur de son parcours).
          </ObjectiveItem>
          <ObjectiveItem type="method">Débat animé.</ObjectiveItem>
          <ObjectiveItem type="method">Mise en scène.</ObjectiveItem>
          <ObjectiveItem type="method">Présentation vidéo avec support vidéoprojecteur.</ObjectiveItem>
          <ObjectiveItem type="method">
            Découverte et application d’une boîte à outils (exemple, la technique CAMP ou SWITCH).
          </ObjectiveItem>
        </ObjectivesColumn>
      </WorkshopObjectives>

      {/* Timeline */}
      <WorkshopTimeline>
        <TimelineSteps>
          <TimelineStep icon="play" step={1}>
            L’atelier démarre par un débat animé sur “ c’est quoi le stress ? “. L’objectif étant d’impliquer l’ensemble
            des participants et définir ensemble une définition commune.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={2}>
            Ensuite, il s’agit de comprendre l’impact que le stress peu avoir sur soi et sur son quotidien.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={3}>
            Enfin, les participants vont pouvoir apprendre des techniques de gestion du stress.
          </TimelineStep>
        </TimelineSteps>
      </WorkshopTimeline>

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
