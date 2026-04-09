import {
  WorkshopHero,
  HeroContent,
  HeroText,
  HeroImage,
  BadgesGrid,
  Badge,
  HeroButtons,
} from "@/components/workshop-hero"
import { WorkshopObjectives, ObjectivesColumn, ObjectiveItem } from "@/components/workshop-objectives"
import { WorkshopTimeline, TimelineSteps, TimelineStep } from "@/components/workshop-timeline"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import { PodiumButton } from "@/components/ui/podium-button"

export default function WorkshopTemplate() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Atelier — <span className="text-blue-950">Nom de l'atelier</span>
            </h1>

            <BadgesGrid>
              <Badge icon="clock">
                <div>
                  <div className="font-semibold text-blue-950">Animation</div>
                  <div className="text-gray-600">Durée ici</div>
                </div>
              </Badge>
              <Badge icon="users">
                <div>
                  <div className="font-semibold text-blue-950">À partir de</div>
                  <div className="text-gray-600">X participants</div>
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
              Description courte de l'atelier ici. Une ou deux phrases pour expliquer l'objectif principal.
            </p>

            <HeroButtons>
              <PodiumButton variant="primary" href="/contact">
                Réserver mon atelier
              </PodiumButton>
              <PodiumButton variant="secondary" href="/documents/atelier-template.pdf" target="_blank">
                Télécharger le programme
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage src="/images/workshop-placeholder.jpg" alt="Atelier en action" />
        </HeroContent>
      </WorkshopHero>

      {/* Objectives & Methods */}
      <WorkshopObjectives>
        <ObjectivesColumn title="Objectifs" icon="target">
          <ObjectiveItem>Premier objectif de l'atelier</ObjectiveItem>
          <ObjectiveItem>Deuxième objectif de l'atelier</ObjectiveItem>
          <ObjectiveItem>Troisième objectif de l'atelier</ObjectiveItem>
        </ObjectivesColumn>

        <ObjectivesColumn title="Modalités pédagogiques" icon="book">
          <ObjectiveItem>Première modalité pédagogique</ObjectiveItem>
          <ObjectiveItem>Deuxième modalité pédagogique</ObjectiveItem>
          <ObjectiveItem>Troisième modalité pédagogique</ObjectiveItem>
        </ObjectivesColumn>
      </WorkshopObjectives>

      {/* Timeline */}
      <WorkshopTimeline>
        <TimelineSteps>
          <TimelineStep icon="play" step={1}>
            Première étape du déroulé de l'atelier avec description détaillée.
          </TimelineStep>
          <TimelineStep icon="settings" step={2}>
            Deuxième étape du déroulé avec adaptation et personnalisation.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={3}>
            Troisième étape avec feedback et partage d'expériences.
          </TimelineStep>
        </TimelineSteps>
      </WorkshopTimeline>

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
