import { Lightbulb, Target, Users, Headphones, CheckCircle, ArrowRight } from "lucide-react"
import Reveal from "@/components/reveal"

const steps = [
  {
    icon: Lightbulb,
    color: "#FFD25D",
    title: "Analyse des besoins",
    description: "Une évaluation personnalisée de votre contexte et de vos risques.",
  },
  {
    icon: Target,
    color: "#F4B609",
    title: "Conception sur-mesure",
    description: "Un programme construit autour de vos objectifs et de vos équipes.",
  },
  {
    icon: Users,
    color: "#FFD25D",
    title: "Formation interactive",
    description: "Des sessions ludiques et participatives, on s'entraîne en bougeant.",
  },
  {
    icon: Headphones,
    color: "#F4B609",
    title: "Accompagnement",
    description: "Un suivi post-formation pour ancrer durablement les bons réflexes.",
  },
  {
    icon: CheckCircle,
    color: "#C9426B",
    title: "Évaluation",
    description: "La mesure de l'impact et la délivrance des attestations.",
  },
]

const pillars = [
  {
    title: "Une pédagogie novatrice",
    description:
      "Ludique et active : placer les apprenants en situation augmente les interactions et l'ancrage des bons réflexes.",
    cta: "Notre pédagogie",
    href: "/about#pedagogie",
  },
  {
    title: "Des formateurs passionnés",
    description:
      "Des experts de la prévention et du secourisme, réunis par la culture du sport, du jeu et de l'engagement collectif.",
    cta: "Nos coéquipiers",
    href: "/about#coequipiers",
  },
  {
    title: "Un accompagnement durable",
    description:
      "Une proximité renforcée et des outils novateurs pour accompagner chaque salarié bien après la formation.",
    cta: "Demander un devis",
    href: "/contact",
  },
]

export default function SecuriteProcess() {
  return (
    <section id="deroulement" className="scroll-mt-20 py-16 md:py-24 bg-[#061952] relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -right-12 w-56 h-56 rounded-[44px] border-2 border-[#FFD25D]/25" />
        <div className="absolute -bottom-14 -left-10 w-44 h-44 rounded-[36px] bg-[#F4B609]/10" />
        <div className="absolute top-24 left-16 w-20 h-20 rounded-[20px] bg-[#C9426B]/15 hidden md:block" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#FFD25D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
            Notre méthode
          </span>
          <h2 className="font-poppins font-bold text-white tracking-tight text-3xl md:text-5xl mt-4 mb-4">
            Comment se passent nos formations ?
          </h2>
          <p className="text-lg text-white/75">
            Un accompagnement de bout en bout, pensé pour vos équipes et vos objectifs.
          </p>
        </Reveal>

        {/* Timeline animée */}
        <div className="relative max-w-2xl mx-auto mb-20">
          <div aria-hidden className="absolute left-7 top-2 bottom-2 w-0.5 bg-white/15" />
          <div className="space-y-7">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 150} x={-64} y={8} scale={0.9} duration={750}>
                <div className="relative flex items-start gap-6">
                  <span
                    className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="w-7 h-7 text-[#061952]" />
                  </span>
                  <div className="flex-1 pt-1.5">
                    <div className="flex items-center gap-3">
                      <span className="font-poppins font-bold text-sm text-white/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-poppins font-semibold text-xl text-white">{step.title}</h3>
                    </div>
                    <p className="text-white/70 leading-relaxed mt-1.5">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Piliers pédagogie */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((p, i) => (
            <Reveal key={i} delay={i * 130} y={48} scale={0.96} duration={750}>
              <div className="group h-full bg-white/[0.06] border border-white/10 rounded-[22px] p-7 flex flex-col transition-all duration-300 hover:bg-white/[0.1] hover:-translate-y-1.5">
                <h3 className="font-poppins font-semibold text-xl text-white mb-3">{p.title}</h3>
                <p className="text-[15px] text-white/70 leading-relaxed flex-1">{p.description}</p>
                <a
                  href={p.href}
                  className="mt-5 inline-flex items-center gap-2 font-poppins font-semibold text-[15px] text-[#FFD25D] hover:gap-3 transition-all"
                >
                  {p.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
