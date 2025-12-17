import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Search, AlertCircle, AlertTriangle } from "lucide-react"

type DemoApiResponse = {
  status: "FOUND" | "NOT_FOUND"
}

export default function Demo() {
  const [license, setLicense] = useState("")
  const [status, setStatus] =
    useState<
      "idle" | "verifying" | "found" | "not_found" | "rate_limited" | "invalid"
    >("idle")

  const verifyLicense = async (licenseNumber: string): Promise<Response> => {
    await new Promise((resolve) => setTimeout(resolve, 800))

    if (licenseNumber.endsWith("0000")) {
      return new Response(JSON.stringify({ status: "NOT_FOUND" }), { status: 200 })
    }

    if (licenseNumber.endsWith("9999")) {
      return new Response(null, { status: 429 })
    }

    return new Response(JSON.stringify({ status: "FOUND" }), { status: 200 })
  }

  const handleLicenseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numeric = e.target.value.replace(/\D/g, "").slice(0, 16)
    setLicense(numeric)
    setStatus("idle")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (license.length !== 16) {
      setStatus("invalid")
      return
    }

    setStatus("verifying")

    try {
      const response = await verifyLicense(license)

      if (response.status === 429) {
        setStatus("rate_limited")
        return
      }

      const data: DemoApiResponse = await response.json()
      setStatus(data.status === "FOUND" ? "found" : "not_found")
    } catch {
      setStatus("not_found")
    }
  }

  return (
    <section id="demo" className="bg-white min-h-[65vh] flex items-center py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hook + Title */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-brand-600 mb-6">
            Try it now
          </p>

          <h2 className="font-bold text-3xl md:text-4xl text-balance mb-3">
            Check your SIA licence number
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Enter an SIA licence number to check its status against the public SIA register.
          </p>
        </div>

        {/* Tool */}
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div
            className="
              flex flex-col gap-2
              sm:flex-row sm:gap-0
              sm:border-2 sm:border-slate-400
              sm:rounded-lg
              sm:overflow-hidden
              bg-white
              sm:focus-within:border-slate-500
              sm:focus-within:ring-1
              sm:focus-within:ring-slate-500/50
            "
          >

          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Enter a 16-digit SIA licence number"
            value={license}
            onChange={handleLicenseChange}
            disabled={status === "verifying"}
            className="
              h-16
              w-full
              px-4 sm:px-6
              font-mono text-lg
              border-2 border-slate-400
              rounded-lg
              sm:border-0 sm:rounded-none
              bg-white
              focus:outline-none
              focus:border-slate-500
              focus:ring-1 focus:ring-slate-500/50
              sm:focus:ring-0
              disabled:bg-slate-100
            "
          />

            {/* Button as border continuation */}
            <Button
              type="submit"
              disabled={status === "verifying"}
              className="
                h-16
                w-full sm:w-auto
                px-6 sm:px-8
                text-base sm:text-sm
                rounded-lg sm:rounded-none
                bg-slate-700
                text-white
                hover:bg-slate-900
                disabled:bg-slate-700
                sm:border-l sm:border-slate-300
                flex items-center justify-center gap-2
              "
            >
              <Search className="h-4 w-4" />
              {status === "verifying" ? "Checking..." : "Check licence"}
            </Button>

          </div>

          {/* Result */}
          <div className="min-h-[88px] mt-6 flex items-start">

            {status === "invalid" && (
              <div className="flex items-start gap-3 text-indigo-700/80">
                <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-base">
                  Licence number must be exactly 16 digits.
                </p>
              </div>
            )}

            {status === "verifying" && (
              <p className="text-base text-slate-600">
                Checking licence in the SIA public register...
              </p>
            )}

            {status === "found" && (
              <div className="flex items-start gap-3 text-emerald-700/80">
                <CheckCircle className="h-6 w-6 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium">
                  Licence found in the SIA public register.
                </p>
              </div>
            )}

            {status === "not_found" && (
              <div className="flex items-start gap-3 text-red-700/80">
                <XCircle className="h-6 w-6 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium">
                  Licence not found in the SIA public register.
                </p>
              </div>
            )}

            {status === "rate_limited" && (
              <div className="flex items-start gap-3 text-amber-700/80">
                <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-base">
                  Daily check limit reached. Please try again tomorrow.
                </p>
              </div>
            )}
          </div>
        </form>

        {/* Muted context */}
        <div className="mt-10 flex items-center justify-center gap-3 text-xs text-slate-400">
          <span>Live data</span>
          <span className="h-3 w-px bg-slate-400/60" />
          <span>5 free checks daily</span>
          <span className="h-3 w-px bg-slate-400/60" />
          <span>No account required</span>
        </div>
      </div>
    </section>
  )
}
