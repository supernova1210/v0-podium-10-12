import { readFile } from "node:fs/promises"
import path from "node:path"
import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"
import { allRessources } from "@/lib/ressources"
import { CONTACT_FROM, CONTACT_TO, PHONE, PHONE_HREF, SITE, bcc, button, esc, layout, row } from "@/lib/email"

/**
 * Demande de mémo -> Resend
 * 1. Le mémo PDF part en pièce jointe à l'adresse saisie.
 * 2. Nicolas est prévenu (contact entrant, « Répondre » écrit au demandeur).
 * Les PDF sont dans private/memos/ : aucune URL publique, ils ne sortent que par cette route.
 * Configuration et gabarit des emails : lib/email.ts
 */

export const runtime = "nodejs"

const schema = z.object({
  ressource: z.string().trim().min(1).max(120),
  prenom: z.string().trim().min(1).max(80),
  nom: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(160),
  entreprise: z.string().trim().min(1).max(160),
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

  const { ressource, prenom, nom, email, entreprise, website } = parsed.data

  // Robot détecté : on répond OK sans rien envoyer
  if (website && website.trim() !== "") {
    return NextResponse.json({ ok: true })
  }

  const meta = allRessources.find((r) => r.slug === ressource)
  if (!meta?.memo) {
    return NextResponse.json({ ok: false, error: "unknown_memo" }, { status: 404 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("[memo] RESEND_API_KEY manquante")
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 })
  }

  let pdf: Buffer
  try {
    pdf = await readFile(path.join(process.cwd(), "private", "memos", meta.memo.file))
  } catch (error) {
    console.error("[memo] fichier introuvable", meta.memo.file, error)
    return NextResponse.json({ ok: false, error: "file_missing" }, { status: 500 })
  }

  const resend = new Resend(apiKey)
  const fullName = `${prenom} ${nom}`
  const pageUrl = `${SITE}/ressources/${meta.slug}`

  // 1. Le mémo au demandeur
  const sent = await resend.emails.send({
    from: CONTACT_FROM,
    to: [email],
    ...bcc,
    replyTo: CONTACT_TO,
    subject: `Votre mémo : ${meta.cardTitle} · Podium`,
    attachments: [{ filename: meta.memo.filename, content: pdf }],
    html: layout(
      "Votre mémo",
      `<p style="margin:0 0 16px;font-size:17px;font-weight:700;color:#061952;">Bonjour ${esc(prenom)},</p>
       <p style="margin:0 0 14px;">Merci pour votre intérêt. Vous trouverez ${esc(meta.memo.title)} en pièce jointe, au format PDF : à imprimer, afficher ou partager avec vos équipes.</p>
       <p style="margin:0 0 14px;">C'est le support que nous remettons aux participants de nos formations. Si vous souhaitez aller plus loin et rendre vos équipes autonomes sur le sujet, nous en parlons volontiers.</p>
       <p style="margin:0 0 4px;">Répondez simplement à cet email, ou appelez-nous au <a href="${PHONE_HREF}" style="color:#061952;font-weight:700;">${PHONE}</a>.</p>
       <p style="margin:26px 0 0;">À bientôt,<br /><strong style="color:#061952;">L'équipe Podium</strong></p>
       ${button(meta.formation ? `${SITE}${meta.formation.href}` : pageUrl, meta.formation ? "Découvrir la formation" : "Revoir la ressource")}`,
    ),
    text: `Bonjour ${prenom},\n\nMerci pour votre intérêt. Vous trouverez ${meta.memo.title} en pièce jointe, au format PDF.\n\nC'est le support que nous remettons aux participants de nos formations. Pour aller plus loin, répondez simplement à cet email ou appelez-nous au ${PHONE}.\n\nÀ bientôt,\nL'équipe Podium\n${pageUrl}`,
  })

  if (sent.error) {
    console.error("[memo] échec envoi du mémo", sent.error)
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 })
  }

  // 2. Notification interne (un échec ici ne bloque pas : le demandeur a déjà son mémo)
  const notif = await resend.emails.send({
    from: CONTACT_FROM,
    to: [CONTACT_TO],
    ...bcc,
    replyTo: email,
    subject: `Mémo téléchargé · ${entreprise} (${fullName})`,
    html: layout(
      "Nouveau téléchargement de mémo",
      `<p style="margin:0 0 18px;font-size:17px;font-weight:700;color:#061952;">Quelqu'un vient de demander ${esc(meta.memo.title)}.</p>
       <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-top:1px solid #eef0f5;border-bottom:1px solid #eef0f5;margin-bottom:20px;">
         ${row("Nom", esc(fullName))}
         ${row("Entreprise", esc(entreprise))}
         ${row("Email", `<a href="mailto:${esc(email)}" style="color:#061952;">${esc(email)}</a>`)}
         ${row("Ressource", `<a href="${pageUrl}" style="color:#061952;">${esc(meta.cardTitle)}</a>`)}
       </table>
       <p style="margin:0;font-size:13px;color:#6b7280;">Le mémo lui a été envoyé automatiquement. Pour le relancer, utilisez simplement « Répondre » : le message partira vers ${esc(email)}.</p>`,
    ),
    text: `Mémo téléchargé : ${meta.cardTitle}\n\nNom : ${fullName}\nEntreprise : ${entreprise}\nEmail : ${email}\n\nLe mémo lui a été envoyé automatiquement.`,
  })

  if (notif.error) {
    console.error("[memo] échec notification", notif.error)
  }

  return NextResponse.json({ ok: true })
}
