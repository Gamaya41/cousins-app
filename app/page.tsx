'use client';

import { Flame, Star, Trophy, Calendar, Zap, ChevronRight, User } from 'lucide-react'; 
import Link from 'next/link';
import Image from 'next/image';
import LiveStatus from './components/LiveStatus'; 

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pb-32 flex flex-col items-center overflow-x-hidden font-sans">
      
      {/* 1. HEADER / LOGO - ESTILO PREMIUM */}
      <header className="w-full pt-10 pb-6 flex flex-col items-center relative overflow-hidden">
        {/* Glow de fundo para destacar a logo */}
        <div className="absolute top-[-50px] w-[300px] h-[300px] bg-yellow-600/10 blur-[100px] rounded-full"></div>
        
        <div className="relative w-[280px] h-[140px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <Image 
            src="/logo.png" 
            alt="Cousins Lounge Bar" 
            fill
            priority
            unoptimized
            className="object-contain"
          />
        </div>
      </header>

      {/* 2. BANNER DE ATRAÇÃO - ESTILO CINEMATOGRÁFICO */}
      <section className="w-full max-w-md px-5 mt-4">
        <div className="relative h-64 rounded-[2.5rem] overflow-hidden group shadow-2xl">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70">
            <source src="/karaoke.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          
          <div className="relative h-full p-8 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-yellow-600 text-black text-[9px] font-black uppercase px-2 py-1 rounded-md tracking-tighter">Amanhã • 20h</span>
            </div>
            <h3 className="text-3xl font-black italic uppercase tracking-tighter leading-none mb-2">Noite do <br/>Karaokê</h3>
            <div className="h-1 w-12 bg-yellow-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 3. STATUS AO VIVO - INTEGRADO AO DESIGN */}
      <section className="mt-8 w-full max-w-md px-5">
        <LiveStatus />
      </section>

      {/* 4. DASHBOARD DE AÇÕES & STATUS */}
      <div className="w-full max-w-md px-5 mt-8 space-y-4">
        
        {/* BOTÃO CHECK-IN - DESIGN BOTÃO DE OURO */}
        <Link href="/como-ganhar" className="block relative group">
          <div className="absolute inset-0 bg-yellow-600 rounded-[2rem] blur-md opacity-20 group-active:opacity-40 transition-opacity"></div>
          <button className="relative w-full bg-gradient-to-b from-yellow-500 to-yellow-700 text-black font-black py-6 rounded-[2rem] text-xl flex items-center justify-center gap-3 active:scale-[0.98] transition-all shadow-xl">
            <Flame size={24} fill="black" />
            <span className="tracking-tighter uppercase italic">Fazer Check-in</span>
          </button>
        </Link>

        {/* CARDS DE STATUS - GRID MODERNO */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/perfil" className="bg-zinc-900/40 border border-white/5 p-6 rounded-[2.5rem] flex flex-col items-center justify-center backdrop-blur-sm active:bg-zinc-800 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <Star className="text-yellow-500" size={16} fill="currentColor" />
              <span className="text-zinc-500 text-[9px] uppercase font-black tracking-widest">Saldo</span>
            </div>
            <span className="text-4xl font-black text-white tracking-tighter">120</span>
            <span className="text-[8px] text-zinc-600 font-bold uppercase mt-1 tracking-tighter italic">Coins Cousins</span>
          </Link>
          
          <Link href="/ranking" className="bg-zinc-900/40 border border-white/5 p-6 rounded-[2.5rem] flex flex-col items-center justify-center backdrop-blur-sm active:bg-zinc-800 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="text-zinc-700" size={16} />
              <span className="text-zinc-500 text-[9px] uppercase font-black tracking-widest">Global</span>
            </div>
            <span className="text-4xl font-black text-white tracking-tighter">#04</span>
            <span className="text-[8px] text-zinc-600 font-bold uppercase mt-1 tracking-tighter italic">No Ranking</span>
          </Link>
        </div>

        {/* FEED SOCIAL / NOTIFICAÇÃO - TIPO FLOATING NOTIFICATION */}
        <Link href="/como-ganhar" className="block">
          <div className="bg-zinc-900/30 border border-white/5 p-4 rounded-2xl flex items-center justify-between group active:bg-zinc-900/60 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-600/10 flex items-center justify-center">
                <Zap size={14} className="text-yellow-500" />
              </div>
              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tight">
                Jhoni marcou o bar nos Stories! <span className="text-yellow-500 font-black">+5 COINS</span>
              </p>
            </div>
            <ChevronRight size={14} className="text-zinc-800 group-hover:text-zinc-500 transition-colors" />
          </div>
        </Link>
      </div>

    </main>
  );
}