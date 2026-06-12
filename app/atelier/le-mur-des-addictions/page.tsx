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
  title: "Atelier Le Mur des Addictions",
  description: "Sensibilisation aux addictions au travail avec lunettes de simulation et mises en situation percutantes. Atelier prévention en entreprise, Rhône-Alpes.",
  alternates: { canonical: "/atelier/le-mur-des-addictions" },
}

export default function AtelierMurDesAddictionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <AtelierLabel>ATELIER SECURITE</AtelierLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight whitespace-nowrap">
              Le mur des addictions
            </h1>

            <BadgesGrid>
              <Badge icon="clock">
                <div>
                  <div className="font-semibold text-blue-950">Animation</div>
                  <div className="text-gray-600">à partir de 20 min</div>
                </div>
              </Badge>
              <Badge icon="users">
                <div>
                  <div className="font-semibold text-blue-950">À partir de</div>
                  <div className="text-gray-600">8 participants</div>
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
              Un atelier ludique et percutant qui sensibilise aux impacts des addictions à travers des mises en situation dynamiques et l’usage de lunettes de simulation.
            </p>

            <HeroButtons>
              <PodiumButton variant="primary" href="/contact">
                Réserver mon atelier
              </PodiumButton>
              <PodiumButton variant="secondary" href="/documents/atelier-le-mur-des-addictions-securite.pdf" target="_blank">
                Télécharger le programme
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage
            src="/images/atelier-le-mur-des-addictions-image-2.jpg"
            alt="Participants utilisant des lunettes de simulation d'addiction"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Objectives & Methods */}
      <WorkshopObjectives>
        <ObjectivesColumn title="Objectifs" icon="target">
          <ObjectiveItem>Découvrir l'impact qu'une addiction peut avoir sur notre quotidien</ObjectiveItem>
          <ObjectiveItem>Aborder des thèmes souvent tabou sous un angle ludique</ObjectiveItem>
          <ObjectiveItem>
            Placer le pratiquant dans une situation de stress lié au temps et à l'enjeu afin de l'obliger à être dans de
            la réactivité d'action
          </ObjectiveItem>
        </ObjectivesColumn>

        <ObjectivesColumn title="Modalités pédagogiques" icon="book">
          <ObjectiveItem type="method">
            Pédagogie active et ludique (partie dynamique qui dure en moyenne 1 minute)
          </ObjectiveItem>
          <ObjectiveItem type="method">Travail collaboratif</ObjectiveItem>
          <ObjectiveItem type="method">
            Mise en pratique avec l'utilisation du matériel spécifique (lunette spécial addiction) permettant de
            ressentir les méfaits d'une addiction sur le corps humain
          </ObjectiveItem>
        </ObjectivesColumn>
      </WorkshopObjectives>

      {/* Timeline */}
      <WorkshopTimeline description="Voici comment se déroule notre atelier de sensibilisation aux addictions :">
        <TimelineSteps>
          <TimelineStep icon="play" step={1}>
            Des sessions minutées pour des passages sans perte de temps et d'attention.
          </TimelineStep>
          <TimelineStep icon="settings" step={2}>
            Des comparatifs de scores entre les parties sans et sous effet grâce à des lunettes de simulation.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={3}>
            Du fun et des rires pour faire passer votre message de prévention de manière efficace et originale.
          </TimelineStep>
        </TimelineSteps>
      </WorkshopTimeline>

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
