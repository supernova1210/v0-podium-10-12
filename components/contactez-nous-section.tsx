import { Phone, Mail } from "lucide-react"
import { PodiumButton } from "@/components/ui/podium-button"

export function ContactezNousSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-10"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-blue-200 rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-300 rounded-full opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#061952] leading-tight">Contactez-nous</h2>

            <div className="space-y-6 text-lg text-[#4A4A4A] leading-relaxed">
              <p>
                Vous souhaitez obtenir un devis, des informations sur nos formations QVCT, nos ateliers prévention ou organiser une journée sécurité en entreprise ?
                Basé à Ambérieu-en-Bugey, PODIUM accompagne les entreprises de l’Ain, de Bourg-en-Bresse et des territoires alentours dans leurs projets de formation, de prévention et de bien-être au travail.
              </p>
              <p>Contactez-nous facilement par mail ou formulaire en ligne, nous vous rappelons dans les 12h !</p>
              <p>Vous pouvez aussi prendre directement rendez-vous avec un membre de notre équipe.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <PodiumButton href="https://calendly.com/nicolas-ofpodium/30min" variant="primary">
                Prendre rendez-vous
              </PodiumButton>
              <PodiumButton href="/contact" variant="outline">
                Contactez-nous
              </PodiumButton>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#061952] mb-6">Par téléphone ou par email :</h3>

              <div className="space-y-6">
                <a
                  href="tel:0770003672"
                  className="flex items-center group hover:bg-white rounded-lg p-4 transition-all duration-200 hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-[#061952] rounded-full flex items-center justify-center mr-4 group-hover:bg-[#FFD25D] transition-colors duration-200">
                    <Phone className="w-5 h-5 text-white group-hover:text-[#061952]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#4A4A4A] mb-1">Téléphone</div>
                    <div className="text-lg font-semibold text-[#061952] group-hover:text-[#FFD25D] transition-colors duration-200">
                      07 70 00 36 72
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:nicolas@ofpodium.fr"
                  className="flex items-center group hover:bg-white rounded-lg p-4 transition-all duration-200 hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-[#061952] rounded-full flex items-center justify-center mr-4 group-hover:bg-[#FFD25D] transition-colors duration-200">
                    <Mail className="w-5 h-5 text-white group-hover:text-[#061952]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#4A4A4A] mb-1">Email</div>
                    <div className="text-lg font-semibold text-[#061952] group-hover:text-[#FFD25D] transition-colors duration-200">
                      nicolas@ofpodium.fr
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactezNousSection
