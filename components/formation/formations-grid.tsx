import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import Reveal from "@/components/reveal"
import type { FormationData } from "@/lib/formations"

const ACCENTS = {
  teal: {
    chip: "bg-[#57B3B7]/90 text-white",
    deco1: "bg-[#57B3B7]/15",
    deco2: "border-[#C9426B]/30",
    sweep: "bg-[#57B3B7]/90",
    txt: "text-[#061952]",
    sub: "text-[#061952]/80",
    btn: "bg-[#061952] text-white",
  },
  coral: {
    chip: "bg-[#C9426B]/90 text-white",
    deco1: "bg-[#C9426B]/15",
    deco2: "border-[#57B3B7]/30",
    sweep: "bg-[#C9426B]/90",
    txt: "text-white",
    sub: "text-white/85",
    btn: "bg-white text-[#8f2b49]",
  },
  jaune: {
    chip: "bg-[#FFD25D]/95 text-[#061952]",
    deco1: "bg-[#FFD25D]/25",
    deco2: "border-[#F4B609]/40",
    sweep: "bg-[#FFD25D]/90",
    txt: "text-[#061952]",
    sub: "text-[#061952]/80",
    btn: "bg-[#061952] text-white",
  },
}

interface FormationsGridProps {
  formations: FormationData[]
  eyebrow: string
  title: string
  subtitle: string
  accent?: keyof typeof ACCENTS
  categoryLabel: string
}

export default function FormationsGrid({
  formations,
  eyebrow,
  title,
  subtitle,
  accent = "teal",
  categoryLabel,
}: FormationsGridProps) {
  const a = ACCENTS[accent]
  return (
    <section id="formations" className="scroll-mt-20 py-16 md:py-24 bg-white relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute left-[-50px] top-32 hidden xl:block w-44 h-44 rounded-[36px] ${a.deco1}`} />
        <div className={`absolute right-[-40px] bottom-40 hidden xl:block w-48 h-48 rounded-[38px] border-2 ${a.deco2}`} />
        <div className="absolute right-24 top-24 hidden xl:block w-24 h-24 rounded-[24px] bg-[#FFD25D]/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
            {eyebrow}
          </span>
          <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-5xl mt-4 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
          {formations.map((f, i) => (
            <Reveal key={f.slug} delay={(i % 3) * 100}>
              <a
                href={`/${f.slug}`}
                className="group relative block h-[400px] rounded-[22px] overflow-hidden shadow-[0_4px_18px_rgba(6,25,82,0.10)] transition-all duration-300 hover:shadow-[0_18px_50px_rgba(6,25,82,0.20)] hover:-translate-y-1.5"
              >
                {/* Photo pleine carte */}
                <Image
                  src={f.heroImage}
                  alt={f.cardTitle}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Chips */}
                <span
                  className={`absolute top-4 left-4 z-20 inline-flex items-center font-poppins font-semibold text-xs px-3 py-1.5 rounded-full backdrop-blur ${a.chip}`}
                >
                  {categoryLabel}
                </span>
                <span className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 font-poppins font-semibold text-xs px-3 py-1.5 rounded-full bg-white/90 text-[#061952]">
                  <Clock className="w-3.5 h-3.5" />
                  {f.duree}
                </span>

                {/* Titre état normal */}
                <div className="absolute inset-x-0 bottom-0 z-[5] p-6 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                  <h3 className="font-poppins font-bold text-2xl text-white leading-snug [text-shadow:0_2px_14px_rgba(6,25,82,0.95)]">
                    {f.cardTitle}
                  </h3>
                </div>

                {/* Voile coloré qui balaye la carte */}
                <span
                  aria-hidden
                  className={`absolute inset-y-0 -left-[20%] w-[140%] z-10 pointer-events-none -skew-x-6 -translate-x-[120%] group-hover:translate-x-0 transition-transform duration-500 ease-out ${a.sweep}`}
                />

                {/* Contenu révélé au survol */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 opacity-0 translate-y-3 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0">
                  <h3 className={`font-poppins font-bold text-2xl leading-snug ${a.txt}`}>{f.cardTitle}</h3>
                  <p className={`text-[15px] leading-relaxed mt-2.5 ${a.sub}`}>{f.cardDescription}</p>
                  <span
                    className={`mt-5 inline-flex items-center gap-2 self-start font-poppins font-semibold text-[15px] px-6 py-3 rounded-full ${a.btn}`}
                  >
                    Découvrir
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
