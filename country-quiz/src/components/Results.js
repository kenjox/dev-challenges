import React from 'react';
import PropType from 'prop-types';

import { ReactComponent as TrophyIcon } from '../undraw_winners.svg';

const Results = ({ score, callback }) => {
  return (
    <div className="results">
      <div className="results__icon">
        <TrophyIcon />
      </div>
      <h2 id="results__title">Results</h2>
      <p id="results__text">
        You got <span id="results__score">{score}</span> correct answers
      </p>

      <button id="retryButton" onClick={callback}>
        {score < 5 ? 'Try again' : 'Reset'}
      </button>
    </div>
  );
};

Results.propType = {
  score: PropType.string.isRequired,
  callback: PropType.func.isRequired,
};

export default Results;
