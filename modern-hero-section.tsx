import Image from "next/image"
import { ArrowRight, BadgeCheck, MapPin } from "lucide-react"

export default function ModernHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 lg:pt-16 lg:pb-20">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-16 hidden lg:block w-72 h-72 rounded-[56px] bg-[#FFD25D]/15" />
        <div className="absolute right-40 top-52 hidden lg:block w-24 h-24 rounded-[24px] border-2 border-[#57B3B7]/30" />
        <div className="absolute -left-16 bottom-24 hidden lg:block w-40 h-40 rounded-[36px] bg-[#C9426B]/[0.07]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Chip mots-clés */}
          <span className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-[0_4px_18px_rgba(6,25,82,0.06)]">
            <span className="w-2 h-2 rounded-full bg-[#FFD25D]" />
            <span className="font-poppins font-medium text-sm text-[#061952]/70">
              QVCT · Prévention · Sécurité · <span className="font-semibold text-[#C9426B]">Bien-être au travail</span>
            </span>
          </span>

          {/* Titre XXL */}
          <h1 className="font-poppins font-extrabold tracking-tight leading-[1.02] mt-7 mb-9 text-[2.6rem] sm:text-6xl lg:text-7xl">
            <span className="block text-[#061952]">Organisme de formation</span>
            <span className="block mt-2">
              <span className="relative inline-block">
                <span className="relative z-10 text-[#061952] italic">QVCT, prévention et sécurité</span>
                <span className="absolute left-0 right-0 bottom-1 h-[0.42em] bg-[#FFD25D] z-0 rounded-sm" />
              </span>
              <span className="text-[#C9426B]">.</span>
            </span>
          </h1>

          {/* CTAs + accroche */}
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-start mb-12">
            <div className="flex flex-wrap gap-3.5">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.45)] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5"
              >
                Parler de votre projet
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#nos-solutions"
                className="inline-flex items-center justify-center font-poppins font-semibold text-base px-8 py-4 rounded-full border-2 border-[#061952] text-[#061952] transition-all duration-300 hover:bg-[#061952] hover:text-white hover:-translate-y-0.5"
              >
                Nos solutions
              </a>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="font-poppins font-semibold text-lg text-[#061952] leading-snug mb-2.5">
                Des formations et événements ludiques et participatifs pour améliorer la qualité de vie au travail,
                prévenir les risques et renforcer l&apos;engagement des collaborateurs.
              </p>
              <p className="text-[15px] text-gray-500 leading-relaxed">
                PODIUM accompagne les entreprises dans leurs démarches de QVCT, de prévention et de bien-être au
                travail : formations, ateliers et événements qui placent l&apos;humain, le mouvement et la pédagogie
                participative au cœur de chaque intervention.
              </p>
            </div>
          </div>

          {/* Bande visuelle : grande photo + carte stat marine */}
          <div className="grid lg:grid-cols-[1.9fr_1.1fr] gap-4">
            <div className="relative h-[300px] lg:h-[420px] rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(6,25,82,0.16)]">
              <Image
                src="/images/page-accueil-atelier-podium.jpg"
                alt="Atelier Podium animé en entreprise"
                fill
                className="object-cover"
                priority
              />
              <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 font-poppins font-semibold text-xs px-3.5 py-2 rounded-full bg-white/90 text-[#061952] backdrop-blur">
                <MapPin className="w-3.5 h-3.5 text-[#C9426B]" />
                Animé dans vos locaux · Ain &amp; Rhône-Alpes
              </span>
            </div>

            <div className="relative overflow-hidden bg-[#061952] rounded-[28px] p-8 lg:p-10 flex flex-col justify-center shadow-[0_30px_80px_rgba(6,25,82,0.2)]">
              <div aria-hidden className="absolute -top-10 -right-10 w-36 h-36 rounded-[30px] border-2 border-[#FFD25D]/25" />
              <div aria-hidden className="absolute -bottom-12 -left-8 w-32 h-32 rounded-[28px] bg-[#57B3B7]/10" />

              <div className="relative">
                <div className="font-poppins font-extrabold leading-none">
                  <span className="text-white text-6xl lg:text-7xl">12</span>
                  <span className="text-[#FFD25D] text-6xl lg:text-7xl">h</span>
                </div>
                <p className="text-white/80 text-lg leading-snug mt-3">
                  pour recevoir votre devis, gratuit et garanti.
                </p>

                <div className="mt-7 pt-6 border-t border-white/15 space-y-3">
                  <p className="flex items-center gap-2.5 text-[15px] text-white/80">
                    <BadgeCheck className="w-5 h-5 text-[#FFD25D] flex-shrink-0" />
                    Organisme certifié Qualiopi, éligible OPCO
                  </p>
                  <p className="flex items-center gap-2.5 text-[15px] text-white/80">
                    <span className="w-5 h-5 rounded-md bg-[#57B3B7]/25 text-[#7ECDD1] flex items-center justify-center flex-shrink-0 font-poppins font-bold text-[11px]">
                      %
                    </span>
                    100% sur-mesure, de 4 à 300 participants
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
