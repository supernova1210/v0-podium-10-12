import type React from "react"
import { Target, BookOpen } from "lucide-react"

interface WorkshopObjectivesProps {
  children: React.ReactNode
}

export function WorkshopObjectives({ children }: WorkshopObjectivesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">{children}</div>
      </div>
    </section>
  )
}

interface ObjectivesColumnProps {
  title: string
  icon: "target" | "book"
  children: React.ReactNode
}

export function ObjectivesColumn({ title, icon, children }: ObjectivesColumnProps) {
  const IconComponent = icon === "target" ? Target : BookOpen
  const bgColor =
    icon === "target"
      ? "bg-gradient-to-br from-yellow-400 to-yellow-500" // Yellow for Objectifs
      : "bg-[#061952]" // PODIUM blue for Modalités pédagogiques

  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 ${bgColor} rounded-2xl flex items-center justify-center`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

interface ObjectiveItemProps {
  children: React.ReactNode
  type?: "objective" | "method"
}

export function ObjectiveItem({ children, type = "objective" }: ObjectiveItemProps) {
  const bulletColor = type === "objective" ? "bg-yellow-400" : "bg-[#061952]"

  return (
    <div className="flex items-start gap-3">
      <div className={`w-2 h-2 ${bulletColor} rounded-full mt-2 flex-shrink-0`}></div>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  )
}
