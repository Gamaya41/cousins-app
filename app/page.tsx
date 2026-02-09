'use client';

import { Flame, Star, Trophy, Bell, Calendar } from 'lucide-react'; 
import Link from 'next/link';
import Image from 'next/image';
import LiveStatus from '../components/LiveStatus';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pb-32 flex flex-col items-center overflow-x-hidden">
      
      {/* 1. SEÇÃO DE BANNERS - MAIS ALTA E IMPACTANTE */}
      <section className="w-full max-w-md mt-6 px-6 relative">
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-500">Próximas Atrações</h2>
          <Calendar size={14} className="text-zinc-500" />
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-0 pb-12">
          {/* Banner 1: Karaokê */}
          <div className="min-w-full snap-center relative h-72 rounded-[3rem] overflow-hidden border border-white/5 flex-shrink-0">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
              <source src="/karaoke.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 p-10 h-full flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
              <p className="text-yellow-500 text-[10px] font-black uppercase tracking-widest">Amanhã • 20h</p>
              <h3 className="text-3xl font-black italic uppercase mt-1">Noite do Karaokê</h3>
            </div>
          </div>

          {/* Banner 2: Double Chopp */}
          <div className="min-w-full snap-center relative h-72 rounded-[3rem] overflow-hidden border border-white/5 flex-shrink-0">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
              <source src="/chopp.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 p-10 h-full flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
              <p className="text-yellow-500 text-[10px] font-black uppercase tracking-widest">Quarta • 18h</p>
              <h3 className="text-3xl font-black italic uppercase mt-1">Double Chopp</h3>
            </div>
          </div>
        </div>

        {/* 2. LOGO ESTRATÉGICA - TAMANHO GRANDE E POSIÇÃO DE IMPACTO */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 drop-shadow-[0_0_35px_rgba(234,179,8,0.6)]">
          <div className="relative w-[320px] h-[160px] hover:scale-105 transition-transform duration-500">
            <Image 
              src="/logo.png" 
              alt="Cousins Lounge Bar" 
              fill
              priority
              unoptimized
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 3. STATUS AO VIVO - ESPAÇAMENTO AJUSTADO */}
      <section className="mt-14 w-full max-w-md px-6">
        <LiveStatus />
      </section>

      {/* 4. DASHBOARD DE AÇÕES */}
      <div className="w-full max-w-md px-6 mt-10 space-y-6">
        <button className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-black py-6 rounded-[2.5rem] text-xl shadow-[0_15px_40px_rgba(202,138,4,0.3)] transition-all active:scale-95 flex items-center justify-center gap-3">
          <Flame size={28} fill="black" />
          FAZER CHECK-IN
        </button>

        <div className="grid grid-cols-2 gap-4">
          <Link href="/perfil" className="bg-zinc-900/60 border border-white/5 p-8 rounded-[3rem] text-center active:scale-95 transition-all">
            <p className="text-zinc-500 text-[10px] uppercase font-black tracking-widest mb-2">Meus Coins</p>
            <div className="flex items-center justify-center gap-2">
              <Star className="text-yellow-500" size={24} fill="currentColor" />
              <span className="text-4xl font-black text-yellow-500 tracking-tighter">120</span>
            </div>
          </Link>
          
          <Link href="/karaoke" className="bg-zinc-900/60 border border-white/5 p-8 rounded-[3rem] text-center active:scale-95 transition-all">
            <p className="text-zinc-500 text-[10px] uppercase font-black tracking-widest mb-2 text-center">Ranking</p>
            <div className="flex items-center justify-center gap-2">
              <Trophy className="text-white/20" size={24} />
              <span className="text-4xl font-black text-white tracking-tighter">#04</span>
            </div>
          </Link>
        </div>

        {/* Notificação Social */}
        <div className="bg-zinc-900/40 border border-white/5 p-5 rounded-[2rem] flex items-center gap-4">
          <Bell size={18} className="text-yellow-500" />
          <p className="text-[11px] text-zinc-400 font-bold uppercase tracking-tight">
            Jhoni marcou o bar nos Stories! <span className="text-yellow-500">+5 Coins</span>
          </p>
        </div>
      </div>
    </main>
  );
}