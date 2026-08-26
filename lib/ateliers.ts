export interface AtelierData {
  slug: string
  category: "securite" | "qvct"
  metaTitle: string
  metaDescription: string
  titlePrefix?: string
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
  participants: string
  espace: string
  approcheHeadingPre: string
  approcheHeadingHighlight: string
  approcheParagraphs: string[]
  stats: { n: string; l: string }[]
  objectifs: string[]
  deroule: string[]
  methodes: string[]
  pdf?: string
  cardTitle: string
  cardDescription: string
}

// ===================== SÉCURITÉ =====================

export const secourirSansPanique: AtelierData = {
  slug: "secourir-sans-panique",
  category: "securite",
  metaTitle: "Atelier Secourir Sans Panique : bobologie",
  metaDescription:
    "Apprendre les gestes simples face aux petites blessures du quotidien grâce à des mises en situation pratiques. Animé en entreprise en Rhône-Alpes.",
  titlePrefix: "Secourir",
  titleHighlight: "sans panique",
  heroDescription:
    "Un atelier pratique pour apprendre à réagir face aux petites blessures du quotidien, adopter les gestes simples qui sécurisent et orienter correctement une victime.",
  heroImage: "/images/atelier-secourir-sans-panique-bobologie.png",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "5m x 5m en intérieur, tables à disposition",
  approcheHeadingPre: "Les petits bobos du quotidien méritent les bons réflexes :",
  approcheHeadingHighlight: "sans panique et sans improvisation.",
  approcheParagraphs: [
    "Plaies, coupures, brûlures légères : la bobologie fait partie de la vie de toutes les équipes. Cet atelier donne à chacun les gestes simples et sûrs à appliquer immédiatement, avant l'intervention d'un secouriste ou d'un professionnel de santé.",
    "Quiz interactif, fausses plaies, jeux de rôle en binôme : on apprend en pratiquant, dans la bonne humeur, et on repart en sachant quand agir soi-même et quand passer le relais.",
  ],
  stats: [
    { n: "45min", l: "maximum" },
    { n: "100%", l: "pratique" },
    { n: "4+", l: "participants" },
  ],
  objectifs: [
    "Identifier les situations courantes de bobologie au travail : petites plaies, coupures, brûlures légères.",
    "Adopter les gestes simples et sûrs à appliquer immédiatement avant l'intervention d'un secouriste ou d'un professionnel de santé.",
    "Savoir alerter et orienter correctement selon la gravité, pour éviter l'aggravation d'une blessure.",
  ],
  deroule: [
    "Introduction avec un icebreaker : et vous, votre dernière bobologie ?",
    "Quiz collectif vrai ou faux : différencier les petits soins à faire soi-même et les cas nécessitant un relais (secouriste, SAMU...).",
    "Atelier pratique en sous-groupes : simulation d'un geste simple (nettoyer une plaie, poser une compresse, réagir à une brûlure).",
    "Jeu de rôle en binôme : je suis blessé / je suis le collègue secourant.",
  ],
  methodes: [
    "Méthodes actives et participatives : mini quiz interactif « Bobologie ou urgence ? ».",
    "Mise en pratique avec pansements, désinfectants et fausses plaies.",
    "Pédagogie ludique et inclusive avec jeux de rôle en binôme.",
  ],
  pdf: "/documents/atelier-secourir-sans-panique-bobologie.pdf",
  cardTitle: "Secourir sans panique",
  cardDescription:
    "Les gestes simples face aux petites blessures du quotidien, appris par la pratique et les mises en situation.",
}

export const sensibiliserHandicapAuditif: AtelierData = {
  slug: "sensibiliser-au-handicap",
  category: "securite",
  metaTitle: "Atelier Sensibilisation au Handicap Auditif",
  metaDescription:
    "Un atelier immersif pour comprendre le handicap auditif et découvrir des solutions de communication simples. Animé en entreprise en Rhône-Alpes.",
  titlePrefix: "Sensibiliser au",
  titleHighlight: "handicap auditif",
  heroDescription:
    "Un atelier immersif pour comprendre les défis du handicap auditif, expérimenter des situations concrètes et découvrir des solutions de communication simples et efficaces.",
  heroImage: "/images/atelier-sensibilisation-handicap-auditif.png",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "5m x 5m en intérieur ou extérieur, tables à disposition",
  approcheHeadingPre: "Comprendre le handicap auditif, c'est d'abord",
  approcheHeadingHighlight: "le vivre quelques minutes.",
  approcheParagraphs: [
    "Casque ou bouchons d'oreilles : chaque participant expérimente tour à tour la situation d'une personne malentendante et celle de son interlocuteur. Une information simple, un message long, un défi à faire réaliser : la communication se réinvente.",
    "Le débriefing collectif permet de partager les ressentis et de repartir avec des techniques d'adaptation simples, applicables immédiatement avec ses collègues ou ses clients.",
  ],
  stats: [
    { n: "45min", l: "maximum" },
    { n: "100%", l: "immersif" },
    { n: "4+", l: "participants" },
  ],
  objectifs: [
    "Sensibiliser aux difficultés rencontrées par une personne malentendante.",
    "Découvrir des solutions de communication simples.",
  ],
  deroule: [
    "Des binômes sont formés : une personne devient malentendante (casque ou bouchons).",
    "La personne entendante échange avec son partenaire : d'abord une information simple, puis un long message, enfin un défi à faire réaliser.",
    "Les rôles sont échangés au bout de quelques minutes.",
    "Débriefing collectif : partage des ressentis et des techniques d'adaptation mises en place.",
  ],
  methodes: [
    "Pédagogie expérimentale et ludique avec mises en situation et moments de co-analyse.",
    "Ambiance musicale.",
    "Encadrement par un animateur APA.",
  ],
  pdf: "/documents/atelier-sensibilisation-handicap-auditif.pdf",
  cardTitle: "Sensibiliser au handicap auditif",
  cardDescription:
    "Vivre quelques minutes la situation d'une personne malentendante et découvrir des solutions de communication simples.",
}

