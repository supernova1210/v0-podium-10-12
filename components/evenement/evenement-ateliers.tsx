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
    sweep: "bg-[#57B3B7]/90",
    txt: "text-[#061952]",
    sub: "text-[#061952]/80",
    btn: "bg-[#061952] text-white",
  },
  securite: {
    chip: "bg-[#FFD25D]/95 text-[#061952]",
    label: "Atelier Sécurité",
    sweep: "bg-[#FFD25D]/90",
    txt: "text-[#061952]",
    sub: "text-[#061952]/80",
    btn: "bg-[#061952] text-white",
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
                  className="group relative block h-[360px] rounded-[22px] overflow-hidden shadow-[0_4px_18px_rgba(6,25,82,0.10)] transition-all duration-300 hover:shadow-[0_18px_50px_rgba(6,25,82,0.20)] hover:-translate-y-1.5"
                >
                  {/* Photo pleine carte */}
                  <Image
                    src={a.heroImage}
                    alt={a.cardTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Chips */}
                  <span
                    className={`absolute top-4 left-4 z-20 inline-flex items-center font-poppins font-semibold text-xs px-3 py-1.5 rounded-full backdrop-blur ${acc.chip}`}
                  >
                    {acc.label}
                  </span>
                  <span className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 font-poppins font-semibold text-xs px-3 py-1.5 rounded-full bg-white/90 text-[#061952]">
                    <Clock className="w-3.5 h-3.5" />
                    {a.duree}
                  </span>

                  {/* Titre état normal */}
                  <div className="absolute inset-x-0 bottom-0 z-[5] p-5 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                    <h3 className="font-poppins font-bold text-xl text-white leading-snug [text-shadow:0_2px_14px_rgba(6,25,82,0.95)]">
                      {a.cardTitle}
                    </h3>
                  </div>

                  {/* Voile coloré qui balaye la carte */}
                  <span
                    aria-hidden
                    className={`absolute inset-y-0 -left-[20%] w-[140%] z-10 pointer-events-none -skew-x-6 -translate-x-[120%] group-hover:translate-x-0 transition-transform duration-500 ease-out ${acc.sweep}`}
                  />

                  {/* Contenu révélé au survol */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 opacity-0 translate-y-3 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0">
                    <h3 className={`font-poppins font-bold text-xl leading-snug ${acc.txt}`}>{a.cardTitle}</h3>
                    <p className={`text-[15px] leading-relaxed mt-2 ${acc.sub}`}>{a.cardDescription}</p>
                    <span className={`inline-flex items-center gap-1.5 text-sm mt-2.5 ${acc.sub}`}>
                      <Users className="w-4 h-4" />
                      {a.participants}
                    </span>
                    <span
                      className={`mt-4 inline-flex items-center gap-2 self-start font-poppins font-semibold text-[15px] px-6 py-3 rounded-full ${acc.btn}`}
                    >
                      Découvrir
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
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
