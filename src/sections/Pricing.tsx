import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "5",
    description: "Perfect for testing and small teams",
    features: [
      "100 checks per month",
      "Best-effort availability",
      "Email support",
      "Manual API key",
    ],
    cta: "Start with Basic",
    popular: false,
    paymentLink: "https://buy.stripe.com/9B63cogon6mq8WY202gw001",
  },
  {
    name: "Standard",
    price: "20",
    description: "Built for production use and growing teams",
    features: [
      "1,000 checks per month",
      "Best-effort availability",
      "Email support",
      "Manual API key",
    ],
    cta: "Start Standard",
    popular: true,
    paymentLink: "https://buy.stripe.com/eVq4gs1tt26a0qs6gigw000",
  },
  {
    name: "Enterprise",
    price: "On request",
    description: "For high-volume use cases",
    features: [
      "1,000+ checks per month",
      "Priority email support",
      "Custom solutions",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    popular: false,
    paymentLink: "mailto:sales@siachecker.co.uk",
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl lg:text-5xl text-balance">Simple, transparent pricing</h2>
          <p className="text-lg text-muted-foreground">Only successful licence checks count. No charges for retries or failures.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${plan.popular ? "border-primary border-2 shadow-lg" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Most Popular</Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="font-bold text-4xl">{plan.name === "Enterprise" ? plan.price : `£${plan.price}`}</span>
                  {plan.name !== "Enterprise" && <span className="text-muted-foreground">/month</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-accent hover:bg-accent/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <a href={plan.paymentLink} target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Used by UK security companies for compliance and onboarding checks.
        </p>
      </div>
    </section>
  )
}
