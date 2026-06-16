const stats = [
  { n: "7h", l: "de pratique intensive" },
  { n: "100%", l: "mises en situation réelles" },
  { n: "PSC", l: "certificat de compétences" },
]

export default function FormationPscApproche() {
  return (
    <section id="approche" className="scroll-mt-20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden bg-[#061952] rounded-[36px] px-7 md:px-16 py-14 md:py-20 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#FFD25D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
              Notre approche
            </span>

            <span aria-hidden className="block font-poppins font-extrabold text-[#FFD25D]/50 text-7xl leading-[0.4] h-10 mt-4">
              &ldquo;
            </span>

            <h2 className="font-poppins font-bold text-white leading-[1.15] tracking-tight text-2xl md:text-4xl mt-4 mb-7">
              Face à l'urgence, chaque seconde compte. On transforme le stress en{" "}
              <span className="text-[#FFD25D]">réflexes qui sauvent.</span>
            </h2>

            <div className="space-y-5 text-lg text-white/80 leading-relaxed max-w-3xl">
              <p>
                La formation Premiers Secours Citoyen donne à vos collaborateurs les bons gestes pour protéger une
                victime, alerter les secours et agir efficacement en attendant leur arrivée.
              </p>
              <p>
                Par une pédagogie active et concrète — études de cas, démonstrations commentées et mises en situation
                réalistes — chaque participant s'entraîne aux gestes qui sauvent jusqu'à les maîtriser, dans un cadre
                bienveillant et sécurisant.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 md:gap-12 mt-10 pt-8 border-t border-white/15">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="font-poppins font-bold text-3xl text-[#FFD25D]">{s.n}</div>
                  <div className="text-sm text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
