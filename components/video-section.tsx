import Reveal from "@/components/reveal"
import VideoPlayer from "@/components/video-player"

interface VideoSectionProps {
  eyebrow?: string
  title: string
  subtitle?: string
  src: string
  poster: string
  videoTitle: string
  description: string
  duration?: string
  /** Durée au format ISO 8601, ex. "PT1M25S" */
  isoDuration?: string
  uploadDate?: string
  dotColor?: string
}

const BASE_URL = "https://www.ofpodium.fr"

export default function VideoSection({
  eyebrow = "En images",
  title,
  subtitle,
  src,
  poster,
  videoTitle,
  description,
  duration,
  isoDuration,
  uploadDate = "2026-07-06",
  dotColor = "bg-[#FFD25D]",
}: VideoSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: videoTitle,
    description,
    thumbnailUrl: `${BASE_URL}${poster}`,
    contentUrl: `${BASE_URL}${src}`,
    uploadDate,
    ...(isoDuration ? { duration: isoDuration } : {}),
    publisher: {
      "@type": "Organization",
      name: "Podium",
      url: BASE_URL,
    },
  }

  return (
    <section className="py-16 md:py-24 bg-[#fafbfe] relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-50px] top-28 hidden xl:block w-44 h-44 rounded-[36px] bg-[#FFD25D]/15" />
        <div className="absolute right-[-45px] bottom-28 hidden xl:block w-48 h-48 rounded-[38px] border-2 border-[#57B3B7]/25" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
            {eyebrow}
          </span>
          <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-5xl mt-4 mb-4">
            {title}
          </h2>
          {subtitle ? <p className="text-lg text-gray-600">{subtitle}</p> : null}
        </Reveal>

        <Reveal delay={120} className="max-w-4xl mx-auto">
          <VideoPlayer src={src} poster={poster} title={videoTitle} duration={duration} />
        </Reveal>
      </div>
    </section>
  )
}
