"use client";

import { motion } from "framer-motion";

/**
 * Animated network of floating nodes with connecting lines.
 * Represents AI systems, interconnected workflows.
 */
const nodes = [
  { x: 50, y: 20, label: "Strategy", size: "lg" },
  { x: 20, y: 40, label: "Agents", size: "md" },
  { x: 80, y: 35, label: "Data", size: "md" },
  { x: 35, y: 65, label: "Workflows", size: "md" },
  { x: 65, y: 70, label: "Training", size: "sm" },
  { x: 50, y: 48, label: "", size: "hub" },
  { x: 15, y: 72, label: "Analytics", size: "sm" },
  { x: 85, y: 60, label: "Adoption", size: "sm" },
];

const edges = [
  [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [6, 3], [7, 2], [1, 3], [2, 4],
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function FloatingNodes() {
  return (
    <div className="relative w-full aspect-square max-w-[500px]">
      {/* SVG connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
        {edges.map(([from, to], i) => (
          <motion.line
            key={i}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="var(--color-accent-500)"
            strokeWidth={0.3}
            strokeOpacity={0.2}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 + i * 0.08, ease }}
          />
        ))}
        {/* Animated pulse traveling along edges */}
        {edges.slice(0, 5).map(([from, to], i) => (
          <motion.circle
            key={`pulse-${i}`}
            r={0.8}
            fill="var(--color-accent-500)"
            opacity={0.6}
            initial={{ cx: nodes[from].x, cy: nodes[from].y }}
            animate={{
              cx: [nodes[from].x, nodes[to].x, nodes[from].x],
              cy: [nodes[from].y, nodes[to].y, nodes[from].y],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </svg>

      {/* Node elements */}
      {nodes.map((node, i) => {
        if (node.size === "hub") {
          return (
            <motion.div
              key={i}
              className="absolute z-10"
              style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent-500 flex items-center justify-center shadow-lg shadow-accent-500/20">
                <img src="/images/logo.svg" alt="" className="w-9 h-9 brightness-0 invert" />
              </div>
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-accent-500/30"
                animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
              />
            </motion.div>
          );
        }

        const sizeClass = node.size === "lg"
          ? "px-4 py-2 text-xs"
          : node.size === "md"
          ? "px-3 py-1.5 text-[11px]"
          : "px-2.5 py-1 text-[10px]";

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -3, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.6 + i * 0.1, ease },
              scale: { duration: 0.5, delay: 0.6 + i * 0.1, ease },
              y: { duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
            }}
          >
            <div
              className={`${sizeClass} rounded-lg border border-accent-500/15 font-medium text-theme-primary whitespace-nowrap backdrop-blur-sm`}
              style={{ backgroundColor: "var(--color-surface-secondary)" }}
            >
              {node.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
