const team = [
  {
    name: "Arlo Whitfield",
    role: "Chief Technology Officer & Co-Founder",
    bio: "Former Principal Engineer at AWS with 15+ years building distributed AI systems. Arlo leads Cascadian's technical vision and ensures every solution meets production-grade standards.",
    initials: "AW",
  },
  {
    name: "Priya Kavanagh",
    role: "Chief Executive Officer & Co-Founder",
    bio: "Ex-McKinsey digital strategy lead turned AI entrepreneur. Priya drives Cascadian's growth and ensures our consulting engagements deliver measurable business outcomes.",
    initials: "PK",
  },
  {
    name: "Tomasz Reinholt",
    role: "Chief Operations Officer & Partner",
    bio: "Operations veteran with a track record of scaling AI consultancies from startup to 100+ person teams. Tomasz ensures delivery across all engagements.",
    initials: "TR",
  },
];

export default function Team() {
  return (
    <section id="about" className="py-24 md:py-32 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header — split layout */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 mb-16 md:mb-20">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-white">
              Collaborate with a Trusted AI Partner
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base text-ink-300 leading-relaxed max-w-[65ch]">
              Cascadian is a global AI consultancy headquartered in Seattle with
              offices in Portland and Vancouver. As a certified AWS Advanced
              Partner and one of the first companies awarded the AWS GenAI
              Competency, we bring AI opportunities to life.
            </p>
          </div>
        </div>

        {/* Team — horizontal row with border dividers, not boxed cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] divide-x divide-white/[0.04]">
          {team.map((member, i) => (
            <div
              key={i}
              className="group px-8 py-10 first:pl-0 last:pr-0 transition-all duration-500"
            >
              {/* Avatar — styled initials, no generic egg */}
              <div className="w-14 h-14 rounded-full bg-ink-800 border border-white/[0.06] flex items-center justify-center mb-6">
                <span className="text-sm font-semibold text-ink-300 tracking-wide">
                  {member.initials}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-xs font-medium text-accent-400 tracking-wide mb-5">
                {member.role}
              </p>
              <p className="text-sm text-ink-400 leading-relaxed max-w-[45ch]">
                {member.bio}
              </p>

              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center text-xs text-ink-500 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
