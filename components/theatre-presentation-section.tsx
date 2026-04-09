"use client"

import Image from "next/image"
import { PodiumButton } from "@/components/ui/podium-button"

export default function TheatrePresentationSection() {
  return (
    <section id="theatre-improvisation" className="py-8 bg-gradient-to-br from-white via-yellow-50/20 to-blue-50/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image Content - Left side on desktop */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/atelier-theatre-entreprise.jpg"
                alt="Atelier Théâtre en entreprise - Prévention par l'improvisation"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#FFCC5A] rounded-full opacity-20 blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#061952] rounded-full opacity-10 blur-3xl" />
          </div>

          {/* Text Content - Right side on desktop */}
          <div className="space-y-3 order-1 lg:order-2">
            <div className="inline-block">
              <span className="text-sm md:text-base font-bold text-[#061952] bg-[#FFD25D] px-3 py-1.5 rounded-full uppercase tracking-wide">
                ATELIER QVT
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#061952] leading-tight">
              Atelier Théâtre en entreprise
            </h2>

            <div className="bg-white p-4 rounded-xl border-l-4 border-[#FFD25D] shadow-sm">
              <p className="text-base md:text-lg text-gray-700 italic leading-relaxed">
                "Utiliser le théâtre d'improvisation comme un outil de prévention : faire vivre des situations proches
                du réel, pour provoquer une prise de conscience collective."
              </p>
            </div>

            <div className="space-y-3 text-gray-700 leading-relaxed">
              <h3 className="font-bold text-[#061952] text-base md:text-lg">Objectifs</h3>

              <ul className="space-y-1.5">
                <li className="flex items-start text-sm md:text-base leading-relaxed">
                  <span className="text-[#FFD25D] text-xs mr-2 mt-1 flex-shrink-0">●</span>
                  <span>
                    <strong>Faire émerger</strong> les comportements à risque du quotidien
                  </span>
                </li>
                <li className="flex items-start text-sm md:text-base leading-relaxed">
                  <span className="text-[#FFD25D] text-xs mr-2 mt-1 flex-shrink-0">●</span>
                  <span>
                    Permettre aux participants de <strong>se reconnaître</strong> dans des situations concrètes (effet
                    miroir)
                  </span>
                </li>
                <li className="flex items-start text-sm md:text-base leading-relaxed">
                  <span className="text-[#FFD25D] text-xs mr-2 mt-1 flex-shrink-0">●</span>
                  <span>
                    <strong>Dédramatiser et décomplexer</strong> sur ces sujets du quotidien
                  </span>
                </li>
                <li className="flex items-start text-sm md:text-base leading-relaxed">
                  <span className="text-[#FFD25D] text-xs mr-2 mt-1 flex-shrink-0">●</span>
                  <span>
                    <strong>Enclencher les échanges</strong> et favoriser le dialogue
                  </span>
                </li>
                <li className="flex items-start text-sm md:text-base leading-relaxed">
                  <span className="text-[#FFD25D] text-xs mr-2 mt-1 flex-shrink-0">●</span>
                  <span>
                    Ancrer les messages de prévention par <strong>l'expérience vécue</strong>
                  </span>
                </li>
              </ul>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#061952] text-white p-3 rounded-xl text-center">
                  <div className="text-lg md:text-xl font-semibold text-[#FFD25D]">2 à 3h</div>
                  <div className="text-xs md:text-sm mt-0.5">Durée</div>
                </div>
                <div className="bg-[#061952] text-white p-3 rounded-xl text-center">
                  <div className="text-lg md:text-xl font-semibold text-[#FFD25D]">30</div>
                  <div className="text-xs md:text-sm mt-0.5">Participants</div>
                </div>
                <div className="bg-[#061952] text-white p-3 rounded-xl text-center">
                  <div className="text-sm md:text-base font-semibold text-[#FFD25D]">TMS • RPS</div>
                  <div className="text-xs md:text-sm mt-0.5">Thématiques</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <PodiumButton variant="primary" href="/contact">
                Organiser cet atelier
              </PodiumButton>
              <PodiumButton variant="outline" href="/contact">
                En savoir plus
              </PodiumButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
