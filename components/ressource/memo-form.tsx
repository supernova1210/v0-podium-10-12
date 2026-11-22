"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { AlertCircle, ArrowRight, CheckCircle2, FileText, Mail } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

interface MemoFormData {
  prenom: string
  nom: string
  email: string
  entreprise: string
  website?: string
}

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#061952] placeholder:text-gray-400 transition-colors focus:border-[#061952] focus:outline-none focus:ring-2 focus:ring-[#FFD25D]/60"

/**
 * Formulaire « Recevoir le mémo par email » : le PDF n'est plus en téléchargement libre,
 * il part en pièce jointe via /api/memo, et Nicolas est prévenu de la demande.
 */
export default function MemoForm({ ressource, memoTitle }: { ressource: string; memoTitle: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [sentTo, setSentTo] = useState("")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MemoFormData>()

  const onSubmit = async (data: MemoFormData) => {
    setStatus("sending")
    try {
      const res = await fetch("/api/memo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ressource }),
      })
      if (!res.ok) throw new Error(String(res.status))
      trackEvent("generate_lead", { form: "memo", ressource })
      setSentTo(data.email)
      setStatus("sent")
      reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <div
      id="recevoir-le-memo"
      className="scroll-mt-36 relative overflow-hidden rounded-[28px] bg-white border border-gray-100 shadow-[0_18px_50px_rgba(6,25,82,0.08)]"
    >
      <div aria-hidden className="flex h-1.5">
        <div className="flex-1 bg-[#FFD25D]" />
        <div className="flex-1 bg-[#57B3B7]" />
        <div className="flex-1 bg-[#C9426B]" />
      </div>

      <div className="grid md:grid-cols-[0.85fr_1.15fr]">
        {/* Promesse */}
        <div className="relative overflow-hidden bg-[#061952] text-white p-7 md:p-9">
          <div aria-hidden className="absolute -bottom-12 -right-10 w-36 h-36 rounded-[30px] border-2 border-[#FFD25D]/20" />
          <span className="relative w-14 h-14 rounded-2xl bg-[#FFD25D] flex items-center justify-center mb-5">
            <FileText className="w-7 h-7 text-[#061952]" />
          </span>
          <h3 className="relative font-poppins font-bold text-2xl leading-tight">Recevez le mémo en PDF</h3>
          <p className="relative text-white/75 text-[15px] leading-relaxed mt-3">
            La version complète, prête à imprimer ou à partager avec vos équipes, envoyée directement dans votre boîte
            mail.
          </p>
          <ul className="relative mt-5 grid gap-2.5 text-[15px]">
            {["Format PDF haute définition", "Gratuit, sans engagement", "Envoi immédiat par email"].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D] shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Formulaire */}
        <div className="p-7 md:p-9">
          {status === "sent" ? (
            <div role="status" className="h-full flex flex-col justify-center">
              <CheckCircle2 className="w-12 h-12 text-[#57B3B7] mb-4" />
              <p className="font-poppins font-bold text-xl text-[#061952]">C&apos;est parti !</p>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {memoTitle.charAt(0).toUpperCase() + memoTitle.slice(1)} arrive dans quelques instants à l&apos;adresse{" "}
                <strong className="text-[#061952] break-all">{sentTo}</strong>. Pensez à regarder dans vos courriers
                indésirables si vous ne le voyez pas.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 self-start font-poppins font-semibold text-[15px] text-[#061952] underline underline-offset-4 hover:no-underline"
              >
                L&apos;envoyer à une autre adresse
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4">
              <p className="text-sm text-gray-500 -mb-1">Tous les champs sont obligatoires.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <label htmlFor="memo-prenom" className="font-poppins font-semibold text-sm text-[#061952]">
                    Prénom
                  </label>
                  <input
                    id="memo-prenom"
                    autoComplete="given-name"
                    className={inputClass}
                    aria-required="true"
                    aria-invalid={Boolean(errors.prenom)}
                    {...register("prenom", { required: "Indiquez votre prénom" })}
                  />
                  {errors.prenom ? <p className="text-sm text-[#C9426B]">{errors.prenom.message}</p> : null}
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="memo-nom" className="font-poppins font-semibold text-sm text-[#061952]">
                    Nom
                  </label>
                  <input
                    id="memo-nom"
                    autoComplete="family-name"
                    className={inputClass}
                    aria-required="true"
                    aria-invalid={Boolean(errors.nom)}
                    {...register("nom", { required: "Indiquez votre nom" })}
                  />
                  {errors.nom ? <p className="text-sm text-[#C9426B]">{errors.nom.message}</p> : null}
                </div>
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="memo-email" className="font-poppins font-semibold text-sm text-[#061952]">
                  Email professionnel
                </label>
                <input
                  id="memo-email"
                  type="email"
                  autoComplete="email"
                  placeholder="prenom.nom@entreprise.fr"
                  className={inputClass}
                  aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                  {...register("email", {
                    required: "Indiquez l'adresse qui recevra le mémo",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: "Cette adresse email semble incomplète" },
                  })}
                />
                {errors.email ? <p className="text-sm text-[#C9426B]">{errors.email.message}</p> : null}
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="memo-entreprise" className="font-poppins font-semibold text-sm text-[#061952]">
                  Entreprise
                </label>
                <input
                  id="memo-entreprise"
                  autoComplete="organization"
                  className={inputClass}
                  aria-required="true"
                    aria-invalid={Boolean(errors.entreprise)}
                  {...register("entreprise", { required: "Indiquez le nom de votre entreprise" })}
                />
                {errors.entreprise ? <p className="text-sm text-[#C9426B]">{errors.entreprise.message}</p> : null}
              </div>

              {/* Pot de miel anti-robots : invisible pour les humains */}
              <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                <label htmlFor="memo-website">Ne pas remplir</label>
                <input id="memo-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
              </div>

              {status === "error" ? (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-2xl border border-[#C9426B]/25 bg-[#C9426B]/[0.06] px-4 py-3.5 text-[15px] text-[#061952]"
                >
                  <AlertCircle className="w-5 h-5 text-[#C9426B] shrink-0 mt-0.5" />
                  <p>
                    L&apos;envoi n&apos;a pas abouti. Réessayez dans un instant ou appelez-nous au{" "}
                    <a href="tel:0770003672" className="font-semibold underline underline-offset-2 whitespace-nowrap">
                      07 70 00 36 72
                    </a>
                    .
                  </p>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-7 py-4 rounded-full bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.45)] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {status === "sending" ? (
                  "Envoi en cours…"
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Recevoir le mémo
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-[13px] leading-relaxed text-gray-500">
                Vos coordonnées servent à vous envoyer le mémo. Podium pourra aussi vous recontacter au sujet de ses
                formations, ce que vous pouvez refuser à tout moment.{" "}
                <Link href="/mentions-legales#donnees" className="underline underline-offset-2 hover:text-[#061952]">
                  Vos données
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
