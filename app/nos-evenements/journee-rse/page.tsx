import type { Metadata } from "next"
import EvenementHero from "@/components/evenement/evenement-hero"
import EvenementAtouts from "@/components/evenement/evenement-atouts"
import EvenementAteliers from "@/components/evenement/evenement-ateliers"
import EvenementBenefices from "@/components/evenement/evenement-benefices"
import EvenementLocalNav from "@/components/evenement/evenement-local-nav"
import FormationFAQ from "@/components/formation/formation-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"

export const metadata: Metadata = {
  title: "Journée RSE entreprise Lyon & Rhône-Alpes",
  description:
    "Podium organise votre journée RSE en entreprise à Lyon et en Rhône-Alpes. Ateliers collaboratifs sur mesure pour engager vos équipes dans une démarche de responsabilité sociétale.",
  alternates: {
    canonical: "https://www.ofpodium.fr/nos-evenements/journee-rse",
  },
  openGraph: {
    title: "Journée RSE entreprise Lyon & Rhône-Alpes | Podium",
    description:
      "Journée RSE sur mesure pour vos équipes à Lyon et en Rhône-Alpes. Ateliers collaboratifs, formats modulables, intervention dans vos locaux.",
    url: "https://www.ofpodium.fr/nos-evenements/journee-rse",
    type: "website",
  },
}

