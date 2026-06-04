export function AboutV2() {
  return (
    <section className="cinematic-section py-section-gap px-margin-desktop max-w-container-max mx-auto" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center">
        <div className="scroll-reveal">
          <span className="font-label-caps text-label-caps text-primary mb-4 block">01 / The Journey</span>
          <h2 className="font-headline-lg text-headline-lg text-pure-white mb-8">About Me</h2>
          <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
            <p>
              I'm a passionate full-stack developer with 4+ years of experience building web applications that combine beautiful design with robust functionality.
            </p>
            <p>
              My journey started as a curious student exploring HTML and CSS, and I've evolved into a developer who thrives on creating digital experiences that matter.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <div className="text-primary font-headline-md text-headline-md font-bold">4+</div>
              <div className="text-label-caps font-label-caps text-on-surface-variant uppercase mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-primary font-headline-md text-headline-md font-bold">10+</div>
              <div className="text-label-caps font-label-caps text-on-surface-variant uppercase mt-1">Projects Built</div>
            </div>
          </div>
        </div>
        <div className="relative scroll-reveal">
          <div className="glass-card aspect-square rounded-full relative border-primary/20 shadow-[0_0_50px_rgba(173,198,255,0.2)] overflow-hidden">
            <img 
              alt="RuentDev Portrait" 
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACS_GQ_KOjOobgb5E-O_G0i3mcPf85k1LKFZRJX4gkCMUFlyTzKvwxZ7V-806T5b_JqeG5Q8ky28ZJ1Etvou30Pir_qmgk-mHyBErP6Jwa_mJXSGH4IkfCfoJr0OC-ShZYa67khcYYKEGp7jzMB-dzhbxtWhizPeaI_74gk2ELiaTrFNL53zD1E8MjdZPUEmzSZAAS3_xsnCakKx63558ZLiwTHhL1XZpmLQDmP_OrpJYaXK_s-leHXtYogxbZeMdjhOyDxET_Mgyf" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
          <div className="glow-blob -top-20 -right-20"></div>
        </div>
      </div>
    </section>
  );
}
