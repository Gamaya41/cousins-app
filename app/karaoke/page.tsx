'use client';

import { useState } from 'react';
import { 
  Mic2, Music, Play, Trophy, Plus, Star, 
  Mic, HelpCircle, X 
} from 'lucide-react';

export default function Karaoke() {
  const [musicas, setMusicas] = useState([
    { id: 1, nome: "Boate Azul", artista: "Bruno & Marrone", status: "fila" },
  ]);
  const [novaMusica, setNovaMusica] = useState("");
  const [notaFinal, setNotaFinal] = useState("");
  const [showHelp, setShowHelp] = useState(false); // Estado para o modal de ajuda

  const adicionarMusica = () => {
    if (!novaMusica) return;
    setMusicas([...musicas, { id: Date.now(), nome: novaMusica, artista: "Escolha do Jhoni", status: "fila" }]);
    setNovaMusica("");
  };

  const iniciarCanto = (id: number) => {
    setMusicas(musicas.map(m => m.id === id ? { ...m, status: "cantando" } : { ...m, status: "fila" }));
  };

  const finalizarComNota = (id: number) => {
    if (!notaFinal) return alert("Lance a nota do show primeiro!");
    alert(`Nota ${notaFinal} enviada! +10 Coins no seu perfil.`);
    setMusicas(musicas.filter(m => m.id !== id));
    setNotaFinal("");
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 pb-32 flex flex-col items-center relative">
      
      {/* MODAL DE EXPLICAÇÃO (Interrogação) */}
      {showHelp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-zinc-900 border border-white/10 p-8 rounded-[3rem] max-w-xs w-full relative">
            <button 
              onClick={() => setShowHelp(false)}
              className="absolute top-6 right-6 text-zinc-500 hover:text-white"
            >
              <X size={20} />
            </button>
            <HelpCircle className="text-yellow-500 mb-4" size={32} />
            <h3 className="text-xl font-black uppercase italic italic tracking-tighter mb-4">Como Funciona?</h3>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-tight text-zinc-400">
              <li className="flex gap-3">
                <span className="text-yellow-500">01.</span> 
                Adicione as músicas que deseja cantar na sua fila pessoal.
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500">02.</span> 
                Quando chegar sua vez no palco, aperte o botão de "Play".
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500">03.</span> 
                Ao finalizar, digite a nota que apareceu no telão do bar.
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500">04.</span> 
                Sua nota acumula pontos para você subir no Ranking Cousins!
              </li>
            </ul>
            <button 
              onClick={() => setShowHelp(false)}
              className="w-full mt-8 bg-yellow-600 text-black font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest"
            >
              Entendi!
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-md">
        
        {/* HEADER COM INTERROGAÇÃO */}
        <header className="mt-8 mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter leading-none">Palco Cousins</h1>
            <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-[0.3em] mt-2 italic">Gerencie seu show</p>
          </div>
          <button 
            onClick={() => setShowHelp(true)}
            className="bg-zinc-900/50 p-3 rounded-full border border-white/5 text-yellow-500 hover:bg-yellow-600 hover:text-black transition-all"
          >
            <HelpCircle size={24} />
          </button>
        </header>

        {/* INPUT DE MÚSICA */}
        <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-[2.5rem] mb-8 shadow-lg">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={novaMusica}
              onChange={(e) => setNovaMusica(e.target.value)}
              placeholder="Qual música vamos cantar?" 
              className="flex-1 bg-black border border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-yellow-600 outline-none font-bold"
            />
            <button onClick={adicionarMusica} className="bg-yellow-600 text-black p-4 rounded-2xl active:scale-90 shadow-[0_0_20px_rgba(202,138,4,0.3)]">
              <Plus size={24} />
            </button>
          </div>
        </div>

        {/* FILA DE MÚSICAS */}
        <div className="space-y-6">
          {musicas.map((m) => (
            <div 
              key={m.id} 
              className={`p-8 rounded-[3rem] border transition-all relative overflow-hidden ${
                m.status === 'cantando' 
                ? 'bg-gradient-to-br from-yellow-600 to-yellow-700 border-yellow-400 shadow-[0_20px_50px_rgba(202,138,4,0.3)] scale-[1.02]' 
                : 'bg-zinc-900/40 border-white/5'
              }`}
            >
              <div className="flex justify-between items-center relative z-10">
                <div className="flex-1 pr-4">
                  <h4 className={`font-black uppercase italic text-xl leading-none mb-2 ${m.status === 'cantando' ? 'text-black' : 'text-white'}`}>
                    {m.nome}
                  </h4>
                  <p className={`text-[10px] font-black uppercase tracking-widest ${m.status === 'cantando' ? 'text-black/50' : 'text-zinc-500'}`}>
                    {m.artista}
                  </p>
                </div>

                {m.status === 'fila' ? (
                  <button onClick={() => iniciarCanto(m.id)} className="bg-black/20 p-4 rounded-full text-white">
                    <Play size={20} fill="currentColor" />
                  </button>
                ) : (
                  <Mic size={32} className="text-black animate-bounce" />
                )}
              </div>

              {/* ÁREA DA NOTA DO VIDEOKÊ */}
              {m.status === 'cantando' && (
                <div className="mt-8 pt-8 border-t border-black/10 flex flex-col items-center relative z-10">
                  <span className="text-[10px] font-black text-black uppercase mb-4 tracking-[0.2em]">Nota do Videokê</span>
                  <div className="flex items-center gap-4 mb-6">
                    <input 
                      type="number" 
                      value={notaFinal}
                      onChange={(e) => setNotaFinal(e.target.value)}
                      placeholder="00"
                      className="w-24 bg-black/20 border-2 border-black/30 rounded-3xl py-4 text-center text-4xl font-black text-black placeholder:text-black/20 outline-none"
                    />
                    <div className="text-left">
                      <p className="text-2xl font-black text-black leading-none">PTS</p>
                      <p className="text-[8px] font-black text-black/50 uppercase">Pontuação Final</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => finalizarComNota(m.id)}
                    className="w-full bg-black text-white font-black py-5 rounded-[2rem] uppercase text-[10px] tracking-[0.2em]"
                  >
                    Confirmar Nota
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}