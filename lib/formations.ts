export interface FormationData {
  slug: string
  category: "securite" | "qvct"
  metaTitle: string
  metaDescription: string
  heroEyebrow: string
  titleHighlight: string
  titleSuffix?: string
  heroDescription: string
  heroImage: string
  video?: {
    src: string
    poster: string
    title: string
    duration: string
    iso: string
    description: string
  }
  duree: string
  participantsFull: string
  participantsTitle: string
  participantsSub: string
  floatTitle: string
  floatSubtitle: string
  approcheHeadingPre: string
  approcheHeadingHighlight: string
  approcheParagraphs: string[]
  stats: { n: string; l: string }[]
  programmeSubtitle: string
  objectifs: string[]
  programme: string[]
  methodes: string[]
  suiviParagraph: string
  suiviCertificate: string
  pdf: string
  faq: { question: string; answer: string }[]
  cardTitle: string
  cardDescription: string
}

const THIAGI_METHODES = [
  "Méthodes actives inspirées des jeux-cadres de Thiagi et d'une diversité de supports interactifs.",
  "L'apprenant est placé dans des situations où l'apprentissage naît de lui et de ses interactions avec le groupe.",
]

const THIAGI_SUIVI =
  "Feuille de présence pour le module. En fin de formation : attestation de participation, évaluation de la satisfaction des participants et évaluation des capacités d'animation."

const RPS_METHODES = [
  "Approche active et réflexive : analyse de situations vécues et réflexion individuelle guidée.",
  "Échanges en sous-groupes et apports théoriques ciblés sur la prévention des RPS.",
  "Exercices d'entraînement à la pose de limites et construction d'un plan personnel de préservation.",
]

const RPS_SUIVI =
  "Observation lors des mises en situation. Sur la base des feuilles d'émargement, un certificat de réalisation est transmis aux participants en fin de formation."

// ===================== SÉCURITÉ =====================

export const reveilMusculaire: FormationData = {
  slug: "formation-securite-reveil-musculaire",
  category: "securite",
  metaTitle: "Formation Réveil Musculaire | Podium",
  metaDescription:
    "Formez vos ambassadeurs réveil musculaire : concevoir et animer des séances d'échauffement ludiques en entreprise pour prévenir les TMS.",
  heroEyebrow: "Formation Sécurité",
  titleHighlight: "Réveil Musculaire",
  heroDescription:
    "Acquérez les compétences pour concevoir et animer des séances collectives de réveil musculaire et d'échauffement en entreprise, et prévenir durablement les TMS.",
  heroImage: "/images/reveil-musculaire-podium-atelier.jpg",
  video: {
    src: "/videos/formation-reveil-musculaire-podium.mp4",
    poster: "/images/video-poster-reveil-musculaire.jpg",
    title: "Le réveil musculaire en action",
    duration: "1 min 25",
    iso: "PT1M25S",
    description:
      "Découvrez en vidéo une séance de réveil musculaire animée par Podium en entreprise : jeux, mouvement et énergie collective pour prévenir les TMS.",
  },
  duree: "7 heures",
  participantsFull: "6 à 12 personnes",
  participantsTitle: "6 à 12",
  participantsSub: "participants",
  floatTitle: "Attestation",
  floatSubtitle: "remise en fin de formation",
  approcheHeadingPre:
    "Devenez l'ambassadeur du réveil musculaire dans votre entreprise et créez une vraie",
  approcheHeadingHighlight: "culture du mouvement.",
  approcheParagraphs: [
    "Animer un réveil musculaire, c'est donner à ses collaborateurs les bons réflexes pour préparer le corps à l'effort, prévenir les troubles musculo-squelettiques et lancer la journée avec énergie.",
    "Notre pédagogie active et ludique, inspirée des jeux-cadres de Thiagi, place l'apprenant au cœur de l'action : il vit les situations, en comprend les effets et repart avec une vraie boîte à outils d'animation.",
  ],
  stats: [
    { n: "7h", l: "de formation" },
    { n: "100%", l: "active & ludique" },
    { n: "TMS", l: "prévention durable" },
  ],
  programmeSubtitle: "Concevoir, animer et faire vivre des échauffements ludiques au quotidien.",
  objectifs: [
    "Concevoir des situations d'échauffement ludique en adéquation avec les besoins de ses collaborateurs et de son secteur d'activité.",
    "Créer un cadre sécurisé pour proposer des situations adaptées et bienveillantes.",
    "Développer un regard critique pour faire évoluer sa posture et le dispositif dans le temps.",
  ],
  programme: [
    "Analyser et interpréter les enjeux liés aux TMS et à l'échauffement en entreprise.",
    "Ressentir et évaluer les effets des situations d'échauffement ludique.",
    "Concevoir les profils types de son public et leur gestion.",
    "Faire évoluer ses techniques de communication pour fédérer un groupe.",
    "Adapter les lieux d'échauffement aux réalités de l'entreprise et du groupe.",
    "Développer une posture d'ambassadeur d'échauffement ludique au travers de mises en situation.",
    "S'auto-évaluer à l'aide d'une grille pour faire progresser sa posture.",
  ],
  methodes: THIAGI_METHODES,
  suiviParagraph: THIAGI_SUIVI,
  suiviCertificate: "Attestation de participation",
  pdf: "/documents/fiche-formation-reveil-musculaire-2026.pdf",
  faq: [
    {
      question: "À qui s'adresse cette formation ?",
      answer:
        "Elle s'adresse à toute personne amenée à animer des séances de réveil musculaire ou d'échauffement au sein de son entreprise, sans prérequis sportif particulier.",
    },
    {
      question: "Combien de temps dure la formation ?",
      answer:
        "La formation dure 7 heures et accueille de 6 à 12 participants pour garantir un temps de pratique suffisant à chacun.",
    },
    {
      question: "Repart-on avec des outils concrets ?",
      answer:
        "Oui. Chaque participant repart avec une boîte à outils d'animation et une grille d'auto-évaluation pour faire évoluer sa posture dans le temps.",
    },
  ],
  cardTitle: "Réveil Musculaire",
  cardDescription:
    "Concevez et animez des séances d'échauffement ludiques pour prévenir les TMS et lancer la journée en énergie.",
}

