import FormationHero from "./formation-hero"
import FormationApproche from "./formation-approche"
import FormationProgramme from "./formation-programme"
import FormationFAQ from "./formation-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import type { FormationData } from "@/lib/formations"

export default function FormationPage({ data }: { data: FormationData }) {
  const badges = [
    { icon: "/images/picto-temps.png", label: "Durée", value: data.duree },
    { icon: "/images/picto-participants.png", label: "Participants", value: data.participantsFull },
    { icon: "/images/picto-zone.png", label: "Lieu", value: "Intra-entreprise" },
  ]

  const modalites = [
    { icon: "/images/picto_interactif.png", title: "Formation", subtitle: "intra-entreprise" },
    { icon: "/images/picto-temps.png", title: "Durée", subtitle: data.duree },
    { icon: "/images/picto-participants.png", title: data.participantsTitle, subtitle: data.participantsSub },
    { icon: "/images/picto_prix.png", title: "Sur devis", subtitle: "tarif adapté" },
  ]

  return (
    <main>
      <FormationHero
        eyebrow={data.heroEyebrow}
        titleHighlight={data.titleHighlight}
        titleSuffix={data.titleSuffix}
        description={data.heroDescription}
        badges={badges}
        image={data.heroImage}
        imageAlt={data.metaTitle}
        floatTitle={data.floatTitle}
        floatSubtitle={data.floatSubtitle}
      />
      <FormationApproche
        headingPre={data.approcheHeadingPre}
        headingHighlight={data.approcheHeadingHighlight}
        paragraphs={data.approcheParagraphs}
        stats={data.stats}
      />
      <FormationProgramme
        subtitle={data.programmeSubtitle}
        objectifs={data.objectifs}
        programme={data.programme}
        methodes={data.methodes}
        suiviParagraph={data.suiviParagraph}
        suiviCertificate={data.suiviCertificate}
        modalites={modalites}
        pdfHref={data.pdf}
      />
      <FormationFAQ faqData={data.faq} />
      <ContactezNousSection />
    </main>
  )
}
