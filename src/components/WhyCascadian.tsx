"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { StaggerParent, StaggerChild } from "./StaggerChildren";

const differentiators = [
  {
    title: "Strategy and implementation under one roof",
    body: "Most firms either advise or build. We do both. One team from first conversation to finished system \u2014 no handoffs, no miscommunication.",
  },
  {
    title: "Long-term partners",
    body: "Building AI is half the job. Adoption, iterative improvement, and compounding your competitive advantage is the other half. We stay for the long run.",
  },
  {
    title: "A holistic approach",
    body: "We don\u2019t start with \u2018what can AI do?\u2019 We start with \u2018what does your business need?\u2019 People, process, and technology \u2014 aligned for results.",
  },
  {
    title: "Gain a competitive edge",
    body: "The technology is enterprise-grade, but most businesses are slow to adopt. Now is the time to become AI-native and unlock hidden capacity.",
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

          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-theme-primary mb-16 md:mb-20">
            Your trusted AI transformation partner
          </h2>
        </ScrollReveal>

        <StaggerParent className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {differentiators.map((item) => (
            <StaggerChild key={item.title} className="group">
              <motion.div
                className="border-t border-theme pt-6 group-hover:border-accent-500/30 transition-colors duration-500"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
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
