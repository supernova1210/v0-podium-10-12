"use client"

import Image from "next/image"
import { PodiumButton } from "@/components/ui/podium-button"

export default function JourneeSeminaireHeroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Mobile image - shown first on mobile */}
          <div className="lg:hidden">
            <div className="relative h-[300px] w-full overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/seminaire-2-min.jpg"
                alt="Séminaire d'entreprise PODIUM"
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
            <h1 className="text-4xl md:text-5xl font-bold text-[#061952] leading-tight">
              La journée{" "}
              <span className="relative">
                séminaire
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFD25D] rounded-full"></div>
              </span>
            </h1>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p className="font-semibold text-[#061952]">
                Faites de votre séminaire d’entreprise un moment utile, vivant et inspirant
              </p>

              <p>
                Avec O.F PODIUM, votre journée de travail devient bien plus qu’une succession de réunions. C’est une
                expérience collective, dynamique et enrichissante, où chaque temps fort est conçu pour renforcer la
                cohésion d’équipe, favoriser la prise de parole et redonner du sens au travail ensemble.
              </p>

              <p className="text-sm text-gray-500">
                Podium intervient à Lyon, Grenoble, Annecy, Chambéry, Valence et dans toute
                la région Rhône-Alpes, dans vos locaux ou dans le lieu de votre choix.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <PodiumButton
                href="https://calendly.com/nicolas-ofpodium/30min"
                variant="primary"
                className="w-full sm:w-auto"
              >
                Prendre rendez-vous
              </PodiumButton>
              <PodiumButton
                variant="outline"
                href="/documents/fiche-presentation-journee-seminaire.pdf"
                target="_blank"
              >
                Télécharger la plaquette
              </PodiumButton>
            </div>
          </div>

          {/* Image - Right Column (Desktop only) */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/seminaire-2-min.jpg"
                alt="Séminaire d'entreprise PODIUM"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(min-width: 1024px) 40vw, 0px"
                priority={true}
                quality={85}
              />
              <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
