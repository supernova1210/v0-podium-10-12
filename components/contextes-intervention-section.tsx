import Link from "next/link"
import { ArrowRight, ShieldCheck, Sparkles, Users, CalendarCheck } from "lucide-react"
import Reveal from "@/components/reveal"

const contextes = [
  {
    id: "journee-securite",
    number: "01",
    title: "Journée sécurité",
    description:
      "Animations, ateliers et sensibilisation pour vos collaborateurs lors de votre journée sécurité annuelle.",
    button: "Organiser une journée sécurité",
    href: "/nos-evenements/journee-securite",
    accent: "#FFD25D",
    accentText: "text-[#FFD25D]",
    icon: ShieldCheck,
    iconHover: "group-hover:bg-[#FFD25D] group-hover:text-[#061952]",
  },
  {
    id: "semaine-qvct",
    number: "02",
    title: "Semaine QVCT",
    description:
      "Un programme complet et clé en main pour animer votre semaine de la qualité de vie et des conditions de travail.",
    button: "Organiser une semaine QVCT",
    href: "/nos-evenements/semaine-qvct",
    accent: "#57B3B7",
    accentText: "text-[#7ECDD1]",
    icon: Sparkles,
    iconHover: "group-hover:bg-[#57B3B7] group-hover:text-white",
  },
  {
    id: "seminaire",
    number: "03",
    title: "Séminaire d'entreprise",
    description:
      "Des ateliers sur-mesure pour dynamiser vos temps forts et créer des moments de cohésion mémorables.",
    button: "Enrichir votre séminaire",
    href: "/nos-evenements/journee-seminaire",
    accent: "#C9426B",
    accentText: "text-[#E88AA6]",
    icon: Users,
    iconHover: "group-hover:bg-[#C9426B] group-hover:text-white",
  },
  {
    id: "plan-prevention",
    number: "04",
    title: "Plan de prévention annuel",
    description:
      "Un accompagnement sur-mesure tout au long de l'année pour structurer votre démarche de prévention.",
    button: "Construire votre plan personnalisé",
    href: "/contact",
    accent: "#F4B609",
    accentText: "text-[#FFD25D]",
    icon: CalendarCheck,
    iconHover: "group-hover:bg-[#F4B609] group-hover:text-[#061952]",
  },
]

export default function ContextesInterventionSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fafbfe] relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-45px] top-24 hidden xl:block w-48 h-48 rounded-[38px] bg-[#FFD25D]/15" />
        <div className="absolute left-[-50px] bottom-28 hidden xl:block w-44 h-44 rounded-[36px] border-2 border-[#57B3B7]/25" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9426B]" />
            Vos contextes
          </span>
          <h2 className="font-poppins font-bold tracking-tight text-3xl md:text-5xl text-[#061952] mt-4 mb-4 text-balance">
            Vous organisez une action de prévention ?
          </h2>
          <p className="text-lg text-gray-600">Nous adaptons nos formats à votre contexte et à vos objectifs.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {contextes.map((ctx, index) => (
            <Reveal key={ctx.id} delay={(index % 4) * 100} y={44} scale={0.96}>
              <Link
                href={ctx.href}
                className="group relative flex flex-col h-full bg-[#061952] rounded-[22px] overflow-hidden p-7 transition-all duration-300 hover:-translate-y-2 shadow-[0_14px_40px_rgba(6,25,82,0.2)] hover:shadow-[0_24px_60px_rgba(6,25,82,0.3)]"
              >
                {/* Barre d'accent */}
                <span
                  aria-hidden
                  className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2.5"
                  style={{ backgroundColor: ctx.accent }}
                />
                {/* Déco */}
                <span
                  aria-hidden
                  className="absolute -bottom-10 -right-10 w-28 h-28 rounded-[26px] border-2 opacity-20 transition-transform duration-500 group-hover:scale-110"
                  style={{ borderColor: ctx.accent }}
                />
                {/* Numéro en filigrane */}
                <span
                  aria-hidden
                  className="absolute top-3 right-5 font-poppins font-extrabold text-5xl opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                  style={{ color: ctx.accent }}
                >
                  {ctx.number}
                </span>

                <span
                  className={`relative w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 ${ctx.iconHover}`}
                >
                  <ctx.icon className="w-7 h-7" />
                </span>

                <h3 className="relative font-poppins font-semibold text-xl md:text-2xl text-white mb-3 leading-tight">
                  {ctx.title}
                </h3>
                <p className="relative text-[15px] text-white/65 leading-relaxed mb-6 flex-1 transition-colors duration-300 group-hover:text-white/85">
                  {ctx.description}
                </p>

                <span className={`relative inline-flex items-center gap-2 font-poppins font-semibold text-[15px] ${ctx.accentText}`}>
                  {ctx.button}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.45)] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5"
          >
            Nous contacter
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
