import Image from "next/image"
import { ArrowRight, Check, Trophy, Smartphone, Drama, Quote } from "lucide-react"
import Reveal from "@/components/reveal"

const CALENDLY = "https://calendly.com/nicolas-ofpodium/30min"

function CtaPair({ primary, primaryHref, secondary, secondaryHref }: {
  primary: string
  primaryHref: string
  secondary: string
  secondaryHref: string
}) {
  return (
    <div className="flex flex-wrap gap-3.5 pt-2">
      <a
        href={primaryHref}
        className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-[15px] px-7 py-3.5 rounded-full bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.45)] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5"
      >
        {primary}
        <ArrowRight className="w-[18px] h-[18px]" />
      </a>
      <a
        href={secondaryHref}
        className="inline-flex items-center justify-center font-poppins font-semibold text-[15px] px-7 py-3.5 rounded-full border-2 border-[#061952] text-[#061952] transition-all duration-300 hover:bg-[#061952] hover:text-white hover:-translate-y-0.5"
      >
        {secondary}
      </a>
    </div>
  )
}

function StatPill({ n, l }: { n: string; l: string }) {
  return (
    <div className="bg-[#061952] rounded-2xl px-5 py-4 text-center">
      <div className="font-poppins font-bold text-lg md:text-xl text-[#FFD25D] leading-tight">{n}</div>
      <div className="text-xs md:text-sm text-white/70 mt-1">{l}</div>
    </div>
  )
}

