import Link from "next/link"
import { Phone, Linkedin } from "lucide-react"

export default function SecondaryNav() {
  return (
    <div className="bg-[#061952] text-white py-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-end space-x-8 text-sm">
          {/* Devenir formateur link */}
          <Link href="/contact" className="hover:text-[#FFD25D] transition-colors duration-200">
            Devenir formateur
          </Link>

          {/* Phone number */}
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <a href="tel:0770003672" className="hover:text-[#FFD25D] transition-colors duration-200">
              07 70 00 36 72
            </a>
          </div>

          {/* LinkedIn link */}
          <a
            href="https://www.linkedin.com/company/of-podium/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 bg-[#0077B5] rounded hover:bg-[#005885] transition-colors duration-200"
            aria-label="LinkedIn PODIUM"
          >
            <Linkedin className="h-4 w-4 text-white" />
          </a>
        </div>
      </div>
    </div>
  )
}
