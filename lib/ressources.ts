export interface RessourceMeta {
  slug: string
  category: "securite" | "qvct"
  categoryLabel: string
  metaTitle: string
  metaDescription: string
  cardTitle: string
  cardDescription: string
  cardImage: string
  readingTime: string
  /** Formation vers laquelle la ressource convertit */
  formation: { label: string; href: string }
  atelier?: { label: string; href: string }
  pdf?: { href: string; label: string }
}

export const reveilMusculaireMeta: RessourceMeta = {
  slug: "reveil-musculaire-en-entreprise",
  category: "securite",
  categoryLabel: "Prévention des TMS",
  metaTitle: "Réveil musculaire en entreprise : le guide complet et les 7 exercices",
  metaDescription:
    "Pourquoi et comment mettre en place un réveil musculaire en entreprise : les bénéfices, les chiffres clés sur les TMS et une routine complète en 7 exercices, à faire debout ou assis. Mémo gratuit à télécharger.",
  cardTitle: "Le réveil musculaire en entreprise",
  cardDescription:
    "Pourquoi s'échauffer avant de travailler, ce que ça change vraiment, et une routine complète en 7 exercices à faire debout ou assis.",
  cardImage: "/images/reveil-musculaire-podium-atelier.jpg",
  readingTime: "6 min de lecture",
  formation: { label: "Formation Ambassadeur Réveil Musculaire", href: "/formation-securite-reveil-musculaire" },
  atelier: { label: "Atelier Réveil musculaire ludique", href: "/atelier/reveil-musculaire-ludique" },
  pdf: { href: "/documents/memo-reveil-musculaire-podium.pdf", label: "Télécharger le mémo (PDF)" },
}

export const gestesEtPosturesMeta: RessourceMeta = {
  slug: "gestes-et-postures",
  category: "securite",
  categoryLabel: "Manutention & prévention",
  metaTitle: "Gestes et postures : les 5 règles de base pour porter une charge",
  metaDescription:
    "Les 5 règles de base pour manipuler une charge sans se blesser, comment préparer son corps avant l'effort et les fondamentaux de la prévention des TMS. Le mémo Podium en accès libre.",
  cardTitle: "Gestes et postures : les 5 règles de base",
  cardDescription:
    "Se positionner, éviter les torsions, garder le dos droit, fléchir les jambes, rapprocher la charge : les réflexes qui protègent votre dos.",
  cardImage: "/images/atelier-geste-et-posture-petanque-4.png",
  readingTime: "5 min de lecture",
  formation: { label: "Formation Geste et Posture", href: "/formation-securite-geste-et-posture" },
  atelier: { label: "Atelier Geste et posture pétanque", href: "/atelier/geste-et-posture-petanque" },
}

export const allRessources: RessourceMeta[] = [reveilMusculaireMeta, gestesEtPosturesMeta]

/* ============ Contenu : réveil musculaire ============ */

export const reveilPourquoi = [
  {
    title: "Préparer le corps à l'effort",
    description: "Moins de douleurs, plus de confort dans les mouvements.",
  },
  {
    title: "Réduire les risques de TMS",
    description: "L'échauffement améliore la souplesse et la coordination.",
  },
  {
    title: "Mettre le cerveau en route",
    description: "On démarre sa journée plus attentif, donc plus en sécurité.",
  },
  {
    title: "Renforcer la cohésion d'équipe",
    description: "Un échauffement collectif crée du lien.",
  },
  {
    title: "Démarrer avec une énergie positive",
    description: "Une équipe qui bouge est une équipe plus motivée.",
  },
]

export const reveilChiffres = [
  { value: "90 %", label: "des participants ressentent un mieux-être immédiat", accent: "teal" as const },
  { value: "+15 %", label: "de concentration sur le poste de travail", accent: "navy" as const },
  { value: "-25 %", label: "de blessures constatées", accent: "jaune" as const },
  { value: "12 jours", label: "d'absence évités par an et par salarié", accent: "framboise" as const },
]

export const reveilTms = [
  { zone: "Main, poignet, doigts", value: 38 },
  { zone: "Épaule", value: 30 },
  { zone: "Coude", value: 22 },
  { zone: "Bas du dos", value: 8 },
  { zone: "Genou", value: 2 },
]

export const reveilTmsExplique = [
  {
    title: "C'est quoi ?",
    text: "Des douleurs qui touchent les muscles, les tendons et les articulations.",
    accent: "teal" as const,
  },
  {
    title: "Pourquoi ?",
    text: "Des gestes répétés, des postures forcées, trop peu de récupération.",
    accent: "jaune" as const,
  },
  {
    title: "Les conséquences",
    text: "D'abord une gêne… puis la douleur, la fatigue, parfois l'arrêt de travail.",
    accent: "framboise" as const,
  },
  {
    title: "La solution",
    text: "Bouger avant d'agir ! Un réveil musculaire régulier limite les TMS et renforce la santé au travail.",
    accent: "navy" as const,
  },
]

export const reveilImpacts = {
  entreprise: ["Turn over", "Performance de l'entreprise", "Coûts", "Absentéisme"],
  salarie: ["Exclusion sociale", "Inaptitude", "Douleurs", "Perte de motivation"],
}

