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
  title: "Semaine QVCT en entreprise Lyon & Rhône-Alpes | Podium",
  description:
    "Podium organise votre semaine QVCT sur mesure à Lyon et en région Auvergne-Rhône-Alpes. Ateliers participatifs, prévention des TMS, bien-être, cohésion d'équipe. Intervention directement dans vos locaux.",
  alternates: {
    canonical: "https://www.ofpodium.fr/nos-evenements/semaine-qvct",
  },
  openGraph: {
    title: "Semaine QVCT en entreprise Lyon & Rhône-Alpes | Podium",
    description:
      "Semaine QVCT sur mesure pour vos équipes à Lyon et en Rhône-Alpes. Ateliers participatifs, prévention des TMS, formats adaptés à vos métiers et vos contraintes.",
    url: "https://www.ofpodium.fr/nos-evenements/semaine-qvct",
    type: "website",
  },
}

const faqData = [
  {
    question: "Pourquoi organiser une semaine de la QVCT en entreprise ?",
    answer:
      "Organisez une semaine de la QVCT pour sensibiliser vos collaborateurs à la qualité de vie et aux conditions de travail, renforcer la prévention et créer des temps d'échange autour de sujets concrets : TMS, stress, bien-être, cohésion, sommeil, nutrition ou communication.",
  },
  {
    question: "Quels ateliers peut-on proposer pendant une semaine QVCT ?",
    answer:
      "Vous pouvez proposer des ateliers sur la prévention des TMS, le réveil musculaire, la gestion du stress, l'hygiène de vie, la cohésion d'équipe, la communication, la santé mentale ou encore les gestes et postures. Chaque atelier peut être adapté à vos métiers et à vos contraintes terrain.",
  },
  {
    question: "Les ateliers QVCT sont-ils adaptés à tous les métiers ?",
    answer:
      "Oui. Nous adaptons vos ateliers selon vos équipes : production, logistique, bureau, management, nettoyage, accueil, terrain ou horaires décalés. L'objectif est de proposer des contenus utiles, concrets et directement liés au quotidien professionnel des participants.",
  },
  {
    question: "Combien de temps dure un atelier QVCT ?",
    answer:
      "La durée varie selon vos objectifs et votre organisation. Un atelier peut durer de 20 minutes à 1h30, en format express, en atelier tournant, en animation collective ou en parcours sur plusieurs jours pendant toute la semaine de la QVCT.",
  },
  {
    question: "Comment organiser une semaine QVCT avec PODIUM ?",
    answer:
      "Echangez avec PODIUM sur vos besoins, vos métiers, vos contraintes horaires et vos objectifs. Nous construisons ensuite un programme sur mesure avec des ateliers adaptés à vos équipes, puis nous animons les interventions avec une pédagogie active, ludique et orientée terrain.",
  },
  {
    question: "Où organiser une semaine QVCT avec PODIUM ?",
    answer:
      "PODIUM intervient principalement dans l'Ain, la région lyonnaise, Bourg-en-Bresse, Ambérieu-en-Bugey, la Plaine de l'Ain, Rillieux-la-Pape et plus largement en région Auvergne-Rhône-Alpes.",
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
  { id: "semaine-qvct", label: "La semaine", icon: "sparkles" },
  { id: "pourquoi-podium", label: "Format", icon: "calendar" },
  { id: "etapes", label: "Étapes", icon: "route" },
  { id: "ateliers-qvct", label: "Ateliers", icon: "grid" },
  { id: "benefices", label: "Bénéfices", icon: "trending" },
  { id: "contact", label: "Contact", icon: "phone" },
]

export default function SemaineQvctPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <EvenementLocalNav items={navItems} />
      <div id="semaine-qvct" className="scroll-mt-52">
        <EvenementHero
          eyebrow="Semaine QVCT · Rhône-Alpes"
          titlePre="La semaine"
          titleHighlight="QVCT"
          lead="Faites de votre semaine QVCT un temps fort utile, vivant et adapté à vos équipes."
          description="Organisez une semaine de la QVCT interactive, concrète et sur mesure pour sensibiliser vos collaborateurs autour de la qualité de vie et des conditions de travail : TMS, stress, hygiène de vie, cohésion, communication, sommeil, nutrition, activité physique."
          regionLine="Podium intervient principalement dans l'Ain, la région lyonnaise, Bourg-en-Bresse, Ambérieu-en-Bugey, la Plaine de l'Ain et plus largement en Auvergne-Rhône-Alpes."
          stats={[
            { n: "5", l: "jours pour ancrer la prévention" },
            { n: "100%", l: "sur-mesure" },
            { n: "12h", l: "devis garanti" },
          ]}
          images={[
            { src: "/images/atelier-yoga-podium-bien-etre.jpg", alt: "Atelier bien-être pendant la semaine QVCT" },
            { src: "/images/reveil-musculaire-podium-atelier.jpg", alt: "Réveil musculaire en entreprise" },
            { src: "/images/atelier-cohesion-min.jpg", alt: "Atelier cohésion d'équipe" },
          ]}
          floatTitle="Fil conducteur"
          floatSubtitle="une progression sur la semaine"
        />
      </div>
      <div id="pourquoi-podium" className="scroll-mt-52">
        <EvenementAtouts
          title="Pourquoi travailler avec Podium ?"
          description="Transformez votre semaine QVCT en un événement fédérateur et impactant. Profitez de la semaine de la QVCT pour prendre du recul, renforcer la prévention et créer du lien entre vos collaborateurs. Construisez avec Podium des ateliers adaptés à vos métiers, vos horaires, vos postes de travail et vos contraintes terrain."
          items={[
            { icon: "/images/Picto_Evolution.png", title: "Ateliers sur mesure", alt: "Icône ateliers sur mesure" },
            { icon: "/images/picto-participants.png", title: "Formats adaptés à vos équipes", alt: "Icône formats adaptés" },
            { icon: "/images/picto-cartes.png", title: "Pédagogie active et ludique", alt: "Icône pédagogie active" },
            { icon: "/images/picto-de.png", title: "Intervenants experts terrain", alt: "Icône intervenants experts" },
          ]}
        />
      </div>
      <div id="etapes" className="scroll-mt-52">
        <EvenementEtapesStacking
          title="Les étapes"
          subtitle="Notre processus pour construire une semaine QVCT cohérente, adaptée à vos équipes."
          steps={[
            {
              icon: "message",
              color: "#FFD25D",
              title: "Brief client",
              subtitle: "On part de votre réalité terrain.",
              description:
                "Nous échangeons avec vous sur vos objectifs, votre organisation, vos métiers, vos contraintes horaires, vos risques prioritaires et les attentes de vos équipes. Cette étape nous permet d'identifier les thématiques les plus pertinentes : TMS, stress, sommeil, nutrition, communication, cohésion, management ou bien-être au travail.",
            },
            {
              icon: "lightbulb",
              color: "#57B3B7",
              iconColor: "#FFFFFF",
              title: "Conception du programme",
              subtitle: "On construit une semaine cohérente, pas une simple addition d'ateliers.",
              description:
                "Nous imaginons un fil conducteur sur plusieurs jours, avec une progression claire et des formats adaptés : ateliers courts, temps forts collectifs, animations en petits groupes, interventions sur poste, challenges ou temps d'échanges. Chaque contenu est ajusté à votre environnement de travail.",
            },
            {
              icon: "check",
              color: "#C9426B",
              iconColor: "#FFFFFF",
              title: "Animation et bilan",
              subtitle: "Le jour J, vos équipes participent. Nous animons, coordonnons et ajustons.",
              description:
                "Nos intervenants animent les ateliers avec une pédagogie active, ludique et accessible. A la fin de la semaine QVCT, nous pouvons réaliser un temps de bilan pour identifier les retours des participants, les points forts et les pistes d'amélioration à poursuivre dans le temps.",
            },
          ]}
          ctaLabel="Organiser votre semaine QVCT"
        />
      </div>
      <div id="ateliers-qvct" className="scroll-mt-52">
        <EvenementAteliers
          title="Top 4 de nos ateliers en semaine QVCT"
          subtitle="Découvrez notre sélection d'ateliers spécifiquement adaptés pour une semaine de la QVCT."
          slugs={["geste-et-posture-petanque", "quiz-sur-mesure", "reveil-musculaire-ludique", "gestion-des-emotions-sophrologie"]}
        />
      </div>
      <div id="benefices" className="scroll-mt-52">
        <EvenementBenefices
          title="Impacts positifs et approche novatrice"
          columns={[
            {
              header: "Les impacts positifs",
              accent: "navy",
              items: [
                {
                  id: "entreprise-1",
                  icon: "target",
                  title: "Engagement renforcé",
                  description:
                    "Les collaborateurs participent davantage lorsque les sujets abordés parlent de leur quotidien, de leurs contraintes et de leurs vrais enjeux de travail.",
                },
                {
                  id: "entreprise-2",
                  icon: "award",
                  title: "Prévention plus concrète",
                  description:
                    "Les messages sont plus efficaces quand ils sont reliés aux gestes, aux rythmes, aux postes et aux situations vécues par les équipes.",
                },
                {
                  id: "entreprise-3",
                  icon: "users",
                  title: "Cohésion durable",
                  description:
                    "La semaine QVCT crée des temps d'échange entre collègues, managers et équipes, dans un cadre plus ouvert, participatif et fédérateur.",
                },
                {
                  id: "entreprise-4",
                  icon: "trophy",
                  title: "Image employeur valorisée",
                  description:
                    "Organiser une semaine QVCT en entreprise montre que vous agissez concrètement pour la santé, le bien-être et les conditions de travail de vos collaborateurs.",
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
                  title: "Sortez du format descendant",
                  description:
                    "Fini les messages théoriques qui s'oublient aussitôt. Les participants vivent, testent, échangent et s'approprient les bons réflexes.",
                },
                {
                  id: "collaborateurs-2",
                  icon: "handheart",
                  title: "Des intervenants experts et accessibles",
                  description:
                    "Nos intervenants apportent du contenu sérieux, tout en gardant une posture humaine, bienveillante et proche du terrain.",
                },
                {
                  id: "collaborateurs-3",
                  icon: "dumbbell",
                  title: "Le sport comme levier d'apprentissage",
                  description:
                    "Bouger, coopérer, ressentir, s'adapter : le sport devient un outil puissant pour travailler les savoir-être, la prévention et le collectif.",
                },
                {
                  id: "collaborateurs-4",
                  icon: "puzzle",
                  title: "Des jeux et challenges pour ancrer les messages",
                  description:
                    "Quiz, défis, mises en situation, ateliers tournants ou formats express : la QVCT devient plus vivante, plus concrète et plus mémorable.",
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
