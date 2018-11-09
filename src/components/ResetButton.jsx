import React from 'react';

export default function ResetButton({
  onResetButtonClicked,
  shouldShowResetButton,
}) {
  if(!shouldShowResetButton){
    return null;
  }
  console.log(shouldShowResetButton)
  return (
    <div
      className="reset-button"
      onClick={onResetButtonClicked}
    >
      Reset
    </div>
  );
}