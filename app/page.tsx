import Hero from "@/components/Hero";
import MySkills from "@/components/MySkills";
import AchievementsAndEducation from "@/components/AchievementsAndEducation";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import TestimonialScroller from "@/components/TestimonialScroller";
import FeatureNotes from "@/components/StickyNotes";

export default function Home() {
  return (
    <>
      <Hero />
      <MySkills />
      <FeatureNotes/>
      <AchievementsAndEducation />
      <TestimonialScroller />
      <FAQ />
      <Contact />
    </>
  );
}
