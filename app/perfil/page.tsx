'use client';

import { 
  LogOut, User, Settings, ShieldCheck, Star, Trophy, 
  Music, ChevronRight, History, Crown, Camera, EyeOff
} from 'lucide-react';
import Link from 'next/link';

export default function Perfil() {
  const historicoKaraoke = [
    { musica: "Tim Maia - Descobridor", nota: "9.5", data: "Ontem" },
    { musica: "Legião - Tempo Perdido", nota: "8.8", data: "05/02" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center pb-32 font-sans">
      
      {/* 1. HEADER: CARD DO SÓCIO */}
      <div className="w-full max-w-md px-6 pt-16 mb-8">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[3.5rem] p-8 w-full relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full border-2 border-yellow-500 p-1">
                <div className="w-full h-full rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                  <User size={40} className="text-zinc-600" />
                </div>
              </div>
              <button className="absolute bottom-0 right-0 bg-yellow-600 p-2 rounded-xl border-4 border-black active:scale-90 transition-all">
                <Camera size={14} className="text-black" />
              </button>
            </div>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter">Jhoni</h2>
            <div className="flex items-center gap-2 mt-2">
              <Crown size={12} className="text-yellow-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500/80 italic">Sócio Elite Cousins</span>
            </div>
          </div>
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-600/5 blur-[60px] rounded-full"></div>
        </div>
      </div>

      {/* 2. STATS DE FIDELIDADE */}
      <div className="w-full max-w-md px-6 grid grid-cols-2 gap-4 mb-10">
        <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-[2.5rem] flex flex-col items-center shadow-lg">
          <Star size={18} className="text-yellow-500 mb-2" fill="currentColor" />
          <span className="text-3xl font-black italic tracking-tighter">120</span>
          <span className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mt-1">Saldo Coins</span>
        </div>
        <Link href="/ranking" className="bg-zinc-900/40 border border-white/5 p-6 rounded-[2.5rem] flex flex-col items-center active:scale-95 transition-all">
          <Trophy size={18} className="text-zinc-500 mb-2" />
          <span className="text-3xl font-black italic tracking-tighter text-white">#04</span>
          <span className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mt-1">Ranking</span>
        </Link>
      </div>

      {/* 3. VOICE HISTORY */}
      <section className="w-full max-w-md px-6 mb-10">
        <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-500 italic px-4 mb-4">Voice History</h3>
        <div className="space-y-3">
          {historicoKaraoke.map((m, i) => (
            <div key={i} className="bg-zinc-900/20 border border-white/5 p-5 rounded-[2.2rem] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800/50 rounded-2xl flex items-center justify-center text-yellow-500">
                  <Music size={20} />
                </div>
                <div>
                  <p className="text-[12px] font-black uppercase italic tracking-tight">{m.musica}</p>
                  <p className="text-[9px] text-zinc-600 font-bold uppercase mt-1">Nota: {m.nota}</p>
                </div>
              </div>
              <span className="text-[9px] font-black text-zinc-700 uppercase italic">{m.data}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. AJUSTES (LINK DO PERFIL SOCIAL ATIVADO) */}
      <section className="w-full max-w-md px-6 space-y-3">
        
        {/* BOTÃO CONECTADO À ROTA SOCIAL */}
        <Link href="/perfil/social" className="block w-full">
          <button className="w-full bg-zinc-900/30 border border-white/5 p-6 rounded-[2.2rem] flex items-center justify-between group active:scale-95 transition-all">
            <div className="flex items-center gap-4 text-zinc-400 group-hover:text-white transition-colors">
              <Settings size={22} />
              <span className="text-[11px] font-black uppercase tracking-widest italic leading-none">Perfil Social</span>
            </div>
            <ChevronRight size={18} className="text-zinc-800 group-hover:text-yellow-500" />
          </button>
        </Link>

       {/* BOTÃO DE PRIVACIDADE CONECTADO */}
<Link href="/perfil/privacidade" className="block w-full">
  <button className="w-full bg-zinc-900/30 border border-white/5 p-6 rounded-[2.2rem] flex items-center justify-between group active:scale-95 transition-all">
    <div className="flex items-center gap-4 text-zinc-400 group-hover:text-white transition-colors">
      <ShieldCheck size={22} />
      <span className="text-[11px] font-black uppercase tracking-widest italic leading-none">Privacidade</span>
    </div>
    <ChevronRight size={18} className="text-zinc-800 group-hover:text-yellow-500" />
  </button>
</Link>


        {/* LOGOUT */}
        <button 
          onClick={() => window.location.href = '/login'}
          className="w-full bg-red-950/10 border border-red-900/20 p-7 rounded-[2.5rem] flex items-center justify-between group active:scale-95 transition-all mt-6 shadow-lg shadow-red-900/5"
        >
          <div className="flex items-center gap-4 text-red-600">
            <LogOut size={22} />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] italic">Encerrar Sessão</span>
          </div>
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
        </button>
      </section>

    </main>
  );
}