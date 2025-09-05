import  { Award, Shield, Users } from 'lucide-react'; 

export  default function About() { 
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">Quem sou eu</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass p-8 animate-slide-in-left">
            <img 
              src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/e893d7c3-9867-48e0-3b67-a34446fd8000/public"
              alt="Trader Price"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover animate-float"
            />
            <p className="text-lg leading-relaxed text-center">
              Trader Price — Trader Profissional, 29 anos, do Rio de Janeiro. De estagiário ganhando R$800 ao sucesso no mercado financeiro. Desenvolveu um método lucrativo em apenas 1 ano de estudo no mercado de forex e hoje soma 9 anos de mercado financeiro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-in-right">
            <div className="glass p-6 text-center hover:scale-105 transition-transform">
              <Award className="mx-auto mb-4 text-[var(--primary)] animate-pulse-soft" size={40} />
              <h3 className="font-semibold mb-2">9 anos de mercado</h3>
            </div>
            <div className="glass p-6 text-center hover:scale-105 transition-transform">
              <Shield className="mx-auto mb-4 text-[var(--primary)] animate-pulse-soft" size={40} />
              <h3 className="font-semibold mb-2">Gestão de risco</h3>
            </div>
            <div className="glass p-6 text-center hover:scale-105 transition-transform">
              <Users className="mx-auto mb-4 text-[var(--primary)] animate-pulse-soft" size={40} />
              <h3 className="font-semibold mb-2">Comunidade ativa no WhatsApp</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
 