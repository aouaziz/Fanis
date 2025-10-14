import { Sparkles, Target, Users } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Une Expertise
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Reconnue
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Avec plus de 10 ans d'expérience, FANIS NETWORK accompagne les entreprises dans leur transformation
              digitale. Notre équipe d'experts passionnés met son savoir-faire au service de vos ambitions.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Innovation Continue</h4>
                <p className="text-gray-600">Technologies de pointe</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Résultats Mesurables</h4>
                <p className="text-gray-600">ROI optimisé</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Users className="text-white/20" size={200} />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-50" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-400 rounded-full blur-2xl opacity-50" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Target className="text-white/20" size={200} />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Votre Succès,
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Notre Mission
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nous croyons que chaque projet est unique. C'est pourquoi nous adoptons une approche personnalisée pour
              comprendre vos besoins et créer des solutions qui dépassent vos attentes.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  150+
                </div>
                <div className="text-gray-600">Projets Réalisés</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-gray-600">Clients Satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
