"use client"

import { useEffect, useRef, useState } from "react"
import Reveal from "@/components/reveal"

export type Accent = "teal" | "jaune" | "framboise" | "navy"

export const ACCENT_BG: Record<Accent, string> = {
  teal: "bg-[#57B3B7]",
  jaune: "bg-[#FFD25D]",
  framboise: "bg-[#C9426B]",
  navy: "bg-[#061952]",
}

export const ACCENT_TEXT: Record<Accent, string> = {
  teal: "text-[#2c6e72]",
  jaune: "text-[#B8860B]",
  framboise: "text-[#C9426B]",
  navy: "text-[#061952]",
}

export const ACCENT_SOFT: Record<Accent, string> = {
  teal: "bg-[#57B3B7]/12 border-[#57B3B7]/25",
  jaune: "bg-[#FFD25D]/20 border-[#FFD25D]/40",
  framboise: "bg-[#C9426B]/10 border-[#C9426B]/25",
  navy: "bg-[#061952]/[0.06] border-[#061952]/15",
}

/* ---------- Chiffres clés ---------- */

export function ChiffresCles({
  items,
  note,
}: {
  items: { value: string; label: string; accent: Accent }[]
  note?: string
}) {
  return (
    <div>
      <div className={`grid gap-5 ${items.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
        {items.map((c, i) => (
          <Reveal key={c.label} delay={i * 100} y={36}>
            <div
              className={`relative h-full rounded-[22px] border p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${ACCENT_SOFT[c.accent]}`}
            >
              <span aria-hidden className={`absolute top-0 left-0 right-0 h-1.5 ${ACCENT_BG[c.accent]}`} />
              <div className={`font-poppins font-extrabold text-4xl lg:text-5xl leading-none ${ACCENT_TEXT[c.accent]}`}>
                {c.value}
              </div>
              <p className="text-[15px] text-gray-600 leading-snug mt-3">{c.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      {note ? <p className="text-sm text-gray-400 mt-5 text-center">{note}</p> : null}
    </div>
  )
}

/* ---------- Graphique : répartition des TMS ---------- */

export function TmsChart({ data }: { data: { zone: string; value: number }[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const max = Math.max(...data.map((d) => d.value))

  return (
    <div ref={ref} className="bg-white border border-gray-200 rounded-[22px] p-7 md:p-9 shadow-[0_4px_18px_rgba(6,25,82,0.06)]">
      <div className="space-y-5">
        {data.map((d, i) => (
          <div key={d.zone}>
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-poppins font-semibold text-[15px] text-[#061952]">{d.zone}</span>
              <span className="font-poppins font-bold text-lg text-[#57B3B7]">{d.value} %</span>
            </div>
            <div className="h-3 rounded-full bg-[#061952]/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#57B3B7] to-[#7ECDD1] transition-[width] duration-1000 ease-out"
                style={{ width: shown ? `${(d.value / max) * 100}%` : "0%", transitionDelay: `${i * 120}ms` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------- Étapes d'aggravation (traumatismes) ---------- */

export function EtapesAggravation({ etapes, accent }: { etapes: string[]; accent: Accent }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {etapes.map((e, i) => (
        <span key={e} className="flex items-center gap-2.5">
          <span
            className={`inline-flex items-center font-poppins font-semibold text-sm px-4 py-2 rounded-full border ${ACCENT_SOFT[accent]} ${ACCENT_TEXT[accent]}`}
          >
            {e}
          </span>
          {i < etapes.length - 1 ? <span aria-hidden className="text-gray-300 font-bold">›</span> : null}
        </span>
      ))}
    </div>
  )
}
