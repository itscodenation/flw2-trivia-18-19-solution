import React from 'react';

export default function QuestionStem({questionText, shouldShowCorrectAnswer, correctAnswer}) {
  let display;
  if(shouldShowCorrectAnswer){
    display = "The correct answer is " + correctAnswer;
  } else {
    display = questionText;
  }

  return (
    <div className="questionStem">
      {display}
    </div>
  );
}