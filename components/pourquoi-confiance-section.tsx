export default function PourquoiConfianceSection() {
  return (
    <section className="py-20 bg-[#061952] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#FFD25D]"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-[#FFD25D]"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-[#FFD25D]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFD25D] mb-4">Pourquoi nous faire confiance ?</h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Des années d'expérience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#FFD25D]">Des années d'expérience</h3>
            <p className="text-white text-lg leading-relaxed">
              PODIUM n'en est pas à sa première réalisation. Et c'est toujours avec la même passion et la même
              motivation que nous vous accompagnons dans la mise en place de vos actions. Être sur le terrain, au
              contact des clients, animer nos ateliers et accueillir les participants sont pour nous des moments forts
              et importants pour analyser et faire évoluer nos événements !
            </p>
          </div>

          {/* Un interlocuteur unique */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#FFD25D]">Un interlocuteur unique</h3>
            <p className="text-white text-lg leading-relaxed">
              De la prise de contact à la clôture du projet nous tâcherons de vous mettre à disposition un chef de
              projet qui sera votre interlocuteur unique. Vous pourrez ainsi optimiser les temps d'échanges, aller à
              l'essentiel et travailler dans une relation de confiance !
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
