import type { Metadata } from "next"
import { Check, Sunrise, Activity, Home, Zap, Battery, TrendingUp } from "lucide-react"
import Reveal from "@/components/reveal"
import RessourceHero from "@/components/ressource/ressource-hero"
import RessourceCta from "@/components/ressource/ressource-cta"
import { ChiffresCles } from "@/components/ressource/ressource-blocks"
import FormationFAQ from "@/components/formation/formation-faq"
import {
  gestesEtPosturesMeta as meta,
  gpRegles,
  gpPreparer,
  gpFondamentaux,
  gpHabitude,
  gpBenefices,
  gpChiffres,
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
    question: "Quelles sont les 5 règles de base des gestes et postures ?",
    answer:
      "Se positionner face à la charge, éviter les torsions du tronc, garder le dos droit et gainé, fléchir les jambes, et rapprocher la charge du corps. Ces cinq réflexes couvrent l'essentiel des situations de manutention manuelle et suffisent à éviter une grande partie des lombalgies.",
  },
  {
    question: "Comment porter une charge lourde sans se faire mal au dos ?",
    answer:
      "Le principe est simple : ce sont les jambes qui portent, jamais le dos. Placez-vous face à la charge, pieds écartés, descendez en fléchissant les genoux avec le dos droit et gainé, saisissez fermement, puis remontez en poussant sur les cuisses. Gardez la charge près du corps pendant tout le trajet et pivotez avec les pieds plutôt qu'en tournant le buste.",
  },
  {
    question: "Faut-il s'échauffer avant de porter des charges ?",
    answer:
      "Oui. Trois à cinq minutes de réveil musculaire suffisent pour mobiliser la nuque, les épaules, le dos et les hanches, activer les jambes et les chevilles. Un corps préparé encaisse beaucoup mieux les contraintes qu'un corps froid, exactement comme avant une activité sportive.",
  },
  {
    question: "Qu'est-ce qu'un TMS et comment l'éviter ?",
    answer:
      "Un trouble musculo-squelettique est une atteinte des muscles, tendons et articulations provoquée par des gestes répétés, des postures forcées et un manque de récupération. Il s'installe progressivement, sans prévenir. La prévention repose sur trois leviers : préparer le corps, adopter les bons gestes, et aménager l'organisation du travail.",
  },
  {
    question: "Une formation gestes et postures est-elle obligatoire ?",
    answer:
      "Le Code du travail impose à l'employeur de former les salariés dont l'activité comporte de la manutention manuelle aux gestes et postures adaptés (article R4541-8). Au-delà de l'obligation, c'est surtout le moyen le plus direct de faire baisser les accidents liés à la manutention.",
  },
  {
    question: "Podium intervient-il à Lyon et en Rhône-Alpes ?",
    answer:
      "Oui, Podium anime ses formations gestes et postures dans toute la région Auvergne-Rhône-Alpes : Lyon, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse et les environs, directement sur vos postes de travail.",
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
    name: "Porter une charge sans se blesser : les 5 règles de base",
    description:
      "Les cinq réflexes fondamentaux de la manutention manuelle pour protéger son dos et prévenir les troubles musculo-squelettiques.",
    step: gpRegles.map((r, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: r.title,
      text: r.description,
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

const HABITUDE_ICONS = [Sunrise, Activity, Home]
const BENEFICE_ICONS = [Zap, Battery, TrendingUp]

export default function GestesEtPosturesRessourcePage() {
  return (
    <main>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <RessourceHero
        categoryLabel={meta.categoryLabel}
        titlePre="Gestes et postures :"
        titleHighlight="les 5 règles de base"
        chapo="Un mauvais geste répété aujourd'hui peut devenir une douleur chronique demain. Voici les cinq réflexes qui protègent votre dos lors d'un port de charge, comment préparer votre corps avant l'effort, et pourquoi la prévention se joue autant en dehors du travail qu'au poste."
        readingTime={meta.readingTime}
        image="/images/atelier-geste-et-posture-petanque-4.png"
        imageAlt="Atelier gestes et postures animé par Podium en entreprise"
      />

      {/* Les 5 règles */}
      <section id="les-regles" className="scroll-mt-24 py-16 md:py-20 bg-[#fafbfe] relative">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-[-45px] top-24 hidden xl:block w-48 h-48 rounded-[38px] border-2 border-[#FFD25D]/40" />
          <div className="absolute left-[-50px] bottom-24 hidden xl:block w-40 h-40 rounded-[34px] bg-[#57B3B7]/10" />
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <Reveal className="mb-12">
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
              Règles de base obligatoires
            </span>
            <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-4xl mt-4 mb-4">
              Les 5 règles pour porter sans se blesser
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Elles se retiennent en une minute et s&apos;appliquent à presque toutes les situations de manutention.
            </p>
          </Reveal>

          <div className="grid gap-5">
            {gpRegles.map((r, i) => (
              <Reveal key={r.title} delay={i * 90} y={34}>
                <div className="group relative flex items-start gap-6 bg-white border border-gray-200 rounded-[22px] p-7 shadow-[0_4px_18px_rgba(6,25,82,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(6,25,82,0.13)] overflow-hidden">
                  <span
                    aria-hidden
                    className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#FFD25D] transition-all duration-300 group-hover:w-2.5"
                  />
                  <span className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#061952] text-[#FFD25D] font-poppins font-extrabold text-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-poppins font-semibold text-xl text-[#061952] leading-snug mb-2">{r.title}</h3>
                    <p className="text-[15.5px] text-gray-600 leading-relaxed">{r.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Se préparer + habitude */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <Reveal>
              <div className="h-full bg-[#061952] rounded-[28px] p-8 md:p-10 relative overflow-hidden">
                <div aria-hidden className="absolute -bottom-12 -right-12 w-40 h-40 rounded-[34px] border-2 border-[#FFD25D]/20" />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#FFD25D]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
                    Avant d&apos;agir
                  </span>
                  <h2 className="font-poppins font-bold text-white text-2xl md:text-3xl mt-4 mb-6">Se préparer</h2>
                  <ul className="grid gap-3.5">
                    {gpPreparer.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[16px] text-white/85">
                        <span className="w-6 h-6 rounded-lg bg-[#FFD25D] text-[#061952] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[15px] text-white/60 leading-relaxed mt-6">
                    Trois à cinq minutes suffisent. C&apos;est exactement le rôle du réveil musculaire : préparer le
                    corps avant de lui demander un effort.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6">
              <Reveal delay={120}>
                <div className="bg-white border border-gray-200 rounded-[28px] p-8 shadow-[0_4px_18px_rgba(6,25,82,0.06)]">
                  <h2 className="font-poppins font-bold text-[#061952] text-2xl mb-2">
                    La prévention, c&apos;est une habitude
                  </h2>
                  <p className="text-[15px] text-gray-600 mb-6">Elle ne s&apos;arrête pas à la porte de l&apos;entreprise.</p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {gpHabitude.map((h, i) => {
                      const Icon = HABITUDE_ICONS[i]
                      return (
                        <div
                          key={h.moment}
                          className="flex flex-col items-center text-center gap-2 rounded-2xl bg-[#fafbfe] border border-gray-200 px-4 py-5"
                        >
                          <span className="w-11 h-11 rounded-2xl bg-[#57B3B7] text-white flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                          </span>
                          <span className="font-poppins font-semibold text-[15px] text-[#061952]">{h.moment}</span>
                          <span className="text-sm text-gray-500 -mt-1">{h.detail}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="bg-[#FFF7EE] border border-[#FFD25D]/40 rounded-[28px] p-8">
                  <h2 className="font-poppins font-bold text-[#061952] text-2xl mb-5">
                    Adopter les bons gestes, c&apos;est :
                  </h2>
                  <div className="grid gap-3">
                    {gpBenefices.map((b, i) => {
                      const Icon = BENEFICE_ICONS[i]
                      return (
                        <div key={b} className="flex items-center gap-3.5">
                          <span className="w-10 h-10 rounded-xl bg-[#FFD25D] text-[#061952] flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5" />
                          </span>
                          <span className="font-poppins font-semibold text-[16px] text-[#061952]">{b}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Fondamentaux + chiffres */}
      <section className="py-16 md:py-20 bg-[#fafbfe]">
        <div className="container mx-auto px-4 max-w-5xl">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9426B]" />
              À retenir
            </span>
            <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-4xl mt-4">
              Les fondamentaux de la prévention
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5 mb-14">
            {gpFondamentaux.map((f, i) => (
              <Reveal key={f} delay={i * 90} y={32}>
                <div className="h-full flex items-start gap-4 bg-white border border-gray-200 rounded-[22px] p-6 shadow-[0_4px_18px_rgba(6,25,82,0.06)]">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFD25D]/25 text-[#B8860B] font-poppins font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-[15.5px] text-gray-700 leading-relaxed">{f}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mb-8">
            <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-4xl">Chiffres clés</h2>
          </Reveal>
          <ChiffresCles
            items={gpChiffres}
            note="Sources : INRS et Assurance Maladie – Risques professionnels."
          />
        </div>
      </section>

      <RessourceCta
        title="Ancrez les bons gestes durablement dans vos équipes"
        text="Lire les règles ne suffit pas : c'est en les pratiquant sur son propre poste de travail qu'on les intègre. Nos formats mettent les participants en mouvement, avec des corrections en direct."
        formation={meta.formation}
        atelier={meta.atelier}
      />

      <FormationFAQ faqData={faqData} />
    </main>
  )
}