export const sensibiliserHandicapVisuel: AtelierData = {
  slug: "sensibiliser-au-handicap-visuel",
  category: "securite",
  metaTitle: "Atelier Sensibilisation au Handicap Visuel",
  metaDescription:
    "Expérimenter les défis du handicap visuel et apprendre des techniques de guidage en binôme. Atelier immersif animé en entreprise en Rhône-Alpes.",
  titlePrefix: "Sensibiliser au",
  titleHighlight: "handicap visuel",
  heroDescription:
    "Un atelier immersif pour comprendre les défis du handicap visuel, développer la confiance en binôme et expérimenter des techniques simples de communication et de guidage.",
  heroImage: "/images/atelier-sensibiliser-handicap-visuel-1.jpg",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "5m x 5m en intérieur ou extérieur, tables à disposition",
  approcheHeadingPre: "Guider et se laisser guider :",
  approcheHeadingHighlight: "une leçon de confiance.",
  approcheParagraphs: [
    "Bandeau sur les yeux, chaque participant expérimente un parcours en étant guidé uniquement par la voix et le bras de son binôme. Une expérience forte qui fait comprendre, de l'intérieur, les défis du handicap visuel.",
    "Le débriefing collectif transforme les ressentis en apprentissages : techniques de guidage, communication précise, attention à l'autre. Des réflexes utiles bien au-delà de l'atelier.",
  ],
  stats: [
    { n: "45min", l: "maximum" },
    { n: "100%", l: "immersif" },
    { n: "4+", l: "participants" },
  ],
  objectifs: [
    "Sensibiliser aux difficultés rencontrées par une personne malvoyante.",
    "Apprendre à faire confiance à son partenaire.",
    "Découvrir des solutions de communication simples.",
  ],
  deroule: [
    "Des binômes sont formés : une personne devient malvoyante (bandeau ou masque).",
    "La personne voyante guide son partenaire sur un parcours.",
    "Les rôles sont échangés au bout de quelques minutes.",
    "Débriefing collectif : partage des ressentis et des techniques d'adaptation mises en place.",
  ],
  methodes: [
    "Pédagogie expérimentale et ludique avec mises en situation et moments de co-analyse.",
    "Apprentissage autonome.",
    "Encadrement par un animateur APA.",
  ],
  pdf: "/documents/atelier-sensibilisation-handicap-visuel.pdf",
  cardTitle: "Sensibiliser au handicap visuel",
  cardDescription:
    "Un parcours guidé les yeux bandés pour développer confiance, communication et attention à l'autre.",
}

export const gesteEtPosturePetanque: AtelierData = {
  slug: "geste-et-posture-petanque",
  category: "securite",
  metaTitle: "Atelier Gestes et Postures façon pétanque",
  metaDescription:
    "La pétanque pour sensibiliser aux bonnes postures et prévenir les TMS en s'amusant. Atelier prévention animé en entreprise, Ain & Rhône-Alpes.",
  titlePrefix: "Geste et posture",
  titleHighlight: "pétanque",
  heroDescription:
    "Un atelier ludique qui utilise la pétanque pour sensibiliser aux bonnes postures, comprendre l'impact des mauvaises habitudes et intégrer des corrections concrètes en s'amusant.",
  heroImage: "/images/atelier-geste-et-posture-petanque-4.png",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "7m x 3m en intérieur ou extérieur, sur sol plat",
  approcheHeadingPre: "Se baisser, ramasser, lancer : la pétanque concentre",
  approcheHeadingHighlight: "tous les gestes du quotidien.",
  approcheParagraphs: [
    "Une partie de pétanque, c'est une succession de flexions, de ports de charge et de gestes répétés : exactement les situations qui, mal exécutées, favorisent les TMS au travail.",
    "L'atelier alterne jeu et corrections en instantané : on ressent l'impact d'une mauvaise posture, on comprend, on corrige, et on rejoue avec les bons réflexes.",
  ],
  stats: [
    { n: "45min", l: "maximum" },
    { n: "TMS", l: "prévention" },
    { n: "4+", l: "participants" },
  ],
  objectifs: [
    "Sensibiliser les pratiquants à l'impact d'une mauvaise posture dans une situation du quotidien.",
    "Permettre aux pratiquants de ressentir et de mieux appréhender l'importance d'une posture en adéquation avec le mouvement associé.",
  ],
  deroule: [
    "L'atelier démarre par une partie de pétanque au temps.",
    "Ensuite, il s'agit de comprendre l'impact qu'une mauvaise posture peut avoir sur soi.",
    "Enfin, des corrections sont présentées et proposées lors d'une nouvelle partie de pétanque.",
  ],
  methodes: [
    "Pédagogie ludique : réalisation d'une vraie partie de pétanque.",
    "Mise en situation avec des apports correctifs en instantané.",
    "Travail en sous-groupes et débat participatif.",
  ],
  pdf: "/documents/atelier-geste-et-posture-petanque-securite.pdf",
  cardTitle: "Geste et posture pétanque",
  cardDescription:
    "La pétanque pour ressentir l'impact des mauvaises postures et intégrer les bons réflexes en s'amusant.",
}

export const murDesAddictions: AtelierData = {
  slug: "le-mur-des-addictions",
  category: "securite",
  metaTitle: "Atelier Le Mur des Addictions",
  metaDescription:
    "Sensibilisation aux addictions au travail avec lunettes de simulation et mises en situation percutantes. Atelier prévention en entreprise, Rhône-Alpes.",
  titlePrefix: "Le mur des",
  titleHighlight: "addictions",
  heroDescription:
    "Un atelier ludique et percutant qui sensibilise aux impacts des addictions à travers des mises en situation dynamiques et l'usage de lunettes de simulation.",
  heroImage: "/images/atelier-le-mur-des-addictions-image-2.jpg",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "5m x 5m en intérieur ou extérieur, prises de courant à disposition",
  approcheHeadingPre: "Aborder un sujet tabou",
  approcheHeadingHighlight: "par le jeu et le ressenti.",
  approcheParagraphs: [
    "Alcool, cannabis, fatigue : les lunettes de simulation font ressentir physiquement les effets d'une addiction sur la coordination, la vision et les réflexes. Le comparatif de scores avec et sans effet parle de lui-même.",
    "Sessions minutées, défis rythmés, fous rires garantis : le message de prévention passe d'autant mieux qu'il est vécu plutôt que subi.",
  ],
  stats: [
    { n: "1min", l: "par passage" },
    { n: "100%", l: "ludique" },
    { n: "4+", l: "participants" },
  ],
  objectifs: [
    "Découvrir l'impact qu'une addiction peut avoir sur notre quotidien.",
    "Aborder des thèmes souvent tabous sous un angle ludique.",
    "Placer le pratiquant dans une situation de stress lié au temps et à l'enjeu afin de développer sa réactivité d'action.",
  ],
  deroule: [
    "Des sessions minutées pour des passages sans perte de temps et d'attention.",
    "Des comparatifs de scores entre les parties sans et sous effet, grâce à des lunettes de simulation.",
    "Du fun et des rires pour faire passer votre message de prévention de manière efficace et originale.",
  ],
  methodes: [
    "Pédagogie active et ludique : une partie dynamique dure en moyenne 1 minute.",
    "Travail collaboratif.",
    "Mise en pratique avec du matériel spécifique (lunettes de simulation d'addiction) permettant de ressentir les méfaits d'une addiction sur le corps.",
  ],
  pdf: "/documents/atelier-le-mur-des-addictions-securite.pdf",
  cardTitle: "Le mur des addictions",
  cardDescription:
    "Lunettes de simulation et défis minutés pour faire ressentir les effets des addictions et faire passer le message.",
}

