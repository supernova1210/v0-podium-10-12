import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Clock, Download } from "lucide-react"

interface RessourceHeroProps {
  categoryLabel: string
  titlePre: string
  titleHighlight: string
  titleSuffix?: string
  chapo: string
  readingTime: string
  image: string
  imageAlt: string
  pdfHref?: string
}

export default function RessourceHero({
  categoryLabel,
  titlePre,
  titleHighlight,
  titleSuffix = "",
  chapo,
  readingTime,
  image,
  imageAlt,
  pdfHref,
}: RessourceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-12 lg:pt-12 lg:pb-16">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-10 hidden lg:block w-64 h-64 rounded-[52px] bg-[#57B3B7]/10" />
        <div className="absolute -left-16 bottom-16 hidden lg:block w-40 h-40 rounded-[36px] bg-[#FFD25D]/15" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Fil d'ariane */}
          <nav aria-label="Fil d'ariane" className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/ressources" className="hover:text-[#061952] transition-colors">
              Ressources
            </Link>
            <span aria-hidden>›</span>
            <span className="text-[#061952] font-medium">{categoryLabel}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs px-3.5 py-2 rounded-full bg-[#57B3B7]/15 text-[#2c6e72] uppercase tracking-[0.08em]">
                  <BookOpen className="w-3.5 h-3.5" />
                  Ressource gratuite
                </span>
                <span className="inline-flex items-center gap-1.5 font-poppins font-medium text-xs px-3 py-2 rounded-full bg-gray-100 text-gray-600">
                  <Clock className="w-3.5 h-3.5" />
                  {readingTime}
                </span>
              </div>

              <h1 className="font-poppins font-extrabold text-[#061952] tracking-tight leading-[1.06] text-4xl md:text-5xl lg:text-[3.4rem] mb-5">
                {titlePre}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">{titleHighlight}</span>
                  <span className="absolute left-0 right-0 bottom-1 h-3.5 md:h-4 bg-[#FFD25D] z-0 rounded-sm" />
                </span>
                {titleSuffix ? ` ${titleSuffix}` : ""}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">{chapo}</p>

              <div className="flex flex-wrap gap-3.5">
                {pdfHref ? (
                  <a
                    href={pdfHref}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.45)] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5"
                  >
                    Télécharger le mémo
                    <Download className="w-[18px] h-[18px]" />
                  </a>
                ) : null}
                <a
                  href="#former-mes-equipes"
                  className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full border-2 border-[#061952] text-[#061952] transition-all duration-300 hover:bg-[#061952] hover:text-white hover:-translate-y-0.5"
                >
                  Former mes équipes
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="relative max-w-md mx-auto lg:max-w-none w-full">
              <div className="absolute -top-5 -right-4 w-28 h-28 rounded-3xl bg-[#FFD25D] z-0 hidden sm:block" />
              <div className="absolute -bottom-6 -left-5 w-20 h-20 rounded-3xl bg-[#57B3B7] z-0 hidden sm:block" />
              <div className="relative z-10 rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(6,25,82,0.16)] aspect-[4/3]">
                <Image src={image} alt={imageAlt} fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
