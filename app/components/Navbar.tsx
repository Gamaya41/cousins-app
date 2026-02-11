'use client';
import { Home, Beer, Mic2, User, Instagram, Star } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { icon: <Home size={20} />, label: 'Início', path: '/' },
    { icon: <Beer size={20} />, label: 'Cardápio', path: '/cardapio' },
    { icon: <Mic2 size={20} />, label: 'Karaokê', path: '/karaoke' },
    { icon: <Instagram size={20} />, label: 'Social', path: '/social' }, 
    { icon: <Star size={20} />, label: 'Ranking', path: '/ranking' }, // Fidelidade agora é Ranking
    { icon: <User size={20} />, label: 'Perfil', path: '/perfil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800">
      <div className="max-w-md mx-auto flex justify-between items-center h-20 px-2">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            href={item.path}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-all ${
              pathname === item.path ? 'text-yellow-500 scale-105' : 'text-zinc-500'
            }`}
          >
            <div className={`${pathname === item.path ? 'bg-yellow-500/10 p-2 rounded-xl' : ''}`}>
              {item.icon}
            </div>
            <span className="text-[8px] mt-1 font-black uppercase tracking-tighter">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}