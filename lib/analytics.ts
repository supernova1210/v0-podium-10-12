/**
 * Google Analytics 4 + consentement (CNIL)
 *
 * GA4 n'est chargé qu'après un "Accepter" explicite dans le bandeau cookies.
 * Identifiant de mesure : variable d'environnement NEXT_PUBLIC_GA_ID (ex. G-XXXXXXXXXX).
 * Sans cette variable, rien n'est chargé et le bandeau ne s'affiche pas.
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ""

export const CONSENT_KEY = "podium-consent-v1"
/** Choix conservé 6 mois (recommandation CNIL), puis on redemande. */
export const CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182
/** Événement global pour rouvrir le bandeau (lien "Gestion des cookies"). */
export const OPEN_CONSENT_EVENT = "podium:open-cookie-settings"

export type ConsentValue = { analytics: boolean; date: string }

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function readConsent(): ConsentValue | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const value = JSON.parse(raw) as ConsentValue
    if (!value?.date || Date.now() - new Date(value.date).getTime() > CONSENT_MAX_AGE_MS) return null
    return value
  } catch {
    return null
  }
}

export function writeConsent(analytics: boolean): ConsentValue {
  const value = { analytics, date: new Date().toISOString() }
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(value))
  } catch {
    /* stockage indisponible : le choix vaut pour la session */
  }
  return value
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))
}

/** Envoie un événement GA4. Ne fait rien si GA n'est pas chargé (pas de consentement). */
export function trackEvent(name: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", name, params)
}
