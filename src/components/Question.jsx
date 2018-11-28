import React from 'react';
import QuestionStem from './QuestionStem';
import AnswerButton from './AnswerButton';
import ResetButton from './ResetButton';


export default function Question({
  question,
  seconds,
  shouldShowCorrectAnswer,
  shouldShowResetButton,
  onAnswerButtonClicked,
  onResetButtonClicked,
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
      <div className="resetButton">
        <ResetButton 
          shouldShowResetButton={shouldShowResetButton}
          onResetButtonClicked={onResetButtonClicked}
        />
      </div>
      <div className="buttons">
        <AnswerButton
          answerChoice={question.answerChoices[0]}
          shouldShowCorrectAnswer={shouldShowCorrectAnswer}
          onAnswerButtonClicked={onAnswerButtonClicked}
        />
        <AnswerButton
          answerChoice={question.answerChoices[1]}
          shouldShowCorrectAnswer={shouldShowCorrectAnswer}
          onAnswerButtonClicked={onAnswerButtonClicked}
        />
        <AnswerButton
          answerChoice={question.answerChoices[2]}
          shouldShowCorrectAnswer={shouldShowCorrectAnswer}
          onAnswerButtonClicked={onAnswerButtonClicked}
        />
        <AnswerButton
          answerChoice={question.answerChoices[3]}
          shouldShowCorrectAnswer={shouldShowCorrectAnswer}
          onAnswerButtonClicked={onAnswerButtonClicked}
        />
      </div>
    </div>
  );
}