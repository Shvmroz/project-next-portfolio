import Hero from "@/components/Hero";
import MySkills from "@/components/MySkills";
import TimeLine from "@/components/TimeLine";
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
      <TimeLine />
      <TestimonialScroller />
      <FAQ />
      <Contact />
    </>
  );
}
