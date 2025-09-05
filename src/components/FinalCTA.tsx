import  { Instagram } from 'lucide-react'; 

export default function FinalCTA() { 
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass p-12 animate-fade-in-up conversion-glow">
          <h2 className="text-5xl font-bold mb-4 animate-pulse-soft">
            🎯 Pronto para começar com método e transparência?
          </h2>
          
          <p className="text-xl text-[var(--muted)] mb-8">
            Mais de <strong className="text-green-400">+111%</strong> de retorno verificado esperando por você
          </p>
          
          <div className="space-y-6">
            <a 
              href="https://chat.whatsapp.com/HKD5w1WUOZ4LLt3jfWH1lO?mode=ems_copy_c"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary text-white font-bold text-2xl px-16 py-8 w-full block rounded-2xl border-0 hover:scale-105 transition-transform"
            >
              🚀 Acessar Copy Trader Agora - GRÁTIS
            </a>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-green-400">
              <span>✅ Sem taxas de entrada</span>
              <span>✅ Suporte completo</span>
              <span>✅ Acesso imediato</span>
            </div>
            
            <a 
              href="https://www.instagram.com/traderpriceforex/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-white transition-colors inline-flex items-center space-x-2"
            >
              <Instagram size={16} />
              <span>@traderpriceforex</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 
 