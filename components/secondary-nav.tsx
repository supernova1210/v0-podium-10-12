import Link from "next/link"
import { Phone, Linkedin } from "lucide-react"

export default function SecondaryNav() {
  return (
    <div className="bg-[#061952] text-white py-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-8 text-xs sm:text-sm">
          {/* Devenir formateur link */}
          <Link
            href="/contact"
            className="whitespace-nowrap hover:text-[#FFD25D] transition-colors duration-200"
          >
            Devenir formateur
          </Link>

          {/* Phone number */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <a
              href="tel:0770003672"
              className="whitespace-nowrap hover:text-[#FFD25D] transition-colors duration-200"
            >
              07 70 00 36 72
            </a>
          </div>

          {/* LinkedIn link */}
          <a
            href="https://www.linkedin.com/company/of-podium/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 flex-shrink-0 bg-[#0077B5] rounded hover:bg-[#005885] transition-colors duration-200"
            aria-label="LinkedIn PODIUM"
          >
            <Linkedin className="h-4 w-4 text-white" />
          </a>
        </div>
      </div>
    </div>
  )
}
