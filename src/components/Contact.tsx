"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 bg-ink-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left - Info */}
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-white mb-8">
              Let&apos;s Build Something{" "}
              <span className="text-accent-400">Together</span>
            </h2>
            <p className="text-lg text-ink-300 leading-relaxed mb-12">
              Whether you&apos;re exploring AI for the first time or scaling
              existing capabilities, we&apos;re here to guide every step of your
              transformation journey.
            </p>

            {/* Office locations */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                  Seattle, WA
                </h3>
                <p className="text-sm text-ink-400">
                  400 Broad St, Suite 200
                  <br />
                  Seattle, WA 98109
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                  Portland, OR
                </h3>
                <p className="text-sm text-ink-400">
                  1120 NW Couch St, Suite 320
                  <br />
                  Portland, OR 97209
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                  Email
                </h3>
                <a
                  href="mailto:hello@cascadian.ai"
                  className="text-sm text-accent-400 hover:text-accent-300 transition-colors"
                >
                  hello@cascadian.ai
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-ink-800/50 rounded-2xl border border-white/5 p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent-500/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Message sent
                </h3>
                <p className="text-sm text-ink-400">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-ink-300 uppercase tracking-wider mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-ink-900 border border-white/10 rounded-lg text-white text-sm placeholder:text-ink-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-ink-300 uppercase tracking-wider mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-ink-900 border border-white/10 rounded-lg text-white text-sm placeholder:text-ink-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-300 uppercase tracking-wider mb-2">
                    Work email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-ink-900 border border-white/10 rounded-lg text-white text-sm placeholder:text-ink-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-300 uppercase tracking-wider mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-ink-900 border border-white/10 rounded-lg text-white text-sm placeholder:text-ink-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-colors"
                    placeholder="Meridian Health"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-300 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-ink-900 border border-white/10 rounded-lg text-white text-sm placeholder:text-ink-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-colors resize-none"
                    placeholder="Tell us about your AI goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 text-sm font-semibold text-ink-950 bg-white rounded-full hover:bg-ink-100 active:scale-[0.98] transition-all duration-300"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
