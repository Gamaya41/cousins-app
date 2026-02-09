'use client';
import { Home, Beer, Mic2, User, Instagram } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { icon: <Home size={24} />, label: 'Início', path: '/' },
    { icon: <Beer size={24} />, label: 'Cardápio', path: '/cardapio' },
    { icon: <Mic2 size={24} />, label: 'Karaokê', path: '/karaoke' },
    // Substituímos Fidelidade por Social para focar na interação com fotos
    { icon: <Instagram size={24} />, label: 'Social', path: '/social' }, 
    { icon: <User size={24} />, label: 'Perfil', path: '/perfil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-t border-zinc-800 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
      <div className="max-w-md mx-auto flex justify-around items-center h-20 md:max-w-4xl md:h-16">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            href={item.path}
            className={`flex flex-col items-center justify-center w-full h-full transition-all ${
              pathname === item.path 
                ? 'text-yellow-500 scale-105' // Adicionei um leve zoom no item ativo
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {item.icon}
            <span className="text-[10px] mt-1 font-bold uppercase tracking-tighter">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}