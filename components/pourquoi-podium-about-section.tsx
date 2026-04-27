"use client"

import Image from "next/image"
import { PodiumButton } from "@/components/ui/podium-button"

export default function PourquoiPodiumAboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Mobile image - shown first on mobile */}
          <div className="lg:hidden">
            <div className="relative h-[300px] w-full overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/mur-digital-addiction.jpg"
                alt="Atelier interactif de prévention avec mur digital des addictions"
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
              Pourquoi{" "}
              <span className="relative">
                Podium
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFD25D] rounded-full"></div>
              </span>
              ?
            </h2>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                O.F PODIUM est né d'une idée simple : apprendre peut-être sérieux... sans être barbant ! Face aux enjeux
                de sécurité et de qualité de vie au travail, on a voulu dépoussiérer la formation avec une approche 100
                % humaine et joyeusement décalée.
              </p>

              <p>
                Ici, on apprend en bougeant, en jouant, en rigolant parfois, mais toujours avec un objectif clair :
                ancrer les bons réflexes, durablement. Grâce à des ateliers ludiques et immersifs, chacun devient acteur
                de sa prévention, sans stress ni pression.
              </p>

              <p>
                Chez O.F PODIUM, on mêle expertise solide et énergie positive. Nos formateurs ne récitent pas des
                discours : ils embarquent, motivent et adaptent chaque contenu à votre réalité terrain.
              </p>

              <p className="text-sm text-gray-500">
                Podium intervient à Lyon, Grenoble, Annecy, Chambéry, Valence et dans toute la région Auvergne-Rhône-Alpes, directement dans vos locaux.
              </p>

              <p className="font-semibold text-[#061952]">
                Notre mission : créer des moments forts, qui fédèrent et qui donnent envie de faire autrement.
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
              <PodiumButton href="/contact" variant="outline" className="w-full sm:w-auto">
                Contactez-nous
              </PodiumButton>
            </div>
          </div>

          {/* Image - Right Column (Desktop only) */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/mur-digital-addiction.jpg"
                alt="Atelier interactif de prévention avec mur digital des addictions"
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
