import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Diagonal split background with colorful waves */}
      <div className="absolute inset-0 bg-white">
        <div
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 85%)',
          }}
        >
          {/* Base purple gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-300 via-purple-200 to-violet-200" />

          {/* Colorful wave blobs */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Purple wave - main color */}
            <div
              className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500 to-violet-600 opacity-50 blur-3xl"
              style={{ top: '-10%', left: '10%' }}
            />
            {/* Cyan wave */}
            <div
              className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-45 blur-3xl"
              style={{ top: '20%', right: '15%' }}
            />
            {/* Red/Pink wave */}
            <div
              className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-br from-rose-400 to-pink-500 opacity-40 blur-3xl"
              style={{ bottom: '10%', left: '30%' }}
            />
            {/* Yellow wave */}
            <div
              className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-yellow-300 to-amber-400 opacity-45 blur-3xl"
              style={{ top: '30%', left: '50%' }}
            />
            {/* Additional purple accent */}
            <div
              className="absolute w-[550px] h-[550px] rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 opacity-50 blur-3xl"
              style={{ bottom: '0%', right: '20%' }}
            />
          </div>
        </div>
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* <div className="mb-8 inline-flex items-center rounded-full bg-violet-100 border-violet-200 border px-4 py-1.5 text-sm">
            <CheckCircle2 className="mr-2 h-4 w-4 text-violet-600" />
            <span className="text-violet-900">
              <strong>99.9% uptime</strong> · Trusted by UK businesses
            </span>
          </div> */}

          {/* Main Heading */}
          <h1 className="mb-6 font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance">
            Simple API for SIA{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 bg-clip-text text-transparent">
              Licence Verification
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-lg md:text-xl text-purple-800 max-w-2xl mx-auto text-pretty">
            Reliable, scalable and developer-friendly SIA licence checks with clean JSON data —
            no scraping, no manual work, and no upstream headaches.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#early-access" className="inline-block">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white text-lg px-8 cursor-pointer">
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://docs.siachecker.co.uk" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/80 backdrop-blur border-violet-200 hover:bg-white cursor-pointer"
              >
                <Code2 className="mr-2 h-5 w-5" />
                View Docs
              </Button>
            </a>
          </div>

          {/* Code Example */}
          <div className="mx-auto max-w-2xl">
            <div className="rounded-lg border border-violet-200 bg-white shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-violet-100 to-purple-100 px-4 py-2 border-b border-violet-200">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-violet-700 font-medium">API Request</span>
                </div>
              </div>
              <div className="p-6 font-mono text-left text-sm">
                <div className="text-slate-700">
                  <span className="text-violet-600 font-semibold">curl</span> https://api.siachecker.co.uk/v1/verify \
                </div>
                <div className="text-slate-700 ml-4">
                  -H <span className="text-green-600">"Authorization: Bearer YOUR_API_KEY"</span> \
                </div>
                <div className="text-slate-700 ml-4">
                  -d <span className="text-green-600">"licence_number=12345678"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}