export const gesteEtPosture: FormationData = {
  slug: "formation-securite-geste-et-posture",
  category: "securite",
  metaTitle: "Formation Geste et Posture | Podium",
  metaDescription:
    "Comprendre, évaluer et améliorer durablement ses postures de travail pour réduire les risques professionnels et les TMS.",
  heroEyebrow: "Formation Sécurité",
  titleHighlight: "Geste et Posture",
  heroDescription:
    "Apprenez à comprendre, évaluer et améliorer durablement vos postures de travail pour réduire les risques professionnels et préserver votre corps.",
  heroImage: "/images/atelier-geste-et-posture-petanque-min.jpg",
  duree: "3,5 heures",
  participantsFull: "6 à 12 personnes",
  participantsTitle: "6 à 12",
  participantsSub: "participants",
  floatTitle: "Attestation",
  floatSubtitle: "remise en fin de formation",
  approcheHeadingPre:
    "Adopter les bons gestes au quotidien, c'est protéger son corps et développer une vraie",
  approcheHeadingHighlight: "culture de la prévention.",
  approcheParagraphs: [
    "Faire évoluer ses postures de travail, c'est aider ses collaborateurs à se prémunir des contraintes physiques quotidiennes et à lutter contre les troubles musculo-squelettiques.",
    "Par une approche ludique qui donne du sens et implique les participants, nous favorisons l'ancrage durable des bons réflexes, à moyen et long terme.",
  ],
  stats: [
    { n: "3,5h", l: "de formation" },
    { n: "100%", l: "mise en pratique" },
    { n: "TMS", l: "prévention durable" },
  ],
  programmeSubtitle: "Repérer les contraintes, adapter ses gestes et s'auto-évaluer durablement.",
  objectifs: [
    "Faire évoluer ses pratiques et porter un regard critique sur celles de ses collaborateurs.",
    "Comprendre et repérer les contraintes physiques, posturales et de mouvement spécifiques à son métier.",
    "Adapter les bons gestes en fonction de son poste de travail.",
  ],
  programme: [
    "Analyser et interpréter les enjeux liés à la gestion des postures et des gestes professionnels.",
    "Ancrer les origines corporelles associées aux postures de travail.",
    "Développer un regard critique sur son environnement de travail.",
    "Mettre en pratique et développer l'auto-évaluation.",
  ],
  methodes: THIAGI_METHODES,
  suiviParagraph: THIAGI_SUIVI,
  suiviCertificate: "Attestation de participation",
  pdf: "/documents/fiche-formation-geste-et-posture-2026.pdf",
  faq: [
    {
      question: "À qui est destinée cette formation ?",
      answer:
        "À tous les travailleurs dont l'activité comporte des manutentions manuelles ou des contraintes posturales, quel que soit leur poste.",
    },
    {
      question: "Quels sont les bénéfices d'une formation gestes et postures ?",
      answer:
        "Elle aide à lutter contre les troubles musculo-squelettiques (TMS), principales causes d'accidents et de maladies professionnelles, en ancrant des réflexes posturaux durables.",
    },
    {
      question: "Combien de temps dure la formation ?",
      answer: "La formation dure 3,5 heures et accueille de 6 à 12 participants.",
    },
  ],
  cardTitle: "Geste et Posture",
  cardDescription:
    "Repérez les contraintes de votre métier et adoptez les bons gestes pour réduire durablement les TMS.",
}

export const animationQuartHeure: FormationData = {
  slug: "formation-securite-animation-quart-heure",
  category: "securite",
  metaTitle: "Formation Animation ¼h Sécurité | Podium",
  metaDescription:
    "Concevoir, préparer et animer un quart d'heure sécurité clair, engageant et opérationnel pour développer une culture prévention durable.",
  heroEyebrow: "Formation Sécurité",
  titleHighlight: "Animation ¼h",
  titleSuffix: "Sécurité",
  heroDescription:
    "Apprenez à concevoir, préparer et animer un quart d'heure sécurité clair, engageant et opérationnel, pour transmettre la prévention avec conviction et fédérer vos équipes.",
  heroImage: "/images/journee-securite-evenement-podium.jpg",
  duree: "10,5 heures",
  participantsFull: "Individuel ou collectif",
  participantsTitle: "Individuel",
  participantsSub: "ou collectif",
  floatTitle: "Restitution vidéo",
  floatSubtitle: "de votre animation",
  approcheHeadingPre: "Passez d'animateur à",
  approcheHeadingHighlight: "catalyseur d'une culture prévention.",
  approcheParagraphs: [
    "Le quart d'heure sécurité est un temps d'échange court, concret et utile pour ancrer la culture prévention au sein de l'entreprise.",
    "Grâce à une pédagogie active (faire et refaire) et à des solutions ludopédagogiques, chaque participant construit, expérimente et ajuste sa propre animation, jusqu'à gagner en aisance et en impact.",
  ],
  stats: [
    { n: "10,5h", l: "de formation" },
    { n: "4", l: "valeurs clés transmises" },
    { n: "Vidéo", l: "restitution finale" },
  ],
  programmeSubtitle: "Construire un message clé et l'animer avec la bonne posture.",
  objectifs: [
    "Transmettre un message de prévention et de sécurité avec conviction.",
    "Animer et porter un temps d'échange collectif autour d'un message clé.",
    "Organiser la pratique : écouter, questionner, impliquer et savoir répondre.",
    "Motiver et fédérer autour de valeurs clés : sincérité, courage, engagement, respect.",
    "Comprendre sa mission pour passer d'animateur à catalyseur d'une culture prévention.",
  ],
  programme: [
    "Comprendre le rôle de l'animateur sécurité et l'intérêt du quart d'heure sécurité comme temps d'échange court et utile.",
    "Construire un message clair et impactant, adapté au terrain, aux équipes et aux situations de travail.",
    "Animer avec la bonne posture : simple, engageante et participative.",
    "Mettre en pratique et progresser : préparer, expérimenter, puis faire un retour d'expérience pour ajuster sa pratique.",
  ],
  methodes: [
    "Un programme d'animation : quels sujets aborder et à quel moment.",
    "Mise en œuvre de solutions ludopédagogiques et organisation de la salle en tables rondes interactives.",
    "Mise en pratique (faire et refaire) et construction de représentations mentales.",
  ],
  suiviParagraph:
    "Le parcours est adapté au besoin des apprenants. La formation se conclut par la restitution d'une animation au format vidéo.",
  suiviCertificate: "Attestation de participation",
  pdf: "/documents/fiche-formation-animation-quart-heure-securite-2026.pdf",
  faq: [
    {
      question: "À qui s'adresse cette formation ?",
      answer:
        "Aux personnes amenées à animer des temps de prévention en entreprise (managers, référents sécurité, animateurs) souhaitant gagner en aisance et en impact.",
    },
    {
      question: "La formation est-elle individuelle ou collective ?",
      answer:
        "Les deux formats sont possibles : le parcours s'adapte au besoin des apprenants, en individuel comme en collectif.",
    },
    {
      question: "Comment valide-t-on les acquis ?",
      answer:
        "La formation se conclut par la restitution d'une animation filmée, qui permet à chacun de prendre du recul sur sa pratique.",
    },
  ],
  cardTitle: "Animation ¼h Sécurité",
  cardDescription:
    "Concevez et animez un quart d'heure sécurité percutant pour ancrer durablement la culture prévention.",
}

