"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const navigationItems = [
  {
    id: "pourquoi-podium",
    label: "Pourquoi Podium ?",
    icon: "/images/picto-mystere.png",
    shortLabel: "Pourquoi",
  },
  {
    id: "pedagogie",
    label: "Notre pédagogie",
    icon: "/images/picto-podium.png",
    shortLabel: "Pédagogie",
  },
  {
    id: "coequipiers",
    label: "Nos coéquipiers",
    icon: "/images/picto-participants.png",
    shortLabel: "Équipe",
  },
  {
    id: "references",
    label: "Nos références",
    icon: "/images/picto-badge.png",
    shortLabel: "Références",
  },
  {
    id: "contact",
    label: "Nous contacter",
    icon: "/images/picto-zone.png",
    shortLabel: "Contact",
  },
]

export default function AboutLocalNavigation() {
  const [activeSection, setActiveSection] = useState("pourquoi-podium")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)

      // Find active section based on scroll position
      const sections = navigationItems
        .map((item) => {
          const element = document.getElementById(item.id)
          if (element) {
            const rect = element.getBoundingClientRect()
            return {
              id: item.id,
              top: rect.top + scrollPosition,
              bottom: rect.bottom + scrollPosition,
            }
          }
          return null
        })
        .filter(Boolean)

      const currentSection = sections.find((section) => {
        if (section) {
          return scrollPosition >= section.top - 200 && scrollPosition < section.bottom - 200
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 120
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        {/* Hero State - Large Icons */}
        <div className={`transition-all duration-300 ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <div className="bg-white py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center items-center gap-8 lg:gap-12">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer ${
                      activeSection === item.id ? "bg-yellow-400 shadow-lg" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                      <Image src={item.icon || "/placeholder.svg"} alt={item.label} fill className="object-contain" />
                    </div>
                    <span
                      className={`text-sm lg:text-base font-medium text-center transition-colors ${
                        activeSection === item.id ? "text-blue-900" : "text-gray-700 group-hover:text-blue-900"
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

        {/* Compact Sticky State */}
        <div
          className={`fixed top-32 left-0 right-0 z-20 transition-all duration-300 ${
            isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-center items-center gap-6 py-3">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer ${
                      activeSection === item.id
                        ? "bg-yellow-400 text-blue-900"
                        : "text-gray-600 hover:text-blue-900 hover:bg-gray-100"
                    }`}
                  >
                    <div className="relative w-5 h-5">
                      <Image src={item.icon || "/placeholder.svg"} alt={item.label} fill className="object-contain" />
                    </div>
                    <span className="text-sm font-medium whitespace-nowrap">{item.shortLabel}</span>
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
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 min-w-[44px] cursor-pointer ${
                  activeSection === item.id ? "bg-yellow-400 text-blue-900" : "text-gray-600 hover:text-blue-900"
                }`}
              >
                <div className="relative w-6 h-6">
                  <Image src={item.icon || "/placeholder.svg"} alt={item.label} fill className="object-contain" />
                </div>
                <span className="text-xs font-medium text-center leading-tight">{item.shortLabel}</span>
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
