'use client';

import { useState } from 'react';
import { X, Instagram, Zap, Camera, Sparkles } from 'lucide-react';
import Link from 'next/link';

const FILTROS = [
  { id: 'normal', label: 'Original', filter: 'none' },
  { id: 'gold', label: 'Cousins Gold', filter: 'sepia(0.3) saturate(1.8) brightness(1.1)' },
  { id: 'neon', label: 'Cyber', filter: 'hue-rotate(290deg) saturate(1.5)' },
  { id: 'vivid', label: 'Noite VIVA', filter: 'saturate(2.2) contrast(1.1)' }
];

export default function NovoPost() {
  const [filtro, setFiltro] = useState('normal');

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6 pb-32">
      <div className="w-full max-w-md">
        
        <header className="flex items-center justify-between mb-10">
          <Link href="/social" className="text-zinc-500 hover:text-white"><X size={24} /></Link>
          <h1 className="text-lg font-black uppercase italic tracking-tighter">Novo Post</h1>
          <button className="bg-yellow-600 text-black px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-widest active:scale-95 transition-all">
            Publicar
          </button>
        </header>

        {/* PREVIEW DA FOTO */}
        <div className="w-full aspect-square rounded-[3rem] overflow-hidden border-2 border-white/5 shadow-2xl relative">
          <img 
            src="https://images.unsplash.com/photo-1514525253361-bee8a197c9c0?w=800" 
            className="w-full h-full object-cover transition-all duration-300"
            style={{ filter: FILTROS.find(f => f.id === filtro)?.filter }}
            alt="Preview"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 border border-white/10">
            <Sparkles size={12} className="text-yellow-500" />
            <span className="text-[8px] font-black uppercase tracking-widest text-yellow-500">Filtro Ativo</span>
          </div>
        </div>

        {/* SELETOR DE FILTROS */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-8">
          {FILTROS.map((f) => (
            <button key={f.id} onClick={() => setFiltro(f.id)} className="flex flex-col items-center gap-2 shrink-0">
              <div 
                className={`w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all ${filtro === f.id ? 'border-yellow-500 scale-110 shadow-lg shadow-yellow-500/20' : 'border-transparent opacity-40'}`}
                style={{ filter: f.filter }}
              >
                <img src="https://images.unsplash.com/photo-1514525253361-bee8a197c9c0?w=100" className="w-full h-full object-cover" alt="Thumb" />
              </div>
              <span className={`text-[8px] font-black uppercase ${filtro === f.id ? 'text-yellow-500' : 'text-zinc-600'}`}>{f.label}</span>
            </button>
          ))}
        </div>

        {/* OPÇÃO DE REPOST */}
        <div className="bg-zinc-900/40 p-6 rounded-[2.5rem] border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
              <Instagram size={22} />
            </div>
            <div>
              <p className="text-xs font-black uppercase italic text-white leading-none">Repostar no Insta</p>
              <p className="text-[9px] text-yellow-500 font-black uppercase mt-2 tracking-widest">+10 COINS BÔNUS</p>
            </div>
          </div>
          <div className="w-14 h-7 bg-yellow-600 rounded-full flex items-center justify-end px-1 shadow-inner shadow-black/40 cursor-pointer">
            <div className="w-5 h-5 bg-white rounded-full shadow-md" />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-zinc-600">
          <Zap size={14} fill="currentColor" />
          <p className="text-[9px] font-black uppercase tracking-[0.2em]">Total de ganho: +15 Moedas Cousins</p>
        </div>
      </div>
    </main>
  );
}