export const gestesQuiSauvent: FormationData = {
  slug: "formation-securite-gestes-qui-sauvent",
  category: "securite",
  metaTitle: "Formation Sensibilisation aux Gestes Qui Sauvent | Podium",
  metaDescription:
    "Sur une courte durée, acquérir et maîtriser les gestes de secours essentiels pour porter les premiers secours à une victime.",
  heroEyebrow: "Formation Sécurité · Certifiante",
  titleHighlight: "Gestes Qui Sauvent",
  heroDescription:
    "En une courte durée, acquérez et maîtrisez les gestes de secours essentiels pour porter les premiers secours à une victime en attendant les secours.",
  heroImage: "/images/atelier-sst-podium-securite.jpg",
  duree: "2 heures",
  participantsFull: "max. 15 personnes",
  participantsTitle: "max. 15",
  participantsSub: "participants",
  floatTitle: "Attestation GQS",
  floatSubtitle: "délivrée en fin de formation",
  approcheHeadingPre: "En 2 heures, donnez à vos équipes les",
  approcheHeadingHighlight: "réflexes qui sauvent.",
  approcheParagraphs: [
    "Face à une situation d'urgence, savoir réagir vite et bien peut tout changer. Cette sensibilisation transmet l'essentiel des gestes de premiers secours, en un format court et efficace.",
    "Formation pratique et participative : démonstrations commentées, mises en pratique immédiates et entraînements sur cas concrets, dans un environnement proche du réel.",
  ],
  stats: [
    { n: "2h", l: "format court et efficace" },
    { n: "100%", l: "pratique" },
    { n: "GQS", l: "attestation délivrée" },
  ],
  programmeSubtitle: "De la protection de la victime à la réanimation cardio-pulmonaire.",
  objectifs: [
    "Identifier une situation d'urgence et mettre en œuvre les premières actions de protection (victime, soi-même, témoins).",
    "Réaliser les gestes de premiers secours adaptés à l'état de la victime : alerte, position d'attente, arrêt d'un saignement, PLS, massage cardiaque.",
  ],
  programme: [
    "Identifier les dangers et assurer la protection de la victime, de soi-même et des témoins.",
    "Savoir alerter ou faire alerter les secours en transmettant les informations essentielles.",
    "Reconnaître une victime qui parle et se plaint et adopter la conduite adaptée.",
    "Intervenir face à un saignement abondant pour stopper l'hémorragie.",
    "Mettre une victime en position d'attente adaptée en cas de plaie grave.",
    "Prendre en charge une victime inconsciente qui respire (Position Latérale de Sécurité).",
    "Réagir face à une victime inconsciente qui ne respire pas : réanimation cardio-pulmonaire et défibrillateur.",
  ],
  methodes: [
    "Formation pratique et participative, avec démonstrations commentées réalisées par le formateur.",
    "Mise en pratique immédiate par les participants à travers des ateliers d'apprentissage.",
    "Entraînement sur des cas concrets et mises en situation proches de la réalité.",
  ],
  suiviParagraph:
    "Une attestation d'initiation aux Gestes Qui Sauvent est délivrée aux personnes ayant suivi l'intégralité de la formation.",
  suiviCertificate: "Attestation d'initiation GQS",
  pdf: "/documents/fiche-formation-gestes-qui-sauvent-2026.pdf",
  faq: [
    {
      question: "Quelle différence avec la formation Premiers Secours Citoyen ?",
      answer:
        "La Sensibilisation aux Gestes Qui Sauvent est un format court (2h) pour acquérir les réflexes essentiels. La formation Premiers Secours Citoyen est plus complète (7h) et débouche sur un certificat de compétences.",
    },
    {
      question: "Faut-il des prérequis ?",
      answer: "Aucun prérequis n'est nécessaire. La formation est accessible à tous et se concentre sur la pratique.",
    },
    {
      question: "Combien de participants ?",
      answer: "La formation accueille jusqu'à 15 participants et dure 2 heures.",
    },
  ],
  cardTitle: "Sensibilisation aux Gestes Qui Sauvent",
  cardDescription: "En 2 heures, donnez à vos équipes les réflexes essentiels pour porter les premiers secours.",
}