export const reveilMusculaireLudique: AtelierData = {
  slug: "reveil-musculaire-ludique",
  category: "securite",
  metaTitle: "Atelier Réveil Musculaire Ludique",
  metaDescription:
    "L'échauffement en équipe version jeu : musique, défis et routine collective pour prévenir les TMS. Atelier animé en entreprise, Ain & Rhône-Alpes.",
  titlePrefix: "Réveil musculaire",
  titleHighlight: "ludique",
  heroDescription:
    "Un atelier énergisant qui fait vivre l'échauffement en équipe, avec des jeux dynamiques et une ambiance musicale pour installer une routine collective et motivante.",
  heroImage: "/images/reveil-musculaire-podium-atelier.jpg",
  video: {
    src: "/videos/formation-reveil-musculaire-podium.mp4",
    poster: "/images/video-poster-reveil-musculaire.jpg",
    title: "Le réveil musculaire en action",
    duration: "1 min 25",
    iso: "PT1M25S",
    description:
      "Découvrez en vidéo un atelier réveil musculaire ludique animé par Podium en entreprise : jeux, mouvement et énergie collective.",
  },
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "6m x 6m en intérieur ou extérieur, sur sol plat",
  approcheHeadingPre: "L'échauffement devient un jeu :",
  approcheHeadingHighlight: "le corps suit, l'équipe aussi.",
  approcheParagraphs: [
    "Jeux échauffants, défis variés, musique : les participants s'affrontent dans la bonne humeur pendant que le corps se prépare. L'animateur adapte chaque jeu aux contraintes physiques de chacun.",
    "Chacun ressent les effets de l'échauffement, partage ses ressentis et repart avec l'envie d'installer une routine collective durable dans son équipe.",
  ],
  stats: [
    { n: "45min", l: "maximum" },
    { n: "TMS", l: "prévention" },
    { n: "4+", l: "participants" },
  ],
  objectifs: [
    "Vivre l'échauffement et s'engager dans une pratique régulière.",
    "Sentir et exprimer les bienfaits de l'échauffement en équipe.",
    "Créer et partager une routine dynamique innovante.",
  ],
  deroule: [
    "L'animateur propose des jeux échauffants et les participants s'affrontent dans des défis variés.",
    "Au besoin, l'animateur adapte chaque jeu aux contraintes physiques de chacun.",
    "Chacun ressent les effets de l'échauffement et partage ses ressentis lors des temps de feedback.",
  ],
  methodes: [
    "Pédagogie participative et ludique.",
    "Ambiance musicale.",
    "Apprentissage par l'exemple : démonstration de l'animateur puis correction individuelle.",
  ],
  pdf: "/documents/atelier-reveil-musculaire-ludique-securite.pdf",
  cardTitle: "Réveil musculaire ludique",
  cardDescription:
    "L'échauffement en équipe version jeu, avec musique et défis, pour installer une routine collective et prévenir les TMS.",
}

export const deconnecteTonEcran: AtelierData = {
  slug: "deconnecte-ton-ecran",
  category: "securite",
  metaTitle: "Atelier Déconnecte ton écran, reconnecte le terrain",
  metaDescription:
    "Mesurer l'impact du téléphone sur la concentration et les réflexes grâce à des exercices avec pods lumineux. Atelier prévention en entreprise, Rhône-Alpes.",
  titlePrefix: "Déconnecte ton écran,",
  titleHighlight: "reconnecte le terrain",
  heroDescription:
    "Un atelier qui fait mesurer concrètement l'impact du téléphone sur la concentration, les réflexes et la vigilance, à travers des exercices dynamiques avec pods lumineux.",
  heroImage: "/images/atelier-sst-podium-securite.jpg",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "En intérieur ou extérieur",
  approcheHeadingPre: "Le téléphone au travail :",
  approcheHeadingHighlight: "on mesure, on compare, on comprend.",
  approcheParagraphs: [
    "Un premier passage sur pods lumineux sans téléphone, un second avec une distraction en main : la différence de réactivité, d'erreurs et d'attention saute aux yeux. Aucune leçon de morale, juste un constat que chacun fait par lui-même.",
    "Le débriefing fait ensuite le lien avec les situations réelles de travail : zones de circulation, chariots, bagages, passagers... là où une seconde d'inattention peut coûter cher.",
  ],
  stats: [
    { n: "45min", l: "maximum" },
    { n: "x2", l: "passages comparés" },
    { n: "4+", l: "participants" },
  ],
  objectifs: [
    "Comprendre que le téléphone réduit la concentration, même sur une tâche simple.",
    "Identifier les moments où l'usage du téléphone devient un risque.",
    "Mesurer l'impact d'une distraction sur les réflexes et la vigilance.",
  ],
  deroule: [
    "Premier exercice avec des pods lumineux, sans téléphone, pour mesurer son niveau de concentration, sa réactivité et son attention à l'environnement.",
    "Second passage, le même exercice avec un téléphone en main ou une distraction simulée : impact immédiat sur les réflexes, les erreurs, le regard et la qualité d'exécution.",
    "Débrief collectif : faire le lien avec les situations réelles de travail (passagers, fauteuils roulants, chariots, bagages, zones de circulation...).",
  ],
  methodes: [
    "Pédagogie active et ludique : des passages dynamiques et minutés.",
    "Travail collaboratif et comparaison des résultats avec et sans distraction.",
    "Mise en pratique avec du matériel spécifique (pods lumineux de réactivité).",
  ],
  cardTitle: "Déconnecte ton écran, reconnecte le terrain",
  cardDescription:
    "Des exercices avec pods lumineux pour mesurer l'impact réel du téléphone sur la concentration et les réflexes.",
}

