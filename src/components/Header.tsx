import  { Menu, X } from 'lucide-react'; 
import { useState } from 'react';

interface HeaderProps {
  onQuizClick: () => void;
}

export default function Header({ onQuizClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-[var(--divider)]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-white">Trader Price</div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('about')} className="text-[var(--muted)] hover:text-white transition-colors">
              Quem sou eu
            </button>
            <button onClick={() => scrollTo('how-it-works')} className="text-[var(--muted)] hover:text-white transition-colors">
              Como funciona
            </button>
            <button onClick={() => scrollTo('metrics')} className="text-[var(--muted)] hover:text-white transition-colors">
              Métricas
            </button>
            <button onClick={() => scrollTo('testimonials')} className="text-[var(--muted)] hover:text-white transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollTo('faq')} className="text-[var(--muted)] hover:text-white transition-colors">
              Dúvidas
            </button>
            <button onClick={onQuizClick} className="btn-primary">
              Acessar Copy Trader Agora
            </button>
          </nav>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollTo('about')} className="block text-[var(--muted)] hover:text-white transition-colors">
              Quem sou eu
            </button>
            <button onClick={() => scrollTo('how-it-works')} className="block text-[var(--muted)] hover:text-white transition-colors">
              Como funciona
            </button>
            <button onClick={() => scrollTo('metrics')} className="block text-[var(--muted)] hover:text-white transition-colors">
              Métricas
            </button>
            <button onClick={() => scrollTo('testimonials')} className="block text-[var(--muted)] hover:text-white transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollTo('faq')} className="block text-[var(--muted)] hover:text-white transition-colors">
              Dúvidas
            </button>
            <button onClick={onQuizClick} className="btn-primary w-full">
              Acessar Copy Trader Agora
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
 