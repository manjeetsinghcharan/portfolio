import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Terminal, 
  FlaskConical, 
  Users, 
  Layers,
  BookOpen
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { PixelSword } from './PixelIcons';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Core Languages', 'Core CS Fundamentals', 'Web Technologies', 'Developer Tools', 'Currently Learning', 'Soft Skills'];

  const filteredCategories = selectedCategory === 'All' 
    ? RESUME_DATA.skills 
    : RESUME_DATA.skills.filter(cat => cat.category === selectedCategory);

  const getRarityBadge = (rarity: string) => {
    switch (rarity) {
      case 'Legendary':
        return 'text-amber-300 bg-amber-950/80 border-amber-600/60';
      case 'Rare':
        return 'text-blue-300 bg-blue-950/80 border-blue-600/60';
      case 'Uncommon':
        return 'text-emerald-300 bg-emerald-950/80 border-emerald-600/60';
      case 'Brewing':
        return 'text-purple-300 bg-purple-950/80 border-purple-600/60';
      default:
        return 'text-slate-300 bg-slate-900 border-slate-700';
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4 text-purple-400" />;
      case 'Globe':
        return <Globe className="w-4 h-4 text-blue-400" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-yellow-400" />;
      case 'FlaskConical':
        return <FlaskConical className="w-4 h-4 text-cyan-400" />;
      case 'Users':
        return <Users className="w-4 h-4 text-pink-400" />;
      default:
        return <Layers className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-emerald-400 font-mono text-sm">&gt;</span>
          <span className="font-pixel text-xs text-emerald-400 tracking-wider">SECTION: TECH STACK</span>
        </div>
        <div className="flex flex-wrap items-baseline gap-4">
          <h2 className="font-pixel text-2xl sm:text-3xl text-white tracking-tight flex items-center gap-3">
            SKILL TREE
          </h2>
          <span className="font-mono text-xs text-slate-400">
            [CATEGORIZED COMPETENCY INVENTORY]
          </span>
        </div>
        <div className="w-20 h-1 bg-emerald-500 mt-2" />
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded text-xs font-pixel tracking-wide transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'mc-btn-primary shadow-md'
                : 'mc-btn text-slate-300 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Matrix by Category */}
      <div className="space-y-10">
        {filteredCategories.map((catGroup, idx) => (
          <div key={idx} className="space-y-4">
            
            {/* Category Header */}
            <div className="flex items-center justify-between border-b border-[#222c3b] pb-2 text-left">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 mc-slot rounded">
                  {getCategoryIcon(catGroup.iconName)}
                </div>
                <div>
                  <h3 className="font-pixel text-sm text-white flex items-center gap-2">
                    {catGroup.category}
                    {catGroup.category === "Currently Learning" && (
                      <span className="text-[10px] font-mono text-purple-400 bg-purple-950/70 border border-purple-600/40 px-2 py-0.5 rounded">
                        IN PROGRESS
                      </span>
                    )}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    {catGroup.subtitle}
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                {catGroup.skills.length} item{catGroup.skills.length > 1 ? 's' : ''}
              </span>
            </div>

            {/* Grid of Compact Skill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {catGroup.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="mc-card p-4 rounded bg-[#10141d] hover:bg-[#141b25] transition-all border-2 border-[#202936] hover:border-emerald-600/60 group text-left"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-pixel text-xs text-white group-hover:text-emerald-300 transition-colors">
                      {skill.name}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getRarityBadge(skill.rarity)}`}>
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-snug">
                    {skill.detail}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Skill Philosophy Notice */}
      <div className="mt-12 p-4 mc-card-stone rounded text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <PixelSword className="w-6 h-6 text-emerald-400 shrink-0" />
          <div className="text-xs">
            <span className="font-pixel text-amber-300 block mb-0.5">TRANSPARENT SKILL LEVELING</span>
            <p className="text-slate-300">
              Only authentic technologies from coursework, verified training at Curious Team Learning, and hands-on projects are listed.
            </p>
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-2">
          <span className="text-[10px] font-mono bg-[#0c1017] text-emerald-400 px-3 py-1.5 rounded border border-[#2b3543]">
            STRICT VERIFIED STACK
          </span>
        </div>
      </div>

    </section>
  );
};
