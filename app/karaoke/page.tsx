'use client';

import { Mic2, Star, Users, Music, ChevronLeft, Send, Zap } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function KaraokeTheVoice() {
  const [nota, setNota] = useState(0);
  const [votou, setVotou] = useState(false);

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center pb-32">
      <div className="w-full max-w-md p-6">
        
        {/* HEADER COM BOTÃO DE VOLTAR */}
        <header className="mt-8 mb-10 flex items-center gap-4">
          <Link href="/" className="p-3 bg-zinc-900/50 rounded-full border border-white/5 text-zinc-400 active:scale-95">
            <ChevronLeft size={20} />
          </Link>
          <div>
            <h1 className="text-xl font-black uppercase italic tracking-tighter leading-none">The Voice Cousins</h1>
            <p className="text-[9px] font-bold text-yellow-500 uppercase tracking-[0.2em] mt-1">Sua voz, seu prêmio</p>
          </div>
        </header>

        {/* CARD "NO PALCO AGORA" */}
        <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-yellow-500/20 p-8 rounded-[3rem] mb-8 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(202,138,4,0.4)]">
              <Mic2 size={40} className="text-black" />
            </div>
            <p className="text-[10px] font-black text-yellow-500 uppercase tracking-widest mb-1">Cantando Agora</p>
            <h2 className="text-2xl font-black uppercase italic tracking-tight">Jhoni</h2>
            <div className="flex items-center gap-2 mt-2 text-zinc-400">
              <Music size={14} />
              <p className="text-xs font-bold uppercase tracking-tighter">Tim Maia - Descobridor dos Sete Mares</p>
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-5">
            <Mic2 size={150} fill="white" />
          </div>
        </div>

        {/* SISTEMA DE VOTAÇÃO (THE VOICE) */}
        <section className="bg-zinc-900/40 border border-white/5 rounded-[3rem] p-8 text-center">
          <h3 className="font-black uppercase italic text-sm tracking-widest mb-6">Dê sua nota para o Jhoni</h3>
          
          <div className="flex justify-between items-center mb-8 px-2">
            {[2, 4, 6, 8, 10].map((valor) => (
              <button 
                key={valor}
                onClick={() => setNota(valor)}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black transition-all ${
                  nota === valor ? 'bg-yellow-600 text-black scale-110' : 'bg-zinc-800 text-zinc-500'
                }`}
              >
                {valor}
              </button>
            ))}
          </div>

          <button 
            disabled={nota === 0 || votou}
            onClick={() => setVotou(true)}
            className={`w-full py-5 rounded-[2rem] font-black uppercase italic text-xs tracking-[0.2em] transition-all ${
              votou ? 'bg-zinc-800 text-zinc-600' : 'bg-white text-black active:scale-95'
            }`}
          >
            {votou ? "Voto Computado ✓" : "Confirmar Nota"}
          </button>
        </section>

        {/* BALANÇO DE VOTOS EM TEMPO REAL */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-zinc-900/40 p-5 rounded-[2.5rem] border border-white/5 flex flex-col items-center">
            <Users size={16} className="text-zinc-600 mb-2" />
            <p className="text-2xl font-black italic">42</p>
            <p className="text-[8px] font-bold text-zinc-500 uppercase">Avaliadores</p>
          </div>
          <div className="bg-zinc-900/40 p-5 rounded-[2.5rem] border border-white/5 flex flex-col items-center">
            <Star size={16} className="text-yellow-500 mb-2" fill="currentColor" />
            <p className="text-2xl font-black italic text-yellow-500">8.5</p>
            <p className="text-[8px] font-bold text-zinc-500 uppercase">Média Global</p>
          </div>
        </div>

        {/* INFO DE GANHO */}
        <div className="mt-10 flex items-center justify-center gap-2 text-zinc-600">
          <Zap size={14} fill="currentColor" />
          <p className="text-[9px] font-black uppercase tracking-[0.2em]">O cantor ganha coins baseados na média final</p>
        </div>

      </div>
    </main>
  );
}