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
            <AtelierLabel>ATELIER SECURITE</AtelierLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight break-words max-w-full">
              Secourir sans panique - bobologie
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
              Un atelier pratique pour apprendre à réagir face aux petites blessures du quotidien, adopter les gestes simples qui sécurisent et orienter correctement une victime, grâce à des mises en situation et des techniques accessibles à tous.
            </p>

            <HeroButtons>
              <PodiumButton variant="primary" href="/contact">
                Réserver mon atelier
              </PodiumButton>
              <PodiumButton
                variant="secondary"
                href="/documents/atelier-secourir-sans-panique-bobologie.pdf"
                target="_blank"
              >
                Télécharger le programme
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage
            src="/images/atelier-secourir-sans-panique-bobologie.png"
            alt="Participants utilisant des lunettes de simulation d'addiction"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Objectives & Methods */}
      <WorkshopObjectives>
        <ObjectivesColumn title="Objectifs" icon="target">
          <ObjectiveItem>
            Identifier les situations courantes de “bobologie” au travail (petites plaies, coupures, brûlures légères…).
          </ObjectiveItem>
          <ObjectiveItem>
            Adopter les gestes simples et sûrs à appliquer immédiatement avant l’intervention d’un secouriste ou d’un professionnel de santé.
          </ObjectiveItem>
          <ObjectiveItem>
            Savoir alerter et orienter correctement, selon la gravité, pour éviter l’aggravation d’une blessure.
          </ObjectiveItem>
        </ObjectivesColumn>

        <ObjectivesColumn title="Modalités pédagogiques" icon="book">
          <ObjectiveItem type="method">
            Méthodes actives et participatives.
          </ObjectiveItem>
          <ObjectiveItem type="method">Mini quiz interactif “Bobologie ou urgence ?”.</ObjectiveItem>
          <ObjectiveItem type="method">Atelier de mise en pratique avec pansements, désinfectants et fausses plaies.</ObjectiveItem>
          <ObjectiveItem type="method">Pédagogie ludique et inclusive : jeu de rôle en binôme (“Je suis blessé / je suis collègue secourant”).</ObjectiveItem>
        </ObjectivesColumn>
      </WorkshopObjectives>

      {/* Timeline */}
      <WorkshopTimeline>
        <TimelineSteps>
          <TimelineStep icon="message-circle" step={1}>
            Introduction avec un icebreaker : “Et vous, votre dernière bobologie ?”.
          </TimelineStep>
          <TimelineStep icon="play" step={2}>
            Apports et quiz : quiz collectif vrai ou faux.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={3}>
            Différencier les petits soins à faire soi-même et les cas nécessitant un relais (secouriste, SAMU, etc.).
          </TimelineStep>
          <TimelineStep icon="play" step={4}>
            Atelier pratique en sous-groupes : simulation d’un geste simple (nettoyer une plaie, poser une compresse, réagir à une brûlure).
          </TimelineStep>
        </TimelineSteps>
      </WorkshopTimeline>

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
