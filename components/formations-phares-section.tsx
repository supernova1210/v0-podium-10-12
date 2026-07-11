import Link from "next/link"
import { GraduationCap, Settings, Calendar, ArrowRight } from "lucide-react"
import Reveal from "@/components/reveal"

const formations = [
  {
    id: 1,
    title: "Gestes et postures",
    subtitle: "Formation en présentiel – 1 jour (7h)",
    icon: GraduationCap,
    href: "/formation-securite-geste-et-posture",
    iconBox: "bg-[#FFD25D] text-[#061952]",
  },
  {
    id: 2,
    title: "Ambassadeur réveil musculaire",
    subtitle: "Formation en présentiel – 3h30 ou 7h00",
    icon: Settings,
    href: "/formation-securite-reveil-musculaire",
    iconBox: "bg-[#57B3B7] text-white",
  },
  {
    id: 3,
    title: "Valoriser sa posture professionnelle",
    subtitle: "Événement sur site – 3h30 ou 7h00",
    icon: Calendar,
    href: "/formation-qvct-valoriser-posture-professionnelle",
    iconBox: "bg-[#C9426B] text-white",
  },
  {
    id: 4,
    title: "Lancer et dynamiser une réunion",
    subtitle: "Formation en présentiel – 1 jour (7h)",
    icon: GraduationCap,
    href: "/formation-qvct-lancer-dynamiser-reunion",
    iconBox: "bg-[#061952] text-[#FFD25D]",
  },
  {
    id: 5,
    title: "S’affirmer avec confiance – CNV",
    subtitle: "Formation en présentiel – 1 jour (7h)",
    icon: Settings,
    href: "/formation-qvct-communication-non-violente",
    iconBox: "bg-[#F4B609] text-[#061952]",
  },
]

export default function FormationsPharesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fafbfe] relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-55px] top-24 hidden xl:block w-44 h-44 rounded-[36px] bg-[#FFD25D]/20" />
        <div className="absolute right-[-45px] bottom-28 hidden xl:block w-48 h-48 rounded-[38px] border-2 border-[#57B3B7]/25" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <Reveal className="text-center mb-12">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
            Nos formations phares
          </span>
          <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-5xl mt-4">
            Nos formations QVCT, prévention et sécurité
          </h2>
        </Reveal>

        <div className="space-y-4">
          {formations.map((f, i) => (
            <Reveal key={f.id} delay={i * 80} y={32}>
              <Link
                href={f.href}
                className="group flex items-center gap-5 bg-white border border-gray-200 rounded-[22px] px-6 py-5 shadow-[0_4px_18px_rgba(6,25,82,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(6,25,82,0.13)]"
              >
                <span
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${f.iconBox}`}
                >
                  <f.icon className="w-7 h-7" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-poppins font-semibold text-lg text-[#061952] leading-tight">
                    {f.title}
                  </span>
                  <span className="block text-sm text-gray-500 mt-0.5">{f.subtitle}</span>
                </span>
                <span className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#061952] transition-all duration-300 group-hover:bg-[#FFD25D] group-hover:border-[#FFD25D]">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#061952] text-white transition-all duration-300 hover:bg-[#0a2068] hover:-translate-y-0.5"
          >
            Démarrer sa formation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
