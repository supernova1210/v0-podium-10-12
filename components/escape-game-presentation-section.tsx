"use client"

import Image from "next/image"
import { PodiumButton } from "@/components/ui/podium-button"

export default function EscapeGamePresentationSection() {
  return (
    <section id="escape-game" className="py-8 bg-gradient-to-br from-blue-50 via-white to-yellow-50/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-3">
            <div className="inline-block">
              <span className="text-sm md:text-base font-bold text-[#061952] bg-[#FFD25D] px-3 py-1.5 rounded-full uppercase tracking-wide">
                ATELIER SÉCURITÉ
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#061952] leading-tight">
              Escape Game Sécurité
            </h2>

            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg leading-relaxed">
                Un <strong>jeu connecté innovant</strong> où les équipes relèvent des défis variés à travers une
                application interactive dédiée à la sécurité au travail.
              </p>

              <div className="bg-white p-4 rounded-xl border-l-4 border-[#FFD25D] shadow-sm">
                <h3 className="font-bold text-[#061952] mb-2 text-base md:text-lg">Types de défis</h3>
                <ul className="space-y-1.5 text-sm md:text-base text-gray-700">
                  <li className="flex items-start leading-relaxed">
                    <span className="text-[#FFD25D] mr-2 mt-1 text-xs flex-shrink-0">●</span>
                    <span><strong>Quiz</strong></span>
                  </li>
                  <li className="flex items-start leading-relaxed">
                    <span className="text-[#FFD25D] mr-2 mt-1 text-xs flex-shrink-0">●</span>
                    <span><strong>Réponses chiffrées</strong></span>
                  </li>
                  <li className="flex items-start leading-relaxed">
                    <span className="text-[#FFD25D] mr-2 mt-1 text-xs flex-shrink-0">●</span>
                    <span><strong>Ateliers pratiques</strong></span>
                  </li>
                  <li className="flex items-start leading-relaxed">
                    <span className="text-[#FFD25D] mr-2 mt-1 text-xs flex-shrink-0">●</span>
                    <span><strong>Photos réponses</strong></span>
                  </li>
                </ul>
                <p className="text-sm md:text-base text-gray-500 italic mt-3 leading-relaxed">
                  Les défis sont entièrement personnalisables selon votre entreprise.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#061952] text-white p-3 rounded-xl text-center">
                  <div className="text-lg md:text-xl font-semibold text-[#FFD25D]">60–90 min</div>
                  <div className="text-xs md:text-sm mt-0.5">Durée d'animation</div>
                </div>
                <div className="bg-[#061952] text-white p-3 rounded-xl text-center">
                  <div className="text-lg md:text-xl font-semibold text-[#FFD25D]">5 à 100</div>
                  <div className="text-xs md:text-sm mt-0.5">Participants au total</div>
                </div>
              </div>

              <p className="text-sm md:text-base leading-relaxed">
                <strong className="text-[#061952]">Classement en temps réel</strong> : le classement évolue en continu
                pour maintenir l'engagement et la compétitivité tout au long de l'événement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <PodiumButton variant="primary" href="/atelier/escape-game-securite">
                Découvrir l'atelier
              </PodiumButton>
              <PodiumButton variant="outline" href="/contact">
                Demander un devis
              </PodiumButton>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/escape-game-atelier-podium.jpg"
                alt="Escape Game Sécurité - Jeu connecté"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFCC5A] rounded-full opacity-20 blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#061952] rounded-full opacity-10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