const faqData = [
  {
    question: "Qu'est-ce qu'une journée RSE en entreprise ?",
    answer:
      "Une journée RSE est un événement organisé dans vos locaux pour mobiliser vos équipes autour des enjeux de responsabilité sociétale. Elle combine ateliers participatifs, mises en situation et temps d'échange pour sensibiliser vos collaborateurs aux impacts environnementaux et sociaux de l'entreprise.",
  },
  {
    question: "Quels ateliers peut-on intégrer à une journée RSE ?",
    answer:
      "Podium propose des ateliers adaptés aux thématiques RSE : sensibilisation au handicap, bien-être au travail, cohésion d'équipe, gestes éco-responsables, etc. Nous construisons le programme en fonction de vos priorités et de votre secteur d'activité.",
  },
  {
    question: "La journée RSE est-elle adaptable en demi-journée ?",
    answer:
      "Oui, tout à fait. Nous ajustons le contenu et le nombre d'ateliers selon le temps disponible. Une demi-journée permet déjà de traiter plusieurs thématiques RSE de façon concrète et engageante.",
  },
  {
    question: "Combien de personnes peuvent participer à une journée RSE ?",
    answer:
      "Tous les formats sont possibles. Que vous soyez une petite équipe ou plusieurs centaines de collaborateurs, nous adaptons l'organisation et prévoyons des rotations pour garantir une expérience de qualité à chacun.",
  },
  {
    question: "Podium organise-t-il des journées RSE à Lyon et en Rhône-Alpes ?",
    answer:
      "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse et les environs. Nous venons directement dans vos locaux avec tout le matériel nécessaire.",
  },
  {
    question: "Comment organiser une journée RSE avec Podium ?",
    answer:
      "Contactez-nous via notre formulaire ou au 07 70 00 36 72. Nous échangeons sur vos objectifs et vos contraintes, puis nous vous proposons un programme sur mesure. Devis gratuit sous 12h.",
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
  { id: "journee-rse", label: "La journée", icon: "sparkles" },
  { id: "format", label: "Format", icon: "route" },
  { id: "ateliers-rse", label: "Ateliers", icon: "grid" },
  { id: "benefices", label: "Bénéfices", icon: "trending" },
  { id: "contact", label: "Contact", icon: "phone" },
]

export default function JourneeRsePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <EvenementLocalNav items={navItems} />
      <div id="journee-rse" className="scroll-mt-52">
        <EvenementHero
          eyebrow="Journée RSE · Rhône-Alpes"
          titlePre="La journée"
          titleHighlight="RSE"
          lead="Engagez vos équipes dans une démarche RSE impactante et collaborative."
          description="Organisez une journée RSE interactive et inspirante pour sensibiliser, mobiliser et fédérer vos collaborateurs autour des enjeux de responsabilité sociétale."
          regionLine="Podium intervient à Lyon, Grenoble, Annecy, Chambéry, Valence et dans toute la région Rhône-Alpes, directement dans vos locaux."
          stats={[
            { n: "100%", l: "sur-mesure" },
            { n: "12h", l: "devis garanti" },
            { n: "0", l: "limite de participants" },
          ]}
          images={[
            { src: "/images/atelier-sensibilisation-handicap-auditif.png", alt: "Atelier de sensibilisation au handicap en journée RSE" },
            { src: "/images/atelier-sensibiliser-handicap-visuel-1.jpg", alt: "Atelier immersif handicap visuel" },
            { src: "/images/atelier-cohesion-min.jpg", alt: "Atelier de cohésion d'équipe" },
          ]}
          floatTitle="Avec l'Agence Déclic"
          floatSubtitle="votre journée RSE de A à Z"
        />
      </div>
      <div id="format" className="scroll-mt-52">
        <EvenementAtouts
          title="Pourquoi travailler avec Podium ?"
          description="Transformez votre journée RSE en un événement marquant et fédérateur. Nos ateliers ludiques, immersifs et personnalisés créent un vrai déclic chez vos équipes : vous sensibilisez efficacement tout en renforçant la cohésion et l'engagement."
          items={[
            { icon: "/images/Picto_cocher.png", title: "Ancrer la RSE", alt: "Icône ancrer la RSE" },
            { icon: "/images/Pictogrammes_RSE.png", title: "Renforcer l'engagement", alt: "Icône renforcer l'engagement" },
            { icon: "/images/Picto_Safety.png", title: "Valoriser son image", alt: "Icône valoriser son image" },
          ]}
        />
      </div>
      <div id="ateliers-rse" className="scroll-mt-52">
        <EvenementAteliers
          title="Top 4 de nos ateliers en journée RSE"
          subtitle="Découvrez notre sélection d'ateliers spécifiquement adaptés pour une journée RSE."
          slugs={[
            "gestion-des-emotions-sophrologie",
            "prevention-sante-mentale",
            "sensibiliser-au-handicap",
            "sensibiliser-au-handicap-visuel",
          ]}
        />
      </div>
      <div id="benefices" className="scroll-mt-52">
        <EvenementBenefices
          title="Les bénéfices pour votre entreprise & vos collaborateurs"
          columns={[
            {
              header: "Pour votre entreprise",
              accent: "navy",
              items: [
                {
                  id: "entreprise-1",
                  icon: "target",
                  title: "Expertise et solutions RSE clés en main",
                  description:
                    "O.F PODIUM et l'Agence Déclic conçoivent votre journée RSE de A à Z : sélection des ateliers, logistique, animation et bilan. Vous obtenez une journée alignée avec vos objectifs de développement durable, sans charge organisationnelle pour vos équipes. Nous intervenons à Lyon et dans toute la région Rhône-Alpes.",
                },
                {
                  id: "entreprise-2",
                  icon: "award",
                  title: "Renforcement de l'image et de la marque employeur",
                  description:
                    "Organiser une journée RSE avec des partenaires spécialisés, c'est démontrer un engagement concret et crédible. Cela renforce votre attractivité auprès des talents, clients et partenaires, et contribue à votre démarche de responsabilité sociétale d'entreprise.",
                },
                {
                  id: "entreprise-3",
                  icon: "users",
                  title: "Mobilisation et engagement des équipes facilités",
                  description:
                    "Les ateliers RSE de Podium sont conçus pour susciter l'adhésion, pas la contrainte. Fresque du climat, sensibilisation au handicap, tri des déchets, mobilité durable : des formats ludiques et participatifs qui ancrent une vraie culture responsable dans vos équipes.",
                },
              ],
            },
            {
              header: "Pour vos collaborateurs",
              accent: "jaune",
              items: [
                {
                  id: "collaborateurs-1",
                  icon: "lightbulb",
                  title: "Sensibilisation concrète et ludique aux enjeux RSE",
                  description:
                    "Les ateliers permettent à chaque collaborateur de toucher du doigt les enjeux environnementaux et sociaux qui concernent leur quotidien professionnel. La pédagogie active remplace les discours : on comprend mieux ce qu'on a vécu.",
                },
                {
                  id: "collaborateurs-2",
                  icon: "handheart",
                  title: "Opportunité d'agir et de contribuer positivement",
                  description:
                    "Une journée RSE bien animée transforme les intentions en engagement. Vos collaborateurs repartent avec des réflexes concrets, une meilleure compréhension des enjeux et le sentiment de faire partie d'une entreprise qui agit vraiment.",
                },
                {
                  id: "collaborateurs-3",
                  icon: "heart",
                  title: "Renforcement du lien social et de la cohésion",
                  description:
                    "Les ateliers collectifs organisés par O.F PODIUM et l'Agence Déclic sont aussi des moments de partage et de coopération. Ils renforcent les liens entre collègues, favorisent le dialogue et contribuent à une meilleure qualité de vie au travail.",
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
