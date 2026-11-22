import Image from "next/image"

/** Grande photo d'illustration dans une ressource, avec légende. */
export default function RessourcePhoto({
  src,
  alt,
  caption,
  ratio = "16/9",
}: {
  src: string
  alt: string
  caption: string
  /** Proportions du cadre, ex. "16/9", "3/2" */
  ratio?: string
}) {
  return (
    <figure className="m-0">
      <div
        className="relative w-full max-w-full overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(6,25,82,0.14)]"
        style={{ aspectRatio: ratio }}
      >
        <Image src={src} alt={alt} fill sizes="(min-width: 1152px) 1100px, 100vw" className="object-cover" />
      </div>
      <figcaption className="mt-3.5 flex items-start gap-2.5 text-[14.5px] leading-relaxed text-gray-500">
        <span aria-hidden className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FFD25D] shrink-0" />
        {caption}
      </figcaption>
    </figure>
  )
}
