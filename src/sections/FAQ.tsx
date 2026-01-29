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
    question: "Is this service affiliated with the SIA?",
    answer: "No, we are not affiliated with or endorsed by the Security Industry Authority. We are an independent service that provides programmatic access to publicly available SIA licence data through our API. Our service helps businesses automate their compliance checks by verifying licence information against the official SIA public register.",
  },
  {
    question: "Is this compliant with UK data protection laws?",
    answer: "Yes, our service is fully compliant with UK data protection laws including GDPR. We only access and return information that is publicly available through the SIA's official public register. All licence data we provide is already publicly accessible information that the SIA makes available for verification purposes. We do not store or process any personal data beyond what is necessary to provide the verification service.",
  },
  {
    question: "How do I renew or manage my API key?",
    answer: "We provide personalized onboarding and account management to ensure your integration runs smoothly. For API key renewal, account settings, or any account-related questions, please contact us at hello@siachecker.co.uk and our team will assist you directly.",
  },
  {
    question: "Can you help integrate the API with my system?",
    answer: "Yes! We offer integration support to help you seamlessly incorporate our SIA verification API into your existing systems. Whether you're building a new onboarding platform or adding verification to your current workflow, our team can provide technical guidance and assistance. Contact us at hello@siachecker.co.uk to discuss your integration needs.",
  },
  {
    question: "How quickly can I get verification results?",
    answer: "Our API provides instant verification results, typically within seconds. This allows you to make real-time compliance decisions during your onboarding or scheduling processes.",
  },
  {
    question: "What data do you return from a licence check?",
    answer: "When a licence is found, we return comprehensive details including: the licence holder's first name and surname, the 16-digit licence number, their role (e.g., Front Line), licence sector (e.g., Door Supervision), expiry date, and current status (Active, Expired, etc.). All data is returned in a clean JSON format for easy integration into your systems. For licences not found in the register, we return a clear NOT_FOUND status.",
  },
  {
    question: "What happens if a licence check fails?",
    answer: "Failed checks are not charged to your account. You only pay for successful licence verifications. If a check fails due to invalid input or system errors, you can retry without incurring additional costs.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50/70 py-16 md:py-24">
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
              href="mailto:hello@siachecker.co.uk"
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
