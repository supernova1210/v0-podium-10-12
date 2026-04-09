"use client"

import { PodiumButton } from "@/components/ui/podium-button"

export default function ObjectifsAteliersSection() {
  return (
    <section className="relative bg-[#061952] py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#FFD25D] rounded-full"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#FFD25D] rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-[#FFD25D] rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-[#FFD25D] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-sans">Objectifs</h2>

          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed mb-10">
            Nos ateliers de sensibilisation transforment le bien-être au travail en une expérience inspirante et
            interactive ! L'objectif ? Cultiver une atmosphère positive et engageante, où prévention rime avec
            innovation. Chez PODIUM, on casse la routine avec des activités ludiques, sportives et animées par des
            experts passionnés. Parce que prendre soin de ses collaborateurs, c'est aussi leur offrir des moments qui
            boostent leur énergie, renforçant la cohésion et établissant une meilleure qualité de vie au travail et tout
            ça, avec le sourire et la bonne humeur !
          </p>

          <PodiumButton variant="primary" size="lg">
            Réservez votre atelier
          </PodiumButton>
        </div>
      </div>
    </section>
  )
}
