import { ArrowRight } from "lucide-react"
import Reveal from "@/components/reveal"
import AteliersStackingSteps from "./ateliers-stacking-steps"

const pillars = [
  {
    title: "Une pédagogie novatrice",
    description:
      "Ludique et active : placer les participants en situation augmente les interactions et l'ancrage des bonnes pratiques.",
    cta: "Notre pédagogie",
    href: "/about#pedagogie",
  },
  {
    title: "Des animateurs passionnés",
    description:
      "Des experts du bien-être et du sport, réunis par la culture du jeu, de l'engagement collectif et l'envie de transmettre.",
    cta: "Nos coéquipiers",
    href: "/about#coequipiers",
  },
  {
    title: "Des formats qui s'emboîtent",
    description:
      "Un atelier peut vivre seul, rythmer une journée sécurité ou un séminaire, ou se prolonger en formation certifiante.",
    cta: "Demander un devis",
    href: "/contact",
  },
]

export default function AteliersProcess() {
  return (
    <section id="deroulement" className="scroll-mt-20 py-16 md:py-24 bg-[#fafbfe] relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-45px] top-28 hidden xl:block w-48 h-48 rounded-[38px] border-2 border-[#57B3B7]/25" />
        <div className="absolute left-[-50px] bottom-32 hidden xl:block w-44 h-44 rounded-[36px] bg-[#FFD25D]/15" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9426B]" />
            Notre méthode
          </span>
          <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-5xl mt-4 mb-4">
            Comment se passe un atelier ?
          </h2>
          <p className="text-lg text-gray-600">
            Un format court, préparé avec soin, qui s&apos;intègre dans votre journée sans la désorganiser.
          </p>
        </Reveal>

        {/* Timeline en stacking scroll-driven */}
        <div className="mb-20">
          <AteliersStackingSteps />
        </div>

        {/* Piliers */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((p, i) => (
            <Reveal key={i} delay={i * 130} y={48} scale={0.96} duration={750}>
              <div className="group h-full bg-white border border-gray-200 rounded-[22px] p-7 flex flex-col shadow-[0_4px_18px_rgba(6,25,82,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(6,25,82,0.13)]">
                <h3 className="font-poppins font-semibold text-xl text-[#061952] mb-3">{p.title}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed flex-1">{p.description}</p>
                <a
                  href={p.href}
                  className="mt-5 inline-flex items-center gap-2 font-poppins font-semibold text-[15px] text-[#061952] hover:gap-3 transition-all"
                >
                  {p.cta}
                  <ArrowRight className="w-4 h-4 text-[#C9426B]" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
