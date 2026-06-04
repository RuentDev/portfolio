export function ProjectsV2() {
  return (
    <section className="cinematic-section py-section-gap px-margin-desktop max-w-container-max mx-auto" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 scroll-reveal">
        <div>
          <span className="font-label-caps text-label-caps text-primary mb-4 block">03 / Selected Work</span>
          <h2 className="font-headline-lg text-headline-lg text-pure-white">Recent Projects</h2>
        </div>
        <div className="flex gap-4">
          <button className="glass-card p-4 rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="glass-card p-4 rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Project 1 */}
        <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card scroll-reveal">
          <img 
            alt="AI Energy Shop" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
            src="https://lh3.googleusercontent.com/aida/AP1WRLtTB9l4EwyrrsJ48JqqOmTP594dI4eJwfl4VMEkHqg_t3hN-9_QjXKN-7fq34TMLU4xfTdXAJ1SGgxWFVcn7n0qhX7QdIUccKorERpQmORQnSu9oqQ5SAqDXzDuVwMHAqVGtbS3RI0HyL_lm6uZlP0qX4faK9JzR-mGcTxOiIvm5NqX_zoKCGD0zN0gqMBgPrglSfH9NrewoxB__Fs-7QPWnyzpCBsjPCLP_1HM4J93FrurfSyHmmJag9GB" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent p-12 flex flex-col justify-end">
            <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-label-caps text-label-caps text-primary bg-primary/10 px-3 py-1 rounded-full">Next.js • TypeScript</span>
              <h3 className="font-headline-md text-headline-md text-pure-white">AI Energy Shop</h3>
              <button className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors font-label-caps text-label-caps uppercase tracking-widest pt-4">
                Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Project 2 */}
        <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card scroll-reveal">
          <img 
            alt="Sunnies Studios" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
            src="https://lh3.googleusercontent.com/aida/AP1WRLukORuaFOj5c9V2wH3ThhMwJJ0LijOzRKSIdU3bWcnF6zAiPxENUkz1_pEbj6vXoIoB-PRzerQ3c9ET6d3iP8uotstV4KVD8L0cF5HpDjAgIcdU5O4Xjp2VBHzbx-uVs3w4I95Mo88hzWqkl0jjqmFEHGFerGDJGo6NtfNAmqOe2EbLfDbiq_KEPcuDPmXzTePgMIKufbF-rO8gVPhHdwlvKDRVRi2szUraLyXqIqsU160xN24IBfTkIhrx" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent p-12 flex flex-col justify-end">
            <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-label-caps text-label-caps text-primary bg-primary/10 px-3 py-1 rounded-full">Shopify • Liquid</span>
              <h3 className="font-headline-md text-headline-md text-pure-white">Sunnies Studios</h3>
              <button className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors font-label-caps text-label-caps uppercase tracking-widest pt-4">
                Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Project 3 */}
        <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card scroll-reveal">
          <img 
            alt="Glowup" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
            src="https://lh3.googleusercontent.com/aida/AP1WRLu_0xSfZPZRmqg-HffOLC13J0Khd4H71ao-wBzRkonZlBULSJW7hCj9ar99c3FqxAVEAgZcfvZLEXA4MpCoTUp7-hzugLuM4fWZ3qvgHHC30o_g4Byaddjusxp_DBEg8esLTBgmMW1aIXTJ6_oBNeVJNbQpSO7P-zTbtpcGqITPt7VFQDBKDxRKQUUkSikxEglolGooqZi4UbNDsNQBri_LzU_AQ-z6R2bWp5w3ePUZqzkEy8kWf-W1zf3X" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent p-12 flex flex-col justify-end">
            <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-label-caps text-label-caps text-primary bg-primary/10 px-3 py-1 rounded-full">Payload CMS • Zustand</span>
              <h3 className="font-headline-md text-headline-md text-pure-white">Glowup</h3>
              <button className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors font-label-caps text-label-caps uppercase tracking-widest pt-4">
                Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Project 4 */}
        <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card scroll-reveal">
          <img 
            alt="Don Ruent's Pizza" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
            src="https://lh3.googleusercontent.com/aida/AP1WRLtaKUPhv569rSo_X2gKZpReYBL3LMiv4D18qpvrEqtRBjJowRJjslaDWsAeqFDw3cfwvffecwRS0XGyd96GjHLgylcl2fLM4-ONji4LI-go1FxYBH6L0rQPcZdQwa9fJTbeGFnfyBRfBMQVazw3poXzG-2z8Dx6usCoCk75s--aox-xyBT13ZDbzqTQThR4ZYCbGoB9yxBK7cprqbJMhIRgSdATh0uga0D7zHjlXf0-QQC4Qcg_YPO_DYmq" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent p-12 flex flex-col justify-end">
            <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-label-caps text-label-caps text-primary bg-primary/10 px-3 py-1 rounded-full">Shopify • Next.js</span>
              <h3 className="font-headline-md text-headline-md text-pure-white">Don Ruent's Pizza</h3>
              <button className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors font-label-caps text-label-caps uppercase tracking-widest pt-4">
                Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 flex justify-center scroll-reveal">
        <button className="group font-label-caps text-label-caps text-primary border border-primary/30 px-12 py-5 rounded-full hover:bg-primary hover:text-on-primary transition-all">
          View More Projects
        </button>
      </div>
    </section>
  );
}
