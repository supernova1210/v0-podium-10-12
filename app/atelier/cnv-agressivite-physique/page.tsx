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
  title: "Atelier CNV : gérer l’agressivité physique",
  description: "Un atelier pratique pour poser un cadre, affirmer ses limites et désamorcer les situations tendues sans violence. Animé en entreprise en Rhône-Alpes.",
  alternates: { canonical: "/atelier/cnv-agressivite-physique" },
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
              CNV - Agressivité physique
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
              Un atelier pratique pour apprendre à poser un cadre clair, affirmer ses limites et gérer les situations tendues sans violence, grâce à la posture et au langage corporel.
            </p>

            <HeroButtons>
              <PodiumButton variant="primary" href="/contact">
                Réserver mon atelier
              </PodiumButton>
              <PodiumButton
                variant="secondary"
                href="/documents/atelier-cnv-agressivite-physique-qvt-securite.pdf"
                target="_blank"
              >
                Télécharger le programme
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage
            src="/images/atelier-CNV-agressivite-physique.jpg"
            alt="Participants utilisant des lunettes de simulation d'addiction"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Objectives & Methods */}
      <WorkshopObjectives>
        <ObjectivesColumn title="Objectifs" icon="target">
          <ObjectiveItem>
            Savoir maintenir une posture professionnelle et sécurisante face à une agressivité verbale intense ou oppressante.
          </ObjectiveItem>
          <ObjectiveItem>
            Utiliser les outils de la communication non violente pour poser un cadre clair, poser ses limites et recadrer sans violence, dans des situations à haute intensité émotionnelle.
          </ObjectiveItem>
        </ObjectivesColumn>

        <ObjectivesColumn title="Modalités pédagogiques" icon="book">
          <ObjectiveItem type="method">
            Pédagogie expérientielle : le participant ressent les bienfaits de l’atelier en pratiquant.
          </ObjectiveItem>
          <ObjectiveItem type="method">Apprentissage corporel : l’apprentissage passe par la mobilisation du corps : position, posture, gestes.</ObjectiveItem>
        </ObjectivesColumn>
      </WorkshopObjectives>

      {/* Timeline */}
      <WorkshopTimeline>
        <TimelineSteps>
          <TimelineStep icon="settings" step={1}>
            Mettez-vous deux par deux, face à face : l’un avance lentement vers l’autre, qui l’arrête dès qu’il ressent une gêne liée à la distance ; puis inversez les rôles.
          </TimelineStep>
          <TimelineStep icon="play" step={2}>
            Après un échange collectif sur les ressentis, découvrez les trois zones de distance (zone d’observation, de contact, intime) et les enjeux émotionnels ou de sécurité liés à chacune.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={3}>
            Apprenez et répétez ensuite, en binômes, des postures simples de mise en garde et d’évitement, puis quelques gestes de self-défense de base à utiliser si la zone intime est envahie.
          </TimelineStep>
        </TimelineSteps>
      </WorkshopTimeline>

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
