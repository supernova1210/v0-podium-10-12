import type { Metadata } from "next"
import AtelierPage from "@/components/atelier/atelier-page"
import { cnvAgressiviteVerbale as data } from "@/lib/ateliers"

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: `/atelier/${data.slug}` },
  openGraph: { title: data.metaTitle, description: data.metaDescription, type: "website" },
}

export default function Page() {
  return <AtelierPage data={data} />
}