export const premiersSecoursCitoyen: FormationData = {
  slug: "formation-securite-premiers-secours-citoyen",
  category: "securite",
  metaTitle: "Formation Premiers Secours Citoyen | Podium",
  metaDescription:
    "Apprendre à protéger, alerter et intervenir face à une situation d'urgence. Certificat de compétences PSC.",
  heroEyebrow: "Formation Sécurité · Certifiante",
  titleHighlight: "Premiers Secours",
  titleSuffix: "Citoyen",
  heroDescription:
    "Apprenez les gestes qui sauvent : protéger une victime, alerter les secours et intervenir efficacement face à une situation d'urgence, jusqu'à la prise en charge par les services de secours.",
  heroImage: "/images/atelier-secourir-sans-panique-bobologie.png",
  duree: "7 heures",
  participantsFull: "2 à 10 personnes",
  participantsTitle: "2 à 10",
  participantsSub: "participants",
  floatTitle: "Certificat PSC",
  floatSubtitle: "délivré en fin de formation",
  approcheHeadingPre: "Face à l'urgence, chaque seconde compte. On transforme le stress en",
  approcheHeadingHighlight: "réflexes qui sauvent.",
  approcheParagraphs: [
    "La formation Premiers Secours Citoyen donne à vos collaborateurs les bons gestes pour protéger une victime, alerter les secours et agir efficacement en attendant leur arrivée.",
    "Par une pédagogie active et concrète, faite d'études de cas, de démonstrations commentées et de mises en situation réalistes, chaque participant s'entraîne aux gestes qui sauvent jusqu'à les maîtriser, dans un cadre bienveillant et sécurisant.",
  ],
  stats: [
    { n: "7h", l: "de pratique intensive" },
    { n: "100%", l: "mises en situation réelles" },
    { n: "PSC", l: "certificat de compétences" },
  ],
  programmeSubtitle: "De la protection de la victime à la réanimation cardio-pulmonaire.",
  objectifs: [
    "Protéger la victime et les témoins face à une situation d'urgence.",
    "Alerter les secours d'urgence et transmettre les informations essentielles.",
    "Exécuter correctement les gestes de premiers secours adaptés.",
    "Empêcher l'aggravation de l'état de la victime en attendant les secours.",
  ],
  programme: [
    "Identifier une situation d'accident et assurer la protection de la victime, de soi-même et des témoins afin d'éviter un suraccident.",
    "Alerter efficacement les services de secours, transmettre les informations essentielles et organiser l'intervention en attendant leur arrivée.",
    "Mettre en pratique les gestes adaptés : prise en charge d'une victime qui se plaint, arrêt d'un saignement abondant, position d'attente ou PLS.",
    "Intervenir face à une victime inconsciente ou en arrêt cardiaque : réanimation cardio-pulmonaire et utilisation d'un défibrillateur (DAE).",
  ],
  methodes: [
    "Études de cas pour faire le point sur les connaissances déjà acquises et celles à acquérir.",
    "Démonstrations pratiques et apprentissages pour acquérir les connaissances nécessaires.",
    "Cas concrets pour appliquer les acquis dans un environnement recréé.",
  ],
  suiviParagraph:
    "Le certificat de compétences PSC est délivré aux personnes ayant participé à l'ensemble de la formation, ayant réalisé tous les gestes de premiers secours lors des phases d'apprentissage et participé au moins une fois en tant que sauveteur à un cas concret.",
  suiviCertificate: "Certificat de compétences PSC",
  pdf: "/documents/fiche-formation-premiers-secours-citoyen-2026.pdf",
  faq: [
    {
      question: "À qui s'adresse la formation Premiers Secours Citoyen ?",
      answer:
        "Cette formation s'adresse à toute personne souhaitant acquérir les gestes essentiels de premiers secours, sans prérequis particulier. Elle permet à chacun de savoir protéger, alerter et intervenir face à une situation d'urgence du quotidien comme en entreprise.",
    },
    {
      question: "Une attestation ou un certificat est-il délivré ?",
      answer:
        "Oui. Le certificat de compétences PSC est délivré aux personnes ayant participé à l'ensemble de la formation, ayant réalisé tous les gestes de premiers secours lors des phases d'apprentissage et participé au moins une fois en tant que sauveteur à un cas concret.",
    },
    {
      question: "Quelle est la différence avec la Sensibilisation aux Gestes Qui Sauvent ?",
      answer:
        "La Sensibilisation aux Gestes Qui Sauvent est un format court (2h) pour acquérir les réflexes essentiels. La formation Premiers Secours Citoyen est plus complète (7h) : elle approfondit la pratique à travers des études de cas et des mises en situation, et débouche sur un certificat de compétences.",
    },
    {
      question: "Combien de temps dure la formation et combien de participants ?",
      answer:
        "La formation dure 7 heures et accueille de 2 à 10 participants, pour garantir un temps de pratique suffisant à chacun.",
    },
  ],
  cardTitle: "Premiers Secours Citoyen",
  cardDescription:
    "Protéger, alerter, intervenir : les gestes qui sauvent jusqu'à la prise en charge des secours. Certificat PSC.",
}

// ===================== QVCT =====================

