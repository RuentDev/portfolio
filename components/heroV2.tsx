export function HeroV2() {
  return (
    <section 
      className="cinematic-section hero-scroll min-h-screen flex flex-col justify-center items-center px-margin-desktop text-center relative overflow-hidden" 
      id="hero"
    >
      <div className="max-w-4xl space-y-8 relative z-20">
        <span className="stagger-item font-label-caps text-label-caps text-primary border border-primary/30 px-4 py-1.5 rounded-full bg-primary/5 uppercase tracking-[0.2em] inline-block">
          Full Stack Developer
        </span>
        <h1 className="stagger-item font-display-hero text-display-hero text-pure-white leading-none">
          Crafting exceptional digital experiences.
        </h1>
        <p className="stagger-item font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Full Stack Developer passionate about clean code, innovative solutions, and user-centered design.
        </p>
        <div className="stagger-item flex flex-wrap justify-center gap-6 pt-4">
          <button className="bg-primary text-on-primary font-label-caps text-label-caps px-10 py-4 rounded-full flex items-center gap-2 hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] transition-all">
            View Work
            <span className="material-symbols-outlined text-sm">arrow_downward</span>
          </button>
          <button className="border border-white/20 hover:bg-white/5 text-on-surface font-label-caps text-label-caps px-10 py-4 rounded-full transition-all">
            Download CV
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 z-20">
        <span className="font-label-caps text-label-caps">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
      
      {/* Portrait Integration */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-20 pointer-events-none hidden xl:block z-10">
        <img 
          alt="RuentDev Portrait" 
          className="w-full h-full object-cover object-top" 
          src="https://lh3.googleusercontent.com/aida/AP1WRLtzd3FZxAZ5RgDKHP8KHCde5kdZSUX33j_w54VlPskUqFsuqBHmJZ08z6tkvxaBtIGQG8OaWTGb2o78I3uz2ubZBd4u6xB05GL2far1c6uIBiXoD26ySDL9ZFrJetYpUB8aL5RoDI00vgzEHollEMAAy59KKHkg06GR4XfLEAJl4EVHA1WODxuNUXOI4SFflj6c0Vvf7ZHUmbg3jQyqGPRByWjImfPmXZ3MMQx2_vs7aFHcdlYvxIWGy1Y6" 
        />
      </div>
    </section>
  );
}
