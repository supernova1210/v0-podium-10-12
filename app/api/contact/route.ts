import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"
import { CONTACT_FROM, CONTACT_TO, PHONE, PHONE_HREF, SITE, bcc, esc, layout, nl2br, row } from "@/lib/email"

/** Formulaire de contact -> Resend. Configuration et gabarit des emails : lib/email.ts */

export const runtime = "nodejs"

const schema = z.object({
  sujet: z.enum(["Formation", "Atelier", "Événement", "Autre"]).optional().nullable(),
  prenom: z.string().trim().min(1).max(80),
  nom: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(160),
  telephone: z.string().trim().max(30).optional(),
  entreprise: z.string().trim().min(1).max(160),
  message: z.string().trim().min(1).max(5000),
  // Pot de miel anti-robots : champ invisible, doit rester vide
  website: z.string().optional(),
})

export async function POST(request: Request) {
  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 })
  }

  const parsed = schema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 })
  }

  const { sujet, prenom, nom, email, telephone, entreprise, message, website } = parsed.data

  // Robot détecté : on répond OK sans rien envoyer
  if (website && website.trim() !== "") {
    return NextResponse.json({ ok: true })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY manquante")
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 })
  }

  const resend = new Resend(apiKey)
  const fullName = `${prenom} ${nom}`

  // 1. Notification interne : "Répondre" écrit directement au prospect
  const notif = await resend.emails.send({
    from: CONTACT_FROM,
    to: [CONTACT_TO],
    ...bcc,
    replyTo: email,
    subject: `Nouvelle demande${sujet ? ` (${sujet.toLowerCase()})` : ""} · ${entreprise} · ${fullName}`,
    html: layout(
      "Nouvelle demande depuis le site",
      `<p style="margin:0 0 18px;font-size:17px;font-weight:700;color:#061952;">Un prospect vient de remplir le formulaire de contact.</p>
       <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-top:1px solid #eef0f5;border-bottom:1px solid #eef0f5;margin-bottom:20px;">
         ${row("Nom", esc(fullName))}
         ${row("Entreprise", esc(entreprise))}
         ${row("Email", `<a href="mailto:${esc(email)}" style="color:#061952;">${esc(email)}</a>`)}
         ${telephone ? row("Téléphone", `<a href="tel:${esc(telephone.replace(/[^+0-9]/g, ""))}" style="color:#061952;">${esc(telephone)}</a>`) : ""}
         ${sujet ? row("Demande", esc(sujet)) : ""}
       </table>
       <div style="font-size:13px;color:#6b7280;margin-bottom:6px;">Message</div>
       <div style="background:#fafbfe;border-left:4px solid #FFD25D;border-radius:8px;padding:16px 18px;color:#1f2937;">${nl2br(message)}</div>
       <p style="margin:22px 0 0;font-size:13px;color:#6b7280;">Pour répondre, utilisez simplement « Répondre » : le message partira vers ${esc(email)}.</p>`,
    ),
    text: `Nouvelle demande de contact\n\nNom : ${fullName}\nEntreprise : ${entreprise}\nEmail : ${email}${telephone ? `\nTéléphone : ${telephone}` : ""}${sujet ? `\nDemande : ${sujet}` : ""}\n\nMessage :\n${message}`,
  })

  if (notif.error) {
    console.error("[contact] échec notification", notif.error)
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 })
  }

  // 2. Accusé de réception au prospect (un échec ici ne bloque pas la demande, déjà transmise)
  const ack = await resend.emails.send({
    from: CONTACT_FROM,
    to: [email],
    ...bcc,
    replyTo: CONTACT_TO,
    subject: "Nous avons bien reçu votre demande · Podium",
    html: layout(
      "Accusé de réception",
      `<p style="margin:0 0 16px;font-size:17px;font-weight:700;color:#061952;">Bonjour ${esc(prenom)},</p>
       <p style="margin:0 0 14px;">Merci pour votre message, il est bien arrivé chez nous. Notre équipe l'étudie et revient vers vous dans les plus brefs délais pour échanger sur votre projet.</p>
       <p style="margin:0 0 22px;">Si votre demande est urgente, vous pouvez aussi nous joindre directement au <a href="${PHONE_HREF}" style="color:#061952;font-weight:700;">${PHONE}</a>.</p>
       <div style="font-size:13px;color:#6b7280;margin-bottom:6px;">Pour rappel, votre message :</div>
       <div style="background:#fafbfe;border-left:4px solid #57B3B7;border-radius:8px;padding:16px 18px;color:#374151;">${nl2br(message)}</div>
       <p style="margin:26px 0 0;">À très vite,<br /><strong style="color:#061952;">L'équipe Podium</strong></p>
       <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;"><tr>
         <td style="background:#FFD25D;border-radius:999px;">
           <a href="${SITE}/nos-ateliers" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:700;color:#061952;text-decoration:none;">Découvrir nos ateliers</a>
         </td>
       </tr></table>`,
    ),
    text: `Bonjour ${prenom},\n\nMerci pour votre message, il est bien arrivé chez nous. Notre équipe l'étudie et revient vers vous dans les plus brefs délais pour échanger sur votre projet.\n\nSi votre demande est urgente : ${PHONE}\n\nPour rappel, votre message :\n${message}\n\nÀ très vite,\nL'équipe Podium\n${SITE}`,
  })

  if (ack.error) {
    console.error("[contact] échec accusé de réception", ack.error)
  }

  return NextResponse.json({ ok: true })
}
