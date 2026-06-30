import type { Metadata } from "next"
import FormationPage from "@/components/formation/formation-page"
import { santeMentaleModule1 as data } from "@/lib/formations"

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: `https://www.ofpodium.fr/${data.slug}` },
  openGraph: { title: data.metaTitle, description: data.metaDescription, type: "website" },
}

export default function Page() {
  return <FormationPage data={data} />
}
