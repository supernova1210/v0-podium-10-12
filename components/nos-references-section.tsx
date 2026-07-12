import Image from "next/image"
import Reveal from "@/components/reveal"

const partners = [
  { name: "AMOS Sport Business School", logo: "/images/logo-amos-sport.webp", alt: "AMOS Sport Business School logo" },
  { name: "Ville de Villeurbanne", logo: "/images/logo-villeurbanne.svg", alt: "Ville de Villeurbanne logo" },
  { name: "Berthelet", logo: "/images/logo-berthelet.svg", alt: "Berthelet logo" },
  { name: "Log'ins Ares & GXO", logo: "/images/logo-logins.jpg", alt: "Log'ins Ares & GXO logo" },
  { name: "GSF", logo: "/images/logo-gsf.svg", alt: "GSF logo" },
  { name: "ESMP", logo: "/images/logo-esmp.svg", alt: "ESMP logo" },
  { name: "Engagés", logo: "/images/logo-engages.png", alt: "Engagés Engagements Partagés logo" },
  { name: "Proman", logo: "/images/logo-proman.jpg", alt: "Proman Intérim CDD CDI logo" },
  { name: "Piroux Groupe", logo: "/images/logo-piroux.png", alt: "Piroux Groupe logo" },
  { name: "Balloffet", logo: "/images/logo-balloffet.png", alt: "Balloffet logo" },
  { name: "Alfa3a", logo: "/images/logo-alfa3a.png", alt: "Alfa3a Accueillir Associer Accompagner logo" },
  { name: "JBN Events", logo: "/images/logo-jbn-events.png", alt: "JBN Events logo" },
  { name: "Le Réseau des Missions Locales", logo: "/images/logo-reseau-missions-locales.png", alt: "Le Réseau des Missions Locales logo" },
]

export default function NosReferencesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fafbfe] relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-45px] top-28 hidden xl:block w-44 h-44 rounded-[36px] bg-[#FFD25D]/15" />
        <div className="absolute left-[-50px] bottom-28 hidden xl:block w-40 h-40 rounded-[34px] border-2 border-[#C9426B]/20" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
            Ils nous font confiance
          </span>
          <h2 className="font-poppins font-bold tracking-tight text-3xl md:text-5xl text-[#061952] mt-4 mb-4">
            Nos références
          </h2>
          <p className="text-lg text-gray-600">
            Ils nous font confiance pour accompagner leurs équipes vers l&apos;excellence.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={(index % 4) * 70} y={28}>
              <div className="group bg-white rounded-[22px] border border-gray-200 p-7 shadow-[0_4px_18px_rgba(6,25,82,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_40px_rgba(6,25,82,0.12)] hover:border-[#FFD25D]">
                <div className="flex items-center justify-center h-20">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={180}
                    height={80}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
