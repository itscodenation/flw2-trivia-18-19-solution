import React from 'react';
import QuestionStem from './QuestionStem';
import AnswerButton from './AnswerButton';
import ResetButton from './ResetButton';
import Timer from './Timer';
import Counter from './Counter';


export default function Question({
  correctGuesses,
  question,
  seconds,
  shouldShowCorrectAnswer,
  shouldShowResetButton,
  onResetButtonClicked,
  onAnswerButtonClicked,
}) {
  if (!question){
    return null;
  }
  return (
    <div className="questionDisplay">
      <div className="questionStem">
        <QuestionStem
          questionStem={question.questionStem}
        />
      </div>
      <div className="timer">
        <Timer
          seconds={seconds}
        />
      </div>
      <div className="counter">
        <Counter
          correctGuesses={correctGuesses}
        />
      </div>
      <div className="reset_button">
        <ResetButton 
          shouldShowResetButton={shouldShowResetButton}
          onResetButtonClicked={onResetButtonClicked}
        />
      </div>
      <div className="buttons">
        {
          question.answerChoices.map(answerChoice => {
            return (
              <AnswerButton
                answerChoice={answerChoice}
                shouldShowCorrectAnswer={shouldShowCorrectAnswer}
                onAnswerButtonClicked={onAnswerButtonClicked}
                key={answerChoice.answer}
              />
            )
          })
        }
      </div>
    </div>
  );
}