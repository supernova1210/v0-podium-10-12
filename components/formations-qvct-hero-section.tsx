"use client"

import Image from "next/image"
import { PodiumButton } from "@/components/ui/podium-button"
import { useEffect, useRef, useState } from "react"

export default function FormationsQvctHeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="scroll-mt-20 w-full bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mobile: Images first */}
          <div className="relative lg:hidden mb-8">
            <div className="grid grid-cols-2 gap-2 h-[300px]">
              <div
                className="relative overflow-hidden rounded-lg transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0) scale(1)" : "translateX(-50px) scale(0.95)",
                }}
              >
                <Image
                  src="/images/page-formation-qvct-podium-1.jpg"
                  alt="Formation QVCT"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="relative overflow-hidden rounded-lg transition-all duration-700 ease-out delay-150"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0) scale(1)" : "translateX(50px) scale(0.95)",
                }}
              >
                <Image
                  src="/images/page-formation-qvct-podium-2.jpg"
                  alt="Atelier bien-être au travail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6 max-w-[500px]">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#061952] leading-[1.1] tracking-tight">
              Formations QVCT pour booster la qualité de vie au travail
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Des formations ludiques et innovantes pour des équipes engagées et épanouies.
            </p>

            <p className="text-sm text-gray-500 leading-relaxed">
              Podium intervient à Lyon, Grenoble, Annecy, Chambéry, Valence et dans toute
              la région Rhône-Alpes, directement dans vos locaux.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PodiumButton href="https://calendly.com/nicolas-ofpodium/30min" variant="primary">
                Prendre rendez-vous
              </PodiumButton>
              <PodiumButton href="/contact" variant="outline">
                Contact
              </PodiumButton>
            </div>
          </div>

          {/* Formation Images - Right Column (Desktop only) */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              {/* Large image on the left */}
              <div
                className="relative overflow-hidden rounded-lg row-span-2 transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-50px)",
                }}
              >
                <Image
                  src="/images/page-formation-qvct-podium-2.jpg"
                  alt="Formation QVCT – Podium"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Two smaller images on the right */}
              <div className="space-y-4">
                <div
                  className="relative h-[240px] overflow-hidden rounded-lg transition-all duration-700 ease-out delay-150"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0) scale(1)" : "translateX(50px) scale(0.95)",
                  }}
                >
                  <Image
                    src="/images/page-formation-qvct-podium-1.jpg"
                    alt="Atelier bien-être au travail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  className="relative h-[240px] overflow-hidden rounded-lg transition-all duration-700 ease-out delay-300"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0) scale(1)" : "translateX(50px) scale(0.95)",
                  }}
                >
                  <Image
                    src="/images/page-formation-qvct-podium-3.jpg"
                    alt="Formation en entreprise"
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
