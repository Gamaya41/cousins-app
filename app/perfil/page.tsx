'use client';

import { 
  LogOut, User, Settings, Star, Trophy, 
  Music, ChevronRight, Crown, Camera, ShieldCheck, History
} from 'lucide-react';
import Link from 'next/link';

export default function Perfil() {
  // Restaurando sua lista de músicas do Voice History
  const musicas = [
    { nome: "Tim Maia - Descobridor", nota: "9.5", data: "Ontem" },
    { nome: "Legião - Tempo Perdido", nota: "8.8", data: "05/02" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center pb-32 font-sans overflow-x-hidden">
      
      {/* Container Centralizado para monitor e celular */}
      <div className="w-full max-w-md p-6 flex flex-col items-center">
        
        {/* IDENTIFICAÇÃO VIP */}
        <div className="mt-12 mb-8 flex flex-col items-center text-center">
          <div className="relative mb-4 group">
            <div className="w-28 h-28 rounded-full border-2 border-yellow-500 p-1 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
                <User size={48} className="text-zinc-700" />
              </div>
            </div>
            <button className="absolute bottom-0 right-0 bg-yellow-600 p-2.5 rounded-2xl border-4 border-black active:scale-90 transition-all">
              <Camera size={16} className="text-black" />
            </button>
          </div>
          <h2 className="text-3xl font-black uppercase italic tracking-tighter">Jhoni</h2>
          <div className="flex items-center gap-2 mt-2 text-yellow-500">
            <Crown size={14} fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] italic text-yellow-500/80">Sócio Elite Cousins</span>
          </div>
        </div>

        {/* ECONOMIA SEPARADA: COINS VS XP */}
        <div className="w-full grid grid-cols-2 gap-4 mb-10">
          <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-[2.5rem] flex flex-col items-center">
            <Star size={18} className="text-yellow-500 mb-2" fill="currentColor" />
            <span className="text-3xl font-black italic tracking-tighter leading-none">120</span>
            <span className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mt-2 text-center">Saldo Coins</span>
          </div>

          <Link href="/ranking" className="bg-zinc-900/40 border border-white/5 p-6 rounded-[2.5rem] flex flex-col items-center active:scale-95 transition-all">
            <Trophy size={18} className="text-blue-500 mb-2" />
            <span className="text-3xl font-black italic tracking-tighter text-white leading-none">2.450</span>
            <span className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mt-2 text-center">Pontos XP</span>
          </Link>
        </div>

        {/* VOICE HISTORY (RESTAURADO) */}
        <section className="w-full mb-10">
          <div className="flex items-center justify-between px-4 mb-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 italic leading-none text-center">Voice History</h3>
            <History size={14} className="text-zinc-800" />
          </div>
          <div className="space-y-3">
            {musicas.map((m, i) => (
              <div key={i} className="bg-zinc-900/20 border border-white/5 p-5 rounded-[2.2rem] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-800/50 rounded-xl flex items-center justify-center text-yellow-500">
                    <Music size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase italic text-white tracking-tight leading-none">{m.nome}</p>
                    <p className="text-[8px] text-zinc-600 font-bold uppercase mt-1.5">Score: {m.nota}</p>
                  </div>
                </div>
                <span className="text-[8px] font-black text-zinc-700 uppercase italic">{m.data}</span>
              </div>
            ))}
          </div>
        </section>

        {/* MENU DE OPÇÕES */}
        <div className="w-full space-y-3">
          <Link href="/perfil/social" className="block w-full">
            <button className="w-full bg-zinc-900/30 border border-white/5 p-6 rounded-[2.2rem] flex items-center justify-between group active:scale-95 transition-all">
              <div className="flex items-center gap-4 text-zinc-400 group-hover:text-white transition-colors">
                <Settings size={22} />
                <span className="text-[11px] font-black uppercase tracking-widest italic leading-none">Perfil Social</span>
              </div>
              <ChevronRight size={18} className="text-zinc-800" />
            </button>
          </Link>

          <Link href="/perfil/privacidade" className="block w-full">
            <button className="w-full bg-zinc-900/30 border border-white/5 p-6 rounded-[2.2rem] flex items-center justify-between group active:scale-95 transition-all">
              <div className="flex items-center gap-4 text-zinc-400 group-hover:text-white transition-colors">
                <ShieldCheck size={22} />
                <span className="text-[11px] font-black uppercase tracking-widest italic leading-none">Privacidade</span>
              </div>
              <ChevronRight size={18} className="text-zinc-800" />
            </button>
          </Link>

          <button 
            onClick={() => window.location.href = '/login'}
            className="w-full bg-red-950/10 border border-red-900/20 p-7 rounded-[2.5rem] flex items-center justify-between mt-6 active:scale-95 transition-all"
          >
            <div className="flex items-center gap-4 text-red-600">
              <LogOut size={22} />
              <span className="text-[11px] font-black uppercase tracking-widest italic leading-none">Encerrar Sessão</span>
            </div>
          </button>
        </div>

      </div>
    </main>
  );
}