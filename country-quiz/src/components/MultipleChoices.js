import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

const LETTERS = ['A', 'B', 'C', 'D'];

const MultipleChoices = ({ choices, callback }) => {
  return (
    <ul className="choices">
      {choices.length &&
        choices.map((choice, index) => (
          <li
            key={`${choice}-${index}`}
            className="choice"
            onClick={(e) => callback(e, choice)}
          >
            <div className="choice__letter">{LETTERS[index]}</div>
            <p className="choice__text">{choice}</p>
            <Icon className="choice__icon">check_circle</Icon>
          </li>
        ))}
    </ul>
  );
};

MultipleChoices.propTypes = {
  choices: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired,
};

export default MultipleChoices;
