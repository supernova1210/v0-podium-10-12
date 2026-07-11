import Image from "next/image"
import { ArrowRight, Download, Sparkles } from "lucide-react"

interface EvenementHeroProps {
  eyebrow: string
  titlePre: string
  titleHighlight: string
  titleSuffix?: string
  lead: string
  description: string
  regionLine: string
  pdfHref?: string
  stats: { n: string; l: string; color?: string }[]
  images: { src: string; alt: string }[]
  floatTitle?: string
  floatSubtitle?: string
}

const CALENDLY = "https://calendly.com/nicolas-ofpodium/30min"
const STAT_COLORS = ["text-[#061952]", "text-[#57B3B7]", "text-[#C9426B]"]

export default function EvenementHero({
  eyebrow,
  titlePre,
  titleHighlight,
  titleSuffix = "",
  lead,
  description,
  regionLine,
  pdfHref,
  stats,
  images,
  floatTitle,
  floatSubtitle,
}: EvenementHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-14 lg:pt-10 lg:pb-20">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-16 top-24 hidden lg:block w-52 h-52 rounded-[44px] bg-[#FFD25D]/15" />
        <div className="absolute left-10 bottom-10 hidden lg:block w-20 h-20 rounded-[20px] border-2 border-[#C9426B]/25" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
              {eyebrow}
            </span>

            <h1 className="font-poppins font-extrabold text-[#061952] tracking-tight leading-[1.05] text-4xl md:text-6xl mt-4 mb-5">
              {titlePre}{" "}
              <span className="relative inline-block">
                <span className="relative z-10">{titleHighlight}</span>
                <span className="absolute left-0 right-0 bottom-1.5 h-4 bg-[#FFD25D] z-0 rounded-sm" />
              </span>
              {titleSuffix ? ` ${titleSuffix}` : ""}
            </h1>

            <p className="font-poppins font-semibold text-lg md:text-xl text-[#061952] leading-snug max-w-xl mb-4">
              {lead}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-3">{description}</p>
            <p className="text-[15px] text-gray-500 leading-relaxed max-w-lg mb-8">{regionLine}</p>

            <div className="flex flex-wrap gap-3.5 mb-8">
              <a
                href={CALENDLY}
                className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.45)] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5"
              >
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5" />
              </a>
              {pdfHref ? (
                <a
                  href={pdfHref}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full border-2 border-[#061952] text-[#061952] transition-all duration-300 hover:bg-[#061952] hover:text-white hover:-translate-y-0.5"
                >
                  Télécharger la plaquette
                  <Download className="w-[18px] h-[18px]" />
                </a>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-10">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className={`font-poppins font-bold text-2xl ${s.color ?? STAT_COLORS[i % 3]}`}>{s.n}</div>
                  <div className="text-sm text-gray-500">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative max-w-md mx-auto lg:max-w-none w-full">
            <div className="absolute -top-5 -right-4 w-32 h-32 rounded-3xl bg-[#FFD25D] z-0 hidden sm:block" />
            <div className="absolute -bottom-6 -left-5 w-24 h-24 rounded-3xl bg-[#061952] z-0 hidden sm:block" />
            <div className="relative z-10 grid grid-cols-2 gap-3.5 h-[440px]">
              <div className="relative row-span-2 rounded-[24px] overflow-hidden shadow-[0_30px_80px_rgba(6,25,82,0.16)]">
                <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" priority />
              </div>
              {images.slice(1, 3).map((img, i) => (
                <div key={i} className="relative rounded-[24px] overflow-hidden shadow-[0_18px_50px_rgba(6,25,82,0.12)]">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
