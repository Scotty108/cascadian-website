"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { StaggerParent, StaggerChild } from "./StaggerChildren";

const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "Identify the high-leverage opportunities. We look at where AI will move the needle for your organization specifically.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Map out the plan. We write exactly what to build, which tools to use, and in what order. You get a clear roadmap your whole team can understand.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Systems you can trust. We build custom AI solutions — automations, agents, integrations, workflows — that handle real work. Not demos. Not experiments.",
  },
  {
    number: "04",
    title: "Enable",
    description:
      "Make it stick. We train your team, manage the transition, support adoption, and stay until AI isn't 'the AI project' anymore — it's just how your business runs.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 section-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 md:mb-20">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-4">
              Our Process
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-theme-primary mb-6">
              A holistic approach to AI that works
            </h2>
            <p className="text-base text-theme-secondary leading-relaxed max-w-[65ch]">
              Through years of experience, we take a step-by-step approach.
              Ultimately, this ends up being faster, cheaper, and more reliable.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps with connecting line */}
        <StaggerParent className="relative ml-4 md:ml-8">
          {/* Animated vertical connecting line */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px bg-accent-500/20 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <StaggerChild
              key={step.number}
              className={`relative pl-10 md:pl-14 ${
                index < steps.length - 1 ? "pb-12 md:pb-16" : ""
              }`}
            >
              {/* Accent dot on the line with pulse + glow */}
              <motion.div
                className="absolute left-0 top-1 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_8px_rgba(0,194,168,0.4)]"
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.5, 1] }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                aria-hidden="true"
              />

              <span className="text-2xl md:text-3xl font-mono text-accent-400 block mb-2">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-theme-primary mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-theme-muted leading-relaxed max-w-[55ch]">
                {step.description}
              </p>
            </StaggerChild>
          ))}
        </StaggerParent>

        {/* Inline CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 ml-4 md:ml-8 pl-10 md:pl-14">
            <a
              href="#contact"
              className="inline-flex items-center text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors duration-300"
              style={{
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              Talk to an expert
              <svg
                className="ml-1.5 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
