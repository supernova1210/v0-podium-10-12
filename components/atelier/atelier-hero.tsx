import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { ACCENTS, type AtelierAccent } from "./atelier-accents"

export interface AtelierHeroBadge {
  icon: string
  label: string
  value: string
}

interface AtelierHeroProps {
  accent: AtelierAccent
  eyebrow: string
  titlePrefix?: string
  titleHighlight: string
  titleSuffix?: string
  description: string
  badges: AtelierHeroBadge[]
  image: string
  imageAlt: string
}

const CALENDLY = "https://calendly.com/nicolas-ofpodium/30min"

export default function AtelierHero({
  accent,
  eyebrow,
  titlePrefix,
  titleHighlight,
  titleSuffix = "",
  description,
  badges,
  image,
  imageAlt,
}: AtelierHeroProps) {
  const a = ACCENTS[accent]
  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-10 lg:pt-7 lg:pb-14">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
              <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
              {eyebrow}
            </span>

            <h1 className="font-poppins font-extrabold text-[#061952] tracking-tight leading-[1.06] text-4xl md:text-6xl mt-4 mb-5">
              {titlePrefix ? `${titlePrefix} ` : ""}
              <span className="relative inline-block">
                <span className="relative z-10">{titleHighlight}</span>
                <span className={`absolute left-0 right-0 bottom-1.5 h-4 z-0 rounded-sm ${a.underline}`} />
              </span>
              {titleSuffix ? ` ${titleSuffix}` : ""}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mb-7">{description}</p>

            <div className="flex flex-wrap gap-3 mb-7">
              {badges.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 bg-white border border-gray-200 rounded-2xl px-5 py-3.5 shadow-[0_4px_18px_rgba(6,25,82,0.06)]"
                >
                  <span className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${a.badgeIcon}`}>
                    <Image src={b.icon} alt="" width={32} height={32} className="w-8 h-8 object-contain" />
                  </span>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">{b.label}</div>
                    <div className="font-poppins font-semibold text-base text-[#061952]">{b.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3.5">
              <a
                href={CALENDLY}
                className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.45)] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5"
              >
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center font-poppins font-semibold text-base px-8 py-4 rounded-full border-2 border-[#061952] text-[#061952] transition-all duration-300 hover:bg-[#061952] hover:text-white hover:-translate-y-0.5"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative max-w-sm mx-auto lg:max-w-[460px] lg:ml-auto w-full">
            <div className={`absolute -top-5 -right-4 w-36 h-36 rounded-3xl z-0 hidden sm:block ${a.decoHero}`} />
            <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-3xl bg-[#061952] z-0 hidden sm:block" />
            <div className="relative z-10 rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(6,25,82,0.16)] aspect-[4/3.9]">
              <Image src={image} alt={imageAlt} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
