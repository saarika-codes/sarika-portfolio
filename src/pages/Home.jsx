import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import EngineeringPrinciples from "../components/EngineeringPrinciples";
import DevelopmentWorkflow from "../components/DevelopmentWorkflow";
import CurrentlyLearning from "../components/CurrentlyLearning";
import EngineeringMindset from "../components/EngineeringMindset";
import Testimonials from "../components/Testimonials";
import Writing from "../components/Writing";
import Contact from "../components/Contact";

// Section order:
// Hero -> About -> Skills -> My Projects -> Experience -> How I Build
// -> Development Workflow -> Currently Learning -> My Mindset -> Contact
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <EngineeringPrinciples />
      <DevelopmentWorkflow />
      <CurrentlyLearning />
      <EngineeringMindset />
      {/* Testimonials/Writing stay hidden until real content is added */}
      <Testimonials />
      <Writing />
      <Contact />
    </>
  );
}
