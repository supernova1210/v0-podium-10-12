import type { Metadata } from "next"
import EvenementHero from "@/components/evenement/evenement-hero"
import EvenementAtouts from "@/components/evenement/evenement-atouts"
import EvenementEtapesStacking from "@/components/evenement/evenement-etapes-stacking"
import EvenementAteliers from "@/components/evenement/evenement-ateliers"
import EvenementLocalNav from "@/components/evenement/evenement-local-nav"
import FormationFAQ from "@/components/formation/formation-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"

export const metadata: Metadata = {
  title: "Séminaire d'entreprise Lyon & Rhône-Alpes",
  description:
    "Podium organise votre séminaire d'entreprise à Lyon et en Rhône-Alpes. Journée participative et apprenante sur mesure : ateliers ludiques, cohésion d'équipe, formats modulables.",
  alternates: {
    canonical: "https://www.ofpodium.fr/nos-evenements/journee-seminaire",
  },
  openGraph: {
    title: "Séminaire d'entreprise Lyon & Rhône-Alpes | Podium",
    description:
      "Séminaire d'entreprise sur mesure à Lyon et en Rhône-Alpes. Journées participatives et apprenantes pour renforcer la cohésion de vos équipes.",
    url: "https://www.ofpodium.fr/nos-evenements/journee-seminaire",
    type: "website",
  },
}

