import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import SecondaryNav from "../components/secondary-nav"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import CookieConsent from "../components/cookie-consent"
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
  title: {
    default: "Organisme de formation QVCT Lyon & Rhône-Alpes | Podium",
    template: "%s | Podium",
  },
  description:
    "Podium accompagne les entreprises de Lyon et de toute la région Rhône-Alpes avec des formations QVCT, ateliers prévention et événements ludiques. Interventions sur site, devis gratuit sous 12h.",
  metadataBase: new URL("https://www.ofpodium.fr"),
  // Pas de canonical global : chaque page déclare le sien (sinon une page qui l'oublie se déclare copie de l'accueil)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.ofpodium.fr",
    siteName: "Podium — Organisme de formation QVCT",
    title: "Organisme de formation QVCT Lyon & Rhône-Alpes | Podium",
    description:
      "Formations QVCT, ateliers prévention et événements sur mesure pour vos équipes. Podium intervient dans toute la région Rhône-Alpes.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Podium — Organisme de formation QVCT",
  url: "https://www.ofpodium.fr",
  logo: "https://www.ofpodium.fr/images/podium-logo.png",
  image: "https://www.ofpodium.fr/images/podium-formation-equipe.webp",
  description:
    "Organisme de formation QVCT, prévention et sécurité au travail. Formations, ateliers et journées sécurité animés dans les locaux des entreprises, à Lyon, dans l'Ain et en Auvergne-Rhône-Alpes.",
  telephone: "+33770003672",
  email: "nicolas@ofpodium.fr",
  sameAs: ["https://www.linkedin.com/company/of-podium/"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "36 rue des Apôtres",
    addressLocality: "Ambérieu-en-Bugey",
    postalCode: "01500",
    addressRegion: "Ain",
    addressCountry: "FR",
  },
  areaServed: [
    // Lyon et métropole (pôles d'entreprises)
    { "@type": "City", name: "Lyon" },
    { "@type": "City", name: "Villeurbanne" },
    { "@type": "City", name: "Vénissieux" },
    { "@type": "City", name: "Saint-Priest" },
    { "@type": "City", name: "Bron" },
    { "@type": "City", name: "Vaulx-en-Velin" },
    { "@type": "City", name: "Décines-Charpieu" },
    { "@type": "City", name: "Meyzieu" },
    { "@type": "City", name: "Chassieu" },
    { "@type": "City", name: "Genas" },
    { "@type": "City", name: "Corbas" },
    { "@type": "City", name: "Rillieux-la-Pape" },
    { "@type": "City", name: "Limonest" },
    { "@type": "City", name: "Dardilly" },
    { "@type": "City", name: "Écully" },
    { "@type": "City", name: "Villefranche-sur-Saône" },
    // Ain et zones d'activité
    { "@type": "City", name: "Ambérieu-en-Bugey" },
    { "@type": "City", name: "Bourg-en-Bresse" },
    { "@type": "City", name: "Oyonnax" },
    { "@type": "City", name: "Belley" },
    { "@type": "City", name: "Saint-Vulbas" },
    { "@type": "City", name: "Lagnieu" },
    { "@type": "City", name: "Meximieux" },
    { "@type": "City", name: "Montluel" },
    { "@type": "City", name: "Miribel" },
    { "@type": "City", name: "Beynost" },
    { "@type": "City", name: "Dagneux" },
    { "@type": "Place", name: "Parc Industriel de la Plaine de l'Ain" },
    // Reste de la région
    { "@type": "City", name: "Vienne" },
    { "@type": "City", name: "Bourgoin-Jallieu" },
    { "@type": "City", name: "Grenoble" },
    { "@type": "City", name: "Annecy" },
    { "@type": "City", name: "Chambéry" },
    { "@type": "City", name: "Valence" },
    { "@type": "City", name: "Saint-Étienne" },
    { "@type": "AdministrativeArea", name: "Métropole de Lyon" },
    { "@type": "AdministrativeArea", name: "Ain" },
    { "@type": "AdministrativeArea", name: "Rhône" },
    { "@type": "AdministrativeArea", name: "Loire" },
    { "@type": "AdministrativeArea", name: "Isère" },
    { "@type": "AdministrativeArea", name: "Savoie" },
    { "@type": "AdministrativeArea", name: "Haute-Savoie" },
    { "@type": "AdministrativeArea", name: "Drôme" },
    { "@type": "AdministrativeArea", name: "Auvergne-Rhône-Alpes" },
  ],
  knowsAbout: [
    "QVCT",
    "Prévention",
    "Organisme de formation",
    "Qualité de vie et conditions de travail",
    "Prévention des risques professionnels",
    "Bien-être au travail",
    "Journée Sécurité",
    "Safety Day",
    "Formation en entreprise",
    "Ateliers prévention",
    "Journée prévention",
    "Escape game sécurité",
    "Gestes et postures",
    "TMS",
    "Santé mentale",
    "RPS",
  ],
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <SecondaryNav />
        <Navigation />
        {children}
        <Footer />
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  )
}
