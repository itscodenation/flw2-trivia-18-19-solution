import React, { Component } from 'react';
// import components
import QuestionStem from './QuestionStem';
import ResetButton from './ResetButton';
import AnswerButton from './AnswerButton';

class Question extends Component {
  
  render() {
    return (
      <div className="question">
        <QuestionStem 
          question={this.props.currentQuestion.question}
        />
        <ResetButton />
        <div className="buttons">
          <AnswerButton 
            answerChoice={this.props.currentQuestion.choices[0]}
          />
          <AnswerButton 
            answerChoice={this.props.currentQuestion.choices[1]}
          />
          <AnswerButton 
            answerChoice={this.props.currentQuestion.choices[2]}
          />
          <AnswerButton 
            answerChoice={this.props.currentQuestion.choices[3]}
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