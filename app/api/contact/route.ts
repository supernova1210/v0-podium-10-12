import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

/**
 * Formulaire de contact -> Resend
 *
 * Variables d'environnement (Vercel > Settings > Environment Variables) :
 *   RESEND_API_KEY  (obligatoire)  clé API Resend
 *   CONTACT_TO      (optionnel)    destinataire des demandes, défaut nicolas@ofpodium.fr
 *   CONTACT_FROM    (optionnel)    expéditeur, défaut "Podium <podium@notifications-site.fr>"
 *                                  -> domaine d'envoi commun à tous les sites clients, déjà vérifié dans Resend
 *   CONTACT_BCC     (optionnel)    copie cachée des deux emails (notif + accusé), ex. pour vérifier
 *                                  que tout part bien. Plusieurs adresses séparées par des virgules.
 *                                  Supprimer la variable dans Vercel (puis redéployer) pour arrêter la copie.
 */

export const runtime = "nodejs"

const CONTACT_TO = process.env.CONTACT_TO || "nicolas@ofpodium.fr"
const CONTACT_FROM = process.env.CONTACT_FROM || "Podium <podium@notifications-site.fr>"
const CONTACT_BCC = (process.env.CONTACT_BCC || "")
  .split(",")
  .map((a) => a.trim())
  .filter(Boolean)
const bcc = CONTACT_BCC.length ? { bcc: CONTACT_BCC } : {}
const PHONE = "07 70 00 36 72"
const PHONE_HREF = "tel:0770003672"
const SITE = "https://www.ofpodium.fr"

const schema = z.object({
  prenom: z.string().trim().min(1).max(80),
  nom: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(160),
  entreprise: z.string().trim().min(1).max(160),
  message: z.string().trim().min(1).max(5000),
  // Pot de miel anti-robots : champ invisible, doit rester vide
  website: z.string().optional(),
})

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function nl2br(value: string) {
  return esc(value).replace(/\r?\n/g, "<br />")
}

/** Gabarit commun aux deux emails : bandeau marine + liseré jaune, compatible clients mail (tables, styles inline). */
function layout(title: string, body: string) {
  return `<!doctype html>
<html lang="fr">
<body style="margin:0;padding:0;background:#f3f5fa;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f5fa;padding:32px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:18px;overflow:hidden;">
        <tr><td style="background:#061952;padding:26px 32px;">
          <span style="font-size:22px;font-weight:800;letter-spacing:3px;color:#FFD25D;">PODIUM</span>
          <div style="font-size:13px;color:rgba(255,255,255,0.75);margin-top:4px;">${esc(title)}</div>
        </td></tr>
        <tr><td style="height:5px;background:#FFD25D;line-height:5px;font-size:0;">&nbsp;</td></tr>
        <tr><td style="padding:32px;font-size:15px;line-height:1.6;">
          ${body}
        </td></tr>
        <tr><td style="background:#fafbfe;border-top:1px solid #e5e7eb;padding:20px 32px;font-size:12px;color:#6b7280;line-height:1.6;">
          O.F PODIUM · 36 rue des Apôtres, 01500 Ambérieu-en-Bugey<br />
          <a href="${PHONE_HREF}" style="color:#061952;text-decoration:none;">${PHONE}</a> ·
          <a href="${SITE}" style="color:#061952;text-decoration:none;">ofpodium.fr</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:8px 0;color:#6b7280;font-size:13px;width:110px;vertical-align:top;">${label}</td>
    <td style="padding:8px 0;color:#061952;font-weight:600;">${value}</td>
  </tr>`
}

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

  const { prenom, nom, email, entreprise, message, website } = parsed.data

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
    subject: `Nouvelle demande de contact · ${entreprise} (${fullName})`,
    html: layout(
      "Nouvelle demande depuis le site",
      `<p style="margin:0 0 18px;font-size:17px;font-weight:700;color:#061952;">Un prospect vient de remplir le formulaire de contact.</p>
       <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-top:1px solid #eef0f5;border-bottom:1px solid #eef0f5;margin-bottom:20px;">
         ${row("Nom", esc(fullName))}
         ${row("Entreprise", esc(entreprise))}
         ${row("Email", `<a href="mailto:${esc(email)}" style="color:#061952;">${esc(email)}</a>`)}
       </table>
       <div style="font-size:13px;color:#6b7280;margin-bottom:6px;">Message</div>
       <div style="background:#fafbfe;border-left:4px solid #FFD25D;border-radius:8px;padding:16px 18px;color:#1f2937;">${nl2br(message)}</div>
       <p style="margin:22px 0 0;font-size:13px;color:#6b7280;">Pour répondre, utilisez simplement « Répondre » : le message partira vers ${esc(email)}.</p>`,
    ),
    text: `Nouvelle demande de contact\n\nNom : ${fullName}\nEntreprise : ${entreprise}\nEmail : ${email}\n\nMessage :\n${message}`,
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
