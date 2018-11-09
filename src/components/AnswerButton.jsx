import React from 'react';

export default function AnswerButton({
  answerChoice,
  onAnswerButtonClicked,
  shouldShowCorrectAnswer,
}) {
  let display;
  if (shouldShowCorrectAnswer && answerChoice.isCorrect) {
    display = "Correct!"
  } else if (shouldShowCorrectAnswer && !answerChoice.isCorrect){
    display = "Nope :)"
  } else {
    display = answerChoice.answer;
  }

  return (
    <div 
      className="button" 
      onClick={() => onAnswerButtonClicked(answerChoice.isCorrect)}
    >
      {display}
    </div>
  );
}