export const lancerDynamiserReunion: FormationData = {
  slug: "formation-qvct-lancer-dynamiser-reunion",
  category: "qvct",
  metaTitle: "Formation Lancer et dynamiser une réunion | Podium",
  metaDescription:
    "Lancer ses réunions avec un icebreaker qui capte l'attention, crée du lien et met de l'énergie dès les premières minutes.",
  heroEyebrow: "Formation QVCT",
  titleHighlight: "Lancer & dynamiser",
  titleSuffix: "une réunion",
  heroDescription:
    "Apprenez à lancer vos réunions avec un icebreaker qui capte l'attention, met de l'énergie dans le groupe et crée du lien dès les premières minutes.",
  heroImage: "/images/seminaire-podium-1.jpg",
  duree: "3h30",
  participantsFull: "2 à 12 personnes",
  participantsTitle: "2 à 12",
  participantsSub: "participants",
  floatTitle: "Boîte à outils",
  floatSubtitle: "+ e-learning inclus",
  approcheHeadingPre: "Les premières minutes font toute la réunion. Donnez-leur de",
  approcheHeadingHighlight: "l'énergie et du sens.",
  approcheParagraphs: [
    "Un bon icebreaker instaure un climat de confiance, réduit les tensions et renforce le rôle du manager dans la cohésion du groupe.",
    "Formation ludique et incarnée : chaque participant vit les icebreakers, en comprend les effets et repart avec une véritable boîte à outils adaptée à son rôle.",
  ],
  stats: [
    { n: "3h30", l: "de formation" },
    { n: "+1h30", l: "d'e-learning inclus" },
    { n: "DISC", l: "adaptés aux profils" },
  ],
  programmeSubtitle: "Comprendre, expérimenter et s'approprier des icebreakers efficaces.",
  objectifs: [
    "Comprendre les enjeux d'un icebreaker en début de réunion : cohésion, énergie, attention, efficacité.",
    "Identifier les critères de réussite et adapter l'icebreaker aux profils DISC, au contexte et à l'environnement.",
    "Expérimenter et s'approprier plusieurs icebreakers simples, fun et applicables immédiatement.",
    "Savoir restituer un icebreaker avec son équipe dès le retour en entreprise.",
  ],
  programme: [
    "Comprendre l'importance des icebreakers pour instaurer la confiance et renforcer le rôle du manager.",
    "Identifier les objectifs d'un icebreaker et savoir les adapter aux profils DISC et au contexte.",
    "Expérimenter et analyser plusieurs icebreakers concrets pour savoir quand et comment les utiliser.",
    "S'approprier des outils pratiques pour animer soi-même un icebreaker et repartir avec une boîte à idées.",
  ],
  methodes: [
    "Méthodes actives et participatives : une formation ludique et incarnée où chacun vit les icebreakers.",
    "Une fiche icebreakers remise aux participants.",
    "1h30 de session e-learning pour tester et découvrir de nouveaux icebreakers.",
  ],
  suiviParagraph:
    "Une fiche icebreakers est remise aux participants, complétée par 1h30 de session e-learning pour prolonger l'apprentissage.",
  suiviCertificate: "Attestation de participation",
  pdf: "/documents/fiche-formation-lancer-dynamiser-reunion-2026.pdf",
  faq: [
    {
      question: "Qu'est-ce que la méthode DISC ?",
      answer:
        "C'est un modèle qui distingue quatre grands profils de personnalité. La formation apprend à adapter ses icebreakers à ces profils pour maximiser l'engagement.",
    },
    {
      question: "La formation est-elle pratique ?",
      answer:
        "Oui, elle est entièrement vécue : chaque participant expérimente les icebreakers et repart avec une boîte à outils directement réutilisable.",
    },
    {
      question: "Y a-t-il un suivi après la formation ?",
      answer: "Oui, 1h30 de session e-learning est incluse pour tester et découvrir de nouveaux icebreakers.",
    },
  ],
  cardTitle: "Lancer et dynamiser une réunion",
  cardDescription:
    "Captez l'attention dès les premières minutes avec des icebreakers qui créent du lien et de l'énergie.",
}

export const techniqueAnimation: FormationData = {
  slug: "formation-qvct-technique-animation",
  category: "qvct",
  metaTitle: "Formation Technique d'animation | Podium",
  metaDescription:
    "Donner vie à ses réunions pour capter l'attention, créer du lien et garder le cap jusqu'aux résultats.",
  heroEyebrow: "Formation QVCT",
  titleHighlight: "Technique",
  titleSuffix: "d'animation",
  heroDescription:
    "Donnez vie à vos réunions pour capter l'attention, créer du lien et garder le cap jusqu'aux résultats.",
  heroImage: "/images/seminaire-podium-2.jpg",
  duree: "3h30",
  participantsFull: "2 à 10 personnes",
  participantsTitle: "2 à 10",
  participantsSub: "participants",
  floatTitle: "Plan d'action",
  floatSubtitle: "+ e-learning inclus",
  approcheHeadingPre: "Une réunion qui marque, c'est une réunion",
  approcheHeadingHighlight: "vivante et rythmée.",
  approcheParagraphs: [
    "Comme au cinéma, une réunion réussie repose sur son décor, ses acteurs, son scénario et son rythme. C'est ce qui fait qu'on s'en souvient.",
    "Formation dynamique où chaque participant expérimente des techniques concrètes et repart avec une boîte à outils adaptée à ses objectifs.",
  ],
  stats: [
    { n: "3h30", l: "de formation" },
    { n: "3", l: "piliers d'une réunion vivante" },
    { n: "+1h30", l: "d'e-learning inclus" },
  ],
  programmeSubtitle: "Analyser, expérimenter et repartir avec un plan d'action.",
  objectifs: [
    "Comprendre les facteurs clés qui rendent une réunion vivante et engageante.",
    "Analyser l'environnement et les profils des participants pour adapter son animation.",
    "Expérimenter des techniques concrètes pour dynamiser le rythme et maintenir l'attention.",
    "Repartir avec un plan d'action opérationnel.",
  ],
  programme: [
    "Comprendre pourquoi certaines réunions marquent et d'autres non, à travers la métaphore du cinéma.",
    "Identifier les trois piliers d'une réunion vivante : l'environnement, les profils des participants (DISC) et le rythme.",
    "Expérimenter en sous-groupes la réécriture d'une réunion classique comme une véritable histoire.",
    "Construire et partager un plan d'action opérationnel.",
  ],
  methodes: [
    "Méthodes actives et participatives : une formation dynamique et concrète.",
    "Un plan d'action remis aux participants.",
    "1h30 de session e-learning pour approfondir les profils DISC et mettre en place des fiches actions.",
  ],
  suiviParagraph:
    "Un plan d'action est remis aux participants, complété par 1h30 de session e-learning pour approfondir les profils DISC.",
  suiviCertificate: "Attestation de participation",
  pdf: "/documents/fiche-formation-technique-animation-2026.pdf",
  faq: [
    {
      question: "En quoi consiste la métaphore du cinéma ?",
      answer:
        "Elle aide à penser la réunion comme une histoire : le décor, les acteurs, le scénario et le rythme. Un fil conducteur concret pour capter et garder l'attention.",
    },
    {
      question: "Quelle différence avec la formation Lancer et dynamiser une réunion ?",
      answer:
        "« Lancer une réunion » se concentre sur les icebreakers d'ouverture, tandis que « Technique d'animation » couvre l'animation de la réunion dans sa durée, du début à la fin.",
    },
    {
      question: "Repart-on avec quelque chose de concret ?",
      answer:
        "Oui, chaque participant construit son propre plan d'action opérationnel et bénéficie d'un module e-learning complémentaire.",
    },
  ],
  cardTitle: "Technique d'animation",
  cardDescription:
    "Rendez vos réunions vivantes et rythmées pour capter l'attention et garder le cap jusqu'aux résultats.",
}

