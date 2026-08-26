import AtelierHero from "./atelier-hero"
import AtelierApproche from "./atelier-approche"
import VideoSection from "@/components/video-section"
import AtelierProgramme from "./atelier-programme"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import type { AtelierData } from "@/lib/ateliers"
import type { AtelierAccent } from "./atelier-accents"

export default function AtelierPage({ data }: { data: AtelierData }) {
  const accent: AtelierAccent = data.category === "securite" ? "jaune" : "teal"
  const eyebrow = data.category === "securite" ? "Atelier Sécurité" : "Atelier QVCT"

  const badges = [
    { icon: "/images/picto-temps.png", label: "Durée", value: data.duree },
    { icon: "/images/picto-participants.png", label: "Participants", value: data.participants },
    { icon: "/images/picto-zone.png", label: "Lieu", value: "Dans vos locaux" },
  ]

  const modalites = [
    { icon: "/images/picto_interactif.png", title: "Atelier", subtitle: "intra-entreprise" },
    { icon: "/images/picto-temps.png", title: "Durée", subtitle: data.duree },
    { icon: "/images/picto-participants.png", title: "Participants", subtitle: data.participants },
    { icon: "/images/picto_prix.png", title: "Sur devis", subtitle: "tarif adapté" },
  ]

  return (
    <main>
      <AtelierHero
        accent={accent}
        eyebrow={eyebrow}
        titlePrefix={data.titlePrefix}
        titleHighlight={data.titleHighlight}
        titleSuffix={data.titleSuffix}
        description={data.heroDescription}
        badges={badges}
        image={data.heroImage}
        imageAlt={data.cardTitle}
      />
      <AtelierApproche
        accent={accent}
        headingPre={data.approcheHeadingPre}
        headingHighlight={data.approcheHeadingHighlight}
        paragraphs={data.approcheParagraphs}
        stats={data.stats}
      />
      {data.video ? (
        <VideoSection
          title="L'atelier en vidéo"
          src={data.video.src}
          poster={data.video.poster}
          videoTitle={data.video.title}
          description={data.video.description}
          duration={data.video.duration}
          isoDuration={data.video.iso}
          dotColor={data.category === "securite" ? "bg-[#FFD25D]" : "bg-[#57B3B7]"}
        />
      ) : null}
      <AtelierProgramme
        accent={accent}
        subtitle={data.heroDescription}
        objectifs={data.objectifs}
        deroule={data.deroule}
        methodes={data.methodes}
        espace={data.espace}
        modalites={modalites}
        pdfHref={data.pdf}
      />
      <ContactezNousSection />
    </main>
  )
}
