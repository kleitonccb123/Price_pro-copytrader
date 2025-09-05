export  default function Footer() { 
  return (
    <footer className="py-12 px-6 border-t border-[var(--divider)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="font-bold text-xl mb-4 md:mb-0">Trader Price</div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-[var(--muted)] hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-[var(--muted)] hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-[var(--muted)] hover:text-white transition-colors">
              Suporte
            </a>
          </div>
        </div>
        
        <div className="text-center text-sm text-[var(--muted)]">
          <p>
            Copy Trader envolve risco. Resultados passados não garantem resultados futuros. 
            Você mantém controle total da sua conta e do fator de risco. Invista com responsabilidade.
          </p>
        </div>
      </div>
    </footer>
  );
}
 