export const communicationNonViolente: FormationData = {
  slug: "formation-qvct-communication-non-violente",
  category: "qvct",
  metaTitle: "Formation Communication Non Violente | Podium",
  metaDescription:
    "Renforcer ses compétences relationnelles pour des échanges respectueux et constructifs, même en situation de tension.",
  heroEyebrow: "Formation QVCT",
  titleHighlight: "Communication",
  titleSuffix: "Non Violente",
  heroDescription:
    "Renforcez vos compétences relationnelles pour favoriser un climat d'échanges respectueux et constructifs, même dans les contextes de tension ou de désaccord.",
  heroImage: "/images/atelier-communication-non-violente-CNV-min.jpg",
  duree: "7 heures",
  participantsFull: "2 à 10 personnes",
  participantsTitle: "2 à 10",
  participantsSub: "participants",
  floatTitle: "Attestation",
  floatSubtitle: "remise en fin de formation",
  approcheHeadingPre: "Parlez vrai, écoutez bien : transformez les tensions en",
  approcheHeadingHighlight: "dialogue constructif.",
  approcheParagraphs: [
    "La Communication Non Violente aide à comprendre les mécanismes de la relation et l'impact du cadre de référence de chacun dans les échanges.",
    "À travers des mises en situation et des outils pratiques, chaque participant développe une posture assertive et respectueuse pour désamorcer les situations d'agressivité.",
  ],
  stats: [
    { n: "7h", l: "de formation" },
    { n: "OSBD", l: "la méthode CNV" },
    { n: "100%", l: "mises en situation" },
  ],
  programmeSubtitle: "Des bases de la communication aux outils concrets de la CNV.",
  objectifs: [
    "Comprendre les mécanismes de la communication et l'impact du cadre de référence dans la relation.",
    "Expérimenter les outils de la Communication Non Violente pour transformer les tensions en dialogue constructif.",
    "Développer une posture professionnelle assertive et respectueuse pour désamorcer l'agressivité, notamment au téléphone.",
  ],
  programme: [
    "Recueillir les attentes et identifier les situations problématiques vécues.",
    "Maîtriser les bases de la communication : verbal, non verbal, para-verbal et cadre de référence.",
    "Découvrir la CNV avec la méthode OSBD : observation, sentiment, besoin, demande.",
    "Comprendre les émotions et la frustration.",
    "S'approprier des techniques de régulation : écoute active, reformulation, recentrage, phrases d'apaisement.",
    "S'entraîner par des jeux de rôles et des mises en situation.",
    "Construire un plan d'action individuel et collectif pour une utilisation durable.",
  ],
  methodes: THIAGI_METHODES,
  suiviParagraph: THIAGI_SUIVI,
  suiviCertificate: "Attestation de participation",
  pdf: "/documents/fiche-formation-communication-non-violente-2026.pdf",
  faq: [
    {
      question: "Qu'est-ce que la méthode OSBD ?",
      answer:
        "C'est le cœur de la CNV : Observation, Sentiment, Besoin, Demande. Un cadre en quatre temps pour exprimer les choses sans agresser et désamorcer les tensions.",
    },
    {
      question: "La formation est-elle adaptée aux situations au téléphone ?",
      answer:
        "Oui, elle inclut des techniques spécifiques (écoute active, reformulation, phrases d'apaisement) utiles notamment pour gérer l'agressivité au téléphone.",
    },
    {
      question: "Combien de temps dure la formation ?",
      answer: "La formation dure 7 heures et accueille de 2 à 10 participants.",
    },
  ],
  cardTitle: "Communication Non Violente",
  cardDescription:
    "Parlez vrai, écoutez bien : transformez les tensions en dialogue constructif grâce à la méthode OSBD.",
}

export const santeMentaleModule1: FormationData = {
  slug: "formation-qvct-sante-mentale-agressivite-verbale",
  category: "qvct",
  metaTitle: "Formation Santé Mentale · Module 1 : Gestion de l'agressivité verbale | Podium",
  metaDescription:
    "Prévenir les escalades verbales et garantir un cadre d'intervention sécurisant, en particulier pour les professionnels du domicile.",
  heroEyebrow: "Formation QVCT · Santé mentale",
  titleHighlight: "Santé Mentale",
  titleSuffix: "· Module 1",
  heroDescription:
    "Module 1 : gestion de l'agressivité verbale. Renforcez les compétences relationnelles et émotionnelles de vos équipes pour prévenir les escalades verbales et garantir un cadre d'intervention sécurisant.",
  heroImage: "/images/stress-management-confidence-workshop.png",
  duree: "3 heures",
  participantsFull: "4 à 12 personnes",
  participantsTitle: "4 à 12",
  participantsSub: "participants",
  floatTitle: "Certificat",
  floatSubtitle: "de réalisation",
  approcheHeadingPre: "Désamorcer une montée de tension, c'est protéger les équipes et",
  approcheHeadingHighlight: "prévenir les risques psychosociaux.",
  approcheParagraphs: [
    "L'agressivité verbale déclenche des réactions émotionnelles et physiologiques qu'il est essentiel de comprendre pour mieux y répondre.",
    "Approche active et réflexive, ancrée dans l'expérience terrain : analyse de situations vécues, entraînement à la pose de limites et construction d'un plan personnel de préservation.",
  ],
  stats: [
    { n: "3h", l: "de formation" },
    { n: "RPS", l: "prévention ciblée" },
    { n: "100%", l: "ancré sur le terrain" },
  ],
  programmeSubtitle: "Comprendre, réguler et désamorcer avec une méthode structurée.",
  objectifs: [
    "Comprendre les mécanismes émotionnels et physiologiques déclenchés par l'agressivité verbale.",
    "Identifier ses réactions automatiques face à une situation tendue.",
    "Désamorcer une montée de tension dans le respect du cadre professionnel.",
    "Prévenir l'usure émotionnelle et le stress chronique.",
    "Contribuer à la réduction des risques psychosociaux liés aux situations d'agressivité.",
  ],
  programme: [
    "Comprendre les mécanismes de l'agressivité au domicile.",
    "Réguler sa posture face à une montée de tension.",
    "Désamorcer une escalade verbale avec une méthode structurée.",
    "Construire sa boîte à outils opérationnelle.",
  ],
  methodes: RPS_METHODES,
  suiviParagraph: RPS_SUIVI,
  suiviCertificate: "Certificat de réalisation",
  pdf: "/documents/fiche-formation-sante-mentale-module-1-2026.pdf",
  faq: [
    {
      question: "À qui s'adresse ce module ?",
      answer:
        "Il s'adresse en priorité aux professionnels du domicile et plus largement à toute équipe exposée à l'agressivité verbale dans son activité.",
    },
    {
      question: "Ce module peut-il se suivre seul ?",
      answer:
        "Oui. Il fait partie d'un parcours Santé Mentale en trois modules, mais chacun peut être suivi indépendamment selon vos besoins.",
    },
    {
      question: "Combien de temps dure le module ?",
      answer: "Le module dure 3 heures et accueille de 4 à 12 participants.",
    },
  ],
  cardTitle: "Santé Mentale · Module 1 : Agressivité verbale",
  cardDescription: "Prévenez les escalades verbales et désamorcez les tensions avec une méthode structurée.",
}

