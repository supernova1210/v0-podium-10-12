import Image from "next/image"
import Reveal from "@/components/reveal"

interface Atout {
  icon: string
  title: string
  alt: string
}

interface EvenementAtoutsProps {
  eyebrow?: string
  title: string
  description: string
  items: Atout[]
}

const ACCENTS = [
  { ring: "group-hover:ring-[#FFD25D]", text: "text-[#FFD25D]" },
  { ring: "group-hover:ring-[#57B3B7]", text: "text-[#7ECDD1]" },
  { ring: "group-hover:ring-[#C9426B]", text: "text-[#E88AA6]" },
  { ring: "group-hover:ring-[#F4B609]", text: "text-[#FFD25D]" },
]

export default function EvenementAtouts({
  eyebrow = "Notre approche",
  title,
  description,
  items,
}: EvenementAtoutsProps) {
  return (
    <section className="py-16 md:py-24 bg-[#061952] relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -left-12 w-56 h-56 rounded-[44px] border-2 border-[#FFD25D]/20" />
        <div className="absolute -bottom-14 -right-10 w-44 h-44 rounded-[36px] bg-[#57B3B7]/10" />
        <div className="absolute top-24 right-20 w-20 h-20 rounded-[20px] bg-[#C9426B]/10 hidden md:block" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#FFD25D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
            {eyebrow}
          </span>
          <h2 className="font-poppins font-bold text-white tracking-tight text-3xl md:text-5xl mt-4 mb-4">{title}</h2>
          <p className="text-lg text-white/75 leading-relaxed">{description}</p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {items.map((item, i) => {
            const a = ACCENTS[i % ACCENTS.length]
            return (
              <Reveal key={item.title} delay={i * 110} y={44} scale={0.92} duration={700}>
                <div className="group h-full bg-white/[0.06] border border-white/10 rounded-[22px] px-5 py-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/[0.1] hover:-translate-y-2">
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mb-5 shadow-lg ring-4 ring-transparent transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 ${a.ring}`}
                  >
                    <Image src={item.icon} alt={item.alt} width={56} height={56} className="w-12 h-12 md:w-14 md:h-14 object-contain" />
                  </div>
                  <p className="font-poppins font-semibold text-[11px] tracking-[0.14em] uppercase text-white/50 mb-1.5">
                    Notre approche
                  </p>
                  <p className={`font-poppins font-bold text-base leading-tight ${a.text}`}>{item.title}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
