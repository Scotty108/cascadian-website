"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const steps = [
  {
    number: "01",
    title: "Audit",
    subtitle: "Find the opportunities",
    description:
      "We look at where AI will move the needle for your organization specifically. Not guesswork — structured analysis of your workflows, bottlenecks, and highest-leverage opportunities.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Map the roadmap",
    description:
      "We write exactly what to build, which tools to use, and in what order. You get a clear roadmap your whole team can understand so you can make informed decisions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Systems you can trust",
    description:
      "We build custom AI solutions — automations, agents, integrations, workflows — that handle real work in your business. Not demos. Not experiments. Systems you can rely on.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.17-2.59a.75.75 0 010-1.34l5.17-2.59a1.5 1.5 0 011.16 0l5.17 2.59a.75.75 0 010 1.34l-5.17 2.59a1.5 1.5 0 01-1.16 0zM18.36 12.41l2.89 1.45a.75.75 0 010 1.34l-5.17 2.59a1.5 1.5 0 01-1.16 0l-5.17-2.59a.75.75 0 010-1.34l2.89-1.45" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Enable",
    subtitle: "Make it stick",
    description:
      "We train your team, manage the transition, support adoption, and stay until AI isn't 'the AI project' anymore — it's just how your business runs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-40 section-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-4">
              Our Process
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-theme-primary mb-6">
              A holistic approach to AI that works
            </h2>
            <p className="text-base text-theme-secondary leading-relaxed max-w-[60ch]">
              Through years of experience, we take a step-by-step approach.
              Ultimately, this ends up being faster, cheaper, and more reliable.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps — alternating left/right layout on desktop */}
        <div className="relative">
          {/* Center timeline line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="w-full h-full bg-ink-700/30" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-accent-500/40 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Mobile timeline line */}
          <div className="lg:hidden absolute left-5 top-0 bottom-0 w-px">
            <div className="w-full h-full bg-ink-700/30" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-accent-500/40 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1, ease }}
                  className="relative"
                >
                  {/* Center dot (desktop) */}
                  <motion.div
                    className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-accent-500 items-center justify-center shadow-[0_0_12px_rgba(0,194,168,0.5)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [0, 1.4, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, ease }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-ink-950" />
                  </motion.div>

                  {/* Mobile dot */}
                  <motion.div
                    className="lg:hidden absolute left-5 top-6 -translate-x-1/2 z-10 w-3 h-3 rounded-full bg-accent-500 shadow-[0_0_8px_rgba(0,194,168,0.4)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [0, 1.4, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, ease }}
                  />

                  {/* Content — alternating sides */}
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-16 ${isLeft ? "" : ""}`}>
                    <div className={`${isLeft ? "lg:pr-16" : "lg:col-start-2 lg:pl-16"} pl-12 lg:pl-0`}>
                      <SpotlightCard className="border border-theme">
                        <div className="p-8 md:p-10">
                          <div className="flex items-center gap-4 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-400 flex items-center justify-center">
                              {step.icon}
                            </div>
                            <span className="text-sm font-mono text-accent-400 tracking-wider">
                              {step.number}
                            </span>
                          </div>
                          <h3 className="text-2xl font-semibold text-theme-primary mb-1">
                            {step.title}
                          </h3>
                          <p className="text-sm font-medium text-accent-400/70 mb-4">
                            {step.subtitle}
                          </p>
                          <p className="text-sm text-theme-muted leading-relaxed max-w-[48ch]">
                            {step.description}
                          </p>
                        </div>
                      </SpotlightCard>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 text-center">
            <a
              href="#cta"
              className="inline-flex items-center text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors duration-300 group"
            >
              Talk to an expert
              <svg className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
