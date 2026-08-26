import type { Metadata } from "next"
import PourquoiPodiumAboutSection from "@/components/pourquoi-podium-about-section"
import EvenementAtouts from "@/components/evenement/evenement-atouts"
import EvenementLocalNav from "@/components/evenement/evenement-local-nav"
import NosCoequipiersSection from "@/components/nos-coequipiers-section"
import NosPartenairesAboutSection from "@/components/nos-partenaires-about-section"
import NosReferencesSection from "@/components/nos-references-section"
import { ContactezNousSection } from "@/components/contactez-nous-section"

export const metadata: Metadata = {
  title: "À propos de Podium — Organisme de formation QVCT Lyon & Rhône-Alpes",
  description:
    "Découvrez Podium, organisme de formation spécialisé en QVCT, management et sécurité au travail. Basé à Lyon, nous intervenons dans toute la région Auvergne-Rhône-Alpes avec une pédagogie active et ludique.",
  alternates: {
    canonical: "https://www.ofpodium.fr/about",
  },
  openGraph: {
    title: "À propos de Podium — Organisme de formation QVCT Lyon & Rhône-Alpes",
    description:
      "Podium, organisme de formation en QVCT, management et sécurité. Pédagogie active et ludique, intervention dans vos locaux à Lyon et en Rhône-Alpes.",
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
            { icon: "/images/picto-temps.png", title: "Durées modulables", alt: "Icône durées modulables" },
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
