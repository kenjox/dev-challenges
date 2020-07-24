import React from 'react';
import PropTypes from 'prop-types';

import MultipleChoices from './MultipleChoices';

const createQuestion = (data) => {
  console.log({ data });
  let quizText = '';

  if (data.type === 'flag') {
    quizText = 'Which country does this flag belong to';
  }

  if (data.type === 'capital') {
    quizText = `${data.capital} is the capital of`;
  }

  return quizText;
};

const Question = ({ data, callback }) => {
  const isCapital = data.type === 'capital';
  return (
    <div className={`question ${isCapital ? 'capital' : ''}`}>
      <h2 className="question__title">{createQuestion(data)}</h2>
      {data.options && (
        <MultipleChoices choices={data.options} callback={callback} />
      )}
    </div>
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
