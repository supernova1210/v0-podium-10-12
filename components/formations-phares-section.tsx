"use client"

import { GraduationCap, Settings, Calendar } from "lucide-react"
import { PodiumButton } from "@/components/ui/podium-button"

const formations = [
  {
    id: 1,
    title: "Gestes et postures",
    subtitle: "Formation en présentiel – 1 jour (7h)",
    icon: GraduationCap,
    type: "formation",
    href: "/formation-securite-geste-et-posture",
  },
  {
    id: 2,
    title: "Ambassadeur réveil musculaire",
    subtitle: "Formation en présentiel – 3h30 ou 7h00",
    icon: Settings,
    type: "formation",
    href: "/formation-securite-reveil-musculaire",
  },
  {
    id: 3,
    title: "Valoriser sa posture professionnelle",
    subtitle: "Événement sur site – 3h30 ou 7h00",
    icon: Calendar,
    type: "formation",
    href: "/formation-qvct-valoriser-posture-professionnelle",
  },
  {
    id: 4,
    title: "Lancer et dynamiser une réunion",
    subtitle: "Formation en présentiel – 1 jour (7h)",
    icon: GraduationCap,
    type: "formation",
    href: "/formation-qvct-lancer-dynamiser-reunion",
  },
  {
    id: 5,
    title: "S\u2019affirmer avec confiance \u2013 CNV",
    subtitle: "Formation en présentiel – 1 jour (7h)",
    icon: Settings,
    type: "formation",
    href: "/formation-qvct-communication-non-violente",
  },
]

export default function FormationsPharesSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-yellow-50/20"></div>

      {/* Decorative background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFD25D]/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-[#061952]/5 rounded-full blur-lg"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#FFD25D]/8 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#061952]/8 rounded-full blur-lg"></div>

      {/* Organic shapes */}
      <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-[#FFD25D]/5 to-[#061952]/5 rounded-full blur-3xl transform -translate-x-1/2 rotate-45"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#061952] mb-6">Nos formations QVCT, prévention et sécurité</h2>
        </div>

        {/* Formations List */}
        <div className="space-y-4">
          {formations.map((formation) => {
            const IconComponent = formation.icon

            return (
              <div
                key={formation.id}
                className="group relative rounded-2xl p-5 bg-white shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD25D]/15 overflow-hidden border border-gray-100/50"
              >
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD25D]/0 via-[#FFD25D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                {/* Left accent bar */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-[#FFD25D] rounded-r-full opacity-50 group-hover:opacity-100 group-hover:h-14 transition-all duration-300"></div>

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 bg-gradient-to-br from-[#061952] to-[#0a1f5c] shadow-[#061952]/15 group-hover:shadow-[#061952]/30">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#061952] leading-tight">
                        {formation.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {formation.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 ml-4">
                    <PodiumButton
                      href={formation.href}
                      variant="primary"
                      size="default"
                      className="!px-5 !py-2.5 !text-sm"
                      showArrow={true}
                    >
                      Voir plus
                    </PodiumButton>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12">
          <PodiumButton
            href="/contact"
            variant="primary"
            size="default"
            showArrow={true}
          >
            Démarrer sa formation
          </PodiumButton>
        </div>
      </div>
    </section>
  )
}
