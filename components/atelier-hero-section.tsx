import { Clock, Users, MapPin } from "lucide-react"

interface Badge {
  icon: "clock" | "users" | "mappin"
  title: string
  description: string
}

interface CTA {
  text: string
  href: string
  type: "primary" | "secondary"
  target?: string
}

interface AtelierHeroSectionProps {
  title: string
  description: string
  badges: Badge[]
  image: {
    src: string
    alt: string
  }
  ctas: CTA[]
}

const iconMap = {
  clock: Clock,
  users: Users,
  mappin: MapPin,
}

export default function AtelierHeroSection({ title, description, badges, image, ctas }: AtelierHeroSectionProps) {
  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-15 blur-xl"></div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#061952] font-poppins leading-tight">
                {title}
              </h1>

              <div className="space-y-4">
                {badges.map((badge, index) => {
                  const IconComponent = iconMap[badge.icon]
                  const isYellow = index % 2 === 0

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    >
                      <div
                        className={`w-16 h-16 ${isYellow ? "bg-gradient-to-br from-[#FFD25D] to-[#FFC107]" : "bg-gradient-to-br from-[#061952] to-[#0a2470]"} rounded-2xl flex items-center justify-center shadow-md`}
                      >
                        <IconComponent className={`w-8 h-8 ${isYellow ? "text-[#061952]" : "text-white"}`} />
                      </div>
                      <div>
                        <span className="text-[#061952] font-bold text-lg">{badge.title}</span>
                        <p className="text-[#4A4A4A] text-sm">{badge.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">{description}</p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {ctas.map((cta, index) => (
                  <a
                    key={index}
                    href={cta.href}
                    target={cta.target}
                    rel={cta.target === "_blank" ? "noopener noreferrer" : undefined}
                    className={`group inline-flex items-center justify-center px-8 py-4 font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 relative overflow-hidden ${
                      cta.type === "primary"
                        ? "bg-[#FFD25D] text-[#061952] hover:bg-[#FFC107] focus:ring-[#FFD25D]/30"
                        : "bg-white text-[#061952] border-2 border-[#061952] hover:bg-[#061952] hover:text-white focus:ring-[#061952]/30"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {cta.text}
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {cta.type === "primary" ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        )}
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="relative">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-[300px] md:h-[350px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FFD25D] rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#061952] rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-[#FFD25D] rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
