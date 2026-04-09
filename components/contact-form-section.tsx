"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PodiumButton } from "@/components/ui/podium-button"
import { CheckCircle, Send, ArrowRight } from "lucide-react"

interface ContactFormData {
  nom: string
  prenom: string
  email: string
  entreprise: string
  message: string
}

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xrbqgjjw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-[#061952] mb-4">Message envoyé !</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                </p>
                <PodiumButton onClick={() => setIsSubmitted(false)} className="bg-[#061952] hover:bg-[#061952]/90">
                  Envoyer un autre message
                </PodiumButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#061952] mb-4">Parlons de votre projet</h2>
                <p className="text-gray-600">Remplissez ce formulaire et nous vous recontacterons rapidement.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="prenom" className="text-[#061952] font-semibold">
                      Prénom *
                    </Label>
                    <Input
                      id="prenom"
                      {...register("prenom", { required: "Le prénom est requis" })}
                      className="border-gray-300 focus:border-[#061952] focus:ring-[#061952]"
                      placeholder="Votre prénom"
                    />
                    {errors.prenom && <p className="text-red-500 text-sm">{errors.prenom.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nom" className="text-[#061952] font-semibold">
                      Nom *
                    </Label>
                    <Input
                      id="nom"
                      {...register("nom", { required: "Le nom est requis" })}
                      className="border-gray-300 focus:border-[#061952] focus:ring-[#061952]"
                      placeholder="Votre nom"
                    />
                    {errors.nom && <p className="text-red-500 text-sm">{errors.nom.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#061952] font-semibold">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "L'email est requis",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Adresse email invalide",
                      },
                    })}
                    className="border-gray-300 focus:border-[#061952] focus:ring-[#061952]"
                    placeholder="votre.email@entreprise.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="entreprise" className="text-[#061952] font-semibold">
                    Entreprise *
                  </Label>
                  <Input
                    id="entreprise"
                    {...register("entreprise", { required: "L'entreprise est requise" })}
                    className="border-gray-300 focus:border-[#061952] focus:ring-[#061952]"
                    placeholder="Nom de votre entreprise"
                  />
                  {errors.entreprise && <p className="text-red-500 text-sm">{errors.entreprise.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#061952] font-semibold">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message", { required: "Le message est requis" })}
                    className="border-gray-300 focus:border-[#061952] focus:ring-[#061952] min-h-[120px]"
                    placeholder="Décrivez-nous votre projet, vos besoins ou vos questions..."
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                <div className="pt-4">
                  <PodiumButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#061952] hover:bg-[#061952]/90 text-white font-semibold py-3 px-6 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <Send className="w-5 h-5" />
                        <span>Envoyer le message</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </PodiumButton>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
