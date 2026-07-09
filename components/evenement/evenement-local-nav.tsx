"use client"

import { useState, useEffect } from "react"
import {
  ShieldCheck,
  Sparkles,
  LayoutGrid,
  TrendingUp,
  Phone,
  CalendarDays,
  Route,
  type LucideIcon,
} from "lucide-react"

const ICONS: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  sparkles: Sparkles,
  grid: LayoutGrid,
  trending: TrendingUp,
  phone: Phone,
  calendar: CalendarDays,
  route: Route,
}

export interface LocalNavItem {
  id: string
  label: string
  icon: string
}

interface EvenementLocalNavProps {
  items: LocalNavItem[]
}

export default function EvenementLocalNav({ items }: EvenementLocalNavProps) {
  const [active, setActive] = useState(items[0]?.id ?? "")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? Math.min(1, y / max) : 0)

        let current = items[0]?.id ?? ""
        for (const item of items) {
          const el = document.getElementById(item.id)
          if (el && el.getBoundingClientRect().top <= 260) current = item.id
        }
        setActive(current)
        raf = 0
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [items])

  const go = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.pageYOffset - 205
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <>
      {/* Desktop : pill bar sticky sous le header */}
      <div className="hidden md:block sticky top-[142px] z-40 pointer-events-none">
        <div className="container mx-auto px-4 py-3">
          <div className="pointer-events-auto max-w-fit mx-auto relative bg-white/85 backdrop-blur-md border border-gray-200 rounded-full shadow-[0_14px_40px_rgba(6,25,82,0.12)] px-2 py-2 overflow-hidden">
            {/* Progression de lecture */}
            <span
              aria-hidden
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FFD25D] via-[#57B3B7] to-[#C9426B] transition-[width] duration-150"
              style={{ width: `${progress * 100}%` }}
            />
            <div className="flex items-center gap-1">
              {items.map((item) => {
                const Icon = ICONS[item.icon] ?? Sparkles
                const isActive = active === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => go(item.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex items-center gap-2 font-poppins font-semibold text-sm px-4 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? "bg-[#061952] text-white shadow-[0_8px_20px_rgba(6,25,82,0.3)]"
                        : "text-[#061952] hover:bg-[#061952]/[0.06]"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#FFD25D]" : "text-[#061952]/50"}`} />
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile : dock flottant en bas */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-40">
        <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl shadow-[0_18px_50px_rgba(6,25,82,0.22)] px-2 py-2">
          <div className="flex justify-around items-center">
            {items.map((item) => {
              const Icon = ICONS[item.icon] ?? Sparkles
              const isActive = active === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex flex-col items-center gap-1 px-2.5 py-2 rounded-2xl transition-all duration-300 min-w-[52px] ${
                    isActive ? "bg-[#061952] text-[#FFD25D]" : "text-[#061952]/60"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className={`text-[10px] font-poppins font-semibold leading-tight ${isActive ? "text-white" : ""}`}>
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
      {/* Espace pour le dock mobile */}
      <div className="md:hidden h-2" />
    </>
  )
}
