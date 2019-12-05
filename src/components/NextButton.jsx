import React from 'react';

export default function NextButton({
  onNextButtonClicked,
  shouldShowNextButton,
}) {
  if(!shouldShowNextButton){
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
