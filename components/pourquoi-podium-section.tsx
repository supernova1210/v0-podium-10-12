"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function PourquoiPodiumSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current) return
      
      const rect = titleRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate progress based on element position
      // Start when element enters viewport, complete when it's at 30% from top
      const startPoint = windowHeight
      const endPoint = windowHeight * 0.3
      const currentPoint = rect.top
      
      if (currentPoint >= startPoint) {
        setScrollProgress(0)
      } else if (currentPoint <= endPoint) {
        setScrollProgress(1)
      } else {
        const progress = (startPoint - currentPoint) / (startPoint - endPoint)
        setScrollProgress(Math.min(Math.max(progress, 0), 1))
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const titleWords = ["Pourquoi", "choisir", "PODIUM", "pour", "vos", "formations", "QVCT", "et", "prévention", "?"]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Title */}
        <div className="text-left mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            {titleWords.map((word, index) => {
              const wordProgress = Math.min(Math.max((scrollProgress * titleWords.length - index) / 1.5, 0), 1)
              return (
                <span
                  key={index}
                  className="inline-block mr-3 transition-all duration-300"
                  style={{
                    color: `rgba(6, 25, 82, ${0.2 + wordProgress * 0.8})`,
                  }}
                >
                  {word}
                </span>
              )
            })}
          </h2>
        </div>

        {/* Three Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {/* Le corps comme levier d'apprentissage */}
          <div className="group relative">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:shadow-[#FFD25D]/15 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] border border-gray-100/50 overflow-hidden relative">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD25D]/0 to-[#FFD25D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#FFD25D] rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
              <div className="absolute bottom-6 right-8 w-2 h-2 bg-[#061952] rounded-full opacity-30 group-hover:opacity-60 transition-all duration-300 delay-75"></div>

              {/* Yellow left accent */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-[#FFD25D] rounded-r-full opacity-60 group-hover:opacity-100 group-hover:h-24 transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#FFD25D]/15 rounded-full blur-xl scale-150"></div>
                    <div className="relative bg-gradient-to-br from-[#FFD25D] to-[#f0c040] rounded-full w-20 h-20 flex items-center justify-center shadow-lg shadow-[#FFD25D]/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Image
                        src="/images/picto-personne-celebrant.png"
                        alt="Le corps comme levier"
                        width={44}
                        height={44}
                        className="brightness-0 invert"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#061952] mb-4">{"Le corps comme levier d'apprentissage"}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {"Chez PODIUM, la prévention passe par l'expérience. Nos formats mettent les participants en mouvement pour favoriser la prise de conscience, l'ancrage et l'adoption durable des bonnes pratiques."}
                </p>
              </div>
            </div>
          </div>

          {/* Des formats immersifs et participatifs */}
          <div className="group relative">
            <div className="bg-[#061952] rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:shadow-[#061952]/30 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] overflow-hidden relative">
              {/* Background decorative circles */}
              <div className="absolute inset-0 opacity-[0.07]">
                <div className="absolute top-6 right-6 w-28 h-28 border-2 border-[#FFD25D] rounded-full"></div>
                <div className="absolute bottom-8 left-6 w-20 h-20 border border-[#FFD25D] rounded-full"></div>
                <div className="absolute top-1/2 right-1/3 w-12 h-12 border border-white rounded-full"></div>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#FFD25D] rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 animate-pulse transition-all duration-300"></div>
              <div className="absolute bottom-6 right-8 w-2 h-2 bg-[#FFD25D] rounded-full opacity-40 group-hover:opacity-80 transition-all duration-300 delay-75"></div>

              {/* Top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD25D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/15 rounded-full blur-xl scale-150"></div>
                    <div className="relative bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg shadow-black/20 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                      <Image
                        src="/images/picto-personne-etoile.png"
                        alt="Formats immersifs"
                        width={44}
                        height={44}
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Des formats immersifs et participatifs</h3>
                <p className="text-white/85 leading-relaxed">
                  {"Escape game, theatre d'improvisation, ateliers collectifs : nos interventions rendent chaque participant acteur. Cette pedagogie immersive favorise l'engagement, la cohesion et l'appropriation des enjeux de prevention."}
                </p>
              </div>
            </div>
          </div>

          {/* Un levier concret pour votre marque employeur */}
          <div className="group relative">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:shadow-[#061952]/10 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] border border-gray-100/50 overflow-hidden relative">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#061952]/0 to-[#061952]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#061952] rounded-full opacity-40 group-hover:opacity-80 group-hover:scale-150 transition-all duration-300"></div>
              <div className="absolute bottom-6 right-8 w-2 h-2 bg-[#FFD25D] rounded-full opacity-30 group-hover:opacity-60 transition-all duration-300 delay-75"></div>

              {/* Navy left accent */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-[#061952] rounded-r-full opacity-60 group-hover:opacity-100 group-hover:h-24 transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#061952]/10 rounded-full blur-xl scale-150"></div>
                    <div className="relative bg-gradient-to-br from-[#061952] to-[#0a2670] rounded-full w-20 h-20 flex items-center justify-center shadow-lg shadow-[#061952]/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Image
                        src="/images/picto-puzzle.png"
                        alt="Marque employeur"
                        width={44}
                        height={44}
                        className="brightness-0 invert"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#061952] mb-4">Un levier concret pour votre marque employeur</h3>
                <p className="text-gray-600 leading-relaxed">
                  {"Nos ateliers valorisent votre demarche QVCT et renforcent votre image d'employeur engage. Ils contribuent a ameliorer le bien-etre, la cohesion et la culture prevention au sein de vos equipes."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
