import type { Metadata } from "next"
import EvenementHero from "@/components/evenement/evenement-hero"
import EvenementAtouts from "@/components/evenement/evenement-atouts"
import EvenementEtapesStacking from "@/components/evenement/evenement-etapes-stacking"
import EvenementAteliers from "@/components/evenement/evenement-ateliers"
import EvenementBenefices from "@/components/evenement/evenement-benefices"
import EvenementLocalNav from "@/components/evenement/evenement-local-nav"
import FormationFAQ from "@/components/formation/formation-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"

export const metadata: Metadata = {
  title: "Journée Sécurité entreprise Lyon & Rhône-Alpes",
  description:
    "Podium organise votre journée sécurité en entreprise à Lyon et en Rhône-Alpes. Ateliers de prévention sur mesure, sensibilisation ludique, intervention dans vos locaux. Devis gratuit.",
  alternates: {
    canonical: "https://www.ofpodium.fr/nos-evenements/journee-securite",
  },
  openGraph: {
    title: "Journée Sécurité entreprise Lyon & Rhône-Alpes | Podium",
    description:
      "Journée sécurité sur mesure pour vos équipes à Lyon et en Rhône-Alpes. Ateliers de prévention interactifs, intervention dans vos locaux.",
    url: "https://www.ofpodium.fr/nos-evenements/journee-securite",
    type: "website",
  },
}

