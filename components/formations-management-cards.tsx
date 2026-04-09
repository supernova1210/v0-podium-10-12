import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PodiumButton } from "@/components/ui/podium-button"
import { Presentation, Users, MessageCircle } from "lucide-react"

export default function FormationsManagementCards() {
  const formations = [
    {
      icon: Presentation,
      title: "Techniques d'animation de réunion",
      description: "Transformez vos réunions en moments captivants grâce aux techniques du cinéma et aux profils DISC.",
      image: "/images/atelier-communication-non-violente-CNV-min.jpg",
      href: "/formation-management-technique-animation",
    },
    {
      icon: Users,
      title: "Lancer et dynamiser une réunion",
      description:
        "Maîtrisez l'art des icebreakers pour capter l'attention et créer du lien dès les premières minutes.",
      image: "/images/atelier-cohesion-min.jpg",
      href: "/formation-management-lancer-dynamiser-reunion",
    },
    {
      icon: MessageCircle,
      title: "S'affirmer avec confiance – CNV",
      description:
        "Développez une communication claire, posée et respectueuse pour des relations professionnelles de qualité.",
      image: "/images/atelier-CNV-agressivite-physique.jpg",
      href: "/formation-management-affirmer-confiance-cnv",
    },
  ]

  return (
    <section id="formations-management" className="scroll-mt-20 py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#061952] mb-6">Nos formations Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des formations concrètes et adaptées pour améliorer durablement la qualité de vie au travail de vos
              équipes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={formation.image || "/placeholder.svg"}
                    alt={formation.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#FFD25D] rounded-full flex items-center justify-center">
                    <formation.icon className="w-6 h-6 text-[#061952]" />
                  </div>
                </div>

                <CardHeader className="pb-4 min-h-[100px] flex items-start">
                  <CardTitle className="text-xl font-bold text-[#061952] group-hover:text-[#FFD25D] transition-colors duration-300">
                    {formation.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-1">
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">{formation.description}</p>

                  <PodiumButton
                    href={formation.href}
                    variant="outline"
                    className="w-full border-[#061952] text-[#061952] hover:bg-[#061952] hover:text-white"
                  >
                    En savoir plus
                  </PodiumButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
