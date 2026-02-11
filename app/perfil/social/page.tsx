'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { 
  ChevronLeft, Camera, Instagram, User, Share2, QrCode, X, Check, Hash
} from 'lucide-react';
import Link from 'next/link';

export default function PerfilSocialOrganizado() {
  const [username, setUsername] = useState('jhoni_dev');
  const [bio, setBio] = useState('Apaixonado por tecnologia e um bom Tim Maia no microfone! 🎤');
  const [salvando, setSalvando] = useState(false);
  const [userId, setUserId] = useState('1509');

  // ESTADOS PARA FOTO E RECORTE
  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);
  const [imagemTemporaria, setImagemTemporaria] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    } catch (e) { console.error(e); }
  };

  const handleSalvar = () => {
    setSalvando(true);
    setTimeout(() => {
      setSalvando(false);
      alert('Identidade Social Cousins atualizada! 🚀');
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center pb-32 font-sans overflow-x-hidden relative">
      
      {/* MODAL DE AJUSTE DE FOTO (CROPPER) */}
      {imagemTemporaria && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center p-6 backdrop-blur-md">
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
              <button onClick={() => setImagemTemporaria(null)} className="flex-1 bg-zinc-900 border border-white/5 py-4 rounded-2xl font-black uppercase text-[10px] flex items-center justify-center gap-2 transition-all"><X size={16} /> Cancelar</button>
              <button onClick={gerarFotoCortada} className="flex-1 bg-yellow-600 text-black py-4 rounded-2xl font-black uppercase text-[10px] flex items-center justify-center gap-2 transition-all"><Check size={16} /> Confirmar</button>
            </div>
          </div>
        </div>
      )}

      <input type="file" ref={fileInputRef} onChange={handleUpload} className="hidden" accept="image/*" />

      <div className="w-full max-w-md p-6 flex flex-col items-center">
        
        <header className="w-full mt-8 mb-10 flex items-center justify-between">
          <Link href="/perfil" className="p-3 bg-zinc-900/50 rounded-full border border-white/5 text-zinc-400 active:scale-95 transition-all">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-lg font-black uppercase italic tracking-tighter italic">Social Identity</h1>
          <button 
            onClick={handleSalvar}
            disabled={salvando}
            className={`${salvando ? 'bg-zinc-800' : 'bg-yellow-600 shadow-[0_0_20px_rgba(202,138,4,0.3)]'} text-black px-6 py-2.5 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all active:scale-90`}
          >
            {salvando ? '...' : 'Salvar'}
          </button>
        </header>

        {/* SEÇÃO IDENTIDADE: FOTO AJUSTÁVEL + ID */}
        <section className="w-full bg-zinc-900/20 border border-white/5 rounded-[3rem] p-8 mb-6">
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div 
                className="w-32 h-32 rounded-[2.5rem] border-2 border-yellow-500 p-1.5 bg-zinc-900 cursor-pointer overflow-hidden shadow-2xl"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="w-full h-full rounded-[2.2rem] bg-zinc-800 flex items-center justify-center overflow-hidden">
                  {fotoPerfil ? ( <img src={fotoPerfil} alt="Perfil" className="w-full h-full object-cover" /> ) : ( <User size={50} className="text-zinc-700" /> )}
                </div>
              </div>
              <button onClick={() => fileInputRef.current?.click()} className="absolute -bottom-1 -right-1 bg-yellow-600 p-3 rounded-2xl border-4 border-black shadow-xl active:scale-90 transition-all">
                <Camera size={18} className="text-black" />
              </button>
            </div>
            
            {/* EXIBIÇÃO DO ID NO SOCIAL */}
            <div className="flex items-center gap-1.5 mt-6 bg-black/40 px-3 py-1 rounded-full border border-white/5">
              <Hash size={10} className="text-yellow-600" />
              <span className="text-[9px] font-black text-zinc-500 tracking-[0.2em] uppercase leading-none">ID: {userId}</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 italic px-2">Nickname (@)</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-black/40 border border-white/5 py-4 px-6 rounded-2xl outline-none focus:border-yellow-500/30 transition-all font-bold text-xs text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 italic px-2">Bio de Palco</label>
              <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="w-full bg-black/40 border border-white/5 py-4 px-6 rounded-2xl outline-none focus:border-yellow-500/30 transition-all font-bold text-xs h-24 resize-none text-white" />
            </div>
          </div>
        </section>

        {/* CONECTIVIDADE (MANTIDO) */}
        <section className="w-full space-y-3 mb-6 text-center">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 italic px-4 mb-2">Conectividade</h3>
          <div className="bg-gradient-to-r from-zinc-900/50 to-black p-5 rounded-[2.5rem] border border-white/5 flex items-center justify-between group transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"><Instagram size={22} className="text-white" /></div>
              <div className="text-left">
                <p className="text-xs font-black uppercase italic leading-none text-white">Instagram</p>
                <p className="text-[9px] text-zinc-600 font-bold uppercase mt-1 tracking-tighter text-left">Sincronizar Stories</p>
              </div>
            </div>
            <button className="bg-white/5 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">Linkar</button>
          </div>
        </section>

      </div>
    </main>
  );
}