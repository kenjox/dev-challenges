import React from 'react';

const CHOICE_LETTERS = ['A', 'B', 'C', 'D'];

const Question = ({ question, callback, next }) => {
  return (
    <>
      <h2>{question.question}</h2>
      {question.options && (
        <div>
          {question.options.map((option, index) => (
            <div
              key={option}
              className="choice"
              onClick={(e) => callback(e, option)}
            >
              <div className="choice-symbol">{CHOICE_LETTERS[index]}</div>
              <p className="choice-text">{option}</p>
            </div>
          ))}
        </div>
      )}
      <div className="next" onClick={next}>
        <span>Next</span>
      </div>
    </>
  );
};

export default Question;
