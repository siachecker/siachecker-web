import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#early-access", label: "Join Waitlist" },
    { href: "https://docs.siachecker.co.uk", label: "Docs" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full pt-2">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2">
              <img src="/logo.png" alt="SIA Checker Logo" className="h-8 w-8 rounded"/>
              <span className="font-bold text-xl">SIA Checker</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium text-white hover:text-white/80 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA Buttons */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Get API Key
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
                  Get API Key
                </Button>
              </div> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}