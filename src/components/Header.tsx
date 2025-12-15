import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    // { href: "#livedemo", label: "Live Demo" },
    { href: "#features", label: "Features" },
    { href: "#early-access", label: "Join Waitlist" },
    { href: "https://docs.siachecker.co.uk", label: "Documentation" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full pt-2">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="SIA Checker Logo" className="h-8 w-8"/>
              <span className="font-bold text-xl">SIA Checker</span>
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right spacer for balance (desktop) */}
          <div className="hidden md:block w-[120px]"></div>

          {/* CTA Buttons */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <a href="#signin"
                className="font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign In
              </a>
              <Button size="lg" className="text-white text-lg px-8 cursor-pointer">
                Get started
              </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 mt-2 bg-white rounded-lg shadow-lg p-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {/* <div className="flex flex-col space-y-2 pt-3">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button size="sm" className="bg-accent hover:bg-accent/90">
                  Get started
                </Button>
              </div> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}