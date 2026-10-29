import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ArrowUp,
  ExternalLink
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { PixelBeacon, PixelGrassBlock } from './PixelIcons';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const getSubject = () => subject.trim() || 'Connecting with Manjeet Singh - Opportunity / Inquiry';
  
  const getBody = () => {
    if (message.trim()) {
      return `${message.trim()}\n\nBest regards,\n${senderName.trim() || 'A Recruiter / Developer'}`;
    }
    return `Hi Manjeet,\n\nI came across your developer portfolio and would like to connect regarding web development opportunities and collaboration.\n\nBest regards,\n${senderName.trim() || 'A Recruiter / Developer'}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyFullMessage = () => {
    const fullText = `To: ${RESUME_DATA.contact.email}\nSubject: ${getSubject()}\n\n${getBody()}`;
    navigator.clipboard.writeText(fullText);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(getSubject());
    const encodedBody = encodeURIComponent(getBody());
    const mailtoUrl = `mailto:${RESUME_DATA.contact.email}?subject=${encodedSubject}&body=${encodedBody}`;

    // Reliable link click execution
    const tempLink = document.createElement('a');
    tempLink.href = mailtoUrl;
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);

    setSentNotice(true);
  };

  const handleOpenGmail = () => {
    const encodedSubject = encodeURIComponent(getSubject());
    const encodedBody = encodeURIComponent(getBody());
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(RESUME_DATA.contact.email)}&su=${encodedSubject}&body=${encodedBody}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setSentNotice(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-emerald-400 font-mono text-sm">&gt;</span>
          <span className="font-pixel text-xs text-emerald-400 tracking-wider">SECTION: TRANSMISSION BEACON</span>
        </div>
        <h2 className="font-pixel text-2xl sm:text-3xl text-white tracking-tight flex items-center gap-3">
          LET'S BUILD SOMETHING COOL.
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mt-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left Column: Mail Composer */}
        <div className="lg:col-span-7 mc-card p-6 sm:p-8 rounded bg-[#10141e] border-2 border-[#242e3d] text-left">
          
          <div className="flex items-center justify-between border-b border-[#222c3b] pb-3 mb-5">
            <div className="flex items-center gap-2.5">
              <PixelBeacon className="w-6 h-6" />
              <div>
                <h3 className="font-pixel text-sm text-white">BEACON TRANSMITTER</h3>
                <span className="text-[10px] font-mono text-emerald-400">STATUS: OPEN FOR WORK &amp; COLLABORATION</span>
              </div>
            </div>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">CHANNEL: DIRECT MAIL</span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
            Whether you are discussing an internship opportunity, web development project collaboration, campus initiative, or just want to connect — feel free to send a direct message or open via your preferred mail client.
          </p>

          <form onSubmit={handleSendMail} className="space-y-4">
            <div>
              <label className="block text-xs font-pixel text-slate-300 mb-1.5">YOUR NAME / TEAM:</label>
              <input
                type="text"
                placeholder="e.g. Jane Doe (Tech Recruiter / Engineer)"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#0a0d13] border-2 border-[#232c3a] focus:border-emerald-500 rounded text-slate-200 text-sm font-mono placeholder:text-slate-600 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-pixel text-slate-300 mb-1.5">SUBJECT / TOPIC:</label>
              <input
                type="text"
                placeholder="Web Developer Opportunity / Project Inquiry"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#0a0d13] border-2 border-[#232c3a] focus:border-emerald-500 rounded text-slate-200 text-sm font-mono placeholder:text-slate-600 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-pixel text-slate-300 mb-1.5">DISPATCH MESSAGE:</label>
              <textarea
                rows={4}
                placeholder="Hi Manjeet, we saw your portfolio and would like to discuss..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#0a0d13] border-2 border-[#232c3a] focus:border-emerald-500 rounded text-slate-200 text-sm font-mono placeholder:text-slate-600 outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary: Send via default mail client */}
              <button
                type="submit"
                className="px-5 py-2.5 mc-btn-primary rounded font-pixel text-xs tracking-wider flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Send className="w-3.5 h-3.5" />
                <span>SEND DISPATCH VIA MAIL</span>
              </button>

              {/* Instant Gmail Web Button */}
              <button
                type="button"
                onClick={handleOpenGmail}
                className="px-4 py-2.5 mc-btn rounded font-pixel text-xs text-emerald-300 hover:text-white border-emerald-700/60 tracking-wider flex items-center gap-2 cursor-pointer bg-[#14202d]"
                title="Open directly in Gmail Web Compose"
              >
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                <span>OPEN IN GMAIL</span>
              </button>

              {/* Copy Email */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-4 py-2.5 mc-btn rounded font-pixel text-xs text-slate-200 hover:text-emerald-400 tracking-wider flex items-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <><Check className="w-3.5 h-3.5 text-emerald-400" /><span className="text-emerald-400">EMAIL COPIED!</span></>
                ) : (
                  <><Copy className="w-3.5 h-3.5 text-slate-400" /><span>COPY EMAIL</span></>
                )}
              </button>
            </div>

            {/* Status & Fallback options if client doesn't open */}
            {sentNotice && (
              <div className="p-3.5 bg-emerald-950/60 border border-emerald-500/70 rounded text-xs font-mono text-emerald-200 space-y-2 text-left mt-3">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dispatch prepared! If your desktop mail client did not launch:</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleOpenGmail}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-pixel text-[10px] cursor-pointer flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>OPEN IN GMAIL WEB</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyFullMessage}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-pixel text-[10px] cursor-pointer flex items-center gap-1.5"
                  >
                    <Copy className="w-3 h-3 text-slate-400" />
                    <span>{copiedMessage ? 'MESSAGE COPIED!' : 'COPY DRAFT MESSAGE'}</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Right Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-4 text-left">
          
          <a href={`mailto:${RESUME_DATA.contact.email}`} className="mc-card p-4 rounded bg-[#10151f] border-2 border-[#222b3a] hover:border-emerald-600/60 block transition-all group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 mc-slot rounded text-emerald-400 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-pixel text-slate-400 block">PRIMARY EMAIL</span>
                <span className="text-sm font-mono text-white group-hover:text-emerald-300 transition-colors truncate block">{RESUME_DATA.contact.email}</span>
              </div>
            </div>
          </a>

          <a href={`tel:${RESUME_DATA.contact.phone.replace(/[^0-9+]/g, '')}`} className="mc-card p-4 rounded bg-[#10151f] border-2 border-[#222b3a] hover:border-emerald-600/60 block transition-all group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 mc-slot rounded text-emerald-400 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-pixel text-slate-400 block">PHONE / WHATSAPP</span>
                <span className="text-sm font-mono text-white group-hover:text-emerald-300 transition-colors">{RESUME_DATA.contact.phone}</span>
              </div>
            </div>
          </a>

          <a href={RESUME_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="mc-card p-4 rounded bg-[#10151f] border-2 border-[#222b3a] hover:border-emerald-600/60 block transition-all group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 mc-slot rounded text-slate-300 group-hover:scale-105 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-pixel text-slate-400 block">GITHUB REPOSITORIES</span>
                <span className="text-sm font-mono text-white group-hover:text-emerald-300 transition-colors">github.com/{RESUME_DATA.contact.githubHandle}</span>
              </div>
            </div>
          </a>

          <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="mc-card p-4 rounded bg-[#10151f] border-2 border-[#222b3a] hover:border-emerald-600/60 block transition-all group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 mc-slot rounded text-blue-400 group-hover:scale-105 transition-transform">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-pixel text-slate-400 block">PROFESSIONAL NETWORK</span>
                <span className="text-sm font-mono text-white group-hover:text-blue-300 transition-colors">linkedin.com/in/{RESUME_DATA.contact.linkedinHandle}</span>
              </div>
            </div>
          </a>

          <div className="mc-card p-4 rounded bg-[#10151f] border-2 border-[#222b3a] block">
            <div className="flex items-center gap-3">
              <div className="p-2.5 mc-slot rounded text-amber-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-pixel text-slate-400 block">CURRENT COORDINATES</span>
                <span className="text-sm font-mono text-slate-200">RTU Campus, Kota &amp; Jodhpur, Rajasthan</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-8 border-t-2 border-[#1c2430] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <PixelGrassBlock size={18} />
          <span>&copy; {new Date().getFullYear()} {RESUME_DATA.name.toUpperCase()} • CRAFTED WITH REACT &amp; TYPESCRIPT</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-emerald-400 font-pixel text-[10px]">SEED: RTU-KOTA-CGPA-9.3</span>
          <button onClick={scrollToTop} className="p-2 mc-btn text-slate-300 hover:text-white rounded cursor-pointer" title="Teleport to spawn (Top)">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </section>
  );
};
