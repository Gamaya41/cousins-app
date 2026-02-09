import { Star, Heart, DollarSign, MessageCircle, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function StaffProfile() {
  // Simulação de dados do garçom
  const staff = {
    name: "Ricardo 'Ricardinho'",
    pixKey: "ricardinho@pix.com",
    compliments: 142,
    rating: 4.9,
    photoUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
    status: "No salão agora 🍻"
  };

  const reviews = [
    { user: "Jhoni", comment: "Atendimento nota 10, cerveja gelada sempre!", date: "Ontem" },
    { user: "Elisa", comment: "Muito educado e rápido.", date: "Há 2 dias" }
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6 pt-12 pb-32 flex flex-col items-center">
      
      {/* Botão Voltar */}
      <div className="w-full max-w-md mb-6">
        <Link href="/" className="text-zinc-500 flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
          <ChevronLeft size={20} /> Voltar
        </Link>
      </div>

      {/* Foto e Status */}
      <div className="flex flex-col items-center mb-8 text-center">
        <div className="relative">
          <img 
            src={staff.photoUrl} 
            alt={staff.name} 
            className="w-32 h-32 rounded-full border-4 border-zinc-800 object-cover shadow-2xl" 
          />
          <div className="absolute bottom-2 right-0 bg-green-500 w-5 h-5 rounded-full border-4 border-black" />
        </div>
        <h2 className="mt-4 text-3xl font-black italic">{staff.name}</h2>
        <p className="text-green-500 text-xs font-black uppercase tracking-[0.2em]">{staff.status}</p>
      </div>

      {/* Stats de Reputação */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-3xl text-center">
          <Heart className="text-pink-500 mx-auto mb-1" size={24} fill="currentColor" />
          <span className="text-2xl font-black">{staff.compliments}</span>
          <p className="text-[10px] text-zinc-500 uppercase font-bold">Elogios</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-3xl text-center">
          <Star className="text-yellow-500 mx-auto mb-1" size={24} fill="currentColor" />
          <span className="text-2xl font-black">{staff.rating}</span>
          <p className="text-[10px] text-zinc-500 uppercase font-bold">Média</p>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="w-full max-w-md space-y-4 mb-10">
        <button className="w-full py-5 bg-green-600 hover:bg-green-500 text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-green-600/10">
          <DollarSign size={24} /> ENVIAR GORJETA (PIX)
        </button>
        <button className="w-full py-5 bg-zinc-900 border border-zinc-700 text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95">
          <MessageCircle size={24} /> DEIXAR UM ELOGIO
        </button>
      </div>

      {/* Mural de Mensagens */}
      <div className="w-full max-w-md text-left">
        <h4 className="text-xs uppercase font-black text-zinc-500 tracking-widest mb-4">O que dizem sobre ele</h4>
        <div className="space-y-4">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-zinc-900/30 p-4 rounded-2xl border-l-2 border-yellow-500">
              <p className="text-sm italic text-zinc-300">"{rev.comment}"</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs font-bold text-yellow-500 uppercase">{rev.user}</span>
                <span className="text-[10px] text-zinc-600 uppercase font-bold">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}