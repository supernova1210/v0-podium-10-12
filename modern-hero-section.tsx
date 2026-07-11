import Image from "next/image"
import { ArrowRight } from "lucide-react"

const keywords = ["QVCT", "Formation", "Prévention", "Sécurité", "Entreprise", "Bien-être"]

export default function ModernHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-14 lg:pt-10 lg:pb-20">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-16 top-24 hidden lg:block w-52 h-52 rounded-[44px] bg-[#FFD25D]/15" />
        <div className="absolute left-10 bottom-10 hidden lg:block w-20 h-20 rounded-[20px] border-2 border-[#57B3B7]/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
              Organisme de formation · Ain &amp; Rhône-Alpes
            </span>

            <h1 className="font-poppins font-extrabold text-[#061952] tracking-tight leading-[1.08] text-4xl md:text-5xl xl:text-[3.4rem] mt-4 mb-5">
              Organisme de formation{" "}
              <span className="relative inline-block">
                <span className="relative z-10">QVCT</span>
                <span className="absolute left-0 right-0 bottom-1 h-4 bg-[#FFD25D] z-0 rounded-sm" />
              </span>
              , prévention et sécurité en entreprise
            </h1>

            <p className="font-poppins font-semibold text-lg md:text-xl text-[#061952] leading-snug max-w-xl mb-4">
              Des formations et événements ludiques et participatifs pour améliorer la qualité de vie au travail,
              prévenir les risques et renforcer l&apos;engagement des collaborateurs.
            </p>

            <p className="text-[16px] text-gray-600 leading-relaxed max-w-xl mb-8">
              PODIUM accompagne les entreprises dans leurs démarches de QVCT, de prévention et de bien-être au travail.
              À travers des formations, ateliers et événements innovants, nous plaçons l&apos;humain, le mouvement et la
              pédagogie participative au cœur de chaque intervention.
            </p>

            <div className="flex flex-wrap gap-3.5 mb-8">
              <a
                href="#nos-solutions"
                className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.45)] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5"
              >
                Nos solutions
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center font-poppins font-semibold text-base px-8 py-4 rounded-full border-2 border-[#061952] text-[#061952] transition-all duration-300 hover:bg-[#061952] hover:text-white hover:-translate-y-0.5"
              >
                Nous contacter
              </a>
            </div>

            {/* Mots-clés */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2">
              {keywords.map((keyword, index) => (
                <span key={keyword} className="flex items-center gap-x-2.5 whitespace-nowrap">
                  <span className="font-poppins font-semibold text-xs tracking-[0.1em] uppercase text-[#061952]/60">
                    {keyword}
                  </span>
                  {index < keywords.length - 1 && <span className="w-1.5 h-1.5 bg-[#FFD25D] rounded-full" />}
                </span>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative max-w-md mx-auto lg:max-w-none w-full">
            <div className="absolute -top-5 -right-4 w-32 h-32 rounded-3xl bg-[#FFD25D] z-0 hidden sm:block" />
            <div className="absolute -bottom-6 -left-5 w-24 h-24 rounded-3xl bg-[#061952] z-0 hidden sm:block" />
            <div className="relative z-10 grid grid-cols-2 gap-3.5 h-[380px] lg:h-[460px]">
              <div className="relative row-span-2 rounded-[24px] overflow-hidden shadow-[0_30px_80px_rgba(6,25,82,0.16)]">
                <Image
                  src="/images/page-accueil-atelier-podium.jpg"
                  alt="Atelier Podium en entreprise"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative rounded-[24px] overflow-hidden shadow-[0_18px_50px_rgba(6,25,82,0.12)]">
                <Image
                  src="/images/page-accueil-evenement-podium.jpg"
                  alt="Événement d'entreprise animé par Podium"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-[24px] overflow-hidden shadow-[0_18px_50px_rgba(6,25,82,0.12)]">
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
    </section>
  )
}
