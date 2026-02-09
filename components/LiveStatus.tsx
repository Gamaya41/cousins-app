export default function LiveStatus() {
  return (
    <div className="w-full max-w-md bg-zinc-900/80 border border-yellow-500/20 rounded-2xl p-4 flex items-center gap-4 shadow-lg shadow-yellow-500/5">
      <div className="relative flex">
        <div className="w-3 h-3 bg-red-600 rounded-full animate-ping absolute" />
        <div className="w-3 h-3 bg-red-600 rounded-full relative" />
      </div>
      <div>
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black">No Bar Agora</h3>
        <p className="text-sm font-medium italic">🎤 <span className="text-yellow-500 font-bold">Jhoni</span> está cantando!</p>
      </div>
    </div>
  );
}