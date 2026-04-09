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

export default function AtelierMurDesAddictionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <AtelierLabel>ATELIER QVT</AtelierLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight break-words max-w-full">
              Sport transfert savoir-être
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
              Un atelier sportif qui développe les savoir-être essentiels comme l’esprit d’équipe, l’adaptation et la communication, à travers des mises en situation ludiques et collectives.
            </p>

            <HeroButtons>
              <PodiumButton variant="primary" href="/contact">
                Réserver mon atelier
              </PodiumButton>
              <PodiumButton
                variant="secondary"
                href="/documents/atelier-sport-transfert-savoir-etre-qvt.pdf"
                target="_blank"
              >
                Télécharger le programme
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage
            src="/images/cohesion-d-equipe.png"
            alt="Participants utilisant des lunettes de simulation d'addiction"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Objectives & Methods */}
      <WorkshopObjectives>
        <ObjectivesColumn title="Objectifs" icon="target">
          <ObjectiveItem>
            Prendre conscience de ses savoirêtre à travers une pratique sportive (prendre du recul, gérer une situation conflictuelle, s’adapter et être créatif pour trouver des solutions, s’organiser et mettre en place des stratégies efficaces, se concentrer et comprendre les consignes).
          </ObjectiveItem>
          <ObjectiveItem>
            Développer l’esprit d’équipe à travers la compétition et la gestion de la réussite et de l'échec.
          </ObjectiveItem>
          <ObjectiveItem>
            Apprendre à se connaître et déceler ses talents.
          </ObjectiveItem>
          <ObjectiveItem>
            Communiquer, comprendre l’autre et se faire comprendre.
          </ObjectiveItem>
        </ObjectivesColumn>

        <ObjectivesColumn title="Modalités pédagogiques" icon="book">
          <ObjectiveItem type="method">
            Pédagogie active et participative (rendre le jeune acteur de son parcours).
          </ObjectiveItem>
          <ObjectiveItem type="method">Débat animé.</ObjectiveItem>
          <ObjectiveItem type="method">Quizz sur l’histoire des grands sportifs.</ObjectiveItem>
          <ObjectiveItem type="method">Présentation vidéo avec support vidéoprojecteur.</ObjectiveItem>
          <ObjectiveItem type="method">Mise en pratique sur le terrain : -exercices/jeux collectifs -découverte de sport collectif innovant (ultimate, pumball...).</ObjectiveItem>
        </ObjectivesColumn>
      </WorkshopObjectives>

      {/* Timeline */}
      <WorkshopTimeline>
        <TimelineSteps>
          <TimelineStep icon="settings" step={1}>
            Echauffement collectif : grand jeu valorisant l’aspect ludique et permettant d’oser rentrer dans l’activité.
          </TimelineStep>
          <TimelineStep icon="play" step={2}>
            Une fois le corps et l’esprit préparé, découvertes des différentes situations de sport transfère mettant en avant les savoir-être.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={3}>
            Pour finir, présentation d’un sport innovant et inclusif qui se réalise en intérieur ou en extérieur, sous forme de tournoi.
          </TimelineStep>
        </TimelineSteps>
      </WorkshopTimeline>

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
