import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, GraduationCap, Puzzle, CalendarDays, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
}

const pistes = [
  {
    href: "/formations-qvct",
    label: "Formations QVCT",
    desc: "Santé mentale, communication, animation de réunion",
    icon: GraduationCap,
    accent: "bg-[#57B3B7]/15 text-[#2c6e72]",
  },
  {
    href: "/formations-securite",
    label: "Formations Sécurité",
    desc: "Gestes et postures, premiers secours, quart d'heure sécurité",
    icon: GraduationCap,
    accent: "bg-[#FFD25D]/25 text-[#8a6400]",
  },
  {
    href: "/nos-ateliers",
    label: "Nos ateliers",
    desc: "Des formats ludiques animés dans vos locaux",
    icon: Puzzle,
    accent: "bg-[#57B3B7]/15 text-[#2c6e72]",
  },
  {
    href: "/nos-evenements",
    label: "Nos événements",
    desc: "Journée sécurité, semaine QVCT, journée RSE, séminaire",
    icon: CalendarDays,
    accent: "bg-[#C9426B]/12 text-[#a3304f]",
  },
]

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-white relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-16 top-16 hidden lg:block w-64 h-64 rounded-[52px] bg-[#FFD25D]/20 rotate-6" />
        <div className="absolute -left-12 bottom-10 hidden lg:block w-44 h-44 rounded-[36px] border-2 border-[#57B3B7]/30" />
      </div>

      <section className="container mx-auto px-4 max-w-5xl relative z-10 pt-14 pb-20 lg:pt-20 lg:pb-24">
        <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9426B]" />
          Erreur 404
        </span>

        <h1 className="font-poppins font-extrabold text-[#061952] tracking-tight leading-[1.05] text-4xl md:text-6xl mt-4 mb-5 max-w-3xl">
          Cette page est sortie{" "}
          <span className="relative inline-block">
            <span className="relative z-10">du terrain</span>
            <span className="absolute left-0 right-0 bottom-1.5 h-4 bg-[#FFD25D] z-0 rounded-sm" />
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-10">
          Le lien est peut-être ancien, ou l&apos;adresse a été mal saisie. Pas de panique, voici de quoi reprendre la
          partie.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {pistes.map((p) => {
            const Icon = p.icon
            return (
              <Link
                key={p.href}
                href={p.href}
                className="group flex items-start gap-4 bg-white rounded-[22px] border border-gray-200 p-5 shadow-[0_4px_18px_rgba(6,25,82,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(6,25,82,0.14)]"
              >
                <span className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${p.accent}`}>
                  <Icon className="w-6 h-6" />
                </span>
                <span className="flex-1">
                  <span className="block font-poppins font-semibold text-lg text-[#061952]">{p.label}</span>
                  <span className="block text-[15px] text-gray-600 mt-0.5">{p.desc}</span>
                </span>
                <ArrowRight className="w-5 h-5 text-[#061952] mt-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )
          })}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-poppins font-semibold text-[15px] px-6 py-3 rounded-full bg-[#061952] text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Retour à l&apos;accueil
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:0770003672"
            className="inline-flex items-center gap-2 font-poppins font-semibold text-[15px] px-6 py-3 rounded-full bg-[#FFD25D] text-[#061952] transition-all duration-300 hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            07 70 00 36 72
          </a>
        </div>
      </section>
    </main>
  )
}
