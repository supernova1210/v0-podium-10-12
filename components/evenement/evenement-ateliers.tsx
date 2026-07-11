import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users } from "lucide-react"
import Reveal from "@/components/reveal"
import { allAteliers } from "@/lib/ateliers"

interface EvenementAteliersProps {
  eyebrow?: string
  title: string
  subtitle: string
  slugs: string[]
}

const ACCENTS = {
  qvct: {
    chip: "bg-[#57B3B7]/90 text-white",
    label: "Atelier QVCT",
    hover: "group-hover:text-[#2c6e72]",
    arrow: "group-hover:bg-[#57B3B7] group-hover:text-white group-hover:border-[#57B3B7]",
    sweep: "bg-[#57B3B7]/25",
  },
  securite: {
    chip: "bg-[#FFD25D]/95 text-[#061952]",
    label: "Atelier Sécurité",
    hover: "group-hover:text-[#B8860B]",
    arrow: "group-hover:bg-[#FFD25D] group-hover:text-[#061952] group-hover:border-[#FFD25D]",
    sweep: "bg-[#FFD25D]/35",
  },
} as const

export default function EvenementAteliers({
  eyebrow = "Nos ateliers",
  title,
  subtitle,
  slugs,
}: EvenementAteliersProps) {
  const selection = slugs
    .map((s) => allAteliers.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-50px] top-32 hidden xl:block w-44 h-44 rounded-[36px] bg-[#FFD25D]/20" />
        <div className="absolute right-[-40px] bottom-40 hidden xl:block w-48 h-48 rounded-[38px] border-2 border-[#57B3B7]/30" />
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {selection.map((a, i) => {
            const acc = ACCENTS[a.category]
            return (
              <Reveal key={a.slug} delay={(i % 4) * 90}>
                <Link
                  href={`/atelier/${a.slug}`}
                  className="group relative flex flex-col h-full bg-white rounded-[22px] border border-gray-200 overflow-hidden shadow-[0_4px_18px_rgba(6,25,82,0.06)] transition-all duration-300 hover:shadow-[0_18px_50px_rgba(6,25,82,0.14)] hover:-translate-y-1.5"
                >
                  {/* Filtre coloré qui balaye la carte au survol */}
                  <span
                    aria-hidden
                    className={`absolute inset-0 z-10 pointer-events-none -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out ${acc.sweep}`}
                  />
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={a.heroImage}
                      alt={a.cardTitle}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className={`absolute top-4 left-4 inline-flex items-center font-poppins font-semibold text-xs px-3 py-1.5 rounded-full backdrop-blur ${acc.chip}`}
                    >
                      {acc.label}
                    </span>
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 font-poppins font-semibold text-xs px-3 py-1.5 rounded-full bg-white/90 text-[#061952]">
                      <Clock className="w-3.5 h-3.5" />
                      {a.duree}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <h3
                      className={`font-poppins font-semibold text-lg text-[#061952] leading-snug transition-colors duration-300 ${acc.hover}`}
                    >
                      {a.cardTitle}
                    </h3>
                    <p className="text-[15px] text-gray-600 leading-relaxed mt-2.5 flex-1">{a.cardDescription}</p>
                    <div className="flex items-center justify-between mt-5">
                      <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        {a.participants}
                      </span>
                      <span className="inline-flex items-center gap-2 font-poppins font-semibold text-[15px] text-[#061952]">
                        Découvrir
                        <span
                          className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 ${acc.arrow}`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="text-center mt-14">
          <Link
            href="/nos-ateliers"
            className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.45)] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5"
          >
            Découvrir tous nos ateliers
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
