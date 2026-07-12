import FormationFAQ from "@/components/formation/formation-faq"

const faqData = [
  {
    question: "Qu'est-ce que la QVCT et pourquoi est-ce important pour mon entreprise ?",
    answer:
      "La QVCT (Qualité de Vie et Conditions de Travail) désigne l'ensemble des actions menées pour améliorer le bien-être des salariés, prévenir les risques professionnels, dont les TMS (troubles musculo-squelettiques), et renforcer l'engagement des équipes. Pour les entreprises de Lyon et de toute la région Rhône-Alpes, investir dans la QVCT permet de réduire l'absentéisme, d'améliorer la performance collective et de fidéliser les talents.",
  },
  {
    question: "Dans quelles villes Podium intervient-il ?",
    answer:
      "Podium intervient dans toute la région Auvergne-Rhône-Alpes : Lyon, Villeurbanne, Grenoble, Annecy, Chambéry, Valence, Bourg-en-Bresse, Saint-Étienne, Saint-Vulbas, Villefranche-sur-Saône et bien d'autres villes. Nous nous déplaçons directement dans vos locaux pour toutes nos formations, ateliers et événements.",
  },
  {
    question: "Les formations Podium sont-elles certifiées Qualiopi ?",
    answer:
      "Podium est actuellement en cours de labellisation Qualiopi. En attendant, nous travaillons en partenariat avec un organisme certifié qui porte nos projets de formation. Nous sommes donc en mesure de faire passer le financement de vos actions de formation via votre OPCO.",
  },
  {
    question: "Quelle est la différence entre un atelier QVT et une formation QVCT ?",
    answer:
      "Un atelier QVT est une session courte (à partir de 30 minutes), ludique et participative, idéale pour sensibiliser vos équipes sur des thèmes comme la prévention des TMS, la gestion du stress ou le bien-être au travail. Une formation QVCT est un dispositif plus structuré (1 à plusieurs jours), avec des objectifs pédagogiques précis, un programme certifiant, un suivi des acquis et une évaluation des compétences.",
  },
  {
    question: "Comment obtenir un devis pour une intervention de Podium ?",
    answer:
      "Contactez-nous via notre formulaire en ligne ou par téléphone au 07 70 00 36 72. Nous vous répondons sous 12h et construisons avec vous un programme sur mesure adapté à vos besoins, à la taille de vos équipes et à votre budget.",
  },
  {
    question: "Peut-on financer les formations Podium avec l'OPCO ?",
    answer:
      "Oui, le financement via votre OPCO (Opérateur de Compétences) est possible. Podium est en cours de labellisation Qualiopi et travaille en partenariat avec un organisme certifié qui porte les projets de formation. Nous vous accompagnons dans les démarches administratives pour faciliter la prise en charge de vos formations QVCT.",
  },
]

export default function HomepageFAQSection() {
  return <FormationFAQ faqData={faqData} />
}
