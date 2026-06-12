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
  title: "Atelier Quiz Sur-Mesure avec buzzers",
  description: "Un quiz interactif avec buzzers pour renforcer les connaissances et transmettre les règles internes de façon ludique. Animé en entreprise en Rhône-Alpes.",
  alternates: { canonical: "/atelier/quiz-sur-mesure" },
}

export default function AtelierMurDesAddictionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <AtelierLabel>ATELIER QVT & SECURITE</AtelierLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight break-words max-w-full">
              Quiz sur-mesure
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
              Un atelier ludique et participatif qui renforce les connaissances, transmet les règles internes de l’entreprise et valide les acquis grâce à des quiz interactifs avec buzzers et différents modes de jeu.
            </p>

            <HeroButtons>
              <PodiumButton variant="primary" href="/contact">
                Réserver mon atelier
              </PodiumButton>
              <PodiumButton
                variant="secondary"
                href="/documents/atelier-quiz-sur-mesure-v2.pdf"
                target="_blank"
              >
                Télécharger le programme
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage
            src="/images/atelier-quiz-2-min.jpeg"
            alt="Participants utilisant des lunettes de simulation d'addiction"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Objectives & Methods */}
      <WorkshopObjectives>
        <ObjectivesColumn title="Objectifs" icon="target">
          <ObjectiveItem>
            Renforcer les connaissances générales.
          </ObjectiveItem>
          <ObjectiveItem>
            Transmettre les règles et la charte interne de l’entreprise à travers des questions.
          </ObjectiveItem>
          <ObjectiveItem>
            Optimiser l’ancrage des participants et valider les acquis.
          </ObjectiveItem>
        </ObjectivesColumn>

        <ObjectivesColumn title="Modalités pédagogiques" icon="book">
          <ObjectiveItem type="method">
            Pédagogie active plaçant le participant au coeur de l’activité.
          </ObjectiveItem>
          <ObjectiveItem type="method">Différents modes de jeux et d’arbitrage.</ObjectiveItem>
          <ObjectiveItem type="method">Différents types de questions suivant le temps, le nombre de participants et le sujet.</ObjectiveItem>
          <ObjectiveItem type="method">Buzzer bluetooth.</ObjectiveItem>
        </ObjectivesColumn>
      </WorkshopObjectives>

      {/* Timeline */}
      <WorkshopTimeline>
        <TimelineSteps>
          <TimelineStep icon="settings" step={1}>
            Création des équipes via un outil de tirage au sort digitale.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={2}>
            Explication des modes de jeux et de l’utilisation des buzzers.
          </TimelineStep>
          <TimelineStep icon="play" step={3}>
            C’est partie pour le quizz, 10 à 20 questions suivant le temps restant. Possibilité de bloquer les buzzer ayant répondu faux à la question.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={4}>
            Slide explicative après chaque question pour assurer l’ancrage auprès des participants.
          </TimelineStep>
        </TimelineSteps>
      </WorkshopTimeline>

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
