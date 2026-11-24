import { Clock, MapPin } from "lucide-react"

/** En-tête de /contact : même grammaire que les autres pages (fond clair, surlignage jaune, carrés arrondis). */
export function ContactHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-12 lg:pt-14 lg:pb-16">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-10 hidden lg:block w-64 h-64 rounded-[52px] bg-[#57B3B7]/10" />
        <div className="absolute right-40 bottom-4 hidden lg:block w-20 h-20 rounded-[22px] border-2 border-[#C9426B]/25" />
        <div className="absolute -left-16 bottom-6 hidden lg:block w-40 h-40 rounded-[36px] bg-[#FFD25D]/15" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#57B3B7]" />
            Contact & devis
          </span>

          <h1 className="font-poppins font-extrabold text-[#061952] tracking-tight leading-[1.05] text-4xl md:text-6xl mt-4 mb-5">
            Parlons de votre{" "}
            <span className="relative inline-block">
              <span className="relative z-10">projet</span>
              <span className="absolute left-0 right-0 bottom-1 h-3.5 md:h-4 bg-[#FFD25D] z-0 rounded-sm" />
            </span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Formation, atelier, journée sécurité ou semaine QVCT : dites-nous en quelques mots ce que vous imaginez,
            nous construisons la suite avec vous.
          </p>

          <div className="flex flex-wrap gap-2.5 mt-7">
            <span className="inline-flex items-center gap-2 font-poppins font-medium text-sm px-4 py-2 rounded-full bg-[#FFD25D]/25 text-[#061952]">
              <Clock className="w-4 h-4" />
              Réponse sous 12h
            </span>
            <span className="inline-flex items-center gap-2 font-poppins font-medium text-sm px-4 py-2 rounded-full bg-gray-100 text-gray-700">
              <MapPin className="w-4 h-4 text-[#C9426B]" />
              Lyon, Ain et Auvergne-Rhône-Alpes
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
