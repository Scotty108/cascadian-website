"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const certifications = [
  {
    label: "MIT AI & Machine Learning",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    label: "Anthropic Claude Certified",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    label: "Google Cloud AI",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    label: "Microsoft AI Solutions",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

const teamBlocks = [
  {
    title: "Forward-Deployed Engineers",
    description:
      "We embed with your team. Our engineers work alongside yours during implementation — not from a remote office sending deliverables.",
    image: "/images/engineers-working.png",
  },
  {
    title: "Battle-Tested Methodology",
    description:
      "Years of hard-earned experience across dozens of industries. We've seen what works, what fails, and exactly how to avoid the common pitfalls.",
    image: "/images/handshake.png",
  },
];

export default function Certified() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const imgY2 = useTransform(scrollYProgress, [0, 1], [50, -20]);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 section-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-4">
            Our Team
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-theme-primary mb-6 max-w-[680px]">
            AI-certified consultants and forward-deployed engineers
          </h2>
          <p className="text-base text-theme-secondary leading-[1.7] max-w-[580px] mb-16 md:mb-20">
            Our team holds certifications from leading AI platforms and
            institutions. We don&apos;t just recommend tools — we&apos;re trained
            practitioners who deploy alongside your team to ensure success.
          </p>
        </ScrollReveal>

        {/* Certification badges */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 md:mb-28">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.label}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full border border-accent-500/30 flex items-center justify-center text-accent-400 mb-4"
                  whileHover={{ scale: 1.1, borderColor: "rgba(0, 194, 168, 0.6)" }}
                  transition={{ duration: 0.3, ease }}
                >
                  {cert.icon}
                </motion.div>
                <p className="text-sm font-medium text-theme-secondary">
                  {cert.label}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Team image blocks with parallax */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {teamBlocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease }}
            >
              {/* Image with parallax */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <motion.div
                  className="absolute inset-0"
                  style={{ y: i === 0 ? imgY1 : imgY2 }}
                >
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    className="object-cover scale-110"
                  />
                </motion.div>
                {/* Bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-primary)]/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <h3 className="text-xl font-semibold text-theme-primary mb-2">
                {block.title}
              </h3>
              <p className="text-sm text-theme-muted leading-relaxed max-w-[48ch]">
                {block.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
