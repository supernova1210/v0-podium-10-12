import { Phone, Mail, ArrowRight, CalendarDays } from "lucide-react"
import Reveal from "@/components/reveal"

const CALENDLY = "https://calendly.com/nicolas-ofpodium/30min"

export function ContactezNousSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="relative overflow-hidden bg-[#061952] rounded-[36px] px-7 md:px-16 py-14 md:py-16 max-w-7xl mx-auto">
            {/* habillage : grands carrés arrondis */}
            <div aria-hidden className="absolute -top-12 -right-12 w-52 h-52 rounded-[40px] border-2 border-[#FFD25D]/20" />
            <div aria-hidden className="absolute top-12 right-24 w-24 h-24 rounded-[26px] bg-[#57B3B7]/10 hidden md:block" />
            <div aria-hidden className="absolute -bottom-14 -left-10 w-44 h-44 rounded-[36px] bg-white/[0.04]" />

            <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
              {/* Texte */}
              <div>
                <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#FFD25D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
                  Parlons de votre projet
                </span>

                <h2 className="font-poppins font-bold text-white tracking-tight text-3xl md:text-5xl mt-4 mb-5">
                  Contactez-
                  <span className="relative inline-block">
                    <span className="relative z-10">nous</span>
                    <span className="absolute left-0 right-0 bottom-1 h-3.5 bg-[#FFD25D]/40 z-0 rounded-sm" />
                  </span>
                </h2>

                <p className="text-lg text-white/80 leading-relaxed max-w-xl mb-3">
                  Vous souhaitez obtenir un devis, des informations sur nos formations QVCT, nos ateliers prévention ou
                  organiser une journée sécurité en entreprise ? Contactez-nous par mail ou formulaire en ligne :
                  <strong className="text-white"> nous vous rappelons dans les 12h.</strong>
                </p>
                <p className="text-[15px] text-white/60 leading-relaxed max-w-xl mb-8">
                  Basé à Ambérieu-en-Bugey, Podium accompagne les entreprises de l&apos;Ain, de Bourg-en-Bresse, de Lyon
                  et de toute la région Rhône-Alpes dans leurs projets de formation, de prévention et de bien-être au
                  travail.
                </p>

                <div className="flex flex-wrap gap-3.5">
                  <a
                    href={CALENDLY}
                    className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.35)] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5"
                  >
                    <CalendarDays className="w-5 h-5" />
                    Prendre rendez-vous
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full border-2 border-white/40 text-white transition-all duration-300 hover:bg-white hover:text-[#061952] hover:-translate-y-0.5"
                  >
                    Formulaire de contact
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Coordonnées */}
              <div className="grid gap-4">
                <a
                  href="tel:0770003672"
                  className="group flex items-center gap-4 bg-white/[0.06] border border-white/10 rounded-[22px] px-6 py-5 transition-all duration-300 hover:bg-white/[0.12] hover:-translate-y-1"
                >
                  <span className="w-12 h-12 rounded-2xl bg-[#FFD25D] text-[#061952] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Phone className="w-6 h-6" />
                  </span>
                  <span>
                    <span className="block text-sm text-white/60">Téléphone · réponse sous 12h</span>
                    <span className="block font-poppins font-semibold text-lg text-white">07 70 00 36 72</span>
                  </span>
                </a>
                <a
                  href="mailto:nicolas@ofpodium.fr"
                  className="group flex items-center gap-4 bg-white/[0.06] border border-white/10 rounded-[22px] px-6 py-5 transition-all duration-300 hover:bg-white/[0.12] hover:-translate-y-1"
                >
                  <span className="w-12 h-12 rounded-2xl bg-[#57B3B7] text-white flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Mail className="w-6 h-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-white/60">Email</span>
                    <span className="block font-poppins font-semibold text-lg text-white truncate">
                      nicolas@ofpodium.fr
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default ContactezNousSection
