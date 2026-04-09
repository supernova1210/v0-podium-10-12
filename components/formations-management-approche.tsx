import { Shield, Users, MapPin } from "lucide-react"
import { PodiumButton } from "@/components/ui/podium-button"

export default function FormationsManagementApproche() {
  const features = [
    {
      icon: Shield,
      title: "Développer le leadership et la communication",
      description: "Renforcer l’écoute, l’assertivité et la clarté des messages.",
    },
    {
      icon: Users,
      title: "Gérer efficacement les équipes et les projets",
      description: "Structurer les priorités, déléguer avec confiance, suivre l’avancement.",
    },
    {
      icon: MapPin,
      title: "Formations adaptées aux enjeux actuels du management",
      description: "Cas concrets, outils modernes, pratiques immédiatement transférables en entreprise.",
    },
  ]

  return (
    <section id="approche-management" className="scroll-mt-20 py-20 bg-[#061952] text-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-10"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-yellow-300 rounded-full opacity-15"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Notre approche Management</h2>

          <p className="text-xl text-white/90 leading-relaxed mb-16 max-w-4xl mx-auto">
            Boostez vos managers de proximité avec nos formations fun et impactantes ! Grâce à des méthodes inclusives et des outils ludiques, ils apprendront à gérer, motiver et dynamiser leurs équipes au quotidien. Des techniques directes et applicables sur le terrain pour un impact immédiat ! Offrez-leur des compétences modernes et efficaces, tout en leur donnant l'énergie et le leadership nécessaires pour relever tous les défis du management de demain !
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-[#FFD25D] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-[#061952]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <PodiumButton
            href="/contact"
            variant="primary"
            className="bg-[#FFD25D] text-[#061952] hover:bg-[#FFC107] font-bold"
          >
            Vous souhaitez en savoir plus ?
          </PodiumButton>
        </div>
      </div>
    </section>
  )
}
