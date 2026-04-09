import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FormationAffirmerConfianceCnvFAQ() {
  const faqItems = [
    {
      question: "Qu'est-ce que la CNV (Communication Non Violente) ?",
      answer:
        "La Communication Non Violente est une approche développée par Marshall Rosenberg qui vise à établir des relations fondées sur l'empathie, la clarté et le respect mutuel. Elle permet de s'exprimer avec authenticité tout en écoutant l'autre avec bienveillance, même dans les situations de tension ou de désaccord.",
    },
    {
      question: "Cette formation est-elle adaptée aux managers ?",
      answer:
        "Absolument. Cette formation est particulièrement pertinente pour les managers qui souhaitent améliorer leur communication avec leurs équipes, gérer les conflits de manière constructive et créer un climat de confiance. Les outils CNV sont directement applicables dans les entretiens, les réunions et les feedbacks.",
    },
    {
      question: "Comment se déroulent les 9 heures de formation ?",
      answer:
        "La formation est organisée en plusieurs modules qui alternent apports théoriques et mises en situation pratiques. Vous travaillerez sur des cas concrets issus de votre quotidien professionnel, ce qui permet une appropriation immédiate des outils et techniques.",
    },
    {
      question: "Quels résultats concrets puis-je attendre ?",
      answer:
        "À l'issue de la formation, vous saurez réguler vos émotions dans les échanges professionnels, vous affirmer avec respect, rebondir face aux objections et développer des relations de qualité. Vous repartirez avec des outils pratiques pour communiquer avec clarté et objectivité.",
    },
    {
      question: "La formation aborde-t-elle la gestion des émotions ?",
      answer:
        "Oui, c'est un pilier central de la formation. Vous découvrirez le mécanisme des émotions et leur rôle dans les échanges professionnels, apprendrez à communiquer à chaud ou à froid, et développerez votre capacité à vous affirmer tout en respectant vos interlocuteurs.",
    },
    {
      question: "Comment la formation est-elle évaluée ?",
      answer:
        "L'évaluation comprend une feuille de présence pour le suivi du module, une attestation de participation à la formation, une évaluation du niveau de satisfaction des participants et une évaluation des capacités d'animation acquises.",
    },
  ]

  return (
    <section id="faq" className="scroll-mt-20 py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#061952] text-center mb-12">Questions fréquentes</h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-[#061952] hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-6">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
