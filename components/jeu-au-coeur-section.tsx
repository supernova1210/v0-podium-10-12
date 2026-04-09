export default function JeuAuCoeurSection() {
  const atelierTypes = [
    {
      icon: "/images/picto-de.png",
      title: "JEU DE PLATEAU",
      alt: "Icône jeu de plateau",
    },
    {
      icon: "/images/picto-mur-digital.png",
      title: "MUR DIGITALE",
      alt: "Icône mur digital",
    },
    {
      icon: "/images/pictogrammes-casque-pause.png",
      title: "BLIND TEST",
      alt: "Icône blind test",
    },
    {
      icon: "/images/picto-jeux.png",
      title: "JEU SUR TABLE",
      alt: "Icône jeu sur table",
    },
    {
      icon: "/images/picto-bienetre-travail.png",
      title: "PRATIQUE SPORTIVE",
      alt: "Icône pratique sportive",
    },
  ]

  return (
    <section className="bg-[#061952] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Le jeu au cœur de nos ateliers</h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Chaque atelier est unique, conçu sur-mesure pour répondre à vos besoins spécifiques. Grâce à une approche
            ludique et innovante, nous transformons l'apprentissage en une expérience captivante et inclusive. Le jeu
            devient bien plus qu'un simple divertissement : il s'impose comme un outil pédagogique puissant, favorisant
            l'implication de tous. Nos ateliers allient créativité, interactivité et expertise pour faire passer des
            messages sérieux avec légèreté et impact.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {atelierTypes.map((type, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <img
                  src={type.icon || "/placeholder.svg"}
                  alt={type.alt}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </div>
              <div className="text-white">
                <p className="text-xs md:text-sm font-semibold mb-1">ATELIER TYPE</p>
                <p className="text-sm md:text-base font-bold text-yellow-400">{type.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
