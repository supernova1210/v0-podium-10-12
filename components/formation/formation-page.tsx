import FormationHero from "./formation-hero"
import FormationApproche from "./formation-approche"
import VideoSection from "@/components/video-section"
import RessourceTeaser from "@/components/ressource/ressource-teaser"
import { RESSOURCES_PUBLIQUES } from "@/lib/ressources"
import FormationProgramme from "./formation-programme"
import FormationFAQ from "./formation-faq"
import { ContactezNousSection } from "@/components/contactez-nous-section"
import RelatedOffers from "@/components/related-offers"
import Breadcrumb from "@/components/seo/breadcrumb"
import JsonLd from "@/components/seo/json-ld"
import { breadcrumbLd, courseLd, faqLd, graphLd, formationPath, type Crumb } from "@/lib/seo"
import type { FormationData } from "@/lib/formations"

export default function FormationPage({ data }: { data: FormationData }) {
  const badges = [
    { icon: "/images/picto-temps.webp", label: "Durée", value: data.duree },
    { icon: "/images/picto-participants.png", label: "Participants", value: data.participantsFull },
    { icon: "/images/picto-zone.png", label: "Lieu", value: "Intra-entreprise" },
  ]

  const modalites = [
    { icon: "/images/picto_interactif.png", title: "Formation", subtitle: "intra-entreprise" },
    { icon: "/images/picto-temps.webp", title: "Durée", subtitle: data.duree },
    { icon: "/images/picto-participants.png", title: data.participantsTitle, subtitle: data.participantsSub },
    { icon: "/images/picto_prix.png", title: "Sur devis", subtitle: "tarif adapté" },
  ]

  const href = formationPath(data.slug)
  const crumbs: Crumb[] = [
    { label: "Accueil", href: "/" },
    data.category === "securite"
      ? { label: "Formations Sécurité", href: "/formations-securite" }
      : { label: "Formations QVCT", href: "/formations-qvct" },
    { label: data.cardTitle, href },
  ]
  const ld = graphLd(
    courseLd(data),
    ...(data.faq.length ? [faqLd(data.faq)] : []),
    breadcrumbLd(crumbs),
  )

  return (
    <main>
      <JsonLd data={ld} />
      <FormationHero
        breadcrumb={<Breadcrumb items={crumbs} />}
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
