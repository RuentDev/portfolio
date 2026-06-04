export function ContactV2() {
  return (
    <section className="cinematic-section py-section-gap px-margin-desktop bg-surface-container-lowest relative overflow-hidden" id="contact">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        <div className="scroll-reveal">
          <span className="font-label-caps text-label-caps text-primary mb-4 block">04 / Collaboration</span>
          <h2 className="font-headline-lg text-headline-lg text-pure-white mb-8">Ready to Work Together?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md">
            Let's discuss how my experience can help bring your next project to life. I'm currently open to new opportunities.
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">Email</div>
                <div className="font-body-lg text-body-lg text-pure-white">ruent.dev@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">Phone</div>
                <div className="font-body-lg text-body-lg text-pure-white">+63 952 480 4218</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-12 rounded-2xl scroll-reveal">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Name</label>
                <input 
                  className="w-full bg-white/5 border-b border-outline-variant focus:border-primary py-3 text-on-surface outline-none transition-all placeholder:text-on-surface-variant/30 px-4" 
                  placeholder="John Doe" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Email</label>
                <input 
                  className="w-full bg-white/5 border-b border-outline-variant focus:border-primary py-3 text-on-surface outline-none transition-all placeholder:text-on-surface-variant/30 px-4" 
                  placeholder="john@example.com" 
                  type="email" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Message</label>
              <textarea 
                className="w-full bg-white/5 border-b border-outline-variant focus:border-primary py-3 text-on-surface outline-none transition-all placeholder:text-on-surface-variant/30 px-4" 
                placeholder="Tell me about your project..." 
                rows={4}
              ></textarea>
            </div>
            <button 
              className="w-full bg-primary text-on-primary font-label-caps text-label-caps py-5 rounded-full hover:scale-[0.98] transition-transform" 
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="glow-blob -bottom-40 -left-40"></div>
    </section>
  );
}
