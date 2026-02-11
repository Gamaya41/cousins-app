'use client';

import { useState } from 'react';
import { 
  ChevronLeft, ShieldCheck, Eye, EyeOff, 
  Smartphone, Star, Save, Lock 
} from 'lucide-react';
import Link from 'next/link';

export default function Privacidade() {
  // ESTADOS PARA CONTROLE DE PRIVACIDADE
  const [statusOnline, setStatusOnline] = useState(false);
  const [ocultarSaldo, setOcultarSaldo] = useState(false);
  const [notasPublicas, setNotasPublicas] = useState(true);
  const [salvando, setSalvando] = useState(false);

  const handleSalvar = () => {
    setSalvando(true);
    setTimeout(() => {
      setSalvando(false);
      alert('Preferências de privacidade atualizadas! 🛡️');
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center pb-32 font-sans overflow-x-hidden">
      
      {/* CONTAINER CENTRALIZADO */}
      <div className="w-full max-w-md p-6 flex flex-col items-center">
        
        {/* HEADER */}
        <header className="w-full mt-8 mb-10 flex items-center justify-between">
          <Link href="/perfil" className="p-3 bg-zinc-900/50 rounded-full border border-white/5 text-zinc-400 active:scale-95 transition-all">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-lg font-black uppercase italic tracking-tighter">Privacidade</h1>
          <button 
            onClick={handleSalvar}
            disabled={salvando}
            className="text-yellow-500 font-black uppercase text-[10px] tracking-widest active:scale-90"
          >
            {salvando ? '...' : 'Salvar'}
          </button>
        </header>

        {/* INFO CARD */}
        <div className="w-full bg-zinc-900/20 border border-white/5 p-6 rounded-[2.5rem] mb-10 flex items-center gap-4">
          <div className="w-12 h-12 bg-yellow-600/10 rounded-2xl flex items-center justify-center text-yellow-500">
            <ShieldCheck size={24} />
          </div>
          <p className="text-[10px] text-zinc-500 font-bold uppercase leading-relaxed tracking-tight">
            Controle quem pode ver suas atividades e saldo dentro do Cousins Lounge Bar.
          </p>
        </div>

        {/* LISTA DE CONTROLES (SWITCHES FUNCIONAIS) */}
        <div className="w-full space-y-4">
          
          {/* Status Online */}
          <div 
            onClick={() => setStatusOnline(!statusOnline)}
            className="flex items-center justify-between p-6 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 cursor-pointer active:scale-95 transition-all"
          >
            <div className="flex items-center gap-4">
              <Smartphone size={20} className={statusOnline ? "text-green-500" : "text-zinc-600"} />
              <div>
                <p className="text-xs font-black uppercase italic leading-none text-white">Status no Bar</p>
                <p className="text-[9px] text-zinc-600 font-bold uppercase mt-1">Mostrar que estou no local</p>
              </div>
            </div>
            <div className={`w-10 h-5 rounded-full flex items-center px-1 transition-all ${statusOnline ? 'bg-green-600' : 'bg-zinc-800'}`}>
              <div className={`w-3 h-3 bg-white rounded-full transition-all ${statusOnline ? 'translate-x-5' : 'translate-x-0'}`}></div>
            </div>
          </div>

          {/* Ocultar Saldo */}
          <div 
            onClick={() => setOcultarSaldo(!ocultarSaldo)}
            className="flex items-center justify-between p-6 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 cursor-pointer active:scale-95 transition-all"
          >
            <div className="flex items-center gap-4">
              {ocultarSaldo ? <EyeOff size={20} className="text-yellow-600" /> : <Eye size={20} className="text-zinc-600" />}
              <div>
                <p className="text-xs font-black uppercase italic leading-none text-white">Ocultar Saldo</p>
                <p className="text-[9px] text-zinc-600 font-bold uppercase mt-1">Privar visualização de Coins</p>
              </div>
            </div>
            <div className={`w-10 h-5 rounded-full flex items-center px-1 transition-all ${ocultarSaldo ? 'bg-yellow-600' : 'bg-zinc-800'}`}>
              <div className={`w-3 h-3 bg-white rounded-full transition-all ${ocultarSaldo ? 'translate-x-5' : 'translate-x-0'}`}></div>
            </div>
          </div>

          {/* Notas do Karaokê */}
          <div 
            onClick={() => setNotasPublicas(!notasPublicas)}
            className="flex items-center justify-between p-6 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 cursor-pointer active:scale-95 transition-all"
          >
            <div className="flex items-center gap-4">
              <Star size={20} className={notasPublicas ? "text-yellow-500" : "text-zinc-600"} />
              <div>
                <p className="text-xs font-black uppercase italic leading-none text-white">Notas Públicas</p>
                <p className="text-[9px] text-zinc-600 font-bold uppercase mt-1">Exibir Score no The Voice</p>
              </div>
            </div>
            <div className={`w-10 h-5 rounded-full flex items-center px-1 transition-all ${notasPublicas ? 'bg-yellow-600' : 'bg-zinc-800'}`}>
              <div className={`w-3 h-3 bg-white rounded-full transition-all ${notasPublicas ? 'translate-x-5' : 'translate-x-0'}`}></div>
            </div>
          </div>

        </div>

        {/* GERENCIAMENTO DE DADOS */}
        <div className="w-full mt-12 px-4">
           <button className="flex items-center gap-3 text-red-900/40 hover:text-red-600 transition-colors group">
              <Lock size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">Gerenciar Dados da Conta</span>
           </button>
        </div>

      </div>
    </main>
  );
}