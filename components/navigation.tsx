"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { PodiumButton } from "@/components/ui/podium-button"

const menuItems = [
  { label: "Nous découvrir", href: "/about" },
  { label: "Formations", href: null, hasDropdown: true },
  { label: "Ateliers", href: null, hasDropdown: true },
  { label: "Événements", href: null, hasDropdown: true },
]

const formationsDropdown = {
  categories: [
    { label: "Formations QVCT", href: "/formations-qvct" },
    { label: "Formations Management", href: "/formations-management" },
  ],
}

const ateliersDropdown = {
  mainLink: { label: "Découvrir nos ateliers", href: "/nos-ateliers" },
  workshops: [
    { label: "Escape Game", href: "/nos-ateliers#escape-game" },
    { label: "Théâtre d'improvisation", href: "/nos-ateliers#theatre-improvisation" },
  ],
}

const evenementsDropdown = {
  mainLink: { label: "Découvrir tous nos événements", href: "/nos-evenements" },
  events: [
    { label: "Journée Sécurité", href: "/nos-evenements/journee-securite" },
    { label: "Journée RSE", href: "/nos-evenements/journee-rse" },
    { label: "Semaine QVCT", href: "/nos-evenements/semaine-qvct" },
    { label: "Journée Séminaire", href: "/nos-evenements/journee-seminaire" },
  ],
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFormationsOpen, setIsFormationsOpen] = useState(false)
  const [isAteliersOpen, setIsAteliersOpen] = useState(false)
  const [isEvenementsOpen, setIsEvenementsOpen] = useState(false)

  return (
    <nav className="bg-white sticky top-10 z-30 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/podium-logo.png"
              alt="PODIUM - Organisme de formation"
              width={220}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      if (item.label === "Formations") setIsFormationsOpen(true)
                      if (item.label === "Ateliers") setIsAteliersOpen(true)
                      if (item.label === "Événements") setIsEvenementsOpen(true)
                    }}
                    onMouseLeave={() => {
                      if (item.label === "Formations") setIsFormationsOpen(false)
                      if (item.label === "Ateliers") setIsAteliersOpen(false)
                      if (item.label === "Événements") setIsEvenementsOpen(false)
                    }}
                  >
                    <button className="flex items-center text-base font-semibold text-[#061952] hover:text-[#FFD25D] transition-all duration-300 group py-2">
                      {item.label}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                          (item.label === "Formations" && isFormationsOpen) ||
                          (item.label === "Ateliers" && isAteliersOpen) ||
                          (item.label === "Événements" && isEvenementsOpen)
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD25D] transition-all duration-300 group-hover:w-full"></span>
                    </button>

                    {item.label === "Ateliers" && (
                      <div
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-300 ${
                          isAteliersOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                        }`}
                      >
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 w-[400px]">
                          {/* Main Link */}
                          <div className="mb-4 pb-4 border-b border-gray-100">
                            <Link
                              href={ateliersDropdown.mainLink.href}
                              className="group flex items-center text-lg font-semibold text-[#061952] hover:text-[#FFD25D] transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
                            >
                              <span className="relative">
                                {ateliersDropdown.mainLink.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD25D] transition-all duration-300 group-hover:w-full"></span>
                              </span>
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                          </div>

                          <div className="space-y-2">
                            {ateliersDropdown.workshops.map((workshop) => (
                              <Link
                                key={workshop.label}
                                href={workshop.href}
                                className="group block text-[#061952] hover:text-[#FFD25D] transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-gray-50"
                              >
                                <span className="relative flex items-center">
                                  {workshop.label}
                                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD25D] transition-all duration-300 group-hover:w-full"></span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Formations dropdown */}
                    {item.label === "Formations" && (
                      <div
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-300 ${
                          isFormationsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                        }`}
                      >
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 w-[400px]">
                          {/* Formations List */}
                          <div className="space-y-3">
                            {formationsDropdown.categories.map((formation) => (
                              <Link
                                key={formation.label}
                                href={formation.href}
                                className="group block text-[#061952] hover:text-[#FFD25D] transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-gray-50"
                              >
                                <span className="relative flex items-center">
                                  {formation.label}
                                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD25D] transition-all duration-300 group-hover:w-full"></span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Événements dropdown */}
                    {item.label === "Événements" && (
                      <div
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-300 ${
                          isEvenementsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                        }`}
                      >
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 w-[500px]">
                          {/* Main Link */}
                          <div className="mb-6 pb-4 border-b border-gray-100">
                            <Link
                              href={evenementsDropdown.mainLink.href}
                              className="group flex items-center text-lg font-semibold text-[#061952] hover:text-[#FFD25D] transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
                            >
                              <span className="relative">
                                {evenementsDropdown.mainLink.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD25D] transition-all duration-300 group-hover:w-full"></span>
                              </span>
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                          </div>

                          {/* Events List */}
                          <div className="space-y-3">
                            {evenementsDropdown.events.map((event) => (
                              <Link
                                key={event.label}
                                href={event.href}
                                className="group block text-[#061952] hover:text-[#FFD25D] transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-gray-50"
                              >
                                <span className="relative flex items-center">
                                  {event.label}
                                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD25D] transition-all duration-300 group-hover:w-full"></span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="relative text-base font-semibold text-[#061952] hover:text-[#FFD25D] transition-all duration-300 group py-2"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD25D] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
            <div className="ml-6">
              <PodiumButton href="/contact" variant="secondary" size="default">
                Contact
              </PodiumButton>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-lg text-[#061952] hover:text-[#FFD25D] hover:bg-gray-50 transition-all duration-200 border border-gray-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
          <Image src="/images/podium-logo.png" alt="PODIUM" width={160} height={56} className="h-12 w-auto" />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg text-[#061952] hover:text-[#FFD25D] hover:bg-white transition-all duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="px-6 py-8 space-y-6">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.hasDropdown ? (
                <div>
                  <div className="text-lg font-semibold text-[#061952] uppercase tracking-wide py-3 border-b border-gray-100">
                    {item.label}
                  </div>
                  <div className="ml-4 mt-3 space-y-3">
                    {item.label === "Ateliers" ? (
                      <>
                        <Link
                          href={ateliersDropdown.mainLink.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-[#061952] hover:text-[#FFD25D] transition-all duration-300 py-2 font-semibold"
                        >
                          {ateliersDropdown.mainLink.label}
                        </Link>
                        <div className="border-t border-gray-100 pt-3 mt-3">
                          {ateliersDropdown.workshops.map((workshop) => (
                            <Link
                              key={workshop.label}
                              href={workshop.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block text-[#061952] hover:text-[#FFD25D] transition-all duration-300 py-2 text-sm ml-2"
                            >
                              {workshop.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : item.label === "Événements" ? (
                      <>
                        <Link
                          href={evenementsDropdown.mainLink.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-[#061952] hover:text-[#FFD25D] transition-all duration-300 py-2 font-semibold"
                        >
                          {evenementsDropdown.mainLink.label}
                        </Link>
                        <div className="border-t border-gray-100 pt-3 mt-3">
                          {evenementsDropdown.events.map((event) => (
                            <Link
                              key={event.label}
                              href={event.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block text-[#061952] hover:text-[#FFD25D] transition-all duration-300 py-2 text-sm ml-2"
                            >
                              {event.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      // Formations dropdown
                      <>
                        {formationsDropdown.categories.map((category) => (
                          <Link
                            key={category.label}
                            href={category.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-[#061952] hover:text-[#FFD25D] transition-all duration-300 py-2"
                          >
                            {category.label}
                          </Link>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-semibold text-[#061952] uppercase tracking-wide hover:text-[#FFD25D] hover:translate-x-2 transition-all duration-300 py-3 border-b border-gray-100 last:border-b-0"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40" onClick={() => setIsMenuOpen(false)} />
      )}
    </nav>
  )
}
