"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Puzzle,
  Drama,
  Sprout,
  Sparkles,
  Users,
  LayoutGrid,
  CalendarDays,
} from "lucide-react"
import { PodiumButton } from "@/components/ui/podium-button"

const menuItems = [
  { label: "Nous découvrir", href: "/about", match: "/about" },
  { label: "Formations", href: null, hasDropdown: true, match: "/formation" },
  { label: "Ateliers", href: null, hasDropdown: true, match: "/nos-ateliers" },
  { label: "Événements", href: null, hasDropdown: true, match: "/nos-evenements" },
]

const formationsDropdown = [
  {
    label: "Formations QVCT",
    href: "/formations-qvct",
    desc: "Bien-être, prévention des RPS, cohésion d'équipe.",
    icon: HeartHandshake,
    chip: "bg-[#57B3B7]/15 text-[#2c6e72]",
    hover: "group-hover/row:text-[#57B3B7]",
    row: "hover:bg-[#57B3B7]/[0.07]",
  },
  {
    label: "Formations Sécurité",
    href: "/formations-securite",
    desc: "Gestes qui sauvent, premiers secours, prévention.",
    icon: ShieldCheck,
    chip: "bg-[#FFD25D]/30 text-[#061952]",
    hover: "group-hover/row:text-[#B8860B]",
    row: "hover:bg-[#FFD25D]/[0.12]",
  },
]

const ateliersDropdown = {
  mainLink: { label: "Découvrir nos ateliers", href: "/nos-ateliers", desc: "18 ateliers ludiques, QVCT & sécurité.", icon: LayoutGrid },
  items: [
    { label: "Escape Game", href: "/nos-ateliers#escape-game", icon: Puzzle },
    { label: "Théâtre d'impro santé mentale", href: "/atelier/theatre-impro-sante-mentale", icon: Drama },
  ],
}

