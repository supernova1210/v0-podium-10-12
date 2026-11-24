import type { Metadata } from "next"
import { OG_BASE, ORG_ID } from "@/lib/seo"
import { ContactHeroSection } from "@/components/contact-hero-section"
import { ContactFormSection } from "@/components/contact-form-section"

export const metadata: Metadata = {
  title: "Contact et devis formation QVCT & sécurité",
  description:
    "Formation, atelier ou journée sécurité : contactez Podium. Intervention dans vos locaux à Lyon, dans l'Ain et en Auvergne-Rhône-Alpes. Devis gratuit.",
  alternates: { canonical: "https://www.ofpodium.fr/contact" },
  openGraph: {
    ...OG_BASE,
    title: "Contact et devis formation QVCT & sécurité | Podium",
    description:
      "Formation, atelier ou journée sécurité : contactez Podium. Intervention dans vos locaux à Lyon, dans l'Ain et en Auvergne-Rhône-Alpes.",
    url: "https://www.ofpodium.fr/contact",
    type: "website",
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact et devis Podium",
  url: "https://www.ofpodium.fr/contact",
  inLanguage: "fr-FR",
  about: { "@id": ORG_ID },
  mainEntity: { "@id": ORG_ID },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ContactHeroSection />
      <ContactFormSection />
    </main>
  )
}
