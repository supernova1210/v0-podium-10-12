import { Phone, Mail, MapPin } from "lucide-react"

export function ContactHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#061952] py-16 lg:py-24">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-14 -right-14 w-56 h-56 rounded-[44px] border-2 border-[#FFD25D]/20" />
        <div className="absolute top-20 right-32 w-24 h-24 rounded-[26px] bg-[#57B3B7]/10 hidden md:block" />
        <div className="absolute -bottom-16 -left-12 w-48 h-48 rounded-[38px] bg-white/[0.04]" />
        <div className="absolute bottom-12 left-24 w-16 h-16 rounded-[18px] bg-[#C9426B]/15 hidden md:block" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#FFD25D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
            Réponse sous 12h
          </span>

          <h1 className="font-poppins font-extrabold text-white tracking-tight leading-[1.05] text-4xl lg:text-6xl mt-4 mb-5">
            Contactez-
            <span className="relative inline-block">
              <span className="relative z-10">nous</span>
              <span className="absolute left-0 right-0 bottom-1.5 h-4 bg-[#FFD25D]/40 z-0 rounded-sm" />
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-9">
            Prêt à transformer votre équipe ? Parlons de votre projet et découvrons ensemble comment PODIUM peut vous
            accompagner.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:0770003672"
              className="inline-flex items-center gap-2.5 font-poppins font-semibold text-[15px] px-5 py-3 rounded-full bg-white/[0.08] border border-white/15 text-white transition-all duration-300 hover:bg-white hover:text-[#061952] hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-[#FFD25D]" />
              07 70 00 36 72
            </a>
            <a
              href="mailto:nicolas@ofpodium.fr"
              className="inline-flex items-center gap-2.5 font-poppins font-semibold text-[15px] px-5 py-3 rounded-full bg-white/[0.08] border border-white/15 text-white transition-all duration-300 hover:bg-white hover:text-[#061952] hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-[#57B3B7]" />
              nicolas@ofpodium.fr
            </a>
            <span className="inline-flex items-center gap-2.5 font-poppins font-medium text-[15px] px-5 py-3 rounded-full bg-white/[0.08] border border-white/15 text-white/80">
              <MapPin className="w-4 h-4 text-[#C9426B]" />
              Ambérieu-en-Bugey · Rhône-Alpes
            </span>
          </div>
        </div>
      </div>

      {/* Bande d'accent */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 flex h-1">
        <div className="w-[55%] bg-[#FFD25D]" />
        <div className="w-[25%] bg-[#57B3B7]" />
        <div className="flex-1 bg-[#C9426B]" />
      </div>
    </section>
  )
}
