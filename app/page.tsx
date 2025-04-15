import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { PdfPreviewCards } from "@/components/pdf-preview-card"
import { EmailCaptureForm } from "@/components/email-capture-form"
import { TrustBadges } from "@/components/trust-badges"
import { FaqSection } from "@/components/faq-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <HeroSection />
        <PdfPreviewCards />
        <FeaturesGrid />
        <EmailCaptureForm />
        <TrustBadges />
        <FaqSection />
      </main>
    </div>
  )
}

