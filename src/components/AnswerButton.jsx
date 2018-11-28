import React from 'react';

export default function AnswerButton({
  answerText,
  correctChoice,
  choice,
  onAnswerButtonClicked,
  shouldShowCorrectAnswer,
}) {
  let display;
  if (shouldShowCorrectAnswer && correctChoice === choice) {
    display = "Correct!"
  } else if (shouldShowCorrectAnswer && correctChoice !== choice ) {
    display = "Nope"
  } else {
    display = answerText;
  }
  return (
    <div 
      className="button" 
      onClick={() => onAnswerButtonClicked()}
    >
      {display}
    </div>
  );
}