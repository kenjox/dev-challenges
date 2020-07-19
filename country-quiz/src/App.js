import React, { useState, useEffect } from 'react';
import './App.css';

const REST_COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all';
const CHOICE_LETTERS = ['A', 'B', 'C', 'D'];

const Question = ({ choices, callback, next }) => {
  return (
    <>
      <h2>Nairobi is the capital city of </h2>
      {choices.length && (
        <div className="choices">
          {choices.map((choice, index) => (
            <div key={choice} className="choice" onClick={callback}>
              <div className="choice-symbol">{CHOICE_LETTERS[index]}</div>
              <p className="choice-text">{choice}</p>
            </div>
          ))}
        </div>
      )}

      <div className="next" onClick={() => next()}>
        <span>Next</span>
      </div>
    </>
  );
};

function App() {
  const localStore = JSON.parse(window.localStorage.getItem('countries')) || [];
  const [countries, setCountries] = useState(localStore);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const generateQuestion = (data) =>
    data && data[Math.floor(Math.random() * data.length)];

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

    // Store in localStorage
    window.localStorage.setItem(
      'countries',
      JSON.stringify(countriesArray, null, 2)
    );
    setCountries(countriesArray);
  };

  const handleSelectedChoice = (event, choice) => {
    event.persist();
    console.log('Selected');
  };

  // Sample choices
  const choices = ['Napali', 'Kenya', 'Uganda', 'Tanzania'];

  const renderQuestion = () => {
    switch (step) {
      case 1:
        return (
          <Question
            choices={choices}
            callback={handleSelectedChoice}
            next={nextStep}
          />
        );
      case 2:
        return (
          <>
            <h1>Question 2</h1>
            <div className="next" onClick={nextStep}>
              <span>Next</span>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h1>Question 3</h1>
            <div className="next" onClick={nextStep}>
              <span>Next</span>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h1>Question 4</h1>
            <div className="next" onClick={nextStep}>
              <span>Next</span>
            </div>
          </>
        );
    }
  };
  console.log(step);
  useEffect(() => {
    //Only make http call if nothing in localStorage
    if (localStore.length < 1) {
      getCountries();
    }
  }, []);

  return (
    <div className="container">
      <header id="main-header">
        <h1>COUNTRY QUIZ</h1>
      </header>
      <div className="questions-wrapper">{renderQuestion()}</div>
    </div>
  );
}

export default App;
