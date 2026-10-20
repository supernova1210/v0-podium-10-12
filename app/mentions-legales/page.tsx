import type { Metadata } from "next"
import type { ReactNode } from "react"
import CookieSettingsButton from "@/components/cookie-settings-button"

export const metadata: Metadata = {
  title: "Mentions légales, données personnelles et cookies",
  description:
    "Mentions légales du site ofpodium.fr, politique de protection des données personnelles et gestion des cookies.",
  alternates: { canonical: "https://www.ofpodium.fr/mentions-legales" },
  robots: { index: false, follow: true },
}

const sommaire = [
  { id: "editeur", label: "Éditeur" },
  { id: "hebergeur", label: "Hébergeur" },
  { id: "propriete", label: "Propriété intellectuelle" },
  { id: "donnees", label: "Données personnelles" },
  { id: "cookies", label: "Cookies" },
]

function Bloc({ id, titre, children }: { id: string; titre: string; children: ReactNode }) {
  return (
    <section
      id={id}
      className="scroll-mt-32 bg-white rounded-[22px] border border-gray-200 p-7 md:p-9 shadow-[0_4px_18px_rgba(6,25,82,0.06)]"
    >
      <h2 className="font-poppins font-semibold text-xl md:text-2xl text-[#061952] mb-4">{titre}</h2>
      <div className="space-y-3 text-[15px] text-gray-600 leading-relaxed">{children}</div>
    </section>
  )
}

function Ligne({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid sm:grid-cols-[200px_1fr] gap-1 sm:gap-4 py-2 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-[#061952] font-medium">{children}</span>
    </div>
  )
}

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-white pt-10 pb-12 lg:pt-14 lg:pb-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#57B3B7]" />
            Informations légales
          </span>
          <h1 className="font-poppins font-extrabold text-[#061952] tracking-tight leading-[1.05] text-4xl md:text-5xl mt-4 mb-6">
            Mentions légales &amp; RGPD
          </h1>
          <nav aria-label="Sommaire" className="flex flex-wrap gap-2">
            {sommaire.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-poppins font-medium text-sm px-4 py-2 rounded-full border border-gray-200 text-[#061952] hover:bg-[#FFD25D] hover:border-[#FFD25D] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#fafbfe]">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <Bloc id="editeur" titre="Éditeur du site">
            <div>
              <Ligne label="Raison sociale">O.F PODIUM (nom commercial : PODIUM)</Ligne>
              <Ligne label="Forme juridique">EURL au capital de 1 000 €</Ligne>
              <Ligne label="Siège social">36 rue des Apôtres, 01500 Ambérieu-en-Bugey</Ligne>
              <Ligne label="RCS">938 281 458 R.C.S. Bourg-en-Bresse</Ligne>
              <Ligne label="SIRET">938 281 458 00019</Ligne>
              <Ligne label="TVA intracommunautaire">FR28938281458</Ligne>
              <Ligne label="Directeur de la publication">Nicolas Billard, gérant</Ligne>
              <Ligne label="Téléphone">
                <a href="tel:0770003672" className="hover:underline">
                  07 70 00 36 72
                </a>
              </Ligne>
              <Ligne label="Email">
                <a href="mailto:nicolas@ofpodium.fr" className="hover:underline">
                  nicolas@ofpodium.fr
                </a>
              </Ligne>
            </div>
          </Bloc>

          <Bloc id="hebergeur" titre="Hébergeur">
            <div>
              <Ligne label="Société">Vercel Inc.</Ligne>
              <Ligne label="Adresse">440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</Ligne>
              <Ligne label="Site">
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  vercel.com
                </a>
              </Ligne>
            </div>
          </Bloc>

          <Bloc id="propriete" titre="Propriété intellectuelle">
            <p>
              L&apos;ensemble des contenus de ce site (textes, photographies, vidéos, logos, supports pédagogiques) est
              la propriété de O.F PODIUM ou de ses partenaires. Toute reproduction ou réutilisation, totale ou
              partielle, sans autorisation écrite préalable est interdite.
            </p>
          </Bloc>

          <Bloc id="donnees" titre="Données personnelles">
            <p>
              <strong className="text-[#061952]">Responsable du traitement :</strong> O.F PODIUM, représentée par
              Nicolas Billard.
            </p>
            <p>
              <strong className="text-[#061952]">Données collectées :</strong> lorsque vous utilisez le formulaire de
              contact, nous recueillons votre prénom, votre nom, votre adresse email, le nom de votre entreprise et
              votre message.
            </p>
            <p>
              <strong className="text-[#061952]">Finalité :</strong> ces informations servent uniquement à répondre à
              votre demande et, le cas échéant, à établir une proposition commerciale. Elles ne sont ni revendues ni
              cédées à des tiers.
            </p>
            <p>
              <strong className="text-[#061952]">Base légale :</strong> les mesures précontractuelles prises à votre
              demande et notre intérêt légitime à répondre aux sollicitations reçues.
            </p>
            <p>
              <strong className="text-[#061952]">Durée de conservation :</strong> 3 ans à compter de notre dernier
              échange, sauf relation commerciale en cours.
            </p>
            <p>
              <strong className="text-[#061952]">Prestataires techniques :</strong> Vercel (hébergement du site),
              Resend (acheminement des emails du formulaire) et, uniquement avec votre accord, Google (mesure
              d&apos;audience). Ces prestataires agissent pour notre compte et n&apos;utilisent pas vos données à
              leurs propres fins.
            </p>
            <p>
              <strong className="text-[#061952]">Vos droits :</strong> vous disposez d&apos;un droit d&apos;accès, de
              rectification, d&apos;effacement, d&apos;opposition et de limitation sur vos données. Pour les exercer,
              écrivez à{" "}
              <a href="mailto:nicolas@ofpodium.fr" className="text-[#061952] font-medium underline underline-offset-2">
                nicolas@ofpodium.fr
              </a>
              . Vous pouvez également introduire une réclamation auprès de la CNIL (
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#061952] font-medium underline underline-offset-2"
              >
                cnil.fr
              </a>
              ).
            </p>
          </Bloc>

          <Bloc id="cookies" titre="Cookies et mesure d'audience">
            <p>
              <strong className="text-[#061952]">Mesure d&apos;audience sans cookies :</strong> nous utilisons Vercel
              Web Analytics, qui produit des statistiques de fréquentation agrégées et anonymes, sans déposer de
              cookie sur votre appareil.
            </p>
            <p>
              <strong className="text-[#061952]">Google Analytics, avec votre accord :</strong> si vous
              l&apos;acceptez, Google Analytics 4 dépose les cookies <code className="text-[13px]">_ga</code> et{" "}
              <code className="text-[13px]">_ga_*</code> pour mesurer la fréquentation des pages et les prises de
              contact (clic sur le téléphone, l&apos;email ou envoi du formulaire). Ces cookies ont une durée de vie
              de 13 mois maximum. Aucune donnée n&apos;est utilisée à des fins publicitaires.
            </p>
            <p>
              Tant que vous n&apos;avez pas cliqué sur « Accepter », aucun cookie de mesure n&apos;est déposé. Votre
              choix est conservé 6 mois, puis nous vous le redemandons.
            </p>
            <div className="pt-2">
              <CookieSettingsButton className="font-poppins font-semibold text-[15px] px-6 py-3 rounded-full bg-[#061952] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b2470]">
                Modifier mes choix
              </CookieSettingsButton>
            </div>
          </Bloc>

          <p className="text-sm text-gray-500 text-center pt-2">Dernière mise à jour : octobre 2026</p>
        </div>
      </section>
    </main>
  )
}
