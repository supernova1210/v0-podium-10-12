/**
 * Questions fréquentes des pages atelier, par slug.
 * Affichées en bas de page et balisées en FAQPage (données structurées).
 * Rédigées à partir des fiches de lib/ateliers.ts : pas de prix, pas de chiffre inventé.
 * Une seule question par atelier porte sur le lieu et la logistique, formulée différemment
 * à chaque fois pour éviter le contenu dupliqué d'une page à l'autre.
 */

export interface FaqItem {
  question: string
  answer: string
}

export const ateliersFaq: Record<string, FaqItem[]> = {
  // ===================== SÉCURITÉ =====================

  "secourir-sans-panique": [
    {
      question: "Faut-il des notions de secourisme pour participer ?",
      answer:
        "Non, l'atelier Secourir sans panique est ouvert à tous les salariés, sans prérequis. Il porte sur la bobologie du quotidien (petites plaies, coupures, brûlures légères) : les gestes simples à faire soi-même, et surtout savoir reconnaître le moment où il faut passer le relais à un secouriste ou au SAMU.",
    },
    {
      question: "Quelle différence avec les formations Gestes qui sauvent et Premiers Secours Citoyen ?",
      answer:
        "L'atelier est un format court, de 15 à 45 minutes, centré sur les petites blessures. La Sensibilisation aux Gestes Qui Sauvent (2 heures) et la formation Premiers Secours Citoyen (7 heures, avec certificat) traitent les situations d'urgence : alerter, arrêter un saignement abondant, PLS, massage cardiaque et défibrillateur.",
    },
    {
      question: "Que faut-il prévoir pour l'accueillir sur notre site ?",
      answer:
        "Podium se déplace dans vos locaux, à Lyon, dans l'Ain ou ailleurs en Auvergne-Rhône-Alpes. Il suffit d'un espace intérieur d'environ 5 m x 5 m avec des tables. L'animateur apporte le matériel de mise en pratique : pansements, désinfectant et fausses plaies. L'atelier accueille des groupes à partir de 4 personnes.",
    },
  ],

  "sensibiliser-au-handicap": [
    {
      question: "Comment se déroule l'atelier de sensibilisation au handicap auditif ?",
      answer:
        "Les participants forment des binômes. L'un porte un casque ou des bouchons d'oreilles, l'autre doit lui transmettre une information simple, puis un message long, puis un défi à réaliser. Les rôles s'inversent au bout de quelques minutes, et un débriefing collectif permet de partager les ressentis et les techniques trouvées pour se comprendre.",
    },
    {
      question: "Pourquoi sensibiliser au handicap auditif en entreprise ?",
      answer:
        "Pour faire comprendre de l'intérieur ce que vit un collègue ou un client malentendant, et repartir avec des solutions de communication simples, applicables dès le lendemain. C'est un format adapté à la Semaine européenne pour l'emploi des personnes handicapées (SEEPH), en novembre, ou à une journée RSE.",
    },
    {
      question: "Où l'atelier peut-il avoir lieu ?",
      answer:
        "Dans vos locaux, en intérieur ou en extérieur, sur un espace d'environ 5 m x 5 m avec des tables. Podium intervient dans la métropole lyonnaise (Villeurbanne, Bron, Saint-Priest…) comme dans l'Ain (Bourg-en-Bresse, Ambérieu-en-Bugey…). L'atelier dure de 15 à 45 minutes et est encadré par un animateur en activité physique adaptée (APA).",
    },
  ],

  "sensibiliser-au-handicap-visuel": [
    {
      question: "Comment se passe le parcours les yeux bandés ?",
      answer:
        "En binôme, un participant porte un bandeau ou un masque et se laisse guider sur un parcours par la voix et le bras de son partenaire. Les rôles s'inversent au bout de quelques minutes. Le débriefing collectif transforme ensuite les ressentis en repères concrets : techniques de guidage, communication précise, attention à l'autre.",
    },
    {
      question: "Peut-on le combiner avec l'atelier sur le handicap auditif ?",
      answer:
        "Oui. Les deux ateliers suivent le même principe (binômes, inversion des rôles, débriefing) et se complètent bien lors d'une journée RSE ou pendant la Semaine européenne pour l'emploi des personnes handicapées.",
    },
    {
      question: "De quel espace a-t-on besoin ?",
      answer:
        "Un espace d'environ 5 m x 5 m, en intérieur ou en extérieur, avec des tables. Podium installe le parcours directement sur votre site, à Lyon, dans l'Ain ou dans le reste de la région. Comptez 15 à 45 minutes, à partir de 4 participants, avec un animateur en activité physique adaptée (APA).",
    },
  ],

  "geste-et-posture-petanque": [
    {
      question: "Pourquoi utiliser la pétanque pour parler de gestes et postures ?",
      answer:
        "Une partie de pétanque enchaîne des flexions, des ramassages et des gestes répétés : les mêmes mouvements qui, mal exécutés, favorisent les troubles musculo-squelettiques (TMS) au travail. On joue une première partie, on comprend l'impact des mauvaises postures, puis on rejoue en appliquant les corrections proposées par l'animateur.",
    },
    {
      question: "L'atelier remplace-t-il une formation gestes et postures ?",
      answer:
        "Non, c'est une sensibilisation de 15 à 45 minutes. Pour former vos salariés aux bons gestes de leur propre métier, la formation Geste et Posture (3,5 heures) part de l'analyse des contraintes de chaque poste. L'atelier peut aussi servir à lancer le sujet lors d'une journée sécurité.",
    },
    {
      question: "Peut-on organiser l'atelier en extérieur sur notre site ?",
      answer:
        "Oui, il se joue en intérieur comme en extérieur, sur un sol plat d'environ 7 m x 3 m. Podium vient avec le matériel sur votre site, que vous soyez dans la Plaine de l'Ain, à Ambérieu-en-Bugey ou dans l'est lyonnais. L'atelier accueille des groupes à partir de 4 personnes.",
    },
  ],

  "reveil-musculaire-ludique": [
    {
      question: "Quelle différence entre l'atelier et la formation Réveil musculaire ?",
      answer:
        "L'atelier fait vivre un échauffement collectif en 15 à 45 minutes, sous forme de jeux et de défis en musique. La formation Réveil musculaire (7 heures) forme des ambassadeurs internes, capables d'animer eux-mêmes ces échauffements au quotidien pour prévenir durablement les TMS.",
    },
    {
      question: "L'atelier convient-il à tous les profils physiques ?",
      answer:
        "Oui. L'animateur adapte chaque jeu aux contraintes physiques de chacun, et corrige individuellement après chaque démonstration. Le but n'est pas la performance : chacun ressent les effets de l'échauffement et partage ses ressentis lors des temps d'échange.",
    },
    {
      question: "Où peut se dérouler la séance ?",
      answer:
        "Sur votre site, en intérieur ou en extérieur, sur un sol plat d'environ 6 m x 6 m : un atelier, un hall ou une cour suffisent. Podium intervient dans la métropole de Lyon, dans l'Ain et dans toute l'Auvergne-Rhône-Alpes, pour des groupes à partir de 4 personnes.",
    },
  ],

  "deconnecte-ton-ecran": [
    {
      question: "Comment l'atelier mesure-t-il l'effet du téléphone sur la vigilance ?",
      answer:
        "Avec des pods lumineux de réactivité. Chaque participant fait un premier passage sans téléphone, puis le même exercice avec un téléphone en main ou une distraction simulée. La différence de temps de réaction, d'erreurs et d'attention est mesurée : chacun constate l'effet par lui-même.",
    },
    {
      question: "Pour quels environnements de travail est-il le plus utile ?",
      answer:
        "Tous ceux où une seconde d'inattention peut coûter cher : zones de circulation, chariots, logistique, accueil de passagers ou de public. Le débriefing fait le lien avec vos situations réelles. L'atelier parle particulièrement aux sites logistiques et industriels, nombreux dans l'est lyonnais et la Plaine de l'Ain.",
    },
    {
      question: "Que faut-il prévoir ?",
      answer:
        "Un espace en intérieur ou en extérieur. Podium apporte les pods lumineux et anime des passages courts et minutés, sur 15 à 45 minutes, à partir de 4 participants. L'atelier s'intègre facilement dans une journée sécurité.",
    },
  ],

  "escape-game-securite": [
    {
      question: "Comment fonctionne l'escape game sécurité ?",
      answer:
        "Chaque équipe se connecte à une application avec un smartphone de jeu ou par QR code, puis enchaîne environ 40 défis sur la sécurité au travail : réponses écrites ou chiffrées, photos, QCM. Tous les défis ne peuvent pas être résolus, ce qui oblige à faire des choix. Un classement en temps réel maintient l'engagement jusqu'au débriefing final.",
    },
    {
      question: "Combien de participants et combien de temps ?",
      answer:
        "Le jeu se joue en équipes de 4 à 6 personnes et peut réunir de 5 à 100 participants. L'animation dure 60 à 75 minutes, encadrée par un référent maître du temps et des animateurs accompagnants.",
    },
    {
      question: "Peut-on l'organiser dans nos locaux ?",
      answer:
        "Oui, c'est le principe : Podium installe le jeu sur votre site, de préférence en intérieur, à Lyon, dans l'Ain ou ailleurs en Auvergne-Rhône-Alpes. L'escape game peut servir de temps fort à une journée sécurité, en complément d'ateliers plus courts.",
    },
  ],

  // ===================== QVCT =====================

  "posture-pro-defi-flash": [
    {
      question: "Qu'appelle-t-on le savoir-être professionnel ?",
      answer:
        "Ce sont les comportements attendus au travail, au-delà des compétences techniques : concentration, engagement, coopération, façon de se tenir face aux autres. L'atelier les rend visibles grâce à des défis d'une minute, puis relie les postures observées pendant le jeu à celles attendues dans l'entreprise.",
    },
    {
      question: "Quel lien avec la formation Valoriser sa posture professionnelle ?",
      answer:
        "L'atelier est une sensibilisation de 15 à 45 minutes, centrée sur le jeu. La formation Valoriser sa posture professionnelle (7 à 14 heures) va plus loin : comprendre les codes de l'entreprise, gagner en confiance et apprendre à se positionner et à se valoriser.",
    },
    {
      question: "Quelles conditions pour l'organiser ?",
      answer:
        "Un espace intérieur d'environ 5 m x 5 m avec des tables, dans vos locaux, à Lyon, dans l'Ain ou dans le reste de la région. Les défis se jouent en 1 contre 1 ou en équipe, à partir de 4 participants.",
    },
  ],

  "cnv-agressivite-physique": [
    {
      question: "Est-ce un cours de self-défense ?",
      answer:
        "Non. L'essentiel de l'atelier porte sur la posture, la distance et la communication non violente, pour poser un cadre et désamorcer une situation tendue. Quelques gestes de self-défense de base sont abordés en fin d'atelier, uniquement pour le cas où la zone intime est envahie.",
    },
    {
      question: "Que sont les trois zones de distance ?",
      answer:
        "L'atelier distingue la zone d'observation, la zone de contact et la zone intime, avec les enjeux émotionnels et de sécurité propres à chacune. Le premier exercice, en binôme, fait ressentir à chacun la distance à partir de laquelle il se sent mal à l'aise face à une personne qui avance.",
    },
    {
      question: "Comment l'organiser, et avec quoi le compléter ?",
      answer:
        "Il faut un espace d'environ 7 m x 7 m dans vos locaux ; Podium intervient à Lyon, dans l'Ain et en Auvergne-Rhône-Alpes, à partir de 4 participants. L'atelier se complète bien avec l'atelier CNV agressivité verbale ou le module 1 de la formation santé mentale, consacré à l'agressivité verbale.",
    },
  ],

  "cnv-agressivite-verbale": [
    {
      question: "Les scénarios sont-ils adaptés à notre entreprise ?",
      answer:
        "Oui. Les thèmes des jeux de rôle sont transmis à l'avance par votre entreprise, pour que les situations jouées ressemblent à celles que vivent vos équipes.",
    },
    {
      question: "Qu'est-ce que la communication non violente ?",
      answer:
        "La communication non violente (CNV) est une façon de s'exprimer et d'écouter qui apaise les échanges au lieu de les envenimer. Dans l'atelier, les observateurs repèrent ce qui fonctionne chez la personne qui gère le conflit : calme, écoute, empathie, reformulation, recherche de solution. La formation Communication Non Violente (7 heures) approfondit la méthode OSBD : observation, sentiment, besoin, demande.",
    },
    {
      question: "Comment se déroule l'atelier ?",
      answer:
        "Par groupes de quatre : deux participants jouent un conflit pendant quelques minutes, deux autres observent et analysent. Il faut une pièce calme d'environ 5 m x 5 m avec des chaises, dans vos locaux, à Lyon, dans l'Ain ou ailleurs dans la région.",
    },
  ],

  "cles-cohesion-equipe": [
    {
      question: "En quoi consiste le jeu « Une tribu en or » ?",
      answer:
        "Chaque équipe s'invente une identité (un nom, un cri, une couleur), puis coopère selon des règles de communication précises : qui mène, qui répond, qui buzze. Le jeu fait apparaître les rôles qui font fonctionner un groupe, puis l'animateur transmet des outils issus de la préparation mentale, à réutiliser en entreprise.",
    },
    {
      question: "Le manager peut-il participer avec son équipe ?",
      answer:
        "Oui, c'est même l'un des objectifs : faire de la cohésion un facteur de performance et réunir le manager et son équipe dans une dynamique commune. Tous les participants sont mis en scène, sans spectateurs.",
    },
    {
      question: "Dans quel cadre l'organiser ?",
      answer:
        "Lors d'un séminaire, d'une semaine QVCT ou d'un temps d'équipe, dans vos locaux, à Lyon, dans l'Ain ou dans le reste de la région. Prévoyez une pièce calme d'environ 6 m x 6 m avec un écran, pour des groupes à partir de 4 personnes.",
    },
  ],

  "atelier-nutrition-performance": [
    {
      question: "L'atelier tient-il compte des horaires décalés ?",
      answer:
        "Oui. Les erreurs alimentaires liées aux rythmes décalés font partie des objectifs, et chaque binôme compose un repas adapté à son horaire réel : matin, journée ou nuit. C'est un atelier particulièrement utile pour les équipes postées et les métiers de terrain.",
    },
    {
      question: "Avec quoi les participants repartent-ils ?",
      answer:
        "Avec leur « top 3 énergie » : trois actions concrètes, choisies par eux, à tester dès le lendemain. Entre-temps, le quiz « vrai ou faux », le classement des habitudes anti-coup de barre et le jeu de cartes « compose ton assiette » ont fait le tri entre idées reçues et vrais leviers.",
    },
    {
      question: "Que faut-il prévoir ?",
      answer:
        "Un espace intérieur d'environ 5 m x 5 m, avec tables et chaises. Podium anime l'atelier sur votre site, dans la métropole lyonnaise, dans l'Ain ou ailleurs en Auvergne-Rhône-Alpes, pour des groupes à partir de 4 personnes, sur 15 à 45 minutes.",
    },
  ],

  "gestion-des-emotions-sophrologie": [
    {
      question: "Qu'est-ce que la sophrologie ?",
      answer:
        "La sophrologie est une méthode psycho-corporelle qui vise l'harmonie entre le corps et l'esprit, principalement par la respiration et la relaxation. L'atelier la rend accessible à tous, sans prérequis ni expérience, dans une atmosphère détendue.",
    },
    {
      question: "Peut-on réutiliser les techniques seul, ensuite ?",
      answer:
        "Oui, c'est l'objectif. Les participants apprennent à prendre conscience de leur respiration spontanée, puis à pratiquer la respiration abdominale : des techniques simples, à réutiliser en autonomie face au stress, au bureau comme sur le terrain.",
    },
    {
      question: "Où se déroule l'atelier ?",
      answer:
        "Dans vos locaux, sur un espace intérieur d'environ 6 m x 6 m avec tables et chaises. Il peut se faire en extérieur si le lieu et le temps le permettent. Podium intervient à Lyon, dans l'Ain et dans toute la région, pour des groupes à partir de 4 personnes.",
    },
  ],

  "prevention-sante-mentale": [
    {
      question: "Que contient la boîte à outils remise aux participants ?",
      answer:
        "Des techniques de régulation du stress expérimentées pendant l'atelier : respiration, ancrage, visualisation, recentrage. Elles sont issues du coaching, de la préparation mentale et de la pleine conscience, et choisies pour être utilisables seul, au quotidien.",
    },
    {
      question: "Quelle différence avec la formation santé mentale ?",
      answer:
        "L'atelier aide chacun à comprendre son propre stress et à repérer ses signaux d'alerte. La formation santé mentale, en trois modules de 3 heures, prépare à agir : gérer l'agressivité verbale, se préserver face aux situations difficiles et détecter le mal-être chez un collègue.",
    },
    {
      question: "Comment l'organiser ?",
      answer:
        "Dans une salle d'environ 6 m x 6 m avec tables, chaises et écran, sur votre site, à Lyon, dans l'Ain ou ailleurs en Auvergne-Rhône-Alpes. L'atelier accueille des groupes à partir de 4 personnes et trouve naturellement sa place dans une semaine QVCT.",
    },
  ],

  "atelier-bulle-oxygene": [
    {
      question: "Faut-il avoir déjà pratiqué le yoga ?",
      answer:
        "Non, la séance est accessible à tous. Chacun ressent les mouvements et se corrige par lui-même, sans recherche de performance. L'objectif est de relâcher les tensions, de travailler sa respiration et de se recentrer.",
    },
    {
      question: "Comment se déroule la séance ?",
      answer:
        "Elle enchaîne trois positions. Allongé : prise de conscience du corps et de la respiration. Assis : mobilité de la colonne vertébrale. Debout : postures d'équilibre et de tonicité. Elle se termine par des torsions puis un temps de relaxation.",
    },
    {
      question: "Où peut-on l'organiser ?",
      answer:
        "Dans un espace calme d'environ 5 m x 5 m, sur sol plat, en intérieur ou en extérieur. Podium vient sur votre site, dans la métropole lyonnaise, dans l'Ain ou dans le reste de la région, pour des groupes à partir de 4 personnes.",
    },
  ],

  "quiz-sur-mesure": [
    {
      question: "Peut-on choisir les thèmes du quiz ?",
      answer:
        "Oui, les questions sont construites sur mesure à partir de vos thèmes : TMS, sécurité, règlement intérieur, RSE, hygiène de vie, ou les règles et la charte de votre entreprise. Après chaque question, une slide explicative ancre le bon message.",
    },
    {
      question: "Comment se déroule une partie ?",
      answer:
        "Les équipes sont tirées au sort, puis s'affrontent avec des buzzers Bluetooth sur 10 à 20 questions selon le temps disponible : vrai ou faux, choix multiples, puzzle, rapidité. Il est possible de bloquer les buzzers qui ont répondu faux.",
    },
    {
      question: "Quel matériel et quel espace faut-il ?",
      answer:
        "Une salle d'environ 5 m x 5 m, type salle de réunion, avec des tables et un écran. Podium apporte les buzzers et anime le quiz dans vos locaux, à Lyon, dans l'Ain ou ailleurs en Auvergne-Rhône-Alpes.",
    },
  ],

  "jeu-de-plateau-geant": [
    {
      question: "Combien d'équipes et combien de temps dure une partie ?",
      answer:
        "De 2 à 4 équipes s'affrontent sur un plateau de 2 m x 2 m. Un tour de plateau prend environ 10 minutes, ce qui permet d'enchaîner plusieurs parties sur 15 à 45 minutes et de rythmer une journée sécurité, un séminaire ou une semaine QVCT.",
    },
    {
      question: "Quelle différence avec le quiz sur-mesure ?",
      answer:
        "Les deux ateliers transmettent vos messages et valident les acquis. Le jeu de plateau ajoute des mises en situation et une progression visible sur un plateau géant. Le quiz mise sur les buzzers et la rapidité de réponse, devant un écran.",
    },
    {
      question: "Que faut-il prévoir ?",
      answer:
        "Un espace intérieur d'environ 5 m x 5 m avec des chaises. Podium installe le plateau dans vos locaux, dans la métropole lyonnaise, dans l'Ain ou ailleurs dans la région, et adapte les questions à vos thèmes : TMS, sécurité, réglementaire, RSE, hygiène de vie.",
    },
  ],

  "theatre-impro-sante-mentale": [
    {
      question: "Faut-il savoir faire du théâtre ?",
      answer:
        "Non. La participation est volontaire et encadrée, et l'atelier commence par des jeux d'expression qui créent un cadre sécurisant et posent les règles de bienveillance. Ceux qui préfèrent observer participent aussi en proposant des pistes pendant le théâtre forum.",
    },
    {
      question: "Qu'est-ce que le théâtre forum ?",
      answer:
        "C'est une technique où une scène est jouée, puis rejouée : le public peut l'arrêter à tout moment et proposer une autre façon d'agir. Ici, les scènes partent de situations réelles (surcharge, isolement, tensions d'équipe) pour apprendre à repérer les signaux faibles de mal-être et à oser en parler.",
    },
    {
      question: "Quelles conditions pour l'organiser ?",
      answer:
        "L'atelier dure 1 à 2 heures et demande au moins 8 participants. Il se déroule en intérieur, avec plusieurs sous-espaces pour les improvisations, directement dans vos locaux, à Lyon, dans l'Ain ou ailleurs en Auvergne-Rhône-Alpes.",
    },
  ],
}
