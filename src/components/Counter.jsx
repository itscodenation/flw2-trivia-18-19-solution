import React from 'react';

export default function Counter({
    correctGuesses,
}) {
  return (
    <div>
      Correct: {correctGuesses}
    </div>
  );
}