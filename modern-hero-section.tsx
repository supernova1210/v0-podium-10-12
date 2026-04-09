"use client"

import Image from "next/image"
import { PodiumButton } from "@/components/ui/podium-button"

export default function ModernHeroSection() {
  const keywords = ["QVCT", "formation", "prévention", "sécurité", "entreprise", "bien-être"]

  return (
    <section className="relative w-full bg-white">
      <div className="container mx-auto px-6 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Mobile image - shown first on mobile */}
          <div className="lg:hidden">
            <div className="relative h-[300px] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/design-mode/podium_organisme_formation_nous_decouvrir-min.jpg.jpeg"
                alt="Équipe PODIUM - Organisme de formation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6 max-w-[540px]">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#061952] leading-[1.15] tracking-tight">
              Organisme de formation QVCT, prévention et sécurité en entreprise
            </h1>

            <p className="text-lg lg:text-xl text-[#061952]/80 font-medium leading-relaxed border-l-4 border-[#FFCC5A] pl-4">
              Des formations et événements ludiques et participatifs pour améliorer la qualité de vie au travail, prévenir les risques et renforcer l'engagement des collaborateurs.
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              PODIUM accompagne les entreprises dans leurs démarches de QVCT, de prévention et de bien-être au travail. À travers des formations, ateliers et événements innovants, nous plaçons l'humain, le mouvement et la pédagogie participative au cœur de chaque intervention.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PodiumButton href="#nos-solutions" variant="primary">
                Nos solutions
              </PodiumButton>
              <PodiumButton href="/contact" variant="outline">
                Nous contacter
              </PodiumButton>
            </div>

            {/* Keywords with yellow dots */}
            <div className="flex items-center gap-x-2 pt-2 overflow-x-auto">
              {keywords.map((keyword, index) => (
                <span key={keyword} className="flex items-center whitespace-nowrap">
                  <span className="text-xs font-medium text-[#061952]/70 uppercase tracking-wide">{keyword}</span>
                  {index < keywords.length - 1 && (
                    <span className="w-1.5 h-1.5 bg-[#FFCC5A] rounded-full ml-2" />
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop images - Cohesio-style layout */}
          <div className="hidden lg:block">
            <div className="space-y-4">
              <div className="relative h-[350px] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/page-accueil-atelier-podium.jpg"
                  alt="Équipe PODIUM - Organisme de formation"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[180px] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/page-accueil-evenement-podium.jpg"
                    alt="Atelier interactif mur des addictions"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[180px] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/page-accueil-formation-podium.jpg"
                    alt="Matériel pédagogique et cartes de formation"
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