const faqData = [
  {
    question: "Qu'est-ce qu'une journée sécurité en entreprise ?",
    answer:
      "Une journée sécurité est un événement organisé dans vos locaux pour sensibiliser vos équipes aux enjeux de la prévention et de la sécurité au travail. Elle réunit ateliers pratiques, mises en situation et formats ludiques pour ancrer durablement les bons réflexes.",
  },
  {
    question: "Quels ateliers de prévention peut-on intégrer à la journée ?",
    answer:
      "Podium propose une large sélection d'ateliers : escape game sécurité, gestes et postures, mur des addictions, secourir sans panique, sensibilisation au handicap, réveil musculaire et bien d'autres. Nous construisons le programme selon vos priorités et votre secteur.",
  },
  {
    question: "Peut-on adapter le format en demi-journée ?",
    answer:
      "Oui, tout à fait. Nous ajustons le nombre d'ateliers et le contenu selon le temps disponible. Une demi-journée permet déjà de couvrir plusieurs thématiques de prévention de façon efficace.",
  },
  {
    question: "Combien de participants peuvent prendre part à la journée sécurité ?",
    answer:
      "Pas de limite. Que vous soyez une petite équipe ou plusieurs centaines de collaborateurs, nous organisons des rotations pour que tout le monde participe dans les meilleures conditions.",
  },
  {
    question: "Podium organise-t-il des journées sécurité à Lyon et en Rhône-Alpes ?",
    answer:
      "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse et les environs. Nous venons directement dans vos locaux avec tout le matériel nécessaire.",
  },
  {
    question: "Comment organiser une journée sécurité avec Podium ?",
    answer:
      "Contactez-nous via notre formulaire ou au 07 70 00 36 72. Nous échangeons sur vos objectifs, vos équipes et vos contraintes, puis nous vous proposons un programme sur mesure. Devis gratuit sous 12h.",
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
  { id: "journee-securite", label: "La journée", icon: "shield" },
  { id: "format", label: "Format", icon: "sparkles" },
  { id: "etapes", label: "Étapes", icon: "route" },
  { id: "ateliers-securite", label: "Ateliers", icon: "grid" },
  { id: "benefices", label: "Bénéfices", icon: "trending" },
  { id: "contact", label: "Contact", icon: "phone" },
]

export default function JourneeSecuritePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <EvenementLocalNav items={navItems} />
      <div id="journee-securite" className="scroll-mt-52">
        <EvenementHero
          eyebrow="Journée Sécurité · Rhône-Alpes"
          titlePre="La journée"
          titleHighlight="sécurité"
          lead="Boostez la sécurité et la cohésion de vos équipes en une seule journée."
          description="Organisez une journée sécurité interactive et sur-mesure pour sensibiliser, impliquer et souder vos collaborateurs autour des bons réflexes prévention."
          regionLine="Podium intervient à Lyon, Grenoble, Annecy, Chambéry, Valence et dans toute la région Rhône-Alpes, directement dans vos locaux."
          pdfHref="/documents/fiche-presentation-journee-securite.pdf"
          stats={[
            { n: "100%", l: "sur-mesure" },
            { n: "12h", l: "devis garanti" },
            { n: "0", l: "limite de participants" },
          ]}
          images={[
            { src: "/images/journee-securite-evenement-podium.jpg", alt: "Journée sécurité en entreprise animée par Podium" },
            { src: "/images/mur-digital-addiction.jpg", alt: "Atelier interactif de prévention avec mur digital des addictions" },
            { src: "/images/atelier-sst-podium-securite.jpg", alt: "Atelier de prévention sécurité au travail" },
          ]}
          floatTitle="Coordinateur dédié"
          floatSubtitle="présent le jour J"
        />
      </div>
      <div id="format" className="scroll-mt-52">
        <EvenementAtouts
          title="Pourquoi travailler avec Podium ?"
          description="Transformez votre journée sécurité en un événement marquant et fédérateur. Nos ateliers ludiques, immersifs et personnalisés créent un vrai déclic chez vos équipes : vous sensibilisez efficacement tout en renforçant la cohésion et l'engagement."
          items={[
            { icon: "/images/Picto_Evolution.png", title: "Expérience", alt: "Icône expérience" },
            { icon: "/images/picto-participants.png", title: "Accompagnement", alt: "Icône accompagnement" },
            { icon: "/images/picto-cartes.png", title: "Innovation", alt: "Icône innovation" },
            { icon: "/images/picto-de.png", title: "Ludique", alt: "Icône ludique" },
          ]}
        />
      </div>
      <div id="etapes" className="scroll-mt-52">
        <EvenementEtapesStacking
          title="Les étapes"
          subtitle="Notre processus en trois étapes pour organiser votre journée sécurité sur mesure."
          steps={[
            {
              icon: "message",
              color: "#FFD25D",
              title: "Brief client",
              subtitle: "On écoute. Vraiment.",
              description:
                "Nous échangeons en visio ou en présentiel sur vos objectifs, votre contexte et vos attentes. C'est l'étape clé pour vous proposer un événement sur-mesure et impactant.",
            },
            {
              icon: "lightbulb",
              color: "#57B3B7",
              iconColor: "#FFFFFF",
              title: "Conception & ajustements",
              subtitle: "On pense à tout pour que tout roule.",
              description:
                "Nous concevons un programme adapté à votre entreprise, en mobilisant nos partenaires et en anticipant tous les aspects logistiques.",
            },
            {
              icon: "check",
              color: "#C9426B",
              iconColor: "#FFFFFF",
              title: "Journée & évaluation",
              subtitle: "Le jour J, vous profitez. On s'occupe de tout.",
              description:
                "Notre coordinateur est présent sur place pour gérer l'événement. Après la journée, nous débriefons ensemble pour mesurer l'impact.",
            },
          ]}
          ctaLabel="Organiser votre journée sécurité"
        />
      </div>
      <div id="ateliers-securite" className="scroll-mt-52">
        <EvenementAteliers
          title="Top 4 de nos ateliers en journée sécurité"
          subtitle="Découvrez notre sélection d'ateliers spécifiquement adaptés pour une journée sécurité."
          slugs={["atelier-bulle-oxygene", "le-mur-des-addictions", "quiz-sur-mesure", "reveil-musculaire-ludique"]}
        />
      </div>
      <div id="benefices" className="scroll-mt-52">
        <EvenementBenefices
          title="Impacts positifs et approche novatrice"
          columns={[
            {
              header: "Les impacts positifs d'une approche novatrice",
              accent: "navy",
              items: [
                {
                  id: "entreprise-1",
                  icon: "target",
                  title: "Engagement renforcé",
                  description:
                    "Les ateliers de prévention Podium sont conçus pour sortir vos équipes de la passivité. Escape game sécurité, mises en situation, challenges collectifs : chaque format capte l'attention et crée une vraie participation.",
                },
                {
                  id: "entreprise-2",
                  icon: "award",
                  title: "Changement des comportements",
                  description:
                    "Une journée sécurité efficace ne se résume pas à des diapositives. En vivant les situations, vos collaborateurs intègrent les bons réflexes de prévention des risques professionnels de façon naturelle et durable.",
                },
                {
                  id: "entreprise-3",
                  icon: "brain",
                  title: "Mémorisation durable",
                  description:
                    "Le cerveau retient ce qu'il a vécu. En combinant l'action, l'émotion et le collectif, nos ateliers de sensibilisation à la sécurité au travail ancrent les messages bien au-delà d'une simple formation théorique.",
                },
                {
                  id: "entreprise-4",
                  icon: "trophy",
                  title: "Image employeur boostée",
                  description:
                    "Organiser une journée sécurité sur mesure, c'est aussi envoyer un signal fort à vos collaborateurs sur votre engagement QVCT. Un investissement visible, apprécié, et qui renforce l'attractivité de l'entreprise.",
                },
              ],
            },
            {
              header: "Nos approches pédagogiques",
              accent: "jaune",
              items: [
                {
                  id: "collaborateurs-1",
                  icon: "lightbulb",
                  title: "Sortez des sentiers battus",
                  description:
                    "Nos journées sécurité n'ont rien d'une conférence classique. Escape game, mur des addictions, réveil musculaire, secourir sans panique : des formats inattendus qui marquent les esprits et donnent envie de participer.",
                },
                {
                  id: "collaborateurs-2",
                  icon: "handheart",
                  title: "Intervenants experts",
                  description:
                    "Chaque atelier est animé par un professionnel formé à la prévention des risques. Podium intervient à Lyon, Grenoble, Annecy, Chambéry, Valence et dans toute la région Rhône-Alpes, directement dans vos locaux.",
                },
                {
                  id: "collaborateurs-3",
                  icon: "dumbbell",
                  title: "Le sport comme levier",
                  description:
                    "L'activité physique favorise la prise de conscience corporelle, réduit les TMS et renforce la cohésion d'équipe. Chez Podium, le mouvement est un outil de prévention à part entière, pas un simple bonus.",
                },
                {
                  id: "collaborateurs-4",
                  icon: "puzzle",
                  title: "Jeux & challenges",
                  description:
                    "Quiz sur les risques professionnels, épreuves en équipe, défis pratiques : la sensibilisation à la sécurité au travail devient un moment concret, vivant et ancré dans la réalité de vos équipes.",
                },
              ],
            },
          ]}
        />
      </div>
      <FormationFAQ faqData={faqData} />
      <div id="contact" className="scroll-mt-52">
        <ContactezNousSection />
      </div>
    </main>
  )
}
