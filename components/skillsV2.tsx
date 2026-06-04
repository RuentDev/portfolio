export function SkillsV2() {
  return (
    <section
      className="cinematic-section py-section-gap px-margin-desktop bg-surface-container-lowest relative overflow-hidden"
      id="skills"
    >
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-24 scroll-reveal">
          <span className="font-label-caps text-label-caps text-primary mb-4 block">
            02 / Expertise
          </span>
          <h2 className="font-headline-lg text-headline-lg text-pure-white">
            Skills &amp; Toolkit
          </h2>
        </div>
        <div className="space-y-16">
          {/* Featured Section */}
          <div className="reveal skill-category">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-8 border-l-2 border-primary pl-4">
              Featured
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <div className="reveal skill-badge group glass-card bg-white/5 backdrop-blur-md p-6 rounded-xl flex items-center gap-4 border border-white/10 hover:border-primary/50">
                <span className="font-label-caps text-label-caps text-on-surface">
                  TypeScript
                </span>
              </div>
              <div className="reveal skill-badge group glass-card bg-white/5 backdrop-blur-md p-6 rounded-xl flex items-center gap-4 border border-white/10 hover:border-primary/50">
                <span className="font-label-caps text-label-caps text-on-surface">
                  Next.js
                </span>
              </div>
              <div className="reveal skill-badge group glass-card bg-white/5 backdrop-blur-md p-6 rounded-xl flex items-center gap-4 border border-white/10 hover:border-primary/50">
                <span className="font-label-caps text-label-caps text-on-surface">
                  Remix
                </span>
              </div>
              <div className="reveal skill-badge group glass-card bg-white/5 backdrop-blur-md p-6 rounded-xl flex items-center gap-4 border border-white/10 hover:border-primary/50">
                <span className="font-label-caps text-label-caps text-on-surface">
                  Shopify
                </span>
              </div>
              <div className="reveal skill-badge group glass-card bg-white/5 backdrop-blur-md p-6 rounded-xl flex items-center gap-4 border border-white/10 hover:border-primary/50">
                <span className="font-label-caps text-label-caps text-on-surface">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Languages */}
            <div className="reveal skill-category">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-8 border-l-2 border-primary pl-4">
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="reveal skill-badge group glass-card bg-white/5 p-6 rounded-xl flex items-center gap-4 border border-white/5 hover:border-primary/30">
                  <span className="font-label-caps text-label-caps text-on-surface">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>

            {/* Frontend */}
            <div className="reveal skill-category">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-8 border-l-2 border-primary pl-4">
                Frontend
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="reveal skill-badge group glass-card bg-white/5 p-6 rounded-xl flex items-center gap-4 border border-white/5 hover:border-primary/30">
                  <span className="font-label-caps text-label-caps text-on-surface">
                    React
                  </span>
                </div>
                <div className="reveal skill-badge group glass-card bg-white/5 p-6 rounded-xl flex items-center gap-4 border border-white/5 hover:border-primary/30">
                  <span className="font-label-caps text-label-caps text-on-surface">
                    SASS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Backend & Tools */}
          <div className="reveal skill-category">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-8 border-l-2 border-primary pl-4">
              Backend &amp; Infrastructure
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <div className="reveal skill-badge group glass-card bg-white/5 p-6 rounded-xl flex items-center gap-4 border border-white/5 hover:border-primary/30">
                <span className="font-label-caps text-label-caps text-on-surface">
                  PostgreSQL
                </span>
              </div>
              <div className="reveal skill-badge group glass-card bg-white/5 p-6 rounded-xl flex items-center gap-4 border border-white/5 hover:border-primary/30">
                <span className="font-label-caps text-label-caps text-on-surface">
                  Node.js
                </span>
              </div>
              <div className="reveal skill-badge group glass-card bg-white/5 p-6 rounded-xl flex items-center gap-4 border border-white/5 hover:border-primary/30">
                <span className="font-label-caps text-label-caps text-on-surface">
                  GraphQL
                </span>
              </div>
              <div className="reveal skill-badge group glass-card bg-white/5 p-6 rounded-xl flex items-center gap-4 border border-white/5 hover:border-primary/30">
                <span className="font-label-caps text-label-caps text-on-surface">
                  Docker
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
