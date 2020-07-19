import React, { useState, useEffect } from 'react';
import './App.css';

const REST_COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all';

function App() {
  const [countries, setCountries] = useState([]);

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
    setCountries(countriesArray);
  };

  const generateQuestion = () =>
    countries && countries[Math.floor(Math.random * countries.length)];

  useEffect(() => {
    //TODO: Check if the countries are in local storage first
    getCountries();
    if (countries.length) {
      const randomCountry = countries.length && generateQuestion();
      console.log(countries);
    }
  }, []);

  return (
    <div className="container">
      <header id="main-header">
        <h1>COUNTRY QUIZ</h1>
      </header>
      <div className="questions-wrapper">
        <h2>Nairobi is the capital city of ?</h2>
        <div className="choices">
          <div className="choice">
            <div className="choice-symbol">A</div>
            <p className="choice-text">Uganda</p>
          </div>
          <div className="choice">
            <div className="choice-symbol">B</div>
            <p className="choice-text">Uganda</p>
          </div>
          <div className="choice">
            <div className="choice-symbol">C</div>
            <p className="choice-text">Uganda</p>
          </div>
          <div className="choice">
            <div className="choice-symbol">D</div>
            <p className="choice-text">Uganda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
