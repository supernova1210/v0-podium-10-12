/**
 * Emails envoyés par le site (Resend) : configuration et gabarit communs
 * au formulaire de contact (app/api/contact) et à l'envoi des mémos (app/api/memo).
 *
 * Variables d'environnement (Vercel > Settings > Environment Variables) :
 *   RESEND_API_KEY  (obligatoire)  clé API Resend
 *   CONTACT_TO      (optionnel)    destinataire des demandes, défaut nicolas@ofpodium.fr
 *   CONTACT_FROM    (optionnel)    expéditeur, défaut "Podium <podium@notifications-site.fr>"
 *                                  -> domaine d'envoi commun à tous les sites clients, déjà vérifié dans Resend
 *   CONTACT_BCC     (optionnel)    copie cachée de tous les emails, ex. pour vérifier que tout part bien.
 *                                  Plusieurs adresses séparées par des virgules.
 *                                  Supprimer la variable dans Vercel (puis redéployer) pour arrêter la copie.
 */

export const CONTACT_TO = process.env.CONTACT_TO || "nicolas@ofpodium.fr"
export const CONTACT_FROM = process.env.CONTACT_FROM || "Podium <podium@notifications-site.fr>"
const CONTACT_BCC = (process.env.CONTACT_BCC || "")
  .split(",")
  .map((a) => a.trim())
  .filter(Boolean)
export const bcc = CONTACT_BCC.length ? { bcc: CONTACT_BCC } : {}

export const PHONE = "07 70 00 36 72"
export const PHONE_HREF = "tel:0770003672"
export const SITE = "https://www.ofpodium.fr"

export function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export function nl2br(value: string) {
  return esc(value).replace(/\r?\n/g, "<br />")
}

/** Gabarit commun : bandeau marine + liseré jaune, compatible clients mail (tables, styles inline). */
export function layout(title: string, body: string) {
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

export function row(label: string, value: string) {
  return `<tr>
    <td style="padding:8px 0;color:#6b7280;font-size:13px;width:110px;vertical-align:top;">${label}</td>
    <td style="padding:8px 0;color:#061952;font-weight:600;">${value}</td>
  </tr>`
}

/** Bouton jaune arrondi (compatible clients mail). */
export function button(href: string, label: string) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;"><tr>
    <td style="background:#FFD25D;border-radius:999px;">
      <a href="${href}" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:700;color:#061952;text-decoration:none;">${label}</a>
    </td>
  </tr></table>`
}
