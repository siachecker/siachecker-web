import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, Clock, Database, Code, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Average response time under 100ms. Built for performance with global CDN.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "GDPR compliant with enterprise-grade security. SOC 2 Type II certified.",
  },
  {
    icon: Clock,
    title: "Real-Time Verification",
    description: "Instant checks against the latest SIA register data. Updated hourly.",
  },
  {
    icon: Database,
    title: "Comprehensive Data",
    description: "Get licence status, expiry dates, sectors, and more in a single request.",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "RESTful API with SDKs for Node.js, Python, PHP. Detailed documentation.",
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    description: "From startups to enterprise. Auto-scaling infrastructure handles any load.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl lg:text-5xl text-balance">
            Everything you need to verify SIA licences
          </h2>
          <p className="text-lg text-purple-700 text-pretty">
            Purpose-built API with all the features developers need for seamless integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-2 border-violet-200 hover:border-violet-400 transition-colors">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100">
                    <Icon className="h-6 w-6 text-violet-600" />
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
