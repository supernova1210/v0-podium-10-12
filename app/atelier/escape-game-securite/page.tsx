import type { Metadata } from "next"
import AtelierHero from "@/components/atelier/atelier-hero"
import AtelierApproche from "@/components/atelier/atelier-approche"
import AtelierProgramme from "@/components/atelier/atelier-programme"
import { ContactezNousSection } from "@/components/contactez-nous-section"

export const metadata: Metadata = {
  title: "Escape Game Sécurité en entreprise",
  description:
    "Un escape game connecté sur la sécurité au travail : défis en équipe, prévention des risques et cohésion. Animé sur site à Lyon et en Rhône-Alpes.",
  alternates: { canonical: "/atelier/escape-game-securite" },
}

export default function EscapeGameSecuritePage() {
  return (
    <main>
      <AtelierHero
        accent="jaune"
        eyebrow="Atelier Sécurité"
        titlePrefix="Escape Game"
        titleHighlight="Sécurité"
        description="Un jeu connecté sur la sécurité au travail où les équipes relèvent des défis variés à travers une application interactive. Un classement en temps réel maintient l'engagement et la compétitivité tout au long de l'événement."
        badges={[
          { icon: "/images/picto-temps.png", label: "Animation", value: "60 à 75 min" },
          { icon: "/images/picto-participants.png", label: "Équipes de", value: "4 à 6 participants" },
          { icon: "/images/picto-zone.png", label: "Lieu", value: "Intérieur de préférence" },
        ]}
        image="/images/escape-game-atelier-podium.jpg"
        imageAlt="Escape Game Sécurité, jeu connecté en entreprise"
      />
      <AtelierApproche
        accent="jaune"
        headingPre="Environ 40 défis, un classement en direct :"
        headingHighlight="la prévention devient une compétition."
        paragraphs={[
          "Chaque équipe se connecte à l'application et enchaîne les défis sur la sécurité au travail : réponses écrites, chiffrées, photos, QCM. Tous les défis n'ont pas vocation à être résolus, ce qui pousse aux choix stratégiques et à la priorisation.",
          "Le classement évolue en temps réel et maintient l'engagement jusqu'au débriefing final, encadré par un référent maître du temps et des animateurs accompagnants.",
        ]}
        stats={[
          { n: "40", l: "défis environ" },
          { n: "60-75", l: "minutes d'animation" },
          { n: "5-100", l: "participants" },
        ]}
      />
      <AtelierProgramme
        accent="jaune"
        subtitle="Un jeu connecté sur la sécurité au travail où les équipes relèvent des défis variés à travers une application interactive."
        objectifs={[
          "Sensibiliser aux enjeux de sécurité et de bien-être au travail de manière ludique et interactive.",
          "Encourager le travail d'équipe et la prise de décision stratégique.",
          "Créer une dynamique compétitive saine qui maintient l'engagement des participants tout au long de l'animation.",
        ]}
        deroule={[
          "Connexion des équipes : chaque participant reçoit un smartphone de jeu (ou accède via QR code) pour se connecter à l'application.",
          "Résolution de défis variés : les équipes répondent aux questions et énigmes dans l'ordre qu'elles souhaitent, avec différents formats de réponse (texte, chiffres, photos, QCM).",
          "Classement dynamique : le classement évolue en continu, permettant aux équipes de remonter au fur et à mesure de leurs participations.",
          "Débriefing final : retour sur les thématiques abordées et annonce des équipes gagnantes dans une ambiance conviviale et engageante.",
        ]}
        methodes={[
          "Application interactive avec environ 40 défis sur smartphone (réponses écrites, chiffrées, photos, QCM).",
          "Classement en temps réel qui évolue tout au long de l'événement pour maintenir la compétitivité.",
          "Flexibilité : tous les défis n'ont pas vocation à être résolus, encourageant les choix stratégiques et la priorisation.",
          "Encadrement professionnel avec un référent maître du temps et des animateurs accompagnants.",
        ]}
        espace="En intérieur de préférence, dans vos locaux"
        modalites={[
          { icon: "/images/picto_interactif.png", title: "Atelier", subtitle: "intra-entreprise" },
          { icon: "/images/picto-temps.png", title: "Durée", subtitle: "60 à 75 min" },
          { icon: "/images/picto-participants.png", title: "Équipes", subtitle: "de 4 à 6 participants" },
          { icon: "/images/picto_prix.png", title: "Sur devis", subtitle: "tarif adapté" },
        ]}
        pdfHref="/documents/programme-atelier-escape-game.pdf"
      />
      <ContactezNousSection />
    </main>
  )
}
