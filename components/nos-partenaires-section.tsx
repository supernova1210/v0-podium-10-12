import Image from "next/image"

export default function NosPartenairesSection() {
  const partners = [
    {
      name: "CPME AIN",
      logo: "/images/logo-cpme.svg",
      url: "https://www.cpmeain.fr/",
      alt: "Logo CPME AIN - Confédération des Petites et Moyennes Entreprises de l'Ain",
    },
    {
      name: "Les entreprises s'engagent Ain",
      logo: "/images/les-entreprises-s-engagent-logo.webp",
      url: "https://lesentreprises-sengagent.gouv.fr/clubs/01",
      alt: "Logo Les entreprises s'engagent - Club de l'Ain",
    },
    {
      name: "France Initiative",
      logo: "/images/france-initiative-logo.png",
      url: "https://www.initiative-plainedelaincotiere.com/",
      alt: "Logo France Initiative - Réseau Initiative Plaine de l'Ain Côtière",
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
          <h2 className="font-poppins font-bold tracking-tight text-3xl md:text-4xl text-[#061952] mb-4">Nos partenaires et réseaux</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            PODIUM s’engage activement dans la vie économique locale et développe des partenariats avec des acteurs du territoire de l’Ain.
            À travers notre implication à Ambérieu-en-Bugey, à Bourg-en-Bresse et plus largement dans le département, nous participons aux dynamiques locales en faveur de la formation, de la prévention et de la qualité de vie au travail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
