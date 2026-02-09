'use client';

import { useState } from 'react';
import { Lock, User, ChevronRight, Fingerprint } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <main className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center overflow-x-hidden">
      
      {/* 1. LOGO ULTRA - SEM LIMITES DE CONTAINER */}
      <div className="mb-10 flex justify-center w-screen px-4 animate-in fade-in zoom-in duration-1000">
        <img 
          src="/logo.png" 
          alt="Cousins Lounge Bar" 
          className="w-full max-w-[450px] h-auto drop-shadow-[0_0_50px_rgba(234,179,8,0.6)] scale-110"
          style={{ filter: 'drop-shadow(0 0 30px #eab30866)' }}
        />
      </div>

      {/* FORMULÁRIO LIMITADO PARA NÃO FICAR ESTRANHO NO PC */}
      <div className="w-full max-w-sm space-y-6 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter leading-none">Bem-vindo</h1>
          <p className="text-zinc-500 text-[10px] uppercase font-black tracking-[0.3em] mt-3 italic text-center">
            Acesse sua conta Cousins
          </p>
        </div>

        {/* INPUTS */}
        <div className="space-y-4">
          <div className="relative group">
            <User className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-yellow-600 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="SEU CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="w-full bg-zinc-900/40 border border-white/5 rounded-[2.5rem] py-6 pl-16 pr-8 outline-none focus:border-yellow-600 transition-all font-bold text-sm tracking-[0.2em]"
            />
          </div>

          <div className="relative group">
            <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-yellow-600 transition-colors" size={20} />
            <input 
              type="password" 
              placeholder="SENHA PIN"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full bg-zinc-900/40 border border-white/5 rounded-[2.5rem] py-6 pl-16 pr-8 outline-none focus:border-yellow-600 transition-all font-bold text-sm tracking-[0.2em]"
            />
          </div>
        </div>

        {/* BOTÃO */}
        <button className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-black py-6 rounded-[2.5rem] text-xl shadow-[0_15px_40px_rgba(202,138,4,0.3)] transition-all active:scale-95 flex items-center justify-center gap-3 mt-4">
          ENTRAR NO APP
          <ChevronRight size={24} />
        </button>

        <div className="flex flex-col gap-6 items-center pt-8 text-center">
          <button className="text-[10px] font-black uppercase text-zinc-500 hover:text-yellow-600 transition-colors tracking-[0.2em]">
            Esqueci minha senha
          </button>
          
          <div className="flex items-center gap-4 w-full opacity-10 px-4">
            <div className="h-[1px] bg-white flex-1"></div>
            <span className="text-[10px] font-black italic">OU</span>
            <div className="h-[1px] bg-white flex-1"></div>
          </div>

          <Link href="/cadastro" className="text-[12px] font-black uppercase text-white hover:text-yellow-500 transition-colors tracking-[0.2em] border-b border-yellow-600 pb-1">
            Criar conta agora
          </Link>
        </div>
      </div>

      <div className="mt-12 flex items-center gap-2 text-zinc-800 opacity-50">
        <Fingerprint size={16} />
        <span className="text-[9px] font-black uppercase tracking-widest">Acesso Seguro Cousins Lounge Bar</span>
      </div>

    </main>
  );
}