import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import Reveal from "@/components/reveal"
import { relatedOffers } from "@/lib/related"

const ACCENTS = {
  qvct: { chip: "bg-[#57B3B7]/90 text-white", sweep: "bg-[#57B3B7]/90" },
  securite: { chip: "bg-[#FFD25D]/95 text-[#061952]", sweep: "bg-[#FFD25D]/90" },
} as const

/** Bloc « À découvrir aussi » : 3 cartes liées (même thème d'abord), au style des grilles du site. */
export default function RelatedOffers({ href }: { href: string }) {
  const items = relatedOffers(href)
  if (items.length === 0) return null

  return (
    <section className="py-16 md:py-20 bg-[#fafbfe] relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-45px] top-16 hidden xl:block w-40 h-40 rounded-[34px] border-2 border-[#FFD25D]/40" />
        <div className="absolute left-[-40px] bottom-12 hidden xl:block w-32 h-32 rounded-[28px] bg-[#57B3B7]/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9426B]" />
            À découvrir aussi
          </span>
          <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-4xl mt-4">
            Ces formats vont bien ensemble
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((o, i) => {
            const acc = ACCENTS[o.category]
            const label = `${o.kind === "formation" ? "Formation" : "Atelier"} ${o.category === "qvct" ? "QVCT" : "Sécurité"}`
            return (
              <Reveal key={o.href} delay={i * 90}>
                <Link
                  href={o.href}
                  className="group relative block h-[340px] rounded-[22px] overflow-hidden shadow-[0_4px_18px_rgba(6,25,82,0.10)] transition-all duration-300 hover:shadow-[0_18px_50px_rgba(6,25,82,0.20)] hover:-translate-y-1.5"
                >
                  <Image
                    src={o.image}
                    alt={o.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span
                    className={`absolute top-4 left-4 z-20 inline-flex items-center font-poppins font-semibold text-xs px-3 py-1.5 rounded-full backdrop-blur ${acc.chip}`}
                  >
                    {label}
                  </span>
                  <span className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 font-poppins font-semibold text-xs px-3 py-1.5 rounded-full bg-white/90 text-[#061952]">
                    <Clock className="w-3.5 h-3.5" />
                    {o.duree}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 z-[5] p-5 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                    <h3 className="font-poppins font-bold text-xl text-white leading-snug [text-shadow:0_2px_14px_rgba(6,25,82,0.95)]">
                      {o.title}
                    </h3>
                  </div>

                  <span
                    aria-hidden
                    className={`absolute inset-y-0 -left-[20%] w-[140%] z-10 pointer-events-none -skew-x-6 -translate-x-[120%] group-hover:translate-x-0 transition-transform duration-500 ease-out ${acc.sweep}`}
                  />

                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 opacity-0 translate-y-3 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0">
                    <h3 className="font-poppins font-bold text-xl leading-snug text-[#061952]">{o.title}</h3>
                    <p className="text-[15px] leading-relaxed mt-2 text-[#061952]/80 line-clamp-3">{o.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 self-start font-poppins font-semibold text-[15px] px-6 py-3 rounded-full bg-[#061952] text-white">
                      Découvrir
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
