export default function SemaineQvctPourquoiPodium() {
  const items = [
    {
      icon: "/images/Picto_Evolution.png",
      title: "Ateliers sur mesure",
      alt: "Icône ateliers sur mesure",
    },
    {
      icon: "/images/picto-participants.png",
      title: "Formats adaptés à vos équipes",
      alt: "Icône formats adaptés",
    },
    {
      icon: "/images/picto-cartes.png",
      title: "Pédagogie active et ludique",
      alt: "Icône pédagogie ludique",
    },
    {
      icon: "/images/picto-de.png",
      title: "Intervenants experts terrain",
      alt: "Icône intervenants experts",
    },
  ]

  return (
    <section className="bg-[#061952] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-8">
            Pourquoi organiser votre semaine QVCT avec PODIUM ?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Transformez votre semaine QVCT en un événement fédérateur et impactant. Profitez de la semaine de la QVCT
            pour prendre du recul, renforcer la prévention et créer du lien entre vos collaborateurs. Construisez avec
            PODIUM des ateliers adaptés à vos métiers, vos horaires, vos postes de travail et vos contraintes terrain.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <img
                  src={item.icon || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-14 h-14 md:w-16 md:h-16 object-contain object-center"
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
