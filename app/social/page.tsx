'use client';

import { Camera, X, Image as ImageIcon, Send, Instagram, Zap } from 'lucide-react';
import Link from 'next/link';

export default function NovoPost() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center p-6">
      <div className="w-full max-w-md">
        
        {/* HEADER */}
        <header className="flex items-center justify-between mb-10">
          <Link href="/social" className="text-zinc-500"><X size={24} /></Link>
          <h1 className="text-lg font-black uppercase italic tracking-tighter">Nova Publicação</h1>
          <button className="text-yellow-500 font-black uppercase text-xs tracking-widest">Postar</button>
        </header>

        {/* ÁREA DA FOTO */}
        <div className="w-full aspect-square bg-zinc-900 rounded-[3rem] border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-4 group hover:border-yellow-500/50 transition-all">
          <div className="w-20 h-20 bg-yellow-600/10 rounded-full flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
            <Camera size={40} />
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center px-10">
            Tire uma foto ou escolha da galeria
          </p>
        </div>

        {/* LEGENDA */}
        <div className="mt-8 space-y-4">
          <textarea 
            placeholder="Escreva algo sobre sua noite no Cousins..."
            className="w-full bg-transparent border-b border-white/5 py-4 outline-none text-sm font-medium resize-none h-24"
          />
          
          {/* REPOSTAR NO INSTA TOGGLE */}
          <div className="bg-zinc-900/40 p-5 rounded-[2rem] border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 to-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <Instagram size={20} />
              </div>
              <div>
                <p className="text-xs font-black uppercase italic tracking-tight text-white">Repostar no Insta</p>
                <p className="text-[9px] text-zinc-500 font-bold uppercase mt-1">+10 COINS EXTRA</p>
              </div>
            </div>
            <div className="w-12 h-6 bg-yellow-600 rounded-full relative p-1 flex items-center justify-end">
                <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
        </div>

        {/* INFO DE GANHO */}
        <div className="mt-10 flex items-center justify-center gap-2 text-yellow-500">
          <Zap size={16} fill="currentColor" />
          <p className="text-[10px] font-black uppercase tracking-[0.2em]">Você ganhará +15 Moedas Cousins</p>
        </div>
      </div>
    </main>
  );
}