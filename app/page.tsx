import { HeroV2 } from "@/components/heroV2";
import { AboutV2 } from "@/components/aboutV2";
import { SkillsV2 } from "@/components/skillsV2";
import { ProjectsV2 } from "@/components/projectsV2";
import { ContactV2 } from "@/components/contactV2";
import { ScrollEffectsV2 } from "@/components/scrollEffectsV2";

export default function Home() {
  return (
    <div className="bg-background">
      <ScrollEffectsV2>
        <main className="cinematic-container">
          <HeroV2 />
          <AboutV2 />
          <SkillsV2 />
          <ProjectsV2 />
          <ContactV2 />
        </main>
      </ScrollEffectsV2>
    </div>
  );
}
