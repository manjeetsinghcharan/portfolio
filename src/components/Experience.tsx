import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Award, 
  GitBranch, 
  Workflow, 
  Trophy
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const Experience: React.FC = () => {
  const getTierDetails = (tier: string) => {
    switch (tier) {
      case 'rare':
        return {
          border: 'border-yellow-500/60',
          badge: 'bg-yellow-950/80 text-yellow-300 border-yellow-600/50',
          glow: 'shadow-[0_0_15px_rgba(234,179,8,0.15)]',
          label: 'EXPERIENCE & TRAINING'
        };
      case 'uncommon':
        return {
          border: 'border-emerald-500/60',
          badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-600/50',
          glow: 'shadow-[0_0_15px_rgba(16,185,129,0.15)]',
          label: 'COMMUNITY & LEADERSHIP'
        };
      default:
        return {
          border: 'border-[#2d3748]',
          badge: 'bg-slate-900 text-slate-300 border-slate-700',
          glow: '',
          label: 'CAMPUS MILESTONE'
        };
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-emerald-400 font-mono text-sm">&gt;</span>
          <span className="font-pixel text-xs text-emerald-400 tracking-wider">SECTION: QUEST PROGRESSION</span>
        </div>
        <div className="flex flex-wrap items-baseline gap-4">
          <h2 className="font-pixel text-2xl sm:text-3xl text-white tracking-tight flex items-center gap-3">
            QUEST LOG &amp; EXPERIENCE
          </h2>
          <span className="font-mono text-xs text-slate-400">
            [TRAINING • INTERNSHIPS • COMMUNITY • LEADERSHIP]
          </span>
        </div>
        <div className="w-20 h-1 bg-emerald-500 mt-2" />
      </div>

      {/* Main Experience Timeline */}
      <div className="space-y-6 mb-16 relative">
        <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-500 via-[#2d3748] to-transparent pointer-events-none" />

        {RESUME_DATA.experience.map((item, index) => {
          const tier = getTierDetails(item.advancementTier);

          return (
            <div
              key={item.id}
              className={`relative mc-card p-5 sm:p-6 rounded bg-[#10141e] border-2 ${tier.border} ${tier.glow} transition-all hover:bg-[#141926] text-left md:ml-16`}
            >
              <div className="hidden md:flex absolute -left-16 top-6 w-8 h-8 rounded-none bg-[#141a24] border-2 border-emerald-500 items-center justify-center text-emerald-400 shadow-md">
                <span className="font-mono text-xs font-bold">{index + 1}</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#212a38] pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className={`font-pixel text-[11px] px-2 py-0.5 rounded border ${tier.badge}`}>
                    {tier.label}: {item.advancementTitle.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-pixel text-base sm:text-lg text-white">{item.role}</h3>
                  <div className="text-sm font-medium text-emerald-400 mt-0.5">{item.organization}</div>
                </div>
                <div className="flex items-center gap-1 font-mono text-xs text-slate-400 bg-[#161c27] px-2.5 py-1 rounded border border-[#242e3d]">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{item.location}</span>
                </div>
              </div>

              <ul className="space-y-2 pt-2">
                {item.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-emerald-400 font-bold shrink-0 mt-0.5">▪</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Certifications */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#232c3a] pb-3 text-left">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-400" />
            <h3 className="font-pixel text-sm sm:text-base text-white">VERIFIED CERTIFICATIONS</h3>
          </div>
          <span className="text-xs font-mono text-slate-400">CREDENTIAL LOG</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {RESUME_DATA.certifications.map((cert, cIdx) => (
            <div
              key={cIdx}
              className="mc-card p-5 rounded bg-[#10151f] border-2 border-[#242e3d] hover:border-emerald-600/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="p-2 mc-slot rounded text-emerald-400">
                    {cert.title.includes('Actions') ? <Workflow className="w-6 h-6" /> : <GitBranch className="w-6 h-6" />}
                  </div>
                  <span className="font-pixel text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-600/40">
                    {cert.badge}
                  </span>
                </div>
                <h4 className="font-pixel text-sm sm:text-base text-white mb-1">{cert.title}</h4>
                <p className="text-xs font-mono text-slate-400 mb-3">{cert.issuer}</p>
              </div>
              <div>
                <div className="text-[10px] font-pixel text-slate-400 mb-1.5">SKILLS APPLIED:</div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsApplied.map((sk) => (
                    <span key={sk} className="px-2 py-0.5 bg-[#171f2b] text-slate-300 border border-[#2b3749] text-[11px] font-mono rounded">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
