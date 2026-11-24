import { allFormations, securiteFormations, qvctFormations, type FormationData } from "@/lib/formations"
import { offers } from "@/lib/related"
import { SITE_URL, formationPath } from "@/lib/seo"
import { RESSOURCES_PUBLIQUES, allRessources } from "@/lib/ressources"

/**
 * /llms.txt : résumé du site pour les assistants IA (ChatGPT, Claude, Perplexity…).
 * Format : https://llmstxt.org — généré depuis lib/ pour rester aligné sur le catalogue.
 */
export const dynamic = "force-static"

const url = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`

const formationLine = (f: FormationData) =>
  `- [${f.cardTitle}](${url(formationPath(f.slug))}) : ${f.cardDescription} Durée : ${f.duree}, ${f.participantsFull.charAt(0).toLowerCase()}${f.participantsFull.slice(1)}.`

const atelierLines = (category: "securite" | "qvct") =>
  offers
    .filter((o) => o.kind === "atelier" && o.category === category)
    .map((o) => `- [${o.title}](${url(o.href)}) : ${o.description} Durée : ${o.duree}.`)
    .join("\n")

function build() {
  const nbAteliers = offers.filter((o) => o.kind === "atelier").length

  return `# Podium

> Podium est un organisme de formation spécialisé en QVCT (qualité de vie et conditions de travail), prévention et sécurité au travail. Il conçoit et anime des formations, des ateliers de sensibilisation et des journées thématiques (journée sécurité, semaine QVCT, journée RSE, séminaire) directement dans les locaux des entreprises, à Lyon, dans l'Ain et en Auvergne-Rhône-Alpes.

## En bref

- Activité : formations intra-entreprise, ateliers ludiques de sensibilisation et événements de prévention pour les salariés.
- Deux pôles : QVCT (communication, santé mentale, animation, savoir-être) et Sécurité (TMS, gestes et postures, premiers secours, quart d'heure sécurité).
- Catalogue : ${allFormations.length} formations et ${nbAteliers} ateliers.
- Format : toujours en présentiel, dans les locaux de l'entreprise cliente, en petits groupes.
- Pédagogie : active et ludique, inspirée des jeux-cadres de Thiagi (mises en situation, jeux, jeux de rôle).
- Zone d'intervention : métropole de Lyon (Villeurbanne, Vénissieux, Saint-Priest, Bron, Meyzieu, Limonest…), zones d'activité de l'Ain (Parc Industriel de la Plaine de l'Ain, Ambérieu-en-Bugey, Bourg-en-Bresse, Oyonnax, Meximieux, Montluel…) et reste de l'Auvergne-Rhône-Alpes (Grenoble, Annecy, Chambéry, Saint-Étienne, Valence).
- Siège : 36 rue des Apôtres, 01500 Ambérieu-en-Bugey (Ain).
- Financement : Podium est en cours de labellisation Qualiopi. Ses formations sont portées par un organisme partenaire certifié, ce qui permet une prise en charge par l'OPCO de l'entreprise.
- Contact : 07 70 00 36 72 (+33 7 70 00 36 72), nicolas@ofpodium.fr, formulaire de devis sur ${url("/contact")}.

## Questions fréquentes

- Qui propose des ateliers de prévention ou une journée sécurité en entreprise à Lyon ou dans l'Ain ? Podium organise des journées sécurité (safety days) clé en main en combinant plusieurs ateliers : escape game sécurité, gestes et postures, réveil musculaire, secourisme, handicap, écrans. Voir ${url("/nos-evenements/journee-securite")}.
- Quelle différence entre un atelier et une formation chez Podium ? Un atelier est une session courte (15 à 45 minutes pour la plupart, jusqu'à 2 heures) pour sensibiliser un groupe de façon ludique. Une formation est un dispositif structuré (2 à 14 heures selon le thème) avec objectifs pédagogiques, programme, évaluation et attestation ou certificat.
- Comment former des salariés à animer un réveil musculaire ou un quart d'heure sécurité ? Avec les formations « Réveil musculaire » et « Animer un quart d'heure sécurité », qui forment des ambassadeurs internes à concevoir et animer ces temps eux-mêmes.
- Comment prévenir les risques psychosociaux et la santé mentale au travail ? Podium propose une formation santé mentale en 3 modules (agressivité verbale, situations dangereuses, détecter le mal-être), un atelier de prévention santé mentale et un atelier théâtre d'impro.
- Les formations peuvent-elles être financées par l'OPCO ? Oui, via l'organisme partenaire certifié Qualiopi qui porte les projets de formation de Podium.
- Où intervient Podium ? Dans les locaux de l'entreprise, à Lyon et sa métropole, dans l'Ain et dans toute l'Auvergne-Rhône-Alpes.

## Formations Sécurité

${securiteFormations.map(formationLine).join("\n")}

## Formations QVCT

${qvctFormations.map(formationLine).join("\n")}

## Ateliers Sécurité et prévention

${atelierLines("securite")}

## Ateliers QVCT

${atelierLines("qvct")}

## Événements

- [Journée sécurité](${url("/nos-evenements/journee-securite")}) : journée de prévention (safety day) composée d'ateliers sur mesure, animée dans les locaux de l'entreprise.
- [Semaine QVCT](${url("/nos-evenements/semaine-qvct")}) : programme d'ateliers participatifs sur une semaine (TMS, bien-être, cohésion d'équipe).
- [Journée RSE](${url("/nos-evenements/journee-rse")}) : ateliers collaboratifs pour engager les équipes dans la démarche de responsabilité sociétale.
- [Séminaire d'entreprise](${url("/nos-evenements/journee-seminaire")}) : journée participative et apprenante, ateliers ludiques et cohésion d'équipe.

## Pages principales

- [Accueil](${url("/")})
- [Formations QVCT](${url("/formations-qvct")})
- [Formations Sécurité](${url("/formations-securite")})
- [Tous les ateliers](${url("/nos-ateliers")})
- [Tous les événements](${url("/nos-evenements")})
- [Qui sommes-nous](${url("/about")})
- [Contact et devis](${url("/contact")})
${
  RESSOURCES_PUBLIQUES
    ? `
## Ressources

${allRessources.map((r) => `- [${r.cardTitle}](${url(`/ressources/${r.slug}`)}) : ${r.cardDescription}`).join("\n")}
`
    : ""
}
## Optional

- [Mentions légales](${url("/mentions-legales")})
- [Plan du site (XML)](${url("/sitemap.xml")})
`
}

export function GET() {
  return new Response(build(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
