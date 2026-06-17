import Reveal from "@/components/reveal"

const stats = [
  { n: "7h", l: "de pratique intensive" },
  { n: "100%", l: "mises en situation réelles" },
  { n: "PSC", l: "certificat de compétences" },
]

export default function FormationPscApproche() {
  return (
    <section id="approche" className="scroll-mt-20 pt-2 pb-16 md:pt-4 md:pb-20">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="relative overflow-hidden bg-[#061952] rounded-[36px] px-7 md:px-16 py-14 md:py-18 max-w-7xl mx-auto">
            {/* motif déco : grands carrés arrondis */}
            <div aria-hidden className="absolute -top-12 -right-12 w-52 h-52 rounded-[40px] border-2 border-[#FFD25D]/20" />
            <div aria-hidden className="absolute top-10 right-16 w-24 h-24 rounded-[26px] bg-[#FFD25D]/10 hidden md:block" />
            <div aria-hidden className="absolute -bottom-14 -right-10 w-44 h-44 rounded-[36px] bg-white/[0.04]" />

            <div className="relative max-w-3xl">
              <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#FFD25D]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
                Notre approche
              </span>

              <h2 className="font-poppins font-bold text-white leading-[1.15] tracking-tight text-2xl md:text-4xl mt-4 mb-6">
                Face à l'urgence, chaque seconde compte. On transforme le stress en{" "}
                <span className="text-[#FFD25D]">réflexes qui sauvent.</span>
              </h2>

              <div className="space-y-5 text-lg text-white/80 leading-relaxed max-w-3xl">
                <p>
                  La formation Premiers Secours Citoyen donne à vos collaborateurs les bons gestes pour protéger une
                  victime, alerter les secours et agir efficacement en attendant leur arrivée.
                </p>
                <p>
                  Par une pédagogie active et concrète, faite d'études de cas, de démonstrations commentées et de mises
                  en situation réalistes, chaque participant s'entraîne aux gestes qui sauvent jusqu'à les maîtriser,
                  dans un cadre bienveillant et sécurisant.
                </p>
              </div>

              <div className="flex flex-wrap gap-8 md:gap-12 mt-9 pt-8 border-t border-white/15">
                {stats.map((s, i) => (
                  <div key={i}>
                    <div className="font-poppins font-bold text-3xl text-[#FFD25D]">{s.n}</div>
                    <div className="text-sm text-white/70">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
