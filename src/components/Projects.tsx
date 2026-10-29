import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'Web Development' | 'Hardware & Systems'>('all');

  const filteredProjects = activeTab === 'all'
    ? RESUME_DATA.projects
    : RESUME_DATA.projects.filter(p => p.category === activeTab);

  return (
    <section id="builds" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-emerald-400 font-mono text-sm">&gt;</span>
          <span className="font-pixel text-xs text-emerald-400 tracking-wider">SECTION: CRAFTED WORKS</span>
        </div>
        <div className="flex flex-wrap items-baseline gap-4">
          <h2 className="font-pixel text-2xl sm:text-3xl text-white tracking-tight flex items-center gap-3">
            MY BUILDS
          </h2>
          <span className="font-mono text-xs text-slate-400">
            [PROJECTS &amp; REPOSITORIES]
          </span>
        </div>
        <div className="w-20 h-1 bg-emerald-500 mt-2" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-3 py-1.5 rounded text-xs font-pixel tracking-wide transition-all cursor-pointer ${
            activeTab === 'all' ? 'mc-btn-primary shadow-md' : 'mc-btn text-slate-300'
          }`}
        >
          ALL BUILDS ({RESUME_DATA.projects.length})
        </button>
        <button
          onClick={() => setActiveTab('Web Development')}
          className={`px-3 py-1.5 rounded text-xs font-pixel tracking-wide transition-all cursor-pointer ${
            activeTab === 'Web Development' ? 'mc-btn-primary shadow-md' : 'mc-btn text-slate-300'
          }`}
        >
          WEB DEV (3)
        </button>
        <button
          onClick={() => setActiveTab('Hardware & Systems')}
          className={`px-3 py-1.5 rounded text-xs font-pixel tracking-wide transition-all cursor-pointer ${
            activeTab === 'Hardware & Systems' ? 'mc-btn-primary shadow-md' : 'mc-btn text-slate-300'
          }`}
        >
          HARDWARE &amp; EXHIBITIONS (1)
        </button>
      </div>

      {/* Clean, Simple, Professional Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="mc-card p-6 rounded bg-[#10151f] border-2 border-[#222c3d] hover:border-emerald-600/50 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card Meta */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="font-pixel text-[10px] text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-600/40">
                  {project.badge}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-pixel text-lg sm:text-xl text-white tracking-tight mb-2">
                {project.title}
              </h3>

              {/* Summary / Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-1.5 mb-5">
                <div className="text-[11px] font-pixel text-slate-400 mb-1">
                  KEY HIGHLIGHTS:
                </div>
                {project.keyFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom: Tech Stack & Actions */}
            <div className="pt-4 border-t border-[#1c2432] space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-[#17202d] text-slate-200 border border-[#263345] text-xs font-mono rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.githubUrl ? (
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 mc-btn-primary rounded font-pixel text-xs tracking-wider flex items-center gap-2 cursor-pointer shadow"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>VIEW CODE ON GITHUB</span>
                  </a>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-[#0d121a] px-3 py-2 rounded border border-[#212b39]">
                  <span>Demonstrated live at RTU Campus Technical Exhibition</span>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
