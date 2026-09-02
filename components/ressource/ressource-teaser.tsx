import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Clock } from "lucide-react"
import Reveal from "@/components/reveal"

interface RessourceTeaserProps {
  href: string
  title: string
  description: string
  image: string
  readingTime: string
  accent?: "jaune" | "teal"
}

export default function RessourceTeaser({
  href,
  title,
  description,
  image,
  readingTime,
  accent = "jaune",
}: RessourceTeaserProps) {
  const dot = accent === "teal" ? "bg-[#57B3B7]" : "bg-[#FFD25D]"

  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <Link
            href={href}
            className="group grid md:grid-cols-[0.85fr_1.15fr] gap-0 max-w-5xl mx-auto bg-[#fafbfe] border border-gray-200 rounded-[28px] overflow-hidden shadow-[0_4px_18px_rgba(6,25,82,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(6,25,82,0.14)]"
          >
            <div className="relative h-52 md:h-auto md:min-h-[240px] overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-7 md:p-9 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952] mb-3">
                <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                Ressource gratuite
              </span>
              <h2 className="font-poppins font-bold text-[#061952] text-2xl md:text-3xl leading-snug mb-3">{title}</h2>
              <p className="text-[15.5px] text-gray-600 leading-relaxed mb-5">{description}</p>
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 font-poppins font-semibold text-[15px] text-[#061952]">
                  Lire le mémo
                  <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FFD25D] group-hover:border-[#FFD25D]">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  {readingTime}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                  <BookOpen className="w-4 h-4" />
                  Accès libre
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