export const santeMentaleModule2: FormationData = {
  slug: "formation-qvct-sante-mentale-situations-dangereuses",
  category: "qvct",
  metaTitle: "Formation Santé Mentale · Module 2 : Se préserver face aux situations dangereuses | Podium",
  metaDescription:
    "Adopter une posture relationnelle régulée et sécurisante pour se préserver face à l'agressivité verbale.",
  heroEyebrow: "Formation QVCT · Santé mentale",
  titleHighlight: "Santé Mentale",
  titleSuffix: "· Module 2",
  heroDescription:
    "Module 2 : se préserver face aux situations dangereuses. Apprenez à adopter une posture relationnelle régulée et sécurisante pour vous préserver face à l'agressivité verbale.",
  heroImage: "/images/atelier-CNV-agressivite-physique.jpg",
  duree: "3 heures",
  participantsFull: "4 à 12 personnes",
  participantsTitle: "4 à 12",
  participantsSub: "participants",
  floatTitle: "Certificat",
  floatSubtitle: "de réalisation",
  approcheHeadingPre: "Se préserver durablement, c'est renforcer le",
  approcheHeadingHighlight: "soutien collectif.",
  approcheParagraphs: [
    "L'exposition répétée aux situations difficiles génère une usure émotionnelle et un stress chronique qu'il faut savoir identifier.",
    "Approche active et réflexive : analyse de situations vécues, stratégies de protection concrètes et renforcement du soutien collectif.",
  ],
  stats: [
    { n: "3h", l: "de formation" },
    { n: "RPS", l: "prévention ciblée" },
    { n: "100%", l: "ancré sur le terrain" },
  ],
  programmeSubtitle: "Identifier l'usure, se protéger et réguler durablement.",
  objectifs: [
    "Identifier les facteurs d'usure émotionnelle.",
    "Comprendre les mécanismes du stress chronique.",
    "Adopter des stratégies de protection concrètes.",
    "Renforcer le soutien collectif.",
  ],
  programme: [
    "Comprendre les mécanismes d'usure émotionnelle.",
    "Analyser son fonctionnement face aux situations difficiles.",
    "S'entraîner à poser un cadre protecteur.",
    "Mettre en place des outils concrets de régulation.",
  ],
  methodes: RPS_METHODES,
  suiviParagraph: RPS_SUIVI,
  suiviCertificate: "Certificat de réalisation",
  pdf: "/documents/fiche-formation-sante-mentale-module-2-2026.pdf",
  faq: [
    {
      question: "Faut-il avoir suivi le Module 1 ?",
      answer:
        "Non. Les modules Santé Mentale sont complémentaires mais peuvent se suivre indépendamment selon vos priorités.",
    },
    {
      question: "Quel est l'objectif principal de ce module ?",
      answer:
        "Permettre aux salariés de se préserver face à l'agressivité verbale en adoptant une posture régulée et sécurisante, et en renforçant le soutien collectif.",
    },
    {
      question: "Combien de temps dure le module ?",
      answer: "Le module dure 3 heures et accueille de 4 à 12 participants.",
    },
  ],
  cardTitle: "Santé Mentale · Module 2 : Se préserver",
  cardDescription:
    "Identifiez l'usure émotionnelle et adoptez des stratégies de protection durables face aux situations difficiles.",
}

export const santeMentaleModule3: FormationData = {
  slug: "formation-qvct-sante-mentale-detecter-mal-etre",
  category: "qvct",
  metaTitle: "Formation Santé Mentale · Module 3 : Détecter une personne en détresse | Podium",
  metaDescription:
    "Repérer les premiers signes de mal-être, écouter avec justesse et réagir de manière adaptée pour prévenir les risques psychosociaux.",
  heroEyebrow: "Formation QVCT · Santé mentale",
  titleHighlight: "Santé Mentale",
  titleSuffix: "· Module 3",
  heroDescription:
    "Module 3 : détecter une personne en détresse ou en situation de mal-être. Développez une posture pour repérer les premiers signes, écouter avec justesse et réagir de manière adaptée.",
  heroImage: "/images/podium_organisme_formation_atelier_sophrologie-min.png",
  duree: "3 heures",
  participantsFull: "4 à 12 personnes",
  participantsTitle: "4 à 12",
  participantsSub: "participants",
  floatTitle: "Certificat",
  floatSubtitle: "de réalisation",
  approcheHeadingPre: "Repérer tôt les signes de mal-être, c'est",
  approcheHeadingHighlight: "prévenir et protéger.",
  approcheParagraphs: [
    "Savoir distinguer les faits observables des interprétations et adopter une posture d'écoute sécurisante permet d'intervenir au bon moment.",
    "Approche active et réflexive ancrée sur le terrain : mises en situation, échanges de pratiques et outils concrets pour réagir et transmettre l'information.",
  ],
  stats: [
    { n: "3h", l: "de formation" },
    { n: "RPS", l: "prévention ciblée" },
    { n: "100%", l: "ancré sur le terrain" },
  ],
  programmeSubtitle: "Repérer les signaux, adapter sa posture et savoir réagir.",
  objectifs: [
    "Identifier les signaux précoces de mal-être chez un usager ou un collègue.",
    "Distinguer les faits observables des interprétations.",
    "Adopter une posture d'écoute professionnelle et sécurisante.",
    "Savoir réagir de manière adaptée et transmettre l'information.",
    "Contribuer à la prévention des risques psychosociaux au sein de la structure.",
  ],
  programme: [
    "Repérer les signes de mal-être chez un collègue.",
    "Détecter les signaux d'alerte chez un usager à domicile.",
    "Adapter sa posture professionnelle face à une personne vulnérable.",
    "S'entraîner avec des situations terrain et des outils pratiques.",
  ],
  methodes: RPS_METHODES,
  suiviParagraph: RPS_SUIVI,
  suiviCertificate: "Certificat de réalisation",
  pdf: "/documents/fiche-formation-sante-mentale-module-3-2026.pdf",
  faq: [
    {
      question: "À qui s'adresse ce module ?",
      answer:
        "Aux professionnels en contact avec des usagers ou des collègues potentiellement en difficulté, notamment dans le secteur du domicile et de l'aide à la personne.",
    },
    {
      question: "Apprend-on à poser un diagnostic ?",
      answer:
        "Non. L'objectif n'est pas de diagnostiquer mais de repérer les signaux d'alerte, d'adopter la bonne posture d'écoute et de transmettre l'information aux bons interlocuteurs.",
    },
    {
      question: "Peut-on suivre les trois modules Santé Mentale ?",
      answer: "Oui, les trois modules forment un parcours complet, mais chacun peut aussi être suivi indépendamment.",
    },
  ],
  cardTitle: "Santé Mentale · Module 3 : Détecter le mal-être",
  cardDescription: "Repérez les premiers signes de mal-être, écoutez avec justesse et réagissez de manière adaptée.",
}

