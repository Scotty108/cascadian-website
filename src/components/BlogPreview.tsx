const posts = [
  {
    title: "Why Every Pacific Northwest Home Needs a Water Softener",
    excerpt:
      "Hard water is more common than you think in the PNW. Learn how a water softener can protect your plumbing, improve your skin, and save money on energy bills.",
    date: "March 15, 2025",
  },
  {
    title: "The Complete Guide to Reverse Osmosis: What You Need to Know",
    excerpt:
      "Reverse osmosis is one of the most effective ways to purify drinking water. Here's how it works and why our CW800 AlkaPro stands out from the competition.",
    date: "February 28, 2025",
  },
  {
    title: "5 Signs Your Home's Water Quality Needs Attention",
    excerpt:
      "Spotty dishes, dry skin, and strange tastes — these could be signs that your water needs treatment. Discover what to look for and how to fix it.",
    date: "February 10, 2025",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-cascade-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-forest-500 mb-3">
            Our Blog
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-cascade-950">
            News and Tips from Cascadian
          </h2>
          <p className="mt-4 text-base md:text-lg text-snow-500 max-w-2xl mx-auto">
            Stay informed with the latest insights on water quality, filtration
            technology, and home wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-cascade-100 flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="aspect-[16/9] bg-cascade-100 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-10 h-10 mx-auto text-cascade-300 mb-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                    />
                  </svg>
                  <span className="text-cascade-400 font-medium text-xs">
                    Blog Image
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-medium text-cascade-500 mb-2">
                  {post.date}
                </span>
                <h3 className="text-lg font-bold text-cascade-950 mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-snow-500 leading-relaxed flex-1 mb-4">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cascade-600 hover:text-cascade-800 transition-colors duration-200"
                >
                  Read More
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
