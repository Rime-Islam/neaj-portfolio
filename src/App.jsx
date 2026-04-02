import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Custom Cursor Logic
    const cursor = cursorRef.current;
    
    // Default cursor hiding via css in global is optional, we will track mouse
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Initial page load animation
    const tl = gsap.timeline();
    tl.fromTo(".page-wrapper", 
      { opacity: 0 }, 
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="bg-[#050505] text-white overflow-hidden relative selection:bg-brand selection:text-black">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 border-2 border-brand rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-transform mix-blend-difference hidden md:flex"
      >
        <div className="w-1 h-1 bg-brand rounded-full"></div>
      </div>

      <div className="page-wrapper opacity-0">
        <Navbar />
        
        <main>
          <Home />
          <Marquee />
          <About />
          <Process />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;