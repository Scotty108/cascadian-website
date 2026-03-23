const services = [
  {
    number: "01",
    title: "Executive AI Workshop",
    description:
      "Master fundamental AI concepts, assess opportunities in your industry, evaluate ROI scenarios, and review the strategic roadmap — all tailored to your unique organizational context.",
  },
  {
    number: "02",
    title: "AI Strategy & Governance",
    description:
      "Ensure your business thrives in the AI era with a secure, ethical, and compliant AI strategy with a focus on engineering excellence.",
  },
  {
    number: "03",
    title: "Enterprise Data Foundation",
    description:
      "Convert your organization's data and infrastructure into an AI-ready ecosystem that powers intelligent decision-making at scale.",
  },
  {
    number: "04",
    title: "Agentic AI Systems",
    description:
      "Reshape your operations through advanced multi-agent systems that autonomously handle complex workflows and decision chains.",
  },
  {
    number: "05",
    title: "Rapid Proof of Concept",
    description:
      "Get a production-grade GenAI prototype built on your preferred infrastructure — cloud, on-premise, or hybrid — in weeks, not months.",
  },
  {
    number: "06",
    title: "AI Training & Education",
    description:
      "Upskill your teams with hands-on AI training programs designed for technical and non-technical roles alike.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-ink-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-white mb-6">
            The AI Transformation Program
          </h2>
          <p className="text-base text-ink-300 leading-relaxed max-w-[65ch]">
            We deliver AI transformation services to guide enterprises into the
            new era of AI — from strategy to production deployment.
          </p>
        </div>

        {/* Service grid — 2 columns with 1px dividers, not boxed cards */}
        <div className="grid md:grid-cols-2 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-ink-900 p-8 md:p-10 hover:bg-ink-800/60 transition-all duration-500 cursor-pointer relative"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <span className="text-xs font-mono text-ink-500 tracking-wider mb-6 block">
                {service.number}
              </span>
              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-accent-300 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-sm text-ink-400 leading-relaxed mb-6 max-w-[50ch]">
                {service.description}
              </p>
              <span className="inline-flex items-center text-xs font-semibold text-ink-500 group-hover:text-accent-400 transition-colors duration-300">
                Discover more
                <svg className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </div>
          ))}
        </div>

        {/* Standalone CTA row */}
        <div className="mt-10 flex items-center justify-between border-t border-white/[0.04] pt-10">
          <p className="text-sm text-ink-500">
            Ready to start your AI journey?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-ink-950 bg-white rounded-full hover:bg-ink-100 active:scale-[0.98] transition-all duration-300"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </section>
  );
}
