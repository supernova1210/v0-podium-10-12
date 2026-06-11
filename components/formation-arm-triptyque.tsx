import { PodiumButton } from "@/components/ui/podium-button"
import { Download } from "lucide-react"
import Image from "next/image"

export default function FormationArmTriptyque() {
  const panels = [
    {
      src: "/images/triptyque-reveil-musculaire-1.png",
      alt: "Triptyque Réveil Musculaire - Pourquoi s'échauffer et chiffres clés",
    },
    {
      src: "/images/triptyque-reveil-musculaire-2.png",
      alt: "Triptyque Réveil Musculaire - Exercices nuque, épaules, coudes, poignets, bassin",
    },
    {
      src: "/images/triptyque-reveil-musculaire-3.png",
      alt: "Triptyque Réveil Musculaire - Exercices cuisses, mollets, chevilles et pour aller plus loin",
    },
  ]

  return (
    <section id="triptyque" className="scroll-mt-20 py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#061952] mb-6">Le triptyque Réveil Musculaire</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            Un support pédagogique remis à vos ambassadeurs : pourquoi s'échauffer, les chiffres clés et les 7
            exercices du réveil musculaire à reproduire en entreprise, assis ou debout.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {panels.map((panel, index) => (
              <div
                key={index}
                className="relative aspect-[585/1241] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white"
              >
                <Image
                  src={panel.src || "/placeholder.svg"}
                  alt={panel.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  quality={90}
                />
              </div>
            ))}
          </div>

          <PodiumButton
            href="/documents/brochure-reveil-musculaire-triptyque.pdf"
            target="_blank"
            showArrow={false}
            className="whitespace-nowrap px-6 py-3"
          >
            <span>Télécharger le triptyque (PDF)</span>
            <Download className="w-5 h-5 ml-3 flex-shrink-0" />
          </PodiumButton>
        </div>
      </div>
    </section>
  )
}
