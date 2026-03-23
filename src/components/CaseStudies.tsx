const caseStudies = [
  {
    industry: "Financial Services",
    client: "Global Asset Management Firm",
    title:
      "Building an AI-Powered Portfolio Optimization Engine to Drive Performance",
  },
  {
    industry: "Technology",
    client: "Enterprise SaaS Platform",
    title:
      "Streamlining Customer Support with Multi-Agent LLM Architecture",
  },
  {
    industry: "Healthcare",
    client: "Leading Insurance Provider",
    title:
      "Automating Medical Claim Analysis to Detect Fraud with AI",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-4">
            Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-white mb-6">
            AI-Powered Success Stories
          </h2>
          <p className="text-base text-ink-300 leading-relaxed max-w-[65ch]">
            We&apos;ve collaborated with leaders across Financial Services,
            Healthcare, Retail, and Technology to guide their organizations
            into the new era of AI.
          </p>
        </div>

        {/* Asymmetric 2-column layout — featured + stacked */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
          {/* Featured large card */}
          <article className="group relative bg-ink-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className="aspect-[16/10] bg-ink-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-white/10 transition-colors duration-500">
                  <svg className="w-6 h-6 text-white/20" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide text-accent-400 bg-accent-500/[0.08] rounded-full mb-4">
                {caseStudies[0].industry}
              </span>
              <p className="text-xs text-ink-500 uppercase tracking-wider mb-3">
                {caseStudies[0].client}
              </p>
              <h3 className="text-xl md:text-2xl font-medium text-white leading-snug group-hover:text-accent-300 transition-colors duration-500">
                {caseStudies[0].title}
              </h3>
            </div>
          </article>

          {/* Stacked smaller cards */}
          <div className="flex flex-col gap-6">
            {caseStudies.slice(1).map((study, i) => (
              <article
                key={i}
                className="group bg-ink-900 rounded-2xl border border-white/5 hover:border-white/10 p-8 transition-all duration-500 cursor-pointer flex-1 flex flex-col justify-between"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide text-accent-400 bg-accent-500/[0.08] rounded-full mb-4">
                    {study.industry}
                  </span>
                  <p className="text-xs text-ink-500 uppercase tracking-wider mb-3">
                    {study.client}
                  </p>
                  <h3 className="text-lg font-medium text-white leading-snug group-hover:text-accent-300 transition-colors duration-500">
                    {study.title}
                  </h3>
                </div>
                <span className="inline-flex items-center text-xs font-semibold text-ink-500 group-hover:text-accent-400 transition-colors duration-300 mt-6">
                  Read case study
                  <svg className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex">
          <a
            href="#contact"
            className="inline-flex items-center text-sm font-semibold text-ink-300 hover:text-white transition-colors duration-300 group"
          >
            See all case studies
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
