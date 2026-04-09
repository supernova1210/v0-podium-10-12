"use client"
import Link from "next/link"
import { PodiumButton } from "@/components/ui/podium-button"

const services = [
  {
    id: "formation",
    title: "Formation",
    subline: "Parcours structurés, certifiants ou sur catalogue.",
    image: "/images/page-accueil-formation-podium.jpg",
    href: "/formations-qvct",
  },
  {
    id: "atelier",
    title: "Atelier",
    subline: "Modules courts, participatifs et ludiques.",
    image: "/images/page-accueil-atelier-podium.jpg",
    href: "/nos-ateliers",
  },
  {
    id: "evenement",
    title: "Événement",
    subline: "Journées composées de plusieurs ateliers.",
    image: "/images/page-accueil-evenement-podium.jpg",
    href: "/nos-evenements",
  },
]

export default function ServicesCardsSection() {
  return (
    <section id="nos-solutions" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#061952] mb-6">Des solutions QVCT et prévention adaptées à vos enjeux</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            PODIUM propose des formations, ateliers et événements dédiés à la qualité de vie et des conditions de travail, à la prévention des risques et au bien-être des salariés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative h-80 md:h-96 rounded-2xl overflow-hidden will-change-transform transition-all duration-200 ease-out hover:scale-[1.02] hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              {/* Background Image (non interactif) */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Base content (non cliquable en desktop pour ne pas bloquer le panneau) */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 md:pointer-events-none">
                <h3 className="md:group-hover:opacity-0 md:group-hover:invisible transition-all duration-300 text-white text-3xl font-bold mb-2 drop-shadow-lg">
                  {service.title}
                </h3>

                {/* Mobile: subline + CTA visibles et cliquables */}
                <div className="md:hidden">
                  <p className="text-white/90 text-sm mb-3 drop-shadow">{service.subline}</p>
                  <div className="inline-block">
                    <Link href={service.href} aria-label={`Découvrir ${service.title}`}>
                      <PodiumButton
                        variant="primary"
                        size="default"
                        className="!px-4 !py-2 !text-sm cursor-pointer"
                        showArrow={true}
                      >
                        Découvrir
                      </PodiumButton>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Panneau jaune qui slide (au-dessus de tout en desktop) */}
              <div className="hidden md:block absolute inset-0 z-20 bg-[#FFD25D]/85 will-change-transform transform translate-y-full group-hover:translate-y-0 focus-within:translate-y-0 transition-transform duration-300 ease-out">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-[#061952]">
                  <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                  <p className="text-lg mb-4">{service.subline}</p>
                  <div className="inline-block">
                    <Link href={service.href} aria-label={`Découvrir ${service.title}`}>
                      <PodiumButton
                        variant="secondary"
                        size="default"
                        className="!bg-[#061952] !text-white hover:!bg-[#0a1f5c] cursor-pointer"
                        showArrow={true}
                      >
                        Découvrir
                      </PodiumButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
