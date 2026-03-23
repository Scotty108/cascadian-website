const specs = [
  "14 lbs of NSF Certified polishing gravel",
  "50 lbs of 10% food grade NSF certified softening resin sourced in USA",
  "14 lbs of naturally sourced NSF certified granular activated carbon",
];

export default function BestSeller() {
  return (
    <section id="best-seller" className="py-16 md:py-24 bg-cascade-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-cascade-200 overflow-hidden">
          {/* Top Badge */}
          <div className="bg-forest-500 text-white text-center py-3 px-4">
            <span className="text-sm md:text-base font-bold tracking-wide uppercase">
              Our Best Seller
            </span>
          </div>

          <div className="p-6 md:p-10">
            {/* Pricing */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <span className="text-snow-400 line-through text-lg md:text-xl">
                  Original Price $4,599
                </span>
                <span className="bg-forest-100 text-forest-700 text-sm font-bold px-3 py-1 rounded-full">
                  Save up to 40% off
                </span>
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-cascade-950">
                Complete Home System Package
              </h2>
            </div>

            {/* Specs */}
            <div className="space-y-3 mb-8 max-w-xl mx-auto">
              {specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-cascade-50 rounded-lg p-3.5"
                >
                  <svg
                    className="w-5 h-5 text-forest-500 shrink-0 mt-0.5"
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
                  <span className="text-cascade-800 font-medium text-sm md:text-base">
                    {spec}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="#quote"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-forest-500 text-white text-base font-semibold rounded-lg hover:bg-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:ring-offset-2 transition-all duration-200 shadow-lg shadow-forest-500/25"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:+13605550142"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-cascade-300 text-cascade-700 text-base font-semibold rounded-lg hover:bg-cascade-50 hover:border-cascade-400 focus:outline-none focus:ring-2 focus:ring-cascade-400 focus:ring-offset-2 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                (360) 555-0142
              </a>
            </div>

            {/* Warranty Download */}
            <div className="text-center">
              <a
                href="#warranty"
                className="inline-flex items-center gap-2 text-sm font-medium text-cascade-600 hover:text-cascade-800 transition-colors duration-200 underline underline-offset-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download Warranty Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
