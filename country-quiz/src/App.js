import React, { useState, useEffect } from 'react';

import { init } from './utils';

import Question from './components/Question';
import Results from './components/Results';

import './App.css';

function App() {
  const [question, setQuestion] = useState({});
  const [countries, setCountries] = useState([]);
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1);
  const [isCorrect, setIsCorrect] = useState(null);

  const randomQuestion = (data) =>
    data[Math.floor(Math.random() * data.length)];

  const nextStep = () => {
    setIsCorrect(null);
    setStep(step + 1);
  };

  const handleSelectedChoice = (choice, answer) => {
    if (answer === choice) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const retryAgain = () => {
    setScore(0);
    setStep(1);
  };

  const renderQuestion = () => {
    switch (step) {
      case 1:
        return (
          <Question
            data={question}
            callback={handleSelectedChoice}
            nextStep={nextStep}
            isCorrect={isCorrect}
          />
        );
      case 2:
        return (
          <Question
            data={question}
            callback={handleSelectedChoice}
            nextStep={nextStep}
            isCorrect={isCorrect}
          />
        );
      case 3:
        return (
          <Question
            data={question}
            callback={handleSelectedChoice}
            nextStep={nextStep}
            isCorrect={isCorrect}
          />
        );
      case 4:
        return (
          <Question
            data={question}
            callback={handleSelectedChoice}
            nextStep={nextStep}
            isCorrect={isCorrect}
          />
        );
      case 5:
        return (
          <Question
            data={question}
            callback={handleSelectedChoice}
            nextStep={nextStep}
            isCorrect={isCorrect}
          />
        );
      default:
        return <Results score={score} callback={retryAgain} />;
    }
  };

  useEffect(() => {
    async function getQuestions() {
      const data = await init();
      setCountries(data);
      setQuestion(randomQuestion(data));
    }
    getQuestions();
  }, []);

  useEffect(() => {
    if (countries.length) {
      setQuestion(randomQuestion(countries));
    }
  }, [step]);

  return (
    <>
      <div className="container">
        <header>
          <h1>country quiz</h1>
        </header>
        {renderQuestion()}
      </div>

      <footer className="container">
        <p>Kennedy Otis &copy;DevChallenges.io</p>
      </footer>
    </>
  );
}

export default App;
