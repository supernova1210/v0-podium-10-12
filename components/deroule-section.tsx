import { Play, Settings, MessageCircle, Clock } from "lucide-react"

interface Step {
  icon: "play" | "settings" | "messagecircle"
  text: string
}

interface DerouleSectionProps {
  title: string
  steps: Step[]
}

const iconMap = {
  play: Play,
  settings: Settings,
  messagecircle: MessageCircle,
}

export default function DerouleSection({ title, steps }: DerouleSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-[#061952] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#FFD25D] rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#061952]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          </div>
        </div>

        <div className="relative">
          {/* Desktop horizontal timeline */}
          <div className="hidden md:block">
            <div className="flex items-start justify-between relative">
              {/* Connecting line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-[#FFD25D] opacity-30 z-0"></div>

              {steps.map((step, index) => {
                const IconComponent = iconMap[step.icon]

                return (
                  <div key={index} className="flex-1 relative z-10">
                    <div className="flex flex-col items-center text-center max-w-xs mx-auto">
                      {/* Icon container */}
                      <div className="w-16 h-16 bg-[#FFD25D] rounded-full flex items-center justify-center mb-6 shadow-lg">
                        <IconComponent className="w-8 h-8 text-[#061952]" />
                      </div>

                      {/* Step number */}
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-4 text-[#061952] font-bold text-sm">
                        {index + 1}
                      </div>

                      {/* Text */}
                      <p className="text-white leading-relaxed text-sm md:text-base">{step.text}</p>
                    </div>

                    {/* Arrow between steps */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-16 -right-8 transform -translate-y-1/2 z-20">
                        <div className="w-4 h-4 border-t-2 border-r-2 border-[#FFD25D] transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => {
              const IconComponent = iconMap[step.icon]

              return (
                <div key={index} className="flex items-start gap-4 relative">
                  {/* Connecting line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-16 bg-[#FFD25D] opacity-30"></div>
                  )}

                  {/* Icon container */}
                  <div className="w-16 h-16 bg-[#FFD25D] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-[#061952]" />
                  </div>

                  <div className="flex-1 pt-2">
                    {/* Step number */}
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-3 text-[#061952] font-bold text-sm">
                      {index + 1}
                    </div>

                    {/* Text */}
                    <p className="text-white leading-relaxed">{step.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 border border-[#FFD25D] opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#FFD25D] opacity-5 rounded-full"></div>
      </div>
    </section>
  )
}
