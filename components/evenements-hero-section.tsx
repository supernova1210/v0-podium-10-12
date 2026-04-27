import Image from "next/image"
import { PodiumButton } from "@/components/ui/podium-button"
import { Badge, BadgesGrid } from "@/components/workshop-hero"

export default function EvenementsHeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mobile: Images first */}
          <div className="relative lg:hidden mb-8">
            <div className="grid grid-cols-2 gap-2 h-[300px]">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/podium-photo-hero-evenement-1.jpg"
                  alt="Atelier sécurité Cap'Sécurité"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image src="/images/seminaire-min.jpg" alt="Séminaire d'entreprise" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#061952] leading-[1.1] tracking-tight">
              Journées Sécurité, RSE et séminaires pour vos équipes
            </h1>

            <BadgesGrid>
              <Badge icon="clock">
                <div>
                  <div className="font-semibold text-blue-950">Durée</div>
                  <div className="text-gray-600">modulable</div>
                </div>
              </Badge>
              <Badge icon="users">
                <div>
                  <div className="font-semibold text-blue-950">Ateliers</div>
                  <div className="text-gray-600">sur-mesure</div>
                </div>
              </Badge>
              <Badge icon="location">
                <div>
                  <div className="font-semibold text-blue-950">Sur site</div>
                  <div className="text-gray-600">ou en extérieur</div>
                </div>
              </Badge>
            </BadgesGrid>

            <p className="text-lg text-gray-600 leading-relaxed">
              Des événements interactifs conçus pour renforcer l'esprit d'équipe, développer les compétences et ancrer
              durablement les bons réflexes.
            </p>

            <p className="text-sm text-gray-500 leading-relaxed">
              Podium intervient à Lyon, Grenoble, Annecy, Chambéry, Valence et dans toute
              la région Rhône-Alpes, dans vos locaux ou dans le lieu de votre choix.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PodiumButton
                href="https://calendly.com/nicolas-ofpodium/30min"
                variant="primary"
                className="w-full sm:w-auto"
              >
                Prendre rendez-vous
              </PodiumButton>
              <PodiumButton href="/contact" variant="outline">
                Nous contacter
              </PodiumButton>
            </div>
          </div>

          {/* Event Images - Right Column (Desktop only) */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4 h-full p-8">
              <div className="space-y-4">
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/images/podium-photo-hero-evenement-1.jpg"
                    alt="Atelier sécurité Cap'Sécurité"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 overflow-hidden rounded-lg">
                  <Image src="/images/seminaire-min.jpg" alt="Séminaire d'entreprise" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/images/atelier-yoga-bulle-oxygene-v2.png"
                    alt="Atelier yoga bien-être"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/images/podium-photo-hero-evenement-2.jpg"
                    alt="Événement GSF conférence"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
