"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import Script from "next/script"
import { usePathname } from "next/navigation"
import { BarChart3, X } from "lucide-react"
import {
  GA_ID,
  OPEN_CONSENT_EVENT,
  readConsent,
  trackEvent,
  writeConsent,
} from "@/lib/analytics"

/** Supprime les cookies GA déjà déposés (retrait du consentement). */
function clearGaCookies() {
  const host = window.location.hostname
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`]
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0]?.trim()
    if (!name || !name.startsWith("_ga")) return
    domains.forEach((d) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ""}`
    })
  })
}

export default function CookieConsent() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [granted, setGranted] = useState(false)

  // Lecture du choix enregistré
  useEffect(() => {
    setMounted(true)
    if (!GA_ID) return
    const stored = readConsent()
    if (stored) setGranted(stored.analytics)
    else setOpen(true)
  }, [])

  // Lien "Gestion des cookies" (footer, mentions légales)
  useEffect(() => {
    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_CONSENT_EVENT, reopen)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen)
  }, [])

  // Pages vues lors de la navigation côté client
  useEffect(() => {
    if (!granted || !GA_ID || typeof window.gtag !== "function") return
    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname, granted])

  // Clics sur téléphone et email, partout sur le site (sans toucher chaque lien)
  useEffect(() => {
    if (!granted) return
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!link) return
      const href = link.getAttribute("href") || ""
      if (href.startsWith("tel:")) trackEvent("click_phone", { page: window.location.pathname })
      else if (href.startsWith("mailto:")) trackEvent("click_email", { page: window.location.pathname })
    }
    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [granted])

  const accept = useCallback(() => {
    writeConsent(true)
    ;(window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = false
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "granted" })
    }
    setGranted(true)
    setOpen(false)
  }, [])

  const refuse = useCallback(() => {
    writeConsent(false)
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "denied" })
      ;(window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = true
    }
    clearGaCookies()
    setGranted(false)
    setOpen(false)
  }, [])

  if (!mounted || !GA_ID) return null

  return (
    <>
      {granted ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              window['ga-disable-${GA_ID}'] = false;
              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                send_page_view: false,
                cookie_expires: 34128000
              });
              gtag('event', 'page_view', {
                page_path: window.location.pathname,
                page_location: window.location.href,
                page_title: document.title
              });
            `}
          </Script>
        </>
      ) : null}

      {open ? (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-desc"
          className="podium-cookie-in fixed z-[95] inset-x-3 bottom-3 sm:inset-x-auto sm:left-5 sm:bottom-5 sm:w-[420px]"
        >
          <div className="relative overflow-hidden rounded-[22px] bg-[#061952] text-white shadow-[0_18px_50px_rgba(6,25,82,0.35)] ring-1 ring-white/10">
            <div aria-hidden className="absolute -right-10 -top-10 w-32 h-32 rounded-[30px] bg-[#FFD25D]/10 rotate-12" />
            <div className="h-1.5 flex">
              <div className="flex-1 bg-[#FFD25D]" />
              <div className="flex-1 bg-[#57B3B7]" />
              <div className="flex-1 bg-[#C9426B]" />
            </div>

            <div className="relative p-6">
              <button
                type="button"
                onClick={refuse}
                aria-label="Fermer et refuser"
                className="absolute right-4 top-4 w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-3 pr-8">
                <span className="w-10 h-10 rounded-xl bg-[#FFD25D] text-[#061952] flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </span>
                <p id="cookie-title" className="font-poppins font-semibold text-lg leading-tight">
                  On mesure l&apos;audience, c&apos;est tout
                </p>
              </div>

              <p id="cookie-desc" className="text-[14px] text-white/75 leading-relaxed">
                Avec votre accord, nous utilisons Google Analytics pour savoir quelles pages vous sont utiles et
                améliorer le site. Aucune publicité, aucune revente de données. Vous pouvez changer d&apos;avis à
                tout moment.{" "}
                <Link href="/mentions-legales#cookies" className="text-[#FFD25D] underline underline-offset-2">
                  En savoir plus
                </Link>
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={refuse}
                  className="font-poppins font-semibold text-[15px] py-3 rounded-full bg-white text-[#061952] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Refuser
                </button>
                <button
                  type="button"
                  onClick={accept}
                  className="font-poppins font-semibold text-[15px] py-3 rounded-full bg-[#FFD25D] text-[#061952] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffdb7a]"
                >
                  Accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
