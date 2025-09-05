import  { Check, Instagram } from 'lucide-react'; 

interface HeroProps {
  onQuizClick: () => void;
}

export  default function Hero({ onQuizClick }: HeroProps) { 
  return (
    <section className="pt-32 pb-20 px-6 relative">
      <div className="hero-bg"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2 animate-slide-in-left">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              Copie minhas operações com gestão de risco e total transparência.
            </h1>
            <p className="text-xl text-[var(--muted)] mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Processo, dados e disciplina. Sem promessas irreais.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'Entradas replicadas em tempo real',
                'Risco ajustável ao seu perfil',
                'Métricas abertas e acompanhamento',
                'Suporte em grupo exclusivo'
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center space-x-3 animate-fade-in-up"
                  style={{animationDelay: `${0.4 + i * 0.1}s`}}
                >
                  <Check className="text-green-400 flex-shrink-0 animate-pulse-soft" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <button 
                onClick={onQuizClick} 
                className="cta-primary text-white font-bold text-lg px-10 py-5 rounded-xl animate-pulse-soft border-0"
              >
                🚀 Acessar Copy Trader Agora
              </button>
              <a 
                href="https://www.instagram.com/traderpriceforex/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center space-x-2"
              >
                <Instagram size={20} />
                <span>@traderpriceforex</span>
              </a>
            </div>

            <div className="mt-8 p-4 bg-green-900/20 border border-green-400/30 rounded-lg animate-fade-in-up conversion-glow" style={{animationDelay: '1s'}}>
              <p className="text-green-400 text-sm flex items-center space-x-2">
                <span>✅</span>
                <span><strong>+111,99%</strong> de ganho total verificado no myfxbook</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 animate-slide-in-right">
            <div className="glass p-8 animate-float">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                🎯 Como funciona o PricePro FX Copy Trade — por dentro do método
              </h3>
              <div className="aspect-video rounded-2xl overflow-hidden border-2 border-[var(--primary)]/30 shadow-2xl conversion-glow">
                <iframe
                  src="https://www.youtube.com/embed/WysyD-8d63w"
                  title="Como funciona o PricePro FX Copy Trade — por dentro do método"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              <div className="mt-6 text-center">
                <button 
                  onClick={onQuizClick}
                  className="cta-primary text-white font-bold px-8 py-3 rounded-lg border-0"
                >
                  💡 Quero Começar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
 