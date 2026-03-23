const industries = [
  "Financial Services",
  "Insurance",
  "Retail",
  "Investment Management",
  "Banking",
  "Cybersecurity",
  "Sports & Entertainment",
  "Application Software",
  "Logistics",
  "Blockchain",
];

export default function Industries() {
  return (
    <section className="py-20 md:py-28 bg-ink-900 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-4">
            Industries
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tighter text-white">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Industry tags — left aligned, not centered */}
        <div className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-ink-200 bg-ink-800 border border-white/[0.04] rounded-full hover:border-accent-500/20 hover:text-white transition-all duration-300 cursor-default"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
