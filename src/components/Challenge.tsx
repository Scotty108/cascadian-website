"use client";

import ScrollReveal from "./ScrollReveal";

export default function Challenge() {
  return (
    <section className="section-primary py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-[680px]">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-6">
              The Challenge
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-[1.1] tracking-tighter text-theme-primary mb-10">
              AI is easy. Business is hard.
            </h2>

            <p className="text-base font-sans text-theme-secondary leading-[1.7] mb-6">
              Ever seen a mind-blowing AI demo and thought, I need to buy that? Or
              sketched out an automation and thought, this could save us hundreds of
              hours? That feeling is real. The technology is transformative.
            </p>

            <p className="text-base font-sans text-theme-secondary leading-[1.7]">
              The gap between that feeling and actual results is where most
              businesses get stuck. Strategy. Implementation. Adoption. Change
              management. The nuance between these is what separates an AI
              experiment from real business results. You don&apos;t need another
              tool. You need a partner you can trust.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
