import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { ScrollEffects } from "@/components/scroll-effects";

export default function Home() {
  return (
    <div className="bg-background">
      <ScrollEffects>
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          {/* <Testimonials /> */}
          <Contact />
        </main>
      </ScrollEffects>
    </div>
  );
}
