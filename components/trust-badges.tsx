import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle } from "lucide-react"
import Image from "next/image"

export function TrustBadges() {
  const testimonials = [
    {
      quote: "These hacks saved us 200+ hours. Pure gold!",
      author: "CEO @ApexionLabs",
    },
    {
      quote: "My students built apps faster than I could grade papers!",
      author: "Teacher @UrhoboCollege",
    },
    {
      quote: "Implemented 3 workflows in a day. Game changer!",
      author: "CTO @Cerebrox",
    },
    {
      quote: "we were able to implement a week`s workflow in a day. This is like Intelligence on steriods!",
      author: "TechLead @Pivotalogic",
    },
  ]
  const partners = [
    { name: "TechCrunch", logo: "/images/techcrunch.jpg" },
    { name: "EdSurge", logo: "/images/edsurge.jpg" },
    { name: "AI Weekly", logo: "/images/aiweekly.jpg" },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-xl font-medium mb-6">Featured in:</h3>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="bg-muted px-6 py-2 rounded-md">
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                width={60}
                height={45}
                className="h-10"
                loading="lazy"></Image>
                {partner.name}
            </div>
          ))}
        </div>
      </div>

        <div className="mb-10">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-muted/50 p-4 rounded-lg">
                    <p className="italic mb-2">{testimonial.quote}</p>
                    <p className="text-sm text-muted-foreground">— {testimonial.author}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Badge variant="outline" className="text-sm py-1 px-3 flex items-center gap-1.5">
            <Shield className="h-4 w-4" />
            <span>SSL Encryption</span>
          </Badge>
          <Badge variant="outline" className="text-sm py-1 px-3 flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4" />
            <span>GDPR Compliant</span>
          </Badge>
        </div>
      </div>
    </section>
  )
}

