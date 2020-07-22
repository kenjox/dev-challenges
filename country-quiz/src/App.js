import React, { useState, useEffect } from 'react';

import Question from './components/Question';

import { ReactComponent as AdventureIcon } from './undraw_adventure.svg';
import { ReactComponent as WinnerIcon } from './undraw_winners.svg';
import './App.css';

const REST_COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all';

function App() {
  const localStore = JSON.parse(window.localStorage.getItem('questions')) || [];
  const [question, setQuestion] = useState({});
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  // Fetch countries from rest api
  const getCountries = async () => {
    const resp = await fetch(REST_COUNTRIES_URL);
    const jsonResponse = await resp.json();
    const countriesArray = jsonResponse.map(({ name, capital, flag }) => {
      return {
        name,
        capital,
        flag,
      };
    });

    return countriesArray;
  };

  // Gets subset random countries from collection
  const getRandomCountries = (data, size) => {
    const results = [];
    for (let i = 0; i < size; i++) {
      results.push(data[Math.floor(Math.random() * data.length)]);
    }
    return results;
  };

  // Format countries fetched into quiz api
  const createQuestionsAPI = async () => {
    const data = await getCountries();

    const quiz = data.map((country) => {
      const options = getRandomCountries(data, 3).map((c) => c.name);
      options.push(country.name);

      return {
        question: `${country.capital} is the capital of `,
        answer: country.name,
        options, // TODO: fix shuffle
      };
    });

    return quiz;
  };

  const saveQuizApiToLocalStore = async (data) => {
    const quiz = await createQuestionsAPI();
    window.localStorage.setItem('questions', JSON.stringify(quiz, null, 2));
  };

  const randomQuestion =
    localStore[Math.floor(Math.random() * localStore.length)];

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
        return (
          <Question
            question={question}
            callback={handleSelectedChoice}
            next={nextStep}
          />
        );
      case 2:
        return (
          <Question
            question={question}
            callback={handleSelectedChoice}
            next={nextStep}
          />
        );
      case 3:
        return (
          <Question
            question={question}
            callback={handleSelectedChoice}
            next={nextStep}
          />
        );
      case 4:
        return (
          <Question
            question={question}
            callback={handleSelectedChoice}
            next={nextStep}
          />
        );
      case 5:
        return (
          <>
            <div className="choices">
              <div id="winner-icon">
                <WinnerIcon />
              </div>
              <h2>Results</h2>
              <p>
                You got <span>{score}/4</span> correct answers
              </p>

              <button onClick={retryAgain}>Try again</button>
            </div>
          </>
        );
    }
  };
  useEffect(() => {
    //Only make http call if nothing in localStorage
    if (localStore.length < 1) {
      saveQuizApiToLocalStore();
    }
  }, []);

  useEffect(() => {
    setQuestion(randomQuestion);
  }, [step]);

  return (
    <>
      <div className="container">
        <header id="main-header">
          <h1>COUNTRY QUIZ</h1>
        </header>
        <div className="questions-wrapper">
          {step !== 5 && (
            <div className="adventure-icon">
              <AdventureIcon />
            </div>
          )}
          {renderQuestion()}
        </div>
      </div>
      <footer>
        <h2>Kennedy Otis @ DevChallenges.io</h2>
      </footer>
    </>
  );
}

export default App;
