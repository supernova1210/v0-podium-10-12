import { Target, BookOpen, Check } from "lucide-react"

interface ObjectifsModalitesSectionProps {
  objectifs: {
    title: string
    items: string[]
  }
  modalites: {
    title: string
    items: string[]
  }
}

export default function ObjectifsModalitesSection({ objectifs, modalites }: ObjectifsModalitesSectionProps) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Objectifs */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FFD25D] rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-[#061952]" />
              </div>
              <h2 className="text-2xl font-bold text-[#061952]">{objectifs.title}</h2>
            </div>

            <div className="space-y-3">
              {objectifs.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FFD25D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#061952]" />
                  </div>
                  <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Modalités pédagogiques */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#061952] rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#061952]">{modalites.title}</h2>
            </div>

            <div className="space-y-3">
              {modalites.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#061952] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
