'use client';

import { useState } from 'react';
import { 
  Beer, Utensils, GlassWater, ChevronRight, Flame, 
  Wine, Award, Search, Pizza, ShoppingBag 
} from 'lucide-react';

export default function Cardapio() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Novidades');

  const menu = [
    {
      categoria: "Novidades",
      itens: [
        { nome: "Polenta Frita c/ Costela e Queijo", preco: "55,90", desc: "500 gr polenta frita com costela desfiada, queijo e cebolinha" },
        { nome: "Batata c/ Costela e Queijo", preco: "55,90", desc: "500 gr batata frita com costela desfiada, queijo e cebolinha" },
        { nome: "Pão c/ Costela Desfiada", preco: "29,90", desc: "Pão baguete, 150gr de costela desfiada, cheddar ou mussarela e maionese da casa." },
        { nome: "Aipim Frito c/ Costela e Queijo", preco: "55,90", desc: "500 gr aipim frito com costela desfiada, queijo e cebolinha" },
      ]
    },
    {
      categoria: "Hamburguer Tradicional",
      itens: [
        { nome: "X-BURGUER", preco: "10,00", desc: "PÃO, HAMBURGUER, MAIONESE, QUEIJO E PRESUNTO" },
        { nome: "X-SALADA", preco: "15,00", desc: "PÃO, HAMBURGUER, MOLHO ESPECIAL, TOMATE, ALFACE, MILHO, QUEIJO E PRESUNTO." },
        { nome: "X-CALABRESA", preco: "18,00", desc: "PÃO, HAMBURGUER, CALABRESA, MOLHO ESPECIAL, TOMATE, ALFACE, MILHO, QUEIJO E PRESUNTO." },
        { nome: "X-EGG", preco: "18,00", desc: "PÃO, HAMBURGUER, OVO, MOLHO ESPECIAL TOMATE, ALFACE, MILHO, QUEIJO E PRESUNTO." },
        { nome: "X-BACON", preco: "20,00", desc: "PÃO, HAMBURGUER, BACON, MOLHO ESPECIAL TOMATE, ALFACE, MILHO, QUEIJO E PRESUNTO." },
        { nome: "X-COUSIN", preco: "25,00", desc: "PÃO, HAMBURGUER, BACON, CALABRESA, OVO MOLHO ESPECIAL, TOMATE, ALFACE, MILHO, QUEIJO E PRESUNTO." },
      ]
    },
    {
      categoria: "Hamburguer Artesanal",
      itens: [
        { nome: "Artesanal Simples", preco: "28,90", desc: "Pão de brioche, Hambúrguer 130gr, Cheddar, Alface americano, tomate, cebola roxa e maionese especial." },
        { nome: "Artesanal Costela", preco: "38,90", desc: "Pão de brioche, Hambúrguer de costela 180gr, Cheddar, Alface americano, tomate, cebola roxa e maionese especial." },
        { nome: "Artesanal Fraldinha", preco: "38,90", desc: "Pão de brioche, Hambúrguer de fraldinha 180gr, Cheddar, Alface americano, tomate, cebola roxa e maionese especial." },
        { nome: "Artesanal Picanha", preco: "41,90", desc: "Pão de brioche, Hambúrguer de picanha 180gr, Cheddar, Alface americano, tomate, cebola roxa e maionese especial." },
      ]
    },
    {
      categoria: "Porções",
      itens: [
        { nome: "Fritas (500gr)", preco: "35,90", desc: "Batata Frita" },
        { nome: "Calabresa (400gr)", preco: "35,90", desc: "Calabresa acebolada" },
        { nome: "Polenta Frita (500gr)", preco: "35,90", desc: "Polenta crocante" },
        { nome: "Frango (400gr)", preco: "39,90", desc: "Frango frito" },
        { nome: "Mandioca (500gr)", preco: "41,90", desc: "Mandioca frita" },
        { nome: "Mista", preco: "44,90", desc: "Batata c/ Calabresa, Batata c/ Polenta ou Batata c/ Aipim" },
        { nome: "SUPER MISTA", preco: "51,90", desc: "BATATA FRITA, CALABRESA, POLENTA OU AIPIM" },
        { nome: "Frios", preco: "46,90", desc: "QUEIJO, PRESUNTO, OVO DE CODORNA, PEPINO E AZEITONA" },
        { nome: "ISCAS DE FRANGO", preco: "39,90", desc: "500gr de Iscas de Frango" },
        { nome: "MINI PASTEL (10un)", preco: "39,90", desc: "Carne, queijo e frango" },
        { nome: "COXINHA DA ASA", preco: "39,90", desc: "Coxinha da asa de frango 500g" },
        { nome: "FILÉ DE TILÁPIA", preco: "45,90", desc: "PORÇÃO DE 500GR DE ISCA DE TILÁPIA" },
      ]
    },
    {
      categoria: "Carnes",
      itens: [
        { nome: "Super Mista de Frango", preco: "59,90", desc: "300 gr Frango, 300 gr Batata Frita, 300 gr Aipim ou Polenta" },
        { nome: "Super Mista de Alcatra", preco: "89,90", desc: "300 gr Alcatra, 300 gr Batata Frita, 300 gr Aipim ou Polenta" },
        { nome: "Tiras de Alcatra", preco: "69,90", desc: "500gr de Alcatra, Cebola e Pão de Alho" },
        { nome: "Carne de Onça", preco: "27,00", desc: "Pão preto, 200g carne moída de Patinho; cebola e cebolinha." },
        { nome: "Tulipa Frita", preco: "48,00", desc: "500gr DE TULIPA DE FRANGO FRITAS" },
        { nome: "Torresmo de Rolo (500g)", preco: "69,00", desc: "ACOMPANHA: Torresmo de rolo e Aipim Frito" },
        { nome: "Torresmo de Rolo (250g)", preco: "49,90", desc: "ACOMPANHA: Torresmo de Rolo e Aipim Frito" },
      ]
    },
    {
      categoria: "Bebidas & Sucos",
      itens: [
        { nome: "Refrigerante Lata", preco: "7,50", desc: "Refrigerante Lata diversos" },
        { nome: "Sucos Lata", preco: "7,50", desc: "Sabores diversos" },
        { nome: "Água", preco: "5,00", desc: "Água Mineral" },
        { nome: "Energético Red Bull", preco: "20,00", desc: "Lata 250ml" },
        { nome: "Polpa de Fruta", preco: "15,00", desc: "Morango, Abacaxi ou Maracujá (500ml)" },
        { nome: "Polpa com Leite", preco: "20,00", desc: "Copo 500 ml" },
      ]
    },
    {
      categoria: "Cervejas & Chopp",
      itens: [
        { nome: "Brahma / Amstel (350ml)", preco: "7,00", desc: "Lata 350ml" },
        { nome: "Original (350ml)", preco: "8,00", desc: "Lata 350ml" },
        { nome: "Heineken Long Neck", preco: "13,00", desc: "Long Neck 330ml" },
        { nome: "Heineken (600ml)", preco: "21,00", desc: "Garrafa 600ml" },
        { nome: "Torre Chopp Pilsen 3,5L", preco: "72,90", desc: "Torre de Chopp Pilsen Germânia" },
        { nome: "Torre Chopp Vinho 3,5L", preco: "80,00", desc: "Torre de Chopp de Vinho Germânia" },
        { nome: "Caneca Chopp Pilsen", preco: "12,00", desc: "Caneca Germânia" },
        { nome: "Submarino", preco: "39,90", desc: "1lt de chopp + uma dose de stanheger" },
      ]
    },
    {
      categoria: "Doses & Drinks",
      itens: [
        { nome: "Jack Daniels", preco: "35,00", desc: "Dose Jack Daniels" },
        { nome: "Red Label", preco: "25,00", desc: "Dose Red Label" },
        { nome: "Absolut / Smirnoff", preco: "25,00", desc: "Dose de Vodka" },
        { nome: "Caipira (500ml)", preco: "35,00", desc: "Morango, Kiwi, Limão, Abacaxi ou Maracujá" },
        { nome: "Caipira (1L)", preco: "62,00", desc: "Caneca de 1 Litro - diversos sabores" },
        { nome: "Gin Tropical", preco: "20,00", desc: "Gin, Laranja e Hibisco (500ml)" },
        { nome: "Mojito / Pina Colada", preco: "35,00", desc: "Drinks Especiais da Casa" },
        { nome: "Combo Jack + 5 Red Bull", preco: "400,00", desc: "Combo promocional" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6 pb-32 flex flex-col items-center overflow-x-hidden">
      
      <div className="w-full max-w-md">
        <header className="mt-8 mb-6">
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">Cardápio Completo</h1>
          <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-[0.3em] mt-2 italic">Cousins Lounge Bar</p>
        </header>

        {/* NAVEGAÇÃO DE CATEGORIAS (SCROLL LATERAL) */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-8 py-2 sticky top-0 bg-black z-40 border-b border-white/5">
          {menu.map((cat) => (
            <button
              key={cat.categoria}
              onClick={() => setCategoriaAtiva(cat.categoria)}
              className={`whitespace-nowrap px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                categoriaAtiva === cat.categoria 
                ? 'bg-yellow-600 text-black shadow-[0_0_20px_rgba(202,138,4,0.4)]' 
                : 'bg-zinc-900 text-zinc-500 border border-white/5'
              }`}
            >
              {cat.categoria}
            </button>
          ))}
        </div>

        {/* LISTAGEM DINÂMICA DOS ITENS */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {menu.find(c => c.categoria === categoriaAtiva)?.itens.map((item, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/40 border border-white/5 p-6 rounded-[2.5rem] flex justify-between items-center group active:scale-95 transition-all"
            >
              <div className="flex-1 pr-4">
                <h4 className="font-black uppercase italic text-lg tracking-tight leading-none mb-1 group-hover:text-yellow-500 transition-colors">
                  {item.nome}
                </h4>
                <p className="text-[10px] text-zinc-500 font-bold uppercase leading-tight mb-3">
                  {item.desc}
                </p>
                <span className="text-2xl font-black text-yellow-500 tracking-tighter">
                  R$ {item.preco}
                </span>
              </div>
              <div className="bg-zinc-800 p-3 rounded-full flex-shrink-0 group-hover:bg-yellow-600 group-hover:text-black transition-all">
                <ChevronRight size={18} />
              </div>
            </div>
          ))}
        </div>

        {/* MENSAGEM DE FIDELIDADE AO FINAL */}
        <div className="mt-12 bg-yellow-600/5 border border-yellow-600/10 p-8 rounded-[3rem] text-center">
          <Award className="mx-auto mb-3 text-yellow-600" size={32} />
          <p className="text-[10px] text-yellow-500 font-black uppercase tracking-widest leading-relaxed">
            Consuma no Cousins e acumule moedas <br /> para o seu Ranking!
          </p>
        </div>
      </div>

    </main>
  );
}