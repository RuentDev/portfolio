export function FooterV2() {
  return (
    <footer className="w-full py-section-gap border-t bg-surface-container border-outline/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop max-w-container-max mx-auto gap-8">
        <div className="space-y-4 text-center md:text-left">
          <div className="font-headline-md text-headline-md font-bold text-pure-white">RuentDev</div>
          <p className="font-body-md text-body-md text-on-surface">
            Full Stack Developer passionate about creating exceptional digital experiences.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            <a className="hover:text-primary transition-colors uppercase font-label-caps text-label-caps tracking-widest text-on-surface" href="#">Github</a>
            <a className="hover:text-primary transition-colors uppercase font-label-caps text-label-caps tracking-widest text-on-surface" href="#">LinkedIn</a>
            <a className="hover:text-primary transition-colors uppercase font-label-caps text-label-caps tracking-widest text-on-surface" href="#">Twitter</a>
            <a className="hover:text-primary transition-colors uppercase font-label-caps text-label-caps tracking-widest text-on-surface" href="#">Email</a>
          </div>
          <p className="font-body-md text-body-md text-on-surface">© 2024 RuentDev. Built for the future.</p>
        </div>
      </div>
    </footer>
  );
}
