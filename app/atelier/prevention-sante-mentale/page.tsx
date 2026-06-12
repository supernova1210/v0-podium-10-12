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
  title: "Atelier Santé Mentale : gérer son stress au quotidien",
  description: "Comprendre le stress, repérer ses signaux d’alerte et expérimenter des outils de régulation concrets. Atelier QVCT en entreprise, Lyon & Rhône-Alpes.",
  alternates: { canonical: "/atelier/prevention-sante-mentale" },
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
              Santé mentale : gérer son stress au quotidien
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
                  <div className="text-gray-600">4 participants</div>
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
              Un atelier interactif pour comprendre les mécanismes du stress, repérer ses signaux d’alerte et expérimenter des outils concrets de régulation afin de favoriser un environnement de travail plus serein.
            </p>

            <HeroButtons>
              <PodiumButton variant="primary" href="/contact">
                Réserver mon atelier
              </PodiumButton>
              <PodiumButton
                variant="secondary"
                href="/documents/atelier_prevention_sante_mentale_qvt.pdf"
                target="_blank"
              >
                Télécharger le programme
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage
            src="/images/stress-management-confidence-workshop.png"
            alt="Participants utilisant des lunettes de simulation d'addiction"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Objectives & Methods */}
      <WorkshopObjectives>
        <ObjectivesColumn title="Objectifs" icon="target">
          <ObjectiveItem>
            Comprendre les mécanismes du stress et leur impact sur la santé mentale.
          </ObjectiveItem>
          <ObjectiveItem>
            Identifier ses propres signaux d’alerte face au stress et repérer ses sources principales de tension.
          </ObjectiveItem>
          <ObjectiveItem>
            Découvrir et expérimenter des outils concrets de régulation du stress (respiration, ancrage, visualisation, etc.).
          </ObjectiveItem>
          <ObjectiveItem>
            Renforcer la cohésion d’équipe en favorisant les échanges sur les stratégies individuelles et collectives de bien-être.
          </ObjectiveItem>
          <ObjectiveItem>
            Favoriser un environnement de travail plus serein.
          </ObjectiveItem>
        </ObjectivesColumn>

        <ObjectivesColumn title="Modalités pédagogiques" icon="book">
          <ObjectiveItem type="method">
            Atelier interactif.
          </ObjectiveItem>
          <ObjectiveItem type="method">Échanges d’expériences.</ObjectiveItem>
          <ObjectiveItem type="method">Exercices pratiques et mises en situation.</ObjectiveItem>
          <ObjectiveItem type="method">Techniques issues du coaching, de la préparation mentale et de la pleine conscience.</ObjectiveItem>
          <ObjectiveItem type="method">Ambiance bienveillante et participative.</ObjectiveItem>
        </ObjectivesColumn>
      </WorkshopObjectives>

      {/* Timeline */}
      <WorkshopTimeline>
        <TimelineSteps>
          <TimelineStep icon="settings" step={1}>
            Introduction : comprendre les mécanismes du stress et leur impact sur la santé mentale.
          </TimelineStep>
          <TimelineStep icon="settings" step={2}>
            Auto-évaluation : repérer ses signaux d'alerte et ses sources de stress.
          </TimelineStep>
          <TimelineStep icon="play" step={3}>
            Expérimentations guidées : respiration, ancrage, visualisation, recentrage.
          </TimelineStep>
          <TimelineStep icon="play" step={4}>
            Jeux et mises en situation : comment réagir face a la pression, aux tensions ou a la surcharge.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={5}>
            Temps d’échange : retour d’expérience, partage d'outils entre pairs.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={6}>
            Conclusion : repartir avec une boite a outils simple et applicable au quotidien.
          </TimelineStep>
        </TimelineSteps>
      </WorkshopTimeline>

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
