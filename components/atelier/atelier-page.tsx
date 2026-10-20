import AtelierHero from "./atelier-hero"
import AtelierApproche from "./atelier-approche"
import VideoSection from "@/components/video-section"
import RessourceTeaser from "@/components/ressource/ressource-teaser"
import { RESSOURCES_PUBLIQUES } from "@/lib/ressources"
import AtelierProgramme from "./atelier-programme"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import RelatedOffers from "@/components/related-offers"
import Breadcrumb from "@/components/seo/breadcrumb"
import JsonLd from "@/components/seo/json-ld"
import { atelierPath, atelierServiceLd, breadcrumbLd, graphLd, type Crumb } from "@/lib/seo"
import type { AtelierData } from "@/lib/ateliers"
import type { AtelierAccent } from "./atelier-accents"

export default function AtelierPage({ data }: { data: AtelierData }) {
  const accent: AtelierAccent = data.category === "securite" ? "jaune" : "teal"
  const eyebrow = data.category === "securite" ? "Atelier Sécurité" : "Atelier QVCT"

  const badges = [
    { icon: "/images/picto-temps.webp", label: "Durée", value: data.duree },
    { icon: "/images/picto-participants.png", label: "Participants", value: data.participants },
    { icon: "/images/picto-zone.png", label: "Lieu", value: "Dans vos locaux" },
  ]

  const modalites = [
    { icon: "/images/picto_interactif.png", title: "Atelier", subtitle: "intra-entreprise" },
    { icon: "/images/picto-temps.webp", title: "Durée", subtitle: data.duree },
    { icon: "/images/picto-participants.png", title: "Participants", subtitle: data.participants },
    { icon: "/images/picto_prix.png", title: "Sur devis", subtitle: "tarif adapté" },
  ]

  const href = atelierPath(data.slug)
  const crumbs: Crumb[] = [
    { label: "Accueil", href: "/" },
    { label: "Ateliers", href: "/nos-ateliers" },
    { label: data.cardTitle, href },
  ]
  const ld = graphLd(atelierServiceLd(data), breadcrumbLd(crumbs))

  return (
    <main>
      <JsonLd data={ld} />
      <AtelierHero
        breadcrumb={<Breadcrumb items={crumbs} />}
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
      {RESSOURCES_PUBLIQUES && data.ressource ? (
        <RessourceTeaser
          href={data.ressource.href}
          title={data.ressource.title}
          description={data.ressource.description}
          image={data.ressource.image}
          readingTime={data.ressource.readingTime}
          accent={data.category === "securite" ? "jaune" : "teal"}
        />
      ) : null}
      <RelatedOffers href={href} />
      <ContactezNousSection />
    </main>
  )
}
