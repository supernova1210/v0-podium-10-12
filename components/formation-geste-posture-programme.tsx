import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PodiumButton } from "@/components/ui/podium-button"
import { Download, Target, Book, FileText } from "lucide-react"
import Image from "next/image"

export default function FormationGestePostureProgramme() {
  const objectifs = [
    "Donner du sens à la sécurité posturale en intégrant les enjeux et risques associés.",
    "Évaluer ses postures et son environnement de travail pour limiter les conséquences.",
    "Agir en changeant ses comportements de manières systématiques et durables lors de situations définies.",
  ]

  const programme = [
    "Analyser et interpréter les enjeux liés à la gestion des Postures et Gestes professionnels.",
    "Ancrer les origines corporelles associées aux postures de travail",
    "Développer un regard critique sur son environnement de travail",
    "Mettre en pratique et développer l'auto-évaluation",
    "Se questionner sur ses pratiques au quotidien sur le sommeil et l'hygiène de vie",
  ]

  const modalites = [
    {
      icon: "/images/picto_interactif.png",
      title: "Formation",
      subtitle: "intra-entreprise",
    },
    {
      icon: "/images/picto-temps.png",
      title: "Durée :",
      subtitle: "3h30 ou 7h",
    },
    {
      icon: "/images/picto-participants.png",
      title: "6 à 12 participants",
    },
    {
      icon: "/images/picto_prix.png",
      title: "Sur devis",
    },
  ]

  return (
    <section id="programme" className="scroll-mt-20 py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#061952] text-center mb-16">Programme</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-white shadow-lg border border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FFD25D] rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-[#061952]" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-[#061952]">Objectifs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {objectifs.map((objectif, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-[#FFD25D] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{objectif}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#061952] rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-[#061952]">Programme</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {programme.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-[#061952] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-white shadow-lg border border-gray-200 h-fit sticky top-8">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 bg-[#061952] rounded-xl flex items-center justify-center">
                      <Book className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-[#061952]">Modalités</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    {modalites.map((modalite, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-200"
                      >
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4">
                          <Image
                            src={modalite.icon || "/placeholder.svg"}
                            alt={modalite.title}
                            width={64}
                            height={64}
                            className="w-16 h-16"
                          />
                        </div>
                        <div className="text-sm font-semibold text-[#061952] leading-tight">
                          <div>{modalite.title}</div>
                          {modalite.subtitle && <div className="mt-1">{modalite.subtitle}</div>}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <PodiumButton href="/contact" className="w-full">
                      Demander un devis
                    </PodiumButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Pour découvrir le programme complet et l'ensemble des activités, téléchargez la maquette.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto">
              <PodiumButton
                href="/documents/programme-geste-et-posture-3-30h.pdf"
                target="_blank"
                showArrow={false}
                className="whitespace-nowrap px-6 py-3"
              >
                <span>Télécharger la maquette 3h30 (PDF)</span>
                <Download className="w-5 h-5 ml-3 flex-shrink-0" />
              </PodiumButton>

              <PodiumButton
                href="/documents/programme-geste-et-posture-7h.pdf"
                target="_blank"
                showArrow={false}
                className="whitespace-nowrap px-6 py-3"
              >
                <span>Télécharger la maquette 7h (PDF)</span>
                <Download className="w-5 h-5 ml-3 flex-shrink-0" />
              </PodiumButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
