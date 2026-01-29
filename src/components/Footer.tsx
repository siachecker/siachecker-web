export default function Footer() {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Documentation", href: "https://docs.siachecker.co.uk" },
      { label: "API Status", href: "https://status.siachecker.co.uk" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy.html" },
      { label: "Terms of Service", href: "/terms.html" },
    ],
    Support: [
      { label: "Contact support", href: "mailto:hello@siachecker.co.uk" },
    ],
  }

  return (
    <footer className="border-t bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="SIA Checker Logo" className="h-8" />
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Automated SIA licence check API for UK security companies.
            </p>
            <p className="text-xs text-muted-foreground">
              Independent service. Not affiliated with the Security Industry Authority (SIA).
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 SIA Checker. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            Built for developers. Powered by UK data from the public SIA Register.
          </p>
        </div>
      </div>
    </footer>
  )
}
