"use client"

import { useEffect, useState } from "react"
import { Linkedin, X } from "lucide-react"
import { CONSENT_UPDATED_EVENT, GA_ID, OPEN_CONSENT_EVENT, readConsent, trackEvent } from "@/lib/analytics"

/**
 * Invitation à suivre la page LinkedIn de Podium.
 *
 * - Carte en bas à droite (pleine largeur en bas sur mobile), jamais une fenêtre qui bloque
 *   la page : Google pénalise sur mobile les pop-ups qui masquent le contenu.
 * - N'apparaît qu'après le choix cookies (pour ne pas s'empiler sur le bandeau), puis
 *   quelques secondes après l'arrivée sur le site.
 * - Une fois fermée, revient au plus tôt 30 jours plus tard ; après un clic sur « Suivre », plus jamais.
 * - Mémorisée dans le navigateur (localStorage) : simple préférence d'affichage, sans traçage.
 */

const LINKEDIN_URL = "https://www.linkedin.com/company/of-podium/"
const STORAGE_KEY = "podium-linkedin-invite-v1"
const DELAI_MS = 4000
const JOUR_MS = 24 * 60 * 60 * 1000

function masqueeJusquA(): number {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? Number(JSON.parse(raw).until) || 0 : 0
  } catch {
    return 0
  }
}

function masquerPendant(jours: number) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ until: Date.now() + jours * JOUR_MS }))
  } catch {
    /* stockage indisponible : l'invitation reviendra à la prochaine visite */
  }
}

export default function LinkedinInvite() {
  const [open, setOpen] = useState(false)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (masqueeJusquA() > Date.now()) return
    let timer: number | undefined

    const programmer = () => {
      // Le bandeau cookies est encore affiché : on attend le choix du visiteur
      if (GA_ID && !readConsent()) return
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        setOpen(true)
        setShown(true)
      }, DELAI_MS)
    }

    programmer()
    const fermerPourCookies = () => setOpen(false)
    window.addEventListener(CONSENT_UPDATED_EVENT, programmer)
    window.addEventListener(OPEN_CONSENT_EVENT, fermerPourCookies)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener(CONSENT_UPDATED_EVENT, programmer)
      window.removeEventListener(OPEN_CONSENT_EVENT, fermerPourCookies)
    }
  }, [])

  useEffect(() => {
    if (open) trackEvent("linkedin_invite_view")
  }, [open])

  if (!shown) return null

  const fermer = () => {
    masquerPendant(30)
    setOpen(false)
  }

  const suivre = () => {
    trackEvent("linkedin_follow_click")
    masquerPendant(3650)
    setOpen(false)
  }

  return (
    <aside
      aria-label="Suivre Podium sur LinkedIn"
      hidden={!open}
      className="podium-cookie-in fixed z-[90] bottom-3 inset-x-3 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[360px]"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="relative overflow-hidden rounded-[22px] bg-white shadow-[0_18px_50px_rgba(6,25,82,0.22)] ring-1 ring-[#061952]/10">
        <div aria-hidden className="flex h-1.5">
          <div className="flex-1 bg-[#FFD25D]" />
          <div className="flex-1 bg-[#57B3B7]" />
          <div className="flex-1 bg-[#C9426B]" />
        </div>

        <button
          type="button"
          onClick={fermer}
          aria-label="Fermer l'invitation LinkedIn"
          className="absolute top-4 right-3 w-8 h-8 rounded-full flex items-center justify-center text-[#061952]/60 transition-colors hover:bg-[#061952]/[0.06] hover:text-[#061952]"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-5 pr-12 flex items-center sm:items-start gap-4">
          <span className="w-12 h-12 shrink-0 rounded-2xl bg-[#0A66C2] flex items-center justify-center">
            <Linkedin className="w-6 h-6 text-white" />
          </span>
          <div className="min-w-0">
            <p className="font-poppins font-bold text-[17px] leading-snug text-[#061952]">Suivez Podium sur LinkedIn</p>
            <p className="mt-1.5 hidden sm:block text-[14.5px] leading-relaxed text-gray-600">
              Les coulisses de nos interventions, nos nouveaux ateliers et nos conseils QVCT et prévention.
            </p>
          </div>
        </div>

        <div className="px-5 pb-5 flex items-center gap-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={suivre}
            className="inline-flex items-center justify-center gap-2 font-poppins font-semibold text-[15px] px-5 py-2.5 rounded-full bg-[#0A66C2] text-white transition-colors hover:bg-[#004182]"
          >
            <Linkedin className="w-4 h-4" />
            Suivre la page
          </a>
          <button
            type="button"
            onClick={fermer}
            className="font-poppins font-semibold text-[14.5px] text-[#061952]/70 underline underline-offset-4 hover:text-[#061952]"
          >
            Plus tard
          </button>
        </div>
      </div>
    </aside>
  )
}
