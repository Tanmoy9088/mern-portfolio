import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import AnimatedCursor from 'react-animated-cursor';

function App() {
  return (
    <>
         {/* <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          'a',
          'button',
          '.link',
        ]}
      /> */}
    <Navbar/>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer/>
      </main>
    </>
  );
}

export default App;
