"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

/**
 * Aceternity-inspired spotlight border card.
 * Border illuminates dynamically under the cursor.
 */
export default function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--spotlight-x", `${x}px`);
    card.style.setProperty("--spotlight-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        background: "var(--color-surface-secondary)",
      }}
    >
      {/* Spotlight border glow */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(0, 194, 168, 0.1), transparent 60%)`,
        }}
      />
      {/* Inner content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