export const valoriserPosture: FormationData = {
  slug: "formation-qvct-valoriser-posture-professionnelle",
  category: "qvct",
  metaTitle: "Formation Valoriser sa posture professionnelle | Podium",
  metaDescription:
    "Découvrir les codes de l'entreprise et apprendre à se positionner vis-à-vis de ses collègues et de sa hiérarchie.",
  heroEyebrow: "Formation QVCT",
  titleHighlight: "Valoriser sa posture",
  titleSuffix: "pro",
  heroDescription:
    "Découvrez les codes de l'entreprise et apprenez à vous positionner vis-à-vis de vos collègues comme de votre hiérarchie, avec confiance.",
  heroImage: "/images/atelier-accompagnement-posture-pro-min.jpg",
  duree: "7 à 14 heures",
  participantsFull: "6 à 12 personnes",
  participantsTitle: "6 à 12",
  participantsSub: "participants",
  floatTitle: "Attestation",
  floatSubtitle: "remise en fin de formation",
  approcheHeadingPre: "Mieux se connaître pour mieux se positionner et",
  approcheHeadingHighlight: "gagner en confiance.",
  approcheParagraphs: [
    "Les savoir-être tiennent une place essentielle dans le quotidien professionnel et influencent durablement la relation aux autres.",
    "Par des méthodes actives et le sport-transfert, chaque participant identifie ses forces et ses axes de progrès, et développe la confiance nécessaire pour mieux se valoriser.",
  ],
  stats: [
    { n: "7-14h", l: "de formation" },
    { n: "DISC", l: "mieux se connaître" },
    { n: "100%", l: "sport-transfert" },
  ],
  programmeSubtitle: "Des savoir-être à la confiance en soi, en passant par la méthode DISC.",
  objectifs: [
    "Comprendre la place des savoir-être dans son quotidien et leurs répercussions professionnelles.",
    "Identifier ses forces et ses faiblesses à travers ses savoir-être.",
    "Gagner en confiance en soi pour mieux se valoriser.",
  ],
  programme: [
    "Perception et communication : qui suis-je et comment suis-je perçu ?",
    "Découvrir la méthode DISC.",
    "Développer la confiance en soi pour gérer sa posture au quotidien.",
    "Distinguer estime de soi et confiance en soi.",
    "Comprendre les codes et la hiérarchie de son milieu professionnel.",
    "Gérer ses émotions au sein d'un collectif, y compris en environnement extérieur.",
    "Explorer les liens entre un salarié et un sportif.",
  ],
  methodes: [
    "Méthodes actives inspirées des jeux-cadres de Thiagi et d'une diversité de supports interactifs.",
    "Sport-transfert : mises en situation pratiques et sportives pour transmettre les valeurs du sport.",
  ],
  suiviParagraph: THIAGI_SUIVI,
  suiviCertificate: "Attestation de participation",
  pdf: "/documents/fiche-formation-valoriser-posture-pro-2026.pdf",
  faq: [
    {
      question: "Qu'est-ce que le sport-transfert ?",
      answer:
        "C'est l'approche signature de Podium : transposer les valeurs et les réflexes du sport (cohésion, dépassement, respect) dans le contexte professionnel, par la mise en situation.",
    },
    {
      question: "Qu'est-ce que la méthode DISC ?",
      answer:
        "Un modèle qui distingue quatre grands profils de personnalité. Il aide à mieux se connaître et à ajuster sa posture face aux autres.",
    },
    {
      question: "Quelle est la durée de la formation ?",
      answer: "La durée s'adapte à vos objectifs, de 7 à 14 heures, pour des groupes de 6 à 12 participants.",
    },
  ],
  cardTitle: "Valoriser sa posture professionnelle",
  cardDescription:
    "Découvrez les codes de l'entreprise et gagnez en confiance pour mieux vous positionner et vous valoriser.",
}

export const securiteFormations: FormationData[] = [
  reveilMusculaire,
  gesteEtPosture,
  animationQuartHeure,
  gestesQuiSauvent,
  premiersSecoursCitoyen,
]

export const qvctFormations: FormationData[] = [
  lancerDynamiserReunion,
  techniqueAnimation,
  communicationNonViolente,
  santeMentaleModule1,
  santeMentaleModule2,
  santeMentaleModule3,
  valoriserPosture,
]

export const allFormations: FormationData[] = [...securiteFormations, ...qvctFormations]
