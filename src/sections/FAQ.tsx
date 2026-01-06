import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is a SIA licence?",
    answer: "The Security Industry Authority (SIA) licence is a legal requirement in the UK for anyone working in designated roles within the private security industry. This includes security guards, door supervisors, CCTV operators, and close protection officers. The SIA regulates the private security industry to ensure that security operatives are properly trained and vetted.",
  },
  {
    question: "Why do I need to verify SIA licences?",
    answer: "UK law requires employers to ensure that all security personnel hold valid SIA licences before they can work. Employing unlicensed security staff is a criminal offence that can result in fines of up to £5,000 per unlicensed worker. Verifying licences protects your business from legal liability, ensures compliance with industry regulations, and maintains the professional standards of your security team.",
  },
  {
    question: "How do I renew or manage my API key?",
    answer: "We provide personalized onboarding and account management to ensure your integration runs smoothly. For API key renewal, account settings, or any account-related questions, please contact us at sales@siachecker.co.uk and our team will assist you directly.",
  },
  {
    question: "Can you help integrate the API with my system?",
    answer: "Yes! We offer integration support to help you seamlessly incorporate our SIA verification API into your existing systems. Whether you're building a new onboarding platform or adding verification to your current workflow, our team can provide technical guidance and assistance. Contact us at sales@siachecker.co.uk to discuss your integration needs.",
  },
  {
    question: "How quickly can I get verification results?",
    answer: "Our API provides instant verification results, typically within seconds. This allows you to make real-time compliance decisions during your onboarding or scheduling processes.",
  },
  {
    question: "What happens if a licence check fails?",
    answer: "Failed checks are not charged to your account. You only pay for successful licence verifications. If a check fails due to invalid input or system errors, you can retry without incurring additional costs.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl lg:text-5xl text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about SIA licence verification
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="rounded-lg border bg-card px-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mx-auto max-w-3xl mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="mailto:sales@siachecker.co.uk"
              className="text-primary hover:underline font-medium"
            >
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
