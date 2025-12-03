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
    <section id="early-access" className="py-20 md:py-32 bg-violet-50/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <Card className="border-2 border-violet-200">
            <CardHeader className="text-center space-y-4 pb-8">
              <div className="mx-auto w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-violet-600" />
              </div>
              <CardTitle className="font-bold text-3xl md:text-4xl lg:text-5xl text-balance">
                Join the Waitlist
              </CardTitle>
              <CardDescription className="text-lg text-purple-700">
                Be among the first to access SIA Checker API and get exclusive early adopter benefits including
                special pricing, priority support, and lifetime discounts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-violet-400" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === "submitting"}
                      className="w-full h-11 pl-10 pr-4 border-2 border-violet-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 disabled:opacity-50"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "submitting"}
                    className="h-11 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-base sm:w-auto w-full cursor-pointer disabled:cursor-not-allowed"
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
              <div className="mt-6 pt-6 border-t border-violet-200">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-semibold text-lg">Early Access</p>
                    <p className="text-sm text-purple-600">Be first to try</p>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Special Pricing</p>
                    <p className="text-sm text-purple-600">Exclusive discounts</p>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Priority Support</p>
                    <p className="text-sm text-purple-600">Direct access to team</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
