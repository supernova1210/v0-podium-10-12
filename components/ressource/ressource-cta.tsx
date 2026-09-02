import Link from "next/link"
import { ArrowRight, CalendarDays, GraduationCap, Puzzle } from "lucide-react"
import Reveal from "@/components/reveal"

const CALENDLY = "https://calendly.com/nicolas-ofpodium/30min"

interface RessourceCtaProps {
  title: string
  text: string
  formation: { label: string; href: string }
  atelier?: { label: string; href: string }
}

export default function RessourceCta({ title, text, formation, atelier }: RessourceCtaProps) {
  return (
    <section id="former-mes-equipes" className="scroll-mt-24 py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="relative overflow-hidden bg-[#061952] rounded-[36px] px-7 md:px-14 py-12 md:py-14 max-w-6xl mx-auto">
            <div aria-hidden className="absolute -top-12 -right-12 w-52 h-52 rounded-[40px] border-2 border-[#FFD25D]/20" />
            <div aria-hidden className="absolute -bottom-14 -left-10 w-44 h-44 rounded-[36px] bg-[#57B3B7]/10" />

            <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
              <div>
                <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#FFD25D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
                  Passer à la pratique
                </span>
                <h2 className="font-poppins font-bold text-white tracking-tight text-3xl md:text-4xl mt-4 mb-4">
                  {title}
                </h2>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl mb-7">{text}</p>
                <a
                  href={CALENDLY}
                  className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.35)] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5"
                >
                  <CalendarDays className="w-5 h-5" />
                  Échanger sur votre besoin
                </a>
              </div>

              <div className="grid gap-4">
                <Link
                  href={formation.href}
                  className="group flex items-center gap-4 bg-white/[0.06] border border-white/10 rounded-[22px] px-6 py-5 transition-all duration-300 hover:bg-white/[0.12] hover:-translate-y-1"
                >
                  <span className="w-12 h-12 rounded-2xl bg-[#FFD25D] text-[#061952] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <GraduationCap className="w-6 h-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-white/60">La formation</span>
                    <span className="block font-poppins font-semibold text-[15px] text-white leading-snug">
                      {formation.label}
                    </span>
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#FFD25D] flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {atelier ? (
                  <Link
                    href={atelier.href}
                    className="group flex items-center gap-4 bg-white/[0.06] border border-white/10 rounded-[22px] px-6 py-5 transition-all duration-300 hover:bg-white/[0.12] hover:-translate-y-1"
                  >
                    <span className="w-12 h-12 rounded-2xl bg-[#57B3B7] text-white flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <Puzzle className="w-6 h-6" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-white/60">Le format court</span>
                      <span className="block font-poppins font-semibold text-[15px] text-white leading-snug">
                        {atelier.label}
                      </span>
                    </span>
                    <ArrowRight className="w-5 h-5 text-[#57B3B7] flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
