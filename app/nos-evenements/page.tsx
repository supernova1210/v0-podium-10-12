import type { Metadata } from "next"
import EvenementHero from "@/components/evenement/evenement-hero"
import { EvenementsHubCards, EvenementsHubDetails, EvenementsConfiance } from "@/components/evenement/evenements-hub-sections"
import FormationFAQ from "@/components/formation/formation-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"

export const metadata: Metadata = {
  title: "Journée Sécurité, RSE et Séminaire Lyon & Rhône-Alpes",
  description:
    "Podium organise vos journées sécurité, journées RSE et séminaires d'entreprise à Lyon et en Rhône-Alpes. Ateliers sur mesure, formats modulables, intervention dans vos locaux. Devis gratuit.",
  alternates: {
    canonical: "https://www.ofpodium.fr/nos-evenements",
  },
  openGraph: {
    title: "Journée Sécurité, RSE et Séminaire Lyon & Rhône-Alpes | Podium",
    description:
      "Journées sécurité, RSE et séminaires d'entreprise sur mesure à Lyon et en Rhône-Alpes. Ateliers interactifs, formats modulables.",
    url: "https://www.ofpodium.fr/nos-evenements",
    type: "website",
  },
}

const faqData = [
  {
    question: "Pourquoi organiser un événement journée sécurité ?",
    answer:
      "Organiser une journée sécurité permet de sensibiliser et d'impliquer concrètement vos équipes aux enjeux de la sécurité au travail. C'est l'occasion de renforcer la culture de prévention, de partager les bonnes pratiques, de former aux gestes qui sauvent et de créer un dialogue constructif pour un environnement de travail plus sûr.",
  },
  {
    question: "Pourquoi organiser une journée RSE ?",
    answer:
      "Une journée RSE permet de mobiliser et d'engager vos collaborateurs autour des valeurs de responsabilité sociétale de votre entreprise. Elle permet de sensibiliser aux impacts environnementaux et sociaux, de présenter vos initiatives, de favoriser l'échange et la participation, et de renforcer votre image auprès de vos parties prenantes.",
  },
  {
    question: "Y a-t-il un réel impact à ludifier une journée de travail en séminaire ?",
    answer:
      "Oui, l'impact est significatif. La ludification (utilisation d'éléments de jeu) rend l'apprentissage et la participation plus engageants, mémorables et motivants. Dans un séminaire, des formats ludiques favorisent l'interaction, la créativité, la résolution de problèmes en équipe et une meilleure assimilation des messages clés.",
  },
  {
    question: "Peut-on adapter le format en demi-journée ?",
    answer:
      "Oui, tout à fait. Nous ajustons le nombre d'ateliers et les contenus selon le temps disponible. Une demi-journée permet déjà de couvrir plusieurs thématiques (sécurité, RSE, cohésion) de façon structurée et impactante.",
  },
  {
    question: "Est-ce que je dois trouver le lieu ou est-ce que Podium s'en occupe ?",
    answer:
      "Nous intervenons en priorité dans vos locaux, ce qui simplifie la logistique et renforce l'ancrage terrain. Si vous préférez un lieu externe, nous pouvons vous orienter vers des partenaires à Lyon et en Rhône-Alpes, ou effectuer un repérage selon vos souhaits.",
  },
  {
    question: "Comment se déroule la préparation de l'événement ?",
    answer:
      "Après un premier échange sur vos objectifs et vos contraintes, Podium vous soumet un programme sur mesure avec un planning détaillé. Nous co-construisons le contenu avec vous, puis nous prenons en charge l'animation et la logistique le jour J.",
  },
  {
    question: "Combien de personnes peuvent participer à un événement ?",
    answer:
      "Pas de limite. Que vous soyez une dizaine ou plusieurs centaines de collaborateurs, nous adaptons le format, le nombre d'intervenants et l'organisation des rotations pour garantir une expérience fluide et de qualité pour chacun.",
  },
  {
    question: "Podium organise-t-il des événements à Lyon et en Rhône-Alpes ?",
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

export default function NosEvenementsPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <EvenementHero
        eyebrow="Nos événements · Rhône-Alpes"
        titlePre="Journées Sécurité, RSE et"
        titleHighlight="séminaires"
        titleSuffix="pour vos équipes"
        lead="Des événements interactifs conçus pour renforcer l'esprit d'équipe, développer les compétences et ancrer durablement les bons réflexes."
        description="Journée complète, demi-journée ou semaine entière : chaque événement est construit sur mesure autour de vos enjeux, avec des ateliers ludiques et un coordinateur présent le jour J."
        regionLine="Podium intervient à Lyon, Grenoble, Annecy, Chambéry, Valence et dans toute la région Rhône-Alpes, dans vos locaux ou dans le lieu de votre choix."
        stats={[
          { n: "4", l: "formats d'événements" },
          { n: "100%", l: "sur-mesure" },
          { n: "0", l: "limite de participants" },
        ]}
        images={[
          { src: "/images/podium-photo-hero-evenement-1.jpg", alt: "Événement d'entreprise animé par Podium" },
          { src: "/images/journee-securite-evenement-podium.jpg", alt: "Journée sécurité en entreprise" },
          { src: "/images/seminaire-min.jpg", alt: "Séminaire d'entreprise participatif" },
        ]}
      />
      <EvenementsHubCards />
      <EvenementsHubDetails />
      <EvenementsConfiance />
      <FormationFAQ faqData={faqData} />
      <ContactezNousSection />
    </main>
  )
}
