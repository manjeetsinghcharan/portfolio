import React, { useEffect, useState } from 'react';
import { 
  User, 
  Layers, 
  Award, 
  FileText, 
  Terminal
} from 'lucide-react';
import { PixelGrassBlock, PixelPickaxe, PixelBeacon } from './PixelIcons';

interface HotbarProps {
  onOpenResume: () => void;
  onToggleConsole: () => void;
}

export const Hotbar: React.FC<HotbarProps> = ({
  onOpenResume,
  onToggleConsole,
}) => {
  const [activeSlot, setActiveSlot] = useState<number>(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key >= '1' && e.key <= '8') {
        triggerSlot(parseInt(e.key, 10));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerSlot = (slotIndex: number) => {
    setActiveSlot(slotIndex);
    switch (slotIndex) {
      case 1: window.scrollTo({ top: 0, behavior: 'smooth' }); break;
      case 2: document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); break;
      case 3: document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }); break;
      case 4: document.querySelector('#builds')?.scrollIntoView({ behavior: 'smooth' }); break;
      case 5: document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }); break;
      case 6: document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); break;
      case 7: onOpenResume(); break;
      case 8: onToggleConsole(); break;
    }
  };

  const slots = [
    { num: 1, label: 'Spawn', icon: <PixelGrassBlock size={18} /> },
    { num: 2, label: 'Profile', icon: <User className="w-4 h-4 text-emerald-400" /> },
    { num: 3, label: 'Skills', icon: <Layers className="w-4 h-4 text-blue-400" /> },
    { num: 4, label: 'Builds', icon: <PixelPickaxe className="w-4 h-4" /> },
    { num: 5, label: 'Quests', icon: <Award className="w-4 h-4 text-yellow-400" /> },
    { num: 6, label: 'Beacon', icon: <PixelBeacon className="w-4 h-4" /> },
    { num: 7, label: 'Resume', icon: <FileText className="w-4 h-4 text-purple-400" /> },
    { num: 8, label: 'Console', icon: <Terminal className="w-4 h-4 text-slate-300" /> },
  ];

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 max-w-full px-2">
      <div className="mc-card p-1.5 sm:p-2 rounded bg-[#0f141d]/95 backdrop-blur-md border-2 border-[#2b3543] shadow-2xl flex items-center gap-1 sm:gap-1.5">
        {slots.map((slot) => {
          const isSelected = activeSlot === slot.num;
          return (
            <button
              key={slot.num}
              onClick={() => triggerSlot(slot.num)}
              className={`relative p-1.5 sm:p-2 rounded flex flex-col items-center justify-center transition-all cursor-pointer ${
                isSelected ? 'mc-slot-active scale-105' : 'mc-slot hover:scale-105'
              }`}
              title={`[${slot.num}] ${slot.label}`}
            >
              <div className="w-5 h-5 flex items-center justify-center">{slot.icon}</div>
              <span className="font-pixel text-[8px] text-slate-400 mt-0.5 hidden md:inline">{slot.num}</span>
              {isSelected && <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-400" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
