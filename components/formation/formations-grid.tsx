import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import Reveal from "@/components/reveal"
import type { FormationData } from "@/lib/formations"

const ACCENTS = {
  teal: {
    chip: "bg-[#57B3B7]/15 text-[#2c6e72]",
    hover: "group-hover:text-[#57B3B7]",
    arrow: "group-hover:bg-[#57B3B7] group-hover:text-white group-hover:border-[#57B3B7]",
    deco1: "bg-[#57B3B7]/15",
    deco2: "border-[#C9426B]/30",
  },
  coral: {
    chip: "bg-[#C9426B]/15 text-[#8f2b49]",
    hover: "group-hover:text-[#C9426B]",
    arrow: "group-hover:bg-[#C9426B] group-hover:text-white group-hover:border-[#C9426B]",
    deco1: "bg-[#C9426B]/15",
    deco2: "border-[#57B3B7]/30",
  },
  jaune: {
    chip: "bg-[#FFD25D]/30 text-[#061952]",
    hover: "group-hover:text-[#B8860B]",
    arrow: "group-hover:bg-[#FFD25D] group-hover:text-[#061952] group-hover:border-[#FFD25D]",
    deco1: "bg-[#FFD25D]/25",
    deco2: "border-[#F4B609]/40",
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
                className="group flex flex-col h-full bg-white rounded-[22px] border border-gray-200 overflow-hidden shadow-[0_4px_18px_rgba(6,25,82,0.06)] transition-all duration-300 hover:shadow-[0_18px_50px_rgba(6,25,82,0.14)] hover:-translate-y-1.5"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={f.heroImage}
                    alt={f.cardTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute top-4 left-4 inline-flex items-center font-poppins font-semibold text-xs px-3 py-1.5 rounded-full backdrop-blur ${a.chip}`}
                  >
                    {categoryLabel}
                  </span>
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 font-poppins font-semibold text-xs px-3 py-1.5 rounded-full bg-white/90 text-[#061952]">
                    <Clock className="w-3.5 h-3.5" />
                    {f.duree}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h3
                    className={`font-poppins font-semibold text-xl text-[#061952] leading-snug transition-colors duration-300 ${a.hover}`}
                  >
                    {f.cardTitle}
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed mt-2.5 flex-1">{f.cardDescription}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-poppins font-semibold text-[15px] text-[#061952]">
                    Découvrir la formation
                    <span
                      className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 ${a.arrow}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </span>
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
