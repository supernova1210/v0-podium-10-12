export const murDesAddictionsData = {
  hero: {
    title: "Atelier — Le mur des addictions",
    description:
      "Un atelier énergisant pour démarrer la journée, créer du lien et installer une routine d'échauffement simple et accessible.",
    badges: [
      {
        icon: "clock" as const,
        title: "Animation : 15 à 45 min",
        description: "Durée flexible selon vos besoins",
      },
      {
        icon: "users" as const,
        title: "À partir de 6 participants",
        description: "Idéal pour les équipes",
      },
      {
        icon: "mappin" as const,
        title: "Intérieur ou extérieur",
        description: "Adaptable à votre environnement",
      },
    ],
    image: {
      src: "/images/podium-ateliers-mur-des-addictions.jpg",
      alt: "Deux participants utilisant des lunettes de simulation d'addiction lors de l'atelier mur des addictions",
    },
    ctas: [
      {
        text: "Réserver mon atelier",
        href: "/contact",
        type: "primary" as const,
      },
      {
        text: "Télécharger le programme",
        href: "/documents/atelier-mur-des-addictions.pdf",
        type: "secondary" as const,
        target: "_blank",
      },
    ],
  },
  objectifsModalites: {
    objectifs: {
      title: "Objectifs",
      items: [
        'Vivre <span class="font-bold text-[#061952]">l\'échauffement</span> et s\'engager dans une <span class="font-bold text-[#061952]">pratique régulière</span>',
        'Sentir et exprimer les <span class="font-bold text-[#061952]">bienfaits de l\'échauffement</span> en équipe !',
        'Créer et partager une <span class="font-bold text-[#061952]">routine dynamique innovante</span> !',
      ],
    },
    modalites: {
      title: "Modalités pédagogiques",
      items: [
        'Pédagogie <span class="font-bold text-[#061952]">participative</span> et <span class="font-bold text-[#061952]">ludique</span>',
        '<span class="font-bold text-[#061952]">Ambiance musicale</span>',
        'Apprentissage par <span class="font-bold text-[#061952]">l\'exemple</span> : démonstration de l\'animateur puis <span class="font-bold text-[#061952]">correction individuelle</span>',
      ],
    },
  },
  deroule: {
    title: "Déroulé",
    steps: [
      {
        icon: "play" as const,
        text: "L'animateur propose des jeux échauffants et les participants s'affrontent dans des défis variés.",
      },
      {
        icon: "settings" as const,
        text: "Au besoin, l'animateur adapte chaque jeu aux contraintes physiques de chacun.",
      },
      {
        icon: "messagecircle" as const,
        text: "Ainsi, chacun ressent les effets de l'échauffement et partage ses ressentis lors des temps de feedback.",
      },
    ],
  },
}
