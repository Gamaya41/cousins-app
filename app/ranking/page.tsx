'use client';

import { Trophy, Medal, ArrowUp, Star } from 'lucide-react';
import Link from 'next/link';

export default function Ranking() {
  const lideres = [
    { nome: "Marcos S.", pontos: 2450, rank: 1, isMe: false },
    { nome: "Elisa M.", pontos: 2100, rank: 2, isMe: false },
    { nome: "Lucas G.", pontos: 1850, rank: 3, isMe: false },
    { nome: "Jhoni", pontos: 1200, rank: 4, isMe: true },
    { nome: "Ricardo P.", pontos: 980, rank: 5, isMe: false },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center overflow-x-hidden font-sans">
      <div className="w-full max-w-md flex flex-col items-center px-6">
        
        {/* TÍTULO LIMPO E CENTRALIZADO */}
        <header className="w-full text-center mt-12 mb-10">
          <h1 className="text-3xl font-black uppercase italic tracking-tighter leading-none inline-block relative">
            Ranking Global
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-600 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
          </h1>
          <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.4em] mt-5 italic">
            Elite Cousins Bar
          </p>
        </header>

        {/* PÓDIO */}
        <section className="w-full mb-14">
          <div className="flex justify-center items-end gap-2 h-52 relative">
            <div className="absolute top-10 w-32 h-32 bg-yellow-600/10 blur-[50px] rounded-full -z-10"></div>
            {/* ... (Estrutura do pódio mantida conforme a anterior) */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-14 h-14 rounded-full bg-zinc-900 border-2 border-zinc-500 mb-2 flex items-center justify-center text-zinc-500 font-black italic text-xs uppercase">#02</div>
              <div className="w-full h-20 bg-gradient-to-b from-zinc-800 to-transparent border-t-2 border-zinc-500 rounded-t-3xl flex flex-col items-center pt-3">
                 <span className="text-[8px] font-black italic text-zinc-400 uppercase tracking-widest">Prata</span>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1 scale-110 relative -top-4">
              <Trophy className="text-yellow-500 mb-3 animate-pulse" size={28} />
              <div className="w-16 h-16 rounded-full bg-zinc-900 border-2 border-yellow-500 mb-2 shadow-[0_0_30px_rgba(234,179,8,0.2)] flex items-center justify-center text-yellow-500 font-black italic">#01</div>
              <div className="w-full h-32 bg-gradient-to-b from-yellow-900/40 to-transparent border-t-2 border-yellow-500 rounded-t-3xl flex flex-col items-center pt-3">
                 <span className="text-[10px] font-black italic text-yellow-500 uppercase tracking-widest">Ouro</span>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-14 h-14 rounded-full bg-zinc-900 border-2 border-orange-700 mb-2 flex items-center justify-center text-orange-700 font-black italic text-xs uppercase">#03</div>
              <div className="w-full h-16 bg-gradient-to-b from-orange-900/20 to-transparent border-t-2 border-orange-700 rounded-t-3xl flex flex-col items-center pt-3">
                 <span className="text-[8px] font-black italic text-orange-700 uppercase tracking-widest">Bronze</span>
              </div>
            </div>
          </div>
        </section>

        {/* LISTA DE SÓCIOS */}
        <section className="w-full space-y-3 px-2">
          {lideres.map((socio) => (
            <div key={socio.rank} className={`p-5 rounded-[2.5rem] border flex items-center justify-between transition-all ${socio.isMe ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 border-transparent shadow-xl scale-[1.03]' : 'bg-zinc-900/40 border-white/5'}`}>
              <div className="flex items-center gap-4">
                <span className={`font-black italic text-lg ${socio.isMe ? 'text-black' : 'text-zinc-600'}`}>#{socio.rank < 10 ? `0${socio.rank}` : socio.rank}</span>
                <div>
                  <p className={`font-black uppercase italic text-sm tracking-tight ${socio.isMe ? 'text-black' : 'text-white'}`}>{socio.nome}</p>
                  <div className="flex items-center gap-1">
                     <Star size={10} fill={socio.isMe ? 'black' : '#eab308'} className={socio.isMe ? 'text-black' : 'text-yellow-500'} />
                     <p className={`text-[9px] font-bold uppercase ${socio.isMe ? 'text-black/60' : 'text-zinc-500'}`}>{socio.pontos} PONTOS</p>
                  </div>
                </div>
              </div>
              {socio.isMe && <div className="bg-black/10 p-2 rounded-full"><ArrowUp size={16} className="text-black animate-bounce" /></div>}
            </div>
          ))}
        </section>

        <footer className="mt-12 w-full text-center pb-24">
          <p className="text-[9px] font-black uppercase text-zinc-600 mb-6 tracking-[0.2em] italic">Faltam 650 pontos para o Top 3!</p>
          <Link href="/como-ganhar" className="block w-full">
            <button className="w-full bg-zinc-900 border border-white/5 py-5 rounded-[2rem] font-black uppercase italic text-[11px] tracking-widest active:scale-95 transition-all text-zinc-400">Como ganhar mais moedas?</button>
          </Link>
        </footer>
      </div>
    </main>
  );
}