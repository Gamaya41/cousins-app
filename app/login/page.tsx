'use client';

import { useState } from 'react';
import { LogIn, Mail, Lock, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login profissional
    window.location.href = '/';
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md flex flex-col items-center">
        
        {/* LOGO COM EFEITO DE BRILHO */}
        <header className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-1 bg-yellow-600 rounded-full blur opacity-20"></div>
            <img src="/logo-cousins.png" alt="Cousins" className="relative w-32 mx-auto" />
          </div>
          <h1 className="text-3xl font-black uppercase italic tracking-tighter leading-none">Área do Sócio</h1>
          <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.4em] mt-3 italic">Engenharia Moderna</p>
        </header>

        {/* FORMULÁRIO DE ACESSO */}
        <form onSubmit={handleLogin} className="w-full space-y-4">
          <div className="relative group">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-yellow-500 transition-colors" size={20} />
            <input 
              required
              type="email" 
              placeholder="SEU E-MAIL"
              className="w-full bg-zinc-900/40 border border-white/5 py-5 pl-14 pr-6 rounded-3xl outline-none focus:border-yellow-500/50 transition-all font-bold text-xs tracking-widest"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative group">
            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-yellow-500 transition-colors" size={20} />
            <input 
              required
              type="password" 
              placeholder="SUA SENHA"
              className="w-full bg-zinc-900/40 border border-white/5 py-5 pl-14 pr-6 rounded-3xl outline-none focus:border-yellow-500/50 transition-all font-bold text-xs tracking-widest"
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 text-black py-6 rounded-3xl font-black uppercase italic text-xs tracking-[0.2em] shadow-xl shadow-yellow-600/10 active:scale-95 transition-all mt-4 flex items-center justify-center gap-2">
            Entrar no Bar <ArrowRight size={16} />
          </button>
        </form>

        {/* RODAPÉ DO LOGIN */}
        <footer className="mt-10 text-center space-y-6">
          <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest italic">
            Ainda não é sócio? <Link href="/cadastro" className="text-yellow-500 border-b border-yellow-500/30 ml-1">Cadastre-se aqui</Link>
          </p>
          <div className="flex items-center justify-center gap-2 opacity-20">
            <Zap size={10} fill="currentColor" className="text-zinc-500" />
            <span className="text-[8px] font-black uppercase tracking-[0.3em]">Cousins Lounge Bar</span>
          </div>
        </footer>

      </div>
    </main>
  );
}