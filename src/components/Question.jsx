import React, { Component } from 'react';
// import components
import QuestionText from './QuestionText';
import ResetButton from './ResetButton';
import AnswerButton from './AnswerButton';

class Question extends Component {
  
  render() {
    return (
      <div className="question">
        <QuestionText 
          questionText={this.props.questionText}
        />
        <ResetButton 
          resetButtonClicked={this.props.resetButtonClicked}
        />

        <div className="buttons">
          <AnswerButton 
            answerChoice={this.props.answerChoiceOne}
          />
          <AnswerButton 
            answerChoice={this.props.answerChoiceTwo}
          />
          <AnswerButton 
            answerChoice={this.props.answerChoiceThree}
          />
          <AnswerButton 
            answerChoice={this.props.answerChoiceFour}
          />
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