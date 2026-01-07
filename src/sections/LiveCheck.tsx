import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Search, AlertCircle, AlertTriangle } from "lucide-react"

type LiveCheckApiResponse = {
  status?: "FOUND" | "NOT_FOUND"
  code?: "RATE_LIMIT_EXCEEDED"
  message?: string
}

export default function LiveCheck() {
  const [license, setLicense] = useState("")
  const [status, setStatus] =
    useState<
      "idle" | "verifying" | "found" | "not_found" | "rate_limited" | "invalid" | "error"
    >("idle")

  const verifyLicense = async (licenseNumber: string): Promise<Response> => {
    return fetch("https://api.siachecker.co.uk/v1/simple/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        licenceNumber: licenseNumber,
      }),
    })
  }

  const handleLicenseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numeric = e.target.value.replace(/\D/g, "").slice(0, 16)
    setLicense(numeric)

    // Only clear status when user reaches 16 digits (condition fixed)
    // Keep error messages visible during partial input
    if (numeric.length === 16) {
      setStatus("idle")
    }
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

      const data: LiveCheckApiResponse = await response.json()

      if (data.code === "RATE_LIMIT_EXCEEDED") {
        setStatus("rate_limited")
      } else if (data.status === "FOUND") {
        setStatus("found")
      } else if (data.status === "NOT_FOUND") {
        setStatus("not_found")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="livecheck" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-balance mb-4">
            Try a live SIA licence check
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Instantly verify whether an SIA licence exists in the official public register.
          </p>
        </div>

        {/* Tool Container */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg border border-brand-100 bg-white shadow-xl p-10 md:p-12">
            {/* Trust microcopy */}
            <div className="mb-6 flex items-center justify-center gap-3 text-sm text-slate-500">
              <span>Live SIA register data</span>
              <span className="h-3 w-px bg-slate-300" />
              <span>20 free checks per day</span>
              <span className="h-3 w-px bg-slate-300" />
              <span>No account required</span>
            </div>

            <form onSubmit={handleSubmit}>
              <div
                className="
                  flex flex-col gap-3
                  sm:flex-row sm:gap-0
                  sm:border-2 sm:border-brand-300
                  sm:rounded-lg
                  sm:overflow-hidden
                  sm:focus-within:border-brand-600
                  sm:focus-within:ring-2
                  sm:focus-within:ring-brand-600/20
                  transition-all
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
                    h-14
                    w-full
                    px-4 sm:px-6
                    font-mono text-base
                    placeholder:font-normal placeholder:text-slate-400
                    border-2 border-brand-300
                    rounded-lg
                    sm:border-0 sm:rounded-none
                    bg-white
                    focus:outline-none
                    focus:border-brand-600
                    focus:ring-2 focus:ring-brand-600/20
                    sm:focus:ring-0
                    disabled:bg-slate-50
                    disabled:text-slate-500
                    transition-all
                  "
                />

                <Button
                  type="submit"
                  disabled={status === "verifying"}
                  className="
                    h-14
                    w-full sm:w-auto
                    px-8
                    text-base
                    rounded-lg sm:rounded-none
                    bg-brand-600
                    text-white
                    hover:bg-brand-700
                    disabled:bg-brand-400
                    sm:border-l-2 sm:border-brand-300
                    flex items-center justify-center gap-2
                    transition-colors
                  "
                >
                  <Search className="h-4 w-4" />
                  {status === "verifying" ? "Verifying..." : "Verify licence"}
                </Button>
              </div>

              {/* Result */}
              <div className="min-h-[72px] mt-6 flex items-start justify-center">
                {status === "invalid" && (
                  <div className="flex items-start gap-3 text-indigo-600/90">
                    <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <p className="text-base">
                      Licence number must be exactly 16 digits.
                    </p>
                  </div>
                )}

                {status === "verifying" && (
                  <p className="text-base text-slate-600">
                    Verifying licence in the SIA public register...
                  </p>
                )}

                {status === "found" && (
                  <div className="flex items-start gap-3 text-emerald-600/90">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <p className="text-base font-medium">
                      Licence found in the SIA public register.
                    </p>
                  </div>
                )}

                {status === "not_found" && (
                  <div className="flex items-start gap-3 text-red-600/90">
                    <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-base font-medium">
                        Licence not found in the SIA public register.
                      </p>
                    </div>
                  </div>
                )}

                {status === "rate_limited" && (
                  <div className="flex items-start gap-3 text-amber-600/90">
                    <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <p className="text-base">
                      Daily check limit reached. Please try again tomorrow.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-start gap-3 text-red-600/90">
                    <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-base font-medium">
                        An unexpected error occurred. Please try again later.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Transition to API */}
          <p className="mt-8 text-center text-sm text-slate-500">
            Need automated checks or full licence details?{" "}
            <a href="https://docs.siachecker.co.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              Learn how
            </a>{" "}
            to integrate automated SIA verification into your systems.
          </p>
        </div>
      </div>
    </section>
  )
}
