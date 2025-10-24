import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseEffect from "./components/MouseEffect";
import Chatbot from "./components/Chatbot";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  const scrollRef = useRef(null);
  const [locomotiveScrollInstance, setLocomotiveScrollInstance] =
    useState(null);

  // 1. Correct Initialization: Use useEffect and useRef
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current, // Target the DOM element via the ref
      smooth: true,
      // Add other options like lerp or multiplier here
    });

    setLocomotiveScrollInstance(scroll);

    // Cleanup function: destroys the instance when the component unmounts
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  // 2. Correct Scroll Handler: Ensure instance exists
  const handleScrollTo = (targetId) => {
    if (locomotiveScrollInstance) {
      locomotiveScrollInstance.scrollTo(targetId, {
        offset: -70, // Your fixed header offset
        duration: 800,
        easing: [0.6, 0.01, 0, 0.9],
      });
    }
  };

  return (
    <>
      <Navbar
        handleScrollTo={handleScrollTo}
        locomotiveScrollInstance={locomotiveScrollInstance} // Pass instance for smart hide/show
      />

      {/* Attach the ref to the data-scroll-container */}
      <main
        data-scroll-container
        ref={scrollRef}
        className="w-screen bg-[#ffffff]"
      >
        {/* All major sections must have the data-scroll-section attribute and an ID */}
        <Hero id="HOME" data-scroll-section />
        <About id="BIO" data-scroll-section />
        <Skills id="SKILLS" data-scroll-section />
        <Services id="SERVICES" data-scroll-section />
        <Projects id="PROJECTS" data-scroll-section />
        <Contact id="CONTACT" data-scroll-section />

        <Footer />
        <Chatbot />
      </main>
      <MouseEffect />
    </>
  );
}

export default App;
