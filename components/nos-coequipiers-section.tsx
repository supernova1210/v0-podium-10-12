import { Linkedin } from "lucide-react"
import Image from "next/image"

export default function NosCoequipiersSection() {
  const teamMembers = [
    {
      name: "Julien PATANE",
      description: "Formateur management, préparateur mental de sportifs de haut niveau, kinésiologue",
      image: "/images/team/julien-patane.png",
      website: "https://www.flow-equiperf.com/",
      linkedin: "https://www.linkedin.com/in/julien-patane-3b420b1a5/",
    },
    {
      name: "Laure JACQUART",
      description: "Coach Bien-être & formatrice",
      image: "/images/team/laure-jacquart.png",
      website: "https://naturalcorporate.com/",
      linkedin: "https://www.linkedin.com/company/natural-corporate/",
    },
    {
      name: "Coline DUPRAS",
      description: "Coach professionnelle & Sophrologue",
      image: "/images/team/coline-dupras.png",
      website: "https://colinedupras.fr/",
      linkedin: "https://www.linkedin.com/in/coline-dupras-786553112/",
    },
    {
      name: "Anne-Lise BEAL RIGAUD",
      description: "Coach bien-être et santé mentale, coach individuel",
      image: "/images/team/anne-lise-rigaud-new.png", // Updated to new photo
      website: "https://www.olystik-performance.fr/",
      linkedin: "https://www.linkedin.com/in/anne-lise-beal-rigaud-7094801a5/",
    },
    {
      name: "Laury MAZZELLA",
      description: "Coach en activité physique adaptée et santé",
      image: "/images/team/laury-mazella.png",
      website: null,
      linkedin: "https://www.linkedin.com/in/laury-mazzella-67639b273/",
    },
    {
      name: "Schiphra MUTUBULE",
      description: "Formatrice SST",
      image: "/images/team/schiphra-mutubule.png",
      website: null,
      linkedin: "https://www.linkedin.com/in/schiphra-mutubule-138227217/",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Part 1 - Mot du dirigeant */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-12 text-center">Mot du dirigeant</h3>

          <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start">
            {/* Left - Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-64 h-64 md:w-[300px] md:h-[300px]">
                <Image
                  src="/images/nicolas-billard-dirigeant.jpg"
                  alt="Nicolas Billard, dirigeant de Podium"
                  fill
                  className="object-cover rounded-full shadow-2xl"
                  sizes="(max-width: 768px) 256px, 300px"
                  quality={95}
                />
              </div>
            </div>

            {/* Right - All text content with slightly smaller font */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-base">
              <p>
                Chez O.F PODIUM, nous pensons que la formation professionnelle gagne à s'inspirer des valeurs du sport
                collectif : elle se vit ensemble, avec engagement et énergie. C'est cette philosophie qui guide nos
                ateliers.
              </p>

              <p>
                Face à des enjeux de sécurité, de prévention ou de qualité de vie au travail, nous avons choisi une
                approche humaine, concrète et dynamique. Nos formations ne sont pas des parenthèses théoriques : ce sont
                des moments de partage, d'action et de fun.
              </p>

              <p>
                Comme dans une bonne équipe, chacun a ses forces et ses limites. Nous misons sur la complémentarité,
                l'entraide et le respect pour faire progresser les participants ensemble. L'objectif ? Créer un
                apprentissage durable, vécu dans le plaisir et la confiance.
              </p>

              <p>
                Avec une pédagogie active, des mises en situation et des formateurs passionnés, nous favorisons
                l'ancrage des bons réflexes et le changement positif.
              </p>

              <p>
                Apprendre à mieux se connaître, se protéger et avancer ensemble : voilà l'essence même d'O.F PODIUM.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2 - Nos coéquipiers */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a237e] mb-16">Nos coéquipiers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                {/* Photo with geometric background */}
                <div className="relative mb-6">
                  <div className="relative w-64 h-80 mx-auto overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    {/* Geometric background shapes */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#fbbf24] rounded-full transform translate-x-8 -translate-y-8"></div>
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#1a237e] rounded-full transform -translate-x-12 translate-y-12"></div>
                    </div>

                    {/* Team member photo */}
                    <div className="relative z-10 w-full h-full">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={`Photo de ${member.name}`}
                        fill
                        className="object-cover object-center"
                        sizes="256px"
                        loading="lazy"
                        quality={90}
                      />
                    </div>
                  </div>
                </div>

                {/* Name and description */}
                <div className="h-24 flex flex-col justify-start mb-6">
                  <h3 className="font-bold text-xl text-[#1a237e] uppercase tracking-wide mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto flex-1">{member.description}</p>
                </div>

                {/* Social links */}
                <div className="flex justify-center mb-4 h-12">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#1a237e] text-white rounded-full flex items-center justify-center hover:bg-[#fbbf24] hover:text-[#1a237e] transition-all duration-300"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
