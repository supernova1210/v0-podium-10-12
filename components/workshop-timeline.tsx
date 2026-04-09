import type React from "react"
import { Play, Settings, MessageCircle, Info } from "lucide-react"

const ICONS = {
  play: Play,
  settings: Settings,
  "message-circle": MessageCircle,
  info: Info,
} as const

interface WorkshopTimelineProps {
  title?: string
  description?: React.ReactNode // Added optional description prop for text zone
  children: React.ReactNode
}

export function WorkshopTimeline({ title = "Déroulé", description, children }: WorkshopTimelineProps) {
  return (
    <section className="py-16 bg-blue-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {description && <div className="max-w-3xl mx-auto text-white/90 text-lg leading-relaxed">{description}</div>}
        </div>
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>
    </section>
  )
}

interface TimelineStepsProps {
  children: React.ReactNode
}

export function TimelineSteps({ children }: TimelineStepsProps) {
  return <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">{children}</div>
}

interface TimelineStepProps {
  icon: keyof typeof ICONS
  step: number
  children: React.ReactNode
}

export function TimelineStep({ icon, step, children }: TimelineStepProps) {
  const IconComponent = ICONS[icon] || Info

  return (
    <div className="relative">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 relative">
          <IconComponent className="w-8 h-8 text-blue-950" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-950 text-yellow-400 rounded-full flex items-center justify-center text-sm font-bold">
            {step}
          </div>
        </div>
        <div className="text-white/90 leading-relaxed">{children}</div>
      </div>
      {/* Connection line for desktop */}
      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-yellow-400/30 -translate-x-4 last:hidden"></div>
    </div>
  )
}
