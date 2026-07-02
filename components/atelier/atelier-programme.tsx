import Image from "next/image"
import { Target, FileText, Check, Download, GraduationCap, MapPin, ArrowRight } from "lucide-react"
import Reveal from "@/components/reveal"
import { ACCENTS, type AtelierAccent } from "./atelier-accents"

export interface AtelierModalite {
  icon: string
  title: string
  subtitle: string
}

interface AtelierProgrammeProps {
  accent: AtelierAccent
  subtitle: string
  objectifs: string[]
  deroule: string[]
  methodes: string[]
  espace: string
  modalites: AtelierModalite[]
  pdfHref?: string
}

export default function AtelierProgramme({
  accent,
  subtitle,
  objectifs,
  deroule,
  methodes,
  espace,
  modalites,
  pdfHref,
}: AtelierProgrammeProps) {
  const a = ACCENTS[accent]
  return (
    <section id="programme" className="scroll-mt-20 py-16 md:py-20 bg-[#fafbfe] relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute left-[-55px] top-24 hidden xl:block w-44 h-44 rounded-[36px] ${a.decoA}`} />
        <div className="absolute left-14 top-52 hidden xl:block w-28 h-28 rounded-[26px] border-2 border-[#061952]/25" />
        <div className={`absolute right-[-45px] bottom-28 hidden xl:block w-48 h-48 rounded-[38px] border-2 ${a.decoB}`} />
        <div className="absolute right-16 bottom-16 hidden xl:block w-24 h-24 rounded-[24px] bg-[#061952]/[0.10]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <Reveal className="text-center max-w-4xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
              <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
              L&apos;atelier en détail
            </span>
            <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-4xl mt-4 mb-3">
              Ce que vos équipes vont vivre
            </h2>
            <p className="text-lg text-gray-600">{subtitle}</p>
          </Reveal>

          <div className="grid lg:grid-cols-[1.55fr_0.95fr] gap-8">
            {/* Left column */}
            <div className="space-y-8">
              {/* Objectifs */}
              <Reveal className="bg-white border border-gray-200 rounded-[22px] p-8 md:p-9 shadow-[0_4px_18px_rgba(6,25,82,0.06)]">
                <div className="flex items-center gap-3.5 mb-6">
                  <span className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${a.iconBox}`}>
                    <Target className="w-6 h-6" />
                  </span>
                  <h3 className="font-poppins font-semibold text-2xl text-[#061952]">Objectifs</h3>
                </div>
                <ul className="grid gap-4">
                  {objectifs.map((o, i) => (
                    <li key={i} className="flex gap-3.5 items-start text-[16px] text-gray-700">
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${a.checkChip}`}>
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Déroulé */}
              <Reveal className="bg-white border border-gray-200 rounded-[22px] p-8 md:p-9 shadow-[0_4px_18px_rgba(6,25,82,0.06)]">
                <div className="flex items-center gap-3.5 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-[#061952] text-white flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6" />
                  </span>
                  <h3 className="font-poppins font-semibold text-2xl text-[#061952]">Déroulé</h3>
                </div>
                <ol className="grid gap-3.5">
                  {deroule.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-4 items-start p-5 rounded-2xl bg-[#fafbfe] border border-gray-200 text-[15.5px] text-gray-700 transition-all hover:bg-white hover:border-gray-300 hover:shadow-[0_4px_18px_rgba(6,25,82,0.06)]"
                    >
                      <span className={`flex-shrink-0 w-9 h-9 rounded-xl font-poppins font-semibold text-[15px] flex items-center justify-center ${a.numberChip}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {p}
                    </li>
                  ))}
                </ol>
              </Reveal>

              {/* Méthodes + Espace */}
              <div className="grid md:grid-cols-2 gap-8">
                <Reveal className="bg-white border border-gray-200 rounded-[22px] p-8 shadow-[0_4px_18px_rgba(6,25,82,0.06)] h-full">
                  <div className="flex items-center gap-3.5 mb-5">
                    <span className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${a.iconBox}`}>
                      <GraduationCap className="w-[22px] h-[22px]" />
                    </span>
                    <h3 className="font-poppins font-semibold text-xl text-[#061952]">Modalités pédagogiques</h3>
                  </div>
                  <ul className="grid gap-3.5">
                    {methodes.map((m, i) => (
                      <li key={i} className="flex gap-3 items-start text-[15px] text-gray-700">
                        <span className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 ${a.checkChip}`}>
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal className="bg-white border border-gray-200 rounded-[22px] p-8 shadow-[0_4px_18px_rgba(6,25,82,0.06)] h-full">
                  <div className="flex items-center gap-3.5 mb-5">
                    <span className="w-11 h-11 rounded-2xl bg-[#061952] text-white flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-[22px] h-[22px]" />
                    </span>
                    <h3 className="font-poppins font-semibold text-xl text-[#061952]">Espace nécessaire</h3>
                  </div>
                  <p className="text-[15px] text-gray-700 leading-relaxed mb-5">{espace}</p>
                  <p className="text-[15px] text-gray-700 leading-relaxed">
                    Nous nous adaptons à vos locaux : salle de réunion, réfectoire, entrepôt ou extérieur. Le matériel
                    est fourni par nos animateurs.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Sidebar modalités */}
            <aside>
              <div className="lg:sticky lg:top-24 relative overflow-hidden bg-[#061952] rounded-[22px] p-8 shadow-[0_18px_50px_rgba(6,25,82,0.16)]">
                <div aria-hidden className={`absolute -top-12 -right-12 w-36 h-36 rounded-[30px] border-2 ${a.decoBorder}`} />
                <div aria-hidden className="absolute -bottom-10 -left-10 w-28 h-28 rounded-[26px] bg-white/[0.04]" />
                <h3 className="relative flex items-center gap-3 font-poppins font-semibold text-2xl text-white mb-7">
                  Modalités
                </h3>
                <div className="relative grid grid-cols-2 gap-3 mb-7">
                  {modalites.map((m, i) => (
                    <div key={i} className="bg-white/[0.06] border border-white/10 rounded-2xl px-4 py-6 text-center">
                      <span className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-3.5">
                        <Image src={m.icon} alt="" width={34} height={34} className="w-8 h-8 object-contain" />
                      </span>
                      <div className="font-poppins font-semibold text-base text-white leading-tight">{m.title}</div>
                      <div className="text-sm text-white/60 mt-1">{m.subtitle}</div>
                    </div>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="relative flex items-center justify-center gap-2 font-poppins font-semibold text-base w-full px-6 py-4 rounded-full bg-[#FFD25D] text-[#061952] transition-all duration-300 hover:bg-[#FFC940]"
                >
                  Demander un devis
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </aside>
          </div>

          {/* PDF block */}
          {pdfHref ? (
            <Reveal>
              <div className="mt-12 bg-[#061952] rounded-[28px] px-8 md:px-12 py-10 md:py-11 flex flex-col md:flex-row items-start md:items-center justify-between gap-7 shadow-[0_18px_50px_rgba(6,25,82,0.16)]">
                <div className="max-w-xl">
                  <span className={`inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase mb-3 ${a.eyebrowText}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                    Fiche atelier
                  </span>
                  <div className="font-poppins font-bold text-2xl md:text-3xl text-white mb-2">
                    Le programme complet en PDF
                  </div>
                  <div className="text-[15px] text-white/75">
                    Objectifs, déroulé, modalités pédagogiques et infos pratiques : tout est dans la fiche.
                  </div>
                </div>
                <a
                  href={pdfHref}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-[15px] px-8 py-4 rounded-full bg-[#FFD25D] text-[#061952] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0 shadow-[0_10px_26px_rgba(255,210,93,0.35)]"
                >
                  Télécharger la fiche (PDF)
                  <Download className="w-[18px] h-[18px]" />
                </a>
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  )
}