// ===================== QVCT =====================

export const posturePro: AtelierData = {
  slug: "posture-pro-defi-flash",
  category: "qvct",
  metaTitle: "Atelier Posture Pro : défi flash",
  metaDescription:
    "Des défis courts et ludiques pour développer confiance, stabilité et savoir-être professionnel. Atelier QVCT animé en entreprise en Rhône-Alpes.",
  titlePrefix: "La posture pro",
  titleHighlight: "défi flash",
  heroDescription:
    "Un atelier dynamique pour explorer sa posture professionnelle, développer confiance et stabilité, et mobiliser son savoir-être à travers des défis courts et ludiques.",
  heroImage: "/images/atelier-posture-pro-defi-flash.png",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "5m x 5m en intérieur, tables à disposition",
  approcheHeadingPre: "Une minute par défi pour révéler",
  approcheHeadingHighlight: "les savoir-être qui comptent.",
  approcheParagraphs: [
    "Des défis courts et rythmés, en 1 contre 1 ou en équipe, qui mobilisent le corps et le mental autour des valeurs du savoir-être professionnel : concentration, engagement, coopération.",
    "Chaque défi dure une minute : rapide, ludique et accessible à tous. Les postures observées pendant le jeu sont ensuite reliées à celles attendues dans l'entreprise.",
  ],
  stats: [
    { n: "1min", l: "par défi" },
    { n: "100%", l: "dynamique" },
    { n: "4+", l: "participants" },
  ],
  objectifs: [
    "Prendre conscience de sa posture professionnelle.",
    "Identifier les postures adaptées à son environnement de travail à travers des mises en situation ludiques.",
    "Relier les postures observées pendant le jeu à celles attendues dans l'entreprise, en lien avec la prévention de la santé mentale.",
  ],
  deroule: [
    "Une série de défis courts et rythmés, réalisés en 1 contre 1 ou en équipe, pour mobiliser le corps et le mental autour des valeurs du savoir-être professionnel.",
    "Chaque défi dure 1 minute : rapide, ludique et accessible à tous.",
    "L'objectif est d'être actif, concentré et engagé tout au long de l'atelier.",
  ],
  methodes: [
    "Pédagogie active plaçant le participant au coeur de l'activité.",
    "Différents modes de jeux et de défis mettant l'accent sur des savoir-être clairement définis.",
  ],
  pdf: "/documents/atelier-la-posture-pro-defis-flash.pdf",
  cardTitle: "La posture pro défi flash",
  cardDescription:
    "Des défis d'une minute, seul ou en équipe, pour révéler et travailler les savoir-être professionnels.",
}

export const cnvAgressivitePhysique: AtelierData = {
  slug: "cnv-agressivite-physique",
  category: "qvct",
  metaTitle: "Atelier CNV : gérer l'agressivité physique",
  metaDescription:
    "Un atelier pratique pour poser un cadre, affirmer ses limites et désamorcer les situations tendues sans violence. Animé en entreprise en Rhône-Alpes.",
  titlePrefix: "CNV",
  titleHighlight: "agressivité physique",
  heroDescription:
    "Un atelier pratique pour apprendre à poser un cadre clair, affirmer ses limites et gérer les situations tendues sans violence, grâce à la posture et au langage corporel.",
  heroImage: "/images/atelier-CNV-agressivite-physique.jpg",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "7m x 7m",
  approcheHeadingPre: "Le corps parle avant les mots :",
  approcheHeadingHighlight: "apprenez à vous en servir.",
  approcheParagraphs: [
    "Face à une agressivité intense, la posture, la distance et les gestes font toute la différence. Cet atelier fait découvrir les trois zones de distance et les enjeux émotionnels et de sécurité liés à chacune.",
    "L'apprentissage passe par le corps : chacun ressent, expérimente en binôme et répète des postures simples de mise en garde et d'évitement, jusqu'aux gestes de base si la zone intime est envahie.",
  ],
  stats: [
    { n: "3", l: "zones de distance" },
    { n: "100%", l: "expérientiel" },
    { n: "4+", l: "participants" },
  ],
  objectifs: [
    "Savoir maintenir une posture professionnelle et sécurisante face à une agressivité intense ou oppressante.",
    "Utiliser les outils de la communication non violente pour poser un cadre clair, poser ses limites et recadrer sans violence dans des situations à haute intensité émotionnelle.",
  ],
  deroule: [
    "En binôme, face à face : l'un avance lentement vers l'autre, qui l'arrête dès qu'il ressent une gêne liée à la distance, puis les rôles sont inversés.",
    "Échange collectif sur les ressentis, puis découverte des trois zones de distance (observation, contact, intime) et des enjeux émotionnels ou de sécurité liés à chacune.",
    "Apprentissage et répétition en binômes de postures simples de mise en garde et d'évitement, puis de quelques gestes de self-défense de base à utiliser si la zone intime est envahie.",
  ],
  methodes: [
    "Pédagogie expérientielle : le participant ressent les bienfaits de l'atelier en pratiquant.",
    "Apprentissage corporel : l'apprentissage passe par la mobilisation du corps (position, posture, gestes).",
  ],
  pdf: "/documents/atelier-cnv-agressivite-physique-qvt-securite.pdf",
  cardTitle: "CNV agressivité physique",
  cardDescription:
    "Poser un cadre, affirmer ses limites et se protéger sans violence grâce à la posture et au langage corporel.",
}

