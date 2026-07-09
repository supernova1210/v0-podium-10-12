"use client"

import { useState } from "react"
import {
  Target,
  Award,
  Users,
  Lightbulb,
  Heart,
  HandHeart,
  ChevronDown,
  Brain,
  Trophy,
  Dumbbell,
  Puzzle,
  type LucideIcon,
} from "lucide-react"
import Reveal from "@/components/reveal"

const ICONS: Record<string, LucideIcon> = {
  target: Target,
  award: Award,
  users: Users,
  lightbulb: Lightbulb,
  heart: Heart,
  handheart: HandHeart,
  brain: Brain,
  trophy: Trophy,
  dumbbell: Dumbbell,
  puzzle: Puzzle,
}

export interface BeneficeItem {
  id: string
  icon: string
  title: string
  description: string
}

export interface BeneficeColumn {
  header: string
  accent: "navy" | "jaune"
  items: BeneficeItem[]
}

interface EvenementBeneficesProps {
  eyebrow?: string
  title: string
  subtitle?: string
  columns: [BeneficeColumn, BeneficeColumn]
}

const COLUMN_STYLES = {
  navy: {
    header: "bg-[#061952] text-white",
    iconBox: "bg-[#061952] text-white",
    open: "border-[#061952]/30",
  },
  jaune: {
    header: "bg-[#FFD25D] text-[#061952]",
    iconBox: "bg-[#FFD25D] text-[#061952]",
    open: "border-[#FFD25D]",
  },
} as const

export default function EvenementBenefices({
  eyebrow = "Les bénéfices",
  title,
  subtitle,
  columns,
}: EvenementBeneficesProps) {
  const [expanded, setExpanded] = useState<string[]>([])
  const toggle = (id: string) => setExpanded((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))

  return (
    <section className="py-16 md:py-24 bg-[#FFF7EE] relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-50px] top-20 hidden xl:block w-44 h-44 rounded-[36px] border-2 border-[#57B3B7]/30" />
        <div className="absolute left-[-40px] bottom-24 hidden xl:block w-40 h-40 rounded-[34px] bg-[#C9426B]/10" />
        <div className="absolute left-24 top-16 hidden xl:block w-20 h-20 rounded-[20px] bg-[#FFD25D]/25" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9426B]" />
            {eyebrow}
          </span>
          <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-5xl mt-4 mb-4">
            {title}
          </h2>
          {subtitle ? <p className="text-lg text-gray-600">{subtitle}</p> : null}
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {columns.map((col, ci) => {
            const cs = COLUMN_STYLES[col.accent]
            return (
              <div key={ci}>
                <Reveal delay={ci * 100} className="text-center mb-7">
                  <div className={`inline-block font-poppins font-semibold text-lg px-8 py-3.5 rounded-full shadow-[0_10px_26px_rgba(6,25,82,0.14)] ${cs.header}`}>
                    {col.header}
                  </div>
                </Reveal>

                <div className="space-y-4">
                  {col.items.map((item, i) => {
                    const Icon = ICONS[item.icon] ?? Target
                    const isOpen = expanded.includes(item.id)
                    return (
                      <Reveal key={item.id} delay={i * 90 + ci * 60} y={36}>
                        <div
                          className={`bg-white rounded-[22px] border transition-all duration-300 overflow-hidden shadow-[0_4px_18px_rgba(6,25,82,0.06)] hover:shadow-[0_14px_40px_rgba(6,25,82,0.12)] ${
                            isOpen ? cs.open : "border-gray-200"
                          }`}
                        >
                          <button
                            onClick={() => toggle(item.id)}
                            className="w-full p-5 md:p-6 flex items-center gap-4 text-left"
                            aria-expanded={isOpen}
                          >
                            <span
                              className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 ${cs.iconBox} ${
                                isOpen ? "scale-110 -rotate-6" : ""
                              }`}
                            >
                              <Icon className="w-6 h-6" />
                            </span>
                            <h3 className="flex-1 font-poppins font-semibold text-[17px] text-[#061952]">{item.title}</h3>
                            <span
                              className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                isOpen ? "bg-[#061952] text-white border-[#061952] rotate-180" : "text-[#061952]"
                              }`}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </span>
                          </button>
                          <div
                            className={`grid transition-all duration-300 ease-out ${
                              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="px-6 pb-6 pl-[84px] text-[15px] text-gray-600 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
