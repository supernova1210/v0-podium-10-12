import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"

export default function QvctHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-14 lg:pt-10 lg:pb-20">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-16 top-24 hidden lg:block w-52 h-52 rounded-[44px] bg-[#57B3B7]/10" />
        <div className="absolute left-10 bottom-10 hidden lg:block w-20 h-20 rounded-[20px] border-2 border-[#FFD25D]/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#57B3B7]" />
              Formations QVCT · Rhône-Alpes
            </span>

            <h1 className="font-poppins font-extrabold text-[#061952] tracking-tight leading-[1.05] text-5xl md:text-6xl mt-4 mb-5">
              Boostez la{" "}
              <span className="relative inline-block">
                <span className="relative z-10">qualité de vie</span>
                <span className="absolute left-0 right-0 bottom-1.5 h-4 bg-[#FFD25D] z-0 rounded-sm" />
              </span>{" "}
              au travail
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mb-4">
              Des formations ludiques et innovantes pour des équipes engagées et épanouies, animées directement dans vos
              locaux.
            </p>
            <p className="text-[15px] text-gray-500 leading-relaxed max-w-lg mb-8">
              Podium intervient à Lyon, Grenoble, Annecy, Chambéry, Valence et dans toute la région Auvergne-Rhône-Alpes.
            </p>

            <div className="flex flex-wrap gap-3.5 mb-8">
              <a
                href="https://calendly.com/nicolas-ofpodium/30min"
                className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.45)] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5"
              >
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#formations"
                className="inline-flex items-center justify-center font-poppins font-semibold text-base px-8 py-4 rounded-full border-2 border-[#061952] text-[#061952] transition-all duration-300 hover:bg-[#061952] hover:text-white hover:-translate-y-0.5"
              >
                Voir les formations
              </a>
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-10">
              <div>
                <div className="font-poppins font-bold text-2xl text-[#061952]">7</div>
                <div className="text-sm text-gray-500">formations QVCT</div>
              </div>
              <div>
                <div className="font-poppins font-bold text-2xl text-[#57B3B7]">100%</div>
                <div className="text-sm text-gray-500">sur-mesure</div>
              </div>
              <div>
                <div className="font-poppins font-bold text-2xl text-[#C9426B]">12h</div>
                <div className="text-sm text-gray-500">devis garanti</div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative max-w-md mx-auto lg:max-w-none w-full">
            <div className="absolute -top-5 -right-4 w-32 h-32 rounded-3xl bg-[#FFD25D] z-0 hidden sm:block" />
            <div className="absolute -bottom-6 -left-5 w-24 h-24 rounded-3xl bg-[#57B3B7] z-0 hidden sm:block" />
            <div className="relative z-10 grid grid-cols-2 gap-3.5 h-[440px]">
              <div className="relative row-span-2 rounded-[24px] overflow-hidden shadow-[0_30px_80px_rgba(6,25,82,0.16)]">
                <Image src="/images/page-formation-qvct-podium-2.jpg" alt="Formation QVCT Podium" fill className="object-cover" priority />
              </div>
              <div className="relative rounded-[24px] overflow-hidden shadow-[0_18px_50px_rgba(6,25,82,0.12)]">
                <Image src="/images/page-formation-qvct-podium-1.jpg" alt="Atelier bien-être au travail" fill className="object-cover" />
              </div>
              <div className="relative rounded-[24px] overflow-hidden shadow-[0_18px_50px_rgba(6,25,82,0.12)]">
                <Image src="/images/page-formation-qvct-podium-3.jpg" alt="Formation en entreprise" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
