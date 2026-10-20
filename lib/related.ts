import { allFormations } from "@/lib/formations"
import { allAteliers } from "@/lib/ateliers"

/**
 * Bloc « À découvrir aussi » en bas des pages formation et atelier.
 * Priorité : même thème, en commençant par l'autre format (formation ↔ atelier),
 * puis même thème même format, puis même catégorie (QVCT / Sécurité).
 */

export interface Offer {
  href: string
  kind: "formation" | "atelier"
  category: "qvct" | "securite"
  title: string
  description: string
  image: string
  duree: string
}

export const offers: Offer[] = [
  ...allFormations.map((f) => ({
    href: `/${f.slug}`,
    kind: "formation" as const,
    category: f.category,
    title: f.cardTitle,
    description: f.cardDescription,
    image: f.heroImage,
    duree: f.duree,
  })),
  ...allAteliers.map((a) => ({
    href: `/atelier/${a.slug}`,
    kind: "atelier" as const,
    category: a.category,
    title: a.cardTitle,
    description: a.cardDescription,
    image: a.heroImage,
    duree: a.duree,
  })),
  {
    href: "/atelier/escape-game-securite",
    kind: "atelier",
    category: "securite",
    title: "Escape Game Sécurité",
    description:
      "Un jeu connecté sur la sécurité au travail où les équipes relèvent des défis variés en temps limité.",
    image: "/images/escape-game-atelier-podium.webp",
    duree: "60 à 75 min",
  },
]

/** Groupes thématiques (chemins d'URL). Une page peut appartenir à plusieurs thèmes. */
const THEMES: string[][] = [
  // TMS, postures, échauffement
  [
    "/formation-securite-geste-et-posture",
    "/formation-securite-reveil-musculaire",
    "/atelier/geste-et-posture-petanque",
    "/atelier/reveil-musculaire-ludique",
  ],
  // Premiers secours
  ["/formation-securite-gestes-qui-sauvent", "/formation-securite-premiers-secours-citoyen", "/atelier/secourir-sans-panique"],
  // Santé mentale
  [
    "/formation-qvct-sante-mentale-agressivite-verbale",
    "/formation-qvct-sante-mentale-situations-dangereuses",
    "/formation-qvct-sante-mentale-detecter-mal-etre",
    "/atelier/prevention-sante-mentale",
    "/atelier/theatre-impro-sante-mentale",
    "/atelier/gestion-des-emotions-sophrologie",
  ],
  // Communication, gestion de l'agressivité
  [
    "/formation-qvct-communication-non-violente",
    "/formation-qvct-sante-mentale-agressivite-verbale",
    "/atelier/cnv-agressivite-verbale",
    "/atelier/cnv-agressivite-physique",
  ],
  // Animer, transmettre
  [
    "/formation-securite-animation-quart-heure",
    "/formation-qvct-lancer-dynamiser-reunion",
    "/formation-qvct-technique-animation",
    "/atelier/quiz-sur-mesure",
    "/atelier/jeu-de-plateau-geant",
  ],
  // Savoir-être, cohésion
  ["/formation-qvct-valoriser-posture-professionnelle", "/atelier/posture-pro-defi-flash", "/atelier/cles-cohesion-equipe"],
  // Prévention des risques
  [
    "/atelier/escape-game-securite",
    "/atelier/le-mur-des-addictions",
    "/atelier/deconnecte-ton-ecran",
    "/formation-securite-animation-quart-heure",
  ],
  // Inclusion
  ["/atelier/sensibiliser-au-handicap", "/atelier/sensibiliser-au-handicap-visuel", "/atelier/cles-cohesion-equipe"],
  // Bien-être
  ["/atelier/atelier-bulle-oxygene", "/atelier/atelier-nutrition-performance", "/atelier/gestion-des-emotions-sophrologie"],
]

export function relatedOffers(href: string, count = 3): Offer[] {
  const self = offers.find((o) => o.href === href)
  if (!self) return []
  const byHref = new Map(offers.map((o) => [o.href, o]))
  const sameTheme = THEMES.filter((t) => t.includes(href))
    .flat()
    .filter((h) => h !== href)
    .map((h) => byHref.get(h))
    .filter((o): o is Offer => Boolean(o))

  const picked: Offer[] = []
  const add = (list: Offer[]) => {
    for (const o of list) {
      if (picked.length >= count) return
      if (!picked.some((p) => p.href === o.href)) picked.push(o)
    }
  }
  add(sameTheme.filter((o) => o.kind !== self.kind))
  add(sameTheme.filter((o) => o.kind === self.kind))
  add(offers.filter((o) => o.href !== href && o.category === self.category && o.kind !== self.kind))
  add(offers.filter((o) => o.href !== href && o.category === self.category))
  return picked
}
