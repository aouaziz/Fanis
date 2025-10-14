import { Shield, MessageSquare, ShoppingBag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Services de Haute Qualité",
    description:
      "Mediaman est le genre d'agence qui aime ce qu'elle fait et qui n'est satisfaite qu'à travers des résultats performants.",
  },
  {
    icon: MessageSquare,
    title: "Communication Efficace avec les Clients",
    description:
      "Nous apprécions toujours vos opinions et vos conseils, et plus important encore, nous vous fournissons un calendrier pour mettre en œuvre les accords convenus.",
  },
  {
    icon: ShoppingBag,
    title: "Des Résultats au-delà des Attentes",
    description:
      "Sur notre agence digitale, nous tenons à travailler avec nos clients de manière professionnelle afin d'assurer la rentabilité.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 hover:-translate-y-3 glass opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <feature.icon className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
