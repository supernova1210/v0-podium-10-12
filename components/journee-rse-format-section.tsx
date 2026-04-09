export default function NotrePedagogieSection() {
  const pedagogieItems = [
    {
      icon: "/images/Picto_cocher.png",
      title: "Ancrer la RSE",
      alt: "Icône ancrer la RSE",
    },
    {
      icon: "/images/Pictogrammes_RSE.png",
      title: "Renforcer l'engagement",
      alt: "Icône renforcer l'engagement",
    },
    {
      icon: "/images/Picto_Safety.png",
      title: "Valoriser son image",
      alt: "Icône valoriser son image",
    },
  ]

  return (
    <section className="bg-[#061952] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-8">
            Pourquoi travailler avec Podium ?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Transformez votre journée sécurité en un événement marquant et fédérateur Nos ateliers ludiques, immersifs
            et personnalisés créent un vrai déclic chez vos équipes. Avec PODIUM, vous sensibilisez efficacement tout en
            renforçant la cohésion et l'engagement..
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {pedagogieItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <img
                  src={item.icon || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain object-center"
                />
              </div>
              <div className="text-white">
                <p className="text-xs md:text-sm font-semibold mb-1">NOTRE APPROCHE</p>
                <p className="text-sm md:text-base font-bold text-yellow-400">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
