"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const platforms = ["Anthropic", "OpenAI", "Microsoft", "Google", "Nvidia", "N8N"];
// Duplicate for seamless loop
const doubled = [...platforms, ...platforms];

export default function TrustStrip() {
  return (
    <section className="section-lifted py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-theme-faint text-center mb-8">
            Platforms We Support
          </p>
        </ScrollReveal>

        {/* Marquee container */}
        <div
          className="overflow-hidden group"
        >
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: [0, "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                ease: "linear",
                duration: 25,
              },
            }}
            style={{ willChange: "transform" }}
          >
            {doubled.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-sm md:text-base font-medium text-theme-muted whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
