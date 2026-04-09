export default function NotrePedagogieSection() {
  const pedagogieItems = [
    {
      icon: "/images/picto-cartes.png",
      title: "MÉTHODES INNOVANTES",
      alt: "Icône méthodes innovantes",
    },
    {
      icon: "/images/picto-temps.png",
      title: "DURÉES MODULABLES",
      alt: "Icône durées modulables",
    },
    {
      icon: "/images/picto-personne-etoile.png",
      title: "FORMATEURS EXPÉRIMENTÉS",
      alt: "Icône formateurs expérimentés",
    },
    {
      icon: "/images/picto-zone.png",
      title: "EN PRÉSENTIEL",
      alt: "Icône en présentiel",
    },
  ]

  return (
    <section className="bg-[#061952] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-8">Notre pédagogie</h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Stop aux formations inadaptées trop théoriques dont on oublie rapidement le contenu. Notre pédagogie et nos
            approches ludiques vont rendre vos formations et vos événements impactants et mémorables !
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {pedagogieItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <img
                  src={item.icon || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-16 h-16 md:w-18 md:h-18 object-contain"
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
