"use client"

import Image from "next/image"
import { PodiumButton } from "@/components/ui/podium-button"

export default function NousRejoindreSection() {
  return (
    <section className="relative bg-[#061952] py-20 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#FFD25D] rounded-full"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#FFD25D] rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-[#FFD25D] rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-[#FFD25D] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-96 h-96 z-0">
                <Image
                  src="/images/trait-epais-jaune.png"
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Image container with yellow border */}
              <div className="relative w-80 h-80 mx-auto z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFD25D] to-[#FFD25D]/80 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src="/team-of-professionals-collaborating-at-a-modern-of.png"
                      alt="Équipe PODIUM travaillant ensemble"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Additional decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#FFD25D]/30 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -right-8 w-12 h-12 bg-[#FFD25D]/20 rounded-full blur-lg"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-sans">Nous rejoindre</h2>

            <p className="text-lg lg:text-xl font-semibold text-white mb-10 max-w-2xl">
              Un collectif engagé pour la santé au travail
            </p>

            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
              PODIUM, c’est avant tout un collectif d’experts partageant une vision commune de la formation : humaine, participative et orientée prévention.
              Implanté à Ambérieu-en-Bugey, au cœur du département de l’Ain, PODIUM intervient auprès des entreprises locales et régionales pour les accompagner sur les enjeux de qualité de vie au travail, de prévention et de santé des collaborateurs.
            </p>

            <p className="text-lg lg:text-xl font-semibold text-white mb-10 max-w-2xl">
              Si tu veux rejoindre l'aventure, laisse-nous tes coordonnées, on te recontacte rapidement
            </p>

            <PodiumButton href="/contact" variant="primary" size="lg">
              Devenir formateur
            </PodiumButton>
          </div>
        </div>
      </div>
    </section>
  )
}
