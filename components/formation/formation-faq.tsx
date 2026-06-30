"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Reveal from "@/components/reveal"

export interface FaqItem {
  question: string
  answer: string
}

export default function FormationFAQ({ faqData }: { faqData: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="scroll-mt-20 py-16 md:py-20 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* habillage : grands carrés arrondis */}
      <div aria-hidden className="absolute left-[-45px] top-28 hidden xl:block w-40 h-40 rounded-[34px] bg-[#FFD25D]/15" />
      <div aria-hidden className="absolute left-20 top-52 hidden xl:block w-24 h-24 rounded-[24px] border-2 border-[#061952]/25" />
      <div aria-hidden className="absolute right-[-40px] bottom-24 hidden xl:block w-44 h-44 rounded-[36px] border-2 border-[#FFD25D]/30" />
      <div aria-hidden className="absolute right-24 bottom-44 hidden xl:block w-20 h-20 rounded-[22px] bg-[#061952]/[0.10]" />
      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs tracking-[0.14em] uppercase text-[#061952]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD25D]" />
            On répond à vos questions
          </span>
          <h2 className="font-poppins font-bold text-[#061952] tracking-tight text-3xl md:text-4xl mt-4">
            Questions fréquentes
          </h2>
        </Reveal>

        <div className="max-w-3xl mx-auto grid gap-3.5">
          {faqData.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-2xl bg-white overflow-hidden transition-all duration-300 border ${
                  open ? "border-[#FFD25D] shadow-[0_4px_18px_rgba(6,25,82,0.06)]" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-poppins font-medium text-[17px] text-[#061952]">{faq.question}</span>
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      open ? "bg-[#FFD25D] rotate-180" : "bg-[#061952]/[0.06]"
                    }`}
                  >
                    <ChevronDown className="w-[18px] h-[18px] text-[#061952]" />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 pt-[18px] text-[15.5px] text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
