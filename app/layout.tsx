import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import SecondaryNav from "../components/secondary-nav"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Podium - Organisme de formation",
  description:
    "Podium, votre organisme de formation spécialisé en QVCT, management et sécurité. Formations, ateliers et événements pour améliorer la qualité de vie au travail.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <SecondaryNav />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
