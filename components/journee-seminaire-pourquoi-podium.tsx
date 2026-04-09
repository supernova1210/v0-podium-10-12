export default function JourneeSeminairePourquoiPodium() {
  const pedagogieItems = [
    {
      icon: "/images/Picto_Evolution.png",
      title: "Animation de réunion",
      alt: "Icône evolution",
    },
    {
      icon: "/images/picto-participants.png",
      title: "Rythme de la journée",
      alt: "Icône accompagnement",
    },
    {
      icon: "/images/picto-cartes.png",
      title: "Diversité des ateliers",
      alt: "Icône innovation",
    },
        {
      icon: "/images/picto-de.png",
      title: "Qualité des intervenants",
      alt: "Icône ludique",
    },
  ]

  return (
    <section className="bg-[#061952] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-8">
            Pourquoi être accompagné par PODIUM ?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Une journée de travail réussi, c’est une journée qui fait sens, qui crée du lien et qui donne envie d’avancer ensemble. Quand l’animation est vivante, le rythme juste et les échanges authentiques, chaque participant repart avec plus d’énergie et de motivation.
            Notre ambition : faire de vos séminaires un vrai levier de cohésion et de performance collective.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {pedagogieItems.map((item, index) => (
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
