"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { StaggerParent, StaggerChild } from "./StaggerChildren";

const differentiators = [
  {
    title: "Strategy and implementation under one roof",
    body: "Most firms either advise or build. We do both. One team from first conversation to finished system \u2014 no handoffs, no miscommunication.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="12" height="12" rx="2" />
        <rect x="9" y="9" width="12" height="12" rx="2" />
      </svg>
    ),
  },
  {
    title: "Long-term partners",
    body: "Building AI is half the job. Adoption, iterative improvement, and compounding your competitive advantage is the other half. We stay for the long run.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
      </svg>
    ),
  },
  {
    title: "A holistic approach",
    body: "We don\u2019t start with \u2018what can AI do?\u2019 We start with \u2018what does your business need?\u2019 People, process, and technology \u2014 aligned for results.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.5 2v6h-6" />
        <path d="M2.5 22v-6h6" />
        <path d="M21.5 8A10 10 0 0 0 5.6 5.6L2.5 8" />
        <path d="M2.5 16a10 10 0 0 0 15.9 2.4l3.1-2.4" />
      </svg>
    ),
  },
  {
    title: "Gain a competitive edge",
    body: "The technology is enterprise-grade, but most businesses are slow to adopt. Now is the time to become AI-native and unlock hidden capacity.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
];

export default function WhyCascadian() {
  return (
    <section id="why-cascadian" className="section-secondary py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-4">
            Why Cascadian
          </p>

          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-theme-primary mb-10 md:mb-12">
            Your trusted AI transformation partner
          </h2>
        </ScrollReveal>

        {/* Atmospheric landscape image */}
        <ScrollReveal delay={0.1}>
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 md:mb-20">
            <Image
              src="/images/pnw-landscape.png"
              alt="Pacific Northwest landscape"
              fill
              className="object-cover"
            />
            {/* Gradient overlay fading to section background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent" />
          </div>
        </ScrollReveal>

        <StaggerParent className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {differentiators.map((item) => (
            <StaggerChild key={item.title} className="group">
              <motion.div
                className="border-t border-theme pt-6 group-hover:border-accent-500/30 transition-colors duration-500"
                whileHover={{ x: 4 }}
                transition={{
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent-500/10 text-accent-400 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-theme-primary font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-theme-muted leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
