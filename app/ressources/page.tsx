import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Clock, Download } from "lucide-react"
import Reveal from "@/components/reveal"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import { allRessources } from "@/lib/ressources"

export const metadata: Metadata = {
  title: "Ressources gratuites QVCT, prévention et sécurité au travail",
  description:
    "Les mémos et guides pratiques de Podium en accès libre : réveil musculaire en entreprise, gestes et postures, prévention des TMS. Les supports que nous remettons à nos participants.",
  alternates: { canonical: "https://www.ofpodium.fr/ressources" },
  openGraph: {
    title: "Ressources gratuites QVCT, prévention et sécurité | Podium",
    description:
      "Mémos et guides pratiques en accès libre : réveil musculaire, gestes et postures, prévention des TMS.",
    url: "https://www.ofpodium.fr/ressources",
    type: "website",
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Ressources Podium",
  description:
    "Mémos et guides pratiques en accès libre sur la QVCT, la prévention des TMS et la sécurité au travail.",
  url: "https://www.ofpodium.fr/ressources",
  hasPart: allRessources.map((r) => ({
    "@type": "Article",
    headline: r.metaTitle,
    description: r.metaDescription,
    url: `https://www.ofpodium.fr/ressources/${r.slug}`,
  })),
}

export default function RessourcesPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-10 pb-14 lg:pt-14 lg:pb-16">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-20 top-12 hidden lg:block w-64 h-64 rounded-[52px] bg-[#57B3B7]/10" />
          <div className="absolute -left-16 bottom-10 hidden lg:block w-40 h-40 rounded-[36px] bg-[#FFD25D]/15" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#57B3B7]" />
              Ressources · Accès libre
            </span>

            <h1 className="font-poppins font-extrabold text-[#061952] tracking-tight leading-[1.05] text-4xl md:text-6xl mt-4 mb-5">
              Nos mémos{" "}
              <span className="relative inline-block">
                <span className="relative z-10">en accès libre</span>
                <span className="absolute left-0 right-0 bottom-1 h-4 bg-[#FFD25D] z-0 rounded-sm" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Les supports que nous remettons aux participants de nos formations, partagés ici sans condition. Des
              contenus courts, concrets et utilisables dès demain sur le terrain.
            </p>
          </div>
        </div>
      </section>

      {/* Grille des ressources */}
      <section className="py-12 md:py-16 bg-[#fafbfe] relative">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-[-45px] top-24 hidden xl:block w-44 h-44 rounded-[36px] border-2 border-[#FFD25D]/40" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-7">
            {allRessources.map((r, i) => (
              <Reveal key={r.slug} delay={i * 110}>
                <Link
                  href={`/ressources/${r.slug}`}
                  className="group flex flex-col h-full bg-white rounded-[22px] border border-gray-200 overflow-hidden shadow-[0_4px_18px_rgba(6,25,82,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(6,25,82,0.14)]"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={r.cardImage}
                      alt={r.cardTitle}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 font-poppins font-semibold text-xs px-3 py-1.5 rounded-full backdrop-blur bg-[#57B3B7]/90 text-white">
                      <BookOpen className="w-3.5 h-3.5" />
                      {r.categoryLabel}
                    </span>
                    {r.pdf ? (
                      <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 font-poppins font-semibold text-xs px-3 py-1.5 rounded-full bg-white/90 text-[#061952]">
                        <Download className="w-3.5 h-3.5" />
                        PDF
                      </span>
                    ) : null}
                  </div>

                  <div className="flex flex-col flex-1 p-7">
                    <span className="inline-flex items-center gap-1.5 text-sm text-gray-500 mb-3">
                      <Clock className="w-4 h-4" />
                      {r.readingTime}
                    </span>
                    <h2 className="font-poppins font-semibold text-xl text-[#061952] leading-snug transition-colors duration-300 group-hover:text-[#2c6e72]">
                      {r.cardTitle}
                    </h2>
                    <p className="text-[15px] text-gray-600 leading-relaxed mt-2.5 flex-1">{r.cardDescription}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-poppins font-semibold text-[15px] text-[#061952]">
                      Lire la ressource
                      <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FFD25D] group-hover:border-[#FFD25D]">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="rounded-[22px] border-2 border-dashed border-[#061952]/15 bg-white/60 px-7 py-8 text-center">
              <p className="font-poppins font-semibold text-lg text-[#061952] mb-1.5">
                D&apos;autres mémos arrivent bientôt
              </p>
              <p className="text-[15px] text-gray-600">
                Santé mentale, communication non violente, prévention des addictions : nous publions progressivement
                nos supports de formation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactezNousSection />
    </main>
  )
}
