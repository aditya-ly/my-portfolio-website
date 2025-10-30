export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                ALY
              </h3>
              <p className="text-muted-foreground">Full Stack Developer & Software Data Integration Engineer</p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                {["About", "Projects", "Skills", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Follow</h4>
              <div className="flex gap-4">
                {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <p className="text-center text-muted-foreground text-sm">
              © {currentYear} Aditya Laksita Yhuda. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
