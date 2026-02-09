'use client';

import { Star, Gift, ChevronRight, Zap, Award, History } from 'lucide-react';

export default function Fidelidade() {
  const recompensas = [
    { pontos: 50, item: "1 Chopp 300ml", icon: <Zap size={20} /> },
    { pontos: 150, item: "Petisco da Casa", icon: <Gift size={20} /> },
    { pontos: 500, item: "Combo Jack Daniels", icon: <Award size={20} /> },
  ];

  return (
    // Adicionei flex e items-center para manter tudo no meio da tela
    <main className="min-h-screen bg-black text-white p-6 pb-32 flex flex-col items-center overflow-x-hidden">
      
      {/* Container Centralizador (O segredo do alinhamento) */}
      <div className="w-full max-w-md">
        
        {/* HEADER */}
        <div className="mt-8 mb-10 text-center">
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">Clube Cousins</h1>
          <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-[0.3em] mt-2">Sua diversão vale prêmios</p>
        </div>

        {/* CARD DE PONTUAÇÃO - Agora com largura controlada */}
        <div className="bg-zinc-900/50 backdrop-blur-md border border-yellow-600/20 rounded-[3rem] p-8 mb-8 relative overflow-hidden shadow-[0_20px_50px_rgba(202,138,4,0.1)]">
          <div className="relative z-10">
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Saldo Atual</p>
            <div className="flex items-center gap-3">
              <Star className="text-yellow-500" size={32} fill="currentColor" />
              <span className="text-6xl font-black text-yellow-500 tracking-tighter leading-none">120</span>
              <span className="text-lg font-black text-yellow-500/40 self-end mb-1 italic">PTS</span>
            </div>
            
            {/* BARRA DE PROGRESSO */}
            <div className="mt-10">
              <div className="flex justify-between text-[9px] font-black uppercase tracking-[0.2em] mb-3 px-1">
                <span className="text-zinc-400">Próximo Resgate</span>
                <span className="text-yellow-500">Faltam 30 pts</span>
              </div>
              <div className="w-full h-3 bg-black/50 rounded-full overflow-hidden border border-white/5">
                <div 
                  className="h-full bg-yellow-600 rounded-full shadow-[0_0_15px_rgba(202,138,4,0.4)] transition-all duration-1000" 
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* LISTA DE RECOMPENSAS */}
        <div className="space-y-4">
          <h2 className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-500 mb-4 px-2">Troque seus pontos</h2>
          
          {recompensas.map((item, index) => (
            <div key={index} className="bg-zinc-900/40 border border-white/5 p-5 rounded-[2.5rem] flex items-center justify-between group active:scale-95 transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-600/10 p-3 rounded-2xl text-yellow-500 group-hover:bg-yellow-600 group-hover:text-black transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black uppercase italic text-sm tracking-tight">{item.item}</h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase">{item.pontos} Pontos</p>
                </div>
              </div>
              <div className="bg-zinc-800/50 p-2 rounded-full text-zinc-500 group-hover:text-white transition-colors">
                <ChevronRight size={18} />
              </div>
            </div>
          ))}
        </div>

        {/* HISTÓRICO */}
        <button className="w-full mt-10 flex items-center justify-center gap-2 text-zinc-600 hover:text-yellow-500 transition-colors py-4">
          <History size={16} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Ver histórico completo</span>
        </button>
      </div>

    </main>
  );
}