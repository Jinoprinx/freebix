import { Rocket, Lock, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesGrid() {
  const features = [
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Actionable Hacks",
      description: "Step-by-step fixes, not fluff. Implement in <60 mins.",
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Exclusive Data",
      description: "Includes leaked AI tools Big Tech doesn't want you to use.",
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Proven Results",
      description: "Used by 500+ businesses and 50 schools to save time and train talent.",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">What You Will Get</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-muted hover:border-primary/50 transition-colors">
              <CardHeader className="pb-2 flex justify-center">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">{feature.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

