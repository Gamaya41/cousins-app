'use client';

import { Radio } from 'lucide-react';

export default function LiveStatus() {
  return (
    <div className="w-full bg-zinc-900/40 border border-white/5 p-6 rounded-[2.5rem] flex items-center justify-between animate-in fade-in duration-700">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-3 h-3 bg-red-600 rounded-full animate-ping opacity-75"></div>
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">No palco agora</p>
          <h4 className="text-sm font-black uppercase italic tracking-tighter text-white">
            Jhoni está cantando!
          </h4>
        </div>
      </div>
      <Radio className="text-zinc-800" size={24} />
    </div>
  );
}