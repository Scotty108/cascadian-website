"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [counter, setCounter] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const duration = 1800;
    const steps = 60;
    const increment = 100 / steps;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setCounter(100);
        clearInterval(timer);
        setTimeout(() => setShowContent(true), 300);
      } else {
        setCounter(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-ink-950">
      {/* Background gradient orbs — fixed, pointer-events-none for perf */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-glow-teal/[0.03] rounded-full blur-3xl" />
      </div>

      {/* Intro counter overlay */}
      <div
        className={`fixed inset-0 z-50 bg-ink-950 flex items-center justify-center transition-all duration-700 ${
          showContent ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="text-center">
          <span className="text-7xl md:text-8xl font-display font-medium text-white tabular-nums tracking-tight">
            {counter}%
          </span>
          <div className="mt-4 h-px w-32 mx-auto bg-ink-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent-500 rounded-full transition-all duration-100"
              style={{ width: `${counter}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main content — left aligned, asymmetric */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 md:py-40 transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div className="grid lg:grid-cols-[1fr_0.4fr] gap-16 items-center">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-6">
              AI Consultancy
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-medium leading-[1.05] tracking-tighter text-white mb-8">
              Your Path to
              <br />
              Agentic AI
              <br />
              <span className="text-ink-400">Starts Here</span>
            </h1>
            <p className="text-base text-ink-300 max-w-[52ch] leading-relaxed mb-12">
              Cascadian is a global AI consultancy that delivers transformation
              services to guide organizations into the new era of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-ink-950 bg-white rounded-full hover:bg-ink-100 active:scale-[0.98] transition-all duration-300 group"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                See our case studies
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white border border-white/15 rounded-full hover:bg-white/[0.04] active:scale-[0.98] transition-all duration-300"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                Explore services
              </a>
            </div>
          </div>

          {/* Right side — abstract decorative element */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-64 h-80">
              <div className="absolute inset-0 border border-white/[0.06] rounded-[2rem]" />
              <div className="absolute inset-4 border border-white/[0.04] rounded-[1.5rem]" />
              <div className="absolute inset-8 border border-white/[0.03] rounded-[1rem]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent-500/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-6 lg:left-8 transition-all duration-1000 delay-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-px h-12 bg-white/10 relative overflow-hidden">
            <div className="w-full h-4 bg-accent-500/40 animate-bounce" />
          </div>
          <span className="text-[11px] text-ink-500 tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
