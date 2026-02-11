'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, Camera, Instagram, User, Share2, QrCode
} from 'lucide-react';
import Link from 'next/link';

export default function PerfilSocialOrganizado() {
  const [username, setUsername] = useState('jhoni_dev');
  const [bio, setBio] = useState('Apaixonado por tecnologia e um bom Tim Maia no microfone! 🎤');
  const [salvando, setSalvando] = useState(false);
  
  // 1. ESTADO DA FOTO SINCRONIZADA
  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Carrega a foto global assim que entra na tela
  useEffect(() => {
    const savedPhoto = localStorage.getItem('userPhoto');
    if (savedPhoto) setFotoPerfil(savedPhoto);
  }, []);

  // 2. FUNÇÃO DE UPLOAD VINCULADO
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFotoPerfil(url);
      localStorage.setItem('userPhoto', url); // Atualiza em todo o app
    }
  };

  const handleSalvar = () => {
    setSalvando(true);
    setTimeout(() => {
      setSalvando(false);
      alert('Perfil Cousins atualizado! 🚀');
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center pb-32 font-sans overflow-x-hidden">
      
      {/* INPUT ESCONDIDO PARA O MOTOR DE UPLOAD */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleUpload} 
        className="hidden" 
        accept="image/*" 
      />

      <div className="w-full max-w-md p-6 flex flex-col items-center">
        
        {/* HEADER CENTRALIZADO */}
        <header className="w-full mt-8 mb-10 flex items-center justify-between">
          <Link href="/perfil" className="p-3 bg-zinc-900/50 rounded-full border border-white/5 text-zinc-400 active:scale-95 transition-all">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-lg font-black uppercase italic tracking-tighter">Social Identity</h1>
          <button 
            onClick={handleSalvar}
            disabled={salvando}
            className={`${
              salvando ? 'bg-zinc-800' : 'bg-yellow-600 shadow-[0_0_20px_rgba(202,138,4,0.3)]'
            } text-black px-6 py-2.5 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all active:scale-90`}
          >
            {salvando ? '...' : 'Salvar'}
          </button>
        </header>

        {/* 1. SEÇÃO: IDENTIDADE (AVATAR SINCRONIZADO + BIO) */}
        <section className="w-full bg-zinc-900/20 border border-white/5 rounded-[3rem] p-8 mb-6">
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div 
                className="w-32 h-32 rounded-[2.5rem] border-2 border-yellow-500 p-1.5 bg-gradient-to-b from-yellow-500/10 to-transparent cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="w-full h-full rounded-[2.2rem] bg-zinc-900 flex items-center justify-center overflow-hidden">
                  {/* EXIBIÇÃO DA FOTO GLOBAL */}
                  {fotoPerfil ? (
                    <img src={fotoPerfil} alt="Perfil" className="w-full h-full object-cover" />
                  ) : (
                    <User size={50} className="text-zinc-700" />
                  )}
                </div>
              </div>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="absolute -bottom-1 -right-1 bg-yellow-600 p-3 rounded-2xl border-4 border-black shadow-xl active:scale-90 transition-all"
              >
                <Camera size={18} className="text-black" />
              </button>
            </div>
            <p className="text-[9px] text-zinc-600 font-black uppercase mt-6 tracking-widest italic text-center">Identificação de Sócio</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 italic px-2">Nickname (@)</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-black/40 border border-white/5 py-4 px-6 rounded-2xl outline-none focus:border-yellow-500/30 transition-all font-bold text-xs text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 italic px-2">Bio de Palco</label>
              <textarea 
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full bg-black/40 border border-white/5 py-4 px-6 rounded-2xl outline-none focus:border-yellow-500/30 transition-all font-bold text-xs h-24 resize-none text-white"
              />
            </div>
          </div>
        </section>

        {/* 2. SEÇÃO: CONECTIVIDADE */}
        <section className="w-full space-y-3 mb-6">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 italic px-4 mb-2">Conectividade</h3>
          <div className="bg-gradient-to-r from-zinc-900/50 to-black p-5 rounded-[2.5rem] border border-white/5 flex items-center justify-between group active:scale-[0.98] transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Instagram size={22} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-black uppercase italic leading-none text-white">Instagram</p>
                <p className="text-[9px] text-zinc-600 font-bold uppercase mt-1 tracking-tighter">Sincronizar Stories</p>
              </div>
            </div>
            <button className="bg-white/5 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">Linkar</button>
          </div>

          <div className="grid grid-cols-2 gap-3">
             <button className="bg-zinc-900/30 border border-white/5 p-5 rounded-[2rem] flex flex-col items-center gap-2 active:scale-95 transition-all">
                <QrCode size={18} className="text-zinc-500" />
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">QR Code</span>
             </button>
             <button className="bg-zinc-900/30 border border-white/5 p-5 rounded-[2rem] flex flex-col items-center gap-2 active:scale-95 transition-all">
                <Share2 size={18} className="text-zinc-500" />
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Share Link</span>
             </button>
          </div>
        </section>

      </div>
    </main>
  );
}