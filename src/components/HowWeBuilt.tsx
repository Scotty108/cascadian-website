const specs = [
  {
    amount: "14 lbs",
    description: "of NSF Certified polishing gravel",
  },
  {
    amount: "50 lbs",
    description:
      "of 10% food grade NSF certified softening resin sourced in USA",
  },
  {
    amount: "14 lbs",
    description: "of naturally sourced NSF certified granular activated carbon",
  },
];

export default function HowWeBuilt() {
  return (
    <section id="how-we-built" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-forest-500 mb-3">
              How We Build Our Most Popular System
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-cascade-950 leading-tight">
              Remove Hardness, Chlorine, and Countless other Contaminants Every
              Time,{" "}
              <span className="text-cascade-600">Naturally.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-snow-500 leading-relaxed">
              Every Cascadian system is hand-assembled in Bellingham, WA by our
              expert technicians. We supply over 1,000+ systems monthly to
              families across the Pacific Northwest and beyond, ensuring each
              unit meets the highest standards of quality and performance.
            </p>

            {/* Specs */}
            <div className="mt-8 space-y-4">
              {specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-cascade-50 rounded-xl p-4 border border-cascade-100"
                >
                  <div className="shrink-0 w-10 h-10 bg-forest-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className="text-cascade-800 font-medium leading-snug">
                    <span className="font-bold text-cascade-950">
                      {spec.amount}
                    </span>{" "}
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Build Process Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg aspect-video rounded-2xl overflow-hidden shadow-lg border border-cascade-200">
              <img
                src="/images/build-process.png"
                alt="Cascadian water filtration system being assembled"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
