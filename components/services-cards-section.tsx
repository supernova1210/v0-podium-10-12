import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Reveal from "@/components/reveal"

const services = [
  {
    id: "formation",
    title: "Formation",
    subline: "Parcours structurés, certifiants ou sur catalogue.",
    image: "/images/page-accueil-formation-podium.jpg",
    href: "/formations-qvct",
    chip: "bg-[#57B3B7]/90 text-white",
    sweep: "bg-[#57B3B7]/90",
    txt: "text-[#061952]",
    sub: "text-[#061952]/80",
    btn: "bg-[#061952] text-white",
  },
  {
    id: "atelier",
    title: "Atelier",
    subline: "Modules courts, participatifs et ludiques.",
    image: "/images/page-accueil-atelier-podium.jpg",
    href: "/nos-ateliers",
    chip: "bg-[#FFD25D]/95 text-[#061952]",
    sweep: "bg-[#FFD25D]/90",
    txt: "text-[#061952]",
    sub: "text-[#061952]/80",
    btn: "bg-[#061952] text-white",
  },
  {
    id: "evenement",
    title: "Événement",
    subline: "Journées composées de plusieurs ateliers.",
    image: "/images/page-accueil-evenement-podium.jpg",
    href: "/nos-evenements",
    chip: "bg-[#C9426B]/90 text-white",
    sweep: "bg-[#C9426B]/90",
    txt: "text-white",
    sub: "text-white/90",
    btn: "bg-white text-[#8f2b49]",
  },
]

export default function ServicesCardsSection() {
  return (
    <section id="nos-solutions" className="scroll-mt-32 py-16 md:py-24 bg-white relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-50px] top-32 hidden xl:block w-44 h-44 rounded-[36px] bg-[#FFD25D]/20" />
        <div className="absolute right-[-40px] bottom-40 hidden xl:block w-48 h-48 rounded-[38px] border-2 border-[#57B3B7]/30" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <Reveal className="text-center max-w-4xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
            Nos solutions
          </span>
          <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-5xl mt-4 mb-4">
            Des solutions QVCT et prévention adaptées à vos enjeux
          </h2>
          <p className="text-lg text-gray-600">
            PODIUM propose des formations, ateliers et événements dédiés à la qualité de vie et des conditions de
            travail, à la prévention des risques et au bien-être des salariés.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 110}>
              <Link
                href={s.href}
                className="group relative block h-[380px] md:h-[420px] rounded-[22px] overflow-hidden shadow-[0_4px_18px_rgba(6,25,82,0.10)] transition-all duration-300 hover:shadow-[0_18px_50px_rgba(6,25,82,0.20)] hover:-translate-y-1.5"
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute top-4 left-4 z-20 inline-flex items-center font-poppins font-semibold text-xs px-3 py-1.5 rounded-full backdrop-blur ${s.chip}`}
                >
                  {s.title}
                </span>

                {/* Titre état normal */}
                <div className="absolute inset-x-0 bottom-0 z-[5] p-6 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                  <h3 className="font-poppins font-bold text-3xl text-white leading-snug [text-shadow:0_2px_14px_rgba(6,25,82,0.95)]">
                    {s.title}
                  </h3>
                </div>

                {/* Voile coloré qui balaye */}
                <span
                  aria-hidden
                  className={`absolute inset-y-0 -left-[20%] w-[140%] z-10 pointer-events-none -skew-x-6 -translate-x-[120%] group-hover:translate-x-0 transition-transform duration-500 ease-out ${s.sweep}`}
                />

                {/* Contenu hover */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 opacity-0 translate-y-3 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0">
                  <h3 className={`font-poppins font-bold text-3xl leading-snug ${s.txt}`}>{s.title}</h3>
                  <p className={`text-[16px] leading-relaxed mt-2.5 ${s.sub}`}>{s.subline}</p>
                  <span
                    className={`mt-5 inline-flex items-center gap-2 self-start font-poppins font-semibold text-[15px] px-6 py-3 rounded-full ${s.btn}`}
                  >
                    Découvrir
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
