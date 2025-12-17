export default function Footer() {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Join Waitlist", href: "#early-access" },
      { label: "Documentation", href: "https://docs.siachecker.co.uk" },
      { label: "API Status", href: "https://status.siachecker.co.uk" },
    ],
    // Company: [
    //   { label: "About", href: "#" },
    //   { label: "Blog", href: "#" },
    //   { label: "Careers", href: "#" },
    //   { label: "Contact", href: "#" },
    // ],
    // Legal: [
    //   { label: "Privacy Policy", href: "#" },
    //   { label: "Terms of Service", href: "#" },
    //   { label: "Cookie Policy", href: "#" },
    //   { label: "GDPR", href: "#" },
    // ],
  }

  return (
    <footer className="border-t bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="SIA Checker Logo" className="h-8"/>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Reliable API for SIA Licence Checks in the UK.
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
          <p className="text-sm text-muted-foreground">© 2025 SIA Checker. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Built for developers. Powered by UK data.</p>
        </div>
      </div>
    </footer>
  )
}