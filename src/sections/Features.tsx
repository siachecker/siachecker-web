import { Card, CardContent } from "@/components/ui/card"
import { Zap, ShieldCheck, Gauge, Code, Workflow, ServerOff } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Developer-Friendly API",
    description: "Clean REST design, clear documentation, and predictable JSON responses.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Checks",
    description: "Automatic retries, smart caching, and resilience against upstream changes keep your checks running.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized processing and caching deliver consistently low-latency responses.",
  },
  {
    icon: Gauge,
    title: "Fair Billing",
    description: "You only pay for real upstream lookups – cached results, retries, and failures cost nothing.",
  },
  {
    icon: Workflow,
    title: "Built for Automation",
    description: "Fits naturally into onboarding systems, HR tools, scheduling platforms, and guard-management software.",
  },
  {
    icon: ServerOff,
    title: "Zero Infrastructure",
    description: "No servers, cron jobs, or maintenance – we run the entire checks pipeline for you.",
  },
]


export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl lg:text-5xl text-balance">
            Everything you need to verify SIA licences
          </h2>
          <p className="text-lg text-slate-600 text-pretty">
            Purpose-built API with all the features developers need for seamless integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-2 border-brand-200 hover:border-brand-500 transition-colors">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100">
                    <Icon className="h-6 w-6 text-brand-600" />
                  </div>
                  <h3 className="mb-2 font-semibold text-xl">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
