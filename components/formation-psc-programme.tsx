import Image from "next/image"
import { Target, FileText, Check, Download, GraduationCap, Award, ArrowRight } from "lucide-react"
import Reveal from "@/components/reveal"

const objectifs = [
  "Protéger la victime et les témoins face à une situation d'urgence.",
  "Alerter les secours d'urgence et transmettre les informations essentielles.",
  "Exécuter correctement les gestes de premiers secours adaptés.",
  "Empêcher l'aggravation de l'état de la victime en attendant les secours.",
]

const programme = [
  "Identifier une situation d'accident et assurer la protection de la victime, de soi-même et des témoins afin d'éviter un suraccident.",
  "Alerter efficacement les services de secours, transmettre les informations essentielles et organiser l'intervention en attendant leur arrivée.",
  "Mettre en pratique les gestes adaptés : prise en charge d'une victime qui se plaint, arrêt d'un saignement abondant, position d'attente ou PLS.",
  "Intervenir face à une victime inconsciente ou en arrêt cardiaque : réanimation cardio-pulmonaire et utilisation d'un défibrillateur (DAE).",
]

const methodes = [
  "Études de cas : faire le point sur les connaissances déjà acquises et celles qui restent à acquérir.",
  "Démonstrations pratiques et apprentissages : acquérir les connaissances nécessaires à la réalisation des objectifs.",
  "Cas concrets : appliquer les connaissances dans un environnement recréé et valider l'atteinte de l'objectif pédagogique.",
]

const modalites = [
  { icon: "/images/picto_interactif.png", title: "Formation", subtitle: "intra-entreprise" },
  { icon: "/images/picto-temps.png", title: "Durée", subtitle: "7 heures" },
  { icon: "/images/picto-participants.png", title: "2 à 10", subtitle: "participants" },
  { icon: "/images/picto_prix.png", title: "Sur devis", subtitle: "tarif adapté" },
]

