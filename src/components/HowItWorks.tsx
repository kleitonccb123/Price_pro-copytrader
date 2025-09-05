export  default function HowItWorks() { 
  const steps = [
    {
      number: '1',
      title: 'Tenha conta em corretora compatível',
      description: 'Verifique as corretoras compatíveis com nosso sistema.'
    },
    {
      number: '2', 
      title: 'Conecte sua conta ao sistema de cópia',
      description: 'Tutorial simples para configurar a conexão.'
    },
    {
      number: '3',
      title: 'Escolha perfil de risco',
      description: 'Conservador, moderado ou agressivo.'
    },
    {
      number: '4',
      title: 'Suas operações replicam minhas entradas',
      description: 'Em tempo real, automaticamente.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Como funciona o PricePro FX Copy Trade</h2>
        <p className="text-xl text-[var(--muted)] text-center mb-16">
          Conecte sua conta, defina o risco e copie minhas operações.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="glass p-6 text-center">
              <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="font-semibold mb-3">{step.title}</h3>
              <p className="text-[var(--muted)] text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="glass p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-center">Transparência Total</h3>
          <p className="text-[var(--muted)] text-center">
            Você mantém 100% do controle da sua conta. Pode pausar, ajustar risco ou encerrar quando quiser.
          </p>
        </div>

               <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.querySelector('iframe')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-ghost"
          >
            📹 Assistir VSL completa
          </button>
          <button onClick={() => window.open('https://chat.whatsapp.com/HKD5w1WUOZ4LLt3jfWH1lO?mode=ems_copy_c', '_blank')} className="cta-primary text-white font-bold px-8 py-4 rounded-xl border-0">
            🚀 Acessar Copy Trader Agora
          </button>
        </div> 
      </div>
    </section>
  );
}
 