export const cnvAgressiviteVerbale: AtelierData = {
  slug: "cnv-agressivite-verbale",
  category: "qvct",
  metaTitle: "Atelier CNV : gérer l'agressivité verbale",
  metaDescription:
    "Jeux de rôle pour comprendre l'agressivité verbale et gérer les conflits avec calme et assertivité. Atelier animé en entreprise, Lyon & Rhône-Alpes.",
  titlePrefix: "CNV",
  titleHighlight: "agressivité verbale",
  heroDescription:
    "Un atelier de jeux de rôle pour comprendre l'agressivité verbale et apprendre à gérer les conflits avec calme et assertivité.",
  heroImage: "/images/atelier-communication-non-violente-CNV-min.jpg",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "5m x 5m en intérieur au calme, chaises à disposition",
  approcheHeadingPre: "Jouer le conflit pour mieux",
  approcheHeadingHighlight: "apprendre à le désamorcer.",
  approcheParagraphs: [
    "Deux participants jouent un conflit réaliste, deux autres observent activement : la scène révèle les mécanismes de l'agressivité verbale et les postures qui apaisent ou qui enveniment.",
    "Les scénarios sont construits à partir de thèmes transmis par votre entreprise, pour coller à vos situations réelles. Le débriefing collectif ancre les réflexes : calme, écoute, empathie, reformulation, posture de solution.",
  ],
  stats: [
    { n: "45min", l: "maximum" },
    { n: "100%", l: "sur mesure" },
    { n: "4+", l: "participants" },
  ],
  objectifs: [
    "Identifier les mécanismes de l'agressivité verbale en situation professionnelle et développer des outils pour y faire face avec calme et assertivité.",
    "Expérimenter les principes de la communication non violente pour favoriser des échanges professionnels plus sereins.",
  ],
  deroule: [
    "Formation d'un groupe de quatre participants : deux jouent des collaborateurs en conflit selon l'un des scénarios proposés, les deux autres sont observateurs actifs.",
    "La scène est menée de manière réaliste pendant quelques minutes, puis le groupe identifie s'il s'agissait d'une négociation possible, aléatoire ou impossible.",
    "Les observateurs analysent le comportement de la personne en position de gestion : calme, écoute, empathie, reformulation, posture de solution...",
  ],
  methodes: [
    "Pédagogie active à travers des jeux de rôle (les thèmes abordés sont transmis préalablement par le client).",
    "Observation active.",
    "Débriefing collectif.",
  ],
  pdf: "/documents/atelier-cnv-agressivite-verbale-qvt-securite.pdf",
  cardTitle: "CNV agressivité verbale",
  cardDescription:
    "Des jeux de rôle sur vos situations réelles pour apprendre à gérer les conflits avec calme et assertivité.",
}

export const clesCohesionEquipe: AtelierData = {
  slug: "cles-cohesion-equipe",
  category: "qvct",
  metaTitle: "Atelier Cohésion d'Équipe en entreprise",
  metaDescription:
    "Un atelier collectif pour renforcer la cohésion d'équipe et l'état d'esprit positif. Intervention sur site à Lyon, dans l'Ain et en Rhône-Alpes.",
  titlePrefix: "Les clés de la",
  titleHighlight: "cohésion d'équipe",
  heroDescription:
    "Un atelier collectif pour renforcer la cohésion, développer un état d'esprit positif et expérimenter les dynamiques qui font fonctionner une équipe.",
  heroImage: "/images/atelier-cohesion-min.jpg",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "6m x 6m en intérieur au calme, écran à disposition",
  approcheHeadingPre: "Une tribu, un nom, un cri :",
  approcheHeadingHighlight: "la cohésion se construit en jouant.",
  approcheParagraphs: [
    "Le jeu « Une tribu en or » met en scène tous les participants : chaque équipe s'invente une identité, coopère selon des règles de communication précises et découvre les différents rôles qui font fonctionner un groupe.",
    "Au fil des étapes, l'inclusion s'installe comme socle du collectif, et les participants repartent avec des outils concrets, issus de la préparation mentale, à reproduire en entreprise.",
  ],
  stats: [
    { n: "45min", l: "maximum" },
    { n: "100%", l: "collectif" },
    { n: "4+", l: "participants" },
  ],
  objectifs: [
    "Définir l'inclusion comme socle fondamental permettant de définir les limites d'un groupe.",
    "Développer un état d'esprit sain et positif entre collaborateurs.",
    "Placer la cohésion comme facteur de performance et unir le manager et son équipe dans une dynamique commune.",
  ],
  deroule: [
    "Étape 1 : créer des équipes afin qu'elles puissent s'identifier à travers un nom, un cri, une couleur (une tribu).",
    "Étape 2 : permettre à l'équipe de coopérer à travers des règles de communication et de fonctionnement (leader, qui répond, qui buzze...).",
    "Étape 3 : transmettre des outils permettant aux participants de reproduire des situations en entreprise (les bases de la préparation mentale).",
  ],
  methodes: [
    "Jeu « Une tribu en or » : un jeu en équipe qui favorise le partage et met en avant les différents rôles que l'on retrouve au sein d'une équipe.",
    "Une méthode pédagogique inclusive mettant en scène l'ensemble des acteurs.",
  ],
  pdf: "/documents/atelier-cles-de-la-cohesion-qvt.pdf",
  cardTitle: "Les clés de la cohésion d'équipe",
  cardDescription:
    "Un jeu de tribus pour renforcer l'inclusion, la coopération et l'état d'esprit collectif de vos équipes.",
}

export const nutritionPerformance: AtelierData = {
  slug: "atelier-nutrition-performance",
  category: "qvct",
  metaTitle: "Atelier Nutrition et Performance en entreprise",
  metaDescription:
    "Un atelier ludique pour comprendre l'impact de l'alimentation au travail et construire une assiette équilibrée. Animé sur site en Rhône-Alpes.",
  titlePrefix: "Nutrition et",
  titleHighlight: "performance",
  heroDescription:
    "Un atelier concret et ludique pour comprendre l'impact de l'alimentation, corriger ses habitudes et construire une assiette équilibrée adaptée à son rythme de travail.",
  heroImage: "/images/atelier-nutrition-performance-v2.jpg",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "5m x 5m en intérieur, tables et chaises à disposition",
  approcheHeadingPre: "Bien manger au travail, c'est de l'énergie,",
  approcheHeadingHighlight: "de la concentration et de la sécurité.",
  approcheParagraphs: [
    "Quiz express, jeu de cartes « compose ton assiette », top 5 anti-coup de barre : l'atelier fait le tri entre idées reçues et vrais leviers, en tenant compte des rythmes décalés et des contraintes de terrain.",
    "Chaque participant repart avec son top 3 énergie : trois actions concrètes, choisies par lui, à tester dès le lendemain.",
  ],
  stats: [
    { n: "45min", l: "maximum" },
    { n: "3", l: "actions à tester demain" },
    { n: "4+", l: "participants" },
  ],
  objectifs: [
    "Comprendre les impacts de l'alimentation et de l'hydratation sur l'énergie, la concentration et la sécurité.",
    "Identifier les erreurs alimentaires fréquentes liées aux rythmes décalés.",
    "Construire une assiette équilibrée et adaptée à son rythme de travail.",
    "Expérimenter des actions simples à mettre en place dès le lendemain.",
  ],
  deroule: [
    "Accueil dynamique : mini-jeu « vrai ou faux sur l'alimentation », puis mini-échauffement « réveil corporel » pour se mettre en mouvement.",
    "Animation « Le top 5 anti-coup de barre » : chaque équipe classe 5 habitudes selon leur impact sur l'énergie.",
    "En binômes, les participants composent un repas adapté à leur horaire (matin, nuit, journée) à partir de cartes aliments, puis débrief collectif : quels choix, pourquoi ?",
    "Chaque participant écrit son « top 3 énergie » : 3 actions concrètes à tester dès demain.",
  ],
  methodes: [
    "Approche ludique et participative : quiz express, jeu de cartes « compose ton assiette », mini-défis en équipe.",
    "Pédagogie active : échanges de pratiques, mises en situation, visualisation collective.",
  ],
  pdf: "/documents/atelier-nutrition-performance-v2.pdf",
  cardTitle: "Nutrition et performance",
  cardDescription:
    "Quiz, cartes et défis pour construire une assiette adaptée à son rythme de travail et garder l'énergie toute la journée.",
}

