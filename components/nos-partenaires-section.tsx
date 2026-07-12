import Image from "next/image"
import Reveal from "@/components/reveal"

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

export default function NosPartenairesSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-50px] top-24 hidden xl:block w-40 h-40 rounded-[34px] bg-[#FFD25D]/15" />
        <div className="absolute right-[-45px] bottom-24 hidden xl:block w-44 h-44 rounded-[36px] border-2 border-[#57B3B7]/25" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#57B3B7]" />
            Ancrés dans le territoire
          </span>
          <h2 className="font-poppins font-bold tracking-tight text-3xl md:text-4xl text-[#061952] mt-4 mb-4">
            Nos partenaires et réseaux
          </h2>
          <p className="text-lg text-gray-600">
            PODIUM s&apos;engage activement dans la vie économique locale et développe des partenariats avec des acteurs
            du territoire de l&apos;Ain. À travers notre implication à Ambérieu-en-Bugey, à Bourg-en-Bresse et plus
            largement dans le département, nous participons aux dynamiques locales en faveur de la formation, de la
            prévention et de la qualité de vie au travail.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 100} y={36}>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-[22px] border border-gray-200 p-8 shadow-[0_4px_18px_rgba(6,25,82,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_40px_rgba(6,25,82,0.13)] hover:border-[#FFD25D]"
              >
                <div className="flex items-center justify-center h-24 mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={200}
                    height={96}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-center font-poppins font-medium text-sm text-gray-600 group-hover:text-[#061952] transition-colors duration-300">
                  {partner.name}
                </h3>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
