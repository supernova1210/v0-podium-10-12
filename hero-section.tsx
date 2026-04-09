import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
          {/* Mobile: Image first */}
          <div className="relative lg:hidden mb-8">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Formation en sécurité et bien-être"
                fill
                className="object-cover"
              />
              {/* Mobile overlay for text readability */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>

          {/* Text Content - Left Column */}
          <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#061952] leading-tight font-['Poppins',_'Fredoka',_sans-serif]">
                Accompagnez vos équipes autrement avec PODIUM
              </h1>

              <h2 className="text-lg md:text-xl text-gray-700 max-w-[700px] leading-relaxed">
                Des formations et des évènements en sécurité et bien-être conçues pour marquer les esprits. Ludique,
                impactant et participatif – parce que la formation doit être un moment d'engagement et de plaisir.
              </h2>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#061952] text-white font-bold uppercase text-sm tracking-wide rounded-lg hover:bg-[#061952]/90 transition-colors duration-200 w-full sm:w-auto"
                >
                  Nos solutions
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#FFCC5A] text-[#061952] font-bold uppercase text-sm tracking-wide rounded-lg hover:bg-[#FFCC5A]/90 transition-colors duration-200 w-full sm:w-auto"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Image - Right Column (Desktop only) */}
          <div className="relative hidden lg:block">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=700&width=600"
                alt="Formation en sécurité et bien-être"
                fill
                className="object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
