"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Aceternity-inspired animated dot grid background.
 * Dots subtly pulse and a radial gradient spotlight follows the mouse.
 */
export default function GridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const spotlight = spotlightRef.current;
    if (!container || !spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
      spotlight.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = "0";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-auto z-0">
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-ink-600) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.3,
        }}
      />

      {/* Mouse spotlight */}
      <div
        ref={spotlightRef}
        className="absolute w-[600px] h-[600px] rounded-full opacity-0 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 194, 168, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Animated beams — subtle moving lines */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-500/10 to-transparent"
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-accent-500/5 to-transparent"
        animate={{ y: ["100%", "-100%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-500/5 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Fade edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-primary)] via-transparent to-[var(--color-surface-primary)]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface-primary)] via-transparent to-[var(--color-surface-primary)]/60" />
    </div>
  );
}
