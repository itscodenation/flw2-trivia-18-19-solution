import React from 'react';
import QuestionStem from './QuestionStem';
import AnswerButton from './AnswerButton';
import ResetButton from './ResetButton';

export default function Question({
  question,
  shouldShowCorrectAnswer,
  shouldShowResetButton,
  onResetButtonClicked,
  onAnswerButtonClicked,
}) {
  if (!question){
    return null;
  }
  return (
    <div className="question">
      <div className="questionStem">
        <QuestionStem
          questionStem={question.questionStem}
        />
      </div>
      <div>
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