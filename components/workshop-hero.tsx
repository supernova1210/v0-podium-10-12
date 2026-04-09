import type React from "react"
import { Clock, Users, MapPin } from "lucide-react"

interface WorkshopHeroProps {
  children: React.ReactNode
}

export function WorkshopHero({ children }: WorkshopHeroProps) {
  return (
    <section className="py-8 md:py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}

interface HeroContentProps {
  children: React.ReactNode
}

export function HeroContent({ children }: HeroContentProps) {
  return <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">{children}</div>
}

interface HeroTextProps {
  children: React.ReactNode
}

export function HeroText({ children }: HeroTextProps) {
  return <div className="space-y-6 md:col-span-7 md:pr-4 min-w-0 max-w-full break-words hyphens-auto">{children}</div>
}

interface HeroImageProps {
  src: string
  alt: string
}

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="relative md:col-span-5">
      <div className="relative z-10">
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="w-full h-72 md:h-80 object-cover rounded-3xl shadow-lg"
        />
      </div>
    </div>
  )
}

interface AtelierLabelProps {
  children: React.ReactNode
}

export function AtelierLabel({ children }: AtelierLabelProps) {
  return (
    <div className="inline-flex items-center">
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-md">
        {children}
      </div>
    </div>
  )
}

interface BadgeProps {
  icon: "clock" | "users" | "location"
  children: React.ReactNode
}

export function Badge({ icon, children }: BadgeProps) {
  const IconComponent = icon === "clock" ? Clock : icon === "users" ? Users : MapPin

  const bgColor =
    icon === "clock"
      ? "bg-[#061952]" // PODIUM blue for Animation/clock
      : icon === "users"
        ? "bg-gradient-to-br from-yellow-400 to-yellow-500" // Yellow for users
        : "bg-[#061952]" // PODIUM blue for location

  return (
    <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-md border border-gray-100 min-w-0">
      <div className={`w-14 h-14 ${bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
        <IconComponent className="w-7 h-7 text-white" />
      </div>
      <div className="text-sm font-medium leading-tight flex-1">{children}</div>
    </div>
  )
}

interface BadgesGridProps {
  children: React.ReactNode
}

export function BadgesGrid({ children }: BadgesGridProps) {
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">{children}</div>
}

interface HeroButtonsProps {
  children: React.ReactNode
}

export function HeroButtons({ children }: HeroButtonsProps) {
  return <div className="flex flex-col sm:flex-row gap-4">{children}</div>
}
