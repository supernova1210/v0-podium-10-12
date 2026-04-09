import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#061952] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left side - Company info */}
          <div className="flex-1 space-y-3">
            <div className="text-sm">
              <p>
                Copyright ©2025 O.F PODIUM (PODIUM), tous droits réservés.
                <Link href="/mentions-legales" className="text-[#FFD25D] hover:underline ml-1">
                  Mentions légales & RGPD
                </Link>
              </p>
            </div>
            <div className="text-sm space-y-1">
              <p>PODIUM, 36 rue des Apôtres, 01500 Ambérieu-en-Bugey</p>
              <p>
                Réalisation <span className="text-[#FFD25D]">Podium®</span>
              </p>
            </div>
          </div>

          {/* Right side - Logo */}
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center lg:items-end">
              <Image
                src="/images/podium-logo-white.svg"
                alt="PODIUM - Organisme de formation"
                width={200}
                height={100}
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
