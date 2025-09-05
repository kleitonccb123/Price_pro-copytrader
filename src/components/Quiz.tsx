import  { X, ChevronRight } from 'lucide-react'; 
import { useState } from 'react';

interface QuizProps {
  onComplete: () => void;
  onClose: () => void;
}

export default function Quiz({ onComplete, onClose }: QuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      question: "Qual seu nível de experiência no mercado financeiro?",
      options: [
        "Iniciante - nunca investi",
        "Básico - já investi em ações/fundos",
        "Intermediário - opero forex/day trade",
        "Avançado - trader experiente"
      ]
    },
    {
      question: "Qual valor pretende investir inicialmente?",
      options: [
        "Até R$ 1.000",
        "R$ 1.000 - R$ 5.000",
        "R$ 5.000 - R$ 20.000",
        "Acima de R$ 20.000"
      ]
    },
    {
      question: "Qual seu perfil de risco preferido?",
      options: [
        "Conservador - menor risco",
        "Moderado - risco equilibrado",
        "Agressivo - maior retorno",
        "Ainda não sei"
      ]
    },
    {
      question: "Quanto tempo pretende acompanhar as operações?",
      options: [
        "Apenas configurar e acompanhar resultados",
        "Acompanhar parcialmente",
        "Acompanhar diariamente",
        "Quero aprender e participar ativamente"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [step]: answer });
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Quiz completo - permitir acesso ao grupo
      onComplete();
      window.open('https://chat.whatsapp.com/HKD5w1WUOZ4LLt3jfWH1lO?mode=ems_copy_c', '_blank');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Avaliação de Perfil</h2>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-sm text-[var(--muted)]">
              Pergunta {step + 1} de {questions.length}
            </span>
          </div>
          
          <div className="w-full bg-[var(--divider)] rounded-full h-2 mb-6">
            <div 
              className="bg-[var(--primary)] h-2 rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>

          <h3 className="text-xl font-semibold mb-6">
            {questions[step].question}
          </h3>

          <div className="space-y-3">
            {questions[step].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                className="w-full p-4 text-left glass hover:bg-[var(--glass)] transition-all flex items-center justify-between group"
              >
                <span>{option}</span>
                <ChevronRight 
                  size={16} 
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </button>
            ))}
          </div>
        </div>

        {step === questions.length - 1 && (
                   <div className="mt-6 p-4 bg-green-900/20 border border-green-400/20 rounded-lg animate-pulse-soft conversion-glow">
            <p className="text-green-400 text-sm text-center font-semibold">
              🎉 Última pergunta! Após responder, você será direcionado ao grupo WhatsApp GRÁTIS.
            </p>
          </div> 
        )}
      </div>
    </div>
  );
}
 