export const reveilExercices = [
  {
    zone: "Nuque et cervicale",
    consigne: "Réaliser 10 mouvements de flexion / extension (oui, non) et 10 rotations.",
  },
  {
    zone: "Épaules et bras",
    consigne: "Placer les mains sur les pectoraux et réaliser 10 rotations dans un sens, puis dans l'autre.",
  },
  {
    zone: "Coudes",
    consigne: "Plier et tendre les bras plusieurs fois, en alternant des mouvements par-dessus et par-dessous.",
  },
  {
    zone: "Poignets",
    consigne: "Se prendre les mains, entrecroiser ses doigts et réaliser 10 rotations dans un sens.",
  },
  {
    zone: "Bassin et dos",
    consigne: "Réaliser 10 mouvements de rotation de hanche.",
  },
  {
    zone: "Cuisses et mollets",
    consigne: "Réaliser 10 flexions des jambes en gardant le dos droit.",
  },
  {
    zone: "Chevilles",
    consigne: "Planter la pointe de pieds dans le sol et réaliser 10 mouvements circulaires.",
  },
]

export const reveilTraumatismes = [
  {
    titre: "Traumatismes de la colonne",
    intro:
      "L'évolution des principaux traumatismes du dos rappelle l'importance de bouger, s'échauffer et adopter les bons gestes au quotidien. Un simple lumbago entraîne en moyenne 15 jours d'arrêt de travail : un impact important pour soi comme pour l'entreprise.",
    etapes: ["Lumbago aigu", "Sciatique", "Hernie discale", "Tassement discal"],
    accent: "teal" as const,
  },
  {
    titre: "Traumatismes musculaires",
    intro:
      "Une simple tension peut évoluer vers une crampe, une contracture ou une déchirure si le corps n'est pas préparé. Quelques minutes suffisent pour préserver son énergie, sa sécurité et sa performance tout au long de la journée.",
    etapes: ["La contracture", "La crampe", "L'élongation", "Le claquage"],
    accent: "framboise" as const,
  },
]

export const reveilPiliers = [
  {
    title: "Le sommeil",
    text: "Récupérer, recharger l'énergie et éviter la fatigue accumulée.",
    accent: "framboise" as const,
  },
  {
    title: "La nutrition",
    text: "Bien s'alimenter pour nourrir les muscles et rester concentré.",
    accent: "teal" as const,
  },
  {
    title: "Les émotions",
    text: "Gérer le stress pour garder calme, motivation et efficacité.",
    accent: "jaune" as const,
  },
]

export const reveilVolets = [
  "/images/triptyque-reveil-musculaire-volet-1.webp",
  "/images/triptyque-reveil-musculaire-volet-2.webp",
  "/images/triptyque-reveil-musculaire-volet-3.webp",
  "/images/triptyque-reveil-musculaire-volet-4.webp",
  "/images/triptyque-reveil-musculaire-volet-5.webp",
  "/images/triptyque-reveil-musculaire-volet-6.webp",
]

/* ============ Contenu : gestes et postures ============ */

export const gpRegles = [
  {
    title: "Se positionner face à la charge",
    description:
      "Placez-vous bien en face de l'objet, pieds écartés à la largeur des épaules. Un bon appui au sol, c'est la base de tout port de charge sécurisé.",
  },
  {
    title: "Éviter les torsions du tronc",
    description:
      "Ne tournez jamais le buste en portant. Déplacez vos pieds pour pivoter tout le corps : la torsion sous charge est l'une des premières causes de lombalgie.",
  },
  {
    title: "Garder le dos droit et gainé",
    description:
      "Le dos reste droit et les abdominaux engagés pendant tout le mouvement. C'est le gainage qui protège la colonne, pas la force des bras.",
  },
  {
    title: "Fléchir les jambes",
    description:
      "Ce sont les cuisses qui portent, pas le dos. Descendez en pliant les genoux et remontez en poussant sur les jambes.",
  },
  {
    title: "Rapprocher la charge du corps",
    description:
      "Plus la charge est éloignée du buste, plus la contrainte sur les lombaires est forte. Gardez l'objet près du corps du début à la fin.",
  },
]

export const gpPreparer = [
  "3 à 5 minutes de réveil musculaire",
  "Mobiliser nuque, épaules, dos et hanches",
  "Activer jambes et chevilles",
  "Respirer et s'ancrer",
]

export const gpFondamentaux = [
  "Un mauvais geste répété aujourd'hui peut devenir une douleur chronique demain.",
  "Le corps garde en mémoire chaque contrainte que vous lui imposez.",
  "Les TMS ne préviennent pas : ils s'installent progressivement.",
  "Se préserver au travail, c'est protéger sa santé… et sa vie personnelle.",
]

export const gpHabitude = [
  { moment: "Avant", detail: "le travail" },
  { moment: "Pendant", detail: "le travail" },
  { moment: "En dehors", detail: "du travail" },
]

export const gpBenefices = ["Moins de douleurs", "Plus d'énergie", "Plus de longévité professionnelle"]

export const gpChiffres = [
  { value: "1 sur 5", label: "accident du travail lié à la manutention manuelle", accent: "teal" as const },
  { value: "8 / 10", label: "salariés souffriront d'un mal de dos au cours de leur vie", accent: "framboise" as const },
  { value: "87 %", label: "des maladies professionnelles reconnues sont liées aux TMS", accent: "navy" as const },
]
