import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { OpenSource } from './components/OpenSource/OpenSource';
import { Skills } from './components/Skills/Skills';
import { Community } from './components/Community/Community';
import { Education } from './components/Education/Education';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0d11] text-[#e2e8f0] selection:bg-[#ccff00] selection:text-black">
      {/* Skip to Content accessible link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#ccff00] focus:text-black focus:font-bold focus:rounded-md focus:shadow-xl"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <OpenSource />
        <Skills />
        <Community />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
