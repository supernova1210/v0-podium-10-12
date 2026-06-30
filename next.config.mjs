/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
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
    ]
  },
}

export default nextConfig