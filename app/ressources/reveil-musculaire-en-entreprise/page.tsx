import type { Metadata } from "next"
import { Building2, HeartPulse, Moon, Apple, Smile, Armchair } from "lucide-react"
import Reveal from "@/components/reveal"
import RessourceHero from "@/components/ressource/ressource-hero"
import RessourceCta from "@/components/ressource/ressource-cta"
import TriptyqueViewer from "@/components/ressource/triptyque-viewer"
import { ChiffresCles, TmsChart, EtapesAggravation } from "@/components/ressource/ressource-blocks"
import FormationFAQ from "@/components/formation/formation-faq"
import {
  reveilMusculaireMeta as meta,
  reveilPourquoi,
  reveilChiffres,
  reveilTms,
  reveilTmsExplique,
  reveilImpacts,
  reveilExercices,
  reveilTraumatismes,
  reveilPiliers,
  reveilVolets,
} from "@/lib/ressources"

const URL = `https://www.ofpodium.fr/ressources/${meta.slug}`

export const metadata: Metadata = {
  title: meta.metaTitle,
  description: meta.metaDescription,
  alternates: { canonical: URL },
  openGraph: { title: meta.metaTitle, description: meta.metaDescription, url: URL, type: "article" },
}

const faqData = [
  {
    question: "Combien de temps doit durer un réveil musculaire ?",
    answer:
      "Entre 3 et 10 minutes suffisent. L'objectif n'est pas de faire du sport mais de préparer le corps à l'effort : mobiliser les articulations, activer la circulation et se mettre en condition. Une routine de 5 minutes bien menée vaut mieux qu'une séance de 20 minutes une fois par mois.",
  },
  {
    question: "À quel moment de la journée le pratiquer ?",
    answer:
      "Idéalement en début de poste, avant les premières manipulations. Il peut aussi être utile après une longue pause, à la reprise de l'après-midi, ou avant une tâche particulièrement sollicitante. L'essentiel est la régularité : mieux vaut tous les jours à heure fixe qu'occasionnellement.",
  },
  {
    question: "Faut-il une tenue ou du matériel particulier ?",
    answer:
      "Non, aucun matériel n'est nécessaire et la routine se pratique en tenue de travail. Les exercices sont conçus pour être réalisés debout dans un espace réduit, et peuvent tous être adaptés en position assise.",
  },
  {
    question: "Le réveil musculaire convient-il à tout le monde ?",
    answer:
      "Oui, car chaque exercice est adaptable à l'amplitude et aux contraintes physiques de chacun. Une personne avec des limitations articulaires réalise les mêmes mouvements avec une amplitude réduite. L'animateur formé sait proposer des variantes pour que personne ne soit mis de côté.",
  },
  {
    question: "Qui peut animer le réveil musculaire dans l'entreprise ?",
    answer:
      "N'importe quel collaborateur volontaire, à condition d'être formé. C'est tout l'objet de la formation Ambassadeur Réveil Musculaire de Podium : rendre vos équipes autonomes pour animer elles-mêmes les séances, sans dépendre d'un intervenant extérieur.",
  },
  {
    question: "Podium intervient-il à Lyon et en Rhône-Alpes ?",
    answer:
      "Oui, Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse, Ambérieu-en-Bugey et les environs, directement dans vos locaux.",
  },
]

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.metaTitle,
    description: meta.metaDescription,
    author: { "@type": "Organization", name: "Podium", url: "https://www.ofpodium.fr" },
    publisher: {
      "@type": "Organization",
      name: "Podium",
      url: "https://www.ofpodium.fr",
      logo: { "@type": "ImageObject", url: "https://www.ofpodium.fr/images/podium-logo.png" },
    },
    mainEntityOfPage: URL,
    image: `https://www.ofpodium.fr${meta.cardImage}`,
    inLanguage: "fr-FR",
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Routine de réveil musculaire en entreprise",
    description:
      "Une routine complète en 7 exercices pour préparer le corps avant la prise de poste, réalisable debout ou assis en moins de 10 minutes.",
    totalTime: "PT8M",
    step: reveilExercices.map((e, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: e.zone,
      text: e.consigne,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.ofpodium.fr" },
      { "@type": "ListItem", position: 2, name: "Ressources", item: "https://www.ofpodium.fr/ressources" },
      { "@type": "ListItem", position: 3, name: meta.cardTitle, item: URL },
    ],
  },
]

const PILIER_ICONS = [Moon, Apple, Smile]

