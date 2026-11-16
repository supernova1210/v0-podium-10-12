import variants from "./image-variants.json"

/**
 * Loader next/image sans l'optimiseur Vercel (quota partagé en plan Hobby).
 * Les photos ont des variantes pré-générées en 640 et 1080 px (`nom-640w.webp`) :
 * le navigateur choisit la plus petite qui couvre l'écran, au lieu de toujours
 * télécharger l'original de 1920 px.
 *
 * Après l'ajout ou le remplacement d'une photo, régénérer les variantes et
 * lib/image-variants.json. Sans variante, l'image reste servie telle quelle.
 */
const available = variants as Record<string, number[]>

export default function podiumImageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  const sizes = available[src.normalize("NFC")]
  const w = sizes?.find((s) => width <= s)
  const url = w ? src.replace(/\.webp$/, `-${w}w.webp`) : src
  // Encodé pour que les espaces et accents ne cassent pas le srcset
  return encodeURI(url)
}
