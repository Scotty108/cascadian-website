"use client";

import ScrollReveal from "./ScrollReveal";

const platforms = ["Anthropic", "OpenAI", "Microsoft", "Google", "Nvidia", "N8N"];

export default function TrustStrip() {
  return (
    <section className="section-secondary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-theme-faint text-center mb-8">
            Platforms We Support
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {platforms.map((name) => (
              <span
                key={name}
                className="text-sm md:text-base font-medium text-theme-muted whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
