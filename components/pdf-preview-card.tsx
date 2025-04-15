"use client"

import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PdfPreviewCards() {
  const pdfCards = [
    {
      title: "Business Automation",
      icon: <Clock className="h-8 w-8 text-primary" />,
      badge: "$10k Savings",
      image: "/images/bus.png",
      bullets: ["Automate invoicing in 15 mins.", "Free audit template included."],
      cta: "Save Time",
    },
    {
      title: "AI Trends",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      badge: "2024 Trends",
      image: "/images/ai.png",
      bullets: ["7 under-the-radar AI tools.", "Profit strategies for each trend."],
      cta: "Stay Ahead",
    },
    {
      title: "AI Education",
      icon: <Users className="h-8 w-8 text-primary" />,
      badge: "Free Curriculum",
      image: "/images/edu.png",
      bullets: ["12 no-code AI project ideas.", "Student success case studies."],
      cta: "Train Talent",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Choose Your Free Playbook</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pdfCards.map((card, index) => (
            <Card
              key={index}
              className="border-2 border-muted hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <CardHeader className="relative pb-0">
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="font-semibold">
                    {card.badge}
                  </Badge>
                </div>
                <div className="flex justify-center mb-2">{card.icon}</div>
                <CardTitle className="text-xl text-center">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="aspect-[3/2] relative mb-4 bg-muted rounded-md overflow-hidden">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={`${card.title} preview`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <ul className="space-y-2">
                  {card.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full group"
                  onClick={() => {
                    const formElement = document.getElementById("email-form")
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
