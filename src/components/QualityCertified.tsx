const features = [
  {
    title: "All NSF Certified, Pressure Tested, and Professionally Installed",
    description:
      "Every system meets rigorous NSF standards and is pressure tested before delivery to ensure reliable, leak-free performance.",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Manufactured and Assembled in Washington",
    description:
      "Built with pride in Bellingham, WA, supporting local jobs and ensuring hands-on quality control for every unit.",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17l-5.384 3.182A1.5 1.5 0 014.5 17.1V6.9a1.5 1.5 0 011.536-1.252L11.42 8.83m0 6.34v-6.34m0 0L17.5 3.5M11.42 8.83L17.5 3.5m0 0h4m-4 0v4"
        />
      </svg>
    ),
  },
  {
    title:
      "Total Home Solution — Whole Home Treatment, Drinking Water Solutions, Leak Prevention",
    description:
      "A comprehensive approach to water quality that covers every tap, every appliance, and protects against unexpected leaks.",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
        />
      </svg>
    ),
  },
  {
    title: "Affordable Price — Best Pricing with Highest Quality Equipment",
    description:
      "Premium water filtration at a fair price. No middlemen, no markups — just honest pricing from a family-owned business.",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function QualityCertified() {
  return (
    <section className="py-16 md:py-24 bg-cascade-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-forest-500 mb-3">
            Why Choose Cascadian
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-cascade-950">
            Quality Certified
          </h2>
          <p className="mt-4 text-base md:text-lg text-snow-500 max-w-2xl mx-auto">
            Built to the highest standards, rigorously tested, and backed by a
            lifetime warranty.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-cascade-100 text-center"
            >
              <div className="w-14 h-14 bg-cascade-600 rounded-xl flex items-center justify-center mx-auto mb-5">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-cascade-950 mb-3 leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm text-snow-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
