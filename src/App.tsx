import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Hotbar } from './components/Hotbar';
import { ResumeModal } from './components/ResumeModal';
import { CommandConsole } from './components/CommandConsole';

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [consoleOpen, setConsoleOpen] = useState(false);

  // Toggle developer console on ` or ~ keypress
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setConsoleOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setResumeOpen(false);
        setConsoleOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleExploreBuilds = () => {
    const buildsSection = document.querySelector('#builds');
    if (buildsSection) {
      buildsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-200 relative selection:bg-emerald-500/30 selection:text-emerald-300 font-sans">
      
      {/* Top Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onToggleConsole={() => setConsoleOpen((prev) => !prev)}
      />

      {/* Main Content Area */}
      <main className="pb-24">
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onExploreBuilds={handleExploreBuilds}
        />

        {/* About: Player Profile */}
        <About />

        {/* Skills: Skill Tree */}
        <Skills />

        {/* Projects: My Builds */}
        <Projects />

        {/* Experience & Certifications: Quest Log */}
        <Experience />

        {/* Contact: Comm-Beacon */}
        <Contact />
      </main>

      {/* Interactive Bottom Hotbar Dock (Minecraft 1-8 Slots) */}
      <Hotbar
        onOpenResume={() => setResumeOpen(true)}
        onToggleConsole={() => setConsoleOpen((prev) => !prev)}
      />

      {/* Full Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Developer Terminal Shell (Easter Egg) */}
      <CommandConsole
        isOpen={consoleOpen}
        onClose={() => setConsoleOpen(false)}
      />

    </div>
  );
};

export default App;
