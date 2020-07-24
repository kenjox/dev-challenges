import React, { useState, useEffect } from 'react';

import { init } from './utils';

import Question from './components/Question';
import Results from './components/Results';

import { ReactComponent as AdventureIcon } from './undraw_adventure.svg';

import './App.css';

function App() {
  const [question, setQuestion] = useState({});
  const [countries, setCountries] = useState([]);
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1);

  const randomQuestion = (data) =>
    data[Math.floor(Math.random() * data.length)];

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSelectedChoice = (event, choice) => {
    event.persist();

    if (question.answer === choice) {
      setScore(score + 1);
    }
  };

  const retryAgain = () => {
    setScore(0);
    setStep(1);
  };

  const renderQuestion = () => {
    switch (step) {
      case 1:
        return <Question data={question} callback={handleSelectedChoice} />;
      case 2:
        return <Question data={question} callback={handleSelectedChoice} />;
      case 3:
        return <Question data={question} callback={handleSelectedChoice} />;
      case 4:
        return <Question data={question} callback={handleSelectedChoice} />;
      case 5:
        return <Question data={question} callback={handleSelectedChoice} />;
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
    <div className="container">
      <h1 id="header__title">COUNTRY QUIZ</h1>
      <div className="panel">
        {Object.keys(question).length ? (
          <div className="panel__icon">
            {question.type === 'flag' && step !== 6 && (
              <div className="flag">
                <img src={question.flag} alt="country flag icon" />
              </div>
            )}
            {step !== 6 && (
              <div className="adventure">
                <AdventureIcon />
              </div>
            )}
          </div>
        ) : (
          <div className="loader"></div>
        )}
        {renderQuestion()}
        {step !== 6 && (
          <button className="next__button" onClick={nextStep}>
            Next
          </button>
        )}
      </div>
      <footer>
        <h2>Kennedy Otis@DevChallenges.io</h2>
      </footer>
    </div>
  );
}

export default App;