const faqData = [
  {
    question: "La journée séminaire est-elle adaptable à notre organisation ?",
    answer:
      "Oui, totalement. Chaque journée est conçue sur mesure selon vos objectifs, vos contraintes et le format qui vous convient (demi-journée, journée complète, en intérieur ou en extérieur). Vous définissez le rythme et les temps forts.",
  },
  {
    question: "Quels types d'ateliers peut-on intégrer à la journée séminaire ?",
    answer:
      "Vous choisissez parmi une large palette d'ateliers ludiques et participatifs : bien-être, posture, communication, cohésion, sécurité, nutrition, etc. Nous vous aidons à construire un programme cohérent et adapté à votre public.",
  },
  {
    question: "Combien de participants peut-on accueillir lors d'un séminaire ?",
    answer:
      "Les formats sont flexibles. Que vous soyez une petite équipe ou un grand groupe, nous adaptons l'organisation, le matériel et le nombre d'intervenants pour garantir une expérience fluide et dynamique à chacun.",
  },
  {
    question: "Faut-il un lieu spécifique pour organiser le séminaire ?",
    answer:
      "Pas nécessairement. Nous intervenons aussi bien dans vos locaux que sur des sites extérieurs, salles de séminaires ou espaces atypiques. Nous pouvons également vous aider à trouver un lieu adapté.",
  },
  {
    question: "Podium organise-t-il des séminaires d'entreprise à Lyon et en Rhône-Alpes ?",
    answer:
      "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse et les environs. Nous nous déplaçons dans vos locaux ou dans le lieu de votre choix.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

const navItems = [
  { id: "journee-seminaire", label: "La journée", icon: "sparkles" },
  { id: "format", label: "Format", icon: "calendar" },
  { id: "etapes", label: "Étapes", icon: "route" },
  { id: "ateliers-seminaire", label: "Ateliers", icon: "grid" },
  { id: "contact", label: "Contact", icon: "phone" },
]

export default function JourneeSeminairePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <EvenementLocalNav items={navItems} />
      <div id="journee-seminaire" className="scroll-mt-52">
        <EvenementHero
          eyebrow="Journée Séminaire · Rhône-Alpes"
          titlePre="La journée"
          titleHighlight="séminaire"
          lead="Faites de votre séminaire d'entreprise un moment utile, vivant et inspirant."
          description="Avec Podium, votre journée de travail devient bien plus qu'une succession de réunions : une expérience collective, dynamique et enrichissante, où chaque temps fort renforce la cohésion d'équipe, favorise la prise de parole et redonne du sens au travail ensemble."
          regionLine="Podium intervient à Lyon, Grenoble, Annecy, Chambéry, Valence et dans toute la région Rhône-Alpes, dans vos locaux ou dans le lieu de votre choix."
          pdfHref="/documents/fiche-presentation-journee-seminaire.pdf"
          stats={[
            { n: "100%", l: "sur-mesure" },
            { n: "12h", l: "devis garanti" },
            { n: "0", l: "limite de participants" },
          ]}
          images={[
            { src: "/images/seminaire-2-min.jpg", alt: "Séminaire d'entreprise animé par Podium" },
            { src: "/images/seminaire-podium-1.jpg", alt: "Atelier collectif en séminaire" },
            { src: "/images/seminaire-podium-2.jpg", alt: "Temps fort de cohésion en séminaire" },
          ]}
          floatTitle="Rythme cadencé"
          floatSubtitle="une journée qui donne de l'énergie"
        />
      </div>
      <div id="format" className="scroll-mt-52">
        <EvenementAtouts
          title="Pourquoi travailler avec Podium ?"
          description="Un séminaire d'entreprise réussi, c'est une journée qui fait sens, crée du lien et donne envie d'avancer ensemble. Podium conçoit et anime vos séminaires avec des ateliers sur mesure : cohésion d'équipe, prise de parole, intelligence collective, bien-être au travail. Quand l'animation est vivante et le rythme bien cadencé, chaque participant repart avec plus d'énergie et de motivation."
          items={[
            { icon: "/images/Picto_Evolution.png", title: "Animation de réunion", alt: "Icône animation de réunion" },
            { icon: "/images/picto-participants.png", title: "Rythme de la journée", alt: "Icône rythme de la journée" },
            { icon: "/images/picto-cartes.png", title: "Diversité des ateliers", alt: "Icône diversité des ateliers" },
            { icon: "/images/picto-de.png", title: "Qualité des intervenants", alt: "Icône qualité des intervenants" },
          ]}
        />
      </div>
      <div id="etapes" className="scroll-mt-52">
        <EvenementEtapesStacking
          title="Une journée type"
          subtitle="Du premier café au débrief final, chaque temps fort est préparé et animé pour vos équipes."
          steps={[
            {
              icon: "pencil",
              color: "#FFD25D",
              title: "Préparation",
              subtitle: "On ne laisse rien au hasard.",
              description:
                "Avant même le début de la journée, tout est en place : la salle est installée, le matériel prêt, l'ambiance posée. L'accueil des participants se fait dans la bonne humeur, avec un mot, un café, un sourire.",
            },
            {
              icon: "message",
              color: "#57B3B7",
              iconColor: "#FFFFFF",
              title: "Animation de réunion",
              subtitle: "Pour que la 1ère impression soit la bonne.",
              description:
                "Dès les premiers instants, l'énergie de groupe s'installe. Icebreakers, outils collaboratifs et posture d'animation bienveillante : les participants se sentent impliqués et prêts à contribuer activement.",
            },
            {
              icon: "gamepad",
              color: "#C9426B",
              iconColor: "#FFFFFF",
              title: "Atelier et sensibilisation",
              subtitle: "On fait de ce moment un temps fort.",
              description:
                "Les ateliers ludiques et participatifs permettent d'ancrer les messages autrement. Chaque activité favorise la cohésion, la réflexion collective et la prise de conscience sur des thématiques ciblées.",
            },
            {
              icon: "check",
              color: "#F4B609",
              title: "Clôture de la journée",
              subtitle: "On débriefe, ensemble.",
              description:
                "Un temps d'échange pour valoriser les apprentissages, partager les ressentis et identifier les pistes d'action pour la suite.",
            },
          ]}
          ctaLabel="Organiser votre séminaire"
        />
      </div>
      <div id="ateliers-seminaire" className="scroll-mt-52">
        <EvenementAteliers
          title="Des ateliers ludiques"
          subtitle="Des ateliers interactifs et engageants, conçus pour sensibiliser, former et fédérer vos équipes, en complément parfait d'une journée de travail."
          slugs={["cles-cohesion-equipe", "posture-pro-defi-flash", "quiz-sur-mesure", "atelier-bulle-oxygene"]}
        />
      </div>
      <FormationFAQ faqData={faqData} />
      <div id="contact" className="scroll-mt-52">
        <ContactezNousSection />
      </div>
    </main>
  )
}
