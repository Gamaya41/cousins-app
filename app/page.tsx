'use client';

import { useState } from 'react';
import { 
  Flame, Mic2, Star, Trophy, ChevronRight, 
  Bell, Search, User, Crown, X, Zap, CheckCircle2, Music 
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [fezCheckIn, setFezCheckIn] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Notificações simuladas para o Centro de Alertas
  const notificacoes = [
    { id: 1, text: "Ganhou +5 Coins por Stories", time: "2 min", icon: <Zap size={14}/> },
    { id: 2, text: "Sua vez no Karaokê chegando!", time: "10 min", icon: <Mic2 size={14}/> }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center pb-32 font-sans overflow-x-hidden relative">
      
      {/* 1. MODAL DE BUSCA (CAMADA SUPERIOR) */}
      {showSearch && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] p-6 flex flex-col items-center animate-in fade-in zoom-in duration-300">
          <div className="w-full max-w-md">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-black uppercase italic tracking-tighter italic">Buscar</h3>
              <button onClick={() => setShowSearch(false)} className="p-4 bg-zinc-900 rounded-2xl text-white active:scale-90">
                <X size={24}/>
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600" size={20}/>
              <input 
                autoFocus
                type="text" 
                placeholder="Músicas ou Drinks..."
                className="w-full bg-zinc-900 border border-white/5 py-6 pl-16 pr-6 rounded-3xl outline-none focus:border-yellow-500/50 transition-all font-bold text-base text-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. MODAL DE NOTIFICAÇÕES (CAMADA SUPERIOR) */}
      {showNotifications && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] p-6 flex flex-col items-center animate-in slide-in-from-right duration-300">
          <div className="w-full max-w-md">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-black uppercase italic tracking-tighter italic">Alertas</h3>
              <button onClick={() => setShowNotifications(false)} className="p-4 bg-zinc-900 rounded-2xl text-white active:scale-90">
                <X size={24}/>
              </button>
            </div>
            <div className="space-y-4">
              {notificacoes.map((n) => (
                <div key={n.id} className="bg-zinc-900/50 border border-white/5 p-5 rounded-3xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-yellow-600/10 rounded-xl flex items-center justify-center text-yellow-500">{n.icon}</div>
                    <p className="text-[11px] font-bold uppercase tracking-tight text-zinc-300">{n.text}</p>
                  </div>
                  <span className="text-[9px] font-black text-zinc-700 italic">{n.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. HEADER COM STATUS DE PRESENÇA DINÂMICO */}
      <header className="w-full max-w-md px-6 pt-12 pb-8 flex items-center justify-between z-10">
        <Link href="/perfil" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl border-2 border-yellow-500 p-1 bg-zinc-900 shadow-lg">
              <div className="w-full h-full rounded-xl bg-zinc-800 flex items-center justify-center overflow-hidden border border-white/5">
                <User size={24} className="text-zinc-600" />
              </div>
            </div>
            <div className="absolute -top-1 -right-1 bg-yellow-600 rounded-lg p-1 border-2 border-[#050505] shadow-lg">
              <Crown size={10} className="text-black" fill="currentColor" />
            </div>
          </div>
          <div>
            <p className={`text-[10px] font-black uppercase tracking-[0.2em] leading-none transition-colors ${fezCheckIn ? 'text-green-500' : 'text-zinc-500'}`}>
              {fezCheckIn ? '• Online no Bar' : 'Offline'}
            </p>
            <h2 className="text-xl font-black uppercase italic text-white mt-1 tracking-tighter italic">Jhoni</h2>
          </div>
        </Link>
        <div className="flex gap-2">
          <button onClick={() => setShowSearch(true)} className="p-4 bg-zinc-900 border border-white/5 rounded-2xl text-zinc-400 active:scale-90">
            <Search size={22} />
          </button>
          <button onClick={() => setShowNotifications(true)} className="p-4 bg-zinc-900 border border-white/5 rounded-2xl text-zinc-400 active:scale-90 relative">
            <Bell size={22} />
            <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-600 rounded-full border-2 border-[#050505]"></div>
          </button>
        </div>
      </header>

      <div className="w-full max-w-md flex flex-col items-center z-10">
        
        {/* 4. BANNER DE EVENTO COM SUPORTE A VÍDEO */}
        <section className="w-full px-6 mb-8">
          <div className="relative w-full h-52 rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl group bg-zinc-900">
            <video 
              autoPlay loop muted playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            >
              <source src="/banner-karaoke.mp4" type="video/mp4" />
              <img src="/banner-karaoke.jpg" className="w-full h-full object-cover" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
            <div className="absolute bottom-8 left-8 z-20">
              <span className="bg-yellow-600 text-black text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block shadow-lg">HOJE ÀS 20H</span>
              <h2 className="text-3xl font-black uppercase italic leading-none tracking-tighter italic">NOITE DO<br/>KARAOKÊ</h2>
            </div>
          </div>
        </section>

        {/* 5. AÇÕES RÁPIDAS (CHECK-IN CONDICIONAL) */}
        <div className="w-full px-6 grid grid-cols-2 gap-4 mb-8">
          {!fezCheckIn ? (
            <button 
              onClick={() => { setFezCheckIn(true); alert("Check-in realizado! 🍻"); }}
              className="bg-yellow-600 h-28 rounded-[2.5rem] flex flex-col items-center justify-center gap-2 active:scale-95 shadow-xl shadow-yellow-900/20 group"
            >
              <Flame size={26} className="text-black group-hover:animate-bounce" fill="currentColor" />
              <span className="text-[10px] font-black uppercase italic tracking-widest text-black">Fazer Check-in</span>
            </button>
          ) : (
            <div className="bg-green-600/10 border border-green-600/20 h-28 rounded-[2.5rem] flex flex-col items-center justify-center gap-2 shadow-inner animate-in fade-in">
              <CheckCircle2 size={26} className="text-green-500" />
              <span className="text-[9px] font-black uppercase italic tracking-widest text-green-500">Confirmado</span>
            </div>
          )}
          
          <Link href="/karaoke" className="h-full">
            <button className="w-full h-28 bg-zinc-900/60 border border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center gap-2 active:scale-95 group">
              <Mic2 size={26} className="text-zinc-500 group-hover:text-white transition-colors" />
              <span className="text-[10px] font-black uppercase italic tracking-widest text-white">Cantar</span>
            </button>
          </Link>
        </div>

        {/* 6. DASHBOARD DE FIDELIDADE (SALDO VS XP) */}
        <div className="w-full px-6 grid grid-cols-2 gap-4 mb-10">
          <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-[2.5rem] flex flex-col items-center shadow-inner">
            <Star size={20} className="text-yellow-500 mb-2" fill="currentColor" />
            <span className="text-3xl font-black italic tracking-tighter leading-none">120</span>
            <span className="text-[9px] text-zinc-500 font-black uppercase mt-2 tracking-widest">Saldo Coins</span>
          </div>
          <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-[2.5rem] flex flex-col items-center shadow-inner text-center">
            <Trophy size={20} className="text-blue-500 mb-2" />
            <span className="text-3xl font-black italic tracking-tighter text-white leading-none">#04</span>
            <span className="text-[9px] text-zinc-500 font-black uppercase mt-2 tracking-widest">Global Rank</span>
          </div>
        </div>

      </div>
    </main>
  );
}