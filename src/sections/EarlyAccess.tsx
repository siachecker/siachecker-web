import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Sparkles } from "lucide-react"

export default function EarlyAccess() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setMessage("")

    try {
      const response = await fetch("https://formspree.io/f/xldqnykw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus("success")
        setMessage("Thank you! You've been added to our waitlist.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <section id="early-access" className="py-16 md:py-24 bg-brand-50/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <Card className="border-2 border-brand-200">
            <CardHeader className="text-center space-y-4 pb-8">
              <div className="mx-auto w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-brand-600" />
              </div>
              <CardTitle className="font-bold text-3xl md:text-4xl lg:text-5xl text-balance">
                Join the Waitlist
              </CardTitle>
              <CardDescription className="text-lg text-slate-600">
                Join the waitlist to stay updated on subscription plans and early availability.
                The SIA Checker API launches in Q1 2026.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === "submitting"}
                      className="w-full h-11 pl-10 pr-4 border-2 border-brand-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:opacity-50"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "submitting"}
                    className="h-11 text-white font-semibold text-base sm:w-auto w-full cursor-pointer disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Joining..." : "Join Waitlist"}
                  </Button>
                </div>
                {message && (
                  <p
                    className={`text-sm text-center ${
                      status === "success" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {message}
                  </p>
                )}
              </form>
              <div className="mt-6 pt-6 border-t border-brand-200">
                <p className="text-center text-slate-600">
                  Early adopters may receive priority access and reduced pricing during the rollout.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
