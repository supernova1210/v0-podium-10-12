"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface PodiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "lg"
  href?: string
  children: React.ReactNode
  showArrow?: boolean
  className?: string
}

const PodiumButton = React.forwardRef<HTMLButtonElement, PodiumButtonProps>(
  ({ variant = "primary", size = "default", href, children, showArrow = true, className, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 group relative overflow-hidden"

    const variants = {
      primary:
        "bg-[#FFD25D] text-[#061952] hover:bg-[#FFC940] focus:ring-[#FFD25D] hover:shadow-lg hover:shadow-[#FFD25D]/30",
      secondary:
        "bg-[#061952] text-white hover:bg-[#0a1f5c] focus:ring-[#061952] hover:shadow-lg hover:shadow-[#061952]/30",
      outline:
        "border-2 border-[#061952] text-[#061952] bg-transparent hover:bg-[#061952] hover:text-white focus:ring-[#061952] hover:shadow-lg",
    }

    const sizes = {
      default: "px-8 py-4 text-base rounded-xl",
      lg: "px-10 py-5 text-lg rounded-xl",
    }

    const buttonClasses = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      "hover:scale-105 hover:-translate-y-1",
      className,
    )

    const content = (
      <>
        {/* Background animation effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

        <span className="relative z-10">{children}</span>

        {showArrow && (
          <ArrowRight className="relative z-10 w-5 h-5 ml-3 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
        )}
      </>
    )

    if (href) {
      return (
        <a href={href} className={buttonClasses} {...(props as any)}>
          {content}
        </a>
      )
    }

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {content}
      </button>
    )
  },
)

PodiumButton.displayName = "PodiumButton"

export { PodiumButton }
