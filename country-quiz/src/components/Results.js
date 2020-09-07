import React from 'react';
import PropType from 'prop-types';

import TrophyIcon from '../images/undraw_winners.svg';

const Results = ({ score, callback }) => {
  return (
    <section className="panel-wrapper">
      <div className="container">
        <div className="winner">
          <img src={TrophyIcon} alt="trophy icon" />
        </div>
        <div className="container">
          <h1 className="results-title">Results</h1>
          <p className="results-text">
            You got <span className="score">{score} </span>correct answers
          </p>
        </div>
        <div onClick={callback} className="button try-again">
          <span>Try again</span>
        </div>
      </div>
    </section>
  );
};

Results.propType = {
  score: PropType.string.isRequired,
  callback: PropType.func.isRequired,
};

export default Results;
