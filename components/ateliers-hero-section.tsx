"use client"

import Image from "next/image"
import { PodiumButton } from "@/components/ui/podium-button"
import { useEffect, useState } from "react"

export default function AteliersHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative lg:hidden mb-8">
            <div className="grid grid-cols-2 gap-2 h-[300px]">
              <div
                className={`relative overflow-hidden rounded-lg transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <Image
                  src="/images/page-presentation-atelier-podium-1.jpg"
                  alt="Atelier interactif"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={`relative overflow-hidden rounded-lg transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <Image
                  src="/images/page-presentation-atelier-podium-2.jpg"
                  alt="Formation d'équipe"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6 max-w-[500px]">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#061952] leading-[1.1] tracking-tight">
              Ateliers QVT & prévention pour vos équipes
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Des ateliers interactifs et engageants conçus pour sensibiliser, former et fédérer vos équipes. Chaque
              atelier combine pédagogie active, moments ludiques et apprentissages concrets pour une expérience
              mémorable et impactante.
            </p>

            <p className="text-sm text-gray-500 leading-relaxed">
              Podium intervient à Lyon, Grenoble, Annecy, Chambéry, Valence et dans toute la région Rhône-Alpes,
              directement dans vos locaux.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PodiumButton href="/contact" variant="primary">
                Réserver un atelier
              </PodiumButton>
              <PodiumButton href="/contact" variant="outline">
                Nous contacter
              </PodiumButton>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative h-full min-h-[500px]">
              {/* Large image on the left */}
              <div
                className={`absolute left-0 top-0 w-[48%] h-full overflow-hidden rounded-lg shadow-lg transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <Image
                  src="/images/page-presentation-atelier-podium-1.jpg"
                  alt="Atelier gestion du stress"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Top right image - positioned with equal spacing */}
              <div
                className={`absolute right-0 top-0 w-[48%] h-[48%] overflow-hidden rounded-lg shadow-lg transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <Image
                  src="/images/page-presentation-atelier-podium-2.jpg"
                  alt="Atelier communication"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom right image - positioned with equal spacing */}
              <div
                className={`absolute right-0 bottom-0 w-[48%] h-[48%] overflow-hidden rounded-lg shadow-lg transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <Image
                  src="/images/page-presentation-atelier-podium-3.jpg"
                  alt="Atelier sécurité"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
