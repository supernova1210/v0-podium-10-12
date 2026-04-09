import type { Metadata } from "next"
import FormationsManagementHeroSection from "@/components/formations-management-hero-section"
import FormationsManagementApproche from "@/components/formations-management-approche"
import FormationsManagementCards from "@/components/formations-management-cards"
import FormationsManagementDeroulement from "@/components/formations-management-deroulement"
import FormationsManagementFAQ from "@/components/formations-management-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"

export const metadata: Metadata = {
  title: "Formations Management – Podium",
  description:
    "Des formations Management ludiques et innovantes pour renforcer l'engagement, prévenir les TMS et améliorer durablement la qualité de vie au travail.",
  openGraph: {
    title: "Formations Management – Podium",
    description:
      "Des formations Management ludiques et innovantes pour renforcer l'engagement, prévenir les TMS et améliorer durablement la qualité de vie au travail.",
    type: "website",
  },
}

export default function FormationsManagementPage() {
  return (
    <div>
      <FormationsManagementHeroSection />
      <FormationsManagementApproche />
      <FormationsManagementCards />
      <FormationsManagementDeroulement />
      <FormationsManagementFAQ />
      <ContactezNousSection />
    </div>
  )
}
