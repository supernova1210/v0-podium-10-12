import { Gamepad2, HeartHandshake, PackageCheck, ArrowRight } from "lucide-react"
import Reveal from "@/components/reveal"

const features = [
  {
    icon: Gamepad2,
    chip: "bg-[#FFD25D] text-[#061952]",
    bar: "bg-[#FFD25D]",
    title: "Sensibiliser par le jeu",
    description:
      "Lunettes de simulation, buzzers, défis chronométrés, jeux de rôle : les messages de prévention passent d'autant mieux qu'ils sont vécus plutôt que subis.",
  },
  {
    icon: HeartHandshake,
    chip: "bg-[#57B3B7] text-white",
    bar: "bg-[#57B3B7]",
    title: "Fédérer vos équipes",
    description:
      "Chaque atelier est un moment collectif : on rit, on coopère, on se découvre autrement. La cohésion se construit pendant que les bonnes pratiques s'ancrent.",
  },
  {
    icon: PackageCheck,
    chip: "bg-[#C9426B] text-white",
    bar: "bg-[#C9426B]",
    title: "Clé en main dans vos locaux",
    description:
      "Salle de réunion, réfectoire, entrepôt ou extérieur : nos animateurs arrivent avec tout le matériel et s'adaptent à vos espaces comme à vos horaires.",
  },
]

export default function AteliersAtouts() {
  return (
    <section id="pourquoi-ateliers" className="scroll-mt-20 py-16 md:py-24 bg-[#FFF7EE] relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-50px] top-20 hidden xl:block w-44 h-44 rounded-[36px] border-2 border-[#57B3B7]/30" />
        <div className="absolute left-[-40px] bottom-24 hidden xl:block w-40 h-40 rounded-[34px] bg-[#C9426B]/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9426B]" />
            Pourquoi un atelier Podium
          </span>
          <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-5xl mt-4 mb-4">
            Une expérience courte, un impact qui dure
          </h2>
          <p className="text-lg text-gray-600">
            En 15 à 45 minutes, vos équipes vivent une expérience marquante qui transforme les messages de prévention
            en réflexes durables.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 120} y={44} scale={0.95} duration={700}>
              <div className="group relative h-full bg-white rounded-[22px] border border-gray-100 p-8 shadow-[0_4px_18px_rgba(6,25,82,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(6,25,82,0.14)]">
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${f.bar} transition-all duration-300 group-hover:h-2.5`} />
                <span
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${f.chip}`}
                >
                  <f.icon className="w-7 h-7" />
                </span>
                <h3 className="font-poppins font-semibold text-xl text-[#061952] mb-3">{f.title}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#061952] text-white transition-all duration-300 hover:bg-[#0a2068] hover:-translate-y-0.5"
          >
            Vous souhaitez en savoir plus ?
            <ArrowRight className="w-5 h-5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
