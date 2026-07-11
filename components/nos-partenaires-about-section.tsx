import Image from "next/image"

export default function NosPartenairesAboutSection() {
  const partners = [
    {
      name: "FLOW",
      logo: "/images/partners/logo-flow.jpeg",
      url: "https://www.flow-equiperf.com/",
      alt: "Logo FLOW - Équipe Performance",
    },
    {
      name: "WIWALL",
      logo: "/images/partners/logo-wiwall.jpg",
      url: "https://www.wiwall.fr/",
      alt: "Logo WIWALL",
    },
    {
      name: "INITIACTIV",
      logo: "/images/partners/logo-initiactiv.jpeg",
      url: "https://www.initiactiv-apa.com/",
      alt: "Logo InitiActiV - Activité Physique Adaptée",
    },
    {
      name: "NATURAL CORPORATE",
      logo: "/images/partners/logo-natural-corporate.png",
      url: "https://naturalcorporate.com/",
      alt: "Logo Natural Corporate",
    },
    {
      name: "OLYSTIK",
      logo: "/images/partners/logo-olystik.jpeg",
      url: "https://www.olystik-performance.fr/",
      alt: "Logo OLYSTIK - Accompagnement et Performance",
    },
    {
      name: "L'ESPRIT CO",
      logo: "/images/partners/logo-lesprit-co.jpeg",
      url: "https://colinedupras.fr/",
      alt: "Logo L'esprit Co",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-300 rounded-full opacity-15"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold tracking-tight text-3xl md:text-4xl text-[#061952] mb-4">Nos partenaires</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className="flex items-center justify-center h-24 mb-4">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.alt}
                  width={200}
                  height={96}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-700 group-hover:text-[#061952] transition-colors duration-300">
                  {partner.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
