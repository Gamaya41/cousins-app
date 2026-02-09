'use client';

import { useState } from 'react';
import { 
  User, Lock, Phone, CreditCard, ChevronLeft, 
  CheckCircle2, Instagram, ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

export default function Cadastro() {
  const [etapa, setEtapa] = useState('dados'); 

  const handleFinalizar = () => {
    // Aqui simulamos a gravação no banco de dados
    setEtapa('sucesso');
  };

  if (etapa === 'sucesso') {
    return (
      <main className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center animate-in fade-in duration-500">
        <div className="w-full max-w-md bg-zinc-900/50 border border-yellow-600/20 p-10 rounded-[3rem] text-center shadow-[0_0_50px_rgba(234,179,8,0.1)]">
          <div className="bg-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(202,138,4,0.4)]">
            <CheckCircle2 size={40} className="text-black" />
          </div>
          <h1 className="text-3xl font-black uppercase italic tracking-tighter mb-4">Bem-vindo, Jhoni!</h1>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest leading-relaxed mb-8">
            Seu cadastro foi concluído. <br /> Você já ganhou **10 coins** de bônus!
          </p>
          
          <Link href="/perfil" className="block w-full bg-white text-black font-black py-5 rounded-[2rem] uppercase text-[10px] tracking-widest hover:bg-yellow-500 transition-all active:scale-95">
            Ir para meu perfil
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8 pb-32 flex flex-col items-center justify-center overflow-x-hidden">
      
      <div className="absolute top-10 left-6">
        <Link href="/login" className="flex items-center gap-2 text-zinc-500 hover:text-yellow-500 transition-colors">
          <ChevronLeft size={20} />
          <span className="text-[10px] font-black uppercase tracking-widest">Voltar</span>
        </Link>
      </div>

      <div className="w-full max-w-md">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter leading-none">Novo Sócio</h1>
          <p className="text-zinc-500 text-[10px] uppercase font-black tracking-[0.3em] mt-3 italic">
            Faça parte do Clube Cousins
          </p>
        </header>

        <div className="space-y-4 mb-8">
          <div className="relative group">
            <User className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-yellow-600 transition-colors" size={20} />
            <input type="text" placeholder="NOME COMPLETO" className="w-full bg-zinc-900/40 border border-white/5 rounded-[2.5rem] py-6 pl-16 pr-8 outline-none focus:border-yellow-600 font-bold text-sm" />
          </div>
          <div className="relative group">
            <CreditCard className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-yellow-600 transition-colors" size={20} />
            <input type="text" placeholder="076.359.609-46" className="w-full bg-zinc-900/40 border border-white/5 rounded-[2.5rem] py-6 pl-16 pr-8 outline-none focus:border-yellow-600 font-bold text-sm tracking-widest" />
          </div>
          <div className="relative group">
            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-yellow-600 transition-colors" size={20} />
            <input type="text" placeholder="41 99886-3776" className="w-full bg-zinc-900/40 border border-white/5 rounded-[2.5rem] py-6 pl-16 pr-8 outline-none focus:border-yellow-600 font-bold text-sm tracking-widest" />
          </div>
          <div className="relative group">
            <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-yellow-600 transition-colors" size={20} />
            <input type="password" placeholder="******" className="w-full bg-zinc-900/40 border border-white/5 rounded-[2.5rem] py-6 pl-16 pr-8 outline-none focus:border-yellow-600 font-bold text-sm tracking-widest" />
          </div>
        </div>

        <button 
          onClick={handleFinalizar}
          className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-black py-6 rounded-[2.5rem] text-xl shadow-[0_15px_40px_rgba(202,138,4,0.3)] transition-all active:scale-95 flex items-center justify-center gap-3 uppercase"
        >
          Finalizar Cadastro
        </button>
      </div>

    </main>
  );
}