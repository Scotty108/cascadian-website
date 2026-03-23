"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* "Without" diagram — scattered tools with messy connecting lines */
const scatteredTools = [
  { label: "CRM", x: 8, y: 12 },
  { label: "Chatbot", x: 55, y: 8 },
  { label: "Email AI", x: 30, y: 35 },
  { label: "Data Tool", x: 70, y: 32 },
  { label: "Analytics", x: 15, y: 58 },
  { label: "Scheduler", x: 60, y: 60 },
  { label: "Doc AI", x: 38, y: 78 },
  { label: "Sales Bot", x: 78, y: 78 },
];

const connections = [
  [0, 2], [1, 3], [2, 4], [3, 5], [1, 2], [4, 6], [5, 7], [0, 4], [3, 7],
];

/* "With" diagram — orbital layout around Cascadian hub */
const orbitalTools = [
  { label: "CRM", angle: 0 },
  { label: "Chatbot", angle: 51 },
  { label: "Analytics", angle: 103 },
  { label: "Email AI", angle: 154 },
  { label: "Doc AI", angle: 206 },
  { label: "Sales Bot", angle: 257 },
  { label: "Scheduler", angle: 309 },
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

        {/* Before / After Diagrams */}
        <ScrollReveal delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* WITHOUT — scattered messy diagram */}
            <div className="card-theme rounded-2xl p-8 md:p-10 border border-theme overflow-hidden">
              <h3 className="text-theme-muted font-semibold mb-2">
                Without an AI OS
              </h3>
              <p className="text-sm text-theme-faint mb-8 max-w-[360px]">
                Disconnected tools, scattered data, and messy workflows.
                Too many tools, too little visibility.
              </p>

              {/* Scattered diagram */}
              <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                {/* Messy connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
                  {connections.map(([from, to], i) => (
                    <motion.line
                      key={i}
                      x1={scatteredTools[from].x + 6}
                      y1={scatteredTools[from].y + 3}
                      x2={scatteredTools[to].x + 6}
                      y2={scatteredTools[to].y + 3}
                      stroke="var(--color-ink-600)"
                      strokeWidth={0.3}
                      strokeDasharray="2 2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.05, ease }}
                    />
                  ))}
                </svg>

                {/* Tool nodes */}
                {scatteredTools.map((tool, i) => (
                  <motion.div
                    key={tool.label}
                    className="absolute"
                    style={{ left: `${tool.x}%`, top: `${tool.y}%` }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease }}
                  >
                    <div className="px-3 py-1.5 rounded-lg border border-theme text-xs font-medium text-theme-muted whitespace-nowrap"
                      style={{ backgroundColor: "var(--color-surface-secondary)" }}
                    >
                      {tool.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* WITH — orbital unified diagram */}
            <div className="card-theme rounded-2xl p-8 md:p-10 border border-accent-500/20 overflow-hidden">
              <h3 className="text-accent-400 font-semibold mb-2">
                With Cascadian AI OS
              </h3>
              <p className="text-sm text-theme-faint mb-8 max-w-[360px]">
                All your AI workflows, united in one hub &mdash; connected,
                monitored, and measurable from a single system.
              </p>

              {/* Orbital diagram */}
              <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                {/* Orbital rings */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <motion.circle
                    cx={200} cy={200} r={160}
                    stroke="var(--color-accent-500)"
                    strokeWidth={0.5}
                    strokeOpacity={0.15}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease }}
                    style={{ transformOrigin: "center" }}
                  />
                  <motion.circle
                    cx={200} cy={200} r={110}
                    stroke="var(--color-accent-500)"
                    strokeWidth={0.5}
                    strokeOpacity={0.1}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1, ease }}
                    style={{ transformOrigin: "center" }}
                  />
                  {/* Connection lines from center to each node */}
                  {orbitalTools.map((tool, i) => {
                    const rad = (tool.angle * Math.PI) / 180;
                    const x = 200 + 140 * Math.cos(rad);
                    const y = 200 + 140 * Math.sin(rad);
                    return (
                      <motion.line
                        key={i}
                        x1={200} y1={200} x2={x} y2={y}
                        stroke="var(--color-accent-500)"
                        strokeWidth={0.5}
                        strokeOpacity={0.2}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 + i * 0.08, ease }}
                      />
                    );
                  })}
                </svg>

                {/* Center hub — Cascadian logo */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease, type: "spring", stiffness: 200, damping: 20 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent-500 flex items-center justify-center shadow-lg shadow-accent-500/20">
                    <img src="/images/logo.svg" alt="Cascadian" className="w-10 h-10 brightness-0 invert" />
                  </div>
                </motion.div>

                {/* Orbital tool nodes */}
                {orbitalTools.map((tool, i) => {
                  const rad = (tool.angle * Math.PI) / 180;
                  const x = 50 + 35 * Math.cos(rad);
                  const y = 50 + 35 * Math.sin(rad);
                  return (
                    <motion.div
                      key={tool.label}
                      className="absolute"
                      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease }}
                    >
                      <div className="px-3 py-1.5 rounded-lg border border-accent-500/20 text-xs font-medium text-theme-primary whitespace-nowrap shadow-sm"
                        style={{ backgroundColor: "var(--color-surface-secondary)" }}
                      >
                        {tool.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
