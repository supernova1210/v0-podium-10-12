import {
  WorkshopHero,
  HeroContent,
  HeroText,
  HeroImage,
  BadgesGrid,
  Badge,
  HeroButtons,
  AtelierLabel,
} from "@/components/workshop-hero"
import { WorkshopObjectives, ObjectivesColumn, ObjectiveItem } from "@/components/workshop-objectives"
import { WorkshopTimeline, TimelineSteps, TimelineStep } from "@/components/workshop-timeline"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import { PodiumButton } from "@/components/ui/podium-button"

export default function EscapeGameSecuritePage() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <AtelierLabel>ATELIER SÉCURITÉ</AtelierLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight">
              Escape Game Sécurité
            </h1>

            <BadgesGrid>
              <Badge icon="clock">
                <div>
                  <div className="font-semibold text-blue-950">Animation</div>
                  <div className="text-gray-600">60 à 75 minutes</div>
                </div>
              </Badge>
              <Badge icon="users">
                <div>
                  <div className="font-semibold text-blue-950">Équipes de</div>
                  <div className="text-gray-600">4 à 6 participants</div>
                </div>
              </Badge>
              <Badge icon="location">
                <div>
                  <div className="font-semibold text-blue-950">Intérieur</div>
                  <div className="text-gray-600">de préférence</div>
                </div>
              </Badge>
            </BadgesGrid>

            <p className="text-lg text-gray-700 leading-relaxed">
              Un jeu connecté sur la sécurité au travail où les équipes relèvent des défis variés à travers une
              application interactive. Un classement en temps réel maintient l'engagement et la compétitivité tout au
              long de l'événement.
            </p>

            <HeroButtons>
              <PodiumButton variant="primary" href="/contact">
                Réserver mon atelier
              </PodiumButton>
              <PodiumButton variant="secondary" href="/documents/programme-atelier-escape-game.pdf" target="_blank">
                Télécharger le programme
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage
            src="/images/escape-game-atelier-podium.jpg"
            alt="Escape Game Sécurité - Interface de jeu connectée"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Objectives & Methods */}
      <WorkshopObjectives>
        <ObjectivesColumn title="Objectifs" icon="target">
          <ObjectiveItem>
            Sensibiliser aux enjeux de sécurité et de bien-être au travail de manière ludique et interactive
          </ObjectiveItem>
          <ObjectiveItem>Encourager le travail d'équipe et la prise de décision stratégique</ObjectiveItem>
          <ObjectiveItem>
            Créer une dynamique compétitive saine qui maintient l'engagement des participants tout au long de
            l'animation
          </ObjectiveItem>
        </ObjectivesColumn>

        <ObjectivesColumn title="Modalités pédagogiques" icon="book">
          <ObjectiveItem type="method">
            Application interactive avec environ 40 défis sur smartphone (réponses écrites, chiffrées, photos, QCM)
          </ObjectiveItem>
          <ObjectiveItem type="method">
            Classement en temps réel qui évolue tout au long de l'événement pour maintenir la compétitivité
          </ObjectiveItem>
          <ObjectiveItem type="method">
            Flexibilité : tous les défis n'ont pas vocation à être résolus, encourageant les choix stratégiques et la
            priorisation
          </ObjectiveItem>
          <ObjectiveItem type="method">
            Encadrement professionnel avec un référent maître du temps et des animateurs accompagnants
          </ObjectiveItem>
        </ObjectivesColumn>
      </WorkshopObjectives>

      {/* Timeline */}
      <WorkshopTimeline description="Voici comment se déroule notre escape game sur la sécurité au travail :">
        <TimelineSteps>
          <TimelineStep icon="smartphone" step={1}>
            Connexion des équipes : chaque participant reçoit un smartphone de jeu (ou accède via QR code) pour se
            connecter à l'application.
          </TimelineStep>
          <TimelineStep icon="puzzle" step={2}>
            Résolution de défis variés : les équipes répondent aux questions et énigmes dans l'ordre qu'elles
            souhaitent, avec différents formats de réponse (texte, chiffres, photos, QCM).
          </TimelineStep>
          <TimelineStep icon="trophy" step={3}>
            Classement dynamique : le classement évolue en continu, permettant aux équipes de remonter au fur et à
            mesure de leurs participations.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={4}>
            Débriefing final : retour sur les thématiques abordées et annonce des équipes gagnantes dans une ambiance
            conviviale et engageante.
          </TimelineStep>
        </TimelineSteps>
      </WorkshopTimeline>

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
