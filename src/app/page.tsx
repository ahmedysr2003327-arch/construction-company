import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Statistics from "@/components/sections/Statistics";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />

      <Statistics />
      <Services />
      <WhyChooseUs />
      <Projects />
      <CTA />
    </>
  );
}
