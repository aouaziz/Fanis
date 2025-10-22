"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  // NOTE: formData and handleSubmit are no longer strictly needed for FormSubmit
  // but kept for form control if you switch to a custom backend later.
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
    // Include a hidden _replyto field to set the sender's email if you collect it.
    // For now, we'll use a hidden subject field.
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-[#EEEEEE]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#333333]">
            Prêt à Élever Votre
            <span className="block text-[#B31818]">Présence Digitale?</span>
          </h2>
          <p className="text-lg text-[#333333]/70 max-w-2xl mx-auto">
            Discutons d'une stratégie complète adaptée exclusivement à votre entreprise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* 🔑 KEY CHANGE: Using FormSubmit for easy email delivery 🔑 */}
          <form 
            action="https://formsubmit.co/fanisnetwork@gmail.com" // 🎯 Sends data to this email
            method="POST" 
            className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
          >
            {/* FormSubmit Honeypot (Recommended) */}
            <input type="hidden" name="_honeypot" value="true" />
            {/* FormSubmit Subject (Optional, sets email subject line) */}
            <input type="hidden" name="_subject" value="Nouvelle Consultation Gratuite de FANIS NETWORK" />
            {/* FormSubmit Thank You Page (Optional, redirect after submit) */}
            <input type="hidden" name="_next" value="https://fanis-network.com/merci-contact" />

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#333333] mb-2">
                Nom <span className="text-[#B31818]">*</span>
              </label>
              <Input
                id="name"
                name="name" // MUST have a name attribute
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border-[#CCCCCC] focus:border-[#007BFF] focus:ring-[#007BFF]"
                placeholder="Votre nom complet"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#333333] mb-2">
                Numéro de Téléphone <span className="text-[#B31818]">*</span>
              </label>
              <Input
                id="phone"
                name="phone" // MUST have a name attribute
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-[#CCCCCC] focus:border-[#007BFF] focus:ring-[#007BFF]"
                placeholder="+212 6XX XX XX XX"
              />
            </div>
            
            <div>
              <label htmlFor="comment" className="block text-sm font-semibold text-[#333333] mb-2">
                Commentaire <span className="text-[#333333]/50 text-xs">(Optionnel)</span>
              </label>
              <Textarea
                id="comment"
                name="comment" // MUST have a name attribute
                value={formData.comment}
                onChange={handleChange}
                className="w-full border-[#CCCCCC] focus:border-[#007BFF] focus:ring-[#007BFF] min-h-[120px] resize-none"
                placeholder="Parlez-nous de votre projet..."
              />
            </div>

            <Button
              type="submit" // 🚀 This will now submit the form to the 'action' URL
              className="w-full bg-[#B31818] hover:bg-[#8B1212] text-white py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-6"
            >
              Réserver Une Consultation Gratuite
            </Button>
          </form>

          {/* ... (rest of the contact info section remains the same) ... */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#333333] mb-6">Contactez-Nous</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#007BFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#007BFF]" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#333333] mb-1">Email</div>
                    <a href="mailto:fanisnetwork@gmail.com" className="text-[#007BFF] hover:text-[#B31818] transition-colors">
                      fanisnetwork@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#007BFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#007BFF]" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#333333] mb-1">Téléphone</div>
                    <a href="tel:+212666148606" className="text-[#007BFF] hover:text-[#B31818] transition-colors">
                      +212 666 148 606
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#007BFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#007BFF]" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#333333] mb-1">Adresse</div>
                    <div className="text-[#333333]/70">
                      Etage 5, App N°22,
                      <br />
                      75 Bd Moulay Youssef,
                      <br />
                      Casablanca 20250
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#B31818] to-[#8B1212] p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Commencez Votre Voyage Digital</h3>
              <p className="text-white/90 leading-relaxed">
                Rejoignez plus de 40 clients satisfaits qui ont transformé leur présence digitale avec Fanis Network.
                Créons ensemble quelque chose d'extraordinaire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}