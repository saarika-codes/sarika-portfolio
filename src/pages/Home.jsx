import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import EngineeringPrinciples from "../components/EngineeringPrinciples";
import DevelopmentWorkflow from "../components/DevelopmentWorkflow";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import CurrentlyLearning from "../components/CurrentlyLearning";
import EngineeringMindset from "../components/EngineeringMindset";
import Testimonials from "../components/Testimonials";
import Writing from "../components/Writing";
import Contact from "../components/Contact";

// Section order:
// Hero -> About Me -> Skills -> Selected Work -> Engineering Principles
// -> Development Workflow -> Tech Stack -> Professional Experience
// -> Currently Learning -> Engineering Mindset -> Contact
// (GitHub Activity and Case Studies removed — case-study depth now
// lives entirely on each project's own detail page, no duplication.)
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <EngineeringPrinciples />
      <DevelopmentWorkflow />
      <TechStack />
      <Experience />
      <CurrentlyLearning />
      <EngineeringMindset />
      {/* Testimonials/Writing stay hidden until real content is added */}
      <Testimonials />
      <Writing />
      <Contact />
    </>
  );
}
