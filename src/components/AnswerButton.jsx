import React from 'react';

export default function AnswerButton({
  answerText,
  correctChoice,
  choice,
  onAnswerButtonClicked,
  shouldShowCorrectAnswer,
}) {

  return (
    <div 
      className="button" 
      onClick={() => onAnswerButtonClicked()}
    >
      {answerText}
    </div>
  );
}