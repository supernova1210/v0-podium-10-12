"use client"

import { useEffect, useRef, useState } from "react"
import { Star, ExternalLink } from "lucide-react"

const reviews = [
  {
    name: "Christophe Duperray",
    stars: 5,
    text: "Une experience exceptionnelle avec OF Podium ! Nicolas se distingue par son professionnalisme, son energie communicative et sa bienveillance. Les formations et interventions sont toujours riches, dynamiques et parfaitement organisees.",
  },
  {
    name: "Angelique Bermond",
    stars: 5,
    text: "Nous collaborons avec Nicolas depuis deux ans sur plusieurs evenements et formations, et c'est toujours un vrai plaisir. Son professionnalisme, son adaptabilite et sa bienveillance font de lui un partenaire de confiance.",
  },
  {
    name: "Anaelle BAILLIF",
    stars: 5,
    text: "Excellente experience avec OF PODIUM! Une animation dynamique et ludique pour notre matinee consacree a la securite au travail. En plus d'avoir marque les esprits par son aspect ludique, cette demi-journee nous a permis de faire passer des messages en matiere de prevention des risques professionnels, tout en favorisant la cohesion d'equipe.",
  },
  {
    name: "Bastien ZEGRE",
    stars: 5,
    text: "Nicolas Billard demontre depuis plusieurs annees son professionnalisme, dans ce type d'activite, un savoir-faire acquis a la force du terrain et de l'experience. Il a la capacite a savoir federer sur un moment court ou long terme une equipe autour de lui par son charisme et leadership. Je recommande vivement. Bravo M. Billard!",
  },
]

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sa=X&sca_esv=970ba00ccd9eb848&biw=1440&bih=749&sxsrf=ANbL-n4wovaiCR1KxuK8ZSFIOR2q6Y3Glw:1771590561746&q=avis%20sur%20of%20podium&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDczMjIwNzY2NzU0NTIysTQ0Nd3AyPiKUSixLLNYobi0SCE_TaEgPyWzNHcRKxZBAB07-aZFAAAA&rldimm=17622073375152249155&tbm=lcl&hl=fr-FR&ved=0CAcQ5foLahcKEwiY07ORieiSAxUAAAAAHQAAAAAQBQ#lkt=LocalPoiReviews&arid=Ci9DQUlRQUNvZENodHljRjlvT2t0Zk5uQTBSbFJsYWtsT2JEUnhkbUphYVcxS2RsRRAB"

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
      ))}
    </div>
  )
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}

export default function GoogleReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef<number | null>(null)
  const scrollPosRef = useRef(0)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const singleSetWidth = container.scrollWidth / 3

    const animate = () => {
      if (!isPaused && container) {
        scrollPosRef.current += 0.5
        if (scrollPosRef.current >= singleSetWidth) {
          scrollPosRef.current = 0
        }
        container.style.transform = `translateX(-${scrollPosRef.current}px)`
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused])

  // Triple the reviews for seamless loop
  const tripleReviews = [...reviews, ...reviews, ...reviews]

  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GoogleLogo className="w-8 h-8" />
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Avis Google
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#061952] leading-tight">
              Ce que nos clients disent de nous
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-3xl font-bold text-[#061952]">5.0</span>
              <StarRating count={5} />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel - full width */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 will-change-transform"
            style={{ width: "max-content" }}
          >
            {tripleReviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="w-[380px] flex-shrink-0 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100/80"
              >
                {/* Top row: Google logo + stars */}
                <div className="flex items-center justify-between mb-4">
                  <GoogleLogo className="w-5 h-5" />
                  <StarRating count={review.stars} />
                </div>

                {/* Review text */}
                <p className="text-gray-600 leading-relaxed text-sm mb-5 line-clamp-5">
                  {`"${review.text}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#061952] flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-[#061952] text-sm">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-center mt-10">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 group relative overflow-hidden border-2 border-[#061952] text-[#061952] bg-transparent hover:bg-[#061952] hover:text-white focus:ring-[#061952] hover:shadow-lg px-8 py-4 text-base rounded-xl hover:scale-105 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <GoogleLogo className="relative z-10 w-5 h-5 mr-3" />
            <span className="relative z-10">Voir tous les avis Google</span>
            <ExternalLink className="relative z-10 w-4 h-4 ml-3 transition-all duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
