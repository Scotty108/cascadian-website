"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scroll-linked transforms: first half = "Without", second half = "With"
  const withoutOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const withOpacity = useTransform(scrollYProgress, [0.4, 0.55, 1], [0, 1, 1]);
  const withoutScale = useTransform(scrollYProgress, [0.35, 0.5], [1, 0.95]);
  const withScale = useTransform(scrollYProgress, [0.4, 0.6], [0.95, 1]);

  return (
    <section id="ai-os" className="section-primary">
      {/* Sticky scroll container — tall enough to scroll through */}
      <div ref={containerRef} className="relative" style={{ height: "250vh" }}>
        {/* Sticky inner content */}
        <div className="sticky top-0 min-h-[100dvh] flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
              {/* Left — text (stays visible) */}
              <div>
                <ScrollReveal>
                  <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-4">
                    AI Operating System
                  </p>
                  <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-theme-primary mb-8">
                    Launch your AI operating system
                  </h2>
                  <p className="text-base text-theme-secondary leading-[1.7] mb-6 max-w-[520px]">
                    Companies may have a chatbot here, an automation there, a tool
                    marketing loves that sales has never heard of. Twelve logins.
                    No shared data.
                  </p>
                  <p className="text-base text-theme-secondary leading-[1.7] mb-8 max-w-[520px]">
                    We design and deploy a unified AI Operating System &mdash; a
                    single layer that connects every AI agent, automation, and
                    workflow into one managed ecosystem.
                  </p>
                </ScrollReveal>

                {/* Scroll progress indicator */}
                <div className="flex items-center gap-4">
                  <motion.div
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ opacity: withoutOpacity, color: "var(--color-text-muted)" }}
                  >
                    Before
                  </motion.div>
                  <div className="w-24 h-1 rounded-full bg-ink-700 overflow-hidden">
                    <motion.div
                      className="h-full bg-accent-500 rounded-full"
                      style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                    />
                  </div>
                  <motion.div
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ opacity: withOpacity, color: "var(--color-accent-400)" }}
                  >
                    After
                  </motion.div>
                </div>
              </div>

              {/* Right — diagrams that transition on scroll */}
              <div className="relative aspect-square max-w-[500px] mx-auto w-full">
                {/* "WITHOUT" diagram */}
                <motion.div
                  className="absolute inset-0 card-theme rounded-2xl p-6 md:p-8 border border-theme overflow-hidden"
                  style={{ opacity: withoutOpacity, scale: withoutScale }}
                >
                  <h3 className="text-theme-muted font-semibold mb-1 text-sm">Without an AI OS</h3>
                  <p className="text-xs text-theme-faint mb-6">Disconnected tools, scattered data</p>

                  <div className="relative w-full aspect-square">
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
                </motion.div>

                {/* "WITH" diagram */}
                <motion.div
                  className="absolute inset-0 card-theme rounded-2xl p-6 md:p-8 border border-accent-500/20 overflow-hidden"
                  style={{ opacity: withOpacity, scale: withScale }}
                >
                  <h3 className="text-accent-400 font-semibold mb-1 text-sm">With Cascadian AI OS</h3>
                  <p className="text-xs text-theme-faint mb-6">One unified, connected system</p>

                  <div className="relative w-full aspect-square">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                      <circle cx={200} cy={200} r={160} stroke="var(--color-accent-500)" strokeWidth={0.5} strokeOpacity={0.15} />
                      <circle cx={200} cy={200} r={110} stroke="var(--color-accent-500)" strokeWidth={0.5} strokeOpacity={0.1} />
                      {orbitalTools.map((tool, i) => {
                        const rad = (tool.angle * Math.PI) / 180;
                        const x = 200 + 140 * Math.cos(rad);
                        const y = 200 + 140 * Math.sin(rad);
                        return (
                          <line key={i} x1={200} y1={200} x2={x} y2={y} stroke="var(--color-accent-500)" strokeWidth={0.5} strokeOpacity={0.2} />
                        );
                      })}
                    </svg>

                    {/* Center hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-14 h-14 rounded-2xl bg-accent-500 flex items-center justify-center shadow-lg shadow-accent-500/20">
                        <img src="/images/logo-icon.png" alt="Cascadian" className="w-9 h-9 brightness-0 invert" />
                      </div>
                      <motion.div
                        className="absolute inset-0 rounded-2xl border border-accent-500/30"
                        animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                      />
                    </div>

                    {/* Orbital nodes */}
                    {orbitalTools.map((tool, i) => {
                      const rad = (tool.angle * Math.PI) / 180;
                      const x = 50 + 35 * Math.cos(rad);
                      const y = 50 + 35 * Math.sin(rad);
                      return (
                        <div
                          key={tool.label}
                          className="absolute"
                          style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                        >
                          <div className="px-3 py-1.5 rounded-lg border border-accent-500/20 text-xs font-medium text-theme-primary whitespace-nowrap shadow-sm"
                            style={{ backgroundColor: "var(--color-surface-secondary)" }}
                          >
                            {tool.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
