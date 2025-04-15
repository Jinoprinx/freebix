"use client"

import { Button } from "@/components/ui/button"
import { Bot, Banknote, GraduationCap } from "lucide-react"
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section className={`py-12 md:py-20 text-center ${styles.heroSection}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Unlock <span className="text-primary">This Free AI Playbook</span> Trusted by 1,000+ Businesses
        </h1>

        <div className="text-xl md:text-2xl text-muted-foreground mb-8">
          <p className="mb-4">Get instant access to:</p>
          <ul className="space-y-2 text-left max-w-2xl mx-auto">
            <li className="flex items-start gap-2">
              <Banknote className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <span>
                <strong>5 Silent Workflow Killers</strong> Costing You $10k+/Year (Fix Them in 1 Hour)
              </span>
            </li>
          </ul>
        </div>

        <div className="relative">
          <Button
            size="lg"
            className="text-lg px-8 py-6 animate-pulse hover:animate-none transition-all"
            onClick={() => {
              const formElement = document.getElementById("email-form")
              if (formElement) {
                formElement.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Download Now
          </Button>
        </div>
      </div>
    </section>
  )
}