export const gestionEmotionsSophrologie: AtelierData = {
  slug: "gestion-des-emotions-sophrologie",
  category: "qvct",
  metaTitle: "Atelier Gestion des Émotions par la sophrologie",
  metaDescription:
    "Comprendre les mécanismes du stress et transformer ses émotions grâce à la sophrologie. Atelier QVCT animé en entreprise en Rhône-Alpes.",
  titlePrefix: "Gestion des émotions",
  titleHighlight: "sophrologie",
  heroDescription:
    "Un atelier pour acquérir des techniques de respiration simples et efficaces, mieux gérer son stress et développer concentration, présence et ancrage au quotidien.",
  heroImage: "/images/podium_organisme_formation_atelier_sophrologie-min.png",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "6m x 6m en intérieur, tables et chaises à disposition",
  approcheHeadingPre: "La respiration est un outil de travail :",
  approcheHeadingHighlight: "encore faut-il savoir s'en servir.",
  approcheParagraphs: [
    "La sophrologie est une méthode psycho-corporelle qui vise l'harmonie entre le corps et l'esprit. L'atelier la rend accessible à tous, sans prérequis, dans une atmosphère détendue et conviviale.",
    "De la prise de conscience de la respiration spontanée à la respiration abdominale, chacun expérimente une boîte à outils simple, à réutiliser en autonomie face au stress du quotidien.",
  ],
  stats: [
    { n: "45min", l: "maximum" },
    { n: "0", l: "prérequis" },
    { n: "4+", l: "participants" },
  ],
  objectifs: [
    "Acquérir des techniques de respiration simples et efficaces pour une gestion autonome du stress et des émotions au quotidien.",
    "Développer une meilleure conscience de sa respiration pour favoriser la concentration, la présence et l'ancrage dans le moment présent.",
  ],
  deroule: [
    "Accueil et installation des participants : créer une atmosphère détendue et conviviale.",
    "Présentation de la sophrologie : une méthode psycho-corporelle visant l'harmonie entre le corps et l'esprit.",
    "Prise de conscience de la respiration spontanée.",
    "La respiration abdominale ou ventrale.",
  ],
  methodes: [
    "Pédagogie active et participative : rendre le participant acteur de son parcours.",
    "Atelier en extérieur dans un cadre relaxant, si le lieu et le temps le permettent.",
    "Découverte et application d'une boîte à outils.",
  ],
  pdf: "/documents/atelier-gestion-des-emotions-sophrologie.pdf",
  cardTitle: "Gestion des émotions sophrologie",
  cardDescription:
    "Des techniques de respiration simples pour gérer stress et émotions en autonomie, au bureau comme sur le terrain.",
}

export const preventionSanteMentale: AtelierData = {
  slug: "prevention-sante-mentale",
  category: "qvct",
  metaTitle: "Atelier Santé Mentale : gérer son stress au quotidien",
  metaDescription:
    "Comprendre le stress, repérer ses signaux d'alerte et expérimenter des outils de régulation concrets. Atelier QVCT en entreprise, Lyon & Rhône-Alpes.",
  titlePrefix: "Prévention",
  titleHighlight: "santé mentale",
  heroDescription:
    "Un atelier interactif pour comprendre les mécanismes du stress, repérer ses signaux d'alerte et expérimenter des outils concrets de régulation, pour un environnement de travail plus serein.",
  heroImage: "/images/stress-management-confidence-workshop.png",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "6m x 6m en intérieur, tables, chaises et écran à disposition",
  approcheHeadingPre: "Le stress se gère d'autant mieux",
  approcheHeadingHighlight: "qu'on le comprend.",
  approcheParagraphs: [
    "Comprendre les mécanismes du stress, repérer ses propres signaux d'alerte, identifier ses sources de tension : l'atelier commence par un vrai travail d'auto-évaluation, dans une ambiance bienveillante et participative.",
    "Viennent ensuite les expérimentations guidées : respiration, ancrage, visualisation, recentrage. Des techniques issues du coaching, de la préparation mentale et de la pleine conscience, à remporter dans sa boîte à outils personnelle.",
  ],
  stats: [
    { n: "45min", l: "maximum" },
    { n: "100%", l: "interactif" },
    { n: "4+", l: "participants" },
  ],
  objectifs: [
    "Comprendre les mécanismes du stress et leur impact sur la santé mentale.",
    "Identifier ses propres signaux d'alerte face au stress et repérer ses sources principales de tension.",
    "Découvrir et expérimenter des outils concrets de régulation du stress : respiration, ancrage, visualisation...",
    "Renforcer la cohésion d'équipe en favorisant les échanges sur les stratégies individuelles et collectives de bien-être.",
    "Favoriser un environnement de travail plus serein.",
  ],
  deroule: [
    "Introduction : comprendre les mécanismes du stress et leur impact sur la santé mentale.",
    "Auto-évaluation : repérer ses signaux d'alerte et ses sources de stress.",
    "Expérimentations guidées : respiration, ancrage, visualisation, recentrage.",
    "Jeux et mises en situation : comment réagir face à la pression, aux tensions ou à la surcharge.",
    "Temps d'échange : retour d'expérience, partage d'outils entre pairs.",
    "Conclusion : repartir avec une boîte à outils simple et applicable au quotidien.",
  ],
  methodes: [
    "Atelier interactif avec échanges d'expériences.",
    "Exercices pratiques et mises en situation.",
    "Techniques issues du coaching, de la préparation mentale et de la pleine conscience.",
    "Ambiance bienveillante et participative.",
  ],
  pdf: "/documents/atelier_prevention_sante_mentale_qvt.pdf",
  cardTitle: "Prévention santé mentale",
  cardDescription:
    "Comprendre son stress, repérer ses signaux d'alerte et expérimenter des outils concrets de régulation.",
}

