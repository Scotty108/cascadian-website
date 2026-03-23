const products = [
  {
    id: "whole-home",
    name: "Water Softener with Chlorine Filtration",
    description:
      "Our high-performance water softening system removes hardness minerals and chlorine, delivering clean, soft water throughout your entire home.",
    benefits: [
      "Softer skin and hair",
      "Energy savings",
      "Cleaner clothes and dishes",
      "Easy maintenance",
    ],
    image: "/images/water-softener.png",
    imageAlt: "Whole home water softener system",
  },
  {
    id: "drinking-water",
    name: "CW800 AlkaPro",
    description:
      "A smart, tankless Reverse Osmosis system that delivers purified alkaline water on demand — compact, efficient, and built for modern homes.",
    benefits: [
      "100 GPD filtration",
      "Eliminates harmful substances",
      "Improves water taste",
      "Complete installation included",
    ],
    image: "/images/reverse-osmosis.png",
    imageAlt: "CW800 AlkaPro reverse osmosis system",
  },
  {
    id: "add-ons",
    name: "Pre-Sediment Filter",
    description:
      "Captures dirt, sand, rust, and sediment before they reach your main filtration system, extending its lifespan and protecting your plumbing.",
    benefits: [
      "Supports health",
      "Better tasting water",
      "Improves performance",
      "Enhances beverage flavor",
    ],
    image: "/images/sediment-filter.png",
    imageAlt: "Pre-sediment filter cartridge system",
  },
];

export default function ProductCards() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-forest-500 mb-3">
            Our Products
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-cascade-950">
            Premium Filtration Solutions
          </h2>
          <p className="mt-4 text-base md:text-lg text-snow-500 max-w-2xl mx-auto">
            From whole-home systems to targeted drinking water purification, we
            have the perfect solution for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className="bg-cascade-50 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-cascade-100 flex flex-col"
            >
              {/* Product Image */}
              <div className="aspect-[4/3] bg-cascade-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-cascade-950 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-snow-500 leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6 flex-1">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2.5">
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
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-sm font-medium text-cascade-800">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="space-y-3">
                  <a
                    href="#quote"
                    className="block text-center w-full px-5 py-3 bg-cascade-600 text-white font-semibold rounded-lg hover:bg-cascade-700 focus:outline-none focus:ring-2 focus:ring-cascade-400 focus:ring-offset-2 transition-all duration-200"
                  >
                    Learn More
                  </a>
                  <a
                    href="#warranty"
                    className="flex items-center justify-center gap-1.5 text-xs font-medium text-cascade-500 hover:text-cascade-700 transition-colors duration-200"
                  >
                    <svg
                      className="w-3.5 h-3.5"
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
                    Download Warranty
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
