import  Header from './components/Header';  
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Metrics from './components/Metrics';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Quiz from './components/Quiz';
import { useState } from 'react';

function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleQuizComplete = () => {
    setQuizCompleted(true);
    setShowQuiz(false);
  };

  return (
    <div className="min-h-screen">
      <Header onQuizClick={() => setShowQuiz(true)} />
      <Hero onQuizClick={() => setShowQuiz(true)} />
      <About />
      <HowItWorks />
      <Metrics />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <Chatbot onQuizClick={() => setShowQuiz(true)} />
      {showQuiz && (
        <Quiz 
          onComplete={handleQuizComplete}
          onClose={() => setShowQuiz(false)}
        />
      )}
    </div>
  );
}

export default App;
 