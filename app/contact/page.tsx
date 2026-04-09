import type { Metadata } from "next"
import { ContactHeroSection } from "@/components/contact-hero-section"
import { ContactFormSection } from "@/components/contact-form-section"

export const metadata: Metadata = {
  title: "Contact - Podium",
  description:
    "Contactez Podium pour vos besoins en formation QVCT, management et sécurité. Nous sommes là pour vous accompagner.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHeroSection />
      <ContactFormSection />
    </main>
  )
}
