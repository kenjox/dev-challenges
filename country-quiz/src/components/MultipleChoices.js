import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

const LETTERS = ['A', 'B', 'C', 'D'];

const MultipleChoices = ({ choices, callback, answer, isCorrect }) => {
  console.log(isCorrect);
  return (
    <div className="choices">
      {choices.length > 0
        ? choices.map((choice, index) => (
            <div
              key={`${choice}-${index}`}
              className={`choices__item`}
              onClick={(e) => callback(choice, answer)}
            >
              <span className="choices__item__letter">{LETTERS[index]}</span>
              <span className="choices__item__text">{choice}</span>
              {isCorrect && (
                <span className="choices__item__icon">
                  {isCorrect ? (
                    <Icon className="choice__icon">check_circle</Icon>
                  ) : (
                    <Icon className="choice__icon">cancel_circle</Icon>
                  )}
                </span>
              )}
            </div>
          ))
        : null}
    </div>
  );
};

MultipleChoices.propTypes = {
  choices: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired,
};

export default MultipleChoices;
