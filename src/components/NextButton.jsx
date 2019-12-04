import React from 'react';

export default function NextButton({
  onResetButtonClicked,
  shouldShowNextButton,
}) {
  if(!shouldNextResetButton){
    return null;
  }
  return (
    <div
      className="next-button"
      onClick={onNextButtonClicked}
    >
      Next Question
    </div>
  );
}
