import type { Metadata } from "next"
import { formationMetadata } from "@/lib/seo"
import FormationPage from "@/components/formation/formation-page"
import { santeMentaleModule2 as data } from "@/lib/formations"

export const metadata: Metadata = formationMetadata(data)

export default function Page() {
  return <FormationPage data={data} />
}
