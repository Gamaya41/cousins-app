'use client';

import { 
  User, ShieldCheck, Coins, QrCode, MessageSquareHeart, 
  ChevronRight, Mic2, History, Star as StarIcon 
} from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  // Dados do Jhoni integrados com o sistema de Ranking e Karaokê
  const user = {
    name: "Jhoni",
    memberSince: "Jan 2026",
    coins: 120,
    level: 5,
    rank: "#04"
  };

  const historicoKaraoke = [
    { musica: "Boate Azul", nota: 98, data: "Hoje" },
    { musica: "Evidências", nota: 100, data: "Ontem" },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6 pt-24 pb-32 flex flex-col items-center overflow-x-hidden">
      
      {/* 1. Header do Perfil - Identidade VIP */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative">
          <div className="w-24 h-24 bg-zinc-900 rounded-full border-2 border-yellow-500 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(234,179,8,0.2)]">
            <User size={48} className="text-zinc-700" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-black p-1.5 rounded-full shadow-lg">
            <ShieldCheck size={18} fill="black" />
          </div>
        </div>
        <h2 className="mt-4 text-3xl font-black italic uppercase tracking-tighter">{user.name}</h2>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-yellow-500 text-[10px] font-black uppercase tracking-widest">Sócio Cousins</span>
          <span className="text-zinc-600 text-[10px] font-bold uppercase">• Desde {user.memberSince}</span>
        </div>
      </div>

      {/* 2. Grid de Stats Rápidos */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-6">
        <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-[2.5rem] flex flex-col items-center relative overflow-hidden group">
          <Coins className="text-yellow-500 mb-1" size={20} />
          <span className="text-2xl font-black text-yellow-500 tracking-tighter">{user.coins}</span>
          <span className="text-[9px] text-zinc-500 uppercase font-black tracking-widest">Saldo Coins</span>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-[2.5rem] flex flex-col items-center">
          <TrendingUpIcon className="text-white/40 mb-1" size={20} />
          <span className="text-2xl font-black text-white tracking-tighter">{user.rank}</span>
          <span className="text-[9px] text-zinc-500 uppercase font-black tracking-widest">Ranking</span>
        </div>
      </div>

      {/* 3. Barra de Progresso de Recompensa (O que faltava) */}
      <div className="w-full max-w-md bg-zinc-900/30 border border-white/5 p-6 rounded-[2.5rem] mb-6">
        <div className="flex justify-between text-[9px] font-black uppercase tracking-widest mb-3">
          <span className="text-zinc-400">Próximo Chopp</span>
          <span className="text-yellow-500">70% Completo</span>
        </div>
        <div className="w-full h-2 bg-black rounded-full overflow-hidden border border-white/5">
          <div className="h-full bg-yellow-600 w-[70%] rounded-full shadow-[0_0_10px_rgba(202,138,4,0.3)]"></div>
        </div>
      </div>

      {/* 4. Seção de Resgate (QR Code) */}
      <div className="w-full max-w-md bg-yellow-600 rounded-[2.5rem] p-6 mb-8 flex items-center justify-between shadow-xl shadow-yellow-600/10 active:scale-[0.98] transition-all cursor-pointer">
        <div className="flex flex-col">
          <span className="text-black font-black text-xl italic leading-none">VALIDAR RECOMPENSA</span>
          <span className="text-black/70 text-[10px] font-black mt-1 uppercase tracking-tight">Mostre ao garçom no balcão</span>
        </div>
        <QrCode size={44} className="text-black" />
      </div>

      {/* 5. Histórico de Karaokê (Suas Notas Reais) */}
      <div className="w-full max-w-md space-y-4 mb-8">
        <div className="flex items-center justify-between px-4">
          <h3 className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-500">Últimas Notas</h3>
          <History size={14} className="text-zinc-700" />
        </div>
        {historicoKaraoke.map((item, index) => (
          <div key={index} className="bg-zinc-900/40 border border-white/5 p-5 rounded-[2.5rem] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Mic2 size={18} className="text-yellow-600" />
              <div>
                <p className="font-black uppercase italic text-sm leading-none">{item.musica}</p>
                <p className="text-[9px] text-zinc-600 font-bold mt-1 uppercase">{item.data}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xl font-black text-white leading-none">{item.nota}</span>
              <span className="text-[8px] font-black text-zinc-700 italic">PTS</span>
            </div>
          </div>
        ))}
      </div>

      {/* 6. Menu de Opções Adicionais */}
      <div className="w-full max-w-md space-y-3">
        <Link href="/garcons" className="block">
          <MenuOption 
            icon={<MessageSquareHeart className="text-pink-500" />} 
            title="Avaliar Atendimento" 
            description="Elogie seu garçom favorito" 
          />
        </Link>
        <MenuOption 
          icon={<Star className="text-yellow-500" fill="currentColor" />} 
          title="Histórico de Moedas" 
          description="Veja como você pontuou" 
        />
      </div>

    </main>
  );
}

// Subcomponentes auxiliares
function MenuOption({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex items-center justify-between bg-zinc-900/60 border border-zinc-800 p-5 rounded-[2rem] hover:bg-zinc-800 transition-all cursor-pointer group active:scale-95">
      <div className="flex items-center gap-4">
        <div className="p-2.5 bg-black rounded-2xl border border-white/5">
          {icon}
        </div>
        <div>
          <p className="font-black uppercase italic text-sm leading-none">{title}</p>
          <p className="text-[9px] text-zinc-500 mt-1 uppercase font-black">{description}</p>
        </div>
      </div>
      <ChevronRight size={18} className="text-zinc-800 group-hover:text-yellow-500 transition-colors" />
    </div>
  );
}

function Star({ className, size, fill }: { className?: string, size?: number, fill?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function TrendingUpIcon({ className, size }: { className?: string, size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  );
}