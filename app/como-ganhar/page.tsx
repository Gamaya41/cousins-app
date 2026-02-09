'use client';

import { Instagram, Mic2, Star, Users, Gift, Zap, Utensils } from 'lucide-react';
import Link from 'next/link';

export default function ComoGanhar() {
  const missoes = [
    { titulo: "Show no Karaokê", pontos: "+10 a +100", icon: <Mic2 className="text-yellow-500" />, cor: "bg-yellow-500/10" },
    { titulo: "Stories no Cousins", pontos: "+10 Coins", icon: <Instagram className="text-pink-500" />, cor: "bg-pink-500/10" },
    { titulo: "Consumo no Bar", pontos: "1pt = R$ 1,00", icon: <Utensils className="text-orange-500" />, cor: "bg-orange-500/10" },
    { titulo: "Trazer a Galera", pontos: "+50 Coins", icon: <Users className="text-blue-500" />, cor: "bg-blue-500/10" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center overflow-x-hidden font-sans">
      <div className="w-full max-w-md p-6 pb-32">
        <header className="w-full text-center mt-12 mb-10 px-6">
          <h1 className="text-3xl font-black uppercase italic tracking-tighter leading-none inline-block relative">
            Missões
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-600 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
          </h1>
          <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.3em] mt-5 italic">Como ganhar moedas</p>
        </header>

        <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-8 rounded-[3rem] mb-10 relative overflow-hidden shadow-2xl">
          <p className="text-[9px] font-black text-yellow-500 uppercase tracking-[0.2em] mb-2">Seu Progresso</p>
          <h2 className="text-2xl font-black italic uppercase leading-none">Rumo ao Top 3</h2>
          <div className="flex items-center gap-2 mt-4 text-zinc-400"><Zap size={14} className="text-yellow-500" /><span className="text-[10px] font-bold uppercase tracking-tight">Complete missões e suba no ranking!</span></div>
        </div>

        <section className="space-y-4">
          {missoes.map((m, i) => (
            <div key={i} className="bg-zinc-900/40 border border-white/5 p-5 rounded-[2.5rem] flex items-center gap-5 active:bg-zinc-800 transition-all">
              <div className={`w-14 h-14 rounded-2xl ${m.cor} flex items-center justify-center`}>{m.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between items-center"><h3 className="font-black uppercase italic text-sm tracking-tight">{m.titulo}</h3><span className="text-yellow-500 font-black text-xs italic">{m.pontos}</span></div>
              </div>
            </div>
          ))}
        </section>

        <div className="mt-12 bg-yellow-600 p-8 rounded-[3rem] text-center shadow-xl shadow-yellow-600/20">
          <Gift className="mx-auto mb-3 text-black" size={32} />
          <h4 className="text-black font-black uppercase italic text-lg leading-tight">Aniversário do Kael?</h4>
          <p className="text-black/70 text-[10px] font-black uppercase tracking-tight mt-1">Bônus triplo para sócios na <br/>semana de abril!</p>
        </div>
      </div>
    </main>
  );
}