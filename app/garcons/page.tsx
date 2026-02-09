'use client';

import { Heart, Star, ChevronRight, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function StaffList() {
  const team = [
    { id: 'ricardinho', name: 'Ricardo', role: 'Garçom', online: true, rating: 4.9 },
    { id: 'ana', name: 'Ana Silva', role: 'Garçom', online: true, rating: 4.8 },
    { id: 'marcos', name: 'Marcos P.', role: 'Copa', online: false, rating: 4.7 },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6 pt-24 pb-32 flex flex-col items-center">
      <div className="w-full max-w-md">
        {/* Botão Voltar para o Perfil */}
        <Link href="/perfil" className="flex items-center gap-2 text-zinc-500 mb-6 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span className="text-xs font-bold uppercase tracking-widest">Voltar ao Perfil</span>
        </Link>

        <h1 className="text-3xl font-black italic text-yellow-500 mb-2 leading-none">EQUIPE DO DIA</h1>
        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Avalie quem te atendeu agora</p>

        <div className="space-y-3">
          {team.map((member) => (
            <Link key={member.id} href={`/garcom/${member.id}`}>
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-3xl flex items-center justify-between hover:border-yellow-500/50 transition-all active:scale-[0.98]">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center overflow-hidden border border-zinc-700">
                      <User className="text-zinc-600" size={28} />
                    </div>
                    {member.online && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-4 border-black rounded-full" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-black text-lg leading-none">{member.name}</h3>
                    <p className="text-[10px] text-zinc-500 uppercase font-black mt-1 tracking-tighter">{member.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={10} className="text-yellow-500" fill="currentColor" />
                      <span className="text-[10px] font-bold text-yellow-500">{member.rating}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="text-zinc-700" size={20} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-8 bg-zinc-900/30 border border-dashed border-zinc-800 rounded-[2rem] text-center">
          <Heart className="mx-auto text-zinc-800 mb-3" size={32} />
          <p className="text-zinc-500 text-xs italic leading-relaxed">
            Sua avaliação gera <span className="text-yellow-500 font-bold">+10 moedas</span> para você e motiva nossa equipe!
          </p>
        </div>
      </div>
    </main>
  );
}