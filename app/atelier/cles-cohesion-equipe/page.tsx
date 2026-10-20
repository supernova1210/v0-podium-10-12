import type { Metadata } from "next"
import { atelierMetadata } from "@/lib/seo"
import AtelierPage from "@/components/atelier/atelier-page"
import { clesCohesionEquipe as data } from "@/lib/ateliers"

export const metadata: Metadata = atelierMetadata(data)

export default function Page() {
  return <AtelierPage data={data} />
}
