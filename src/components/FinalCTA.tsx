"use client";

import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section id="cta" className="section-secondary py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-theme-primary mb-6">
            The first step is a conversation
          </h2>

          <p className="text-base text-theme-secondary leading-[1.7] max-w-[520px] mx-auto mb-10">
            Book a free 30-minute strategy call. No pitch deck. No pressure.
            Just clarity about where AI fits in your business.
          </p>

          <div className="flex flex-col items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-ink-950 bg-accent-500 rounded-full hover:bg-accent-400 active:scale-[0.98] transition-all duration-300"
              style={{
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              Book Your Free Strategy Call
            </a>

            <a
              href="#guide"
              className="text-sm text-theme-muted hover:text-accent-400 transition-colors duration-300"
              style={{
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              Not ready to talk? Get our free AI Readiness Guide &rarr;
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
