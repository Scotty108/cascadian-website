"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Whole Home Systems", href: "#whole-home" },
  { label: "Drinking Water Systems", href: "#drinking-water" },
  { label: "Add-Ons", href: "#add-ons" },
  { label: "Our Story", href: "#our-story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-cascade-900">
              Cascadian
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-cascade-800 hover:text-cascade-500 transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: phone + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+13605550142"
              className="text-sm font-semibold text-cascade-800 hover:text-cascade-600 transition-colors duration-200 flex items-center gap-1.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              (360) 555-0142
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-forest-500 text-white text-sm font-semibold rounded-lg hover:bg-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:ring-offset-2 transition-all duration-200"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-cascade-800 hover:bg-cascade-50 focus:outline-none focus:ring-2 focus:ring-cascade-400 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pt-2 pb-6 space-y-1 border-t border-snow-200 bg-white">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-cascade-800 hover:bg-cascade-50 rounded-md transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 space-y-3 border-t border-snow-200 mt-3">
            <a
              href="tel:+13605550142"
              className="flex items-center gap-2 px-3 py-2 text-base font-semibold text-cascade-800"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              (360) 555-0142
            </a>
            <a
              href="#quote"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-5 py-3 bg-forest-500 text-white font-semibold rounded-lg hover:bg-forest-600 transition-colors duration-200"
            >
              Get a Free Quote
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