export const yogaBulleOxygene: AtelierData = {
  slug: "atelier-bulle-oxygene",
  category: "qvct",
  metaTitle: "Atelier Yoga Bulle d'Oxygène en entreprise",
  metaDescription:
    "Une pause yoga en entreprise pour relâcher les tensions et recharger les équipes. Atelier QVCT animé sur site, à Lyon et dans toute la région Rhône-Alpes.",
  titlePrefix: "Yoga",
  titleHighlight: "bulle d'oxygène",
  heroDescription:
    "Une pause yoga ludique pour apprendre à gérer ses émotions, prévenir le stress par la respiration et vivre un vrai moment d'équipe.",
  heroImage: "/images/atelier-yoga-bulle-oxygene-v2.png",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "5m x 5m en intérieur ou extérieur, sur sol plat au calme",
  approcheHeadingPre: "Une vraie bulle d'oxygène",
  approcheHeadingHighlight: "dans la journée de travail.",
  approcheParagraphs: [
    "Le yoga est « l'arrêt de l'activité du mental » : une discipline du corps et de l'esprit qui comprend une grande variété d'exercices et de techniques, ici rendus accessibles à tous.",
    "Allongé, assis, debout : la séance enchaîne prise de conscience du corps et de la respiration, mobilité de la colonne, postures d'équilibre et de tonicité, torsions, puis relaxation. Chacun se corrige par lui-même, en ressentant les mouvements.",
  ],
  stats: [
    { n: "45min", l: "maximum" },
    { n: "3", l: "formes de yoga" },
    { n: "4+", l: "participants" },
  ],
  objectifs: [
    "Proposer une activité ludique permettant de sensibiliser les pratiquants à l'importance de gérer ses émotions.",
    "Prévenir le stress au travail en travaillant sur sa respiration et en se recentrant sur soi.",
    "Vivre un moment d'équipe.",
  ],
  deroule: [
    "Allongé : prise de conscience du corps et de la respiration, relaxation et détente.",
    "En assise : dos rond et dos plat, mobilité de la colonne vertébrale.",
    "Debout : prises de postures d'équilibre et de postures de tonicité des membres inférieurs.",
    "Postures de torsion de la colonne vertébrale, puis relaxation et détente.",
  ],
  methodes: [
    "Pédagogie expérientielle qui permet au pratiquant de ressentir les mouvements et de se corriger par lui-même.",
    "Mise en pratique des différentes formes de yoga : assis, debout, respiratoire.",
  ],
  pdf: "/documents/atelier-yoga-bulle-oxygene-qvt.pdf",
  cardTitle: "Yoga bulle d'oxygène",
  cardDescription:
    "Une pause yoga accessible à tous pour relâcher les tensions, respirer et repartir recentré.",
}

export const quizSurMesure: AtelierData = {
  slug: "quiz-sur-mesure",
  category: "qvct",
  metaTitle: "Atelier Quiz Sur-Mesure avec buzzers",
  metaDescription:
    "Un quiz interactif avec buzzers pour renforcer les connaissances et transmettre les règles internes de façon ludique. Animé en entreprise en Rhône-Alpes.",
  titlePrefix: "Quiz",
  titleHighlight: "sur-mesure",
  heroDescription:
    "Un atelier ludique et participatif qui renforce les connaissances, transmet les règles internes de l'entreprise et valide les acquis grâce à des quiz interactifs avec buzzers.",
  heroImage: "/images/atelier-quiz-2-min.jpeg",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "5m x 5m en intérieur (type salle de réunion), tables et écran à disposition",
  approcheHeadingPre: "Vos messages, nos buzzers :",
  approcheHeadingHighlight: "l'ancrage passe par le jeu.",
  approcheParagraphs: [
    "TMS, sécurité, règlement intérieur, RSE, hygiène de vie : les questions sont construites sur mesure à partir de vos thèmes. Buzzers connectés, formats variés (vrai/faux, choix multiple, puzzle, rapidité) et modes de jeu adaptés au temps disponible.",
    "Après chaque question, une slide explicative assure l'ancrage des messages. L'esprit de compétition fait le reste.",
  ],
  stats: [
    { n: "20", l: "questions max" },
    { n: "8", l: "équipes possibles" },
    { n: "100%", l: "sur mesure" },
  ],
  objectifs: [
    "Renforcer les connaissances générales.",
    "Transmettre les règles et la charte interne de l'entreprise à travers des questions.",
    "Optimiser l'ancrage des participants et valider les acquis.",
  ],
  deroule: [
    "Création des équipes via un outil de tirage au sort digital.",
    "Explication des modes de jeu et de l'utilisation des buzzers.",
    "C'est parti pour le quiz : 10 à 20 questions suivant le temps disponible, avec possibilité de bloquer les buzzers ayant répondu faux.",
    "Slide explicative après chaque question pour assurer l'ancrage auprès des participants.",
  ],
  methodes: [
    "Pédagogie active plaçant le participant au coeur de l'activité.",
    "Différents modes de jeux et d'arbitrage, buzzers bluetooth.",
    "Différents types de questions suivant le temps, le nombre de participants et le sujet.",
  ],
  pdf: "/documents/atelier-quiz-sur-mesure-v2.pdf",
  cardTitle: "Quiz sur-mesure",
  cardDescription:
    "Buzzers, équipes et questions sur vos thèmes pour ancrer les messages de prévention en s'amusant.",
}

