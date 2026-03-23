const articles = [
  {
    category: "Agentic AI",
    title:
      "Using Multi-Agent Systems and Knowledge Graphs for Better Customer Experience",
    date: "March 2026",
  },
  {
    category: "Financial Services",
    title:
      "Top 5 AI Agent Platforms for Financial Services Enterprises",
    date: "February 2026",
  },
  {
    category: "Compliance",
    title:
      "AI for Compliance in Banking: From Pilot to Production",
    date: "February 2026",
  },
  {
    category: "Strategy",
    title:
      "What Is the Cost of AI Transformation? 4 Examples to Budget Accordingly",
    date: "January 2026",
  },
  {
    category: "Evaluation",
    title:
      "AI Agent Evaluation Framework: Why It Matters for Enterprise Adoption",
    date: "January 2026",
  },
];

export default function Articles() {
  return (
    <section id="articles" className="py-24 md:py-32 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-4">
              Articles
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-white">
              Latest Insights
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-ink-300 hover:text-white transition-colors duration-300 group shrink-0"
          >
            See all articles
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Zig-zag / asymmetric article grid — 2 columns, not 3 */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column — featured article with image, then compact */}
          <div className="flex flex-col gap-6">
            <article className="group bg-ink-900 rounded-2xl border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500 cursor-pointer"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="aspect-[16/9] bg-ink-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/[0.06] to-glow-teal/[0.04] group-hover:opacity-60 transition-opacity duration-500" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide text-accent-400 bg-accent-500/[0.08] rounded-full">
                    {articles[0].category}
                  </span>
                  <span className="text-xs text-ink-500">{articles[0].date}</span>
                </div>
                <h3 className="text-xl font-medium text-white leading-snug group-hover:text-accent-300 transition-colors duration-500">
                  {articles[0].title}
                </h3>
              </div>
            </article>

            {/* Compact article */}
            <article className="group bg-ink-900 rounded-2xl border border-white/5 hover:border-white/10 p-8 transition-all duration-500 cursor-pointer"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide text-accent-400 bg-accent-500/[0.08] rounded-full">
                  {articles[3].category}
                </span>
                <span className="text-xs text-ink-500">{articles[3].date}</span>
              </div>
              <h3 className="text-lg font-medium text-white leading-snug group-hover:text-accent-300 transition-colors duration-500">
                {articles[3].title}
              </h3>
              <span className="inline-flex items-center text-xs font-semibold text-ink-500 group-hover:text-accent-400 transition-colors duration-300 mt-4">
                Read more
                <svg className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </article>
          </div>

          {/* Right column — compact articles stacked */}
          <div className="flex flex-col gap-6">
            {articles.slice(1, 3).map((article, i) => (
              <article
                key={i}
                className="group bg-ink-900 rounded-2xl border border-white/5 hover:border-white/10 p-8 transition-all duration-500 cursor-pointer flex-1 flex flex-col justify-between"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide text-accent-400 bg-accent-500/[0.08] rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-ink-500">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-medium text-white leading-snug group-hover:text-accent-300 transition-colors duration-500">
                    {article.title}
                  </h3>
                </div>
                <span className="inline-flex items-center text-xs font-semibold text-ink-500 group-hover:text-accent-400 transition-colors duration-300 mt-6">
                  Read more
                  <svg className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </article>
            ))}

            {/* Last compact article */}
            <article className="group bg-ink-900 rounded-2xl border border-white/5 hover:border-white/10 p-8 transition-all duration-500 cursor-pointer"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide text-accent-400 bg-accent-500/[0.08] rounded-full">
                  {articles[4].category}
                </span>
                <span className="text-xs text-ink-500">{articles[4].date}</span>
              </div>
              <h3 className="text-lg font-medium text-white leading-snug group-hover:text-accent-300 transition-colors duration-500">
                {articles[4].title}
              </h3>
              <span className="inline-flex items-center text-xs font-semibold text-ink-500 group-hover:text-accent-400 transition-colors duration-300 mt-4">
                Read more
                <svg className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
