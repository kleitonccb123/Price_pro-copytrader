import  { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
   const testimonials = [
    {
      image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/7b6a8c76-1c7a-4744-f8c8-1324911a3c00/public",
      text: "Lucro consistente todos os dias! As operações são replicadas perfeitamente e o suporte é excepcional. Já recuperei todo meu investimento inicial.",
      author: "Diego - Aluno Copy",
      location: "Resultado Real"
    },
    {
      image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/015a5bd9-c8d3-4807-1455-66d1dd2ab300/public",
      text: "Meta batida novamente! O PricePro FX Copy Trade está superando todas as expectativas. Lucro de +35.67 em mais uma semana finalizada com sucesso!",
      author: "Gabriel Copy - Grupo VIP",
      location: "Resultado Semanal"
    },
       {
      image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/49318504-318b-40ae-7888-3a28e4e39c00/public",
      text: "Copy espetacular, surreal, já testei vários copys por aí e perdi muita grana, nunca imaginava encontrar esse Copy Price PRO fx, até o momento está sendo o melhor de todos que passei sem dúvidas, bora ganhar dinheiro sem perder tempo 🚀🚀📊💰",
      author: "Cliente Satisfeito",
      location: "Grupo WhatsApp"
    },
    {
      image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/44bfa5dc-a144-4805-34f8-41c34cba1000/public",
      text: "Passando para parabenizar o trabalho do Price copy trade, já perdi grana com outros que prometeram ganhos e não cumpriram. Até o momento o Price está sendo ótimo. Está valendo muito a pena!! Bom dia meu amigão, muito obrigado pelas palavras e bora pra cima fechar mais uma semana com sucesso 💰💰💰",
      author: "Turma - Copy Trader",
      location: "WhatsApp VIP"
    } 
  ]; 

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">Depoimentos Reais</h2>
        
        <div className="relative animate-fade-in-up">
          <div className="glass p-8 text-center min-h-[500px] flex flex-col justify-center">
            <div className="mb-6">
              <img 
                src={testimonials[current].image}
                alt={`Depoimento de ${testimonials[current].author}`}
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg border border-[var(--divider)]"
              />
            </div>
            <div className="text-6xl text-[var(--primary)] mb-4">"</div>
            <p className="text-lg mb-6 italic max-w-2xl mx-auto text-[var(--muted)]">{testimonials[current].text}</p>
            <div>
              <div className="font-semibold text-white">{testimonials[current].author}</div>
              <div className="text-[var(--muted)] text-sm">{testimonials[current].location}</div>
            </div>
          </div>

          {testimonials.length > 1 && (
            <>
              <button 
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 glass p-3 rounded-full hover:bg-[var(--primary)] transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button 
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 glass p-3 rounded-full hover:bg-[var(--primary)] transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {testimonials.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === current ? 'bg-[var(--primary)]' : 'bg-[var(--divider)]'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://chat.whatsapp.com/HKD5w1WUOZ4LLt3jfWH1lO?mode=ems_copy_c" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-primary text-white font-bold text-lg px-10 py-5 rounded-xl border-0 inline-block animate-pulse-soft conversion-glow"
          >
            💬 Ver Mais Resultados no Grupo
          </a>
        </div>
      </div>
    </section>
  );
}
 