export const jeuDePlateauGeant: AtelierData = {
  slug: "jeu-de-plateau-geant",
  category: "qvct",
  metaTitle: "Atelier Jeu de Plateau Géant en entreprise",
  metaDescription:
    "Un jeu de plateau géant pour transmettre les règles de l'entreprise et valider les acquis par des quiz et défis collectifs. Animé en Rhône-Alpes.",
  titlePrefix: "Jeu de plateau",
  titleHighlight: "géant",
  heroDescription:
    "Un atelier ludique et interactif autour d'un plateau de jeu géant, qui renforce les connaissances, transmet les règles de l'entreprise et valide les acquis à travers quiz et défis collectifs.",
  heroImage: "/images/atelier-plateau-de-jeu-geant-min.jpg",
  duree: "15 à 45 min",
  participants: "à partir de 4",
  espace: "5m x 5m en intérieur, chaises à disposition",
  approcheHeadingPre: "Un plateau de 2m x 2m pour transformer",
  approcheHeadingHighlight: "vos messages en parties mémorables.",
  approcheParagraphs: [
    "De 2 à 4 équipes s'affrontent sur un plateau géant : vrai/faux, choix multiples, mises en situation et questions bonus, sur les thèmes que vous choisissez (TMS, sécurité, réglementaire, RSE, hygiène de vie...).",
    "Une partie se joue à partir d'un tour de plateau, environ 10 minutes : idéal pour rythmer une journée sécurité, un séminaire ou une semaine QVCT.",
  ],
  stats: [
    { n: "2x2m", l: "de plateau" },
    { n: "10min", l: "par partie" },
    { n: "4", l: "équipes max" },
  ],
  objectifs: [
    "Renforcer les connaissances générales.",
    "Transmettre les règles et la charte interne de l'entreprise à travers des questions.",
    "Optimiser l'ancrage des participants et valider les acquis.",
  ],
  deroule: [
    "Création des équipes via un outil de tirage au sort digital.",
    "Explication des modes de jeu et des règles du plateau.",
    "La partie se lance : les équipes progressent sur le plateau au fil des questions et des mises en situation.",
    "Une explication après chaque question pour assurer l'ancrage auprès des participants.",
  ],
  methodes: [
    "Pédagogie active plaçant le participant au coeur de l'activité.",
    "Plateau de jeu géant de 2m x 2m, formats de questions variés : vrai/faux, choix multiple, mise en situation, questions bonus.",
    "Différents types de questions suivant le temps, le nombre de participants et le sujet.",
  ],
  pdf: "/documents/atelier-jeu-plateau-geant-qvt-securite-v2.pdf",
  cardTitle: "Jeu de plateau géant",
  cardDescription:
    "Un plateau de 2m x 2m et des équipes qui s'affrontent sur vos thèmes de prévention : l'ancrage par le jeu.",
}

export const theatreImproSanteMentale: AtelierData = {
  slug: "theatre-impro-sante-mentale",
  category: "qvct",
  metaTitle: "Atelier Théâtre d'Impro Santé Mentale",
  metaDescription:
    "Théâtre d'improvisation et théâtre forum pour repérer les signaux faibles de mal-être au travail et oser en parler. Atelier animé en entreprise en Rhône-Alpes.",
  titlePrefix: "Théâtre d'impro",
  titleHighlight: "santé mentale",
  heroDescription:
    "Un atelier de théâtre d'improvisation et de théâtre forum pour apprendre à repérer les signaux faibles de mal-être au travail et oser initier un échange avec un collègue en difficulté.",
  heroImage: "/images/atelier-theatre-entreprise.jpg",
  duree: "1h à 2h",
  participants: "à partir de 8",
  espace: "En intérieur, plusieurs sous-espaces",
  approcheHeadingPre: "Jouer les situations difficiles pour",
  approcheHeadingHighlight: "oser les aborder dans la vraie vie.",
  approcheParagraphs: [
    "Surcharge, pression temporelle, isolement, tensions d'équipe, communication maladroite : les improvisations partent de situations réelles, dans un cadre sécurisant où la participation reste volontaire.",
    "Le théâtre forum permet à chacun d'arrêter la scène et de proposer une autre posture relationnelle. Le débriefing structuré ancre les repères de prévention : signaux faibles, posture d'écoute, relais internes.",
  ],
  stats: [
    { n: "2h", l: "maximum" },
    { n: "8+", l: "participants" },
    { n: "100%", l: "bienveillant" },
  ],
  objectifs: [
    "Identifier les premiers signaux faibles d'une situation de mal-être au travail.",
    "Reconnaître l'impact des comportements quotidiens sur la santé mentale individuelle et collective.",
    "Oser initier un échange simple et respectueux face à un collègue en difficulté.",
  ],
  deroule: [
    "Mise en énergie et brise-glace relationnel : jeux d'expression pour créer un cadre sécurisant et poser les règles de bienveillance.",
    "Improvisations à partir de situations réelles : surcharge, pression temporelle, isolement, tensions d'équipe, communication maladroite.",
    "Théâtre forum : arrêt sur image, intervention du public pour proposer d'autres postures relationnelles.",
    "Débriefing structuré et ancrage prévention : signaux faibles, posture d'écoute, relais internes.",
  ],
  methodes: [
    "Méthode active et expérientielle.",
    "Théâtre d'improvisation et théâtre forum.",
    "Participation volontaire encadrée.",
    "Débriefing collectif structuré.",
  ],
  cardTitle: "Théâtre d'impro santé mentale",
  cardDescription:
    "Impros et théâtre forum sur des situations réelles pour repérer les signaux faibles et oser en parler.",
}

// ===================== EXPORTS =====================

export const securiteAteliers: AtelierData[] = [
  secourirSansPanique,
  sensibiliserHandicapAuditif,
  sensibiliserHandicapVisuel,
  gesteEtPosturePetanque,
  murDesAddictions,
  reveilMusculaireLudique,
  deconnecteTonEcran,
]

export const qvctAteliers: AtelierData[] = [
  posturePro,
  cnvAgressivitePhysique,
  cnvAgressiviteVerbale,
  clesCohesionEquipe,
  nutritionPerformance,
  gestionEmotionsSophrologie,
  preventionSanteMentale,
  yogaBulleOxygene,
  quizSurMesure,
  jeuDePlateauGeant,
  theatreImproSanteMentale,
]

export const allAteliers: AtelierData[] = [
  secourirSansPanique,
  posturePro,
  cnvAgressivitePhysique,
  cnvAgressiviteVerbale,
  clesCohesionEquipe,
  sensibiliserHandicapAuditif,
  sensibiliserHandicapVisuel,
  nutritionPerformance,
  gestionEmotionsSophrologie,
  preventionSanteMentale,
  gesteEtPosturePetanque,
  yogaBulleOxygene,
  murDesAddictions,
  reveilMusculaireLudique,
  quizSurMesure,
  jeuDePlateauGeant,
  deconnecteTonEcran,
  theatreImproSanteMentale,
]
