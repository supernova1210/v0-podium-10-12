"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const navigationItems = [
  {
    id: "journee-rse",
    label: "La journée RSE",
    icon: "/images/picto-mystere.png",
    shortLabel: "Journée RSE",
  },
  {
    id: "format",
    label: "Le format",
    icon: "/images/picto-podium.png",
    shortLabel: "Format",
  },
  {
    id: "ateliers-rse",
    label: "Ateliers RSE",
    icon: "/images/picto-participants.png",
    shortLabel: "Ateliers",
  },
  {
    id: "benefices",
    label: "Les bénéfices",
    icon: "/images/picto-badge.png",
    shortLabel: "Bénéfices",
  },
  {
    id: "contact",
    label: "Nous contacter",
    icon: "/images/picto-zone.png",
    shortLabel: "Contact",
  },
]

export default function JourneeRseLocalNavigation() {
  const [activeSection, setActiveSection] = useState<string>("journee-rse")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)

      const sections = navigationItems
        .map((item) => {
          const el = document.getElementById(item.id)
          if (!el) return null
          const rect = el.getBoundingClientRect()
          return {
            id: item.id,
            top: rect.top + scrollPosition,
            bottom: rect.bottom + scrollPosition,
          }
        })
        .filter(Boolean) as { id: string; top: number; bottom: number }[]

      const current = sections.find(
        (s) => scrollPosition >= s.top - 200 && scrollPosition < s.bottom - 200
      )
      if (current) setActiveSection(current.id)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return
    const headerOffset = 120
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
  }

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        {/* Hero State - Large Cards (equal size) */}
        <div
          className={`transition-all duration-300 ${
            isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="bg-white py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-5 gap-6 lg:gap-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer
                                w-full h-40 lg:h-44
                                ${
                                  activeSection === item.id
                                    ? "bg-yellow-400 shadow-lg"
                                    : "bg-gray-50 hover:bg-gray-100"
                                }`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                      <Image
                        src={item.icon || "/placeholder.svg"}
                        alt={item.label}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span
                      className={`text-sm lg:text-base font-medium text-center leading-tight transition-colors px-2
                                  ${
                                    activeSection === item.id
                                      ? "text-blue-900"
                                      : "text-gray-700"
                                  }`}
                    >
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compact Sticky State (equal widths) */}
        <div
          className={`fixed top-32 left-0 right-0 z-20 transition-all duration-300 ${
            isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-5 gap-4 py-3">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-center gap-2 h-10 rounded-lg transition-all duration-200 cursor-pointer
                                ${
                                  activeSection === item.id
                                    ? "bg-yellow-400 text-blue-900"
                                    : "text-gray-600 hover:text-blue-900 hover:bg-gray-100"
                                }`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    <div className="relative w-5 h-5 shrink-0">
                      <Image
                        src={item.icon || "/placeholder.svg"}
                        alt={item.label}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium truncate">{item.shortLabel}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Dock */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="flex justify-around items-center py-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 min-w-[44px] cursor-pointer
                            ${
                              activeSection === item.id
                                ? "bg-yellow-400 text-blue-900"
                                : "text-gray-600 hover:text-blue-900"
                            }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                <div className="relative w-6 h-6">
                  <Image
                    src={item.icon || "/placeholder.svg"}
                    alt={item.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-center leading-tight">
                  {item.shortLabel}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile bottom padding to prevent content overlap */}
      <div className="md:hidden h-20" />
    </>
  )
}
