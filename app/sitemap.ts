import type { MetadataRoute } from "next"

const BASE_URL = "https://www.ofpodium.fr"

const mainRoutes = [
  "/",
  "/about",
  "/contact",
  "/nos-ateliers",
  "/nos-evenements",
  "/formations-qvct",
  "/formations-management",
]

const formationRoutes = [
  "/formation-ambassadeur-reveil-musculaire",
  "/formation-geste-et-posture",
  "/formation-management-affirmer-confiance-cnv",
  "/formation-management-lancer-dynamiser-reunion",
  "/formation-management-technique-animation",
  "/formation-sante-mentale-detecter-mal-etre",
  "/formation-valoriser-posture-professionnelle",
]

const evenementRoutes = [
  "/nos-evenements/journee-rse",
  "/nos-evenements/journee-securite",
  "/nos-evenements/journee-seminaire",
  "/nos-evenements/semaine-qvct",
]

const atelierRoutes = [
  "/atelier/atelier-bulle-oxygene",
  "/atelier/atelier-nutrition-performance",
  "/atelier/cles-cohesion-equipe",
  "/atelier/cnv-agressivite-physique",
  "/atelier/cnv-agressivite-verbale",
  "/atelier/escape-game-securite",
  "/atelier/geste-et-posture-petanque",
  "/atelier/gestion-des-emotions-sophrologie",
  "/atelier/jeu-de-plateau-geant",
  "/atelier/le-mur-des-addictions",
  "/atelier/posture-pro-defi-flash",
  "/atelier/prevention-sante-mentale",
  "/atelier/quiz-sur-mesure",
  "/atelier/reveil-musculaire-ludique",
  "/atelier/secourir-sans-panique",
  "/atelier/sensibiliser-au-handicap",
  "/atelier/sensibiliser-au-handicap-visuel",
  "/atelier/sophrologie",
  "/atelier/sport-transfert-savoir-etre",
  "/atelier/valorisation-des-savoir-etre",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    ...mainRoutes.map((route) => ({
      url: `${BASE_URL}${route === "/" ? "" : route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.9,
    })),
    ...formationRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...evenementRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...atelierRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
