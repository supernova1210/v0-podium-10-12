"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { AlertCircle, ArrowRight, CalendarDays, CheckCircle2, Mail, Phone, Send } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

const CALENDLY = "https://calendly.com/nicolas-ofpodium/30min"

export const SUJETS = ["Formation", "Atelier", "Événement", "Autre"] as const

interface ContactFormData {
  sujet?: (typeof SUJETS)[number]
  prenom: string
  nom: string
  email: string
  telephone?: string
  entreprise: string
  message: string
  website?: string
}

const ETAPES = [
  { titre: "Vous nous décrivez votre besoin", texte: "Quelques lignes suffisent : le public, le thème, la période." },
  { titre: "On en parle de vive voix", texte: "Un échange pour cerner vos enjeux, vos équipes et vos contraintes." },
  { titre: "Vous recevez une proposition", texte: "Un programme et un devis construits pour votre entreprise." },
]

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#061952] placeholder:text-gray-400 transition-colors focus:border-[#061952] focus:outline-none focus:ring-2 focus:ring-[#FFD25D]/60 aria-[invalid=true]:border-[#C9426B]"
const labelClass = "font-poppins font-semibold text-sm text-[#061952]"
const errorClass = "text-sm text-[#C9426B]"

export function ContactFormSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [prenomEnvoye, setPrenomEnvoye] = useState("")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(String(res.status))
      trackEvent("generate_lead", { form: "contact", sujet: data.sujet ?? "non précisé" })
      setPrenomEnvoye(data.prenom)
      setStatus("sent")
      reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="relative bg-[#fafbfe] py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div
          id="formulaire"
          className="scroll-mt-36 max-w-6xl mx-auto relative overflow-hidden rounded-[28px] bg-white border border-gray-100 shadow-[0_18px_50px_rgba(6,25,82,0.08)]"
        >
          <div aria-hidden className="flex h-1.5">
            <div className="flex-1 bg-[#FFD25D]" />
            <div className="flex-1 bg-[#57B3B7]" />
            <div className="flex-1 bg-[#C9426B]" />
          </div>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Déroulé + contacts directs (sous le formulaire sur mobile) */}
            <aside className="order-2 lg:order-1 relative overflow-hidden bg-[#061952] text-white p-7 md:p-10">
              <div aria-hidden className="absolute -bottom-14 -right-12 w-44 h-44 rounded-[36px] border-2 border-[#FFD25D]/20" />

              <h2 className="relative font-poppins font-bold text-2xl leading-tight">Comment ça se passe ?</h2>
              <ol className="relative mt-7 grid gap-6">
                {ETAPES.map((e, i) => (
                  <li key={e.titre} className="flex gap-4">
                    <span className="w-9 h-9 shrink-0 rounded-xl bg-[#FFD25D] text-[#061952] font-poppins font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-poppins font-semibold text-[16px] leading-snug">{e.titre}</p>
                      <p className="text-[14.5px] text-white/70 leading-relaxed mt-1">{e.texte}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="relative mt-9 pt-7 border-t border-white/10">
                <p className="text-sm text-white/60 mb-4">Vous préférez en parler directement ?</p>
                <div className="grid gap-2.5">
                  <a
                    href="tel:0770003672"
                    className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 -mx-3 transition-colors hover:bg-white/[0.07]"
                  >
                    <span className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center shrink-0">
                      <Phone className="w-[18px] h-[18px] text-[#FFD25D]" />
                    </span>
                    <span className="font-poppins font-semibold whitespace-nowrap">07 70 00 36 72</span>
                  </a>
                  <a
                    href="mailto:nicolas@ofpodium.fr"
                    className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 -mx-3 transition-colors hover:bg-white/[0.07]"
                  >
                    <span className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center shrink-0">
                      <Mail className="w-[18px] h-[18px] text-[#57B3B7]" />
                    </span>
                    <span className="font-poppins font-semibold break-all">nicolas@ofpodium.fr</span>
                  </a>
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 -mx-3 transition-colors hover:bg-white/[0.07]"
                  >
                    <span className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center shrink-0">
                      <CalendarDays className="w-[18px] h-[18px] text-[#F28AA9]" />
                    </span>
                    <span className="font-poppins font-semibold">
                      Réserver un appel de 30 min
                      <ArrowRight className="inline w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Formulaire */}
            <div className="order-1 lg:order-2 p-7 md:p-10">
              {status === "sent" ? (
                <div role="status" className="h-full min-h-[420px] flex flex-col justify-center">
                  <CheckCircle2 className="w-14 h-14 text-[#57B3B7] mb-5" />
                  <p className="font-poppins font-bold text-2xl text-[#061952]">
                    Merci{prenomEnvoye ? ` ${prenomEnvoye}` : ""}, c&apos;est bien reçu !
                  </p>
                  <p className="text-gray-600 mt-3 leading-relaxed max-w-md">
                    Votre message est arrivé chez Podium et un accusé de réception vient de partir dans votre boîte
                    mail. Nous revenons vers vous très vite pour en parler.
                  </p>
                  <div className="flex flex-wrap items-center gap-5 mt-8">
                    <Link
                      href="/nos-ateliers"
                      className="inline-flex items-center gap-2 font-poppins font-semibold text-[15px] px-6 py-3 rounded-full bg-[#061952] text-white transition-colors hover:bg-[#0b2470]"
                    >
                      Découvrir nos ateliers
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="font-poppins font-semibold text-[15px] text-[#061952] underline underline-offset-4 hover:no-underline"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5">
                  <fieldset>
                    <legend className={`${labelClass} mb-2.5`}>
                      Votre demande concerne <span className="font-normal text-gray-500">(facultatif)</span>
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {SUJETS.map((s) => (
                        <label key={s} className="cursor-pointer">
                          <input type="radio" value={s} className="peer sr-only" {...register("sujet")} />
                          <span className="inline-flex items-center font-poppins font-medium text-[14.5px] px-4 py-2 rounded-full border border-gray-300 text-[#061952] transition-colors hover:border-[#061952] peer-checked:bg-[#061952] peer-checked:border-[#061952] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#FFD25D]">
                            {s}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="grid gap-1.5">
                      <label htmlFor="contact-prenom" className={labelClass}>
                        Prénom
                      </label>
                      <input
                        id="contact-prenom"
                        autoComplete="given-name"
                        className={inputClass}
                        aria-required="true"
                        aria-invalid={Boolean(errors.prenom)}
                        {...register("prenom", { required: "Indiquez votre prénom" })}
                      />
                      {errors.prenom ? <p className={errorClass}>{errors.prenom.message}</p> : null}
                    </div>
                    <div className="grid gap-1.5">
                      <label htmlFor="contact-nom" className={labelClass}>
                        Nom
                      </label>
                      <input
                        id="contact-nom"
                        autoComplete="family-name"
                        className={inputClass}
                        aria-required="true"
                        aria-invalid={Boolean(errors.nom)}
                        {...register("nom", { required: "Indiquez votre nom" })}
                      />
                      {errors.nom ? <p className={errorClass}>{errors.nom.message}</p> : null}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="grid gap-1.5">
                      <label htmlFor="contact-email" className={labelClass}>
                        Email professionnel
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        placeholder="prenom.nom@entreprise.fr"
                        className={inputClass}
                        aria-required="true"
                        aria-invalid={Boolean(errors.email)}
                        {...register("email", {
                          required: "Indiquez votre adresse email",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                            message: "Cette adresse email semble incomplète",
                          },
                        })}
                      />
                      {errors.email ? <p className={errorClass}>{errors.email.message}</p> : null}
                    </div>
                    <div className="grid gap-1.5">
                      <label htmlFor="contact-telephone" className={labelClass}>
                        Téléphone <span className="font-normal text-gray-500">(facultatif)</span>
                      </label>
                      <input
                        id="contact-telephone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="06 12 34 56 78"
                        className={inputClass}
                        aria-invalid={Boolean(errors.telephone)}
                        {...register("telephone", {
                          pattern: { value: /^[+0-9 ().-]{8,20}$/, message: "Ce numéro semble incomplet" },
                        })}
                      />
                      {errors.telephone ? <p className={errorClass}>{errors.telephone.message}</p> : null}
                    </div>
                  </div>

                  <div className="grid gap-1.5">
                    <label htmlFor="contact-entreprise" className={labelClass}>
                      Entreprise
                    </label>
                    <input
                      id="contact-entreprise"
                      autoComplete="organization"
                      className={inputClass}
                      aria-required="true"
                      aria-invalid={Boolean(errors.entreprise)}
                      {...register("entreprise", { required: "Indiquez le nom de votre entreprise" })}
                    />
                    {errors.entreprise ? <p className={errorClass}>{errors.entreprise.message}</p> : null}
                  </div>

                  <div className="grid gap-1.5">
                    <label htmlFor="contact-message" className={labelClass}>
                      Votre projet
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Ex. : une journée sécurité pour 80 salariés en mars, ou une formation gestes et postures pour l'équipe logistique."
                      className={`${inputClass} min-h-[140px] resize-y leading-relaxed`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.message)}
                      {...register("message", { required: "Décrivez votre projet en quelques mots" })}
                    />
                    {errors.message ? <p className={errorClass}>{errors.message.message}</p> : null}
                  </div>

                  {/* Pot de miel anti-robots : invisible pour les humains */}
                  <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                    <label htmlFor="contact-website">Ne pas remplir</label>
                    <input id="contact-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
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

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center justify-center gap-2.5 font-poppins font-semibold text-base px-8 py-4 rounded-full bg-[#FFD25D] text-[#061952] shadow-[0_10px_26px_rgba(255,210,93,0.45)] transition-all duration-300 hover:bg-[#FFC940] hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                    >
                      {status === "sending" ? (
                        "Envoi en cours…"
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer ma demande
                        </>
                      )}
                    </button>
                    <p className="text-sm text-gray-500">Sans engagement, devis gratuit.</p>
                  </div>

                  <p className="text-[13px] leading-relaxed text-gray-500">
                    Vos informations servent uniquement à répondre à votre demande. Elles ne sont ni revendues ni
                    utilisées à d&apos;autres fins.{" "}
                    <Link href="/mentions-legales#donnees" className="underline underline-offset-2 hover:text-[#061952]">
                      Vos données
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
