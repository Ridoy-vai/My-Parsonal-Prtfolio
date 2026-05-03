import AboutSection from "@/components/AboutSection/AboutMe";
import EducationSection from "@/components/EducationSection/EducationSection";
import FutureProjectSection from "@/components/FutureProjectSection/FutureProject";
import Hero from "@/components/Hero/Hero";
import ProjectGallery from "@/components/Projects/ProjectGallery";
import SkillsSection from "@/components/SkilledSection/SkillsSection";
import Stacks from "@/components/StackSection/Stacks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <Hero/>
      <AboutSection/>
      <SkillsSection/>
      <Stacks/>
      <FutureProjectSection/>
      <ProjectGallery/>
      <EducationSection/>
    </div>
  );
}