const evenementsDropdown = {
  mainLink: { label: "Tous nos événements", href: "/nos-evenements", desc: "Journées et temps forts sur mesure.", icon: CalendarDays },
  items: [
    { label: "Journée Sécurité", href: "/nos-evenements/journee-securite", icon: ShieldCheck },
    { label: "Journée RSE", href: "/nos-evenements/journee-rse", icon: Sprout },
    { label: "Semaine QVCT", href: "/nos-evenements/semaine-qvct", icon: Sparkles },
    { label: "Journée Séminaire", href: "/nos-evenements/journee-seminaire", icon: Users },
  ],
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname() || "/"

  const isActive = (match: string) => pathname.startsWith(match)

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-10 z-30 shadow-[0_2px_20px_rgba(6,25,82,0.05)]">
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
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => {
              const active = isActive(item.match)
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <>
                      <button
                        className={`flex items-center gap-1.5 text-[15px] font-poppins font-semibold px-4 py-2.5 rounded-full transition-all duration-200 ${
                          openDropdown === item.label || active
                            ? "text-[#061952] bg-[#061952]/[0.05]"
                            : "text-[#061952] hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            openDropdown === item.label ? "rotate-180 text-[#FFD25D]" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown panels */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                          openDropdown === item.label
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-1 pointer-events-none"
                        }`}
                      >
                        {item.label === "Formations" && (
                          <div className="w-[440px] bg-white rounded-2xl shadow-[0_24px_60px_rgba(6,25,82,0.18)] border border-gray-100 overflow-hidden">
                            <div className="h-1 bg-[#FFD25D]" />
                            <div className="p-3">
                              {formationsDropdown.map((f) => (
                                <Link
                                  key={f.label}
                                  href={f.href}
                                  className={`group/row flex items-start gap-4 p-4 rounded-xl transition-colors duration-200 ${f.row}`}
                                >
                                  <span className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${f.chip}`}>
                                    <f.icon className="w-[22px] h-[22px]" />
                                  </span>
                                  <span className="min-w-0">
                                    <span className={`flex items-center gap-1.5 font-poppins font-semibold text-[#061952] transition-colors ${f.hover}`}>
                                      {f.label}
                                      <ArrowRight className="w-3.5 h-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover/row:translate-x-0 group-hover/row:opacity-100" />
                                    </span>
                                    <span className="block text-[13px] text-gray-500 leading-snug mt-0.5">{f.desc}</span>
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {item.label === "Ateliers" && (
                          <div className="w-[400px] bg-white rounded-2xl shadow-[0_24px_60px_rgba(6,25,82,0.18)] border border-gray-100 overflow-hidden">
                            <div className="h-1 bg-[#57B3B7]" />
                            <div className="p-3">
                              <Link
                                href={ateliersDropdown.mainLink.href}
                                className="group/row flex items-start gap-4 p-4 rounded-xl bg-[#061952] hover:bg-[#0a2068] transition-colors duration-200"
                              >
                                <span className="w-11 h-11 rounded-xl bg-white/10 text-[#FFD25D] flex items-center justify-center flex-shrink-0">
                                  <ateliersDropdown.mainLink.icon className="w-[22px] h-[22px]" />
                                </span>
                                <span className="min-w-0">
                                  <span className="flex items-center gap-1.5 font-poppins font-semibold text-white">
                                    {ateliersDropdown.mainLink.label}
                                    <ArrowRight className="w-3.5 h-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover/row:translate-x-0 group-hover/row:opacity-100" />
                                  </span>
                                  <span className="block text-[13px] text-white/65 leading-snug mt-0.5">{ateliersDropdown.mainLink.desc}</span>
                                </span>
                              </Link>
                              <div className="mt-1.5">
                                {ateliersDropdown.items.map((w) => (
                                  <Link
                                    key={w.label}
                                    href={w.href}
                                    className="group/row flex items-center gap-3.5 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                                  >
                                    <span className="w-9 h-9 rounded-lg bg-[#57B3B7]/12 text-[#2c6e72] flex items-center justify-center flex-shrink-0">
                                      <w.icon className="w-[18px] h-[18px]" />
                                    </span>
                                    <span className="font-poppins font-medium text-[15px] text-[#061952] group-hover/row:text-[#57B3B7] transition-colors">
                                      {w.label}
                                    </span>
                                    <ArrowRight className="w-4 h-4 ml-auto text-gray-300 -translate-x-1 opacity-0 transition-all duration-200 group-hover/row:translate-x-0 group-hover/row:opacity-100" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {item.label === "Événements" && (
                          <div className="w-[420px] bg-white rounded-2xl shadow-[0_24px_60px_rgba(6,25,82,0.18)] border border-gray-100 overflow-hidden">
                            <div className="h-1 bg-[#C9426B]" />
                            <div className="p-3">
                              <Link
                                href={evenementsDropdown.mainLink.href}
                                className="group/row flex items-start gap-4 p-4 rounded-xl bg-[#061952] hover:bg-[#0a2068] transition-colors duration-200"
                              >
                                <span className="w-11 h-11 rounded-xl bg-white/10 text-[#FFD25D] flex items-center justify-center flex-shrink-0">
                                  <evenementsDropdown.mainLink.icon className="w-[22px] h-[22px]" />
                                </span>
                                <span className="min-w-0">
                                  <span className="flex items-center gap-1.5 font-poppins font-semibold text-white">
                                    {evenementsDropdown.mainLink.label}
                                    <ArrowRight className="w-3.5 h-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover/row:translate-x-0 group-hover/row:opacity-100" />
                                  </span>
                                  <span className="block text-[13px] text-white/65 leading-snug mt-0.5">{evenementsDropdown.mainLink.desc}</span>
                                </span>
                              </Link>
                              <div className="mt-1.5 grid grid-cols-2 gap-1">
                                {evenementsDropdown.items.map((e) => (
                                  <Link
                                    key={e.label}
                                    href={e.href}
                                    className="group/row flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                                  >
                                    <span className="w-9 h-9 rounded-lg bg-[#FFD25D]/20 text-[#061952] flex items-center justify-center flex-shrink-0">
                                      <e.icon className="w-[18px] h-[18px]" />
                                    </span>
                                    <span className="font-poppins font-medium text-[14px] text-[#061952] leading-tight group-hover/row:text-[#B8860B] transition-colors">
                                      {e.label}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href ?? "#"}
                      className={`relative text-[15px] font-poppins font-semibold px-4 py-2.5 rounded-full transition-all duration-200 ${
                        active ? "text-[#061952] bg-[#061952]/[0.05]" : "text-[#061952] hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              )
            })}
            <div className="ml-4">
              <PodiumButton href="/contact" variant="secondary" size="default">
                Contact
              </PodiumButton>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl text-[#061952] hover:text-[#FFD25D] hover:bg-gray-50 transition-all duration-200 border border-gray-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Bande d'accent colorée */}
      <div aria-hidden className="flex h-1 w-full">
        <div className="w-[55%] bg-[#FFD25D]" />
        <div className="w-[25%] bg-[#57B3B7]" />
        <div className="flex-1 bg-[#C9426B]" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
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

        <div className="px-6 py-8 space-y-7">
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-poppins font-semibold text-[#061952] hover:text-[#FFD25D] transition-colors py-2"
          >
            Nous découvrir
          </Link>

          <div>
            <div className="text-xs font-poppins font-semibold text-gray-400 uppercase tracking-wider mb-3">Formations</div>
            <div className="space-y-1.5">
              {formationsDropdown.map((f) => (
                <Link
                  key={f.label}
                  href={f.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50"
                >
                  <span className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${f.chip}`}>
                    <f.icon className="w-[18px] h-[18px]" />
                  </span>
                  <span className="font-poppins font-medium text-[#061952]">{f.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-poppins font-semibold text-gray-400 uppercase tracking-wider mb-3">Ateliers</div>
            <div className="space-y-1.5">
              <Link href={ateliersDropdown.mainLink.href} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 font-poppins font-semibold text-[#061952]">
                {ateliersDropdown.mainLink.label}
              </Link>
              {ateliersDropdown.items.map((w) => (
                <Link key={w.label} href={w.href} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 text-[#061952]">
                  <span className="w-9 h-9 rounded-lg bg-[#57B3B7]/12 text-[#2c6e72] flex items-center justify-center flex-shrink-0">
                    <w.icon className="w-[18px] h-[18px]" />
                  </span>
                  <span className="text-[15px]">{w.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-poppins font-semibold text-gray-400 uppercase tracking-wider mb-3">Événements</div>
            <div className="space-y-1.5">
              <Link href={evenementsDropdown.mainLink.href} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 font-poppins font-semibold text-[#061952]">
                {evenementsDropdown.mainLink.label}
              </Link>
              {evenementsDropdown.items.map((e) => (
                <Link key={e.label} href={e.href} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 text-[#061952]">
                  <span className="w-9 h-9 rounded-lg bg-[#FFD25D]/20 text-[#061952] flex items-center justify-center flex-shrink-0">
                    <e.icon className="w-[18px] h-[18px]" />
                  </span>
                  <span className="text-[15px]">{e.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <PodiumButton href="/contact" variant="secondary" size="default" className="w-full">
            Contact
          </PodiumButton>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40" onClick={() => setIsMenuOpen(false)} />
      )}
    </nav>
  )
}
