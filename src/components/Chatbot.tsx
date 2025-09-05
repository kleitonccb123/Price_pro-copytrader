import  { MessageCircle, X, Instagram } from 'lucide-react'; 
import { useState } from 'react';

interface ChatbotProps {
  onQuizClick: () => void;
}

export default function Chatbot({ onQuizClick }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);

  const quickReplies = [
    {
      question: "O que é Copy Trader?",
      answer: "Sistema que replica minhas operações na sua conta com risco ajustável."
    },
    {
      question: "Quanto investir?",
      answer: "O valor inicial depende do seu perfil; ajuste o risco."
    },
    {
      question: "Como configuro o risco?",
      answer: "Perfis: conservador, moderado, agressivo (ajustável a qualquer momento)."
    },
    {
      question: "Posso parar quando quiser?",
      answer: "Você tem controle total: pausar/ajustar/encerrar."
    }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[var(--primary)] hover:bg-[var(--primary-2)] rounded-full flex items-center justify-center shadow-lg transition-all z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[calc(100vw-3rem)] glass p-6 z-50">
          <h3 className="font-semibold mb-4">Como posso ajudar?</h3>
          
          <div className="space-y-3 mb-4">
            {quickReplies.map((reply, i) => (
              <div key={i}>
                <button className="text-left text-sm text-[var(--primary)] hover:underline mb-1">
                  {reply.question}
                </button>
                <p className="text-xs text-[var(--muted)] mb-2">{reply.answer}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <button 
              onClick={onQuizClick}
              className="btn-primary w-full text-sm py-2"
            >
              Quer ver na prática? ➜ Fazer Quiz
            </button>
            
            <div className="grid grid-cols-2 gap-2">
              <a 
                href="https://www.instagram.com/traderpriceforex/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs py-2 flex items-center justify-center space-x-1"
              >
                <Instagram size={14} />
                <span>Instagram</span>
              </a>
              
              <button 
                onClick={onQuizClick}
                className="btn-ghost text-xs py-2"
              >
                Grupo WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
 