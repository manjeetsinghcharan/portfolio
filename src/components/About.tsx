import React from 'react';
import { GraduationCap, MapPin, Code2, BookOpen } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-emerald-400 font-mono text-sm">&gt;</span>
          <span className="font-pixel text-xs text-emerald-400 tracking-wider">SECTION: ABOUT ME</span>
        </div>
        <h2 className="font-pixel text-2xl sm:text-3xl text-white tracking-tight flex items-center gap-3">
          PROFILE &amp; BACKGROUND
          <span className="text-xs font-mono text-slate-400 px-2.5 py-1 bg-[#141a24] border border-[#232d3d] rounded">
            LVL {RESUME_DATA.level}
          </span>
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mt-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Quick Profile Summary */}
        <div className="lg:col-span-5 space-y-4 text-left">
          <div className="mc-card p-5 sm:p-6 rounded bg-[#10141e] border-2 border-[#242e3d]">
            <div className="flex items-center justify-between border-b border-[#212a38] pb-4 mb-4">
              <div>
                <h3 className="font-pixel text-base text-white">{RESUME_DATA.name}</h3>
                <p className="text-xs font-mono text-emerald-400 mt-0.5">Web Developer &amp; B.Tech IT Student</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-slate-400 block">CGPA</span>
                <span className="font-pixel text-sm text-emerald-300">{RESUME_DATA.level} / 10.0</span>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between py-1 border-b border-[#1b232f]">
                <span className="text-slate-400 flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                  College:
                </span>
                <span className="text-slate-200">RTU Kota (2024–2028)</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-[#1b232f]">
                <span className="text-slate-400 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Location:
                </span>
                <span className="text-slate-200">Kota &amp; Jodhpur, Rajasthan</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-[#1b232f]">
                <span className="text-slate-400 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-blue-400" />
                  Languages:
                </span>
                <span className="text-emerald-300">C, C++, Java, JS, HTML, CSS</span>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                  Core CS:
                </span>
                <span className="text-slate-200">OOPs, OS, CN, DSA</span>
              </div>
            </div>
          </div>

          <div className="mc-card p-4 rounded bg-[#0d1117] border border-[#212a38]">
            <span className="font-pixel text-[10px] text-amber-300 block mb-1">PRACTICAL FOCUS</span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Hands-on web engineering with React 19, TypeScript, Tailwind CSS, JavaScript, and semantic HTML. Completed 45-day training at Curious Team Learning Pvt. Ltd. and former intern at XPERT CODERS.
            </p>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Education Cards */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="mc-card p-6 rounded bg-[#111621] border-2 border-[#242e3d]">
            <h3 className="font-pixel text-xs text-emerald-400 mb-3 tracking-wider">
              BIOGRAPHY
            </h3>
            
            <div className="space-y-3.5 text-slate-300 text-sm leading-relaxed">
              <p>
                I am an Information Technology undergraduate at <span className="text-white font-medium">Rajasthan Technical University, Kota</span> (2024 – 2028) with an academic record of <span className="text-emerald-400 font-mono font-semibold">9.3 CGPA</span>. My schooling was completed at <span className="text-white font-medium">Swami Vivekanand Govt. Model School, Balesar</span> with <span className="text-emerald-400 font-mono font-medium">86%</span> in 12th Board.
              </p>
              <p>
                As a web developer, I build clean, structured, and responsive web applications. I completed an intensive 45-day Web Development training program at <span className="text-white font-medium">Curious Team Learning Pvt. Ltd.</span> in Kota, where I created the <span className="text-emerald-300 font-medium">FlashCard Generator</span> website, and previously worked as a Web Developer Intern at <span className="text-white font-medium">XPERT CODERS</span> in Jodhpur.
              </p>
              <p>
                Along with frontend development, I have solid foundations in core programming languages (<span className="text-white font-mono">C</span>, <span className="text-white font-mono">C++</span>, <span className="text-white font-mono">Java</span>, <span className="text-white font-mono">JavaScript</span>, <span className="text-white font-mono">TypeScript</span>) and Computer Science fundamentals including <span className="text-white font-medium">Object-Oriented Programming (OOPs)</span>, <span className="text-white font-medium">Operating Systems</span>, <span className="text-white font-medium">Computer Networks</span>, and <span className="text-white font-medium">Data Structures &amp; Algorithms</span>.
              </p>
            </div>
          </div>

          {/* Education Records */}
          <div className="space-y-3">
            <h4 className="font-pixel text-xs text-slate-300 tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              EDUCATION
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="mc-card p-4 rounded bg-[#10151f] border-2 border-[#242e3d] flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700/50">
                        {edu.period}
                      </span>
                      <span className="font-pixel text-xs text-amber-300">
                        {edu.score}
                      </span>
                    </div>

                    <h5 className="font-medium text-white text-sm leading-snug mb-1">
                      {edu.degree}
                    </h5>
                    <p className="text-xs text-slate-400 mb-2">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>

                  <ul className="space-y-1 pt-2 border-t border-[#1e2736]">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="text-[11px] text-slate-300 flex items-start gap-1.5 leading-snug">
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
