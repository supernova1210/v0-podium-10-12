/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Pas d'optimiseur Vercel : variantes 640 / 1080 px pré-générées, voir lib/image-loader.ts
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [640, 1080, 1920],
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    // Les mémos PDF (hors de public/) doivent être embarqués avec la route qui les envoie
    outputFileTracingIncludes: {
      "/api/memo": ["./private/memos/**"],
    },
  },

  async redirects() {
    return [
      // Le mémo n'est plus en téléchargement libre : on renvoie vers le formulaire
      {
        source: "/documents/memo-reveil-musculaire-podium.pdf",
        destination: "/ressources/reveil-musculaire-en-entreprise#recevoir-le-memo",
        permanent: true,
      },
      {
        source: "/formations-management",
        destination: "/formations-securite",
        permanent: true,
      },
      {
        source: "/formation-ambassadeur-reveil-musculaire",
        destination: "/formation-securite-reveil-musculaire",
        permanent: true,
      },
      {
        source: "/formation-geste-et-posture",
        destination: "/formation-securite-geste-et-posture",
        permanent: true,
      },
      {
        source: "/formation-management-lancer-dynamiser-reunion",
        destination: "/formation-qvct-lancer-dynamiser-reunion",
        permanent: true,
      },
      {
        source: "/formation-management-technique-animation",
        destination: "/formation-qvct-technique-animation",
        permanent: true,
      },
      {
        source: "/formation-management-affirmer-confiance-cnv",
        destination: "/formation-qvct-communication-non-violente",
        permanent: true,
      },
      {
        source: "/formation-sante-mentale-detecter-mal-etre",
        destination: "/formation-qvct-sante-mentale-detecter-mal-etre",
        permanent: true,
      },
      {
        source: "/formation-valoriser-posture-professionnelle",
        destination: "/formation-qvct-valoriser-posture-professionnelle",
        permanent: true,
      },
      // Anciens ateliers hors catalogue 2026 (validé avec le client)
      {
        source: "/atelier/sophrologie",
        destination: "/atelier/gestion-des-emotions-sophrologie",
        permanent: true,
      },
      {
        source: "/atelier/sport-transfert-savoir-etre",
        destination: "/atelier/posture-pro-defi-flash",
        permanent: true,
      },
      {
        source: "/atelier/valorisation-des-savoir-etre",
        destination: "/atelier/posture-pro-defi-flash",
        permanent: true,
      },
      // Ancienne page modèle héritée de v0
      {
        source: "/atelier/template",
        destination: "/nos-ateliers",
        permanent: true,
      },
    ]
  },
}

export default nextConfig