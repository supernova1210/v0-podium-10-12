import type { Metadata } from "next"
import FormationsQvctHeroSection from "@/components/formations-qvct-hero-section"
import FormationsQvctApproche from "@/components/formations-qvct-approche"
import FormationsQvctCards from "@/components/formations-qvct-cards"
import FormationsQvctDeroulement from "@/components/formations-qvct-deroulement"
import FormationsQvctFAQ from "@/components/formations-qvct-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"

export const metadata: Metadata = {
  title: "Formations QVCT – Podium",
  description:
    "Des formations QVCT ludiques et innovantes pour renforcer l'engagement, prévenir les TMS et améliorer durablement la qualité de vie au travail.",
  openGraph: {
    title: "Formations QVCT – Podium",
    description:
      "Des formations QVCT ludiques et innovantes pour renforcer l'engagement, prévenir les TMS et améliorer durablement la qualité de vie au travail.",
    type: "website",
  },
}

export default function FormationsQVCTPage() {
  return (
    <div>
      <FormationsQvctHeroSection />
      <FormationsQvctApproche />
      <FormationsQvctCards />
      <FormationsQvctDeroulement />
      <FormationsQvctFAQ />
      <ContactezNousSection />
    </div>
  )
}
