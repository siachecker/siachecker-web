import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Diagonal split background with colorful waves */}
      <div className="absolute inset-0 bg-white">
        <div
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 90%)',
          }}
        >
          {/* Base brand gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-brand-50 to-brand-100" />

          {/* Colorful wave blobs */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Purple wave - main brand color */}
            <div
              className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-500 to-brand-700 opacity-50 blur-3xl"
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
            {/* Additional brand accent */}
            <div
              className="absolute w-[550px] h-[550px] rounded-full bg-gradient-to-br from-brand-400 to-brand-600 opacity-50 blur-3xl"
              style={{ bottom: '0%', right: '20%' }}
            />
          </div>
        </div>
      </div>

      <div className="container relative mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">

          {/* Main Heading */}
          <h1 className="mb-6 font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance">
            Reliable API for SIA{" "}
            <span className="bg-gradient-to-r from-brand-700 via-brand-700 to-brand-800 bg-clip-text text-transparent">
              Licence Verification
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto text-pretty">
            Fast, reliable and developer-friendly SIA licence checks – with no brittle scraping, no manual work, and no dependence on gov.uk changes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#early-access" className="inline-block">
              <Button size="lg" className="text-white text-lg px-8 cursor-pointer">
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            {/* <a href="https://docs.siachecker.co.uk" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-slate-50 backdrop-blur border-border hover:text-slate-700 hover:bg-white cursor-pointer"
              >
                <Code2 className="mr-2 h-5 w-5" />
                Live Demo
              </Button>
            </a> */}
          </div>

          {/* Code Example */}
          <div className="mx-auto max-w-2xl">
            <div className="rounded-lg border-2 border-brand-200 bg-slate-50 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-brand-100 to-brand-100 px-4 py-2 border-b border-brand-200">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-brand-800 font-medium">Example Response</span>
                </div>
              </div>
              <div className="p-6 font-mono text-left text-sm overflow-x-auto">
                <pre className="text-slate-700">
                  <span className="text-slate-500">{'{'}</span>{'\n'}
                  {'  '}<span className="text-blue-600">"status"</span>: <span className="text-green-600">"FOUND"</span>,{'\n'}
                  {'  '}<span className="text-blue-600">"message"</span>: <span className="text-green-600">"Licence found."</span>,{'\n'}
                  {'  '}<span className="text-blue-600">"licence"</span>: <span className="text-slate-500">{'{'}</span>{'\n'}
                  {'    '}<span className="text-blue-600">"firstName"</span>: <span className="text-green-600">"ALEX"</span>,{'\n'}
                  {'    '}<span className="text-blue-600">"surname"</span>: <span className="text-green-600">"RIVERTON"</span>,{'\n'}
                  {'    '}<span className="text-blue-600">"licenceNumber"</span>: <span className="text-green-600">"9999999999999999"</span>,{'\n'}
                  {'    '}<span className="text-blue-600">"role"</span>: <span className="text-green-600">"Front Line"</span>,{'\n'}
                  {'    '}<span className="text-blue-600">"licenceSector"</span>: <span className="text-green-600">"Door Supervision"</span>,{'\n'}
                  {'    '}<span className="text-blue-600">"expiryDate"</span>: <span className="text-green-600">"2026-10-26"</span>,{'\n'}
                  {'    '}<span className="text-blue-600">"status"</span>: <span className="text-green-600">"Active"</span>{'\n'}
                  {'  '}<span className="text-slate-500">{'}'}</span>{'\n'}
                  <span className="text-slate-500">{'}'}</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}