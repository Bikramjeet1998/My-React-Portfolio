import React from "react";
import MainView from "../MainView";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export default function Mainpage() {
  return (
    <div>
      <MainView />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
