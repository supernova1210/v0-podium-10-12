import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Linkedin } from "lucide-react"

const colonnes = [
  {
    title: "Formations",
    links: [
      { label: "Formations QVCT", href: "/formations-qvct" },
      { label: "Formations Sécurité", href: "/formations-securite" },
    ],
  },
  {
    title: "Ateliers",
    links: [
      { label: "Tous nos ateliers", href: "/nos-ateliers" },
      { label: "Escape Game Sécurité", href: "/atelier/escape-game-securite" },
      { label: "Théâtre d'impro santé mentale", href: "/atelier/theatre-impro-sante-mentale" },
    ],
  },
  {
    title: "Événements",
    links: [
      { label: "Journée Sécurité", href: "/nos-evenements/journee-securite" },
      { label: "Journée RSE", href: "/nos-evenements/journee-rse" },
      { label: "Semaine QVCT", href: "/nos-evenements/semaine-qvct" },
      { label: "Journée Séminaire", href: "/nos-evenements/journee-seminaire" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#061952] text-white">
      {/* Bande d'accent, miroir du header */}
      <div aria-hidden className="flex h-1 w-full">
        <div className="w-[55%] bg-[#FFD25D]" />
        <div className="w-[25%] bg-[#57B3B7]" />
        <div className="flex-1 bg-[#C9426B]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-8">
        <div className="grid gap-10 lg:gap-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {/* Marque + contact */}
          <div>
            <Image
              src="/images/podium-logo-white.svg"
              alt="PODIUM - Organisme de formation"
              width={200}
              height={100}
              className="h-14 w-auto"
            />
            <p className="text-[15px] text-white/70 leading-relaxed mt-4 max-w-xs">
              Organisme de formation QVCT, prévention et sécurité. Des formats ludiques et participatifs, animés
              directement dans vos locaux.
            </p>
            <div className="mt-5 space-y-2.5 text-[15px]">
              <a href="tel:0770003672" className="flex items-center gap-2.5 text-white/80 hover:text-[#FFD25D] transition-colors">
                <Phone className="w-4 h-4 text-[#FFD25D]" />
                07 70 00 36 72
              </a>
              <a href="mailto:nicolas@ofpodium.fr" className="flex items-center gap-2.5 text-white/80 hover:text-[#FFD25D] transition-colors">
                <Mail className="w-4 h-4 text-[#FFD25D]" />
                nicolas@ofpodium.fr
              </a>
              <span className="flex items-center gap-2.5 text-white/80">
                <MapPin className="w-4 h-4 text-[#FFD25D]" />
                36 rue des Apôtres, 01500 Ambérieu-en-Bugey
              </span>
            </div>
            <a
              href="https://www.linkedin.com/company/of-podium/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn PODIUM"
              className="mt-5 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.08] border border-white/10 text-white transition-all duration-300 hover:bg-[#0077B5] hover:-translate-y-0.5"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Colonnes de navigation */}
          {colonnes.map((col) => (
            <div key={col.title}>
              <h3 className="font-poppins font-semibold text-sm tracking-[0.12em] uppercase text-[#FFD25D] mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-[15px] text-white/75 hover:text-white hover:underline underline-offset-4 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Barre du bas */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-white/60">
          <p>
            Copyright ©2026 O.F PODIUM (PODIUM), tous droits réservés.{" "}
            <Link href="/mentions-legales" className="text-[#FFD25D] hover:underline">
              Mentions légales &amp; RGPD
            </Link>
          </p>
          <p>
            Réalisation <span className="text-[#FFD25D]">Podium®</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
