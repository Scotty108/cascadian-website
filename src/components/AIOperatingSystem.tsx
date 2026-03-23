"use client";

import ScrollReveal from "./ScrollReveal";

const withoutItems = [
  "Disconnected tools across teams",
  "Data lives in silos",
  "No visibility into what\u2019s working",
  "When something breaks, nobody knows who to call",
];

const withItems = [
  "One unified system, fully secure",
  "Shared intelligence across teams",
  "Every automation connected and monitored",
  "AI gets smarter over time from your data",
];

export default function AIOperatingSystem() {
  return (
    <section id="ai-os" className="section-primary py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-4">
            AI Operating System
          </p>

          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-theme-primary mb-10">
            Launch your AI operating system
          </h2>

          <div className="max-w-[680px] mb-16 md:mb-20">
            <p className="text-base text-theme-secondary leading-[1.7] mb-6">
              Companies may have a chatbot here, an automation there, a tool
              marketing loves that sales has never heard of. Twelve logins. No
              shared data. That&apos;s not an AI strategy. That&apos;s a
              distraction.
            </p>
            <p className="text-base text-theme-secondary leading-[1.7]">
              We design and deploy a unified AI Operating System &mdash; a
              single, central layer that connects every AI agent, automation,
              and workflow into one managed ecosystem.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Without an AI OS */}
            <div className="card-theme rounded-2xl p-8 border-theme">
              <h3 className="text-theme-muted font-semibold mb-6">
                Without an AI OS
              </h3>
              <ul className="space-y-4">
                {withoutItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-theme-muted leading-relaxed"
                  >
                    <span
                      className="mt-[7px] block h-px w-4 shrink-0 bg-current opacity-40"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* With an AI OS */}
            <div className="card-theme rounded-2xl p-8 border border-accent-500/30">
              <h3 className="text-accent-400 font-semibold mb-6">
                With an AI OS
              </h3>
              <ul className="space-y-4">
                {withItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-theme-muted leading-relaxed"
                  >
                    <span
                      className="mt-[7px] block h-px w-4 shrink-0 bg-accent-500/50"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
