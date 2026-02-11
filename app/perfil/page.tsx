'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { 
  LogOut, User, Settings, Star, Trophy, Hash,
  Music, ChevronRight, Crown, Camera, ShieldCheck, History, X, Check
} from 'lucide-react';
import Link from 'next/link';

export default function Perfil() {
  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);
  const [imagemTemporaria, setImagemTemporaria] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ID do usuário conforme solicitado
  const [userId, setUserId] = useState<string>('1509'); 

  useEffect(() => {
    const savedPhoto = localStorage.getItem('userPhoto');
    if (savedPhoto) setFotoPerfil(savedPhoto);
    const savedId = localStorage.getItem('userId') || '1509';
    setUserId(savedId);
  }, []);

  const onCropComplete = useCallback((_area: any, pixels: any) => {
    setCroppedAreaPixels(pixels);
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagemTemporaria(url);
    }
  };

  const gerarFotoCortada = async () => {
    if (!imagemTemporaria || !croppedAreaPixels) return;
    try {
      const image = new Image();
      image.src = imagemTemporaria;
      await new Promise((res) => (image.onload = res));
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;
      ctx?.drawImage(
        image,
        croppedAreaPixels.x, croppedAreaPixels.y,
        croppedAreaPixels.width, croppedAreaPixels.height,
        0, 0,
        croppedAreaPixels.width, croppedAreaPixels.height
      );
      const fotoFinal = canvas.toDataURL('image/jpeg');
      setFotoPerfil(fotoFinal);
      localStorage.setItem('userPhoto', fotoFinal);
      setImagemTemporaria(null);
    } catch (e) {
      console.error("Erro ao processar imagem", e);
    }
  };

  const musicas = [
    { nome: "Tim Maia - Descobridor", nota: "9.5", data: "Ontem" },
    { nome: "Legião - Tempo Perdido", nota: "8.8", data: "05/02" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center pb-32 font-sans overflow-x-hidden relative">
      
      {/* MODAL DE AJUSTE DE FOTO */}
      {imagemTemporaria && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center p-6 backdrop-blur-md">
          <h3 className="text-lg font-black uppercase italic mb-8 tracking-tighter text-yellow-500 italic">Ajuste sua Foto</h3>
          <div className="relative w-full max-w-sm h-80 bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">
            <Cropper
              image={imagemTemporaria}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
              cropShape="round"
              showGrid={false}
            />
          </div>
          <div className="w-full max-w-sm mt-8 space-y-6">
            <input type="range" value={zoom} min={1} max={3} step={0.1} onChange={(e) => setZoom(Number(e.target.value))} className="w-full h-1 bg-zinc-800 accent-yellow-600 appearance-none rounded-full" />
            <div className="flex gap-4">
              <button onClick={() => setImagemTemporaria(null)} className="flex-1 bg-zinc-900 border border-white/5 py-4 rounded-2xl font-black uppercase text-[10px] flex items-center justify-center gap-2 active:scale-95 transition-all"><X size={16} /> Cancelar</button>
              <button onClick={gerarFotoCortada} className="flex-1 bg-yellow-600 text-black py-4 rounded-2xl font-black uppercase text-[10px] flex items-center justify-center gap-2 active:scale-95 transition-all"><Check size={16} /> Confirmar</button>
            </div>
          </div>
        </div>
      )}

      <input type="file" ref={fileInputRef} onChange={handleUpload} className="hidden" accept="image/*" />

      <div className="w-full max-w-md p-6 flex flex-col items-center">
        
        {/* IDENTIFICAÇÃO VIP */}
        <div className="mt-12 mb-8 flex flex-col items-center text-center">
          <div className="relative mb-4 group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
            <div className="w-28 h-28 rounded-full border-2 border-yellow-500 p-1 shadow-[0_0_30px_rgba(234,179,8,0.2)] bg-zinc-900">
              <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden border border-white/5">
                {fotoPerfil ? ( <img src={fotoPerfil} alt="Perfil" className="w-full h-full object-cover" /> ) : ( <User size={48} className="text-zinc-700" /> )}
              </div>
            </div>
            <button className="absolute bottom-0 right-0 bg-yellow-600 p-2.5 rounded-2xl border-4 border-black active:scale-90 transition-all"><Camera size={16} className="text-black" /></button>
          </div>
          
          <h2 className="text-3xl font-black uppercase italic tracking-tighter italic">Jhoni</h2>
          
          <div className="flex items-center gap-1.5 mt-1 bg-zinc-900/80 px-4 py-1.5 rounded-full border border-white/5">
            <Hash size={10} className="text-yellow-600" />
            <span className="text-[10px] font-black text-zinc-400 tracking-widest uppercase">ID Sócio: {userId}</span>
          </div>

          <div className="flex items-center gap-2 mt-3 text-yellow-500">
            <Crown size={14} fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] italic text-yellow-500/80">Sócio Elite Cousins</span>
          </div>
        </div>

        {/* ECONOMIA SEPARADA */}
        <div className="w-full grid grid-cols-2 gap-4 mb-10">
          <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-[2.5rem] flex flex-col items-center shadow-inner">
            <Star size={18} className="text-yellow-500 mb-2" fill="currentColor" />
            <span className="text-3xl font-black italic tracking-tighter leading-none">120</span>
            <span className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mt-2 text-center">Saldo Coins</span>
          </div>
          <Link href="/ranking" className="bg-zinc-900/40 border border-white/5 p-6 rounded-[2.5rem] flex flex-col items-center active:scale-95 transition-all shadow-inner">
            <Trophy size={18} className="text-blue-500 mb-2" />
            <span className="text-3xl font-black italic tracking-tighter text-white leading-none">2.450</span>
            <span className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mt-2 text-center">Pontos XP</span>
          </Link>
        </div>

        {/* VOICE HISTORY */}
        <section className="w-full mb-10">
          <div className="flex items-center justify-between px-4 mb-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 italic leading-none text-center">Voice History</h3>
            <History size={14} className="text-zinc-800" />
          </div>
          <div className="space-y-3">
            {musicas.map((m, i) => (
              <div key={i} className="bg-zinc-900/20 border border-white/5 p-5 rounded-[2.2rem] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-800/50 rounded-xl flex items-center justify-center text-yellow-500"><Music size={18} /></div>
                  <div>
                    <p className="text-[11px] font-black uppercase italic text-white tracking-tight leading-none">{m.nome}</p>
                    <p className="text-[8px] text-zinc-600 font-bold uppercase mt-1.5">Score: {m.nota}</p>
                  </div>
                </div>
                <span className="text-[8px] font-black text-zinc-700 uppercase italic">{m.data}</span>
              </div>
            ))}
          </div>
        </section>

        {/* MENU DE OPÇÕES RESTAURADO */}
        <div className="w-full space-y-3">
          <Link href="/perfil/social" className="block w-full">
            <button className="w-full bg-zinc-900/30 border border-white/5 p-6 rounded-[2.2rem] flex items-center justify-between group active:scale-95 transition-all">
              <div className="flex items-center gap-4 text-zinc-400 group-hover:text-white transition-colors">
                <Settings size={22} />
                <span className="text-[11px] font-black uppercase tracking-widest italic leading-none">Perfil Social</span>
              </div>
              <ChevronRight size={18} className="text-zinc-800" />
            </button>
          </Link>

          {/* PRIVACIDADE RESTAURADA */}
          <Link href="/perfil/privacidade" className="block w-full">
            <button className="w-full bg-zinc-900/30 border border-white/5 p-6 rounded-[2.2rem] flex items-center justify-between group active:scale-95 transition-all">
              <div className="flex items-center gap-4 text-zinc-400 group-hover:text-white transition-colors">
                <ShieldCheck size={22} />
                <span className="text-[11px] font-black uppercase tracking-widest italic leading-none">Privacidade</span>
              </div>
              <ChevronRight size={18} className="text-zinc-800" />
            </button>
          </Link>

          {/* ENCERRAR SESSÃO RESTAURADO */}
          <button 
            onClick={() => window.location.href = '/login'} 
            className="w-full bg-red-950/10 border border-red-900/20 p-7 rounded-[2.5rem] flex items-center justify-between mt-6 active:scale-95 transition-all group"
          >
            <div className="flex items-center gap-4 text-red-600 group-hover:text-red-500 transition-colors">
              <LogOut size={22} />
              <span className="text-[11px] font-black uppercase tracking-widest italic leading-none">Encerrar Sessão</span>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}