export default function AteliersFocus() {
  return (
    <>
      {/* ===== Escape Game Sécurité ===== */}
      <section id="escape-game" className="scroll-mt-20 py-16 md:py-24 bg-[#fafbfe] relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-[-50px] top-16 hidden xl:block w-44 h-44 rounded-[36px] bg-[#FFD25D]/20" />
          <div className="absolute left-[-40px] bottom-20 hidden xl:block w-36 h-36 rounded-[32px] border-2 border-[#061952]/15" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Text */}
            <Reveal x={-40}>
              <span className="inline-flex items-center font-poppins font-semibold text-xs px-3.5 py-1.5 rounded-full bg-[#FFD25D] text-[#061952] uppercase tracking-[0.08em]">
                Atelier Sécurité · le format phare
              </span>

              <h2 className="font-poppins font-extrabold text-[#061952] tracking-tight leading-[1.08] text-3xl md:text-5xl mt-5 mb-5">
                Escape Game{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Sécurité</span>
                  <span className="absolute left-0 right-0 bottom-1 h-3.5 bg-[#FFD25D] z-0 rounded-sm" />
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-6">
                Un jeu connecté innovant où les équipes relèvent des défis variés à travers une application
                interactive dédiée à la sécurité au travail.
              </p>

              <div className="bg-white border border-gray-200 rounded-[22px] p-6 shadow-[0_4px_18px_rgba(6,25,82,0.06)] mb-6">
                <h3 className="font-poppins font-semibold text-lg text-[#061952] mb-4">Types de défis</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Quiz", "Réponses chiffrées", "Ateliers pratiques", "Photos réponses"].map((d) => (
                    <div key={d} className="flex items-center gap-2.5 text-[15px] text-gray-700">
                      <span className="w-6 h-6 rounded-lg bg-[#FFD25D]/40 text-[#061952] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </span>
                      {d}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Les défis sont entièrement personnalisables selon votre entreprise.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 max-w-md mb-6">
                <StatPill n="60-90 min" l="d'animation" />
                <StatPill n="5 à 100" l="participants" />
              </div>

              <p className="flex items-start gap-2.5 text-[15px] text-gray-700 leading-relaxed mb-4 max-w-xl">
                <Trophy className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#061952]">Classement en temps réel</strong> : le score évolue en continu
                  pour entretenir l&apos;engagement et l&apos;esprit de compétition tout au long de l&apos;événement.
                </span>
              </p>

              <CtaPair
                primary="Découvrir l'atelier"
                primaryHref="/atelier/escape-game-securite"
                secondary="Demander un devis"
                secondaryHref="/contact"
              />
            </Reveal>

            {/* Visual */}
            <Reveal x={40} delay={120}>
              <div className="relative max-w-md mx-auto lg:max-w-[480px] w-full">
                <div className="absolute -top-5 -right-4 w-32 h-32 rounded-3xl bg-[#FFD25D] z-0 hidden sm:block" />
                <div className="absolute -bottom-6 -left-5 w-24 h-24 rounded-3xl bg-[#061952] z-0 hidden sm:block" />
                <div className="group relative z-10 rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(6,25,82,0.16)] aspect-[4/3.4]">
                  <Image
                    src="/images/escape-game-atelier-podium.jpg"
                    alt="Escape Game Sécurité Podium, jeu connecté en entreprise"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute z-20 -bottom-4 left-6 bg-white rounded-2xl px-4 py-3 shadow-[0_18px_50px_rgba(6,25,82,0.16)] flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-[#061952] text-[#FFD25D] flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </span>
                  <div>
                    <div className="font-poppins font-semibold text-sm text-[#061952] leading-tight">App connectée</div>
                    <div className="text-xs text-gray-500">défis et scores en direct</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Théâtre en entreprise ===== */}
      <section id="theatre-improvisation" className="scroll-mt-20 py-16 md:py-24 bg-white relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-[-50px] top-20 hidden xl:block w-44 h-44 rounded-[36px] bg-[#57B3B7]/12" />
          <div className="absolute right-[-40px] bottom-24 hidden xl:block w-36 h-36 rounded-[32px] border-2 border-[#57B3B7]/30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Visual */}
            <Reveal x={-40} className="order-2 lg:order-1">
              <div className="relative max-w-md mx-auto lg:max-w-[480px] w-full">
                <div className="absolute -top-5 -left-4 w-32 h-32 rounded-3xl bg-[#57B3B7] z-0 hidden sm:block" />
                <div className="absolute -bottom-6 -right-5 w-24 h-24 rounded-3xl bg-[#061952] z-0 hidden sm:block" />
                <div className="group relative z-10 rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(6,25,82,0.16)] aspect-[4/3.4]">
                  <Image
                    src="/images/atelier-theatre-entreprise.jpg"
                    alt="Atelier théâtre d'improvisation en entreprise avec Podium"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute z-20 -bottom-4 right-6 bg-white rounded-2xl px-4 py-3 shadow-[0_18px_50px_rgba(6,25,82,0.16)] flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-[#061952] text-[#57B3B7] flex items-center justify-center flex-shrink-0">
                    <Drama className="w-6 h-6" />
                  </span>
                  <div>
                    <div className="font-poppins font-semibold text-sm text-[#061952] leading-tight">Effet miroir</div>
                    <div className="text-xs text-gray-500">on se reconnaît, on en parle</div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Text */}
            <Reveal x={40} delay={120} className="order-1 lg:order-2">
              <span className="inline-flex items-center font-poppins font-semibold text-xs px-3.5 py-1.5 rounded-full bg-[#57B3B7]/15 text-[#2c6e72] uppercase tracking-[0.08em]">
                Atelier QVCT · le format grand groupe
              </span>

              <h2 className="font-poppins font-extrabold text-[#061952] tracking-tight leading-[1.08] text-3xl md:text-5xl mt-5 mb-5">
                Théâtre{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">en entreprise</span>
                  <span className="absolute left-0 right-0 bottom-1 h-3.5 bg-[#57B3B7]/50 z-0 rounded-sm" />
                </span>
              </h2>

              <div className="relative bg-[#fafbfe] border border-gray-200 rounded-[22px] p-6 pl-14 mb-6 max-w-xl">
                <Quote className="absolute left-5 top-6 w-6 h-6 text-[#57B3B7]" />
                <p className="text-[16px] text-gray-700 italic leading-relaxed">
                  Utiliser le théâtre d&apos;improvisation comme un outil de prévention : faire vivre des situations
                  proches du réel, pour provoquer une prise de conscience collective.
                </p>
              </div>

              <h3 className="font-poppins font-semibold text-lg text-[#061952] mb-4">Objectifs</h3>
              <ul className="grid gap-3 mb-6 max-w-xl">
                {[
                  "Faire émerger les comportements à risque du quotidien.",
                  "Permettre aux participants de se reconnaître dans des situations concrètes (effet miroir).",
                  "Dédramatiser et décomplexer sur ces sujets du quotidien.",
                  "Enclencher les échanges et favoriser le dialogue.",
                  "Ancrer les messages de prévention par l'expérience vécue.",
                ].map((o) => (
                  <li key={o} className="flex gap-3 items-start text-[15px] text-gray-700">
                    <span className="w-6 h-6 rounded-lg bg-[#57B3B7]/25 text-[#2c6e72] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    {o}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-3 max-w-md mb-6">
                <StatPill n="2 à 3h" l="durée" />
                <StatPill n="30" l="participants" />
                <StatPill n="TMS · RPS" l="thématiques" />
              </div>

              <CtaPair
                primary="Organiser cet atelier"
                primaryHref={CALENDLY}
                secondary="En savoir plus"
                secondaryHref="/atelier/theatre-impro-sante-mentale"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
