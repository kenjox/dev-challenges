import React from 'react';
import PropTypes from 'prop-types';

import MultipleChoices from './MultipleChoices';
import QuizAppIcon from '../images/undraw_adventure.svg';

const createQuestion = (data) => {
  let quizText = '';

  if (data.type === 'flag') {
    quizText = 'Which country does this flag belong to';
  }

  if (data.type === 'capital') {
    quizText = `${data.capital} is the capital city of`;
  }

  return quizText;
};

const Question = ({ data, callback, nextStep, isCorrect }) => {
  return (
    <section className="panel-wrapper">
      <div className="icon">
        <div className="panel-icon">
          <img
            src={QuizAppIcon}
            alt="quiz
          app"
          />
        </div>

        {data.type === 'flag' ? (
          <div className="country-flag">
            <img src={data.flag} alt="Country flag" />
          </div>
        ) : null}
      </div>
      <p className="quiz-text">{createQuestion(data)}</p>
      {data.options && (
        <MultipleChoices
          answer={data.answer}
          choices={data.options}
          callback={callback}
          isCorrect={isCorrect}
        />
      )}
      <div className="button next end" onClick={nextStep}>
        <span>Next</span>
      </div>
    </section>
  );
};

Question.propTypes = {
  data: PropTypes.shape({
    answer: PropTypes.string,
    question: PropTypes.string,
    options: PropTypes.array,
  }),
};

export default Question;
