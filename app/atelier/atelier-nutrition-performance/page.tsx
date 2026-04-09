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

export default function AtelierNutritionPerformancePage() {
  return (
    <main>
      {/* Hero Section */}
      <WorkshopHero>
        <HeroContent>
          <HeroText>
            <AtelierLabel>ATELIER QVT</AtelierLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight break-words max-w-full">
              Nutrition et performance
            </h1>

            <BadgesGrid>
              <Badge icon="clock">
                <div>
                  <div className="font-semibold text-blue-950">Durée</div>
                  <div className="text-gray-600">45 à 60 min</div>
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
              Un atelier concret et ludique pour comprendre l’impact de l’alimentation, corriger ses habitudes et construire une assiette équilibrée adaptée à son rythme de travail.
            </p>

            <HeroButtons>
              <PodiumButton variant="primary" href="/contact">
                Réserver mon atelier
              </PodiumButton>
              <PodiumButton variant="secondary" href="/documents/atelier-nutrition-performance-v2.pdf" target="_blank">
                Télécharger le programme
              </PodiumButton>
            </HeroButtons>
          </HeroText>

          <HeroImage
            src="/images/atelier-nutrition-performance-v2.jpg"
            alt="Participants dans un atelier de gestion du stress apprenant des techniques de confiance"
          />
        </HeroContent>
      </WorkshopHero>

      {/* Objectives & Methods */}
      <WorkshopObjectives>
        <ObjectivesColumn title="Objectifs" icon="target">
          <ObjectiveItem>
            Comprendre les impacts de l’alimentation et de l’hydratation sur l’énergie, la concentration et la sécurité.
          </ObjectiveItem>
          <ObjectiveItem>
            Identifier les erreurs alimentaires fréquentes liées aux rythmes décalés.
          </ObjectiveItem>
          <ObjectiveItem>
            Construire une assiette équilibrée et adaptée à son rythme de travail.
          </ObjectiveItem>
          <ObjectiveItem>
            Expérimenter des actions simples à mettre en place dès le lendemain
          </ObjectiveItem>
        </ObjectivesColumn>

        <ObjectivesColumn title="Modalités pédagogiques" icon="book">
          <ObjectiveItem type="method">
            Approche ludique et participative : quiz express, jeu de cartes « compose ton assiette », mini-défis en équipe.
          </ObjectiveItem>
          <ObjectiveItem type="method">Pédagogie active : échanges de pratiques, mises en situation, visualisation collective.</ObjectiveItem>
        </ObjectivesColumn>
      </WorkshopObjectives>

      {/* Timeline */}
      <WorkshopTimeline>
        <TimelineSteps>
          <TimelineStep icon="play" step={1}>
            Accueil dynamique : mini-jeu « Vrai ou faux sur l’alimentation ». Puis mini-échauffement “Réveil corporel” pour se mettre en mouvement.
          </TimelineStep>
          <TimelineStep icon="play" step={2}>
            Animation “Le Top 5 anti-coup de barre” : chaque équipe classe 5 habitudes selon leur impact sur l’énergie.
          </TimelineStep>
          <TimelineStep icon="message-circle" step={3}>
            En binômes, les participants choisissent parmi des cartes aliments pour composer un repas adapté à leur horaire (matin, nuit, journée).
          </TimelineStep>
          <TimelineStep icon="message-circle" step={3}>
            Débrief collectif : quels choix ? pourquoi ? Chaque participant écrit son “Top 3 énergie” : 3 actions concrètes à tester dès demain. 
          </TimelineStep>
        </TimelineSteps>
      </WorkshopTimeline>

      {/* Contact CTA */}
      <ContactezNousSection />
    </main>
  )
}
