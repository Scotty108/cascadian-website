"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { StaggerParent, StaggerChild } from "./StaggerChildren";
import SpotlightCard from "./SpotlightCard";

const capabilities = [
  {
    title: "AI Strategy & Assessments",
    description:
      "We analyze your business and build a clear, prioritized AI strategy with timelines, owners, and measurable goals.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l3.5-6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l-2 5" />
      </svg>
    ),
  },
  {
    title: "Process Analysis",
    description:
      "We look at how your business actually runs — the workflows, the bottlenecks, the manual tasks — and show you exactly where AI fits.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="5" height="5" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="3" width="5" height="5" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9.5" y="16" width="5" height="5" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 8v2.5a2 2 0 002 2h9a2 2 0 002-2V8M12 12.5V16" />
      </svg>
    ),
  },
  {
    title: "Technology Selection",
    description:
      "There are thousands of AI tools. We recommend what actually works for your needs — no vendor bias, no platform lock-in.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2.25 7.5 12 13l9.75-5.5L12 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l9.75 5.5 9.75-5.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 16.5L12 22l9.75-5.5" />
      </svg>
    ),
  },
  {
    title: "Custom AI Agents & Automations",
    description:
      "We build AI systems that do real work: automating workflows, supporting decisions, moving data between systems. Production-ready.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h9a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0017.25 4.5h-9A2.25 2.25 0 006 6.75v10.5A2.25 2.25 0 008.25 19.5zm.75-12h1.5m3 0h1.5m-6 3h1.5m3 0h1.5m-6 3h1.5m3 0h1.5"
        />
      </svg>
    ),
  },
  {
    title: "Training & Education",
    description:
      "We meet your team where they are. Training applicable to their actual job, not a generic workshop. By role, building habits that stick.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    title: "Custom Development",
    description:
      "Our engineers build custom apps, internal tools, and platforms designed around how your business operates. Enterprise-grade. Owned by you.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
];

export default function Capabilities() {
  return (
    <section id="services" className="py-24 md:py-32" style={{ background: "linear-gradient(180deg, var(--color-surface-secondary) 0%, var(--color-surface-primary) 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 md:mb-20">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-4">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-theme-primary mb-6">
              One partner. Every capability.
            </h2>
          </div>
        </ScrollReveal>

        {/* Decorative image strip */}
        <ScrollReveal>
          <div className="relative w-full h-32 md:h-40 rounded-xl overflow-hidden mb-12">
            <Image
              src="/images/team-working.png"
              alt="Team collaborating"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface-secondary)] via-transparent to-[var(--color-surface-secondary)]" />
          </div>
        </ScrollReveal>

        {/* Capability cards — 2-column grid */}
        <StaggerParent className="grid md:grid-cols-2 gap-5">
          {capabilities.map((capability) => (
            <StaggerChild key={capability.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                <SpotlightCard className="group border border-theme h-full">
                  <div className="p-8">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-500/10 text-accent-400 mb-5 group-hover:bg-accent-500/20 group-hover:scale-110 transition-all duration-300">
                      {capability.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-theme-primary mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-theme-muted leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
