import Image from "next/image"
import Reveal from "@/components/reveal"

const types = [
  {
    icon: "/images/picto-de.png",
    title: "Jeu de plateau",
    alt: "Icône jeu de plateau",
    ring: "group-hover:ring-[#FFD25D]",
    text: "text-[#FFD25D]",
  },
  {
    icon: "/images/picto-mur-digital.png",
    title: "Mur digital",
    alt: "Icône mur digital",
    ring: "group-hover:ring-[#57B3B7]",
    text: "text-[#7ECDD1]",
  },
  {
    icon: "/images/pictogrammes-casque-pause.png",
    title: "Blind test",
    alt: "Icône blind test",
    ring: "group-hover:ring-[#C9426B]",
    text: "text-[#E88AA6]",
  },
  {
    icon: "/images/picto-jeux.png",
    title: "Jeu sur table",
    alt: "Icône jeu sur table",
    ring: "group-hover:ring-[#FFD25D]",
    text: "text-[#FFD25D]",
  },
  {
    icon: "/images/picto-bienetre-travail.png",
    title: "Pratique sportive",
    alt: "Icône pratique sportive",
    ring: "group-hover:ring-[#57B3B7]",
    text: "text-[#7ECDD1]",
  },
]

export default function AteliersJeuCoeur() {
  return (
    <section id="jeu-au-coeur" className="scroll-mt-20 py-16 md:py-24 bg-[#061952] relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -left-12 w-56 h-56 rounded-[44px] border-2 border-[#FFD25D]/20" />
        <div className="absolute -bottom-14 -right-10 w-44 h-44 rounded-[36px] bg-[#57B3B7]/10" />
        <div className="absolute top-24 right-20 w-20 h-20 rounded-[20px] bg-[#C9426B]/10 hidden md:block" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#FFD25D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
            Notre ADN
          </span>
          <h2 className="font-poppins font-bold text-white tracking-tight text-3xl md:text-5xl mt-4 mb-4">
            Le jeu au cœur de nos ateliers
          </h2>
          <p className="text-lg text-white/75 leading-relaxed">
            Chez Podium, le jeu n&apos;est pas un gadget : c&apos;est le moteur de l&apos;apprentissage. Nos ateliers
            QVCT et sécurité s&apos;appuient sur des formats interactifs (jeu de plateau, mur digital, blind test,
            pratique sportive...) pour ancrer durablement les messages de prévention. Quand on apprend en faisant, on
            retient vraiment.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {types.map((t, i) => (
            <Reveal key={t.title} delay={i * 110} y={44} scale={0.92} duration={700}>
              <div className="group h-full bg-white/[0.06] border border-white/10 rounded-[22px] px-5 py-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/[0.1] hover:-translate-y-2">
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mb-5 shadow-lg ring-4 ring-transparent transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 ${t.ring}`}
                >
                  <Image src={t.icon} alt={t.alt} width={56} height={56} className="w-12 h-12 md:w-14 md:h-14 object-contain" />
                </div>
                <p className="font-poppins font-semibold text-[11px] tracking-[0.14em] uppercase text-white/50 mb-1.5">
                  Atelier type
                </p>
                <p className={`font-poppins font-bold text-base leading-tight ${t.text}`}>{t.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
