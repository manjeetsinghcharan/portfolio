import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface CommandConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  text: string;
  type: 'system' | 'user' | 'success' | 'error';
}

export const CommandConsole: React.FC<CommandConsoleProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    { text: "=== DEVELOPER CONSOLE v1.0 ===", type: "system" },
    { text: "Type /help to inspect available commands.", type: "system" }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 50);
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const newLogs: CommandLog[] = [...history, { text: `> ${cmd}`, type: 'user' }];
    const lower = cmd.toLowerCase();

    if (lower === '/help') {
      newLogs.push(
        { text: "Available Commands:", type: 'system' },
        { text: "  /help         - Display this list of commands", type: 'system' },
        { text: "  /about        - Teleport to player profile info", type: 'system' },
        { text: "  /skills       - Inspect technical skill inventory", type: 'system' },
        { text: "  /projects     - List verified builds & repos", type: 'system' },
        { text: "  /contact      - Get direct communication coordinates", type: 'system' },
        { text: "  /clear        - Clear console history", type: 'system' }
      );
    } else if (lower === '/clear') {
      setHistory([]); setInput(''); return;
    } else if (lower === '/about' || lower === '/locate') {
      newLogs.push({ text: `Player: ${RESUME_DATA.name} | B.Tech IT, RTU Kota (CGPA: ${RESUME_DATA.level}) | Jodhpur & Kota`, type: 'success' });
      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lower === '/skills') {
      newLogs.push({ text: `Languages: C, C++, Java, JS, HTML, CSS | Core CS: OOPs, OS, CN, DSA | Tools: Git, GitHub, VS Code | Learning: React, Node`, type: 'success' });
      document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lower === '/projects') {
      newLogs.push(
        { text: `1. FlashCard Generator App -> github.com/manjeetsinghcharan/smart-flashcard-generator`, type: 'success' },
        { text: `2. School Website (Frontend) -> github.com/manjeetsinghcharan/school-website`, type: 'success' },
        { text: `3. Personal Portfolio Website -> github.com/manjeetsinghcharan/portfoliomanjeetcharan`, type: 'success' },
        { text: `4. AutoTank Project Exhibition (RTU Campus)`, type: 'success' }
      );
      document.querySelector('#builds')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lower === '/contact') {
      newLogs.push({ text: `Email: ${RESUME_DATA.contact.email} | Phone: ${RESUME_DATA.contact.phone} | GitHub: ${RESUME_DATA.contact.github}`, type: 'success' });
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      newLogs.push({ text: `Unknown command: "${cmd}". Type /help for valid commands.`, type: 'error' });
    }

    setHistory(newLogs);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="mc-card p-4 sm:p-6 rounded max-w-2xl w-full bg-[#090d14] border-2 border-emerald-500 shadow-2xl relative text-left font-mono">
        
        <div className="flex items-center justify-between border-b border-[#242e3d] pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="font-pixel text-xs text-emerald-400">DEVELOPER_CONSOLE.EXE</span>
          </div>
          <button onClick={onClose} className="p-1 mc-btn text-slate-400 hover:text-white rounded cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="h-64 overflow-y-auto space-y-1.5 p-3 bg-[#05080c] border border-[#1b232f] rounded text-xs mb-3 font-mono">
          {history.map((log, idx) => (
            <div key={idx} className={`${
              log.type === 'error' ? 'text-rose-400' :
              log.type === 'success' ? 'text-emerald-300' :
              log.type === 'user' ? 'text-yellow-300 font-bold' :
              'text-slate-400'
            }`}>{log.text}</div>
          ))}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={handleCommand} className="flex items-center gap-2">
          <div className="relative flex-1">
            <span className="absolute left-3 top-2.5 text-emerald-400 font-bold">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type /help, /skills, /projects, /contact..."
              className="w-full pl-7 pr-3 py-2 bg-[#05080c] border border-[#232d3d] focus:border-emerald-500 rounded text-xs text-white outline-none font-mono"
            />
          </div>
          <button type="submit" className="px-3 py-2 mc-btn-primary rounded font-pixel text-xs text-white cursor-pointer">EXEC</button>
        </form>

        <div className="mt-2 text-[10px] text-slate-500 flex justify-between">
          <span>Tip: Press ` or ~ to toggle this console</span>
          <span>Terminal Shell</span>
        </div>
      </div>
    </div>
  );
};
