"use client"

import { openConsentSettings } from "@/lib/analytics"

export default function CookieSettingsButton({
  className = "",
  children = "Gestion des cookies",
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      {children}
    </button>
  )
}
