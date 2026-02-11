'use client';

import { Zap, Star, Trophy, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center overflow-x-hidden font-sans pb-32">
      
      {/* CONTAINER CENTRALIZADO */}
      <div className="w-full max-w-md flex flex-col items-center">
        
        {/* LOGO E HEADER */}
        <header className="mt-12 mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-900 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="/logo-cousins.png" 
              alt="Cousins Lounge Bar" 
              className="relative w-40 h-auto drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]"
            />
          </div>
        </header>

        {/* BANNER DINÂMICO */}
        <div className="px-6 w-full">
          <div className="relative aspect-[16/10] w-full rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1514525253361-bee8a197c9c0?w=800" 
              className="w-full h-full object-cover brightness-50"
              alt="Noite do Karaokê"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="bg-yellow-600 text-black text-[9px] font-black uppercase px-3 py-1 rounded-full tracking-widest">Amanhã - 20h</span>
              <h2 className="text-2xl font-black uppercase italic tracking-tighter mt-2 leading-none">Noite do<br/>Karaokê</h2>
            </div>
          </div>
        </div>

        {/* STATUS "AO VIVO" NO PALCO */}
        <div className="w-full px-6 mt-6">
           <div className="bg-zinc-900/40 border border-white/5 p-5 rounded-[2rem] flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <div className="relative">
                    <div className="w-3 h-3 bg-red-600 rounded-full animate-ping absolute"></div>
                    <div className="w-3 h-3 bg-red-600 rounded-full relative"></div>
                 </div>
                 <div>
                    <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest leading-none">No palco agora</p>
                    <p className="text-xs font-black uppercase italic text-white mt-1">JHONI ESTÁ CANTANDO!</p>
                 </div>
              </div>
              <div className="opacity-20 text-white italic font-black text-xl">((o))</div>
           </div>
        </div>

        {/* GRID DE AÇÕES RÁPIDAS (CHECK-IN + KARAOKÊ) */}
        <div className="flex gap-3 w-full px-6 mt-6">
          <button className="flex-[1.2] bg-yellow-600 hover:bg-yellow-500 text-black h-16 rounded-[1.8rem] flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(202,138,4,0.2)] active:scale-95 transition-all">
            <span className="text-lg">🔥</span>
            <span className="font-black uppercase italic text-xs tracking-tighter">Fazer Check-in</span>
          </button>

          <Link href="/karaoke" className="flex-1">
            <button className="w-full h-16 bg-zinc-900 border border-white/10 rounded-[1.8rem] flex items-center justify-center gap-2 hover:bg-zinc-800 active:scale-95 transition-all">
              <span className="text-lg">🎤</span>
              <span className="font-black uppercase italic text-xs tracking-tighter text-white">Cantar</span>
            </button>
          </Link>
        </div>

        {/* CARDS DE PONTUAÇÃO */}
        <div className="grid grid-cols-2 gap-3 w-full px-6 mt-6">
          <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-[2.2rem] flex flex-col items-center">
            <div className="flex items-center gap-2 text-yellow-500 mb-2">
              <Star size={12} fill="currentColor" />
              <span className="text-[9px] font-black uppercase tracking-widest">Saldo</span>
            </div>
            <p className="text-3xl font-black italic uppercase leading-none">120</p>
            <p className="text-[8px] font-bold text-zinc-500 uppercase mt-2">Coins Cousins</p>
          </div>

          <Link href="/ranking" className="bg-zinc-900/40 border border-white/5 p-6 rounded-[2.2rem] flex flex-col items-center active:scale-95 transition-all">
            <div className="flex items-center gap-2 text-zinc-500 mb-2">
              <Trophy size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest">Global</span>
            </div>
            <p className="text-3xl font-black italic uppercase leading-none text-white">#04</p>
            <p className="text-[8px] font-bold text-zinc-500 uppercase mt-2">No Ranking</p>
          </Link>
        </div>

        {/* NOTIFICAÇÃO DE GANHO */}
        <div className="w-full px-6 mt-6">
           <Link href="/social" className="bg-gradient-to-r from-zinc-900/50 to-black border border-white/5 p-4 rounded-[1.8rem] flex items-center justify-between group active:scale-95 transition-all">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-yellow-600/10 rounded-xl flex items-center justify-center text-yellow-500">
                    <Zap size={14} fill="currentColor" />
                 </div>
                 <p className="text-[10px] font-bold uppercase tracking-tight text-zinc-400">
                    Jhoni marcou o bar nos stories! <span className="text-yellow-500">+5 Coins</span>
                 </p>
              </div>
              <ChevronRight size={14} className="text-zinc-700 group-hover:text-yellow-500 transition-colors" />
           </Link>
        </div>

      </div>
    </main>
  );
}