export default function ReveilMusculaireRessourcePage() {
  return (
    <main>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <RessourceHero
        categoryLabel={meta.categoryLabel}
        titlePre="Le réveil musculaire"
        titleHighlight="en entreprise"
        chapo="Quelques minutes pour préparer son corps, réveiller son esprit et se sentir bien avant de penser au travail. Un temps de recentrage, comme avant un match : on se connecte à soi pour mieux se mobiliser ensemble. Voici pourquoi ça marche, et la routine complète en 7 exercices."
        readingTime={meta.readingTime}
        image="/images/reveil-musculaire-podium-atelier.jpg"
        imageAlt="Séance de réveil musculaire animée par Podium en entreprise"
        pdfHref={meta.pdf?.href}
      />

      {/* Pourquoi s'échauffer */}
      <section className="py-16 md:py-20 bg-[#fafbfe] relative">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-[-45px] top-24 hidden xl:block w-44 h-44 rounded-[36px] bg-[#FFD25D]/15" />
        </div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <Reveal className="mb-10">
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#57B3B7]" />
              Les bénéfices
            </span>
            <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-4xl mt-4">
              Pourquoi s&apos;échauffer avant de travailler ?
            </h2>
          </Reveal>

          <div className="grid gap-4">
            {reveilPourquoi.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} y={30}>
                <div className="group flex items-start gap-5 bg-white border border-gray-200 rounded-[22px] px-6 py-5 shadow-[0_4px_18px_rgba(6,25,82,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(6,25,82,0.12)]">
                  <span className="flex-shrink-0 w-11 h-11 rounded-2xl bg-[#57B3B7] text-white font-poppins font-bold flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-[#061952] leading-snug">{p.title}</h3>
                    <p className="text-[15px] text-gray-600 mt-1">{p.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Reveal className="mb-6">
              <h3 className="font-poppins font-bold text-[#061952] text-2xl">Les chiffres clés</h3>
            </Reveal>
            <ChiffresCles
              items={reveilChiffres}
              note="Chiffres constatés par Podium lors de ses interventions en entreprise."
            />
          </div>
        </div>
      </section>

      {/* Comprendre les TMS */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9426B]" />
              Comprendre le problème
            </span>
            <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-4xl mt-4 mb-4">
              Les TMS, premier risque professionnel
            </h2>
            <p className="text-lg text-gray-600">
              Les troubles musculo-squelettiques ne touchent pas que le dos. Voici où ils se logent réellement.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <Reveal>
              <h3 className="font-poppins font-semibold text-xl text-[#061952] mb-5">Répartition des TMS par zone</h3>
              <TmsChart data={reveilTms} />
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {reveilTmsExplique.map((t, i) => (
                <Reveal key={t.title} delay={i * 100} y={36}>
                  <div
                    className={`h-full rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                      t.accent === "navy"
                        ? "bg-[#061952] shadow-[0_14px_40px_rgba(6,25,82,0.2)]"
                        : "bg-white border border-gray-200 shadow-[0_4px_18px_rgba(6,25,82,0.06)]"
                    }`}
                  >
                    <span
                      className={`inline-flex items-center font-poppins font-semibold text-xs px-3 py-1.5 rounded-full uppercase tracking-[0.08em] mb-3 ${
                        t.accent === "teal"
                          ? "bg-[#57B3B7]/15 text-[#2c6e72]"
                          : t.accent === "jaune"
                            ? "bg-[#FFD25D]/30 text-[#061952]"
                            : t.accent === "framboise"
                              ? "bg-[#C9426B]/12 text-[#C9426B]"
                              : "bg-[#FFD25D] text-[#061952]"
                      }`}
                    >
                      {t.title}
                    </span>
                    <p className={`text-[15px] leading-relaxed ${t.accent === "navy" ? "text-white/85" : "text-gray-600"}`}>
                      {t.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Impacts */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Reveal>
              <div className="h-full rounded-[22px] border border-gray-200 bg-[#fafbfe] p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-11 h-11 rounded-2xl bg-[#FFD25D] text-[#061952] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </span>
                  <h3 className="font-poppins font-semibold text-lg text-[#061952]">Ce que ça coûte à l&apos;entreprise</h3>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {reveilImpacts.entreprise.map((i) => (
                    <li
                      key={i}
                      className="inline-flex items-center font-poppins font-medium text-sm px-4 py-2 rounded-full bg-[#FFD25D]/25 text-[#061952]"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-[22px] border border-gray-200 bg-[#fafbfe] p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-11 h-11 rounded-2xl bg-[#C9426B] text-white flex items-center justify-center">
                    <HeartPulse className="w-5 h-5" />
                  </span>
                  <h3 className="font-poppins font-semibold text-lg text-[#061952]">Ce que ça coûte au salarié</h3>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {reveilImpacts.salarie.map((i) => (
                    <li
                      key={i}
                      className="inline-flex items-center font-poppins font-medium text-sm px-4 py-2 rounded-full bg-[#C9426B]/10 text-[#C9426B]"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Traumatismes */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {reveilTraumatismes.map((t, i) => (
              <Reveal key={t.titre} delay={i * 120}>
                <div className="h-full rounded-[22px] border border-gray-200 bg-white p-7 shadow-[0_4px_18px_rgba(6,25,82,0.06)]">
                  <h3 className="font-poppins font-semibold text-lg text-[#061952] mb-4">{t.titre}</h3>
                  <EtapesAggravation etapes={t.etapes} accent={t.accent} />
                  <p className="text-[15px] text-gray-600 leading-relaxed mt-5">{t.intro}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* La routine en 7 exercices */}
      <section id="routine" className="scroll-mt-24 py-16 md:py-24 bg-[#061952] relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-12 -right-12 w-56 h-56 rounded-[44px] border-2 border-[#FFD25D]/20" />
          <div className="absolute -bottom-14 -left-10 w-44 h-44 rounded-[36px] bg-[#57B3B7]/10" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#FFD25D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
              La routine complète
            </span>
            <h2 className="font-poppins font-bold text-white tracking-tight text-3xl md:text-5xl mt-4 mb-4">
              7 exercices, de la tête aux chevilles
            </h2>
            <p className="text-lg text-white/75">
              Une progression du haut vers le bas du corps, à réaliser dans l&apos;ordre. Comptez 5 à 8 minutes pour
              l&apos;ensemble.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reveilExercices.map((e, i) => (
              <Reveal key={e.zone} delay={(i % 3) * 100} y={40} scale={0.96}>
                <div className="group h-full bg-white/[0.06] border border-white/10 rounded-[22px] p-7 transition-all duration-300 hover:bg-white/[0.11] hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-11 h-11 rounded-2xl bg-[#FFD25D] text-[#061952] font-poppins font-bold flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      {i + 1}
                    </span>
                    <h3 className="font-poppins font-semibold text-lg text-white leading-tight">{e.zone}</h3>
                  </div>
                  <p className="text-[15px] text-white/75 leading-relaxed">{e.consigne}</p>
                </div>
              </Reveal>
            ))}

            {/* S'échauffer assis */}
            <Reveal delay={100} y={40} scale={0.96}>
              <div className="h-full bg-[#57B3B7] rounded-[22px] p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-2xl bg-white/20 text-white flex items-center justify-center">
                    <Armchair className="w-5 h-5" />
                  </span>
                  <h3 className="font-poppins font-semibold text-lg text-white leading-tight">S&apos;échauffer assis</h3>
                </div>
                <p className="text-[15px] text-white/90 leading-relaxed">
                  Même assis, le corps peut bouger. Chaque exercice s&apos;adapte : rotations de tête, cercles
                  d&apos;épaules, étirements des bras, du dos ou des jambes.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pour aller plus loin */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
              Pour aller plus loin
            </span>
            <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-4xl mt-4 mb-4">
              Trois piliers qui renforcent les effets
            </h2>
            <p className="text-lg text-gray-600">
              Le réveil musculaire agit mieux quand il s&apos;inscrit dans une hygiène de vie globale.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {reveilPiliers.map((p, i) => {
              const Icon = PILIER_ICONS[i]
              return (
                <Reveal key={p.title} delay={i * 110} y={40} scale={0.96}>
                  <div className="group h-full bg-white border border-gray-200 rounded-[22px] p-7 shadow-[0_4px_18px_rgba(6,25,82,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_50px_rgba(6,25,82,0.13)] relative overflow-hidden">
                    <span
                      aria-hidden
                      className={`absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2.5 ${
                        p.accent === "framboise" ? "bg-[#C9426B]" : p.accent === "teal" ? "bg-[#57B3B7]" : "bg-[#FFD25D]"
                      }`}
                    />
                    <span
                      className={`w-14 h-14 rounded-2xl inline-flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${
                        p.accent === "framboise"
                          ? "bg-[#C9426B] text-white"
                          : p.accent === "teal"
                            ? "bg-[#57B3B7] text-white"
                            : "bg-[#FFD25D] text-[#061952]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </span>
                    <h3 className="font-poppins font-semibold text-xl text-[#061952] mb-3">{p.title}</h3>
                    <p className="text-[15px] text-gray-600 leading-relaxed">{p.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Le mémo */}
      <section className="py-16 md:py-20 bg-[#fafbfe]">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-4xl mb-4">
              Le mémo à feuilleter
            </h2>
            <p className="text-lg text-gray-600">
              Le support que nous remettons aux participants de nos formations. Feuilletez-le ici ou téléchargez-le
              librement.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <TriptyqueViewer volets={reveilVolets} title="Mémo Réveil Musculaire Podium" pdfHref={meta.pdf?.href} />
          </Reveal>
        </div>
      </section>

      <RessourceCta
        title="Rendez vos équipes autonomes sur le réveil musculaire"
        text="Nous formons vos collaborateurs volontaires pour qu'ils animent eux-mêmes les séances, jour après jour, sans dépendre d'un intervenant extérieur."
        formation={meta.formation}
        atelier={meta.atelier}
      />

      <FormationFAQ faqData={faqData} />
    </main>
  )
}
