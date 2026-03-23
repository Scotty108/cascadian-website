"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden section-primary">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-primary)] via-[var(--color-surface-primary)]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface-primary)]/80 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 md:py-40">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left — text content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-6"
            >
              Trusted AI Transformation Partners
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.05] tracking-tighter text-theme-primary mb-8"
            >
              Transform your business with AI partners you can trust
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
              className="text-base font-sans text-theme-secondary max-w-[56ch] leading-relaxed mb-10"
            >
              Our team of AI transformation consultants and forward-deployed
              engineers leverage enterprise-grade AI to drive adoption, streamline
              operations, and produce outsized results throughout your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-ink-950 bg-accent-500 rounded-full hover:bg-accent-400 active:scale-[0.98] transition-all duration-300"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                Book a Free Strategy Call
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-theme-primary border border-theme rounded-full hover:bg-white/[0.04] active:scale-[0.98] transition-all duration-300"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                How We Work ↓
              </a>
            </motion.div>
          </div>

          {/* Right — hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-people.png"
                alt="AI transformation team at work"
                fill
                className="object-cover"
                priority
              />
              {/* Glass border overlay */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.08] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-primary)]/30 to-transparent pointer-events-none" />
            </div>

            {/* Floating stat badge — bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease }}
              className="absolute -bottom-4 -left-6 glass-nav rounded-xl px-5 py-4"
            >
              <p className="text-xs text-theme-faint uppercase tracking-wider mb-1">
                Businesses transformed
              </p>
              <p className="text-2xl font-semibold text-theme-primary tabular-nums">
                47<span className="text-accent-400">+</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease }}
        className="absolute bottom-10 left-6 lg:left-8"
      >
        <div className="flex items-center gap-3">
          <div className="w-px h-12 overflow-hidden relative">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-4 bg-accent-500/40"
            />
          </div>
          <span className="text-[11px] text-theme-faint tracking-widest uppercase">
            Scroll
          </span>
        </div>
      </motion.div>
    </section>
  );
}
