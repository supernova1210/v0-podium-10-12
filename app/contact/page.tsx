import type { Metadata } from "next"
import { ContactHeroSection } from "@/components/contact-hero-section"
import { ContactFormSection } from "@/components/contact-form-section"

export const metadata: Metadata = {
  title: "Contact et devis formation QVCT & sécurité",
  description:
    "Formation, atelier ou journée sécurité : contactez Podium. Intervention dans vos locaux à Lyon, dans l'Ain et en Auvergne-Rhône-Alpes. Devis gratuit.",
  alternates: { canonical: "https://www.ofpodium.fr/contact" },
  openGraph: {
    title: "Contact et devis formation QVCT & sécurité | Podium",
    description:
      "Formation, atelier ou journée sécurité : contactez Podium. Intervention dans vos locaux à Lyon, dans l'Ain et en Auvergne-Rhône-Alpes.",
    url: "https://www.ofpodium.fr/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHeroSection />
      <ContactFormSection />
    </main>
  )
}
