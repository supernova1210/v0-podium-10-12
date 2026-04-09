import { PodiumButton } from "@/components/ui/podium-button"
import { Lightbulb, Users, HeadphonesIcon, Target, CheckCircle } from "lucide-react"

export default function FormationsManagementDeroulement() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Analyse des besoins",
      description: "Évaluation personnalisée de votre contexte",
    },
    {
      icon: Target,
      title: "Conception sur-mesure",
      description: "Programme adapté à vos objectifs",
    },
    {
      icon: Users,
      title: "Formation interactive",
      description: "Sessions ludiques et participatives",
    },
    {
      icon: HeadphonesIcon,
      title: "Accompagnement",
      description: "Suivi post-formation personnalisé",
    },
    {
      icon: CheckCircle,
      title: "Évaluation",
      description: "Mesure de l'impact et des résultats",
    },
  ]

  return (
    <section id="deroulement" className="scroll-mt-20 py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left column - Text content */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#061952] mb-8">
                  Comment se passent nos formations ?
                </h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#061952] mb-4">Une pédagogie novatrice</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Nous travaillons quotidiennement dans la structuration et l'adaptation de nos formations pour avoir
                    ce positionnement pédagogique qui se veut ludique et innovant. Nous sommes convaincus des bienfaits
                    de ces nouveaux modes d'interventions. Il a été prouvé que placer les apprenants dans des situations
                    actives permet d'augmenter significativement les interactions entre eux mais aussi avec les
                    formateurs pour être mieux accompagnés durant la formation.
                  </p>
                  <PodiumButton href="/about#pedagogie" size="default">
                    Notre pédagogie
                  </PodiumButton>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#061952] mb-4">Des formateurs passionnés</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Accompagné par des experts dans le domaine de la formation et du bien-être, l'organisme de formation
                    PODIUM peut s'appuyer sur des intervenants mettant leurs compétences au service des participants. La
                    culture du sport, du jeu et de l'engagement collectif sont des vecteurs communs entre nos différents
                    intervenants. L'envie de transmettre mais surtout d'apprendre font de cette équipe, un groupe
                    passionné et passionnant.
                  </p>
                  <PodiumButton href="/about#coequipiers" size="default">
                    Nos coéquipiers
                  </PodiumButton>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#061952] mb-4">Un accompagnement post-formation</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Notre organisme de formation propose un accompagnement post-formation auprès des participants en
                    entreprise : une proximité client renforcée et des outils novateurs pour accompagner chaque salarié.
                    Avec notre approche dynamique et sur-mesure, nous faisons de chaque formation une véritable
                    réussite, adaptée aux besoins de vos équipes et à vos objectifs.
                  </p>
                  <PodiumButton href="/contact" size="default">
                    Demander un devis
                  </PodiumButton>
                </div>
              </div>
            </div>

            {/* Right column - Timeline */}
            <div className="lg:pl-8">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#FFD25D]"></div>

                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <div key={index} className="relative flex items-start">
                      <div className="w-12 h-12 bg-[#061952] rounded-full flex items-center justify-center relative z-10 mr-6">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-[#061952] mb-2">{step.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
