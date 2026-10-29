import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  FileText
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const fullResumeText = `
MANJEET SINGH
Jodhpur & Kota, Rajasthan
Phone: ${RESUME_DATA.contact.phone} | Email: ${RESUME_DATA.contact.email}
LinkedIn: ${RESUME_DATA.contact.linkedin}
GitHub: ${RESUME_DATA.contact.github}

EDUCATION
• Rajasthan Technical University, Kota (2024 – 2028)
  Bachelor of Technology in Information Technology — CGPA: 9.3 | Kota, Rajasthan
• Swami Vivekanand Govt. Model School, Balesar (2022 – 2023)
  Senior Secondary (12th Board) — Percentage: 86% | Jodhpur, Rajasthan

EXPERIENCE & TRAINING
• Curious Team Learning Pvt. Ltd., Kota (15 May 2026 – 30 June 2026)
  Web Development Trainee (45 Days)
  - Completed intensive 45-day hands-on Web Development training program in Kota
  - Developed 'FlashCard Generator' app featuring dynamic card generation, state management, and responsive UI
• XPERT CODERS Pvt. Ltd., Jodhpur (June 2025)
  Web Developer Intern
  - Worked on frontend development using HTML, CSS, and JavaScript
  - Assisted in building and improving website layouts and user interfaces
• Developer Student Club RTU (Sep 2025 – Present)
  Web Developer | Kota, Rajasthan
  - Contributed to web-related tasks for technical community initiatives
  - Collaborated with team members using Git and GitHub for version control

PROJECTS
• FlashCard Generator App | HTML, CSS, JavaScript (2026)
  - Interactive educational application for creating and studying custom flashcards
  - Built during 45-day Web Development training at Curious Team Learning Pvt. Ltd.
  - Project URL: https://github.com/manjeetsinghcharan/smart-flashcard-generator
• School Website (Frontend) | HTML, CSS, JavaScript (2025)
  - Designed and developed the frontend of a school website to provide academic and administrative information
  - Project URL: https://github.com/manjeetsinghcharan/school-website
• Personal Portfolio Website | HTML, CSS (2025)
  - Developed a responsive personal portfolio website to showcase projects, skills, and contact info
  - Project URL: https://github.com/manjeetsinghcharan/portfoliomanjeetcharan
• AutoTank Project Exhibition (2024)
  - Automated tank-based exhibition project demonstrated on RTU Campus

TECHNICAL SKILLS
• Core Languages: C, C++, Java, JavaScript, HTML5, CSS3
• Core CS Fundamentals: Object-Oriented Programming (OOPs), Operating Systems, Computer Networks, DSA Basics
• Web Technologies: Responsive Design, DOM Manipulation
• Tools: Git, GitHub, VS Code
• Currently Learning: React.js, Node.js

SOFT SKILLS
Communication, Team Collaboration, Event Coordination, Problem Solving, Time Management

EXTRACURRICULAR & LEADERSHIP
• Placement Cell – Rajasthan Technical University (Sep 2025 – Present) | Core Member
• Technical & Coding Events (2024 – Present) | Event Organizer / Volunteer
• AutoTank Project Exhibition (2024) | Participant, RTU Campus

CERTIFICATIONS
• Git Basics
• Practical GitHub Actions
  `.trim();

  const handleCopyText = () => {
    navigator.clipboard.writeText(fullResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="mc-card p-5 sm:p-8 rounded max-w-4xl w-full bg-[#0e1219] border-2 border-[#2c3749] shadow-2xl relative max-h-[92vh] flex flex-col text-left">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b-2 border-[#242e3d] pb-4 mb-5 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            <span className="font-pixel text-xs sm:text-sm text-white">VERIFIED RESUME SHEET</span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-600/40 hidden sm:inline">
              SINGLE SOURCE OF TRUTH
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handlePrint} className="p-2 mc-btn rounded text-slate-200 hover:text-white flex items-center gap-1.5 text-xs font-mono cursor-pointer" title="Print / Save PDF">
              <Printer className="w-4 h-4 text-emerald-400" /><span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button onClick={handleCopyText} className="p-2 mc-btn rounded text-slate-200 hover:text-white flex items-center gap-1.5 text-xs font-mono cursor-pointer" title="Copy Plain Text Resume">
              {copied ? <><Check className="w-4 h-4 text-emerald-400" /><span className="text-emerald-400 hidden sm:inline">Copied</span></> : <><Copy className="w-4 h-4 text-slate-400" /><span className="hidden sm:inline">Copy Text</span></>}
            </button>
            <button onClick={onClose} className="p-2 mc-btn text-slate-400 hover:text-white rounded cursor-pointer" title="Close">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume */}
        <div className="overflow-y-auto space-y-6 pr-2 text-slate-200 text-sm leading-relaxed">
          
          {/* Header */}
          <div className="border-b border-[#242e3d] pb-5 text-center sm:text-left">
            <h1 className="font-pixel text-2xl sm:text-3xl text-white tracking-wider mb-1">MANJEET SINGH</h1>
            <p className="font-mono text-xs text-slate-400 mb-2">Jodhpur &amp; Kota, Rajasthan, India</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 font-mono text-xs text-slate-300">
              <a href={`tel:${RESUME_DATA.contact.phone}`} className="hover:text-emerald-400 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />{RESUME_DATA.contact.phone}
              </a>
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-emerald-400 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />{RESUME_DATA.contact.email}
              </a>
              <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5" />LinkedIn
              </a>
              <a href={RESUME_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5" />GitHub
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-pixel text-xs sm:text-sm text-emerald-400 tracking-wider border-b border-[#242e3d] pb-1">EDUCATION</h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-1">
                <div>
                  <h3 className="font-semibold text-white">Rajasthan Technical University, Kota</h3>
                  <div className="text-xs text-slate-300">B.Tech in Information Technology — <span className="text-emerald-400 font-mono font-bold">CGPA: 9.3</span></div>
                </div>
                <div className="font-mono text-xs text-slate-400 text-left sm:text-right">2024 – 2028<br className="hidden sm:inline" /> Kota, Rajasthan</div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-1">
                <div>
                  <h3 className="font-semibold text-white">Swami Vivekanand Govt. Model School, Balesar</h3>
                  <div className="text-xs text-slate-300">Senior Secondary (12th Board) — <span className="text-amber-400 font-mono font-bold">86%</span></div>
                </div>
                <div className="font-mono text-xs text-slate-400 text-left sm:text-right">2022 – 2023<br className="hidden sm:inline" /> Jodhpur, Rajasthan</div>
              </div>
            </div>
          </div>

          {/* Experience & Training */}
          <div className="space-y-3">
            <h2 className="font-pixel text-xs sm:text-sm text-emerald-400 tracking-wider border-b border-[#242e3d] pb-1">EXPERIENCE &amp; TRAINING</h2>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="font-semibold text-white">Curious Team Learning Pvt. Ltd.</h3>
                    <div className="text-xs text-emerald-400 font-medium">Web Development Trainee (45 Days)</div>
                  </div>
                  <div className="font-mono text-xs text-slate-400">15 May 2026 – 30 June 2026 | Kota, Rajasthan</div>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 mt-1">
                  <li>Completed 45-day hands-on Web Development training program</li>
                  <li>Built 'FlashCard Generator' app featuring dynamic card generation, state management, and responsive UI</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="font-semibold text-white">XPERT CODERS Pvt. Ltd.</h3>
                    <div className="text-xs text-emerald-400 font-medium">Web Developer Intern</div>
                  </div>
                  <div className="font-mono text-xs text-slate-400">June 2025 | Jodhpur, Rajasthan</div>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 mt-1">
                  <li>Worked on frontend development using HTML, CSS, and JavaScript</li>
                  <li>Assisted in building and improving website layouts and user interfaces</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="font-semibold text-white">Developer Student Club RTU</h3>
                    <div className="text-xs text-emerald-400 font-medium">Web Developer</div>
                  </div>
                  <div className="font-mono text-xs text-slate-400">Sep 2025 – Present | Kota, Rajasthan</div>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 mt-1">
                  <li>Contributed to web-related tasks for technical community initiatives</li>
                  <li>Collaborated with team members using Git and GitHub for version control</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="font-pixel text-xs sm:text-sm text-emerald-400 tracking-wider border-b border-[#242e3d] pb-1">PROJECTS</h2>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <h3 className="font-semibold text-white">FlashCard Generator App</h3>
                  <span className="font-mono text-xs text-slate-400">2026</span>
                </div>
                <div className="text-xs font-mono text-emerald-400 mb-1">Tech: HTML, CSS, JavaScript</div>
                <p className="text-xs text-slate-300 mb-1">
                  Interactive flashcard study application developed during 45-day training at Curious Team Learning Pvt. Ltd.
                </p>
                <a
                  href="https://github.com/manjeetsinghcharan/smart-flashcard-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 font-mono underline hover:text-emerald-300"
                >
                  github.com/manjeetsinghcharan/smart-flashcard-generator
                </a>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <h3 className="font-semibold text-white">School Website (Frontend)</h3>
                  <span className="font-mono text-xs text-slate-400">2025</span>
                </div>
                <div className="text-xs font-mono text-emerald-400 mb-1">Tech: HTML, CSS, JavaScript</div>
                <p className="text-xs text-slate-300">
                  Comprehensive multi-page school website with academic and administrative sections: Home, About, Academics, Contact.
                </p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <h3 className="font-semibold text-white">Personal Portfolio Website</h3>
                  <span className="font-mono text-xs text-slate-400">2025</span>
                </div>
                <div className="text-xs font-mono text-emerald-400 mb-1">Tech: HTML, CSS</div>
                <p className="text-xs text-slate-300">
                  Clean, responsive personal portfolio to showcase projects and skills.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="font-pixel text-xs sm:text-sm text-emerald-400 tracking-wider border-b border-[#242e3d] pb-1">TECHNICAL SKILLS</h2>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div><strong className="text-white">Core Languages:</strong> C, C++, Java, JavaScript, HTML5, CSS3</div>
              <div><strong className="text-white">Core CS Fundamentals:</strong> OOPs, Operating Systems, Computer Networks, DSA Basics</div>
              <div><strong className="text-white">Web Technologies:</strong> Responsive Design, DOM Manipulation</div>
              <div><strong className="text-white">Tools:</strong> Git, GitHub, VS Code</div>
              <div><strong className="text-purple-300">Currently Learning:</strong> React.js, Node.js</div>
            </div>
          </div>

          {/* Extracurricular */}
          <div className="space-y-3">
            <h2 className="font-pixel text-xs sm:text-sm text-emerald-400 tracking-wider border-b border-[#242e3d] pb-1">EXTRACURRICULAR &amp; LEADERSHIP</h2>
            <div className="space-y-2 text-xs">
              <div>
                <span className="font-semibold text-white">Placement Cell – RTU</span> — Core Member | Sep 2025 – Present
              </div>
              <div>
                <span className="font-semibold text-white">Technical &amp; Coding Events</span> — Event Organizer / Volunteer | 2024 – Present
              </div>
              <div>
                <span className="font-semibold text-white">AutoTank Project Exhibition</span> — Participant | RTU Campus 2024
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-1.5 pb-2">
            <h2 className="font-pixel text-xs sm:text-sm text-emerald-400 tracking-wider border-b border-[#242e3d] pb-1">CERTIFICATIONS</h2>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
              <li>Git Basics</li>
              <li>Practical GitHub Actions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
