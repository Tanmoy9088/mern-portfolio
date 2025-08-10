import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MouseEffect from "./components/MouseEffect";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <MouseEffect />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <Chatbot/>
      </main>
    </>
  );
}

export default App;
