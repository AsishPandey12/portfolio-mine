import React from "react";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact";

const Sections = () => {
  return (
    <main className="flex flex-col gap-36 w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto">
      {/* Ensure sections have correct IDs for smooth scrolling */}
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Sections;
