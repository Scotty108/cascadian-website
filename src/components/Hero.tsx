const trustBadges = [
  { label: "Lifetime Warranty" },
  { label: "Free Installation" },
  { label: "100+ 5-Star Reviews" },
  { label: "BBB Accredited" },
  { label: "Pacific Northwest Family Business" },
];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-cascade-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10 md:mb-14">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-cascade-700 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cascade-200 shadow-sm"
            >
              <svg
                className="w-4 h-4 text-forest-500 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {badge.label}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cascade-950 leading-tight tracking-tight">
              Unlock Pure,{" "}
              <span className="text-cascade-600">Toxin-Free</span> Water
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-cascade-700">
              The Best Water at The Best Price, Naturally
            </p>
            <p className="mt-5 text-base md:text-lg text-snow-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
              As a family-owned business, Cascadian systems effectively remove
              harmful toxins and hardness from your entire home&apos;s water
              supply.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#quote"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-forest-500 text-white text-base font-semibold rounded-lg hover:bg-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:ring-offset-2 transition-all duration-200 shadow-lg shadow-forest-500/25"
              >
                Get a Free Quote
              </a>
              <a
                href="#how-we-built"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-cascade-300 text-cascade-700 text-base font-semibold rounded-lg hover:bg-cascade-50 hover:border-cascade-400 focus:outline-none focus:ring-2 focus:ring-cascade-400 focus:ring-offset-2 transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-cascade-200">
              <img
                src="/images/hero.png"
                alt="Crystal clear Pacific Northwest mountain water"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
