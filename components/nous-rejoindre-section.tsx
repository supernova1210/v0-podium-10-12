import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Reveal from "@/components/reveal"

export default function NousRejoindreSection() {
  return (
    <section className="relative bg-[#061952] py-16 md:py-24 overflow-hidden">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -right-12 w-56 h-56 rounded-[44px] border-2 border-[#FFD25D]/20" />
        <div className="absolute -bottom-14 -left-10 w-44 h-44 rounded-[36px] bg-[#57B3B7]/10" />
        <div className="absolute top-24 left-20 w-20 h-20 rounded-[20px] bg-[#C9426B]/10 hidden md:block" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Image */}
          <Reveal x={-40} className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto w-full">
              <div className="absolute -top-5 -left-4 w-32 h-32 rounded-3xl bg-[#FFD25D] z-0 hidden sm:block" />
              <div className="absolute -bottom-6 -right-5 w-24 h-24 rounded-3xl bg-[#57B3B7] z-0 hidden sm:block" />
              <div className="relative z-10 rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)] aspect-square">
                <Image
                  src="/team-of-professionals-collaborating-at-a-modern-of.png"
                  alt="Équipe PODIUM travaillant ensemble"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Contenu */}
          <Reveal x={40} delay={120} className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#FFD25D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
              Un collectif engagé pour la santé au travail
            </span>

            <h2 className="font-poppins font-bold text-white tracking-tight text-3xl md:text-5xl mt-4 mb-6">
              Nous{" "}
              <span className="relative inline-block">
                <span className="relative z-10">rejoindre</span>
                <span className="absolute left-0 right-0 bottom-1 h-3.5 bg-[#FFD25D]/40 z-0 rounded-sm" />
              </span>
            </h2>

            <p className="text-lg text-white/80 leading-relaxed mb-5 max-w-2xl">
              PODIUM, c&apos;est avant tout un collectif d&apos;experts partageant une vision commune de la formation :
              humaine, participative et orientée prévention. Implanté à Ambérieu-en-Bugey, au cœur du département de
              l&apos;Ain, PODIUM intervient auprès des entreprises locales et régionales pour les accompagner sur les
              enjeux de qualité de vie au travail, de prévention et de santé des collaborateurs.
            </p>

            <p className="font-poppins font-semibold text-lg text-white mb-8 max-w-2xl">
              Si tu veux rejoindre l&apos;aventure, laisse-nous tes coordonnées, on te recontacte rapidement !
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.35)] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5"
            >
              Devenir formateur
              <ArrowRight className="w-5 h-5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