export default function FormationPscProgramme() {
  return (
    <section id="programme" className="scroll-mt-20 py-16 md:py-20 bg-[#fafbfe] relative overflow-hidden">
      {/* habillage : grands carrés arrondis */}
      <div aria-hidden className="absolute left-[-55px] top-24 hidden xl:block w-44 h-44 rounded-[36px] bg-[#FFD25D]/10" />
      <div aria-hidden className="absolute left-14 top-52 hidden xl:block w-28 h-28 rounded-[26px] border-2 border-[#061952]/[0.07]" />
      <div aria-hidden className="absolute right-[-45px] bottom-28 hidden xl:block w-48 h-48 rounded-[38px] border-2 border-[#FFD25D]/25" />
      <div aria-hidden className="absolute right-16 bottom-16 hidden xl:block w-24 h-24 rounded-[24px] bg-[#061952]/[0.04]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <Reveal className="text-center max-w-4xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
              Le programme
            </span>
            <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-4xl mt-4 mb-3">
              Ce que vos équipes vont maîtriser
            </h2>
            <p className="text-lg text-gray-600">De la protection de la victime à la réanimation cardio-pulmonaire.</p>
          </Reveal>

          <div className="grid lg:grid-cols-[1.55fr_0.95fr] gap-8">
            {/* Left column */}
            <div className="space-y-8">
              {/* Objectifs */}
              <Reveal className="bg-white border border-gray-200 rounded-[22px] p-8 md:p-9 shadow-[0_4px_18px_rgba(6,25,82,0.06)]">
                <div className="flex items-center gap-3.5 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-[#FFD25D] text-[#061952] flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6" />
                  </span>
                  <h3 className="font-poppins font-semibold text-2xl text-[#061952]">Objectifs</h3>
                </div>
                <ul className="grid gap-4">
                  {objectifs.map((o, i) => (
                    <li key={i} className="flex gap-3.5 items-start text-[16px] text-gray-700">
                      <span className="w-6 h-6 rounded-lg bg-[#FFD25D]/40 text-[#061952] flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  {programme.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-4 items-start p-5 rounded-2xl bg-[#fafbfe] border border-gray-200 text-[15.5px] text-gray-700 transition-all hover:bg-white hover:border-gray-300 hover:shadow-[0_4px_18px_rgba(6,25,82,0.06)]"
                    >
                      <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#061952] text-[#FFD25D] font-poppins font-semibold text-[15px] flex items-center justify-center">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {p}
                    </li>
                  ))}
                </ol>
              </Reveal>

              {/* Méthodes + Suivi */}
              <div className="grid md:grid-cols-2 gap-8">
                <Reveal className="bg-white border border-gray-200 rounded-[22px] p-8 shadow-[0_4px_18px_rgba(6,25,82,0.06)] h-full">
                  <div className="flex items-center gap-3.5 mb-5">
                    <span className="w-11 h-11 rounded-2xl bg-[#FFD25D] text-[#061952] flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-[22px] h-[22px]" />
                    </span>
                    <h3 className="font-poppins font-semibold text-xl text-[#061952]">Méthodes pédagogiques</h3>
                  </div>
                  <ul className="grid gap-3.5">
                    {methodes.map((m, i) => (
                      <li key={i} className="flex gap-3 items-start text-[15px] text-gray-700">
                        <span className="w-5 h-5 rounded-md bg-[#FFD25D]/40 text-[#061952] flex items-center justify-center flex-shrink-0 mt-0.5">
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
                      <Award className="w-[22px] h-[22px]" />
                    </span>
                    <h3 className="font-poppins font-semibold text-xl text-[#061952]">Suivi &amp; évaluation</h3>
                  </div>
                  <p className="text-[15px] text-gray-700 leading-relaxed mb-5">
                    Le certificat de compétences PSC est délivré aux personnes ayant participé à l'ensemble de la
                    formation, ayant réalisé tous les gestes de premiers secours lors des phases d'apprentissage et
                    participé au moins une fois en tant que sauveteur à un cas concret.
                  </p>
                  <div className="flex items-center gap-3 rounded-2xl bg-[#FFD25D]/15 border border-[#FFD25D]/40 px-4 py-3.5">
                    <Award className="w-5 h-5 text-[#061952] flex-shrink-0" />
                    <span className="font-poppins font-semibold text-sm text-[#061952]">
                      Certificat de compétences PSC à la clé
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Sidebar modalités */}
            <aside>
              <div className="lg:sticky lg:top-24 relative overflow-hidden bg-[#061952] rounded-[22px] p-8 shadow-[0_18px_50px_rgba(6,25,82,0.16)]">
                <div aria-hidden className="absolute -top-12 -right-12 w-36 h-36 rounded-[30px] border-2 border-[#FFD25D]/20" />
                <div aria-hidden className="absolute -bottom-10 -left-10 w-28 h-28 rounded-[26px] bg-white/[0.04]" />
                <h3 className="relative flex items-center gap-3 font-poppins font-semibold text-xl text-white mb-6">
                  Modalités
                </h3>
                <div className="relative grid grid-cols-2 gap-3 mb-7">
                  {modalites.map((m, i) => (
                    <div key={i} className="bg-white/[0.06] border border-white/10 rounded-2xl px-4 py-5 text-center">
                      <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3">
                        <Image src={m.icon} alt="" width={30} height={30} className="w-7 h-7 object-contain" />
                      </span>
                      <div className="font-poppins font-semibold text-sm text-white leading-tight">{m.title}</div>
                      <div className="text-xs text-white/60 mt-0.5">{m.subtitle}</div>
                    </div>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="relative flex items-center justify-center gap-2 font-poppins font-semibold text-[15px] w-full px-6 py-3.5 rounded-full bg-[#FFD25D] text-[#061952] transition-all duration-300 hover:bg-[#FFC940]"
                >
                  Demander un devis
                  <ArrowRight className="w-[18px] h-[18px]" />
                </a>
              </div>
            </aside>
          </div>

          {/* PDF block (prominent) */}
          <Reveal>
            <div className="mt-12 relative overflow-hidden bg-[#061952] rounded-[28px] px-8 md:px-12 py-10 md:py-11 flex flex-col md:flex-row items-start md:items-center justify-between gap-7 shadow-[0_18px_50px_rgba(6,25,82,0.16)]">
              <div aria-hidden className="absolute -top-12 right-40 hidden md:block w-40 h-40 rounded-[34px] border-2 border-[#FFD25D]/15" />
              <div aria-hidden className="absolute -bottom-16 right-24 hidden md:block w-48 h-48 rounded-[38px] bg-white/[0.03]" />
              <div className="relative max-w-xl">
                <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#FFD25D] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
                  Fiche formation
                </span>
                <div className="font-poppins font-bold text-2xl md:text-3xl text-white mb-2">
                  Le programme complet en PDF
                </div>
                <div className="text-[15px] text-white/75">
                  Objectifs, programme détaillé, méthodes pédagogiques, suivi et évaluation : tout est dans la fiche.
                </div>
              </div>
              <a
                href="/documents/fiche-formation-premiers-secours-citoyen-2026.pdf"
                target="_blank"
                className="relative inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-[15px] px-8 py-4 rounded-full bg-[#FFD25D] text-[#061952] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0 shadow-[0_10px_26px_rgba(255,210,93,0.35)]"
              >
                Télécharger la fiche (PDF)
                <Download className="w-[18px] h-[18px]" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
