"use client"

import { useEffect, useState, type ReactNode } from "react"

/**
 * Mise en ligne programmée : n'affiche son contenu qu'à partir d'une date et heure.
 * Le contenu est déployé à l'avance mais reste invisible jusque-là, même pour un
 * visiteur déjà sur la page (bascule automatique à l'heure dite, sans recharger).
 *
 * Rendu côté navigateur uniquement : à réserver à ce qui n'a pas besoin d'être lu
 * par Google (pop-up, pages en noindex…). Une fois la date passée, ce composant
 * peut être retiré et son contenu affiché directement.
 * Les dates sont regroupées dans lib/planning.ts.
 */

export default function APartirDe({ date, children }: { date: string; children: ReactNode }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const reste = Date.parse(date) - Date.now()
    if (reste <= 0) {
      setVisible(true)
      return
    }
    // Bascule à l'heure dite si la page est ouverte (setTimeout limité à ~24 jours)
    if (reste < 2 ** 31 - 1) {
      const t = window.setTimeout(() => setVisible(true), reste)
      return () => window.clearTimeout(t)
    }
  }, [date])

  return visible ? <>{children}</> : null
}
