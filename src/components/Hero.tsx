import React, { useState } from 'react';
import { FileText, ArrowDown, Copy, Check, MapPin, Code2, GraduationCap, Briefcase } from 'lucide-react';
import { PixelHeart, PixelDrumstick, PixelGrassBlock } from './PixelIcons';
import { RESUME_DATA } from '../data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
  onExploreBuilds: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreBuilds }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Block Grid */}
      <div className="absolute inset-0 bg-grid-mc opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-950/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Grid: Left Narrative + Right Developer Profile Snapshot */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Hero Copy & Status */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Label */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 mc-card rounded mb-5 border-l-4 border-l-emerald-500">
            <span className="w-2 h-2 rounded-none bg-emerald-400 animate-pulse" />
            <span className="font-pixel text-[11px] sm:text-xs text-emerald-300 tracking-wider">
              STATUS: IT STUDENT • WEB DEVELOPER
            </span>
          </div>

          {/* Retro Greeting & Real Name */}
          <div className="space-y-1 mb-4">
            <h2 className="font-pixel text-emerald-400 text-sm sm:text-base tracking-widest flex items-center gap-2">
              <span className="text-slate-500">&gt;</span> HELLO, WORLD!
            </h2>
            <h1 className="font-pixel text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white tracking-tight leading-tight">
              I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 underline decoration-emerald-500/40 decoration-4 underline-offset-8">
                {RESUME_DATA.name.toUpperCase()}
              </span>
            </h1>
          </div>

          {/* Subtitle / Personal Intro */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal mb-6">
            B.Tech Information Technology student at <span className="text-white font-medium">Rajasthan Technical University, Kota</span> with a <span className="text-emerald-400 font-mono font-semibold">9.3 CGPA</span>. Web developer crafting clean, responsive applications with C, C++, Java, JavaScript, and strong foundations in Computer Science.
          </p>

          {/* Player HUD Stats Bar */}
          <div className="w-full max-w-xl p-3 mc-card rounded mb-8 bg-[#0e1219]/90 border-2 border-[#242e3d]">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-2">
              {/* Hearts HUD */}
              <div className="flex items-center gap-1" title="10/10 Health">
                {[...Array(5)].map((_, i) => (
                  <PixelHeart key={i} full={true} className="w-3.5 h-3.5" />
                ))}
                <span className="text-[10px] font-pixel text-rose-400 ml-1">HP 20/20</span>
              </div>

              {/* Hunger / Stamina HUD */}
              <div className="flex items-center gap-1" title="Energy">
                {[...Array(5)].map((_, i) => (
                  <PixelDrumstick key={i} className="w-3.5 h-3.5" />
                ))}
                <span className="text-[10px] font-pixel text-amber-400 ml-1">ENERGY</span>
              </div>

              {/* Coordinates */}
              <div className="font-mono text-[11px] text-slate-400">
                LOC: <span className="text-slate-200">KOTA, RAJASTHAN</span>
              </div>
            </div>

            {/* XP Level Bar */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[10px] font-pixel">
                <span className="text-emerald-400">ACADEMIC LEVEL</span>
                <span className="text-emerald-300 bg-emerald-950 px-1.5 py-0.2 rounded border border-emerald-600/40">
                  LVL {RESUME_DATA.level} (RTU CGPA)
                </span>
              </div>
              <div className="h-2 w-full bg-[#080b0f] border border-[#1e2633] overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-lime-300 transition-all duration-1000 shadow-[0_0_8px_rgba(74,222,128,0.5)]"
                  style={{ width: `${RESUME_DATA.xpProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <button
              onClick={onExploreBuilds}
              className="px-5 py-2.5 mc-btn-primary font-pixel text-xs tracking-wider rounded flex items-center gap-2 group cursor-pointer"
            >
              <span>EXPLORE MY BUILDS</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenResume}
              className="px-4 py-2.5 mc-btn font-pixel text-xs text-slate-200 hover:text-emerald-400 tracking-wider rounded flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>VIEW RESUME</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="px-3 py-2.5 mc-btn font-mono text-xs text-slate-300 hover:text-white rounded flex items-center gap-1.5 cursor-pointer"
              title="Copy Email Address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-pixel text-[10px]">COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[11px]">manjeetsinghcharan1444@gmail.com</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Real Verification Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="px-2.5 py-1 bg-[#131923] border border-[#232d3d] rounded font-mono text-[11px]">
              🏛️ RTU Kota (2024–2028)
            </span>
            <span className="px-2.5 py-1 bg-[#131923] border border-[#232d3d] rounded font-mono text-[11px]">
              ⭐ 12th Board 86%
            </span>
            <span className="px-2.5 py-1 bg-[#131923] border border-[#232d3d] rounded font-mono text-[11px]">
              🚀 45-Day Web Dev Training
            </span>
            <span className="px-2.5 py-1 bg-[#131923] border border-[#232d3d] rounded font-mono text-[11px]">
              ⚡ DSC RTU Web Dev
            </span>
          </div>

        </div>

        {/* Right Column: Sleek Player Overview Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md mc-card-stone rounded p-5 sm:p-6 text-left relative">
            
            {/* Header: Identity / Player Card */}
            <div className="flex items-center justify-between border-b-2 border-[#2b3543] pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <PixelGrassBlock size={22} />
                <span className="font-pixel text-xs text-emerald-400 tracking-wider">
                  DEVELOPER CARD
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 bg-[#0f131a] px-2 py-0.5 rounded border border-[#2b3543]">
                RTU KOTA // 2024-2028
              </span>
            </div>

            {/* Core Stats Overview */}
            <div className="space-y-3 mb-4 font-mono text-xs">
              <div className="p-3 bg-[#0d1117] border border-[#212a38] rounded space-y-2">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                    Degree:
                  </span>
                  <span className="text-white font-medium">B.Tech in IT (CGPA: 9.3)</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                    <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                    Recent Training:
                  </span>
                  <span className="text-slate-200">Curious Team Learning (45 Days)</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    Base:
                  </span>
                  <span className="text-slate-200">Kota &amp; Jodhpur, Rajasthan</span>
                </div>
              </div>

              {/* Languages Palette */}
              <div className="space-y-2">
                <div className="text-[10px] font-pixel text-slate-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  CORE PROGRAMMING LANGUAGES:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['C', 'C++', 'Java', 'JavaScript', 'HTML5', 'CSS3'].map((lang) => (
                    <span
                      key={lang}
                      className="px-2.5 py-1 bg-[#131a24] text-emerald-300 border border-emerald-700/40 rounded text-xs font-mono"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="p-3 bg-[#0f141d] border border-[#222c3b] rounded space-y-1.5">
                <div className="text-[10px] font-pixel text-amber-300">CORE FOCUS:</div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Web development, dynamic DOM manipulation, and core computer science fundamentals including OOPs, OS, Computer Networks, and DSA.
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-2 border-t border-[#252f3d] flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="text-emerald-400">✓ Verified Resume Source</span>
              <span>Available for Opportunities</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
