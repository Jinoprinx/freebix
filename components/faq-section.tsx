import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Are these PDFs really free?",
      answer: "100% free – no trials, no credit card. We profit when you choose to upgrade later.",
    },
    {
      question: "Can I share these with my team?",
      answer: "Forward the email or tag us @AIprinx for bulk access.",
    },
    {
      question: "How do I get support?",
      answer: "Reply to your download email, and our AI experts will help.",
    },
    {
      question: "How often are the playbooks updated?",
      answer: "We update our playbooks quarterly to ensure you have the latest AI strategies and tools.",
    },
    {
      question: "Do you offer custom AI solutions?",
      answer: "Yes! After reviewing our playbooks, you can schedule a consultation for custom AI implementations personalised for your own business.",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

