import Avatar from "@/components/avatar";
import skills from "@/data/skills";
import RecentWorks from "@/components/recent-works";
import reactWorks from "@/data/reactWorks.json";
import shopifyWorks from "@/data/shopifyWorks.json";
import Image from "next/image";
import Link from "next/link";
import { RecentWork, SkillCategory } from "@/libs/types";
import SkillSets from "@/components/skill-sets";

export default function HomePage() {
  return (
    <main className="home-page w-full h-auto">
      <section className="landing-section w-full h-screen">
        <div className="content-container w-full flex flex-col items-center justify-center my-5">
          <p className="landing-content text-[2.5rem] font-bold flex flex-col items-center justify-center">
            Hi!<span className="name">Im Ruentgen Comia,</span> <span>Nice to meet you!</span>
          </p>
          <p className="w-full text-center text-[1.5rem] my-10">
            I am a FullStack Web Developer, I code simple things, and I really love what I do!
          </p>
        </div>
        <div className="avatar-container my-2 flex justify-center">
          <Avatar />
        </div>
        <div className="landing-image-container mx-auto my-20 w-[600px] overflow-hidden">
          <Image 
            alt="" 
            width={600}
            height={600}
            src="/images/svg/hero.svg" 
            className="landing-image w-full h-full object-contain object-center" 
          />
        </div>
      </section>
      <section className="main-content text-center h-[400px] bg-[#7510F7] p-12 pb-40">
        <p className="greetings text-[2.5rem] font-bold text-white">
          Hi there! you can call me Ruent.
        </p>
        <p className="sub-content text-[1.2rem] mt-4 text-white">
          I value simple content structure, clean design pattern and thoughtful interaction, I like to code things from scratch, and enjoy bringing my ideas to life inside the browser.
        </p>
      </section>
      <section className="skills-set-box w-full h-auto relative">
        <SkillSets skills={skills as SkillCategory[]} />
      </section>
      <div className="spacer w-full h-[300px]"></div>
      <section className="h-auto w-full">
        <RecentWorks title="ReactJS Projects" data={reactWorks as RecentWork[]} />
        <RecentWorks title="Shopify Projects" data={shopifyWorks as RecentWork[]} />
      </section>
      <section className="h-auto w-full bg-[#7510F7] px-16 mt-40 border-b border-lightWhite">
        <div className="h-[260px] w-full bg-[#141C3A] relative -top-[100px] rounded-2xl text-center p-8">
          <p className="flex flex-col text-white my-4">
            <span className="text-[2rem] font-bold">Start a project</span>
            <span className="text-[1.2rem]">Interested in working together?</span>
            <span className="text-[1.2rem]">We should queue up a chat. I&apos;ll buy the coffee!</span>
          </p>
          <Link href="/contact" className="text-[1rem] text-white rounded-full border border-white px-4 py-2 hover:bg-white hover:text-[#7510F7] transition-all ease-in-out duration-300">
           Let&apos;s do this!
          </Link>
        </div>
      </section>
    </main>
  );
}
