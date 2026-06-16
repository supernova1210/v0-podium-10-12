import { Target, FileText, Check, Download, Building2, Clock, Users, BadgeEuro, SlidersHorizontal, ArrowRight } from "lucide-react"

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

const modalites = [
  { icon: Building2, title: "Formation", subtitle: "intra-entreprise" },
  { icon: Clock, title: "Durée", subtitle: "7 heures" },
  { icon: Users, title: "2 à 10", subtitle: "participants" },
  { icon: BadgeEuro, title: "Sur devis", subtitle: "tarif adapté" },
]

export default function FormationPscProgramme() {
  return (
    <section id="programme" className="scroll-mt-20 py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
              Le programme
            </span>
            <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-5xl mt-4 mb-3.5">
              Ce que vos équipes vont maîtriser
            </h2>
            <p className="text-lg text-gray-600">
              Un parcours complet, de la protection de la victime à la réanimation cardio-pulmonaire.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.55fr_0.95fr] gap-8 items-start">
            {/* Left column */}
            <div className="space-y-8">
              {/* Objectifs */}
              <div className="bg-white border border-gray-200 rounded-[22px] p-8 md:p-9 shadow-[0_4px_18px_rgba(6,25,82,0.06)]">
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
              </div>

              {/* Déroulé */}
              <div className="bg-white border border-gray-200 rounded-[22px] p-8 md:p-9 shadow-[0_4px_18px_rgba(6,25,82,0.06)]">
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
              </div>
            </div>

            {/* Sidebar modalités */}
            <aside>
              <div className="lg:sticky lg:top-24 bg-[#061952] rounded-[22px] p-8 shadow-[0_18px_50px_rgba(6,25,82,0.16)]">
                <h3 className="flex items-center gap-3 font-poppins font-semibold text-xl text-white mb-6">
                  <span className="w-10 h-10 rounded-xl bg-white/10 text-[#FFD25D] flex items-center justify-center">
                    <SlidersHorizontal className="w-5 h-5" />
                  </span>
                  Modalités
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-7">
                  {modalites.map((m, i) => (
                    <div key={i} className="bg-white/[0.06] border border-white/10 rounded-2xl px-4 py-5 text-center">
                      <span className="w-10 h-10 rounded-xl bg-[#FFD25D] text-[#061952] flex items-center justify-center mx-auto mb-3">
                        <m.icon className="w-5 h-5" />
                      </span>
                      <div className="font-poppins font-semibold text-sm text-white leading-tight">{m.title}</div>
                      <div className="text-xs text-white/60 mt-0.5">{m.subtitle}</div>
                    </div>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 font-poppins font-semibold text-[15px] w-full px-6 py-3.5 rounded-full bg-[#FFD25D] text-[#061952] transition-all duration-300 hover:bg-[#FFC940]"
                >
                  Demander un devis
                  <ArrowRight className="w-[18px] h-[18px]" />
                </a>
              </div>
            </aside>
          </div>

          {/* PDF banner */}
          <div className="mt-12 bg-[#fafbfe] border border-gray-200 rounded-[22px] px-8 md:px-10 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_4px_18px_rgba(6,25,82,0.06)]">
            <div>
              <div className="font-poppins font-semibold text-lg text-[#061952]">Le programme complet en PDF</div>
              <div className="text-[15px] text-gray-600">
                Objectifs, méthodes pédagogiques, suivi et évaluation — la fiche formation détaillée.
              </div>
            </div>
            <a
              href="/documents/fiche-formation-premiers-secours-citoyen-2026.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-[15px] px-7 py-4 rounded-full border-2 border-[#061952] text-[#061952] transition-all duration-300 hover:bg-[#061952] hover:text-white whitespace-nowrap flex-shrink-0"
            >
              Télécharger la fiche (PDF)
              <Download className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
