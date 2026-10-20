import type { Metadata } from "next"
import { OG_BASE } from "@/lib/seo"
import PourquoiPodiumAboutSection from "@/components/pourquoi-podium-about-section"
import EvenementAtouts from "@/components/evenement/evenement-atouts"
import EvenementLocalNav from "@/components/evenement/evenement-local-nav"
import NosCoequipiersSection from "@/components/nos-coequipiers-section"
import NosPartenairesAboutSection from "@/components/nos-partenaires-about-section"
import NosReferencesSection from "@/components/nos-references-section"
import { ContactezNousSection } from "@/components/contactez-nous-section"

export const metadata: Metadata = {
  title: "Qui sommes-nous ? Formation QVCT Lyon & Ain",
  description:
    "Organisme de formation QVCT, prévention et sécurité implanté entre Lyon et l'Ain. Pédagogie active et ludique, dans vos locaux partout en Rhône-Alpes.",
  alternates: {
    canonical: "https://www.ofpodium.fr/about",
  },
  openGraph: {
    ...OG_BASE,
    title: "Qui sommes-nous ? Podium, organisme de formation QVCT Lyon & Ain",
    description:
      "Podium, organisme de formation QVCT, prévention et sécurité entre Lyon et l'Ain. Pédagogie active et ludique, intervention dans vos locaux en Rhône-Alpes.",
    url: "https://www.ofpodium.fr/about",
    type: "website",
  },
}

const navItems = [
  { id: "pourquoi-podium", label: "Pourquoi Podium", icon: "sparkles" },
  { id: "pedagogie", label: "Pédagogie", icon: "route" },
  { id: "coequipiers", label: "Coéquipiers", icon: "grid" },
  { id: "references", label: "Références", icon: "trending" },
  { id: "contact", label: "Contact", icon: "phone" },
]

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "L'interview du dirigeant de Podium",
  description:
    "Nicolas Billard, dirigeant de Podium, présente la vision de l'organisme de formation : une pédagogie active et ludique inspirée du sport collectif, au service de la QVCT, de la prévention et de la sécurité en entreprise.",
  thumbnailUrl: "https://www.ofpodium.fr/images/video-poster-interview-dirigeant.jpg",
  contentUrl: "https://www.ofpodium.fr/videos/interview-dirigeant-podium.mp4",
  uploadDate: "2026-07-06",
  duration: "PT1M50S",
  publisher: { "@type": "Organization", name: "Podium", url: "https://www.ofpodium.fr" },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <EvenementLocalNav items={navItems} />

      <div id="pourquoi-podium" className="scroll-mt-52">
        <PourquoiPodiumAboutSection />
      </div>
      <div id="pedagogie" className="scroll-mt-52">
        <EvenementAtouts
          eyebrow="Notre pédagogie"
          title="Notre pédagogie"
          description="Stop aux formations inadaptées trop théoriques dont on oublie rapidement le contenu. Notre pédagogie et nos approches ludiques vont rendre vos formations et vos événements impactants et mémorables !"
          items={[
            { icon: "/images/picto-cartes.png", title: "Méthodes innovantes", alt: "Icône méthodes innovantes" },
            { icon: "/images/picto-temps.webp", title: "Durées modulables", alt: "Icône durées modulables" },
            { icon: "/images/picto-personne-etoile.png", title: "Formateurs expérimentés", alt: "Icône formateurs expérimentés" },
            { icon: "/images/picto-zone.png", title: "En présentiel", alt: "Icône en présentiel" },
          ]}
        />
      </div>
      <div id="coequipiers" className="scroll-mt-52">
        <NosCoequipiersSection />
      </div>
      <div className="scroll-mt-52">
        <NosPartenairesAboutSection />
      </div>
      <div id="references" className="scroll-mt-52">
        <NosReferencesSection />
      </div>
      <div id="contact" className="scroll-mt-52">
        <ContactezNousSection />
      </div>
    </main>
  )
}
