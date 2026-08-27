import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, UserCheck } from "lucide-react"
import Reveal from "@/components/reveal"

/* ============ Cartes des 4 événements (photo pleine + sweep framboise) ============ */

const evenements = [
  {
    title: "Journée Sécurité",
    description:
      "Escape game, gestes qui sauvent, mur des addictions : une journée qui ancre durablement les réflexes de prévention.",
    image: "/images/journee-securite-evenement-podium.jpg",
    href: "/nos-evenements/journee-securite",
  },
  {
    title: "Journée RSE",
    description:
      "Des ateliers participatifs pour engager concrètement vos équipes dans votre démarche de responsabilité sociétale.",
    image: "/images/podium-olympiade-equipe.webp",
    href: "/nos-evenements/journee-rse",
  },
  {
    title: "Semaine QVCT",
    description:
      "Plusieurs jours d'ateliers autour de la qualité de vie au travail, avec un fil conducteur et une vraie progression.",
    image: "/images/atelier-yoga-podium-bien-etre.jpg",
    href: "/nos-evenements/semaine-qvct",
  },
  {
    title: "Journée Séminaire",
    description:
      "Un séminaire vivant et mémorable : cohésion, intelligence collective, prise de parole et formats participatifs.",
    image: "/images/seminaire-podium-2.jpg",
    href: "/nos-evenements/journee-seminaire",
  },
]

