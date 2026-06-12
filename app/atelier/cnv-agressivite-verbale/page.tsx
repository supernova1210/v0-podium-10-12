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
  title: "Atelier CNV : gérer l’agressivité verbale",
  description: "Jeux de rôle pour comprendre l’agressivité verbale et gérer les conflits avec calme et assertivité. Atelier animé en entreprise, Lyon & Rhône-Alpes.",
  alternates: { canonical: "/atelier/cnv-agressivite-verbale" },
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
              CNV - Agressivité verbale
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
              Un atelier de jeux de rôle pour comprendre l’agressivité verbale et apprendre à gérer les conflits avec calme et assertivité.
            </p>

            <HeroButtons>
              <PodiumButton variant="primary" href="/contact">
                Réserver mon atelier
              </PodiumButton>
              <PodiumButton
                variant="secondary"
                href="/documents/atelier-cnv-agressivite-verbale-qvt-securite.pdf"
                target="_blank"
              >
                Télécharger le programme
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage
            src="/images/atelier-communication-non-violente-CNV-min.jpg"
            alt="Participants utilisant des lunettes de simulation d'addiction"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Objectives & Methods */}
      <WorkshopObjectives>
        <ObjectivesColumn title="Objectifs" icon="target">
          <ObjectiveItem>
            Identifier les mécanismes de l'agressivité verbale en situation professionnelle et développer des outils
            pour y faire face avec calme et assertivité.
          </ObjectiveItem>
          <ObjectiveItem>
            Expérimenter les principes de la communication non violente pour favoriser des échanges professionnels plus
            sereins.
          </ObjectiveItem>
        </ObjectivesColumn>

        <ObjectivesColumn title="Modalités pédagogiques" icon="book">
          <ObjectiveItem type="method">
            Pédagogie active à travers une situation de jeux de rôle (les thèmes abordés ont été transmis préalablement
            par le client)
          </ObjectiveItem>
          <ObjectiveItem type="method">Observation active</ObjectiveItem>
          <ObjectiveItem type="method">Débriefing collectif</ObjectiveItem>
        </ObjectivesColumn>
      </WorkshopObjectives>

      {/* Timeline */}
      <WorkshopTimeline>
        <TimelineSteps>
          <TimelineStep icon="settings" step={1}>
            Formez un groupe de quatre participants : deux joueront le rôle de collaborateurs en conflit selon l’un des
            deux scénarios proposés, les deux autres seront des observateurs actifs.
          </TimelineStep>
          <TimelineStep icon="play" step={2}>
            Menez la scène de manière réaliste pendant quelques minutes, puis identifiez ensemble s’il s’agissait d’une
            négociation possible, aléatoire ou impossible.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={3}>
            Les observateurs prennent ensuite la parole pour analyser le comportement de la personne en position de
            gestion : calme, écoute, empathie, reformulation, posture de solution…
          </TimelineStep>
        </TimelineSteps>
      </WorkshopTimeline>

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
