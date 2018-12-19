import React from 'react';
import QuestionText from './QuestionText';
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
    <div className="question">
      <QuestionText
        questionText={question.question_text}
        shouldShowCorrectAnswer={shouldShowCorrectAnswer}
        correctAnswer={question.choices[question.correct_choice_index]}
      />
      <ResetButton 
        shouldShowResetButton={shouldShowResetButton}
        onResetButtonClicked={onResetButtonClicked}
      />
      <div className="buttons">
        <AnswerButton
          answerText={question.choices[0]}
          onAnswerButtonClicked={onAnswerButtonClicked}
        />
        <AnswerButton
          answerText={question.choices[1]}
          onAnswerButtonClicked={onAnswerButtonClicked}
        />
        <AnswerButton
          answerText={question.choices[2]}
          onAnswerButtonClicked={onAnswerButtonClicked}
        />
        <AnswerButton
          answerText={question.choices[3]}
          onAnswerButtonClicked={onAnswerButtonClicked}
        />
      </div>
    </div>
  );
}