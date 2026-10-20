import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { Crumb } from "@/lib/seo"

/** Fil d'Ariane visible. Le dernier élément est la page courante (non cliquable). */
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((c, i) => {
          const last = i === items.length - 1
          return (
            <li key={c.href} className="inline-flex items-center gap-1.5 min-w-0">
              {last ? (
                <span aria-current="page" className="text-[#061952] font-medium truncate max-w-[16rem] sm:max-w-none">
                  {c.label}
                </span>
              ) : (
                <>
                  <Link href={c.href} className="hover:text-[#061952] transition-colors">
                    {c.label}
                  </Link>
                  <ChevronRight aria-hidden className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
