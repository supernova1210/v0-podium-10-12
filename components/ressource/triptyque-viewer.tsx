"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X, Maximize2, Download } from "lucide-react"

interface TriptyqueViewerProps {
  volets: string[]
  title: string
  pdfHref?: string
}

export default function TriptyqueViewer({ volets, title, pdfHref }: TriptyqueViewerProps) {
  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState(false)

  const prev = useCallback(() => setIndex((i) => (i - 1 + volets.length) % volets.length), [volets.length])
  const next = useCallback(() => setIndex((i) => (i + 1) % volets.length), [volets.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
      if (e.key === "Escape") setZoom(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [prev, next])

  useEffect(() => {
    document.body.style.overflow = zoom ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [zoom])

  return (
    <>
      <div className="relative bg-[#061952] rounded-[28px] p-6 md:p-10 overflow-hidden">
        <div aria-hidden className="absolute -top-12 -right-12 w-44 h-44 rounded-[36px] border-2 border-[#FFD25D]/20" />
        <div aria-hidden className="absolute -bottom-14 -left-10 w-40 h-40 rounded-[34px] bg-[#57B3B7]/10" />

        <div className="relative">
          <div className="flex items-center justify-between gap-4 mb-6">
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#FFD25D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
              Le mémo remis aux participants
            </span>
            <span className="font-poppins font-semibold text-sm text-white/60">
              {index + 1} / {volets.length}
            </span>
          </div>

          {/* Scène */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              onClick={prev}
              aria-label="Volet précédent"
              className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 text-white flex items-center justify-center transition-all duration-300 hover:bg-[#FFD25D] hover:text-[#061952] hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => setZoom(true)}
              aria-label={`Agrandir le volet ${index + 1}`}
              className="group relative flex-1 rounded-2xl overflow-hidden bg-white shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="relative aspect-[780/1654] max-h-[70vh] mx-auto">
                <Image
                  src={volets[index]}
                  alt={`${title} — volet ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80vw, 420px"
                />
              </div>
              <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#061952]/80 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="w-4 h-4" />
              </span>
            </button>

            <button
              onClick={next}
              aria-label="Volet suivant"
              className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 text-white flex items-center justify-center transition-all duration-300 hover:bg-[#FFD25D] hover:text-[#061952] hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Vignettes */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {volets.map((v, i) => (
              <button
                key={v}
                onClick={() => setIndex(i)}
                aria-label={`Aller au volet ${i + 1}`}
                aria-current={i === index}
                className={`relative w-10 h-[52px] rounded-lg overflow-hidden transition-all duration-300 ${
                  i === index ? "ring-2 ring-[#FFD25D] scale-110" : "opacity-50 hover:opacity-90"
                }`}
              >
                <Image src={v} alt="" fill className="object-cover" sizes="40px" />
              </button>
            ))}
          </div>

          {pdfHref ? (
            <div className="text-center mt-7">
              <a
                href={pdfHref}
                target="_blank"
                className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-[15px] px-7 py-3.5 rounded-full bg-[#FFD25D] text-[#061952] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5"
              >
                Télécharger le mémo complet (PDF)
                <Download className="w-[18px] h-[18px]" />
              </a>
            </div>
          ) : null}
        </div>
      </div>

      {/* Plein écran */}
      {zoom ? (
        <div
          onClick={() => setZoom(false)}
          className="fixed inset-0 z-[100] bg-[#061952]/95 flex items-center justify-center p-4 md:p-8"
        >
          <button
            onClick={() => setZoom(false)}
            aria-label="Fermer"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#061952] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Volet précédent"
            className="absolute left-3 md:left-8 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#FFD25D] hover:text-[#061952] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-full w-full max-w-3xl flex items-center justify-center"
          >
            <div className="relative h-[88vh] aspect-[780/1654]">
              <Image
                src={volets[index]}
                alt={`${title} — volet ${index + 1}`}
                fill
                className="object-contain rounded-xl"
                sizes="90vw"
              />
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Volet suivant"
            className="absolute right-3 md:right-8 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#FFD25D] hover:text-[#061952] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      ) : null}
    </>
  )
}
