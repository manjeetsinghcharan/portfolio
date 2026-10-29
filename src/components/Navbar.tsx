import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Terminal } from 'lucide-react';
import { PixelGrassBlock } from './PixelIcons';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { RESUME_DATA } from '../data/resumeData';

interface NavbarProps {
  onOpenResume: () => void;
  onToggleConsole: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onToggleConsole,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'BUILDS', href: '#builds' },
    { label: 'JOURNEY', href: '#experience' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0d1117]/95 backdrop-blur-md border-b-2 border-[#1f2836] py-2.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Player Identifier */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="p-1 mc-slot rounded group-hover:scale-105 transition-transform">
              <PixelGrassBlock size={26} />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-pixel text-sm sm:text-base text-emerald-400 tracking-wider group-hover:text-emerald-300 flex items-center gap-2">
                MANJEET.DEV
                <span className="text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-600/50 px-1.5 py-0.5 rounded font-mono">
                  LVL {RESUME_DATA.level}
                </span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-tight hidden sm:inline-block">
                RTU KOTA • IT ENGR
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#12161f]/90 border-2 border-[#263140] px-3 py-1.5 rounded-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-1 text-xs font-pixel tracking-wide text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 rounded transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Badges */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Terminal Easter Egg Toggle */}
            <button
              onClick={onToggleConsole}
              title="Toggle Developer Console (~)"
              className="p-2 mc-btn text-slate-300 hover:text-emerald-400 rounded text-xs flex items-center gap-1.5 font-mono cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] font-pixel hidden lg:inline">CLI</span>
            </button>

            {/* Resume Action */}
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 mc-btn bg-[#18202c] hover:bg-[#202b3b] text-emerald-300 border-emerald-700/50 flex items-center gap-2 text-xs font-pixel rounded cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>RESUME</span>
            </button>

            {/* GitHub */}
            <a
              href={RESUME_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="p-2 mc-btn text-slate-300 hover:text-white rounded"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={RESUME_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="p-2 mc-btn text-slate-300 hover:text-blue-400 rounded"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 mc-btn text-slate-200 rounded"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 mc-card rounded border-2 border-[#2b3748] bg-[#0f141c]/98 backdrop-blur-lg">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-sm font-pixel text-slate-200 hover:text-emerald-400 hover:bg-slate-800/80 rounded"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 py-2 mc-btn-primary rounded text-xs font-pixel text-center flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                VIEW RESUME
              </button>
              <a
                href={RESUME_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 mc-btn rounded text-slate-300"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={RESUME_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 mc-btn rounded text-slate-300"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
