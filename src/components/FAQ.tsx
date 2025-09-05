import  { ChevronDown } from 'lucide-react'; 
import { useState } from 'react';

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que é Copy Trader?",
      answer: "Tecnologia que replica minhas entradas na sua conta, com risco definido por você."
    },
    {
      question: "Quanto preciso para começar?",
      answer: "Depende da corretora e do seu perfil; ajuste o risco ao capital."
    },
    {
      question: "Quais são os riscos?",
      answer: "Todo investimento envolve risco. Usamos gestão, mas não há garantias."
    },
    {
      question: "Posso parar quando quiser?",
      answer: "Sim, controle total para pausar/ajustar/desconectar."
    },
    {
      question: "Como recebo suporte?",
      answer: "Pelo grupo do WhatsApp e Instagram @traderpriceforex."
    },
    {
      question: "Existem taxas?",
      answer: "Consulte nossa política de taxas/assinatura no grupo."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Dúvidas Frequentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass">
              <button
                onClick={() => setOpenItem(openItem === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[var(--glass)] transition-colors"
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown 
                  className={`transition-transform ${openItem === i ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              
              {openItem === i && (
                <div className="px-6 pb-6">
                  <p className="text-[var(--muted)]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 