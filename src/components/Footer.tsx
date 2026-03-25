"use client";

import ScrollReveal from "./ScrollReveal";

const footerLinks = {
  company: [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "About", href: "#about" },
    { label: "Articles", href: "#articles" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Notice", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socials = [
  {
    label: "X",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Medium",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="section-primary border-t border-theme">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="/" className="inline-block mb-5">
                <img src="/images/logo-full.png" alt="Cascadian" className="h-7 logo-themed" />
              </a>
              <p className="text-sm text-theme-muted leading-relaxed mb-6">
                A global AI consultancy delivering transformation services to
                guide organizations into the new era of AI.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-theme-muted hover:bg-white/10 hover:text-theme-primary transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Company links */}
            <div>
              <h3 className="text-xs font-semibold text-theme-primary uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-theme-muted hover:text-theme-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal links */}
            <div>
              <h3 className="text-xs font-semibold text-theme-primary uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-theme-muted hover:text-theme-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offices */}
            <div>
              <h3 className="text-xs font-semibold text-theme-primary uppercase tracking-wider mb-4">
                Offices
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-theme-secondary">Seattle, WA</p>
                  <p className="text-xs text-theme-faint">
                    400 Broad St, Suite 200
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-theme-secondary">Portland, OR</p>
                  <p className="text-xs text-theme-faint">
                    1120 NW Couch St, Suite 320
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="mailto:hello@cascadian.ai"
                  className="text-sm text-accent-400 hover:text-accent-300 transition-colors"
                >
                  hello@cascadian.ai
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-theme flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-theme-faint">
              &copy; 2026 Cascadian AI, Inc. All rights reserved.
            </p>
            <p className="text-xs text-ink-600">
              Built with purpose in the Pacific Northwest.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