export function EvenementsHubCards() {
  return (
    <section id="evenements" className="scroll-mt-20 py-16 md:py-24 bg-white relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-50px] top-32 hidden xl:block w-44 h-44 rounded-[36px] bg-[#C9426B]/10" />
        <div className="absolute right-[-40px] bottom-40 hidden xl:block w-48 h-48 rounded-[38px] border-2 border-[#FFD25D]/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9426B]" />
            Nos formats
          </span>
          <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-5xl mt-4 mb-4">
            Quatre événements pour marquer les esprits
          </h2>
          <p className="text-lg text-gray-600">
            Chaque événement est conçu pour répondre aux besoins spécifiques de votre entreprise.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {evenements.map((e, i) => (
            <Reveal key={e.href} delay={(i % 4) * 90}>
              <Link
                href={e.href}
                className="group relative block h-[360px] rounded-[22px] overflow-hidden shadow-[0_4px_18px_rgba(6,25,82,0.10)] transition-all duration-300 hover:shadow-[0_18px_50px_rgba(6,25,82,0.20)] hover:-translate-y-1.5"
              >
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 z-20 inline-flex items-center font-poppins font-semibold text-xs px-3 py-1.5 rounded-full backdrop-blur bg-[#C9426B]/90 text-white">
                  Événement
                </span>

                {/* Titre état normal */}
                <div className="absolute inset-x-0 bottom-0 z-[5] p-5 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                  <h3 className="font-poppins font-bold text-xl text-white leading-snug [text-shadow:0_2px_14px_rgba(6,25,82,0.95)]">
                    {e.title}
                  </h3>
                </div>

                {/* Voile framboise qui balaye */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 -left-[20%] w-[140%] z-10 pointer-events-none -skew-x-6 -translate-x-[120%] group-hover:translate-x-0 transition-transform duration-500 ease-out bg-[#C9426B]/90"
                />

                {/* Contenu hover */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 opacity-0 translate-y-3 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0">
                  <h3 className="font-poppins font-bold text-xl leading-snug text-white">{e.title}</h3>
                  <p className="text-[15px] leading-relaxed mt-2 text-white/90">{e.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 self-start font-poppins font-semibold text-[15px] px-6 py-3 rounded-full bg-white text-[#8f2b49]">
                    Découvrir
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============ Détails en alternance ============ */

const details = [
  {
    id: "journee-securite",
    title: "Journée Sécurité",
    description:
      "Organisez une journée sécurité en entreprise qui marque les esprits. Podium conçoit des formats ludiques et interactifs (escape game sécurité, gestes qui sauvent, mur des addictions, gestes et postures) pour ancrer durablement les réflexes de prévention des risques professionnels. Intervention sur site à Lyon et dans toute la région Rhône-Alpes, pour toutes les tailles d'équipes.",
    image: "/images/journee-securite-evenement-podium.jpg",
    imageAlt: "Journée sécurité en entreprise animée par Podium à Lyon",
    href: "/nos-evenements/journee-securite",
    deco: "bg-[#FFD25D]",
    chip: "bg-[#FFD25D]/95 text-[#061952]",
  },
  {
    id: "journee-rse",
    title: "Journée RSE",
    description:
      "Engagez concrètement vos équipes dans votre démarche de responsabilité sociétale. Podium et l'Agence Déclic co-construisent votre journée RSE avec des ateliers participatifs adaptés à vos enjeux : environnement, inclusion, handicap, bien-être au travail. Un format modulable, animé dans vos locaux à Lyon et en Auvergne-Rhône-Alpes.",
    image: "/images/podium-olympiade-equipe.webp",
    imageAlt: "Équipe mobilisée lors d'une journée RSE animée par Podium",
    href: "/nos-evenements/journee-rse",
    deco: "bg-[#57B3B7]",
    chip: "bg-[#57B3B7]/90 text-white",
  },
  {
    id: "semaine-qvct",
    title: "Semaine QVCT",
    description:
      "La semaine QVCT est l'occasion d'organiser plusieurs jours d'ateliers autour de la qualité de vie et des conditions de travail, avec un fil conducteur fort et une progression cohérente. Prévention des TMS, bien-être, cohésion, gestion du stress : chaque atelier est pensé pour répondre à vos enjeux terrain, à vos métiers et à vos contraintes d'organisation.",
    image: "/images/atelier-yoga-podium-bien-etre.jpg",
    imageAlt: "Semaine QVCT organisée par Podium à Lyon et en Rhône-Alpes",
    href: "/nos-evenements/semaine-qvct",
    deco: "bg-[#C9426B]",
    chip: "bg-[#C9426B]/90 text-white",
  },
  {
    id: "journee-seminaire",
    title: "Journée séminaire",
    description:
      "Transformez votre séminaire d'entreprise en un moment de travail collectif vivant et mémorable. Podium intervient à Lyon et en Rhône-Alpes pour co-animer vos journées de travail : ateliers de cohésion d'équipe, intelligence collective, prise de parole, formats participatifs. Moins de réunions passives, plus d'énergie et de résultats.",
    image: "/images/seminaire-podium-2.jpg",
    imageAlt: "Séminaire d'entreprise animé par Podium à Lyon et en Rhône-Alpes",
    href: "/nos-evenements/journee-seminaire",
    deco: "bg-[#FFD25D]",
    chip: "bg-[#FFD25D]/95 text-[#061952]",
  },
]

export function EvenementsHubDetails() {
  return (
    <section id="details" className="scroll-mt-20 py-16 md:py-24 bg-[#fafbfe] relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-45px] top-28 hidden xl:block w-48 h-48 rounded-[38px] border-2 border-[#57B3B7]/25" />
        <div className="absolute left-[-50px] bottom-32 hidden xl:block w-44 h-44 rounded-[36px] bg-[#FFD25D]/15" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
            En détail
          </span>
          <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-5xl mt-4 mb-4">
            Découvrez nos événements en{" "}
            <span className="relative inline-block">
              <span className="relative z-10">détail</span>
              <span className="absolute left-0 right-0 bottom-1 h-3.5 bg-[#FFD25D] z-0 rounded-sm" />
            </span>
          </h2>
        </Reveal>

        <div className="space-y-16 lg:space-y-20 max-w-7xl mx-auto">
          {details.map((d, i) => {
            const reversed = i % 2 === 1
            return (
              <div
                key={d.id}
                className={`grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center ${
                  reversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Visual */}
                <Reveal x={reversed ? 40 : -40} className="[direction:ltr]">
                  <div className="relative max-w-md mx-auto lg:max-w-[480px] w-full">
                    <div className={`absolute -top-5 ${reversed ? "-left-4" : "-right-4"} w-28 h-28 rounded-3xl z-0 hidden sm:block ${d.deco}`} />
                    <div className={`absolute -bottom-6 ${reversed ? "-right-5" : "-left-5"} w-20 h-20 rounded-3xl bg-[#061952] z-0 hidden sm:block`} />
                    <div className="group relative z-10 rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(6,25,82,0.16)] aspect-[4/3]">
                      <Image
                        src={d.image}
                        alt={d.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </Reveal>

                {/* Texte */}
                <Reveal x={reversed ? -40 : 40} delay={120} className="[direction:ltr]">
                  <span className={`inline-flex items-center font-poppins font-semibold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-[0.08em] ${d.chip}`}>
                    Événement
                  </span>
                  <h3 className="font-poppins font-extrabold text-[#061952] tracking-tight leading-[1.1] text-3xl md:text-4xl mt-4 mb-5">
                    {d.title}
                  </h3>
                  <p className="text-[16px] text-gray-600 leading-relaxed max-w-xl mb-7">{d.description}</p>
                  <Link
                    href={d.href}
                    className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-[15px] px-7 py-3.5 rounded-full bg-[#061952] text-white transition-all duration-300 hover:bg-[#0a2068] hover:-translate-y-0.5"
                  >
                    En savoir plus
                    <ArrowRight className="w-[18px] h-[18px]" />
                  </Link>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ============ Pourquoi nous faire confiance ============ */

export function EvenementsConfiance() {
  return (
    <section className="py-16 md:py-24 bg-[#061952] relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -right-12 w-56 h-56 rounded-[44px] border-2 border-[#FFD25D]/20" />
        <div className="absolute -bottom-14 -left-10 w-44 h-44 rounded-[36px] bg-[#C9426B]/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#FFD25D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
            Nos engagements
          </span>
          <h2 className="font-poppins font-bold text-white tracking-tight text-3xl md:text-5xl mt-4">
            Pourquoi nous faire confiance ?
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Reveal delay={0} y={44} scale={0.96}>
            <div className="group h-full bg-white/[0.06] border border-white/10 rounded-[22px] p-8 transition-all duration-300 hover:bg-white/[0.1] hover:-translate-y-1.5">
              <span className="w-14 h-14 rounded-2xl bg-[#FFD25D] text-[#061952] inline-flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <Award className="w-7 h-7" />
              </span>
              <h3 className="font-poppins font-semibold text-xl text-[#FFD25D] mb-3">Des années d&apos;expérience</h3>
              <p className="text-[15.5px] text-white/80 leading-relaxed">
                PODIUM n&apos;en est pas à sa première réalisation. Et c&apos;est toujours avec la même passion et la
                même motivation que nous vous accompagnons dans la mise en place de vos actions. Être sur le terrain, au
                contact des clients, animer nos ateliers et accueillir les participants sont pour nous des moments
                forts et importants pour analyser et faire évoluer nos événements !
              </p>
            </div>
          </Reveal>
          <Reveal delay={130} y={44} scale={0.96}>
            <div className="group h-full bg-white/[0.06] border border-white/10 rounded-[22px] p-8 transition-all duration-300 hover:bg-white/[0.1] hover:-translate-y-1.5">
              <span className="w-14 h-14 rounded-2xl bg-[#57B3B7] text-white inline-flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <UserCheck className="w-7 h-7" />
              </span>
              <h3 className="font-poppins font-semibold text-xl text-[#FFD25D] mb-3">Un interlocuteur unique</h3>
              <p className="text-[15.5px] text-white/80 leading-relaxed">
                De la prise de contact à la clôture du projet nous tâcherons de vous mettre à disposition un chef de
                projet qui sera votre interlocuteur unique. Vous pourrez ainsi optimiser les temps d&apos;échanges,
                aller à l&apos;essentiel et travailler dans une relation de confiance !
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
