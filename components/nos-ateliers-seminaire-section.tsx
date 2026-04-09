"use client"

import Image from "next/image"
import { PodiumButton } from "@/components/ui/podium-button"

export default function NosAteliersSeminaireSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Mobile image - shown first on mobile */}
          <div className="lg:hidden">
            <div className="relative h-[300px] w-full overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/seminaire-min.jpg"
                alt="Ateliers ludiques séminaire PODIUM"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 0px"
                priority={false}
                loading="lazy"
                quality={80}
              />
            </div>
          </div>

          {/* Text content - Left Column */}
          <div className="space-y-6 lg:col-span-3">
            <h2 className="text-4xl md:text-5xl font-bold text-[#061952] leading-tight">
              Des ateliers{" "}
              <span className="relative">
                ludiques
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFD25D] rounded-full"></div>
              </span>
            </h2>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p className="font-semibold text-[#061952]">
                Des ateliers interactifs et engageants, conçus pour sensibiliser, former et fédérer vos équipes.
              </p>

              <p>
                Chaque atelier combine pédagogie active, moments ludiques et apprentissages concrets pour une expérience
                à la fois mémorable et impactante. Ils viennent parfaitement compléter une journée de travail en
                apportant une dimension participative et inspirante, et s’adaptent à tous les métiers comme à la
                diversité des domaines d’expertise de votre entreprise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <PodiumButton href="/nos-ateliers" variant="primary" className="w-full sm:w-auto">
                Découvrir nos ateliers
              </PodiumButton>
              <PodiumButton href="/contact" variant="outline" className="w-full sm:w-auto">
                Contactez-nous
              </PodiumButton>
            </div>
          </div>

          {/* Image - Right Column (Desktop only) */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {/* Left column - vertical image */}
              <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Image
                  src="/images/seminaire-podium-1.jpg"
                  alt="Atelier séminaire PODIUM"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 1024px) 20vw, 0px"
                  priority={true}
                  quality={85}
                />
              </div>

              {/* Right column - 2 stacked horizontal images */}
              <div className="flex flex-col gap-4">
                <div className="relative h-[190px] overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/images/seminaire-min.jpg"
                    alt="Séminaire entreprise PODIUM"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(min-width: 1024px) 20vw, 0px"
                    quality={85}
                  />
                </div>
                <div className="relative h-[190px] overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/images/seminaire-podium-2.jpg"
                    alt="Activité séminaire PODIUM"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(min-width: 1024px) 20vw, 0px"
                    quality={85}
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
