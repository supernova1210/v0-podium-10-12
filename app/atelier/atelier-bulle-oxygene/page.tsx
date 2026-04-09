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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight whitespace-nowrap">
              Yoga bulle d'oxygène
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
              Un atelier interactif de sensibilisation aux addictions utilisant des lunettes de simulation pour faire
              découvrir l'impact des addictions sur le quotidien.
            </p>

            <HeroButtons>
              <PodiumButton variant="primary" href="/contact">
                Réserver mon atelier
              </PodiumButton>
              <PodiumButton variant="secondary" href="/documents/atelier-yoga-bulle-oxygene-qvt.pdf" target="_blank">
                Télécharger le programme
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage
            src="/images/atelier-yoga-bulle-oxygene-v2.png"
            alt="Participants utilisant des lunettes de simulation d'addiction"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Objectives & Methods */}
      <WorkshopObjectives>
        <ObjectivesColumn title="Objectifs" icon="target">
          <ObjectiveItem>Proposer une activité ludique permettant de sensibiliser les pratiquants à l’importance de gérer ses émotions</ObjectiveItem>
          <ObjectiveItem>Prévenir le stress au travail en travaillant sur sa respiration et en se recentrant sur soi.</ObjectiveItem>
          <ObjectiveItem>
            Vivre un moment d’équipe
          </ObjectiveItem>
        </ObjectivesColumn>

        <ObjectivesColumn title="Modalités pédagogiques" icon="book">
          <ObjectiveItem type="method">
            Pédagogie expérentielle qui permet au pratiquant de ressentir les mouvements et de se corriger par lui-même
          </ObjectiveItem>
          <ObjectiveItem type="method">Mise en pratique des différentes formes de yoga (assis, debout, respiratoire)</ObjectiveItem>
        </ObjectivesColumn>
      </WorkshopObjectives>

      {/* Timeline */}
      <WorkshopTimeline description="Le yoga est l'arrêt de l’activité du mental. C’est une discipline du corps et de l’esprit qui comprend une grande variété d’exercices et de techniques.">
        <TimelineSteps>
          <TimelineStep icon="play" step={1}>
            Allongé: prise de conscience du corps et de la respiration Relaxation et détente.
          </TimelineStep>
          <TimelineStep icon="play" step={2}>
            En assise: dos rond et dos plat; mobilité de la colonne vertébrale
          </TimelineStep>
          <TimelineStep icon="play" step={3}>
            Debout: prise de postures d’équilibre et de postures de tonicité des membres inférieur.
          </TimelineStep>
          <TimelineStep icon="settings" step={4}>
            Postures de torsion de la colonne vertébrale.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={5}>
            Relaxation et détente.
          </TimelineStep>
        </TimelineSteps>
      </WorkshopTimeline>

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
