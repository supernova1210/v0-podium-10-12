import FormationHero from "./formation-hero"
import FormationApproche from "./formation-approche"
import VideoSection from "@/components/video-section"
import RessourceTeaser from "@/components/ressource/ressource-teaser"
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
      {data.video ? (
        <VideoSection
          title="La formation en vidéo"
          src={data.video.src}
          poster={data.video.poster}
          videoTitle={data.video.title}
          description={data.video.description}
          duration={data.video.duration}
          isoDuration={data.video.iso}
        />
      ) : null}
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
      {data.ressource ? (
        <RessourceTeaser
          href={data.ressource.href}
          title={data.ressource.title}
          description={data.ressource.description}
          image={data.ressource.image}
          readingTime={data.ressource.readingTime}
          accent={data.category === "securite" ? "jaune" : "teal"}
        />
      ) : null}
      <ContactezNousSection />
    </main>
  )
}
