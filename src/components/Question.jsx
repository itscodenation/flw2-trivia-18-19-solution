import React, { Component } from 'react';
// import components
import QuestionStem from './QuestionStem';
import ResetButton from './ResetButton';
import AnswerButton from './AnswerButton';

class Question extends Component {
  
  render() {
    return (
      <div className="question">
        <QuestionStem />
        <ResetButton />
        <div className="buttons">
          <AnswerButton />
          <AnswerButton />
          <AnswerButton />
          <AnswerButton />
        </div>
    </div>
    );
  }
}

export default Question;




// import React from 'react';
// // import your components here


// export default function Question() {
//   return (
//     <div className="question">
//       Question Display
//       {/* Add QuestionStem */}
//       {/* Add Reset Button */}
//       <div className="buttons">
//         {/* Add Buttons */}
//       </div>
//     </div>
//   );
// }