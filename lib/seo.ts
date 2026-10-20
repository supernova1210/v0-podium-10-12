import type { Metadata } from "next"
import type { FormationData } from "@/lib/formations"
import type { AtelierData } from "@/lib/ateliers"

export const SITE_URL = "https://www.ofpodium.fr"
export const ORG_ID = `${SITE_URL}/#organisation`

/** Image de partage par défaut (LinkedIn, Facebook…), générée dans public/og/ */
export const DEFAULT_OG_IMAGE = {
  url: "/og/podium.jpg",
  width: 1200,
  height: 630,
  alt: "Podium, organisme de formation QVCT, prévention et sécurité à Lyon et dans l'Ain",
}

/**
 * Base Open Graph à étaler dans chaque `openGraph` de page.
 * Dans Next.js, un `openGraph` de page remplace entièrement celui du layout :
 * sans cette base, la page perd l'image, le nom du site et la langue.
 */
export const OG_BASE = {
  type: "website" as const,
  locale: "fr_FR",
  siteName: "Podium",
  images: [DEFAULT_OG_IMAGE],
}

function detailMetadata({
  title,
  description,
  path,
  ogImage,
}: {
  title: string
  description: string
  path: string
  ogImage: string
}): Metadata {
  const url = `${SITE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...OG_BASE,
      url,
      title: `${title} | Podium`,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
  }
}

export const formationPath = (slug: string) => `/${slug}`
export const atelierPath = (slug: string) => `/atelier/${slug}`

export function formationMetadata(data: FormationData): Metadata {
  return detailMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: formationPath(data.slug),
    ogImage: `/og/${data.slug}.jpg`,
  })
}

export function atelierMetadata(data: Pick<AtelierData, "slug" | "metaTitle" | "metaDescription">): Metadata {
  return detailMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: atelierPath(data.slug),
    ogImage: `/og/atelier-${data.slug}.jpg`,
  })
}

/* ---------- Données structurées (JSON-LD) ---------- */

export interface Crumb {
  label: string
  href: string
}

const provider = { "@type": "Organization", "@id": ORG_ID, name: "Podium", url: SITE_URL }

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href === "/" ? "" : c.href}`,
    })),
  }
}

export function faqLd(faq: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }
}

export function courseLd(data: FormationData) {
  return {
    "@type": "Course",
    name: data.metaTitle,
    description: data.metaDescription,
    url: `${SITE_URL}${formationPath(data.slug)}`,
    image: `${SITE_URL}/og/${data.slug}.jpg`,
    inLanguage: "fr",
    provider,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      location: { "@type": "Place", name: "Dans les locaux de l'entreprise, à Lyon, dans l'Ain et en Auvergne-Rhône-Alpes" },
    },
  }
}

export function atelierServiceLd(data: {
  slug: string
  metaTitle: string
  metaDescription: string
  category: "qvct" | "securite"
}) {
  return {
    "@type": "Service",
    name: data.metaTitle,
    serviceType: data.category === "securite" ? "Atelier de prévention et sécurité au travail" : "Atelier QVCT en entreprise",
    description: data.metaDescription,
    url: `${SITE_URL}${atelierPath(data.slug)}`,
    image: `${SITE_URL}/og/atelier-${data.slug}.jpg`,
    provider,
    areaServed: [
      { "@type": "City", name: "Lyon" },
      { "@type": "AdministrativeArea", name: "Ain" },
      { "@type": "AdministrativeArea", name: "Auvergne-Rhône-Alpes" },
    ],
  }
}

export function graphLd(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes }
}
