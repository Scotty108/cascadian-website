"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const heading = "The first step is a conversation";
const words = heading.split(" ");

export default function FinalCTA() {
  return (
    <section id="cta" className="section-secondary py-24 md:py-32 relative overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/forest-aerial.png"
          alt=""
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-secondary)] via-[var(--color-surface-secondary)]/80 to-[var(--color-surface-secondary)]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          {/* Staggered word entrance heading */}
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-theme-primary mb-6">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <p className="text-base text-theme-secondary leading-[1.7] max-w-[520px] mx-auto mb-10">
            Book a free 30-minute strategy call. No pitch deck. No pressure.
            Just clarity about where AI fits in your business.
          </p>

          <div className="flex flex-col items-center gap-5">
            {/* Primary CTA with pulsing glow */}
            <div className="relative inline-flex items-center justify-center">
              {/* Pulsing glow behind button */}
              <motion.div
                className="absolute inset-0 bg-accent-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              />
              <a
                href="#contact"
                className="relative inline-flex items-center px-8 py-4 text-base font-semibold text-ink-950 bg-accent-500 rounded-full hover:bg-accent-400 active:scale-[0.98] transition-all duration-300"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                Book Your Free Strategy Call
              </a>
            </div>

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
