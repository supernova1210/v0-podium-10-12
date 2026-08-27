import Image from "next/image"
import { ArrowRight } from "lucide-react"

const CALENDLY = "https://calendly.com/nicolas-ofpodium/30min"

export default function PourquoiPodiumAboutSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-14 lg:pt-10 lg:pb-20">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-16 top-24 hidden lg:block w-52 h-52 rounded-[44px] bg-[#FFD25D]/15" />
        <div className="absolute left-10 bottom-10 hidden lg:block w-20 h-20 rounded-[20px] border-2 border-[#57B3B7]/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Texte */}
          <div>
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
              Nous découvrir
            </span>

            <h1 className="font-poppins font-extrabold text-[#061952] tracking-tight leading-[1.05] text-4xl md:text-6xl mt-4 mb-6">
              Pourquoi{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Podium</span>
                <span className="absolute left-0 right-0 bottom-1.5 h-4 bg-[#FFD25D] z-0 rounded-sm" />
              </span>
              &nbsp;?
            </h1>

            <div className="space-y-4 text-[16px] text-gray-600 leading-relaxed max-w-xl">
              <p>
                O.F PODIUM est né d&apos;une idée simple : apprendre peut être sérieux... sans être barbant ! Face aux
                enjeux de sécurité et de qualité de vie au travail, on a voulu dépoussiérer la formation avec une
                approche 100 % humaine et joyeusement décalée.
              </p>
              <p>
                Ici, on apprend en bougeant, en jouant, en rigolant parfois, mais toujours avec un objectif clair :
                ancrer les bons réflexes, durablement. Grâce à des ateliers ludiques et immersifs, chacun devient
                acteur de sa prévention, sans stress ni pression.
              </p>
              <p>
                Chez O.F PODIUM, on mêle expertise solide et énergie positive. Nos formateurs ne récitent pas des
                discours : ils embarquent, motivent et adaptent chaque contenu à votre réalité terrain.
              </p>
              <p className="text-sm text-gray-500">
                Podium intervient à Lyon, Grenoble, Annecy, Chambéry, Valence et dans toute la région
                Auvergne-Rhône-Alpes, directement dans vos locaux.
              </p>
              <p className="font-poppins font-semibold text-[#061952] text-lg">
                Notre mission : créer des moments forts, qui fédèrent et qui donnent envie de faire autrement.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 mt-8">
              <a
                href={CALENDLY}
                className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.45)] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5"
              >
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center font-poppins font-semibold text-base px-8 py-4 rounded-full border-2 border-[#061952] text-[#061952] transition-all duration-300 hover:bg-[#061952] hover:text-white hover:-translate-y-0.5"
              >
                Contactez-nous
              </a>
            </div>
          </div>

          {/* Visuel */}
          <div className="relative max-w-md mx-auto lg:max-w-none w-full">
            <div className="absolute -top-5 -right-4 w-32 h-32 rounded-3xl bg-[#FFD25D] z-0 hidden sm:block" />
            <div className="absolute -bottom-6 -left-5 w-24 h-24 rounded-3xl bg-[#061952] z-0 hidden sm:block" />
            <div className="relative z-10 grid grid-cols-2 gap-3.5 h-[380px] lg:h-[460px]">
              <div className="relative row-span-2 rounded-[24px] overflow-hidden shadow-[0_30px_80px_rgba(6,25,82,0.16)]">
                <Image
                  src="/images/podium-atelier-escape-game.webp"
                  alt="Formatrice Podium animant une session en entreprise"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative rounded-[24px] overflow-hidden shadow-[0_18px_50px_rgba(6,25,82,0.12)]">
                <Image
                  src="/images/atelier-coequipiers-min.jpg"
                  alt="L'équipe Podium"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-[24px] overflow-hidden shadow-[0_18px_50px_rgba(6,25,82,0.12)]">
                <Image
                  src="/images/mur-digital-addiction.jpg"
                  alt="Atelier interactif de prévention avec mur digital des addictions"
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
