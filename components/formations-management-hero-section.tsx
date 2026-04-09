import Image from "next/image"
import { PodiumButton } from "@/components/ui/podium-button"

export default function FormationsManagementHeroSection() {
  return (
    <section id="hero" className="scroll-mt-20 w-full bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mobile: Images first */}
          <div className="relative lg:hidden mb-8">
            <div className="grid grid-cols-2 gap-2 h-[300px]">
              <div className="relative overflow-hidden rounded-lg row-span-2">
                <Image
                  src="/images/atelier-communication-non-violente-CNV-min.jpg"
                  alt="Formation Management"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image src="/images/atelier-cohesion-min.jpg" alt="Atelier cohésion" fill className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/atelier-CNV-agressivite-physique.jpg"
                  alt="Formation CNV"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6 max-w-[500px]">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#061952] leading-[1.1] tracking-tight">
              Formez vos managers de demain avec des outils pratiques et modernes
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Découvrez nos formations innovantes en management pour des équipes performantes et épanouies !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PodiumButton href="https://calendly.com/nicolas-ofpodium/30min" variant="primary">
                Prendre rendez-vous
              </PodiumButton>
              <PodiumButton href="/contact" variant="outline">
                Contact
              </PodiumButton>
            </div>
          </div>

          {/* Formation Images - Right Column (Desktop only) */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4 h-full p-8">
              {/* Left column - tall vertical image */}
              <div className="relative h-full min-h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/images/atelier-communication-non-violente-CNV-min.jpg"
                  alt="Formation Techniques d'animation"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Right column - 2 stacked images */}
              <div className="flex flex-col gap-4">
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/images/atelier-cohesion-min.jpg"
                    alt="Formation Lancer et dynamiser une réunion"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/images/atelier-CNV-agressivite-physique.jpg"
                    alt="Formation S'affirmer avec confiance – CNV"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
