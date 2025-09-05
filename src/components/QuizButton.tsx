import React, { useState } from 'react';
import Quiz from './Quiz';
const QuizButton = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  return <div>

      
      {showQuiz && <Quiz onClose={() => setShowQuiz(false)} />}
    </div>;
};
export default QuizButton;