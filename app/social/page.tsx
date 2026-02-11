'use client';

import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Send, Instagram, MoreHorizontal, Plus, User, X, Camera, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export default function SocialFeed() {
  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);
  const [showNewPost, setShowNewPost] = useState(false);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  // 1. SINCRONIZAÇÃO DA SUA IDENTIDADE
  useEffect(() => {
    const savedPhoto = localStorage.getItem('userPhoto');
    if (savedPhoto) setFotoPerfil(savedPhoto);
  }, []);

  // 2. LÓGICA DE LIKE
  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  const stories = [
    { id: 1, nome: "Seu Post", me: true },
    { id: 2, nome: "Marcos", cor: "from-yellow-400 to-orange-500" },
    { id: 3, nome: "Elisa", cor: "from-pink-500 to-purple-600" },
    { id: 4, nome: "Lucas", cor: "from-blue-400 to-emerald-400" },
    { id: 5, nome: "Cousins", cor: "from-yellow-600 to-yellow-200" },
  ];

  const [posts, setPosts] = useState([
    {
      id: 1,
      usuario: "jhoni_dev",
      imagem: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800",
      legenda: "Mandei um Tim Maia hoje! +15 Coins garantidos. 🎤",
      likes: 124,
      filtro: "contrast(1.1) brightness(0.9)"
    },
    {
      id: 2,
      usuario: "cousins_bar",
      imagem: "https://images.unsplash.com/photo-1514525253361-bee8a197c9c0?w=800",
      legenda: "O melhor double chopp de Curitiba esperando por você! 🍻",
      likes: 342,
      filtro: "saturate(1.2)"
    }
  ]);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center pb-32 font-sans overflow-x-hidden relative">
      
      {/* MODAL: NOVO POST */}
      {showNewPost && (
        <div className="fixed inset-0 bg-black/95 z-[100] p-6 flex flex-col animate-in slide-in-from-bottom duration-300">
          <header className="flex items-center justify-between mb-8">
            <button onClick={() => setShowNewPost(false)} className="p-2 text-zinc-500"><X size={24}/></button>
            <h2 className="font-black uppercase italic tracking-tighter">Novo Post</h2>
            <button onClick={() => setShowNewPost(false)} className="text-yellow-500 font-black uppercase text-xs">Compartilhar</button>
          </header>
          <div className="flex-1 border-2 border-dashed border-zinc-800 rounded-[3rem] flex flex-col items-center justify-center gap-4 text-zinc-700">
            <div className="w-20 h-20 bg-zinc-900 rounded-3xl flex items-center justify-center"><Camera size={32}/></div>
            <p className="font-black uppercase italic text-[10px] tracking-widest">Selecionar da Galeria</p>
          </div>
          <textarea placeholder="Escreva uma legenda..." className="w-full bg-transparent mt-8 border-none outline-none font-bold text-sm h-32 resize-none" />
        </div>
      )}

      <div className="w-full max-w-md">
        {/* HEADER */}
        <header className="p-6 flex items-center justify-between sticky top-0 bg-black/90 backdrop-blur-xl z-50 border-b border-white/5">
          <div className="flex items-center gap-2">
            <Instagram size={22} className="text-yellow-600" />
            <h1 className="text-xl font-black uppercase italic tracking-tighter">Cousins Social</h1>
          </div>
          <button onClick={() => setShowNewPost(true)} className="bg-yellow-600 p-2.5 rounded-2xl text-black active:scale-90 transition-all">
            <Plus size={20} strokeWidth={4} />
          </button>
        </header>

        {/* STORIES */}
        <div className="flex gap-4 overflow-x-auto p-6 no-scrollbar border-b border-white/5">
          {stories.map((s) => (
            <button key={s.id} className="flex flex-col items-center gap-2 shrink-0 active:scale-90 transition-transform">
              <div className={`w-16 h-16 rounded-full p-[2px] ${s.me ? 'bg-zinc-800' : `bg-gradient-to-tr ${s.cor}`}`}>
                <div className="w-full h-full rounded-full bg-black border-2 border-black overflow-hidden flex items-center justify-center">
                  {s.me && fotoPerfil ? (
                    <img src={fotoPerfil} className="w-full h-full object-cover" alt="Sua Foto" />
                  ) : (
                    <div className="text-zinc-500 font-black text-xs uppercase italic">{s.nome[0]}</div>
                  )}
                </div>
              </div>
              <span className={`text-[9px] font-black uppercase tracking-tighter ${s.me ? 'text-white' : 'text-zinc-600'}`}>{s.nome}</span>
            </button>
          ))}
        </div>

        {/* FEED */}
        <section className="flex flex-col">
          {posts.map((post) => (
            <div key={post.id} className="border-b border-white/5 pb-4">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 overflow-hidden flex items-center justify-center">
                    {post.usuario === "jhoni_dev" && fotoPerfil ? (
                      <img src={fotoPerfil} className="w-full h-full object-cover" alt="User" />
                    ) : (
                      <span className="text-[10px] font-black uppercase text-zinc-600">{post.usuario[0]}</span>
                    )}
                  </div>
                  <span className="text-xs font-black italic tracking-tight">{post.usuario}</span>
                </div>
                <MoreHorizontal size={18} className="text-zinc-700" />
              </div>

              <div className="relative aspect-square w-full bg-zinc-900 overflow-hidden" onDoubleClick={() => toggleLike(post.id)}>
                <img src={post.imagem} style={{ filter: post.filtro }} className="w-full h-full object-cover" alt="Feed" />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-5 mb-3">
                  <Heart 
                    size={28} 
                    onClick={() => toggleLike(post.id)}
                    className={`transition-all cursor-pointer ${likedPosts.includes(post.id) ? 'text-red-600 fill-red-600 scale-110' : 'text-white'}`} 
                  />
                  <MessageCircle size={28} className="cursor-pointer active:scale-90 transition-all" />
                  <Send size={28} className="cursor-pointer active:scale-90 transition-all" />
                </div>
                <p className="text-[11px] font-black mb-1.5 uppercase tracking-tighter">
                  {likedPosts.includes(post.id) ? post.likes + 1 : post.likes} Curtidas
                </p>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  <span className="font-black mr-2 italic text-white uppercase">{post.usuario}</span> {post.legenda}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}