import Image from "next/image"
import { PodiumButton } from "@/components/ui/podium-button"

export default function SemaineQvctHeroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Mobile image */}
          <div className="lg:hidden">
            <div className="relative h-[300px] w-full overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/atelier yoga.png"
                alt="Atelier QVCT en entreprise animé par Podium"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 0px"
                priority={false}
                loading="lazy"
                quality={80}
              />
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6 lg:col-span-3">
            <h1 className="text-4xl md:text-5xl font-bold text-[#061952] leading-tight">
              La semaine{" "}
              <span className="relative">
                QVCT
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFD25D] rounded-full"></div>
              </span>
            </h1>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p className="font-semibold text-[#061952]">
                Faites de votre semaine QVCT un temps fort utile, vivant et adapté à vos équipes
              </p>

              <p>
                Organisez une semaine de la QVCT interactive, concrète et sur mesure pour sensibiliser vos collaborateurs
                autour de la qualité de vie et des conditions de travail.
              </p>

              <p>
                Prévention des TMS, gestion du stress, hygiène de vie, cohésion d'équipe, communication, sommeil,
                nutrition, activité physique : chaque atelier est pensé pour répondre à vos enjeux terrain, à vos
                métiers et à vos contraintes d'organisation.
              </p>

              <p className="text-sm text-gray-500">
                Podium intervient principalement dans l'Ain, la région lyonnaise, Bourg-en-Bresse, Ambérieu-en-Bugey,
                la Plaine de l'Ain, Rillieux-la-Pape et plus largement en région Auvergne-Rhône-Alpes.
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

          {/* Image desktop */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="relative h-[450px] w-full overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/atelier yoga.png"
                alt="Atelier QVCT en entreprise animé par Podium"
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
