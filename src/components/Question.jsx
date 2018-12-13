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
        questionStem={question.question_text}
      />
      <ResetButton 
        shouldShowResetButton={shouldShowResetButton}
        onResetButtonClicked={onResetButtonClicked}
      />
      <div className="buttons">
        <AnswerButton
          answerText={question.choices[0]}
          choice={0}
          correctChoice={question.correct_choice}
          shouldShowCorrectAnswer={shouldShowCorrectAnswer}
          onAnswerButtonClicked={onAnswerButtonClicked}
        />
        <AnswerButton
          answerText={question.choices[1]}
          choice={1}
          correctChoice={question.correct_choice}
          shouldShowCorrectAnswer={shouldShowCorrectAnswer}
          onAnswerButtonClicked={onAnswerButtonClicked}
        />
        <AnswerButton
          answerText={question.choices[2]}
          choice={2}
          correctChoice={question.correct_choice}
          shouldShowCorrectAnswer={shouldShowCorrectAnswer}
          onAnswerButtonClicked={onAnswerButtonClicked}
        />
        <AnswerButton
          answerText={question.choices[3]}
          choice={3}
          correctChoice={question.correct_choice}
          shouldShowCorrectAnswer={shouldShowCorrectAnswer}
          onAnswerButtonClicked={onAnswerButtonClicked}
        />
      </div>
    </div>
  );
}